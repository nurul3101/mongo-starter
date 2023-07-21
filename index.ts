import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const MongoID = "64ba7c291ec8757fd5c7a241";
  await prisma.chat.create({
    data: {
      id: "1",
      model: "chat",
      path: "chat",
      temperature: 0,
      title: "Chat",
      userId: "1",
      messages: {
        create: {
          id: MongoID,
          content: "Hello World",
          role: Role.user,
        },
      },
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
