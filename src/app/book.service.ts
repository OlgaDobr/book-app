import { Injectable } from '@angular/core';

export interface Book {
  title: string;
  year: number;
  author: string;
  pages: number;
  publisher: string;
  cover: string;
  authorPhoto: string;
  reviews: string[];
}


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private book: Book = {
    title: 'Пример книги',
    year: 2023,
    author: 'Автор Книги',
    pages: 300,
    publisher: 'Издательство',
    cover: 'https://via.placeholder.com/150',
    authorPhoto: 'https://via.placeholder.com/150',
    reviews: ['Отличная книга!', 'Очень познавательная.']
  };

  getBook(): Book {
    return this.book;
  }
}


  constructor() { }

