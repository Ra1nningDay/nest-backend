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
import { GetProductDto } from "./dto/get-product.dto";

@Controller("product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get("/")
  findAllProduct(@Query() paginationDto: PaginationDto) {
    return this.productService.getAllProduct(paginationDto);
  }

  @Get("/:id")
  findProductById(@Param("id") @Body() productDto: GetProductDto) {
    return this.productService.getProductById(productDto);
  }

  @Post("/:id")
  createProduct() {
    return this.productService;
  }

  @Patch("/:id")
  updateProduct() {
    return this.productService;
  }

  @Delete("/:id")
  deleteProduct() {
    return this.productService;
  }
}
