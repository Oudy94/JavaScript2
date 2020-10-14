"use strict";

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true
  }
];


for (const book of books){
    //create list of books
    const listBooks = document.querySelector("ul");
    const listBooksItems = document.createElement("li");
    const bookParagraph = document.createElement("p");

    listBooks.appendChild(listBooksItems);
    listBooksItems.appendChild(bookParagraph);
    bookParagraph.textContent = `${book.title} - ${book.author}`;

    //create books image
    const bookImage = document.createElement("img");

    //create an image name from the book name itself
    const BookImageName = createBookImageName(book.title);

    bookImage.src = `images/${BookImageName}.jpg`
    listBooksItems.appendChild(bookImage);

    //check if already read the book or no
    //(book.alreadyRead) ? listBooksItems.style.backgroundColor = "green": listBooksItems.style.backgroundColor = "red" ;
    listBooksItems.style.backgroundColor = book.alreadyRead ? 'green' : 'red';

}

function createBookImageName(bookName){
    return bookName.replace(/ /g, ""); 
}
