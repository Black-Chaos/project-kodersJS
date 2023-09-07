
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
                    <a class="link-shop" href="https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155"
                        target="_blank">
                        <picture>
                            <source srcset="./img/internet-shops/amazon@1x.avif 1x,
                            ./img/internet-shops/amazon@2x.avif 2x" media="(min-width: 768px)" type="image/avif" />
                            <source srcset="./img/internet-shops/amazon@1x.png 1x,
                            ./img/internet-shops/amazon@1x.png 2x" media="(min-width: 768px)" type="image/png" />
                            <source srcset="./img/internet-shops/amazon@1x.avif 1x,
                            ./img/internet-shops/amazon@2x.avif 2x" type="image/avif" />
                            <source srcset="./img/internet-shops/amazon@1x.png 1x,
                            ./img/internet-shops/amazon@1x.png 2x" type="image/png" />
                            <img src="./img/internet-shops/amazon@1x.avif" alt="Amazon logo" width="62" height="19"
                                loading="lazy" />
                        </picture>
                    </a>
                </li>
                <li class="trading-platform">
                    <a class="link-shop" href="https://www.apple.com/ua/apple-books/" target="_blank">
                        <picture>
                            <source srcset="./img/internet-shops/book@1x.avif 1x,
                            ./img/internet-shops/book@2x.avif 2x" media="(min-width: 768px)" type="image/avif" />
                            <source srcset="./img/internet-shops/book@1x.png 1x,
                            ./img/internet-shops/book@2x.png 2x" media="(min-width: 768px)" type="image/png" />
                            <source srcset="./img/internet-shops/book@1x.avif 1x,
                            ./img/internet-shops/book@2x.avif 2x" type="image/avif" />
                            <source srcset="./img/internet-shops/book@1x.png 1x,
                            ./img/internet-shops/book@2x.png 2x" type="image/png" />
                            <img src="./img/internet-shops/book@1x.avif" alt="Apple books logo" width="33" height="32"
                                loading="lazy" />
                        </picture>
                    </a>
                </li>
                <li class="trading-platform">
                    <a class="link-shop" href="./index.html" target="_blank">
                        <picture>
                            <source srcset="./img/internet-shops/book-shop@1x.avif 1x,
                            ./img/internet-shops/book-shop@2x.avif 2x" media="(min-width: 768px)" type="image/avif" />
                            <source srcset="./img/internet-shops/book-shop@1x.png 1x,
                            ./img/internet-shops/book-shop@2x.png 2x" media="(min-width: 768px)" type="image/png" />
                            <source srcset="./img/internet-shops/book-shop@1x.avif 1x,
                            ./img/internet-shops/book-shop@2x.avif 2x" type="image/avif" />
                            <source srcset="./img/internet-shops/book-shop@1x.png 1x,
                            ./img/internet-shops/book-shop@2x.png 2x" type="image/png" />
                            <img src="./img/internet-shops/book-shop@1x.avif" alt="Book shop logo" width="38"
                                height="36" loading="lazy" />
                        </picture>
                    </a>
                </li>
            </ul>
        </div> `;
  };
  export { markUpBook }




// import BookApi from './APIs/book-api';

// const modal = document.querySelector('.container-info-book');
// const popupBackdrop = document.querySelector('.popup-backdrop');
// const closeBtn = modal.querySelector('.close-btn');
// const addToShoppingListButton = modal.querySelector('.add-btn');
// const shoppingListMessage = modal.querySelector('#shoppingListMessage');

// let isBookInShoppingList = false;
// let currentBook = {};

// document.addEventListener('DOMContentLoaded', function () {
//   const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

//   addToShoppingListButton.addEventListener('click', toggleShoppingList);

//   closeBtn.addEventListener('click', closeModal);
//   modal.addEventListener('click', handleModalClick);
//   document.addEventListener('keydown', handleEscapeKey);
//   popupBackdrop.addEventListener('mousedown', handleBackdropClick);

//   function showBookDetails(book) {
//     isBookInShoppingList = shoppingList.some(item => item.id === book.id);
//     updateShoppingListButton();
//   }

//   function toggleShoppingList() {
//     if (isBookInShoppingList) {
//       removeBookFromShoppingList();
//     } else {
//       addBookToShoppingList();
//     }

//     updateShoppingListButton();
//     saveShoppingListToLocalStorage();
//   }

//   function addBookToShoppingList() {
//     shoppingList.push(currentBook);
//     isBookInShoppingList = true;
//   }

//   function removeBookFromShoppingList() {
//     const bookIndex = shoppingList.findIndex(
//       item => item.id === currentBook.id
//     );
//     if (bookIndex !== -1) {
//       shoppingList.splice(bookIndex, 1);
//       isBookInShoppingList = false;
//     }
//   }

//   function updateShoppingListButton() {
//     if (isBookInShoppingList) {
//       addToShoppingListButton.textContent = 'Видалити зі списку покупок';
//       shoppingListMessage.textContent =
//         'Ви успішно додали книгу до списку покупок.';
//     } else {
//       addToShoppingListButton.textContent = 'Додати до списку покупок';
//       shoppingListMessage.textContent = '';
//     }
//   }

//   function closeModal() {
//     document.body.classList.remove('no-scrolling');
//     modal.classList.remove('activeModal');
//     popupBackdrop.classList.remove('activeModal');
//     document.removeEventListener('keydown', handleEscapeKey);
//     closeBtn.removeEventListener('click', closeModal);
//   }

//   function handleModalClick(e) {
//     if (e.target === modal) {
//       closeModal();
//     }
//   }

//   function handleBackdropClick(e) {
//     if (e.target === popupBackdrop) {
//       closeModal();
//     }
//     showBookDetails(currentBook);
//   }

//   function handleEscapeKey(e) {
//     if (e.key === 'Escape') {
//       closeModal();
//     }
//   }

//   function saveShoppingListToLocalStorage() {
//     localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
//   }

//   function markUpBook(id) {
//     const bookApi = new BookApi();
//     bookApi
//       .getBookById(id)
//       .then(data => {
//         const elTextContent = document.querySelector('.content');
//         elTextContent.innerHTML = createBook(data);
//         modal.classList.add('activeModal');
//         popupBackdrop.classList.add('activeModal');
//         document.body.classList.add('no-scrolling');
//         document.addEventListener('keydown', handleEscapeKey);
//         closeBtn.addEventListener('click', closeModal);
//         currentBook = data;
//       })
//       .catch(error => console.error(error));
//   }

  