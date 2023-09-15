import { markUpBook } from './popup';
import Book_api from './APIs/book-api';
import iconCorkBook from '../img/icons.svg';
// import { openModalPopUp } from './popup';

const book = new Book_api();
const categoryDivWraper = document.querySelector('.category-wrapper');
const loader = document.querySelector('.loader');

getAllCategoriesBookTopList();

export function getAllCategoriesBookTopList() {
  showLoader();
  try {
    book.getTopBooks().then(resp => {
      categoryDivWraper.innerHTML = '';
      renderTitleForTopCategories();
      renderMarkupForTopCategories(resp);
    });
  } catch (error) {
    console.log(error);
  }
}

function renderTitleForTopCategories() {
  categoryDivWraper.insertAdjacentHTML(
    'beforeend',
    `<h1 class = "main-title">Best Sellers <span class = "main-title-span">Books</span></h1>`
  );
}

function renderMarkupForTopCategories(resp) {
  resp
    .map(({ list_name, books }) => {
      // Для імітації порожного вмісту категорії
      // if (list_name === 'Advice How-To and Miscellaneous') {
      //   books = [];
      // }
      const bookList = renderListOfTopCategories(books);

      renderBlockForTopCategories(list_name, bookList);
    })
    .join('');
  hideLoader();
}

function renderListOfTopCategories(books) {
  if (books.length > 0) {
    return books
      .map(({ book_image, title, author, _id }) => {
        return renderListOfCategories(book_image, title, author, _id);
      })
      .join('');
  }

  return renderCorkItem();
}

function renderCorkItem() {
  return `<li class = "cork">
            <div class="cork-wraper-svg">
            <svg class="cork-svg">
              <use class="cork-use" href="./img/icons.svg#icon-cork-book"></use>
            </svg>
            <p class = "cork-text">Sorry, the book will be added later...</p>
           <p class="portfolio-cover-text">quick view</p>
            </div>
        </li>`;
}

function renderBlockForTopCategories(list_name, bookList) {
  const categoryDiv = `<div class = "wrapper-for-genre">
                          <h2 class = "list-name">${list_name}</h2>
                          <ul class="category-list">${bookList}</ul>
                          <button class="button" type="button">See More</button>
                        </div>`;

  categoryDivWraper.insertAdjacentHTML('beforeend', categoryDiv);

  const categoryList = document.querySelector('.category-list');
  categoryList.addEventListener('click', onClickOpenPopUp);

  const btnSeeMore = document.querySelector('.button');

  if (bookList.includes('<li class = "cork">')) {
    btnSeeMore.classList.add('is-hidden');
  }
}

categoryDivWraper.addEventListener('click', onLoadMore);

function onLoadMore(e) {
  if (e.target.nodeName === 'BUTTON') {
    const title = e.target.parentNode.firstElementChild.textContent;
    const categoryList = e.target.previousElementSibling;
    const categoryItems = categoryList.children;

    if (e.target.textContent === 'See More') {
      categoryList.innerHTML = '';

      getBooksbyBtnMore(title, categoryList);
      e.target.textContent = 'See Less';
    } else {
      for (let i = 0; i < categoryItems.length; i++) {
        if (i > 4) {
          categoryItems[i].classList = 'items-is-hidden';
          e.target.textContent = 'See More';
        }
      }
    }
  }
}

function getBooksbyBtnMore(nameOfCategory, categoryList) {
  showLoader();
  try {
    book.getBookByCategory(nameOfCategory).then(resp => {
      renderMarkupByBtnMore(resp, categoryList);
    });
  } catch (error) {
    console.log(error);
  }
}

function renderMarkupByBtnMore(resp, categoryList) {
  resp
    .map(({ book_image, title, author, _id }) => {
      const bookList = renderListOfCategories(book_image, title, author, _id);
      categoryList.insertAdjacentHTML('beforeend', bookList);
    })
    .join('');
  hideLoader();
}

// getBooksOfCategory('Advice How-To and Miscellaneous');
// getBooksOfCategory('Hardcover Fiction');

export function getBooksOfCategory(nameOfCategory) {
  showLoader();
  try {
    book.getBookByCategory(nameOfCategory).then(resp => {
      // Для імітації порожного вмісту категорії
      // if (nameOfCategory === 'Advice How-To and Miscellaneous') {
      //   resp = [];
      // }
      categoryDivWraper.innerHTML = '';
      renderMarkupTitle(nameOfCategory);
      renderMarkupForCategory(resp);
    });
  } catch (error) {
    console.log(error);
  }
}

function renderMarkupTitle(nameOfCategory) {
  const firstWords = nameOfCategory.split(' ');
  const lastWord = firstWords.splice(length - 1);

  categoryDivWraper.insertAdjacentHTML(
    'beforeend',
    `<h1 class="main-title">${firstWords.join(
      ' '
    )} <span class = "main-title-span">${lastWord}</span></h1>`
  );
}

function renderMarkupForCategory(resp) {
  if (resp.length > 0) {
    let bookList = '';
    resp.map(({ book_image, title, author, _id }) => {
      const bookLi = renderListOfCategories(book_image, title, author, _id);
      bookList += bookLi;
    });

    renderBlockForCategories(bookList);
  } else {
    const bookList = renderCorkItem();
    renderBlockForCategories(bookList);
  }
}

function renderListOfCategories(book_image, title, author, _id) {
  const bookList = `<li class = "wrapper  ">
              <a href="#" class="link  cover-wrap " id="${_id}">
                <img class="img " src="${book_image}">
                <h3 class = "book-title">${title}</h3>
                <p class = "book-author ">${author}</p>
                <p class="cover-text">quick view</p>
              </a>
          </li>`;
  const link = document.querySelector('.link');

  return bookList;
}

function renderBlockForCategories(bookList) {
  const categoryUl = `<ul class="category-list">${bookList}</ul>`;

  categoryDivWraper.insertAdjacentHTML('beforeend', categoryUl);

  hideLoader();

  const categoryList = document.querySelector('.category-list');
  categoryList.addEventListener('click', onClickOpenPopUp);
}

function onClickOpenPopUp(e) {
  e.preventDefault();
  if (e.target.parentNode.nodeName !== 'A') {
    return;
  }
  const id = e.target.parentNode.id;

  // openModalPopUp(id);
}

const btn = document.getElementById('btn-to-top');

btn.addEventListener('click', topFunction);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollBy({
    top: 0,
  });
}

const ulBooks = document.querySelector('.category-wrapper');
ulBooks.addEventListener('click', event => {
  if (event.target.closest('.link')) {
    const bookId = event.target.closest('.link').getAttribute('id');
    markUpBook(bookId);
  }
});

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}
