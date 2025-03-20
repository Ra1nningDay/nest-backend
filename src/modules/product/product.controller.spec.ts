// import { Test, TestingModule } from "@nestjs/testing";
// import { ProductController } from "./product.controller";
// import { ProductService } from "./product.service";
// import { PrismaService } from "../prisma/prisma.service";
// import { PaginationDto } from "../dto/pagination.dto";

// describe("ProductController", () => {
//   let controller: ProductController;
//   let productService: ProductService;

//   const mockPrismaService = {
//     product: {
//       findMany: jest.fn().mockResolvedValue([
//         { id: 1, name: "Laptop", price: 1000 },
//         { id: 2, name: "Mouse", price: 50 },
//       ]),
//     },
//   };

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [ProductController],
//       providers: [
//         ProductService,
//         { provide: PrismaService, useValue: mockPrismaService },
//       ],
//     }).compile();

//     controller = module.get<ProductController>(ProductController);
//     productService = module.get<ProductService>(ProductService);
//   });

//   it("should be defined", () => {
//     expect(controller).toBeDefined();
//   });

//   it("should return an array of products", async () => {
//     const paginationDto: PaginationDto = { skip: 1, limit: 10 };
//     const result = await controller.findAllProduct(paginationDto);
//     expect(result).toEqual([
//       { id: 1, name: "Laptop", price: 1000 },
//       { id: 2, name: "Mouse", price: 50 },
//     ]);
//     expect(mockPrismaService.product.findMany).toHaveBeenCalled();
//   });
// });
