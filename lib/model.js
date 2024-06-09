const tfjs = require("@tensorflow/tfjs-node");
const { Storage } = require("@google-cloud/storage");

const BUCKET_NAME = "talktales-model-bucket";
const FILE_NAME = "model/model.json";

const storage = new Storage({
    keyFilename: "service-accounts/talk-tales-project-storage.json",
});

async function getModelCompiled() {
    // Downloads the file into a buffer in memory.
    const contents = await storage
        .bucket(BUCKET_NAME)
        .file(FILE_NAME)
        .download();
    return contents;
}

async function loadModel() {
    // const modelFile = await getModelCompiled();
    return new Promise(async (resolve, reject) => {
        try {
            const model = await tfjs.loadLayersModel(
                "https://storage.googleapis.com/talktales-model-bucket/model/model.json"
            );

            console.log(model.summary());
            resolve(model);
        } catch (error) {
            reject(error);
        }
    });
}

// module.exports = {
//     loadModel,
// };
