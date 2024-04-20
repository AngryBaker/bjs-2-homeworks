class PrintEditionItem {
  constructor (name, releaseDate, pagesCount ) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }
  _state = 100;
  type = null;
  fix() {
    this.state = (this._state *= 1.5);
  }
  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  type = "magazine";
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
  }
  type = "book";
}

class NovelBook extends Book {
  type = "novel";
}

class FantasticBook extends Book {
  type = "fantastic";
}

class DetectiveBook extends Book {
  type = "detective";
}

class Library {
  constructor(name) {
    this.name = name;
  }
  books = [];

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let findingResult = this.books.find((element) => element[type] === value);
    if (findingResult) {
        return findingResult;
    } else {
        return null;
    }
  }

  giveBookByName(bookName) {
    let findingResult = this.books.find((element) => element.name === bookName);
    if (!findingResult) {
      return null;
    
    } else {
       return this.books.splice(this.books.indexOf(findingResult), 1)[0];
    }
  }
}