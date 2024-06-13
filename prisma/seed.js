const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {
    STORY_TIMUN_MAS,
    CONVERSATION_TIMUN_MAS,
    GLOSARIUM_TIMUN_MAS,
    STORY_ONION_GARLIC,
    GLOSARIUM_ONION_GARLIC,
    CONVERSATION_ONION_GARLIC,
} = require("./seedData");

async function main() {
    let insertTimunMas = await prisma.story.upsert({
        where: { id: STORY_TIMUN_MAS.id },
        update: {},
        create: STORY_TIMUN_MAS,
    });

    let insertConversation = await prisma.StoryConversation.createMany({
        data: CONVERSATION_TIMUN_MAS.map((data) => {
            return {
                ...data,
            };
        }),
    });

    let insertGlosarium = await prisma.glosarium.createMany({
        data: GLOSARIUM_TIMUN_MAS,
    });
    let insertOnionGarlic = await prisma.story.upsert({
        where: { id: STORY_ONION_GARLIC.id },
        update: {},
        create: STORY_ONION_GARLIC,
    });

    let insertConversationOnionGarli =
        await prisma.StoryConversation.createMany({
            data: CONVERSATION_ONION_GARLIC.map((data) => {
                return {
                    ...data,
                };
            }),
        });

    let insertGlosariumOnionGarlic = await prisma.glosarium.createMany({
        data: GLOSARIUM_ONION_GARLIC,
    });

    console.log({
        insertTimunMas,
        insertConversation,
        insertGlosarium,
        insertOnionGarlic,
        insertGlosariumOnionGarlic,
        insertConversationOnionGarli,
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
