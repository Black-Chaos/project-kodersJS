import Book_api from './APIs/book-api';
import throttle from 'lodash.throttle';

const book = new Book_api();
const categoryDivWraper = document.querySelector('.category-wrapper');

getAllCategoriesBookTopList();

export function getAllCategoriesBookTopList() {
  try {
    book.getTopBooks().then(resp => {
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
      const bookList = renderListOfTopCategories(books);

      renderBlockForTopCategories(list_name, bookList);
    })
    .join('');
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
            <svg width="88" height="80">
              <use class="cork-use" href="./img/icons.svg#icon-cork-book"></use>
            </svg>
            <p class = "cork-text">Sorry, the book will be added later...</p>
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

  // const wrapperForGenre = document.querySelector('.wrapper-for-genre');
  const btnSeeMore = document.querySelector('.button');

  if (bookList.includes('<li class = "cork">')) {
    btnSeeMore.classList.add('is-hidden');
  }
}

categoryDivWraper.addEventListener('click', throttle(onLoadMore, 1000));

function onLoadMore(e) {
  if (e.target.nodeName === 'BUTTON') {
    if (e.target.textContent === 'see more') {
      const title = e.target.parentNode.firstElementChild.textContent;
      const categoryList = e.target.previousElementSibling;
      const categoryItems = categoryList.children;

      const wrapperForGenge = e.target.parentNode;

      if (e.target.textContent === 'See More') {
        categoryList.innerHTML = '';

        getBooksbyBtnMore(title, categoryList);
        e.target.textContent = 'See Less';
      } else {
        for (let i = 0; i < categoryItems.length; i++) {
          // Ще тут було б добре скролити до початку списку, зараз до верху
          if (i > 4) {
            categoryItems[i].classList = 'items-is-hidden';
            e.target.textContent = 'See More';
            // topFunctionToDiv(wrapperForGenge);
          }
        }
      }
    }
  }
}

function getBooksbyBtnMore(nameOfCategory, categoryList) {
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
}

// getBooksOfCategory('Advice How-To and Miscellaneous');
// getBooksOfCategory('Hardcover Fiction');

export function getBooksOfCategory(nameOfCategory) {
  try {
    book.getBookByCategory(nameOfCategory).then(resp => {
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
    )} <span class = "main-title-span">${lastWord}</span></h1><div class="wraper"></div>`
  );
}

function renderMarkupForCategory(resp) {
  if (resp.length > 0) {
    resp
      .map(({ book_image, title, author, _id }) => {
        const bookList = renderListOfCategories(book_image, title, author, _id);
        renderBlockForCategories(bookList);
      })
      .join('');
  } else {
    const bookList = renderCorkItem();
    renderBlockForCategories(bookList);
  }
}

function renderListOfCategories(book_image, title, author, _id) {
  const bookList = `<li class = "">
              <a href="#" class="link" id="${_id}">
                <img class="img" src="${book_image}">
                <h3 class = "book-title">${title}</h3>
                <p class = "book-author">${author}</p>
              </a>
          </li>`;
  const link = document.querySelector('.link');

  // link.addEventListener('click', throttle(onClickOpenPopUp, 1000));

  return bookList;
}

// function onClickOpenPopUp(_id) {
//   // Функція відкриття модалки
//   }

function renderBlockForCategories(bookList) {
  const categoryUl = `<ul class="category-list">${bookList}</ul>`;

  const wraper = document.querySelector('.wraper');
  wraper.insertAdjacentHTML('beforeend', categoryUl);
}

// const btn = document.getElementById('btn-to-top');

// btn.addEventListener('click', topFunction);

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 300 ||
//     document.documentElement.scrollTop > 300
//   ) {
//     btn.style.display = 'block';
//   } else {
//     btn.style.display = 'none';
//   }
// }

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// function topFunctionToDiv() {
//   window.scrollTop; // For Safari
//   // document.documentElement.scrollTo = 300; // For Chrome, Firefox, IE and Opera
// }
