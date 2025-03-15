import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {type: String, require: true},
  description: {type: String, require: true},
  price: {type: Number, require: true},
  images: {type: Array, require: true},
  category: {type: String, require: true},
  subCategory: {type: String, require: true},
  sizes: {type: Array, require: true},
  bestseller: {type: String},
  date: {type: Number, require: true}
});

const productModel = mongoose.models.product || mongoose.model('product', productSchema);

export default productModel
