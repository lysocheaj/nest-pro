import { Product } from './product.model';
export declare class ProductService {
    private products;
    insertProduct(title: string, desc: string, price: number): string;
    getProducts(): Product[];
    getSingleProduct(productId: string): Product;
    updateProduct(prodId: string, title: string, desc: string, price: number): void;
    private findProduct;
}
