import { Request, Response, NextFunction } from "express";
const { models: { Product }} = require('../db/models');
import { get, controller } from "./decorators";


@controller('')
class ProductController {
  @get('/products')
  async getAllProducts(req:Request, res:Response, next:NextFunction){
    try{
      const products = await Product.findAll();
      res.send(products);
    } catch(ex){
      next(ex);
    }
  }
}