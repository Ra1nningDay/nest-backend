import { Test, TestingModule } from "@nestjs/testing";
import { ProductCategoryController } from "./product_category.controller";
import { PrismaService } from "../prisma/prisma.service";
import { ProductCategoryService } from "./product_category.service";

describe("ProductCategoryController", () => {
  let controller: ProductCategoryController;

  let mockPrismaService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductCategoryController],
      providers: [
        ProductCategoryService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    controller = module.get<ProductCategoryController>(
      ProductCategoryController,
    );
    mockPrismaService = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
