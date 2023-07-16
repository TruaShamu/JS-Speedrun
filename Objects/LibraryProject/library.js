let myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const myElement = document.getElementById("x");
  myElement.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let li = document.createElement("div");
    li.className = "book-item";
    li.innerText = myLibrary[i].info();

    // Create a button element for removing the book
    let button = document.createElement("button");
    button.innerText = "Remove";

    // Create a button element for toggling read status
    let toggleButton = document.createElement("button");
    toggleButton.innerText = myLibrary[i].read
      ? "Mark as Unread"
      : "Mark as Read";

    // Add event listener for removing the book
    button.addEventListener("click", function (event) {
      const bookElement = event.target.parentNode;
      const index = Array.from(bookElement.parentNode.children).indexOf(
        bookElement
      );
      myLibrary.splice(index, 1);

      displayBooks(); // Update the display after removing the book
    });

    // Add event listener for toggling read status
    toggleButton.addEventListener(
      "click",
      createToggleButtonHandler(i) // Pass the index to the handler function
    );

    // Append the buttons to the li element
    li.appendChild(button);
    li.appendChild(toggleButton);

    myElement.appendChild(li);
  }
}

// Function to create the event handler for toggling read status
function createToggleButtonHandler(index) {
  return function () {
    myLibrary[index].toggleReadStatus();
    displayBooks();
  };
}
