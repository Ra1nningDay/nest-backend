import { IsInt, IsOptional, IsString, MaxLength, Min } from "class-validator";
import { Type } from "class-transformer";

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  category_id?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  price?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  stock_quantity?: number;
}
