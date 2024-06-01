/*
  Warnings:

  - Added the required column `city` to the `Story` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `story` ADD COLUMN `city` VARCHAR(100) NOT NULL,
    MODIFY `synopsis` TEXT NOT NULL;
