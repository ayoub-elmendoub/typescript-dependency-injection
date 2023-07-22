import { Router } from 'express';
import { injectable } from '../../tsyringe/src';
import BookService from './BookService';
import { constructor } from 'tsyringe/dist/typings/types';

@MyInjectable()
@injectable()
export default class BookController {
  bookService: BookService;
  router: Router;

  constructor(bookService: BookService) {
    this.bookService = bookService;
    this.router = new Router();
  }

  getBooksRoute() {
    return this.bookService.getBooks();
  }

  routes() {
    this.router.get('/', (_req, res) => res.send(this.getBooksRoute()));
    return this.router;
  }
}

function MyInjectable() {
  return function(target: any): any {
    const params: any[] = Reflect.getMetadata("design:paramtypes", target) || [];
    console.log('target: ', target);
    console.log('params: ', params);
    console.log(params[0].test());
    
    return target
  }
}
