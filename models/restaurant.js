const mongoose = require("mongoose");
const food = require("./food.js");
const address = require("./addresses.js");
const category = require("./categories.js");
const comment = require("./comments.js");

const restaurantSchema = new mongoose.Schema({
  id: String,
  name: String,
  logo: String,
  openingTime: Number,
  closingTime: Number,
  averageRate: Number,
  address: address.schema, 
  categories: [category.schema], 
  foods: [food.schema],
  comments: [comment.schema]
});

module.exports = {
  schema: restaurantSchema,
  model: mongoose.model("restaurant", restaurantSchema)
};
