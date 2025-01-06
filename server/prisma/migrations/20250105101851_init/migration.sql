/*
  Warnings:

  - You are about to drop the column `Teamname` on the `Team` table. All the data in the column will be lost.
  - Added the required column `TeamName` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "Teamname",
ADD COLUMN     "TeamName" TEXT NOT NULL;
