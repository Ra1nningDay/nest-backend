import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./modules/user/user.module";
import { ProductModule } from "./modules/product/product.module";
import { ProductCategoryController } from "./modules/product_category/product_category.controller";
import { ProductCategoryModule } from "./modules/product_category/product_category.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    ProductModule,
    ProductCategoryModule,
  ],
  controllers: [AppController, ProductCategoryController],
  providers: [AppService],
})
export class AppModule {}
