const prisma = require("../lib/prisma");

const getAllStory = async () => {
    return await prisma.story.findMany({
        select: {
            id: true,
            title: true,
            thumbnail_url: true,
            city: true,
        }
    })
};

const getStoryById = async (storyId) => {
    return await prisma.story.findUnique({
   
        where: {
            id: parseInt(storyId),
        },
        select: {
            id: true,
            title: true,
            synopsis: true,
            prolog_image_url: true,
            city: true,
            conversation_count: true,
            Glosarium: true,
        },

    });
};

module.exports = { getAllStory, getStoryById };
