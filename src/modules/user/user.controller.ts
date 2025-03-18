import { Controller, Get, Put, Param, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { userUpdateInput } from "./dto/user.dto";

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

  @Put("/:id")
  updateUserById(@Param("id") id: string, @Body() data: userUpdateInput) {
    return this.userService.updateUser(Number(id), data);
  }
}
