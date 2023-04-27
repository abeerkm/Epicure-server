import {ObjectId} from "mongodb";
import mongoose from "mongoose";

const restaurantsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    chef: {
      type: String,
      required: true,
    },
    establishYear: {
      type: Number,
      required: true,
    },
    workingHours: {
      type: [{day: String, open: String, close: String}],
      default: [
        {
          day: "Sunday",
          open: "12:00",
          close: "22:00",
        },
        {
          day: "Monday",
          open: "12:00",
          close: "22:00",
        },
        {
          day: "Tuesday",
          open: "12:00",
          close: "22:00",
        },
        {
          day: "Wednesday",
          open: "12:00",
          close: "22:00",
        },
        {
          day: "Thursday",
          open: "12:00",
          close: "22:00",
        },
        {
          day: "Friday",
          open: "12:00",
          close: "22:00",
        },
        {
          day: "Saturday",
          open: "08:00",
          close: "22:00",
        },
      ],
    },
    dishes: {
      type: [ObjectId],
      required: true,
    },
    img: {
      type: String,
      required: true,
    },

  },
  {timestamps: true}
);
const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

export default Restaurants;
