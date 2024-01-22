-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Domain" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jobs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "pwdId" INTEGER,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pwd" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "pwd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_userToPwdCard" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_userToDomains" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_domainToJobsApplications" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_userToCourses" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_userToJobsApplications" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_userToPwdCard_AB_unique" ON "_userToPwdCard"("A", "B");

-- CreateIndex
CREATE INDEX "_userToPwdCard_B_index" ON "_userToPwdCard"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_userToDomains_AB_unique" ON "_userToDomains"("A", "B");

-- CreateIndex
CREATE INDEX "_userToDomains_B_index" ON "_userToDomains"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_domainToJobsApplications_AB_unique" ON "_domainToJobsApplications"("A", "B");

-- CreateIndex
CREATE INDEX "_domainToJobsApplications_B_index" ON "_domainToJobsApplications"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_userToCourses_AB_unique" ON "_userToCourses"("A", "B");

-- CreateIndex
CREATE INDEX "_userToCourses_B_index" ON "_userToCourses"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_userToJobsApplications_AB_unique" ON "_userToJobsApplications"("A", "B");

-- CreateIndex
CREATE INDEX "_userToJobsApplications_B_index" ON "_userToJobsApplications"("B");

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_pwdId_fkey" FOREIGN KEY ("pwdId") REFERENCES "pwd"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userToPwdCard" ADD CONSTRAINT "_userToPwdCard_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userToPwdCard" ADD CONSTRAINT "_userToPwdCard_B_fkey" FOREIGN KEY ("B") REFERENCES "pwd"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userToDomains" ADD CONSTRAINT "_userToDomains_A_fkey" FOREIGN KEY ("A") REFERENCES "Domain"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userToDomains" ADD CONSTRAINT "_userToDomains_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_domainToJobsApplications" ADD CONSTRAINT "_domainToJobsApplications_A_fkey" FOREIGN KEY ("A") REFERENCES "Domain"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_domainToJobsApplications" ADD CONSTRAINT "_domainToJobsApplications_B_fkey" FOREIGN KEY ("B") REFERENCES "Jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userToCourses" ADD CONSTRAINT "_userToCourses_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userToCourses" ADD CONSTRAINT "_userToCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userToJobsApplications" ADD CONSTRAINT "_userToJobsApplications_A_fkey" FOREIGN KEY ("A") REFERENCES "Jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userToJobsApplications" ADD CONSTRAINT "_userToJobsApplications_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
