const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },

    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      default: 0,
    },

    price: {
      type: Number,
      required: [true, "Product price is required"],
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },

  {
    timestamps: true, // auto adds createdAt and updatedAt
  }

);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
