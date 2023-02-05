/** * This is specified for connecting up to the database **/

import connectToDatabase from "../../../middleware/Mongoose";
import Products from "../../../models/Products";

const handler = async (req, res) => {
  let product = await Products.find();
  res.status(200).json({ product });
};

export default connectToDatabase(handler);
