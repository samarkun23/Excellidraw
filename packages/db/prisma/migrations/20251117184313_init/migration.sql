-- CreateTable
CREATE TABLE "userSchema" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "userSchema_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userSchema_username_key" ON "userSchema"("username");

-- CreateIndex
CREATE UNIQUE INDEX "userSchema_email_key" ON "userSchema"("email");
