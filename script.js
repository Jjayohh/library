// let myLibrary = [];
// //console.log(myLibrary);

// let newBook;

// class Book {
//   constructor(title, author, pages, read) {
//     this.title = form.title.value;
//     this.author = form.author.value;
//     this.pages = form.pages.value + "pages";
//     this.read = form.read.checked;
//   }
// }

// function addBookToLibrary(title, author, pages, read) {
//   newBook = new Book(title, author, pages, read);
//   myLibrary.push(newBook);
//   SVGMetadataElement();
//   WebGL2RenderingContext();
//   form.reset();
// }

// console.log(addBookToLibrary("book", me, 11, yes));
// console.log(myLibrary.info);

let popup = document.getElementById("popup");
let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let bookPages = document.getElementById("pages");
let bookRead = document.getElementById("read");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}
