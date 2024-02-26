function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookinfo = function(){
        return(this.title, this.author, this.pages, this.read);
    };
}

const book1 = new Book('LOTR', 'JK Rollings', '132', 'not read');
console.log(book1.bookinfo)