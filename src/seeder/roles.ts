import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createRole = await prisma.role.createMany({
    data: [
      { name: "admin", description: "" },
      { name: "user", description: "" },
    ],
    skipDuplicates: true,
  });

  console.log(`Created ${createRole.count} roles`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
