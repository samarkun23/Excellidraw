/*
  Warnings:

  - Added the required column `photo` to the `userSchema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userSchema" ADD COLUMN     "photo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "roomSchema" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adminId" TEXT NOT NULL,

    CONSTRAINT "roomSchema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chatSchema" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "chatSchema_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roomSchema_slug_key" ON "roomSchema"("slug");

-- AddForeignKey
ALTER TABLE "roomSchema" ADD CONSTRAINT "roomSchema_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "userSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chatSchema" ADD CONSTRAINT "chatSchema_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "roomSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chatSchema" ADD CONSTRAINT "chatSchema_userId_fkey" FOREIGN KEY ("userId") REFERENCES "userSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
