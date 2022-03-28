const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');

class Product extends Model {}

Product.init({
  name:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notEmpty:true,
    },
  },
  price:{
    type:DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notEmpty:true,
    },
  },
  imgUrl:{
    type:DataTypes.TEXT,
    allowNull: false,
    defaultValue:'#',
    validate:{
      notEmpty:true,
    },
  },
},{sequelize:db, modelName: 'product'});


module.exports = Product;
