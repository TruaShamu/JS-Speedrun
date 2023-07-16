// Import necessary code from other files
// Make sure to include the <script> tags in the HTML file in the correct order

// Create book instances and add them to the library
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const book2 = new Book("Harry Potter", "J.K. Rowling", 400, false);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

// Call functions to display books and open the form
displayBooks();
openForm();
submitForm();
