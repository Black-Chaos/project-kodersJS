// import { getCategoryList } from './APIs/book-api';
import Book_api from './APIs/book-api';
import { getAllCategoriesBookTopList } from './home';
// import { renderCategoriesBookTopList } from './home';

const categoryColumn = document.querySelector('.categories-elements');
const list = document.querySelector('.categories-elements');
// this is for the active class
let categoryLinks = document.getElementsByClassName('categories-list');

const book = new Book_api();
// book.setCategory('Picture Books');

function clearLinks(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove('active');
  }
}

function markupColumn() {
  book
    .getCategoryList()
    .then(data => {
      const markupCategoriesColumn = data
        .map(({ list_name }) => {
          return `<li class="categories-list" id=${list_name}><a class="category-link" href="#">${list_name}</a></li>`;
        })
        .sort()
        .join('');
      console.log(data);
      categoryColumn.insertAdjacentHTML('beforeend', markupCategoriesColumn);

      for (let i = 0; i < categoryLinks.length; i++) {
        categoryLinks[i].addEventListener('click', e => {
          console.log(categoryLinks[i]);
          clearLinks(categoryLinks);
          categoryLinks[i].classList.add('active');
        });
      }
    })
    .catch(error => console.log(error));
}
markupColumn();

list.addEventListener('click', onCategoriesHandle);

async function onCategoriesHandle(event) {
  console.log(event.target.textContent);
  if (
    event.target.nodeName !== 'LI' &&
    event.target.textContent === 'All categories'
  )
    return;

  try {
    const data = await book.getBookByCategory(event.target.textContent);
    // const markup = getAllCategoriesBookTopList(data);
  } catch (error) {
    console.log(error);
  }
}

list.addEventListener('click', onTopBooksHandle);

async function onTopBooksHandle(event) {
  if (event.target.textContent === 'All categories') {
    try {
      const data = await book.getTopBooks();
      console.log(data);
      const markup = getAllCategoriesBookTopList(data);
    } catch (error) {
      console.log(error);
    }
  }
}
