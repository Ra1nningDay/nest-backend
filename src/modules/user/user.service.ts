import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { User } from "@prisma/client";
import { userUpdateDto } from "./dto/user-update.dto";
import { userCreateDto } from "./dto/user-create.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async userById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async createUser(data: userCreateDto): Promise<User | null> {
    const saltRound = 10;
    const hash: string = await bcrypt.hash(data.password, saltRound);

    return this.prisma.user.create({
      data: {
        email: data.email,
        password: hash,
        avatar: "default-avatar.png",
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
      include: {
        roles: true,
      },
    });
  }

  async updateUser(id: number, data: userUpdateDto): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: number) {
    await this.prisma.userRole.deleteMany({
      where: {
        user_id: id,
      },
    });

    return this.prisma.user.delete({
      where: { id },
    });
  }
}
