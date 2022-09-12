import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose'; // tell nestjs that u want to inject mongoose model
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, desc: string, price: number) {
    // const prodId = Math.random().toString();
    const newProduct = new this.productModel({
      title,
      description: desc,
      price,
    });
    // this.products.push(newProduct);
    const result = await newProduct.save();
    console.log('insertProduct: ', result);
    return result.id as string;
  }

  async getProducts() {
    const products = await this.productModel.find().exec(); // exect() return the real promise, but also fine if we delete it 
    return products.map((prod) => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      price: prod.price,
    }));
  }

  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    };;
  }

  async updateProduct(prodId: string, title: string, desc: string, price: number): Promise<Product> {
    // const product = this.findProduct(prodId)[0]; can this way
    // // const index = this.findProduct(prodId)[1];
    const updatedProduct = await this.findProduct(prodId);
    if (title) {
      updatedProduct.title = title;
    }
    if (desc) {
      updatedProduct.description = desc;
    }
    if (price) {
      updatedProduct.price = price;
    }
    return updatedProduct.save();
  }

  async deletProduct(prodId: string) {
    const result = await this.productModel.deleteOne({id: prodId}).exec();
    console.log(result);
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find the prodcut!');
    }
    return ('Deleted!');
  }

  private async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id); // this.productModel.findOne({_id: id})
    } catch {
      throw new NotFoundException('Could not found product!');
    }
    if (!product) {
      throw new NotFoundException('Could not found product!');
    }
    return product;
  }
}
