const tfjs = require("@tensorflow/tfjs-node");
const { Storage } = require("@google-cloud/storage");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");
const axios = require("axios");
const BUCKET_NAME = "talktales-model-bucket";
const FILE_NAME = "model/model.json";

const storage = new Storage({});

const bucketName = "talktales-audio";
const bucket = storage.bucket(bucketName);

function generateUniqueFilename(originalName) {
    const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
    const randomString = crypto.randomBytes(6).toString("hex");
    const extension = originalName.split(".").pop();
    return `${timestamp}-${randomString}.${extension}`;
}

// Function to upload file to Cloud Storage
const uploadFileToGCS = (file, uniqueFilename) => {
    return new Promise((resolve, reject) => {
        const { path: tempFilePath } = file;
        const destination = `audio/${uniqueFilename}`;
        bucket.upload(tempFilePath, { destination }, (err, uploadedFile) => {
            if (err) {
                reject(err);
            } else {
                // Unlink the temporary file after upload
                fs.unlink(tempFilePath, (unlinkErr) => {
                    if (unlinkErr) {
                        console.error(
                            `Failed to delete local file: ${unlinkErr}`
                        );
                    }
                });
                resolve(uploadedFile);
            }
        });
    });
};

module.exports = {
    uploadFileToGCS,
    generateUniqueFilename,
};
