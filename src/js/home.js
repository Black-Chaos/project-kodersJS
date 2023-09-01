import Book_api from './APIs/book-api';

let categoryDivWraper = '';

// book.getBookById('643282b1e85766588626a0dc').then(console.log);
getAllCategoriesBookTopList();

export function getAllCategoriesBookTopList() {
  const book = new Book_api();

  categoryDivWraper = document.querySelector('.category-wraper');

  book.getTopBooks().then(resp => {
    renderMarkup(resp);
  });
}

function renderMarkup(resp) {
  categoryDivWraper.insertAdjacentHTML(
    'beforeend',
    `<h1 class = "">Best Sellers <span class = "">Books</span></h1>`
  );

  resp
    .map(({ list_name, books }) =>
      renderCategoriesBookTopList(list_name, books)
    )
    .join('');
}

function renderCategoriesBookTopList(list_name, books) {
  let listLi = '';
  books.map(({ book_image, title, author }) => {
    const markup = `<li class = "">
              <a href="#" class="link"><img class="img" src="${book_image}">
              <h3 class = "">${title}</h3>
              <p class = "">${author}</p>
              </a></li>`;
    listLi += markup;
  });

  const categoryDiv = `<div class = ""><h2 class = "">${list_name}</h2>
          <ul class="category-list">${listLi}</ul>
          <button class="" type="button"></button></div>`;
  categoryDivWraper.insertAdjacentHTML('beforeend', categoryDiv);
}

getBooks();
export function getBooks() {
  const book = new Book_api();
  book.getBookByCategory('Advice How-To and Miscellaneous').then(console.log);
}
