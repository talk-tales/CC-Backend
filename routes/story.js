const express = require("express");
const router = express.Router();
const Response = require("../lib/response");
const { getAllStory, getStoryById } = require("../controller/storyController");

router.get("/", async (req, res) => {
    try {
        const story = await getAllStory();
        res.status(200).json(
            Response.make(true, "success get all story", story)
        );
    } catch (error) {
        res.status(500).json(Response.make(false, error.message, null));
    }
});

router.get("/:id", async (req, res) => {
    try {
        const storyId = req.params.id;
        const story = await getStoryById(storyId);

        res.status(200).json(
            Response.make(true, `success get story id: ${storyId}`, story)
        );
    } catch (error) {
        res.status(500).json(Response.make(false, error.message, null));
    }
});

module.exports = router;
