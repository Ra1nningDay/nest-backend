import { Module } from "@nestjs/common";
import { ProductCategoryService } from "./product_category.service";
import { ProductCategoryController } from "./product_category.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService, PrismaService],
})
export class ProductCategoryModule {}
