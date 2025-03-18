import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("/")
  findAllUser() {
    return this.userService.users();
  }

  @Get("/:id")
  findUserById(@Param("id") id: string) {
    return this.userService.userById(Number(id));
  }
}
