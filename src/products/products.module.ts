import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { ProductService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.model';

@Module({
  imports: [
    // allow us to inject the module to other file that we want to work with it
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]), 
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductsModule {}
