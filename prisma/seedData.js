let STORY_TIMUN_MAS = {
    id: 1,
    title: "TIMUN MAS & BUTO IJO",
    thumbnail_url:
        // "https://porto.sman1tjbarat.sch.id/img/timunmas/banner_HOME_timun_fix.png",
        "https://storage.googleapis.com/bucket-assets-talk-tales/home/HOME_timun.png",
    prolog_image_url:
    // "https://porto.sman1tjbarat.sch.id/img/timunmas/banner_prolog_TimunM_1000px%201.png",
        "https://storage.googleapis.com/bucket-assets-talk-tales/home/prolog_TimunM.png",
    city: "Central Java",
    conversation_count: 12,
    synopsis: `Once upon a time, there lived an old widow named Mbok Sirni. She desperately wanted to have a child. One day, Mbok Sirni met an evil raksasa who gave her a cucumber seed. The raksasa said, "Plant this seed, and you will have a child. But remember, when the child turns 17, you must give her to me."
    \n Mbok Sirni agreed and planted the cucumber seed. Several months later, a golden cucumber grew. When the cucumber was split open, inside it was a beautiful baby girl. Mbok Sirni named her Timun Mas.
    \n Years passed, and Timun Mas grew into a kind and beautiful girl. However, Mbok Sirni was always worried because she remembered her promise to the raksasa.    
    `,
};

let CONVERSATION_TIMUN_MAS = [
    {
        id: 1,
        storyId: 1,
        prolog_text:
            "One day, when Timun Mas turned 17, the raksasa came to collect on the promise.",
        conv_sequence: 0,
        conv_text:
            "Mbok Sirni, I have come to take Timun Mas. A promise is a promise!",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-timun/raksasa_kanan.png",
        characer_name: "Raksasa",
        voice_url:
            "https://storage.googleapis.com/bucket-assets-talk-tales/mp3/story-timun/raksasa-buto-ijo/Mbok-Sirni-I-have-come-t-2.mp3",
        is_speech_by_user: false,
    },
    {
        id: 2,
        storyId: 1,
        prolog_text: null,
        conv_sequence: 1,
        conv_text: "Please, give us a little more time.",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-timun/mbok_sirni_kiri.png",
        characer_name: "Mbok Sirni",
        voice_url: "",
        is_speech_by_user: true,
    },
    {
        id: 3,
        storyId: 1,
        prolog_text: null,
        conv_sequence: 2,
        conv_text: "No more time! Hand over Timun Mas now!",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-timun/raksasa_kanan.png",
        characer_name: "Raksasa",
        voice_url:
            "https://storage.googleapis.com/bucket-assets-talk-tales/mp3/story-timun/raksasa-buto-ijo/No-more-time-Hand-over-T-1.mp3",
        is_speech_by_user: false,
    },
    {
        id: 4,
        storyId: 1,
        prolog_text:
            "Terrified of losing Timun Mas, Mbok Sirni said to her daughter",
        conv_sequence: 3,
        conv_text:
            "Timun Mas, you must leave now! Take this bundle. Inside are items that can help you escape from the raksasa.",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-timun/mbok_sirni_kiri.png",
        characer_name: "Mbok Sirni",
        voice_url: "",
        is_speech_by_user: true,
    },
    {
        id: 5,
        storyId: 1,
        prolog_text: `Timun Mas took the bundle and immediately ran into the forest. The raksasa chased her with large and quick strides. As the raksasa was about to catch her, Timun Mas opened the bundle and threw each item one by one.
                    \n First, she threw cucumber seeds. The seeds instantly grew into a dense cucumber field. The raksasa was hindered but eventually managed to get through the field.
                    \n Next, Timun Mas threw needles. The needles turned into tall and sharp bamboo trees. The raksasa had difficulty passing through them but eventually succeeded.
                    \n Then, Timun Mas threw salt. The salt transformed into a vast, salty sea. The raksasa almost drowned, but with his strength, he managed to get across the sea.
                    \n Finally, Timun Mas threw shrimp paste. The shrimp paste turned into a boiling mud lake. The raksasa got stuck in it and could not get out. He screamed in pain and eventually sank into the mud.
                    `,
        conv_sequence: 4,
        conv_text: null,
        character_img:
            "https://porto.sman1tjbarat.sch.id/img/timunmas/banner_prolog_TimunM_1000px%201.png",
        characer_name: null,
        voice_url: "",
        is_speech_by_user: false,
        is_mid: true,
    },
    {
        id: 6,
        storyId: 1,
        prolog_text:
            "Timun Mas was safe and returned home. She hugged Mbok Sirni tightly.",
        conv_sequence: 5,
        conv_text: "Mother, I am safe!",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-timun/timun_kanan.png",
        characer_name: "Timun Mas",
        voice_url:
            "https://storage.googleapis.com/bucket-assets-talk-tales/mp3/story-timun/timun-mas/Mother-I-am-safe-4.mp3",
        is_speech_by_user: false,
    },
    {
        id: 7,
        storyId: 1,
        prolog_text:
            "Timun Mas and Mbok Sirni lived happily ever after, free from the raksasa's threat.",
        conv_sequence: 6,
        conv_text:
            "Thank goodness you are safe, Timun Mas. Now we can live in peace.",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-timun/mbok_sirni_kiri.png",
        characer_name: "Mbok Sirni",
        voice_url: "",
        is_speech_by_user: true,
        is_postlog: true,
    },
];

let GLOSARIUM_TIMUN_MAS = [
    {
        id: 1,
        word: "Beautiful",
        explanation:
            " Pleasing to the eye; attractive. (Timun Mas was a beautiful girl).",
        story_id: 1,
    },
    {
        id: 2,
        word: "Bundle",
        explanation:
            " A group of things tied or wrapped together. (Mbok Sirni gave Timun Mas a bundle of magical items).",
        story_id: 1,
    },
    {
        id: 3,
        word: "Child",
        explanation:
            "The young offspring of human parents. (Mbok Sirni desperately wanted a child).",
        story_id: 1,
    },
    {
        id: 4,
        word: "Cucumber Seed",
        explanation:
            "The seed of a cucumber plant. (The raksasa gave Mbok Sirni a cucumber seed).",
        story_id: 1,
    },
    {
        id: 5,
        word: "Dense",
        explanation:
            "Packed closely together. (The cucumber seeds grew into a dense field).",
        story_id: 1,
    },
    {
        id: 6,
        word: "Desperately",
        explanation:
            "In a way that shows a great need or desire. (Mbok Sirni desperately wanted a child).",
        story_id: 1,
    },
    {
        id: 7,
        word: "Escape",
        explanation:
            "To get away from a place or situation, especially one that is unpleasant or dangerous. (Timun Mas escaped from the raksasa).",
        story_id: 1,
    },
    {
        id: 8,
        word: "Evil",
        explanation:
            "Morally bad or wrong. (The raksasa was an evil creature).",
        story_id: 1,
    },
    {
        id: 9,
        word: "Forest",
        explanation:
            "A large area covered with trees and other vegetation. (Timun Mas ran into the forest).",
        story_id: 1,
    },
    {
        id: 10,
        word: "Golden Cucumber",
        explanation:
            "A magical cucumber made of gold. (Timun Mas was born from a golden cucumber).",
        story_id: 1,
    },
    {
        id: 11,
        word: "Hindered",
        explanation:
            "To make it difficult for someone or something to move or progress. (The cucumber field hindered the raksasa).",
        story_id: 1,
    },
    {
        id: 12,
        word: "Huge",
        explanation: " Very large in size. (The raksasa took large strides).",
        story_id: 1,
    },
    {
        id: 13,
        word: "Hug",
        explanation:
            "To hold someone tightly in your arms, especially as a sign of affection or comfort. (Timun Mas hugged Mbok Sirni).",
        story_id: 1,
    },
    {
        id: 14,
        word: "Items",
        explanation:
            "Things that you can hold or carry. (The bundle contained magical items).",
        story_id: 1,
    },
    {
        id: 15,
        word: "Kind",
        explanation:
            "Having or showing a friendly and generous nature. (Timun Mas was a kind girl).",
        story_id: 1,
    },
    {
        id: 16,
        word: "Lake",
        explanation:
            "A large body of water surrounded by land. (The shrimp paste turned into a boiling mud lake).",
        story_id: 1,
    },
    {
        id: 17,
        word: "Mbok Sirni",
        explanation: "An old widow who wished for a child.",
        story_id: 1,
    },
    {
        id: 18,
        word: "Needle",
        explanation:
            " A thin, pointed metal instrument used for sewing or piercing. (The needles turned into sharp bamboo trees).",
        story_id: 1,
    },
    {
        id: 19,
        word: " Old Widow",
        explanation:
            "A woman whose husband has died and who has not married again. (Mbok Sirni was an old widow).",
        story_id: 1,
    },
    {
        id: 20,
        word: "Peace",
        explanation:
            "Freedom from war, violence, or conflict. (Timun Mas and Mbok Sirni lived in peace).",
        story_id: 1,
    },
    {
        id: 21,
        word: "Promise",
        explanation:
            " An agreement or undertaking to do something in the future. (Mbok Sirni made a promise to the raksasa).",
        story_id: 1,
    },
    {
        id: 22,
        word: "Rakasa",
        explanation: "A giant, evil creature in Indonesian mythology.",
        story_id: 1,
    },
    {
        id: 23,
        word: "Salt",
        explanation:
            " A white crystalline substance that is soluble in water and gives a salty taste to food. (The salt transformed into a sea).",
        story_id: 1,
    },
    {
        id: 24,
        word: "Safe",
        explanation: " Not in danger or at risk. (Timun Mas was finally safe).",
        story_id: 1,
    },
    {
        id: 25,
        word: " Shrimp Paste",
        explanation:
            " A fermented condiment made from shrimp. (The shrimp paste turned into a boiling mud lake).",
        story_id: 1,
    },
    {
        id: 26,
        word: "Strength",
        explanation:
            " Physical power. (The raksasa used his strength to get through the challenges).",
        story_id: 1,
    },
    {
        id: 27,
        word: "Strides",
        explanation:
            "Long steps taken while walking or running. (The raksasa chased Timun Mas with large strides).",
        story_id: 1,
    },
    {
        id: 28,
        word: "Threat",
        explanation:
            "Something that is likely to cause damage or harm. (The raksasa was a threat to Timun Mas).",
        story_id: 1,
    },
    {
        id: 29,
        word: " Turned into",
        explanation:
            "Changed into something else. (The salt turned into a sea).",
        story_id: 1,
    },
    {
        id: 30,
        word: "Widow",
        explanation:
            " A woman whose husband has died and who has not married again. (Mbok Sirni was a widow).",
        story_id: 1,
    },
    {
        id: 31,
        word: "Years",
        explanation:
            " A period of twelve months. (Years passed, and Timun Mas grew up).",
        story_id: 1,
    },
];

let STORY_ONION_GARLIC = {
    id: 2,
    title: "BAWANG MERAH & BAWANG PUTIH",
    synopsis: `Once upon a time, in a peaceful village, there lived a widow named Bu Siti with her two daughters, Bawang Merah and Bawang Putih. Bawang Putih was Bu Siti's biological daughter, while Bawang Merah was her stepdaughter. After Bawang Putih's father passed away, Bu Siti remarried a widower who had a daughter named Bawang Merah.
            \n Bawang Putih grew up to be a kind-hearted, diligent, and patient girl. She always helped her mother with everything without complaining. In contrast, Bawang Merah was lazy and often behaved badly. She was always jealous of Bawang Putih, who was loved by everyone in the village. This made Bawang Merah constantly look for ways to hurt Bawang Putih's feelings.
            \n After a few years, Bawang Putih's biological mother fell ill and passed away. Bu Siti, now Bawang Putih's stepmother, began to show her true nature. She treated Bawang Putih very cruelly, while Bawang Merah became even more free to bully her stepsister.
                `,
    thumbnail_url:
        // "https://porto.sman1tjbarat.sch.id/img/bawang/banner_HOME_bawang_fix%202.png",
        "https://storage.googleapis.com/bucket-assets-talk-tales/home/HOME_bawang.png",
    prolog_image_url:
        // "https://porto.sman1tjbarat.sch.id/img/bawang/banner_prolog_BawangMBP_1000px%201.png",
        "https://storage.googleapis.com/bucket-assets-talk-tales/home/prolog_BawangMBP.png",
    city: "Riau",
    conversation_count: 0,
};

let CONVERSATION_ONION_GARLIC = [
    {
        id: 8,
        storyId: 2,
        prolog_text:
            "They always ordered Bawang Putih to do all the household chores",
        conv_sequence: 0,
        conv_text:
            "Bawang Putih, quickly wash the clothes in the river! And don't come back until everything is clean!",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-bawang/ibu_tiri_kanan.png",
        characer_name: "Ibu Tiri",
        voice_url:
            "https://storage.googleapis.com/bucket-assets-talk-tales/mp3/story-bawang/ibu-tiri/Bawang-Putih-quickly-was-1.mp3",
        is_speech_by_user: false,
    },
    {
        id: 9,
        storyId: 2,
        prolog_text: null,
        conv_sequence: 1,
        conv_text: "Yes, and also make sure dinner is ready when we get back!",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-bawang/bw_merah_kiri.png",
        characer_name: "Bawang Merah",
        voice_url: "",
        is_speech_by_user: true,
    },
    {
        id: 10,
        storyId: 2,
        prolog_text: `Bawang Putih could only obey. She went to the river to wash the clothes. At the river, one of her stepmother's clothes was swept away by the current.
                    Bawang Putih panicked and searched for the clothes along the river, but couldn't find them. While searching, she met an old woman.
                        `,
        conv_sequence: 2,
        conv_text: "Why do you look sad, my child?",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-bawang/nenek_kanan.png",
        characer_name: "Nenek",
        voice_url:
            "https://storage.googleapis.com/bucket-assets-talk-tales/mp3/story-bawang/nenek/Why%20do%20you%20look%20sad%20my%20child.mp3",
        is_speech_by_user: false,
    },
    {
        id: 11,
        storyId: 2,
        prolog_text: null,
        conv_sequence: 3,
        conv_text:
            "I lost my mother's clothes, Grandma. If I go home without them, I'll be scolded.",
        character_img: "https://storage.googleapis.com/bucket-assets-talk-tales/assets-bawang/bw_putih_kiri.png",
        characer_name: "Bawang Putih",
        voice_url:
            "",
        is_speech_by_user: true,
    },
    {
        id: 12,
        storyId: 2,
        prolog_text:
            "Bawang Putih agreed and helped the old woman with her household chores. After finishing, the old woman gave her two gourds, one large and one small.",
        conv_sequence: 4,
        conv_text:
            "In that case, would you help me first? I will help you find the clothes.",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-bawang/nenek_kanan.png",
        characer_name: "Nenek",
        voice_url:
            "https://storage.googleapis.com/bucket-assets-talk-tales/mp3/story-bawang/nenek/In%20that%20case%20would%20you%20help%20me%20first%20I%20will%20help%20you%20find%20the%20clothes.mp3",
        is_speech_by_user: false,
        is_postlog: true,
    },
    {
        id: 13,
        storyId: 2,
        prolog_text:
            "Bawang Putih chose the small gourd. When she got home and opened it, it was full of gold and jewelry.",
        conv_sequence: 5,
        conv_text: "Choose one of these gourds as a reward for helping me.",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-bawang/nenek_kanan.png",
        characer_name: "Nenek",
        voice_url:
            "https://storage.googleapis.com/bucket-assets-talk-tales/mp3/story-bawang/nenek/Choose%20one%20of%20these%20gourds%20as%20a%20reward%20for%20helping%20me.mp3",
        is_speech_by_user: false,
        is_postlog: true,
    },
    {
        id: 14,
        storyId: 2,
        prolog_text: `Seeing this, the stepmother and Bawang Merah were very jealous. They decided to try the same thing. 
        Bawang Merah went to the river and deliberately let a piece of clothing drift away. When she met the old woman, she was impatient and rude.
        `,
        conv_sequence: 6,
        conv_text: "Why do you look sad, my child?",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-bawang/nenek_kanan.png",
        characer_name: "Nenek",
        voice_url:
            "https://storage.googleapis.com/bucket-assets-talk-tales/mp3/story-bawang/nenek/Why%20do%20you%20look%20sad%20my%20child.mp3",
        is_speech_by_user: false,
    },
    {
        id: 15,
        storyId: 2,
        prolog_text: null,
        conv_sequence: 7,
        conv_text:
            "I lost my clothes. Hurry up and return them, I don't have time for this nonsense!",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-bawang/bw_merah_kiri.png",
        characer_name: "Bawang merah",
        voice_url: "",
        is_speech_by_user: true,
    },
    {
        id: 16,
        storyId: 2,
        prolog_text: `The old woman still gave her two gourds, and Bawang Merah chose the large one. Excitedly, she went home and opened the gourd. 
        However, they were shocked when poisonous snakes and other terrifying creatures emerged from the large gourd.
        `,
        conv_sequence: 8,
        conv_text: "Aaaaa! What happened?!",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-bawang/ibu_tiri_kanan.png",
        characer_name: "Ibu Tiri",
        voice_url:
            "https://storage.googleapis.com/bucket-assets-talk-tales/mp3/story-bawang/ibu-tiri/Aaaaaaaaaa-What-happened-1.mp3",
        is_speech_by_user: false,
    },
    {
        id: 17,
        storyId: 2,
        prolog_text: `The stepmother and Bawang Merah were very scared and regretful. They finally realized that their bad behavior had caused this disaster.
        `,
        conv_sequence: 9,
        conv_text: "How could this happen?!",
        character_img:
            "https://storage.googleapis.com/bucket-assets-talk-tales/assets-bawang/bw_merah_kiri.png",
        characer_name: "Bawang Merah",
        voice_url: "",
        is_speech_by_user: true,
        is_postlog: true,
    },
];

let GLOSARIUM_ONION_GARLIC = [
    {
        id: 32,
        word: "Biological Daughter",
        explanation:
            "A daughter born to a specific mother and father. (Bawang Putih is Bu Siti's biological daughter).",
        story_id: 2,
    },
    {
        id: 33,
        word: "Bullied",
        explanation:
            "To be treated in a harsh or unkind way by someone stronger or more powerful. (Bawang Merah bullied Bawang Putih).",
        story_id: 2,
    },
    {
        id: 34,
        word: "Chores",
        explanation:
            "Household tasks that need to be done regularly. (Bawang Putih did all the household chores).",
        story_id: 2,
    },
    {
        id: 35,
        word: "Cruelty",
        explanation:
            "The quality of being cruel; the infliction of suffering with no justification. (Bu Siti treated Bawang Putih with cruelty).",
        story_id: 2,
    },
    {
        id: 36,
        word: "Daughter",
        explanation:
            " A female child. (Bawang Putih and Bawang Merah are both daughters).",
        story_id: 2,
    },
    {
        id: 37,
        word: "Diligent",
        explanation:
            " Hardworking and careful. (Bawang Putih was a diligent girl).",
        story_id: 2,
    },
    {
        id: 38,
        word: " Elderly Woman",
        explanation:
            " Another term for an old woman. (The old woman by the river).",
        story_id: 2,
    },
    {
        id: 39,
        word: "Gold",
        explanation:
            " A precious metal of a bright yellow color. (The small gourd contained gold).",
        story_id: 2,
    },
    {
        id: 40,
        word: "Gourd",
        explanation:
            " A large, hard-shelled fruit that can be used as a container. (The old woman gives Bawang Putih and Bawang Merah gourds).",
        story_id: 2,
    },
    {
        id: 41,
        word: "Impatient",
        explanation:
            "Not able to wait calmly. (Bawang Merah was impatient with the old woman).",
        story_id: 2,
    },
    {
        id: 42,
        word: "Jealous",
        explanation:
            " Feeling or showing envy of someone's belongings, advantages, or successes. (Bawang Merah was jealous of Bawang Putih).",
        story_id: 2,
    },
    {
        id: 43,
        word: "Jewelry",
        explanation:
            " Ornamental objects such as necklaces, rings, or bracelets, typically made from precious metals or stones. (The small gourd contained jewelry).",
        story_id: 2,
    },
    {
        id: 44,
        word: " Kind-Hearted",
        explanation:
            " Having a kind and generous nature. (Bawang Putih was kind-hearted)",
        story_id: 2,
    },
    {
        id: 45,
        word: "Lost",
        explanation:
            " Unable to find something that was previously there. (Bawang Putih lost her stepmother's clothes).",
        story_id: 2,
    },
    {
        id: 46,
        word: "Mother",
        explanation:
            "A female parent. (Bu Siti is the mother of Bawang Putih and stepmother of Bawang Merah).",
        story_id: 2,
    },
    {
        id: 47,
        word: "Nonsense",
        explanation:
            "Something with no meaning or value. (Bawang Merah called the old woman's request nonsense).",
        story_id: 2,
    },
    {
        id: 48,
        word: "Old Woman",
        explanation:
            " A woman who is old. (The woman Bawang Putih meets by the river).",
        story_id: 2,
    },
    {
        id: 49,
        word: "Patience",
        explanation:
            "he capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset. (Bawang Putih showed patience).",
        story_id: 2,
    },
    {
        id: 50,
        word: "Punishment",
        explanation:
            "Something unpleasant in response to a bad action. (The snakes and creatures were Bawang Merah's punishment).",
        story_id: 2,
    },
    {
        id: 51,
        word: "Reward",
        explanation:
            "Something given in recognition of service, effort, or achievement. (The old woman gave Bawang Putih a gourd as a reward).",
        story_id: 2,
    },
    {
        id: 52,
        word: "River",
        explanation:
            "A large natural stream of water flowing to a sea, lake, or another river. (Bawang Putih washed clothes at the river).",
        story_id: 2,
    },
    {
        id: 53,
        word: "Scared",
        explanation:
            " Feeling fear or anxiety. (The stepmother and Bawang Merah were scared).",
        story_id: 2,
    },
    {
        id: 54,
        word: "Stepdaughter",
        explanation:
            "The daughter of one's spouse from a previous relationship. (Bawang Merah is Bu Siti's stepdaughter).",
        story_id: 2,
    },
    {
        id: 55,
        word: "Stepmother",
        explanation:
            "The wife of a person's father after the death of their biological mother. (Bu Siti is the stepmother of Bawang Merah).",
        story_id: 2,
    },
    {
        id: 56,
        word: "Suffering",
        explanation:
            "Experiencing pain or distress. (Bawang Putih suffered cruelty from her stepmother).",
        story_id: 2,
    },
    {
        id: 57,
        word: "Village",
        explanation:
            "A small community of people living in close proximity to one another. (The story takes place in a peaceful village).",
        story_id: 2,
    },
    {
        id: 58,
        word: "Widow",
        explanation:
            "A woman whose husband has died and has not married again. (Bu Siti is a widow).",
        story_id: 2,
    },
    {
        id: 59,
        word: "Widower",
        explanation:
            "A man whose wife has died and has not married again. (Bu Siti's husband was a widower).",
        story_id: 2,
    },
];

module.exports = {
    STORY_TIMUN_MAS,
    CONVERSATION_TIMUN_MAS,
    GLOSARIUM_TIMUN_MAS,
    STORY_ONION_GARLIC,
    GLOSARIUM_ONION_GARLIC,
    CONVERSATION_ONION_GARLIC,
};
