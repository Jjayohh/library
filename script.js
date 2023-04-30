// class Book {
//   constructor(title, author, pages, read) {
//     this.title = form.title.value;
//     this.author = form.author.value;
//     this.pages = form.pages.value + "pages";
//     this.read = form.read.checked;
//   }
// }

// let myLibrary = [];
// //console.log(myLibrary);
// let newBook;

function addBookToLibrary() {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  SVGMetadataElement();
  WebGL2RenderingContext();
  form.reset();
}

const popup = document.getElementById("popup");
const libraryBoxes = document.getElementById("libraryBoxes");
// const bookTitle = document.getElementById("#title");
// const bookAuthor = document.getElementById("#author");
// const bookPages = document.getElementById("#pages");
// const bookRead = document.getElementById("#read");
const addBtn = document.querySelector("#subBtn");
const DivContainer = document.getElementById("libraryBoxes");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// });

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

function addBook() {
  const newDiv = document.createElement("div");

  newDiv.classList.add("book");
  DivContainer.appendChild(newDiv);
}

addBtn.addEventListener("click", addBook);
