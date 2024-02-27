const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookInfo = function(){
        return {title, author, pages, read};
    };
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

const book1 = new Book('LOTR', 'JK Rollings', '132', 'not read');
const book2 = new Book('The pig house', 'Jackie', '243', 'read');
const book3 = new Book('spade', 'Linc Snide', '600', 'not read');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

for (const book of myLibrary) {
    console.log(book.bookInfo());
}