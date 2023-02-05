/** * This is specified for connecting up to the database **/

import connectToDatabase from "../../../middleware/Mongoose";
import Products from "../../../models/Products";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body)
    for (let i = 0; i < array.length; i++) {
      let productAdd = new Products({
        productTitle: req.body[i].productTitle,
        productImage: req.body[i].productImage,
        productDescription: req.body[i].productDescription,
        prodcutPrice: req.body[i].prodcutPrice,
      });
      await productAdd.save();
    }
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ message: "Fuck you! It's a bad request" });
  }
};

export default connectToDatabase(handler);
