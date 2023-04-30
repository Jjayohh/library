const addBtn = document.querySelector("#subBtn");
const popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

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
  SVGMetadataElement();
  WebGL2RenderingContext();
  render();
  form.reset();
}

function render() {
  const display = document.getElementById("libraryBoxes");
  const books = document.querySelectorAll(".book");
  books.forEach((book) => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}

function addBook(item) {
  const newDiv = document.createElement("div");
  const DivContainer = document.getElementById("libraryBoxes");
  const bookTitle = document.getElementById("title");
  const bookAuthor = document.getElementById("author");
  const bookPages = document.getElementById("pages");
  // const bookRead = document.getElementById("read");

  newDiv.classList.add("book");
  newDiv.setAttribute("id", myLibrary.indexOf(item));

  bookTitle.classList.add("title");
  bookTitle.textContent = item.title;
  newDiv.appendChild(bookTitle);

  bookAuthor.classList.add("author");
  bookAuthor.textContent = item.author;
  newDiv.appendChild(bookAuthor);

  bookPages.classList.add("pages");
  bookPages.textContent = item.pages;
  newDiv.appendChild(bookPages);

  DivContainer.appendChild(newDiv);
}

addBtn.addEventListener("click", addBook, render);

function setData() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function restore() {
  if (!localStorage.myLibrary) {
    render();
  } else {
    let objects = localStorage.getItem("myLibrary"); // gets information from local storage to use in below loop to create DOM/display
    objects = JSON.parse(objects);
    myLibrary = objects;
    render();
  }
}

restore();
