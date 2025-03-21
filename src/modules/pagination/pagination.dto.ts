import { Type } from "class-transformer";
import { IsOptional } from "class-validator";

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  skip?: number;

  @IsOptional()
  @Type(() => Number)
  limit?: number;
}
