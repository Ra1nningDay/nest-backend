import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import * as brcypt from "bcrypt";
import { SignInDto } from "./dto/signIn.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<{ access_token: string }> {
    const user = await this.userService.userByEmail(signInDto.email);
    if (user?.password !== signInDto.pass) {
      throw new UnauthorizedException();
    }

    const checkedPass = await brcypt.compare(signInDto.pass, user.password);

    if (!checkedPass) throw new UnauthorizedException();

    const payload = { sub: user.id, username: user.email };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
