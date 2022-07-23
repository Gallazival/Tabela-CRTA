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
    detalharElemento(elemento);
  });
  elemento.addEventListener('keydown', evt => {
    if (evt.key === 'Enter' || evt.code === 'Enter' || evt.code === 'NumpadEnter') {
      evt.preventDefault();
      detalharElemento(elemento);
    }
  });
  elemento.addEventListener('focusout', () => {
    return lastFocus = elemento;
  });
}

function detalharElemento(elemento) {
  if (elemento === 'ajuda') {
    document.querySelector('.pop-up section').outerHTML = '<section class="hidden none"></section>';
    document.querySelector('.pop-up-text').innerHTML = `
      <h2><b>Controles:</b></h2>
      <ul>
        <li>Use a tecla Alt + setas do teclado para navegar entre os elementos da tabela</li>
        <li>Use a tecla Enter para acessar os elementos em geral</li>
        <li>Os atalhos Tab e Shift+Tab também funcionam</li>
        <li>Se precisar revisar esta informação, aperte Alt+h</li>
      </ul>
    `;
  }
  else {
    let index = elemento.dataset.id;
    document.querySelector('.pop-up section').outerHTML = `${elemento.outerHTML}`;
    document.querySelector('.pop-up section').removeAttribute('tabindex');
    document.querySelector('.pop-up-text').innerHTML = `
      <p><b>Nome:</b> ${elementos[index].nome}</p>
      <p><b>Sigla:</b> ${elementos[index].sigla}</p>
      <p><b>Número atômico:</b> ${elementos[index].atomico}</p>
      <p><b>Massa atômica:</b> ${elementos[index].massa} g/mol</p>
      <p><b>Classificação:</b> ${elementos[index].class}</p>
      <p><b>Estado:</b> ${elementos[index].estado}</p>
      <p><b>Ponto de fusão:</b> ${elementos[index].fusao}</p>
      <p><b>Ponto de ebulição:</b> ${elementos[index].ebulicao}</p>
      <p><b>Distribuição:</b> ${elementos[index].distribuicao}</p>
      <p><b>Curiosidade:</b> ${elementos[index].curiosidade}</p>
    `;
  }
  document.querySelector('.focus-wall').style.visibility = 'visible';
  document.querySelector('.pop-up-text').focus();
}

document.addEventListener('keydown', evt => {
  const firstElement = document.querySelector('.pop-up-text');
  const lastElement = document.querySelector('.pop-up #fechar');
  if (evt.key === 'Tab' || evt.code === 'Tab') {
    if (evt.shiftKey) {
      if (document.activeElement === firstElement) {
        evt.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        evt.preventDefault();
        firstElement.focus();
      }
    }
  }
  if (evt.key === 'h' || evt.kay === 'H' || evt.code === 'KeyH') {
    if (evt.altKey) {
      evt.preventDefault();
      detalharElemento('ajuda');
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

document.querySelector('[data-id="57-71"]').addEventListener('keydown', evt => {
  if (evt.key === 'Enter' || evt.code === 'Enter' || evt.code === 'NumpadEnter') {
    evt.preventDefault();
    document.querySelector('[data-id="57"]').focus();
  }
});

document.querySelector('[data-id="89-103"]').addEventListener('keydown', evt => {
  if (evt.key === 'Enter' || evt.code === 'Enter' || evt.code === 'NumpadEnter') {
    evt.preventDefault();
    document.querySelector('[data-id="89"]').focus();
  }
});
