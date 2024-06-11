-- AlterTable
ALTER TABLE `StoryConversation` ADD COLUMN `is_mid` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `is_postlog` BOOLEAN NOT NULL DEFAULT false;
