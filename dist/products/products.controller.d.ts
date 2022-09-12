import { ProductService } from './products.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): Promise<{
        id: string;
    }>;
    getAllProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }[]>;
    getProduct(prodId: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): Promise<any>;
    deleteProduct(prodId: string): Promise<string>;
}
