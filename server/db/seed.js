const  db = require('./db');
const User = require('./models/User');
const Product = require('./models/Product');


const syncAndSeed = async() => {
  try{
    await db.authenticate();
    console.log('DB Connected');

    await db.sync({ force: true});

    const user1 = new User({
      firstName: 'test',
      lastName: 'sanchez',
      email: 'test@gmail.com',
      username: 'testsan',
      password: '12345678',
      isAdmin: true,
    });

    const product1 = new Product({
      name: 'product1',
      price: 10,
      imgUrl: '#',
    });

    await Promise.all([user1.save(), product1.save()])
  } catch(err){
    console.log(err);
  }
};

module.exports = { syncAndSeed };