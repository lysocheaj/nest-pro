import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({ // blueprint of the Model and define the product should look like
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
});

// Interface is just only the type description no instantiate 
// extends mongoose.Document (npm install --save-dev @types/mongoose) 
// interface Product is base on mongoose
export interface Product extends mongoose.Document  { 
  id: string;
  title: string;
  description: string;
  price: number;
  test: string;
}