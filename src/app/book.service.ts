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
    title: 'Повесть о двух городах',
    year: 1859,
    author: 'Чарльз Диккенс',
    pages: 448,
    publisher: 'Вече',
    cover: 'https://www.labirint.ru/books/251003/',
    authorPhoto: 'https://www.google.com/search?q=%D1%87%D0%B0%D1%80%D0%BB%D1%8C%D0%B7+%D0%B4%D0%B8%D0%BA%D0%BA%D0%B5%D0%BD%D1%81+%D1%84%D0%BE%D1%82%D0%BE+%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D0%B5%D0%BB%D1%8F&sca_esv=6c4a24e0bcfeebc3&sxsrf=AHTn8zqb8-UoDVLoAuvlB6fH4YMzCtbDIA%3A1747345939560&ei=E2ImaML-Ia-ywPAPofiT8Qw&oq=%D1%87%D0%B0%D1%80%D0%BB%D1%8C%D0%B7+%D0%B4%D0%B8%D0%BA%D0%BA%D0%B5%D0%BD%D1%81+%D1%84%D0%BE%D1%82%D0%BE&gs_lp=Egxnd3Mtd2l6LXNlcnAiJNGH0LDRgNC70YzQtyDQtNC40LrQutC10L3RgSDRhNC-0YLQvioCCAEyBRAuGIAEMgYQABgWGB4yBhAAGBYYHjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRI7CVQ4AhYuhRwAXgBkAEAmAFnoAHaA6oBAzQuMbgBAcgBAPgBAZgCCKAC1CLCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAcICFhAuGIAEGLADGEMY1AIYyAMYigXYAQHCAhIQABiABBixAxhDGIoFGEYY-wHCAgoQABiABBgUGIcCwgIKEAAYgAQYQxiKBcICCBAuGIAEGNQCwgIKEC4YgAQYFBiHAsICBRAAGIAEwgIeEAAYgAQYsQMYQxiKBRhGGPsBGJcFGIwFGN0E2AEBwgIUEC4YgAQYlwUY3AQY3gQY3wTYAQGYAwCIBgGQBhK6BgYIARABGAmSBwkxLjUuNy0xLjGgB_tIsgcJMC41LjctMS4xuAfKIsIHBzAuMS41LjLIBzg&sclient=gws-wiz-serp#vhid=TVg2TNn_6TJK2M&vssid=_JGImaLnyFsamwPAP24eUkQE_39',
    reviews: ['Прекрасный исторический роман о временах Французской революции.', 'Отличная книга!']
  };

  getBook(): Book {
    return this.book;
  }
}


  // constructor() { }

