import { Product } from './product.model';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly productModel;
    private products;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, desc: string, price: number): Promise<string>;
    getProducts(): Product[];
    getSingleProduct(productId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateProduct(prodId: string, title: string, desc: string, price: number): void;
    deletProduct(prodId: string): void;
    private findProduct;
}
