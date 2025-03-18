import { IsDefined, IsEmail, MinLength } from "class-validator";

export class userCreateDto {
  @IsDefined()
  @IsEmail({}, { message: "test" })
  email!: string;

  @IsDefined()
  @MinLength(6)
  password!: string;

  @IsDefined()
  @MinLength(6)
  verify_password!: string;
}
