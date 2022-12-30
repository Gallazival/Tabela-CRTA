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
    $('table').append(`<tr role="row" aria-rowindex="${parseInt(row) + 1}"></tr>`);
    let aux = 2;
    for (const elemento of tabela[row]) {
      const classe = elemento.classe.replace(/\s/gm, '-');
      let index = elemento.grupo[0];
      if (elemento.classe === 'Lantanídeos' || elemento.classe === 'Actinídios') {
        index = ++aux;
      }
      $('tr').last().append(`
        <td role="cell" aria-colindex="${index}" data-classe="${classe}" data-bs-toggle="modal" data-bs-target="#detalharElemento">
          <span class="visually-hidden">${elemento.nome}</span>
          <span class="numero"><span class="visually-hidden">Número atômico: </span>${elemento.numero}</span>
          <span class="simbolo"><span class="visually-hidden">Símbolo: </span>${elemento.simbolo}</span>
          <span class="massa"><span class="visually-hidden">Massa: </span>${elemento.massa}</span>
        </td>
      `.trim());
    }
  }

  $('[aria-colindex="18"]').slice(0, 1)
    .before('<td role="cell" colspan="16" aria-colspan="16"></td>');

  $('[aria-colindex="13"]').slice(0, 2)
    .before('<td role="cell" colspan="10" aria-colspan="10"></td>');

  $('[aria-colindex="2"]').slice(-2)
    .add($('[aria-colindex="17"]').slice(-2))
      .after('<td role="cell"></td>');

  $('[aria-colindex="3"]').slice(-2)
    .before('<td role="cell" colspan="2" aria-colspan="2"></td>');
});
