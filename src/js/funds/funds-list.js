import child from '../../img/funds/save-the-children@1x.png';
import hope from '../../img/funds/project-hope@1x.png';
import united from '../../img/funds/united24@1x.png';
import medCorp from '../../img/funds/intern-med-corp@1x.png';
import medSans from '../../img/funds/med-sans-front@1x.png';
import razom from '../../img/funds/razom@1x.png';
import hunger from '../../img/funds/action-against-hunger@1x.png';
import worldVision from '../../img/funds/world-vision@1x.png';
import prytula from '../../img/funds/sergiy-prytula@1x.png';

const supportFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: `${child}`,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: `${hope}`,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: `${united}`,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: `${medCorp}`,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: `${medSans}`,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: `${razom}`,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: `${hunger}`,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: `${worldVision}`,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: `${prytula}`,
  },
];

function supportFundsMarkup(supportFunds) {
  // const isHighResolutionScreen = window.devicePixelRatio > 1;

  const markup = supportFunds
    .map((fund, index) => {
      const listIndex = String(index + 1).padStart(2, '0');
      return `<li class="support-column">
  <span class="support-index">${listIndex}</span><a class="fund-link" href="${fund.url}" rel="noopener noreferrer nofollow">
  <img class="fund-img-link" src="${fund.img}" alt="${fund.title}"></a>
</li>
`;
    })
    .join('');
  return markup;
}

const fundsColumn = document.querySelector('.support-funds-list');
fundsColumn.insertAdjacentHTML('beforeend', supportFundsMarkup(supportFunds));

export { supportFundsMarkup };
