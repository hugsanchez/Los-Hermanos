import { Request, Response, NextFunction } from "express";
const { models: { Category, Product } } = require('../db/models');
import { get, controller } from './decorators';

@controller('')
class CategoryController {
  @get('/categories/:id')
  async getProductsOfCategory(req:Request, res:Response, next:NextFunction){
    try{
      const { id } = req.params;
      const products = await Product.findAll({
        where:{categoryId: id}
      });
      res.send(products);
    } catch(ex){
      next(ex);
    }
  }
}