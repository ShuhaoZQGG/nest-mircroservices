import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Product])
  ],
  controllers: [ProductController]
})
export class ProductModule {}
