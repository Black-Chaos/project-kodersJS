const refs = {
  startBackdrop: document.querySelector('.start-backdrop'),
  startCloseBtn: document.querySelector('.start-close-btn'),
  form: document.querySelector('.start-form'),
};

const LOCAL_KEY = 'form-data';
let inputData = {};

refs.startCloseBtn.addEventListener('click', onCloseBtn);
refs.form.addEventListener('submit', onFormSub);
window.addEventListener(`keydown`, onEscClose);

function onCloseBtn() {
  refs.startBackdrop.classList.add('is-hidden');
  document.body.classList.remove('scroll-lock');
}

function onFormSub(event) {
  event.preventDefault();
  const { name, email, password } = event.currentTarget.elements;
  inputData.name = name.value;
  inputData.email = email.value;
  inputData.password = password.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(inputData));
  event.currentTarget.reset();
  refs.startBackdrop.classList.add('is-hidden');
}

function onEscClose(e) {
  if (e.code !== 'Escape') {
    return;
  } else {
    refs.startBackdrop.classList.add('is-hidden');
    document.body.classList.remove('scroll-lock');
    window.removeEventListener();
  }
}

export function openStarModal() {
  refs.startBackdrop.classList.remove('is-hidden');
  document.body.classList.remove('scroll-lock');
}
