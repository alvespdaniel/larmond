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

// Menu Mobile Button
const menuDiv = document.getElementById('menu-mobile');
const btn = document.getElementById('btn-menu');

function animar() { 
  btn.classList.toggle('ativar-btn-mobile');
  menuDiv.classList.toggle('abrir-menu');
}