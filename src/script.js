// Slider History
var radio = document.querySelector('.manual-btn');
var cont = 1; 

document.getElementById('radio1').checked = true;

setInterval (() => {
  proximaImg()
}, 10000);

function proximaImg() {
  cont++

  if (cont > 4) {
    cont = 1;
  }

  document.getElementById('radio' + cont).checked = true;
}

// Menu Mobile
const menuDiv = document.getElementById('menu-mobile');
const btn = document.getElementById('btn-menu');

const history = document.querySelector('.mobile-link-history');
const team = document.querySelector('.mobile-link-team');
const specialities = document.querySelector('.mobile-link-specialities');
const testimonial = document.querySelector('.mobile-link-testimonial');
const footer = document.querySelector('.mobile-link-footer');

function animar() { 
  btn.classList.toggle('ativar-btn-mobile');
  menuDiv.classList.toggle('abrir-menu');
} 

function fecharMenu() {
  menuDiv.classList.toggle('abrir-menu');
  btn.classList.toggle('ativar-btn-mobile');
}

history.addEventListener('click', fecharMenu);
team.addEventListener('click', fecharMenu);
specialities.addEventListener('click', fecharMenu);
testimonial.addEventListener('click', fecharMenu);
footer.addEventListener('click', fecharMenu);
// End Menu-Mobile