import Pagination from 'tui-pagination';
import { createShoplistCard } from '../shop-list'


const galleryItems = JSON.parse(localStorage.getItem('shoppingList'));
const container = document.getElementById('pagination');
const ulEl = document.querySelector('.shop-list-js');
const newElImg = createShoplistCard(galleryItems);


ulEl.insertAdjacentHTML('beforeend', newElImg);

const itemsPerPage = 3;
const totalItems = galleryItems.length; //Total items

const options = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: 3, // amount visible button pages 
    centerAlign: true, 
};

const pagination = new Pagination(container, options);
  
pagination.on('afterMove', event => {
  const currentPage = event.page;
  renderGalleryItems(currentPage);
});

renderGalleryItems(1);

function renderGalleryItems(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const itemsToRender = galleryItems.slice(startIndex, endIndex);
  const newElImg = createShoplistCard(itemsToRender); 
  ulEl.innerHTML = newElImg;
}








