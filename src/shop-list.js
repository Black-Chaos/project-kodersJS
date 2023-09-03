import './js/header';

import Book_api from "./js/APIs/book-api";
const book = new Book_api();
book.getBookByCategory('Advice How-To and Miscellaneous').then(books => {
const booksJson = JSON.stringify(books);
localStorage.setItem("LOCAL_KEY", booksJson)
})


const cardList = document.querySelector('.shop-list-js');

createShoppingList();

function createShoppingList() {
  const isHidden = document.querySelector('.is-hidden');
  const booksData = JSON.parse(localStorage.getItem('LOCAL_KEY'));
  if (booksData.length === 0 || !booksData) {
    isHidden.classList.remove('is-hidden');
  } else {
    const markup = createShoplistCard(booksData);
    cardList.innerHTML = markup;
  }
}
function createShoplistCard(data) {
  return data.map(({ _id, author, book_image, description, list_name, title, buy_links }) => `
  <li class="card-item js-card" data-id="${_id}">
      <img class="card-img" src="${book_image ? book_image : "./img/icons.svg#icon-cork-book"}" alt="Book's image" width="100"  height="142"/>
      <div class="card-top">
        <h2 class="card-title">${title}</h2>
        <p class="card-genre">${list_name}</p>
        <p class="card-description">${description}</p>
      </div>
      <div class="card-footer">
        <p class="card-author">${author}</p>
        <ul class="card-shops list">
          <li class="card-item">
            <a href="${buy_links[0].url}" target="_blank" rel="noopener nofollow">
              <img
                src="./img/internet-shops/amazon.png"
                alt="Amazon"
                width="32"
                height="11"
              />
            </a>
          </li>
          <li class="card-item">
            <a href="${buy_links[1].url}" target="_blank" rel="noopener nofollow">
              <img
                src="./img/internet-shops/book.png"
                alt="Apple Book"
                width="16"
                height="16"
              />
            </a>
          </li>
          <li class="card-item">
            <a href="${buy_links[4].url}" target="_blank" rel="noopener nofollow">
              <img
                src="./img/internet-shops/book-shop.png"
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
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      </button>
    </li>
    `
  ).join('');

};

const deleteBtn = document.querySelectorAll('.card-delete-btn');


deleteBtn.forEach((button) => {
  button.addEventListener('click', onDeleteCard);
});


function onDeleteCard(event) {
  const cardItem = event.target.closest('.js-card');
  if(cardItem) {
    const cardId = cardItem.getAttribute('data-id');
    cardItem.remove();
    const booksData = JSON.parse(localStorage.getItem("LOCAL_KEY"));
    if(booksData) {
      const newBooksData = booksData.filter(book => book._id !== cardId);
      localStorage.setItem("LOCAL_KEY", JSON.stringify(newBooksData));
      if (!newBooksData.length) {
        const isHidden = document.querySelector('.is-hidden');
        isHidden.classList.remove('is-hidden');
      }
    } 
  }
}



export {createShoplistCard};
