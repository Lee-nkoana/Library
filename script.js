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

    const libraryContainer = document.getElementById("library-container");

    // Function to render all books in the library
    function renderLibrary() {
        const libraryContainer = document.getElementById("library-container");
        libraryContainer.innerHTML = ""; 
    
        myLibrary.forEach((book, index) => {
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
    
            const btnReadToggle = document.createElement("button");
            btnReadToggle.classList.add('readToggle');
            btnReadToggle.textContent = book.read === 'read' ? 'Mark Unread' : 'Mark Read';
            btnReadToggle.title = 'Click button to change read status';
    
            // Attach event listener to toggle read status
            btnReadToggle.addEventListener('click', () => {
                // Toggle the read status
                book.read = book.read === 'read' ? 'not read' : 'read';
                // Update the read status text content
                readElement.textContent = `Read: ${book.read}`;
                // Optionally, update the button text content or style
                btnReadToggle.textContent = book.read === 'read' ? 'Mark Unread' : 'Mark Read';
            });
    
            const btnRemove = document.createElement("button");
            btnRemove.classList.add('removeButton');
            btnRemove.textContent = 'Remove Book';
            btnRemove.title = 'Click button to remove the book from the library';
            // Associate the remove button with the index of the book
            btnRemove.dataset.index = index;
    
            // Attach event listener to remove button
            btnRemove.addEventListener('click', () => {
                // Extract the index of the book from the data attribute
                const bookIndex = parseInt(btnRemove.dataset.index);
                // Remove the book from the library array
                myLibrary.splice(bookIndex, 1);
                // Re-render the library to reflect the updated state
                renderLibrary();
            });
    
            card.appendChild(titleElement);
            card.appendChild(authorElement);
            card.appendChild(pagesElement);
            card.appendChild(readElement);
            card.appendChild(btnReadToggle);
            card.appendChild(btnRemove);
    
            libraryContainer.appendChild(card);
        });
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
