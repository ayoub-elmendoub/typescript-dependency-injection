import 'reflect-metadata';
// import express from 'express';
// import { container } from './tsyringe/src';
import BookController from './src/book/BookController';
import BookService from './src/book/BookService';
import BookRepository from './src/book/BookRepository';
// const port = process.env.port || 5000;

// const app = express();

// app.use('/books', container.resolve(BookController).routes());
// app.listen(port, () => console.log(`listening on port: ${port}`));

// const bc = container.resolve(BookController)
const bb = new BookController(new BookService(new BookRepository()))