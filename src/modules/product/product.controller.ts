import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Query,
  Param,
  Body,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { PaginationDto } from "../dto/pagination.dto";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller("product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get("/")
  findAllProduct(@Query() paginationDto: PaginationDto) {
    return this.productService.getAllProduct(paginationDto);
  }

  @Get("/:id")
  findProductById(@Param("id") id: string) {
    return this.productService.getProductById(+id);
  }

  @Post("/")
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Patch("/:id")
  updateProduct(
    @Param("id") id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(+id, updateProductDto);
  }

  @Delete("/:id")
  deleteProduct(@Param() id: string) {
    return this.productService.deleteProduct(+id);
  }
}
