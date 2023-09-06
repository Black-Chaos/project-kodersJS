import $ from 'jquery';
import 'slick-carousel';
import { supportFundsMarkup, supportFunds } from './funds/funds-list';
import arrow from '../img/icons.svg';

const fundsColumn = document.querySelector('.support-funds-list');
fundsColumn.insertAdjacentHTML('beforeend', supportFundsMarkup(supportFunds));

$('.support-funds-list').slick({
  vertical: true,
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 3,
  prevArrow: '<div></div>',
  nextArrow: `<button type="button" class="support-slider-btn" aria-label="Next">
          <svg class="slider-next-button" width="22" height="22"><use href="${arrow}#icon-support-arrow"></use></svg>
        </button>`,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
  ],
});
