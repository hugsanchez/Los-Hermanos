const { Sequelize } = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/LosHermanos_Inventory',
  { logging: false }
);


module.exports = db;
