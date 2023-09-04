const refs = {
  body: document.body,
  startBackdrop: document.querySelector('.start-backdrop'),
  startCloseBtn: document.querySelector('.start-close-btn'),
  form: document.querySelector('.start-form'),
  input: document.querySelectorAll('.start-input'),
  inputIcon: document.querySelectorAll('.input-icon'),
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
  const formDiv = event.target.children;
  console.dir(formDiv.input);
  event.currentTarget.reset();
}

function onFormInput(event) {
  const { name, value } = event.target;
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
