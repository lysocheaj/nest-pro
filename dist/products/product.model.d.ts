import * as mongoose from 'mongoose';
export declare const ProdcutSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    title: string;
    description: string;
    price: string;
}>;
export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
}
