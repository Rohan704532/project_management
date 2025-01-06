/*
  Warnings:

  - You are about to drop the column `endDate` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `TeamName` on the `Team` table. All the data in the column will be lost.
  - Added the required column `teamName` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attachment" ALTER COLUMN "fileName" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "endDate",
ADD COLUMN     "dueDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "TeamName",
ADD COLUMN     "teamName" TEXT NOT NULL;
