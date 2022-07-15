import { elementos } from './elementos.js';

// const makeEmptyArray = (size, content) => new Array(size).fill(content);

const elements = document.getElementsByClassName('elemento');

for (let elemento of elements) {
  elemento.addEventListener('click', () => {
    detalharElemento(elemento.dataset.id);
  });
  elemento.addEventListener('keydown', evt => {
    if (evt.key === 'Enter' || evt.code === 'Enter' || evt.code === 'NumpadEnter') {
      detalharElemento(elemento.dataset.id);
    }
  });
}

function detalharElemento(index) {
  console.log(elementos[index].curiosidade);
}
