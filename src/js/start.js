const refs = {
  startBackdrop: document.querySelector('.start-backdrop'),
  startCloseBtn: document.querySelector('.start-close-btn'),
  form: document.querySelector('.start-form'),
};

const LOCAL_KEY = 'form-data';
let inputData = {};

refs.startCloseBtn.addEventListener('click', onCloseBtn);
refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSub);
window.addEventListener(`keydown`, onEscClose);

function onCloseBtn() {
  refs.startBackdrop.classList.add('is-hidden');
}

function onFormSub(event) {
  event.preventDefault();
  event.currentTarget.reset();
}

function onFormInput(eve) {
  const { name, value } = eve.target;
  inputData[name] = value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(inputData));
  console.log(inputData);
}

function onEscClose(e) {
  if (e.code !== 'Escape') {
    return;
  } else {
    refs.startBackdrop.classList.add('is-hidden');
    window.removeEventListener();
  }
}
