import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { userUpdateDto } from "./dto/user-update.dto";
import { userCreateDto } from "./dto/user-create.dto";

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

  @Post("/")
  createUser(@Body() data: userCreateDto) {
    return this.userService.createUser(data);
  }

  @Put("/:id")
  updateUserById(@Param("id") id: string, @Body() data: userUpdateDto) {
    return this.userService.updateUser(Number(id), data);
  }

  @Delete("/:id")
  deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(Number(id));
  }
}
