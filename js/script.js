import { elementos } from './elementos.js';

const emptyArray = (size, content) => new Array(size).fill('');
const numberArray = (start, end) => [...Array(end - start + 1).keys()].map(num => num + start);

const tabela = [
  [...emptyArray(18)],
  [1, ...emptyArray(16), 2],
  [3, 4, ...emptyArray(10), ...numberArray(5, 10)],
  [11, 12, ...emptyArray(10), ...numberArray(13, 18)],
  [...numberArray(19, 36)],
  [...numberArray(37, 54)],
  [55, 56, '57-71', ...numberArray(72, 86)],
  [87, 88, '89-103', ...numberArray(104, 118)],
  [...emptyArray(3), ...numberArray(57, 71)],
  [...emptyArray(3), ...numberArray(89, 103)],
  [...emptyArray(18)],
];

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

document.querySelector('#fechar').addEventListener('focusout', () => {
  if (document.querySelector('.focus-wall').style.visibility === 'hidden') {
    lastFocus.focus();
  }
});

document.addEventListener('keydown', evt => {
  const activeElement = document.activeElement;
  for (let periodo in tabela) {
    for (let familia in tabela[periodo]) {
      if (tabela[periodo][familia].toString() === activeElement.dataset.id) {
        if (evt.altKey) {
          if (evt.key === 'ArrowUp' || evt.code === 'ArrowUp') {
            let upperElement = tabela[parseInt(periodo) - 1][parseInt(familia)];
            if (upperElement === '') {
              break;
            }
            else {
              evt.preventDefault();
              document.querySelector(`[data-id='${upperElement}']`).focus();
            }
          }
          if (evt.key === 'ArrowDown' || evt.code === 'ArrowDown') {
            let lowerElement = tabela[parseInt(periodo) + 1][parseInt(familia)];
            if (lowerElement === '') {
              break;
            }
            else {
              evt.preventDefault();
              document.querySelector(`[data-id='${lowerElement}']`).focus();
            }
          }
          if (evt.key === 'ArrowRight' || evt.code === 'ArrowRight') {
            let nextElement = activeElement.nextElementSibling;
            evt.preventDefault();
            if (nextElement.classList.contains('hidden')) {
              nextElement.nextElementSibling.focus();
            }
            else {
              nextElement.focus();
            }
          }
          if (evt.key === 'ArrowLeft' || evt.code === 'ArrowLeft') {
            let previousElement = activeElement.previousElementSibling;
            evt.preventDefault();
            if (previousElement.classList.contains('hidden')) {
              previousElement.previousElementSibling.focus();
            }
            else {
              previousElement.focus();
            }
          }
        }
      }
    }
  }
});
