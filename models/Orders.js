const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userID: { type: Number, default: 0 },
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


mongoose.models = {}
export default mongoose.model("Order", orderSchema);
