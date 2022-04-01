import express, {Request, Response} from "express";
import { AppRouter } from "./AppRouter";
import './controllers/ProductController';
import './controllers/CategoryController';

const path = require('path');
export const app = express();

app.use('/public', express.static('./public'));
app.use(express.json());

app.use(AppRouter.getInstance());

app.get('/', async(req:Request, res:Response, next) => {
  try{
    res.sendFile(path.join(__dirname, '../public/index.html'));
  } catch(err){
    next(err);
  }
});