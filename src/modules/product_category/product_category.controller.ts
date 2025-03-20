import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from "@nestjs/common";
import { ProductCategoryService } from "./product_category.service";
import { PaginationDto } from "../pagination/pagination.dto";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller("product")
export class ProductCategoryController {
  constructor(private productCategoryService: ProductCategoryService) {}

  @Get("/category")
  findAllProduct(@Query() paginationDto: PaginationDto) {
    return this.productCategoryService.getAllcategory(paginationDto);
  }

  @Get("/category/:id")
  findProductById(@Param("id") id: string) {
    return this.productCategoryService.getCategoryById(+id);
  }

  @Post("/category")
  createProduct(@Body() createProductDto: CreateCategoryDto) {
    return this.productCategoryService.createCategory(createProductDto);
  }

  @Patch("/category/:id")
  updateProduct(
    @Param("id") id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.productCategoryService.updateCategory(+id, updateCategoryDto);
  }

  @Delete("/category/:id")
  deleteCategory(@Param() id: string) {
    return this.productCategoryService.deleteCategory(+id);
  }
}
