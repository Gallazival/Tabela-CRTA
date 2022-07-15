import { elementos } from './elementos.js';

// const makeEmptyArray = (size, content) => new Array(size).fill(content);

const elements = document.getElementsByClassName('elemento');
let lastFocus = document.querySelector('[data-id="1"]');

for (let elemento of elements) {
  elemento.addEventListener('click', () => {
    detalharElemento(elemento.dataset.id);
  });
  elemento.addEventListener('keydown', evt => {
    if (evt.key === 'Enter' || evt.code === 'Enter' || evt.code === 'NumpadEnter') {
      detalharElemento(elemento.dataset.id);
    }
  });
  elemento.addEventListener('focusout', () => {
    return lastFocus = elemento;
  });
}

function detalharElemento(index) {
  document.querySelector('.focus-wall').style.visibility = 'visible';
  document.querySelector('.pop-up-text').focus();
  document.querySelector('.pop-up-text').innerHTML = `
    <h2>Elemento: ${elementos[index].nome}</h2>
    <p>Curiosidade: ${elementos[index].curiosidade}</p>
  `;
}

document.addEventListener('keydown', evt => {
  const popUp = document.querySelector('.pop-up');
  if (evt.key === 'Tab' || evt.code === 'Tab') {
    if (evt.shiftKey) {
      if (document.activeElement === popUp.firstElementChild) {
        evt.preventDefault();
        popUp.lastElementChild.focus();
      }
    } else {
      if (document.activeElement === popUp.lastElementChild) {
        evt.preventDefault();
        popUp.firstElementChild.focus();
      }
    }
  }
});
