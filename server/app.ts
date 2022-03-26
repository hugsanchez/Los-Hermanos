import express, {Request, Response} from "express";

const path = require('path');
export const app = express();

app.use('/public', express.static('./public'));
app.use(express.json());

app.get('/', async(req:Request, res:Response, next) => {
  try{
    res.sendFile(path.join(__dirname, '../public/index.html'));
  } catch(err){
    next(err);
  }
});