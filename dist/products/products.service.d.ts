import { Product } from './product.model';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly productModel;
    private products;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, desc: string, price: number): Promise<string>;
    getProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }[]>;
    getSingleProduct(productId: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    updateProduct(prodId: string, title: string, desc: string, price: number): Promise<Product>;
    deletProduct(prodId: string): Promise<string>;
    private findProduct;
}
