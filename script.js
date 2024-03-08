document.addEventListener('DOMContentLoaded', () => {
    const myLibrary = [];

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.bookInfo = function () {
            return { title, author, pages, read };
        };
    }

    function addBookToLibrary(book) {
        myLibrary.push(book);
    }

    const book1 = new Book("LOTDR", "J.R.Tollkin", "123", "read");
    addBookToLibrary(book1);

    const libraryContainer = document.getElementById("library-container");

    // Function to render all books in the library
    function renderLibrary() {
        libraryContainer.innerHTML = ""; 

        for (const book of myLibrary) {
            const card = document.createElement("div");
            card.classList.add("book-card");

            const titleElement = document.createElement("h2");
            titleElement.textContent = `Title: ${book.title}`;

            const authorElement = document.createElement("p");
            authorElement.textContent = `Author: ${book.author}`;

            const pagesElement = document.createElement("p");
            pagesElement.textContent = `Pages: ${book.pages}`;

            const readElement = document.createElement("p");
            readElement.textContent = `Read: ${book.read}`;

            card.appendChild(titleElement);
            card.appendChild(authorElement);
            card.appendChild(pagesElement);
            card.appendChild(readElement);

            libraryContainer.appendChild(card);
        }
    }

    const btnShowDialog = document.getElementById("showDialog");
    const newBookDialog = document.getElementById("newBook");
    const btnCloseDialog = document.getElementById("closeDialog");
    const authorName = document.getElementById("author");
    const bookTitle = document.getElementById("title");
    const bookPages = document.getElementById("pages");
    const bookRead = document.getElementById("read_book");
    const btnAddBook = document.getElementById("addBook");

    btnShowDialog.addEventListener("click", () => {
        // Clear the input fields
        authorName.value = "";
        bookTitle.value = "";
        bookPages.value = "";
        bookRead.value = "read";  
        
        newBookDialog.showModal();
    });

    btnCloseDialog.addEventListener("click", () => {
        newBookDialog.close();
    });

    btnAddBook.addEventListener("click", () => {
        const title = bookTitle.value;
        const author = authorName.value;
        const pages = bookPages.value;
        const read = bookRead.value;

        if (title && author && pages && read) {
            const newBook = new Book(title, author, pages, read);
            addBookToLibrary(newBook);
            renderLibrary();
            newBookDialog.close();
        } else {
            alert("Please fill in all the details.");
        }
    });

    // Initial rendering of the library
    renderLibrary();
});
