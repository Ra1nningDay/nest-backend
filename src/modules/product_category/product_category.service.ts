import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaginationDto } from "../dto/pagination.dto";
import { DEFAULT_PAGE_PAGINATION } from "../utils/constant";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Injectable()
export class ProductCategoryService {
  constructor(private prisma: PrismaService) {}

  async getAllcategory(paginationDto: PaginationDto) {
    return this.prisma.category.findMany({
      skip: paginationDto.skip,
      take: paginationDto.limit ?? DEFAULT_PAGE_PAGINATION,
    });
  }

  async getCategoryById(id: number) {
    return this.prisma.category.findFirst({
      where: {
        id: id,
      },
    });
  }

  async createCategory(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: {
        ...createCategoryDto,
      },
    });
  }

  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: {
        id: id,
      },
      data: {
        ...updateCategoryDto,
      },
    });
  }

  async deleteCategory(id: number) {
    return this.prisma.category.delete({
      where: {
        id: id,
      },
    });
  }
}
