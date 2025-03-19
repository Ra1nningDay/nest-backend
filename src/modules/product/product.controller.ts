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
// import { UpdateProductDto } from "./dto/get-product.dto";

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
  updateProduct() {
    return this.productService;
  }

  @Delete("/:id")
  deleteProduct() {
    return this.productService;
  }
}
