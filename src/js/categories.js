// import { getCategoryList } from './APIs/book-api';
import Book_api from './APIs/book-api';
import { getAllCategoriesBookTopList } from '.js/home';

const categoryColumn = document.querySelector('.categories-elements');
const list = document.querySelector('.categories-elements');
let li = document.getElementsByClassName('categories-list');
const catLinks = document.querySelectorAll('.category-link');
// const containerTopBooks = document.querySelector('.')

const book = new Book_api();
// book.setCategory('Picture Books');

function markupColumn() {
  book
    .getCategoryList()
    .then(data => {
      const markupCategoriesColumn = data
        .map(({ list_name: listName }) => {
          return `<li class="categories-list"><a class="category-link" href="${listName}">${listName}</a></li>`;
        })
        .sort()
        .join('');
      console.log(data);
      categoryColumn.insertAdjacentHTML('beforeend', markupCategoriesColumn);
    })
    .catch(error => console.log(error));
}
markupColumn();

// Add active class
// catLinks.forEach(linkEl => {
//   linkEl.addEventListener('click', () => {
//     document.querySelector('.active')?.classList.remove('active');
//     linkEl.classList.add('active');
//   });
// });

// list.addEventListener('click', onChangeColor);
// function onChangeColor(event) {
//   if (li === document.getElementsByClassName('categories-list')) {
//     li = event.target;
//   }
//   li.classList.remove('active');
//   li = event.target;
//   li.classList.add('active');
//   return li;
// }

list.addEventListener('click', onCategoriesHandle);

async function onCategoriesHandle(event) {
  if (
    event.target.nodeName !== 'LI' &&
    event.target.textContent === 'All categories'
  ) {
    return;
  }
}
