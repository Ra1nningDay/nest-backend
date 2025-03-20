import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import * as brcypt from "bcrypt";
import { SignInDto } from "./dto/signIn.dto";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(signInDto: SignInDto): Promise<any> {
    const user = await this.userService.userByEmail(signInDto.email);
    if (user?.password !== signInDto.pass) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;

    const checkedPass = await brcypt.compare(password, user?.password);

    if (!checkedPass) throw new UnauthorizedException();

    return result;
  }
}
