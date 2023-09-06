import Book_api from './APIs/book-api';
import { getAllCategoriesBookTopList, getBooksOfCategory } from './home';

const categoryColumn = document.querySelector('.categories-elements');
const categoryDivWrapper = document.querySelector('.category-wrapper');

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

      categoryColumn.insertAdjacentHTML('beforeend', markupCategoriesColumn);
    })
    .catch(error => console.log(error));
}

categoryColumn.addEventListener('click', onCategoriesHandle);
function onCategoriesHandle(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'A') {
    return;
  }
  if (event.target.classList.contains('active')) return;

  categoryColumn.querySelector('.active').classList.remove('active');
  event.target.classList.add('active');

  if (event.target.textContent === 'All categories') {
    clearMarkup();
    getAllCategoriesBookTopList();
    return;
  }

  clearMarkup();
  getBooksOfCategory(event.target.textContent);
}

const clearMarkup = () => (categoryDivWrapper.innerHTML = '');
