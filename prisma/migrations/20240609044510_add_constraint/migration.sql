/*
  Warnings:

  - A unique constraint covering the columns `[storyId,conv_sequence]` on the table `StoryConversation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `prolog_image_url` to the `Story` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Story` ADD COLUMN `prolog_image_url` VARCHAR(100) NOT NULL,
    MODIFY `conversation_count` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `StoryConversation` ADD COLUMN `prolog_text` TEXT NULL,
    MODIFY `conv_text` VARCHAR(191) NULL,
    MODIFY `characer_name` VARCHAR(100) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `StoryConversation_storyId_conv_sequence_key` ON `StoryConversation`(`storyId`, `conv_sequence`);
