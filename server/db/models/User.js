const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');

class User extends Model {};

User.init({
  firstName:{
    type: DataTypes.STRING,
    allowNull:false,
    validate:{
      notEmpty:true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
      notEmpty: true,
      len: [5, 30],
    },
  },
  password: {
    type:DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [8, 128],
    },
  },
  isAdmin: {
    type:DataTypes.BOOLEAN,
  }
}, {sequelize:db, modelName:'user'});


module.exports = User;

