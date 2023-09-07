import './js/header';
import './js/start';
import './js/funds';
import iconsSvg from './img/icons.svg';
import amazonIcon from './img/internet-shops/amazon@1x.png';
import appleIcon from './img//internet-shops/book@1x.png';
import bookshopIcon from './img/internet-shops/book-shop@1x.png';
import {createPage} from './js/pagination'

// const cardList = document.querySelector('.shop-list-js');
createShoppingList();
function createShoppingList() {
  const isHidden = document.querySelector('.shop-list-empty');
  const booksData = JSON.parse(localStorage.getItem('shoppingList'));
  if (!booksData || booksData.length === 0) {
    isHidden.classList.remove('is-hidden');
  } else {
    // const markup = createShoplistCard(booksData);
    // cardList.innerHTML = markup;
  }
}
function createShoplistCard(data) {
  return data
    .map(
      ({
        _id,
        author,
        book_image,
        description,
        list_name,
        title,
        buy_links,
      }) => `
      <li class="card-item js-card" data-id="${_id}">
      <img class="card-img" src="${book_image}" onerror="this.src='${iconsSvg}#icon-cork-book'" alt="Book's image" width="100" height="142"/>
    <div class="card-content">
        <h2 class="card-title">${title}</h2>
        <p class="card-genre">${list_name}</p>
        <p class="card-description">${description ? description : 'N/A'}</p>
      <div class="card-footer">
        <p class="card-author">${author}</p>
        <ul class="card-shops">
          <li class="shop-item">
            <a href="${
              buy_links[0].url
            }" target="_blank" rel="noopener nofollow">
            <img class="amazon-img"
                  src="${amazonIcon}"
                  alt="Amazon"
                  width="32"
                  height="11"
                />
            </a>
          </li>
          <li class="shop-item-apple">
            <a href="${
              buy_links[1].url
            }" target="_blank" rel="noopener nofollow">
            <img class="apple-img"
                  src="${appleIcon}"
                  alt="Apple Book"
                  width="16"
                  height="16"
                />
            </a>
          </li>
          <li class="shop-item-bookshop">
            <a href="${
              buy_links[4].url
            }" target="_blank" rel="noopener nofollow">
            <img class="bookshop-img"
                  src="${bookshopIcon}"
                  alt="Bookshop"
                  width="16"
                  height="16"
                />
            </a>
          </li>
        </ul>
      </div>
      <button class="card-delete-btn" type="button">
        <svg class="delete-icon" width="28" height="28">
          <use href="${iconsSvg}#icon-trash"></use>
        </svg>
      </button>
    </div>
    </li>
    `
    )
    .join('');
}
export function deleteElement() {
  const deleteBtn = document.querySelectorAll('.card-delete-btn');
  deleteBtn.forEach(button => {
    button.addEventListener('click', onDeleteCard);
  });
  function onDeleteCard(event) {
    const cardItem = event.target.closest('.js-card');
    if (cardItem) {
      const cardId = cardItem.getAttribute('data-id');
      cardItem.remove();
      const booksData = JSON.parse(localStorage.getItem('shoppingList'));
      if (booksData) {
        const newBooksData = booksData.filter(book => book._id !== cardId);
        localStorage.setItem('shoppingList', JSON.stringify(newBooksData));
        createPage();
        if (!newBooksData.length) {
          const isHidden = document.querySelector('.is-hidden');
          isHidden.classList.remove('is-hidden');
        }
      }
    }
  }
}
export { createShoplistCard };
