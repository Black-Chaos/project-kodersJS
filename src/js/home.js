import Book_api from './APIs/book-api';

const book = new Book_api();
const categoryDivWraper = document.querySelector('.category-wraper');

getAllCategoriesBookTopList();

export function getAllCategoriesBookTopList() {
  try {
    book.getTopBooks().then(resp => {
      // console.log(resp);
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
    `<h1 class = "">Best Sellers <span class = "">Books</span></h1>`
  );
}

function renderMarkupForTopCategories(resp) {
  resp
    .map(({ list_name, books }) => {
      const book = renderListOfTopCategories(books);
      renderBlockForTopCategories(list_name, book);
    })
    .join('');
}

function renderListOfTopCategories(books) {
  return books
    .map(({ book_image, title, author, _id }) => {
      return `<li class = "">
                <a href="#" class="link" id="${_id}">
                  <img class="img" src="${book_image}">
                  <h3 class = "">${title}</h3>
                  <p class = "">${author}</p>
                </a>
              </li>`;
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
    const categoryList = e.target.previousElementSibling;
    const categoryItems = categoryList.children;
    if (e.target.textContent === 'see more') {
      categoryList.innerHTML = '';

      getBooksbyBtnMore(title, categoryList);
      e.target.textContent = 'see less';
    } else {
      for (let i = 0; i < categoryItems.length; i++) {
        if (i > 4) {
          categoryItems[i].classList = 'items-unvisible';
          e.target.textContent = 'see more';
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
      const book = renderListOfCategories(book_image, title, author, _id);
      categoryList.insertAdjacentHTML('beforeend', book);
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
    `<h1 class="title">${firstWords.join(
      ' '
    )} <span class = "accent">${lastWord}</span></h1><div class="wraper"></div>`
  );
}

function renderMarkupForCategory(resp) {
  resp
    .map(({ book_image, title, author, _id }) => {
      const book = renderListOfCategories(book_image, title, author, _id);
      renderBlockForCategories(book);
    })
    .join('');
}

function renderListOfCategories(book_image, title, author, _id) {
  return `<li class = "">
              <a href="#" class="link" id="${_id}">
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
