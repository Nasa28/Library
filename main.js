const bookList = document.getElementsByClassName("book-list");
const bookAuthor = document.getElementById("author");
const bookTitle = document.getElementById("title");
const bookPages = document.getElementById("pages");
const bookStatus = document.getElementById("status");

let myLibrary = [];

function Book(author, title,pages, status = "unread") {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(event) {
  event.preventDefault();
  const book = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookStatus.value,
  );

  myLibrary.push(book);
}