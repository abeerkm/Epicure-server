import mongoose from "mongoose";

const dishSchema = new mongoose.Schema(
  {
    dishName: {
      type: String,
      required: true,
    },
    restaurant: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const Dish = mongoose.model("Dish", dishSchema);

export default Dish;
