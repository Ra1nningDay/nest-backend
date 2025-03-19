import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaginationDto } from "../dto/pagination.dto";
import { DEFAULT_PAGE_PAGINATION } from "../utils/constant";
import { GetProductDto } from "./dto/get-product.dto";

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getAllProduct(paginationDto: PaginationDto) {
    return this.prisma.product.findMany({
      skip: paginationDto.skip,
      take: paginationDto.limit ?? DEFAULT_PAGE_PAGINATION,
    });
  }

  async getProductById(productDto: GetProductDto) {
    return this.prisma.product.findFirst({
      where: {
        id: productDto.id,
      },
    });
  }
}
