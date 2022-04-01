import 'reflect-metadata';

import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { Metadatakeys } from './Metadatakeys';
import { NextFunction, RequestHandler, Request, Response } from 'express';

export function controller(routePrefix:string){
  return function(target: Function){
    const router = AppRouter.getInstance();
    for(let key of Object.getOwnPropertyNames(target.prototype)){

      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(Metadatakeys.path, target.prototype, key);

      const method: Methods = Reflect.getMetadata(Metadatakeys.method, target.prototype, key);

      const middlewares = Reflect.getMetadata(Metadatakeys.middleware, target.prototype, key) || [];

      const requiredBodyProps = Reflect.getMetadata(Metadatakeys.validator, target.prototype, key) || [];


      if(path){
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler)
      }
    }
  }
}