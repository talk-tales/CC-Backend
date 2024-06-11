const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");
const _ = require("lodash");
const wav = require("wav-decoder");
const axios = require("axios");

function decodePredictions(pred) {
    const vocab = "abcdefghijklmnopqrstuvwxyz' ";
    const numToCharDict = {};
    for (let idx = 0; idx < vocab.length; idx++) {
        numToCharDict[idx] = vocab[idx];
    }

    // Find the index of the maximum value for each prediction
    const predIndices = pred.map((array) => _.indexOf(array, _.max(array)));

    // Map indices to characters and join to form the transcription
    const transcription = predIndices.map((idx) => numToCharDict[idx]).join("");
    return transcription;
}

async function preprocessAudioFile(filePath) {
    const audioBuffer = fs.readFileSync(filePath);
    const audioData = await wav.decode(audioBuffer);

    // Squeeze and cast to float32
    const audio = tf.tensor(
        audioData.channelData[0],
        [audioData.channelData[0].length, 1],
        "float32"
    );

    // STFT parameters
    const frameLength = 256;
    const frameStep = 160;
    const fftLength = 384;

    // Compute STFT
    const spectrogram = tf.signal.stft(
        audio,
        frameLength,
        frameStep,
        fftLength
    );
    let absSpectrogram = tf.abs(spectrogram);

    // Apply power 0.5
    absSpectrogram = tf.pow(absSpectrogram, 0.5);

    // Normalize
    const means = tf.mean(absSpectrogram, 1, true);
    const stddevs = tf.sqrt(
        tf.mean(tf.square(absSpectrogram.sub(means)), 1, true)
    );
    const normalizedSpectrogram = absSpectrogram
        .sub(means)
        .div(stddevs.add(1e-10));

    return normalizedSpectrogram;
}

const predict = async (wavFilePath) => {
    console.log("preprocessing file");
    const spectrogram = await preprocessAudioFile(wavFilePath);
    const spectrogramData = spectrogram.expandDims(0).arraySync();

    console.log("hit endpoint serving " + process.env.TF_SERVING);
    const response = await axios.post(
        `${process.env.TF_SERVING}/v1/models/model3_saved_model:predict`,
        {
            instances: spectrogramData,
        }
    );
    fs.unlinkSync(wavFilePath);
    if (response.status === 200) {
        let decode = decodePredictions(response.data.predictions);
        console.log(decode);
    }
};

module.exports = {
    predict,
};
