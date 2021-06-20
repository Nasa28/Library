const bookList = document.getElementById("book-list");
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const read = document.getElementById("status");
const add = document.getElementById("btn-main");
let books = getLibrary();
let myLibrary = [];

function addBook(book) {
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

function getLibrary(library) {
  library = JSON.parse(localStorage.getItem('books'));
return library;
}

function deleteBook(title) {
  books.forEach((book, index) => {
    if (book.title === title) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
}

function displayBooks() {
  // loop through the books
  books.forEach((book) => addBookToLibrary(book));
}

function removeBook(ele){
  if(ele.classList.contains("delete")){
    ele.parentElement.parentElement.remove()
  }
}
function resetFields(){
  author.value = ""
  title.value = ""
  pages.value = ""
  read.value = ""
}

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
    <td> <a href= "#" id="status" class='status text-decoration-none'>${book.read}</a></td>
    <td><a href="#" class="delete text-danger text-decoration-none">Remove book</a></td>
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
    myLibrary.push(addBookToLibrary(book))
    addBook(book);
    location.reload()
    resetFields()
});

bookList.addEventListener("click", (e) => {
  removeBook(e.target)
  deleteBook(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
})

document.addEventListener('DOMContentLoaded', displayBooks());

add.addEventListener('click', (event)=>{
  
myButton= document.getElementById("main-form")
myButton.classList = "newclass"
myButton.style = "display:block; width:35%; margin: 30px auto"
})
