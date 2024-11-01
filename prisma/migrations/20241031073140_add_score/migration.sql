/*
  Warnings:

  - Added the required column `score` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `UserAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Interview" ADD COLUMN     "score" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserAnswer" ADD COLUMN     "score" INTEGER NOT NULL;
