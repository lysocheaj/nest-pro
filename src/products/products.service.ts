import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { ProductController } from './products.controller';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    // const product = this.findProduct(productId)[0]; can this way
    const [product, index] = this.findProduct(productId);
    return product;
  }

  updateProduct(prodId: string, title: string, desc: string, price: number) {
    const product = this.findProduct(prodId)[0];
    const index = this.findProduct(prodId)[1];
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!productIndex) {
      throw new NotFoundException('Could not found product!');
    }
    return [product, productIndex];
  }
}
