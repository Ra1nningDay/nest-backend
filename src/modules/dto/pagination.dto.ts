import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  litmit?: number;
}
