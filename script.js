class Book {
  constructor(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value + "pages";
    this.read = form.read.checked;
  }
}

let myLibrary = [];
let newBook;

function addBookToLibrary() {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  setData();
  form.reset();
}

console.log(addBookToLibrary("book", "me", "11", "yes"));
console.log(myLibrary[Book]);
