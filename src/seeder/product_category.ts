import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function category() {
  const create = await prisma.category.createMany({
    data: [
      {
        name: "shoes",
        description: "",
      },
      {
        name: "jean",
        description: "",
      },
    ],
  });
  console.log(`Created ${create.count} roles`);
}

category().catch((e) => {
  console.error(e);
  process.exit(1);
});
