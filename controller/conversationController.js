const prisma = require("../lib/prisma");
const { predict } = require("../lib/prediction");

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
    let getTargetLabel = await prisma.StoryConversation.findUnique({
        where: {
            id: storyConvId,
        },
        select: {
            conv_text: true,
        },
    });
    //use model here
    await predict(fileAudio);
    //model end

    let EXAMPLE_MODEL_RESPONSE = {
        target_label: getTargetLabel.conv_text,
        prediction: "test test test",
        feedback: "Incorrect",
        scores: 80,
    };
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
            voice_to_text: EXAMPLE_MODEL_RESPONSE.prediction,
            feedback: EXAMPLE_MODEL_RESPONSE.feedback,
            scores: EXAMPLE_MODEL_RESPONSE.scores,
        },
    });

    return {
        idLogConversation: postLog.id,
        prediction: EXAMPLE_MODEL_RESPONSE.prediction,
        target: EXAMPLE_MODEL_RESPONSE.target_label,
        feedback: EXAMPLE_MODEL_RESPONSE.feedback,
        scores: EXAMPLE_MODEL_RESPONSE.scores,
    };
};

module.exports = {
    getAllConversation,
    addStoryLog,
    postUserConversation,
};
