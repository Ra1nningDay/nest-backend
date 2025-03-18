import { IsEmail, MinLength, IsOptional } from "class-validator";

export class userUpdateDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @MinLength(6)
  @IsOptional()
  password?: string;
}
