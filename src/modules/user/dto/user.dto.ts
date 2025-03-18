import { IsDefined, IsEmail, MinLength } from "class-validator";

export class userUpdateInput {
  @IsDefined()
  @IsEmail({}, { message: "test" })
  email?: string;

  @IsDefined()
  @MinLength(6)
  password?: string;
}
