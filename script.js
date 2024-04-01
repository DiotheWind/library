const cardContainer = document.querySelector("#card-container");

const library = [
  {
    title: "The Silent Patient",
    author: "Deo Seth Jabagat",
    pageCount: 45,
    readStatus: false,
  },
  {
    title: "What the Hell",
    author: "Mark Pratesh",
    pageCount: 512,
    readStatus: true,
  },
];

function Book(title, author, pageCount, readStatus) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
}

function displayLibrary(library) {
  library.forEach((book) => {
    const card = createCard(book);
    cardContainer.appendChild(card);
  });
}

function createCard(book) {
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

document.addEventListener("DOMContentLoaded", function () {
  displayLibrary(library);
});
