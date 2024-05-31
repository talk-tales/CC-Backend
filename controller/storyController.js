// const { prisma } = require("../lib/prisma");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Response = require("../lib/response");
const express = require('express');
const app = express();
app.use(express.json());


const getAllStory = async (req, res) => {
    try {
        const story = await prisma.story.findMany();
        res.status(200).json(Response.make(true, "success get all story", story));
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getStoryById = async (req, res) => {
    const storyId = req.params.id;

    const story = await prisma.story.findUnique({
        where: {
            id: parseInt(storyId),
        }
    });

    res.status(200).json(Response.make(true, `success get story id: ${storyId}`, story));

}
module.exports = {getAllStory, getStoryById};