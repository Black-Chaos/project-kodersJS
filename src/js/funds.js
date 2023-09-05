import { supportFundsMarkup } from './funds/funds-list';

const fundsColumn = document.querySelector('.support-funds-list');
fundsColumn.insertAdjacentHTML('beforeend', supportFundsMarkup(supportFunds));
