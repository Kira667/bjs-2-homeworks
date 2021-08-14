"use strict";

class PrintEditionItem {
  type = null;
  #state = 100;
  name = null;
  releaseDate = null;
  pagesCount = null;

  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }

  set state(number) {
    if (number < 0) {
      this.#state = 0;
    } else if (number > 100) {
      this.#state = 100;
    } else {
      this.#state = number;
    }
  }

  get state() {
    return this.#state;
  }

  fix() {
    this.state *= 1.5;
  }
}

class Magazine extends PrintEditionItem {
  type = "magazine";

  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
  }
}

class Book extends PrintEditionItem {
  type = "book";
  author = null;

  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);

    this.author = author;
  }
}

class NovelBook extends Book {
  type = "novel";

  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
  }
}

class FantasticBook extends Book {
  type = "fantastic";

  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
  }
}

class DetectiveBook extends Book {
  type = "detective";

  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
  }
}

// Задача №2. Библиотека

class Library {
  name = null;
  books = [];

  constructor(name) {
    this.name = name;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(key, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][key] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const saveBook = this.books[i];
        this.books.splice(i, 1);
        return saveBook;
      }
    }
    return null;
  }
}

const bookFoo = new Book("Лев Толстой", "Война и Мир", 2019, 500);
const bookBar = new NovelBook("Лев Толстой 1", "Война и Мир 1", 2020, 501);

const arrBook = [
  new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168),
  new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008),
  new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138),
  new Magazine("Мурзилка", 1924, 60),
];

// new Book('Книга 1', 'Автор 1', 1970, 350);

const library1 = new Library("library1");

library1.addBook(bookFoo);
library1.addBook(bookBar);
library1.addBook(new Book('Автор 1', 'Книга 1', 1970, 350));

for (let i = 0; i < arrBook.length; i++) {
  library1.addBook(arrBook[i]);
}

// console.log(library1.books);

console.log(library1.giveBookByName('Пикник на обочине'));

// console.log(library1.findBookBy('author', 'Лев Толстой 1'));
// console.log(library1.findBookBy('type', 'novel'));
// console.log(library1.findBookBy('name', 'Война и Мир 1'));


//ЗАДАЧА 3

class Student {
  
}







const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");