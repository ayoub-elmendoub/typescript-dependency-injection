import { injectable } from '../../tsyringe/src';

import BookRepository from './BookRepository';

@injectable()
export default class BookService {
  bookRepository: BookRepository;

  constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  getBooks() {
    return this.bookRepository.getBooks();
  }

  static test() {
    return 'yeahhhhh'
  }
}
