const cardContainer = document.querySelector("#card-container");
const form = document.querySelector("#add-book-form");
const addBookModal = document.querySelector("#add_book_modal");

let library = JSON.parse(localStorage.getItem("library")) || [];

function Book(title, author, pageCount, readStatus) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
}

function addBookToLibrary(book) {
  library.push(book);
  updateLocalStorage();
}

function displayLibrary(library) {
  cardContainer.innerHTML = "";
  library.forEach((book, index) => {
    const card = createCard(book, index);
    cardContainer.appendChild(card);
  });
}

function createCard(book, index) {
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("p");
  const bookNumberOfPages = document.createElement("p");
  const bookStatus = document.createElement("p");
  const btnContainer = document.createElement("div");
  const changeStatusBtn = document.createElement("button");
  const deleteBookBtn = document.createElement("button");

  bookTitle.textContent = book.title;
  bookTitle.setAttribute("class", "card-title");

  bookAuthor.textContent = "Author: " + book.author;
  bookAuthor.setAttribute("class", "text-gray-600");

  bookNumberOfPages.textContent = "Number of pages: " + book.pageCount;
  bookNumberOfPages.setAttribute("class", "text-gray-600");

  if (book.readStatus) {
    bookStatus.textContent = "Already read";
    bookStatus.setAttribute("class", "text-success");
  } else {
    bookStatus.textContent = "Haven't read yet";
    bookStatus.setAttribute("class", "text-error");
  }

  changeStatusBtn.textContent = "Change Read Status";
  changeStatusBtn.setAttribute("class", "btn btn-info");

  deleteBookBtn.textContent = "Remove Book";
  deleteBookBtn.setAttribute("class", "btn btn-error");

  changeStatusBtn.addEventListener("click", () => changeReadStatus(index));
  deleteBookBtn.addEventListener("click", () => removeBook(index));

  btnContainer.appendChild(changeStatusBtn);
  btnContainer.appendChild(deleteBookBtn);
  btnContainer.setAttribute("class", "card-actions justify-end mt-5");

  cardBody.appendChild(bookTitle);
  cardBody.appendChild(bookAuthor);
  cardBody.appendChild(bookNumberOfPages);
  cardBody.appendChild(bookStatus);
  cardBody.appendChild(btnContainer);
  cardBody.setAttribute("class", "card-body");

  card.appendChild(cardBody);
  card.setAttribute("class", "card w-96 bg-base-200 shadow-xl");

  return card;
}

function changeReadStatus(index) {
  library[index].readStatus = !library[index].readStatus;
  updateLocalStorage();
  displayLibrary(library);
}

function removeBook(index) {
  library.splice(index, 1);
  updateLocalStorage();
  displayLibrary(library);
}

function updateLocalStorage() {
  localStorage.setItem("library", JSON.stringify(library));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const number = Number(document.querySelector("#number").value);
  const checkbox = document.querySelector("#checkbox").checked

  const book = new Book(title, author, number, checkbox);
  addBookToLibrary(book);

  form.reset();
  displayLibrary(library);
  addBookModal.close();
});

displayLibrary(library);