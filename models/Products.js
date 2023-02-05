const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, default: null, required: true },
    userName: { type: String, default: null },
    products: [
      {
        productId: { type: Number, required: 0 },
        productName: { type: String, default: null },
        productDescription: { type: String, default: null },
      },
    ],
    address: { type: String, default: null },
    deliveryLocation: { type: String, default: null, require: true },
    amountProduct: { type: Number, default: 0 },
    productStatus: { type: "String", default: "Pending", require: true },
  },
  { timestamps: true, timeseries: true }
);

export default mongoose.model("product", productSchema);
