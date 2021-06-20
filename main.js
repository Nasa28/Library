const bookList = document.getElementById("book-list");
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const read = document.getElementById("status");


function resetFields(){
  author.value = ""
  title.value = ""
  pages.value = ""
  read.value = ""
}
let myLibrary = [];

function Book(author, title,pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  // do stuff here
  
  const row = document.createElement('tr')
  row.innerHTML = `
    <td>${book.author}</td>
    <td>${book.title}</td>
    <td>${book.pages}</td>
    <td id="status" class='textView'>${book.read}</td>
    <td><a href="#" class="delete">Remove book</a></td>
    `
    bookList.appendChild(row)
}

document.getElementById("main-form").addEventListener('submit', (event)=>{
  event.preventDefault()

  const book = new Book(
    author.value, 
    title.value, 
    pages.value,
    read.value
    )
addBookToLibrary(book)
resetFields()
});