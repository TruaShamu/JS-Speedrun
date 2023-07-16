function openForm() {
  console.log("Button clicked");
  const targetDiv = document.getElementById("upload-form");
  const btn = document.getElementById("add-new-book");

  btn.addEventListener("click", function () {
    targetDiv.style.display =
      targetDiv.style.display === "none" ? "block" : "none";
  });

  const form = document.getElementById("upload-form");
  form.addEventListener("submit", function (event) {
    submitForm(event); // Call submitForm() when the form is submitted
  });
}

function submitForm(event) {
  console.log("Form submit clicked");
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  console.log(title, author, pages, read);
  const x = new Book(title, author, pages, read);
  console.log(x.info());
  addBookToLibrary(x);
  displayBooks();

  event.preventDefault();
}
