import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.task.create({
    data: {
      title: "Learn Prisma",
      description: "Learn how to use Prisma",
      date: "2021-10-10",
      userId: "1",
    },
  });

  const tasks = await prisma.task.findMany({});

  console.log(tasks);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
