const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const Response = require("../lib/response");
const prisma = require("../lib/prisma");
const convController = require("../controller/conversationController");
const { generateUniqueFilename, uploadFileToGCS } = require("../lib/model");

router.get("/:storyId", async (req, res) => {
    try {
        let id = parseInt(req.params.storyId);
        let addStoryLog = convController.addStoryLog({
            storyId: id,
            userId: req.user.id,
        });

        let dataConv = convController.getAllConversation(id);
        let promised = await Promise.all([addStoryLog, dataConv]);
        let returnedData = {
            storyLogId: promised[0],
            conversations: promised[1],
        };
        res.status(200).json(
            Response.make(
                true,
                "Berhasil mendapatkan conversation ID",
                returnedData
            )
        );
    } catch (err) {
        res.status(400).json(Response.make(false, err.message, null));
    }
});
router.post("/predict", upload.single("user_voice"), async (req, res) => {
    try {
        let storyLogId = parseInt(req.query.storyLogId);
        let storyConvId = parseInt(req.query.storyConvId);

        if (req.file && storyLogId && storyConvId) {
            let data = await convController.postUserConversation(
                { storyConvId, storyLogId },
                req.file.path
            );
            return res.status(200).json(
                Response.make(true, "Berhasil predict model conversation", {
                    file_name: req.file.originalname,
                    ...data,
                })
            );
        }

        throw new Error(
            "Data File, Id Log Story dan Id Conversation tidak lengkap!"
        );
    } catch (err) {
        console.log(err);
        res.status(400).json(Response.make(false, err.message, null));
    }
});

router.post("/dataset", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;
        const label = req.body.label;
        const uniqueFilename = generateUniqueFilename(file.originalname);
        const uploadedFile = await uploadFileToGCS(file, uniqueFilename);
        let insert = await prisma.Dataset.create({
            data: {
                filename: uploadedFile.name,
                label: label,
            },
        });
        res.status(200).send(
            `File uploaded successfully: ${uploadedFile.name}`
        );
    } catch (error) {
        res.status(500).send(`Failed to upload file: ${error.message}`);
    }
});

module.exports = router;
