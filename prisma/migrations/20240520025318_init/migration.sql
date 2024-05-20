-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Story` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `synopsis` VARCHAR(191) NOT NULL,
    `thumbnail_url` VARCHAR(100) NOT NULL,
    `conversation_count` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StoryConversation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `storyId` INTEGER NOT NULL,
    `conv_sequence` INTEGER NOT NULL,
    `conv_text` VARCHAR(191) NOT NULL,
    `character_img` VARCHAR(100) NOT NULL,
    `characer_name` VARCHAR(100) NOT NULL,
    `voice_url` VARCHAR(100) NULL,
    `is_speech_by_user` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StoryPlayLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `storyId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StoryConversationLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `storyPlayLogId` INTEGER NOT NULL,
    `storyConversationId` INTEGER NOT NULL,
    `voice_url` VARCHAR(191) NOT NULL,
    `voice_to_text` VARCHAR(191) NULL,
    `feedback` VARCHAR(191) NULL,
    `scores` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StoryConversation` ADD CONSTRAINT `StoryConversation_storyId_fkey` FOREIGN KEY (`storyId`) REFERENCES `Story`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StoryPlayLog` ADD CONSTRAINT `StoryPlayLog_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StoryPlayLog` ADD CONSTRAINT `StoryPlayLog_storyId_fkey` FOREIGN KEY (`storyId`) REFERENCES `Story`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StoryConversationLog` ADD CONSTRAINT `StoryConversationLog_storyPlayLogId_fkey` FOREIGN KEY (`storyPlayLogId`) REFERENCES `StoryPlayLog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StoryConversationLog` ADD CONSTRAINT `StoryConversationLog_storyConversationId_fkey` FOREIGN KEY (`storyConversationId`) REFERENCES `StoryConversation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
