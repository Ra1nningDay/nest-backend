import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaginationDto } from "../pagination/pagination.dto";
import { DEFAULT_PAGE_PAGINATION } from "../utils/constant";
import { UpdateProductDto } from "./dto/update-product.dto";
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
    const { category_id, ...others } = createProductDto;
    return this.prisma.product.create({
      data: {
        ...others,
        category: {
          connect: {
            id: category_id,
          },
        },
      },
    });
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    const { category_id, ...others } = updateProductDto;
    return this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        ...others,
        category: {
          connect: {
            id: category_id,
          },
        },
      },
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.product.delete({
      where: {
        id: id,
      },
    });
  }
}
