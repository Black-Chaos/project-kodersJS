// import {openStarModal} from '../js/popup'

const checkbox = document.getElementById('checkbox');
const allBody = document.querySelector('body');

checkbox.addEventListener('change', switchTheme);

const darkOn = JSON.parse(localStorage.getItem('darkOn'));

if (darkOn !== null) { 
    if (darkOn===true) {
        checkbox.checked = true; 
    } else {
        checkbox.checked = false; 
    }
}

switchTheme();

function switchTheme() {
    if (checkbox.checked) {
        allBody.classList.add("dark");
        localStorage.setItem('darkOn', true);
    } else {
        allBody.classList.remove("dark");
        localStorage.setItem('darkOn', false);
    }
}

// click on Profile

const btnProf = document.querySelector('.profile-btn');
const btnOut = document.querySelector('.sign-out');
const btnIn = document.querySelector('.sign-in');

btnProf.addEventListener('click', onClickProf);
btnOut.addEventListener('click', onClickLogOut);
btnIn.addEventListener('click', onClickLSignIn);

function onClickLSignIn() {
 // openStarModal();
}


function onClickLogOut() {
   
     btnOut.classList.toggle("wrap-sign-hide");

}


function onClickProf() {
    const checkSign = true; //localStorage.getItem('form-data');
     if (checkSign) {
         btnOut.classList.toggle("wrap-sign-hide");
    } else {
        btnIn.classList.toggle("wrap-sign-hide");
    }
}