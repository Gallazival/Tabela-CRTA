import elementos from './json/elementos.json' assert { type: 'json' };

$(document).ready(function () {
  const tabela = [[], [], [], [], [], [], [], [], []];

  for (const key in elementos) {
    const elemento = elementos[key];
    if (elemento.classe === 'Lantanídeos' || elemento.classe === 'Actinídios') {
      tabela[parseInt(elemento.periodo) + 1].push(elemento);
      continue;
    }
    tabela[parseInt(elemento.periodo) - 1].push(elemento);
  }

  for (const row in tabela) {
    $('[role=table]').append(`<div role="row" aria-rowindex="${parseInt(row) + 1}"></div>`);
    let aux = 2;
    for (const elemento of tabela[row]) {
      const classe = elemento.classe.replace(/\s/gm, '-');
      let index = elemento.grupo[0];
      if (elemento.classe === 'Lantanídeos' || elemento.classe === 'Actinídios') {
        index = ++aux;
      }
      $('[role=row]').last().append(`
        <button role="cell" aria-colindex="${index}" data-classe="${classe}">
          ${elemento.numero}
        </button>
      `.trim());
    }
  }

  $('[aria-colindex="18"]').slice(0, 1)
    .before('<div role="cell" aria-colspan="16" aria-hidden="true"></div>');

  $('[aria-colindex="13"]').slice(0, 2)
    .before('<div role="cell" aria-colspan="10" aria-hidden="true"></div>');

  $('[aria-colindex="2"]').slice(-2)
    .after('<div role="cell" aria-hidden="true"></div>');

  $('[aria-colindex="3"]').slice(-2)
    .before('<div role="cell" aria-colspan="2" aria-hidden="true"></div>');
});
