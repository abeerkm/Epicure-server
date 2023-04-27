import mongoose from "mongoose";

const chefsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    chefsRestaurants: {
      type: Array,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

const Chefs = mongoose.model("Chefs", chefsSchema);

export default Chefs;
