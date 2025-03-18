import { Optional } from "@nestjs/common";
import { IsDefined, IsEmail, MinLength } from "class-validator";

export class userUpdateDto {
  @IsDefined()
  @IsEmail({}, { message: "test" })
  @Optional()
  email?: string;

  @IsDefined()
  @MinLength(6)
  @Optional()
  password?: string;
}
