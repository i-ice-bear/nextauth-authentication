const { default: mongoose, Collection } = require("mongoose");

const Products = mongoose.Schema({
  productTitle: { type: String, default: null, required: true },
  productImage: { default: null, required: true, type: String },
  productDescription: { default: null, required: true, type: String },
  prodcutPrice: { default: null, required: true, type: Number },
});

mongoose.models = {};
export default mongoose.model("product", Products);
