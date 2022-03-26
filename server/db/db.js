const { Sequelize } = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/LosHermanos_Inventory',
  { logging: false }
);

const initDB = async() => {
  try{
    await db.sync({ force: true });
  } catch(err){
    console.log(err);
  }
};

module.exports = { db, initDB };