import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://anshu:samsepiol@next-auth.be5q42l.mongodb.net/test"
);

const newSchema = mongoose.Schema({
  userName: { type: String, default: null, required: true },
});

const dataSet = new newSchema({
  userName: "Anshu",
});
dataSet.save().then(() => console.log(dataSet));

mongoose.models = {};
export default mongoose.model("Schema", newSchema);
