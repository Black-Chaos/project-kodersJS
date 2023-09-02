import Book_api from './APIs/book-api';

const book = new Book_api();
const categoryDivWraper = document.querySelector('.category-wraper');

// book.getBookById('643282b1e85766588626a0dc').then(console.log);
getAllCategoriesBookTopList();

export function getAllCategoriesBookTopList() {
  book.getTopBooks().then(resp => {
    renderMarkupForTopCategories(resp);
  });
}

function renderMarkupForTopCategories(resp) {
  categoryDivWraper.insertAdjacentHTML(
    'beforeend',
    `<h1 class = "">Best Sellers <span class = "">Books</span></h1>`
  );

  resp
    .map(({ list_name, books }) => {
      const book = renderListOfTopCategories(books);
      renderBlockForTopCategories(list_name, book);
    })
    .join('');
}

function renderListOfTopCategories(books) {
  return books
    .map(({ book_image, title, author }) => {
      return `<li class = "">
              <a href="#" class="link" id=""><img class="img" src="${book_image}">
              <h3 class = "">${title}</h3>
              <p class = "">${author}</p>
              </a></li>`;
    })
    .join('');
}

function renderBlockForTopCategories(list_name, book) {
  const categoryDiv = `<div class = "wraper-div">
                          <h2 class = "category-title">${list_name}</h2>
                          <ul class="category-list">${book}</ul>
                          <button class="" type="button">see more</button>
                       </div>`;
  categoryDivWraper.insertAdjacentHTML('beforeend', categoryDiv);
}

categoryDivWraper.addEventListener('click', onLoadMore);

function onLoadMore(e) {
  if (e.target.nodeName === 'BUTTON') {
    const title = e.target.parentNode.firstElementChild.textContent;
    categoryDivWraper.innerHTML = '';
    console.dir(e.target.previousElementSibling);
    getBooksOfCategory(title);
  }
}
// getBooksOfCategory('Advice How-To and Miscellaneous');
// getBooksOfCategory('Hardcover Fiction');

export function getBooksOfCategory(nameOfCategory) {
  book.getBookByCategory(nameOfCategory).then(resp => {
    renderMarkupForCategory(resp, nameOfCategory);
  });
}

function renderMarkupForCategory(resp, nameOfCategory) {
  const firstWords = nameOfCategory.split(' ');
  const lastWord = firstWords.splice(length - 1);

  categoryDivWraper.insertAdjacentHTML(
    'beforeend',
    `<h1 class="title">${firstWords.join(
      ' '
    )} <span class = "accent">${lastWord}</span></h1><div class="wraper"></div>`
  );

  resp
    .map(({ book_image, title, author }) => {
      const book = renderListOfCategories(book_image, title, author);
      renderBlockForCategories(book);
    })
    .join('');
}

function renderListOfCategories(book_image, title, author) {
  return `<li class = "">
              <a href="#" class="link" id="">
                <img class="img" src="${book_image}">
                <h3 class = "">${title}</h3>
                <p class = "">${author}</p>
              </a>
          </li>`;
}

function renderBlockForCategories(book) {
  const categoryUl = `<ul class="category-list">${book}</ul>`;
  const wraper = document.querySelector('.wraper');
  wraper.insertAdjacentHTML('beforeend', categoryUl);
}

/* <div class="category-wraper">
    <h1 class="">${firstWords.join(' ')} <span class = "">${lastWord}</span></h1>
    <div class="wraper">
      <ul class="category-list">
        <li class = "">
              <a href="#" class="link" id="">
                <img class="img" src="${book_image}">
                <h3 class = "">${title}</h3>
                <p class = "">${author}</p>
              </a>
          </li>
      </ul>
    </div>
</div>; */

/* <div class="category-wraper">
  <h1 class="">Best Sellers <span class="">Books</span></h1>
  <div class="wraper-div">
    <h2 class="">${list_name}</h2>
    <ul class="category-list">
      <li class = "">
        <a href="#" class="link"
          ><img class="img" src="${book_image}" />
          <h3 class = "">${title}</h3>
          <p class = "">${author}</p>
        </a>
      </li>
    </ul>
    <button class="" type="button">see more</button>
  </div>
</div> */
