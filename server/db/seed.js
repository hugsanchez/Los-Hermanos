const  db = require('./db');
const { models:{ Product, Category, User } } = require('./models/index');


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
      categoryId: 1
    });
    const product2 = new Product({
      name: 'product2',
      price: 12,
      imgUrl: '#',
      categoryId: 2,
    });
    const product3 = new Product({
      name: 'product3',
      price: 14,
      imgUrl: '#',
      categoryId: 3
    });
    const product4 = new Product({
      name: 'product4',
      price: 16,
      imgUrl: '#',
      categoryId: 2
    });

    const category1 = new Category({
      name: 'category1'
    });
    const category2 = new Category({
      name:'category2'
    });
    const category3 = new Category({
      name: 'category3'
    });

    await Promise.all([user1.save(), category1.save(),category2.save(),category3.save(), product1.save(), product2.save(), product3.save(), product4.save()])
  } catch(err){
    console.log(err);
  }
};

module.exports = { syncAndSeed };