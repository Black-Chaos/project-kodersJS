// import { getCategoryList } from './APIs/book-api';
import Book_api from './APIs/book-api';
import { getAllCategoriesBookTopList } from './home';
import { getBooksOfCategory } from './home';

const categoryColumn = document.querySelector('.categories-elements');
// const list = document.querySelector('.categories-elements');

// this is for the active class
let links = document.querySelectorAll('.category-link');
const categoryDivWraper = document.querySelector('.category-wrapper');

const book = new Book_api();

markupColumn();

function markupColumn() {
  book
    .getCategoryList()
    .then(data => {
      const markupCategoriesColumn = data
        .map(({ list_name }) => {
          return `<li class="categories-list"><a class="category-link" href="#">${list_name}</a></li>`;
        })
        .sort()
        .join('');

      console.log(data);
      categoryColumn.insertAdjacentHTML('beforeend', markupCategoriesColumn);
      links = document.querySelectorAll('.category-link');
      console.log(links);
      clearAll(links);
      showLink(links);
    })
    .catch(error => console.log(error));
}
console.log(links);

// Active class
function clearAll(array) {
  array.forEach(item => {
    item.classList.remove('active');
  });
}
function showLink(array, i = 0) {
  array[i].classList.add('active');
}

categoryColumn.addEventListener('click', onCategoriesHandle);
async function onCategoriesHandle(event) {
  event.preventDefault();
  // const target = event.target;

  if (event.target && event.target.classList.contains('category-link')) {
    links.forEach((item, i) => {
      if (event.target == item) {
        clearAll(links);
        showLink(links, i);
      }
    });
  }
  console.log(event.target.textContent);

  if (event.target.nodeName !== 'A') {
    return;
  }

  try {
    // const data = await book.getBookByCategory(event.target.textContent);
    // console.log(data);
    const markup = getBooksOfCategory(event.target.textContent);

    clearMarkup();
    categoryDivWraper.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }

  if (event.target.textContent === 'All categories') {
    try {
      const markup = getAllCategoriesBookTopList(event.target.textContent);

      clearMarkup();
      categoryDivWraper.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
      console.log(error);
    }
  }
}

const clearMarkup = () => (categoryDivWraper.innerHTML = '');
