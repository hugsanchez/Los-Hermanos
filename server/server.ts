import { app } from './app';
const { syncAndSeed } = require('./db/seed');

const PORT = process.env.PORT || 3000;

const init = async() => {
  await syncAndSeed();

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

init();