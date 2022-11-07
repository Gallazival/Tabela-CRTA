import elementos from './json/elementos.json' assert { type: 'json' };

$(document).ready(function () {
  $('.ajuda').click();

  $(document).keydown((e) => {
    if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter') {
      if ($($('.elemento:focus')).hasClass('atalho')) {
        $('.atalho').index($(':focus')) ? $('.actinidio')[1].focus() : $('.lantanideo')[1].focus();
        return false;
      }
      $('.elemento:focus').click();
    }
    if (e.altKey) {
      if (e.key === 'h' || e.key === 'H' || e.code === 'KeyH') {
        $('.ajuda').click();
      }
    }
  });

  $('.elemento').click(detalhar);
  $('.ajuda').click(ajuda);

  function detalhar() {
    const index = $(this).data('id');
    // $('.modal-title td').replaceWith($(this).clone().removeAttr('tabindex'));
    $('.modal-title').text(`Detalhes`);
    $('.modal-body ul').replaceWith(`
      <ul class="p-0 m-0" style="list-style: none">
        <li><b>Nome:</b> ${elementos[index].nome}</li>
        <li><b>Sigla:</b> ${elementos[index].sigla}</li>
        <li><b>Número atômico:</b> ${elementos[index].atomico}</li>
        <li><b>Massa atômica:</b> ${elementos[index].massa} g/mol</li>
        <div tabindex="0">
          <li><b>Família:</b> ${elementos[index].familia}</li>
          <li><b>Classificação:</b> ${elementos[index].classe}</li>
          <li><b>Estado:</b> ${elementos[index].estado}</li>
          <li><b>Ponto de fusão:</b> ${elementos[index].fusao}</li>
          <li><b>Ponto de ebulição:</b> ${elementos[index].ebulicao}</li>
          <li><b>Distribuição:</b> ${elementos[index].distribuicao}</li>
          <li><b>Curiosidade:</b> ${elementos[index].curiosidade}</li>
        </div>
      </ul>
    `);
  }

  function ajuda() {
    $('.modal-title').text(`Ajuda`);
    $('.modal-body ul').replaceWith(`
      <ul class="p-0 m-0" style="list-style: none" tabindex="0">
        <li>Use os atalhos Tab e Shift + Tab para navegação padrão.</li>
        <li>Use o atalho Ctrl + Alt + T para pular ao começo da tabela.</li>
        <li>Use o atalho Ctrl + Alt + Setas do teclado para navegar entre os elementos da tabela.</li>
        <li>Use a tecla Enter para detalhar os elementos e a tecla ESC para fechar a descrição.</li>
        <li>Se precisar revisar esta informação, aperte Alt + H.</li>
      </ul>
    `);
  }

  $('.tabela').on('keydown', '.elemento', (e) => {
    if (e.ctrlKey && e.altKey) {
      if (e.key === 'ArrowRight' || e.code === 'ArrowRight') {
        e.preventDefault();
        $('.tabela .elemento')
          .get($('.tabela .elemento').index($(':focus')) + 1)
          .focus();
      }
      if (e.key === 'ArrowLeft' || e.code === 'ArrowLeft') {
        e.preventDefault();
        $('.tabela .elemento')
          .get(Math.abs($('.tabela .elemento').index($(':focus')) - 1))
          .focus();
      }
      if (e.key === 'ArrowUp' || e.code === 'ArrowUp') {
        e.preventDefault();
        $('.tabela td')
          .get(Math.abs($('.tabela td').index($(':focus')) - 18))
          .focus();
      }
      if (e.key === 'ArrowDown' || e.code === 'ArrowDown') {
        e.preventDefault();
        $('.tabela td')
          .get($('.tabela td').index($(':focus')) + 18)
          .focus();
      }
    }
  });
});
