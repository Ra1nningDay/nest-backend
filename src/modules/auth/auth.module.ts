import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { JWT_SECRET } from "../utils/constant";
import { UserService } from "../user/user.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET.secret,
      signOptions: { expiresIn: "60s" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
