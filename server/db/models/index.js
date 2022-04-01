const Category = require("./Category");
const Product = require("./Product");
const User = require('./User');

Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = {
  models:{
    Category,
    Product,
    User
  }
}
