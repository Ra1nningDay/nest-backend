import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const saltRounds = 10;
  const defaultPassword = await bcrypt.hash("password123", saltRounds);

  // Create 50 users
  const users = Array.from({ length: 50 }).map(() => ({
    email: faker.internet.email(),
    password: defaultPassword,
    avatar: faker.image.avatar(),
    created_at: faker.date.past(),
    updated_at: new Date(),
  }));

  for (const user of users) {
    const createdUser = await prisma.user.create({
      data: {
        ...user,
        roles: {
          create: [
            {
              role: {
                connect: { name: "user" },
              },
            },
          ],
        },
      },
    });
    console.log(`Created user with id: ${createdUser.id}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
