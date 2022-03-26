import { app } from './app';

const PORT = process.env.PORT || 3000;

const init = async() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

init();