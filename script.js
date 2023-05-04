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
  event.preventDefault();

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
  const library = document.querySelector("#libraryBoxes");
  const DivContainer = document.getElementById("libraryBoxes");
  const readBtn = document.getElementById("readBtn");
  const newDiv = document.createElement("div");
  const bookTitle = document.createElement("div");
  const bookAuthor = document.createElement("div");
  const bookPages = document.createElement("div");
  const bookRead = document.createElement("button");
  const removeBtn = document.createElement("button");

  newDiv.classList.add("book");
  newDiv.setAttribute("id", myLibrary.indexOf(item));
  DivContainer.appendChild(newDiv);

  bookTitle.classList.add("title");
  bookTitle.textContent = title.value;
  newDiv.appendChild(bookTitle);

  bookAuthor.classList.add("author");
  bookAuthor.textContent = author.value;
  newDiv.appendChild(bookAuthor);

  bookPages.classList.add("pages");
  bookPages.textContent = pages.value;
  newDiv.appendChild(bookPages);

  bookRead.classList.add("readBtn");
  bookRead.setAttribute("id", "readBtn");
  newDiv.appendChild(bookRead);
  if (item.read === false) {
    readBtn.textContent = "Not Read";
    readBtn.style.color = "#000000";
  } else {
    readBtn.textContent = "Read";
    readBtn.style.color = "#000000";
  }

  removeBtn.textContent = "Remove";
  removeBtn.setAttribute("id", "removeBtn");
  newDiv.appendChild(removeBtn);

  library.appendChild(newDiv);

  removeBtn.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    setData();
    render();
  });

  bookRead.addEventListener("click", () => {
    item.read = !item.read;
    setData();
    render();
  });
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
