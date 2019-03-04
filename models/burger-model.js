const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const burgerSchema = new Schema(
  {
    name: { type: String, required: true },
    size: { type: String, enum: ["single", "double", "triple"] },
    toppings: [
      {
        type: String,
        enum: [
          "cheese",
          "bacon",
          "tomato",
          "lettuce",
          "pickles",
          "ketchup",
          "mayonnaise",
          "mustard"
        ]
      }
    ]
  },
  {
    timestamps: true
  }
);

const Burger = mongoose.model("Burger", burgerSchema);

module.exports = Burger;
