
import Book_api from './APIs/book-api';
const modal = document.querySelector('.container-info-book');
const popupBackdrop = document.querySelector('.popup-backdrop');
const closeBtn = modal.querySelector('.close-btn');
let currentBook = {};

let isBookInShoppingList = false;

const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

function showBookDetails(book) {
  isBookInShoppingList = shoppingList.some(item => item._id === book._id);
  updateShoppingListButton();
  console.log(book._id);
}
// document.addEventListener('DOMContentLoaded', function () {
  const addToShoppingListButton = modal.querySelector('.add-btn');
  const shoppingListMessage = modal.querySelector('#shoppingListMessage');

  function updateShoppingListButton() {
    if (isBookInShoppingList) {
      addToShoppingListButton.textContent = 'Remove from the shopping list';
      shoppingListMessage.textContent =
        "Congratulations! You have added the book to the shopping list. To delete, press the button 'Remove from the shopping list'.";
    } else {
      addToShoppingListButton.textContent = 'Add to shopping list';
      shoppingListMessage.textContent = '';
    }
  }

  addToShoppingListButton.addEventListener('click', function () {
    
    if (isBookInShoppingList) {
      shoppingList.splice(
        shoppingList.findIndex(item => item.id === currentBook.id),
        1
      );
      isBookInShoppingList = false;
    } else {
      shoppingList.push(currentBook);
      isBookInShoppingList = true;
    }

    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

    addToShoppingListButton.blur();

    updateShoppingListButton();
  });

  

  function closeModal() {
    document.body.classList.remove('scroll-lock');
    modal.classList.remove('activeModal');
    popupBackdrop.classList.remove('activeModal');
    document.removeEventListener('keydown', handleEscapeKey);
    closeBtn.removeEventListener('click', closeModal);
  }
  function handleEscapeKey() {
  
  };
  closeBtn.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  popupBackdrop.addEventListener('click', function (e) {
    if (e.target === popupBackdrop) {
      closeModal();
    }
  });
// });


function markUpBook(id) {
  const book = new Book_api();
  book
  .getBookById(id)
  .then(data => {
    currentBook = data;
    showBookDetails(currentBook);
      const elTextContent = document.querySelector('.content');
      elTextContent.innerHTML = createBook(data);
      modal.classList.add('activeModal');
      popupBackdrop.classList.add('activeModal');
      document.body.classList.add('scroll-lock');
      document.addEventListener('keydown', handleEscapeKey);
      closeBtn.addEventListener('click', closeModal);
      console.dir(data);
    })
    .catch(error => console.log(error));
}

function createBook(currentBook) {
  return `<img class="img bookim" src="${currentBook.book_image}" alt="${currentBook.title}" />
        <div class="text-content">
            <h3 class="book-tittle">${currentBook.title}</h3>
            <p class="book-authoor">${currentBook.author}</p>
            <p class="book-descripption">${currentBook.description ? currentBook.description : 'N/A' }</p>
            <ul class="list-shops">
                <li class="trading-platform amazon-platform">
                    <a href="${
                      buy_links[0].url
                    }" target="_blank" rel="noopener nofollow">
                        <img src="${amazonIcon}" alt="Amazon logo" width="62" height="19" />
                    </a>
                </li>
                <li class="trading-platform">
                    <a href="${
                      buy_links[1].url
                    }" target="_blank" rel="noopener nofollow">
                        <img src="${appleIcon}" alt="Apple books logo" width="33" height="32" />
                    </a>
                </li>
                <li class="trading-platform">
                    <a href="${
                      buy_links[4].url
                    }" target="_blank" rel="noopener nofollow">
                        <img src="${bookshopIcon}" alt="Book shop logo" width="38" height="36" />
                    </a>
                </li>
            </ul>
        </div> `;
  };
  export { markUpBook }






  