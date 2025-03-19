import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from "class-validator";
import { Type } from "class-transformer";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name!: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @Type(() => Number)
  category_id!: number;

  @IsInt()
  @Min(0)
  @IsNotEmpty()
  @Type(() => Number)
  price!: number;

  @IsInt()
  @Min(0)
  @IsNotEmpty()
  @Type(() => Number)
  stock_quantity!: number;
}
