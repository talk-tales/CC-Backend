const prisma = require("../lib/prisma");

const getAllConversation = async (storyId) => {
    let data = await prisma.StoryConversation.findMany({
        where: {
            Story: {
                id: storyId,
            },
        },
        orderBy: {
            conv_sequence: "asc",
        },
    });
    return data;
};

const addStoryLog = async ({ storyId, userId }) => {
    let insert = await prisma.StoryPlayLog.create({
        data: {
            User: {
                connect: {
                    id: userId,
                },
            },
            Story: {
                connect: {
                    id: storyId,
                },
            },
        },
    });

    return insert.id;
};

const postUserConversation = async ({ storyLogId, storyConvId }, fileAudio) => {
    //use model here

    //model end
    //save the result to database
    let postLog = await prisma.StoryConversationLog.create({
        data: {
            StoryPlayLog: {
                connect: {
                    id: storyLogId,
                },
            },
            StoryConversation: {
                connect: {
                    id: storyConvId,
                },
            },
            voice_url: "",
            voice_to_text: "test test test",
            feedback: "Incorrect",
            scores: 80,
        },
    });

    return postLog;
};

module.exports = {
    getAllConversation,
    addStoryLog,
    postUserConversation,
};
