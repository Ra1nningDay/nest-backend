import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaginationDto } from "../dto/pagination.dto";
import { DEFAULT_PAGE_PAGINATION } from "../utils/constant";
// import { UpdateProductDto } from "./dto/get-product.dto";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getAllProduct(paginationDto: PaginationDto) {
    return this.prisma.product.findMany({
      skip: paginationDto.skip,
      take: paginationDto.limit ?? DEFAULT_PAGE_PAGINATION,
    });
  }

  async getProductById(id: number) {
    return this.prisma.product.findFirst({
      where: {
        id: id,
      },
    });
  }

  async createProduct(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        ...createProductDto,
      },
    });
  }
}
