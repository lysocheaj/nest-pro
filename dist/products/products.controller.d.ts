import { ProductService } from './products.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): {
        id: string;
    };
    getAllProducts(): import("./product.model").Product[];
    getProduct(prodId: string): import("./product.model").Product;
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): void;
}
