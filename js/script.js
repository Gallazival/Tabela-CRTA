import elementos from './json/elementos.json' assert { type: 'json' };

$(document).ready(function () {
  $('.ajuda').click();

  $(document).keydown((e) => {
    if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter') {
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
    $('.modal-title td').replaceWith($(this).clone().removeAttr('tabindex'));
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
    console.log('aaaa');
    $('.modal-title td').replaceWith(`
      <td>
        <h5 class="modal-title" id="modalElementoLabel">
          Controles
        </h5>
      </td>
    `);
    $('.modal-body ul').replaceWith(`
      <ul class="p-0 m-0" style="list-style: none">
        <li>Use os atalhos Tab e Shift + Tab para navegação padrão.</li>
        <li>Use o atalho Ctrl + Alt + T para pular ao começo da tabela.</li>
        <li>Use o atalho Ctrl + Alt + Setas do teclado para navegar entre os elementos da tabela.</li>
        <li>Use a tecla Enter para detalhar os elementos e a tecla ESC para fechar a descrição.</li>
        <li>Se precisar revisar esta informação, aperte Alt + H.</li>
      </ul>
    `);
  }

  // // guardar último elemento em foco na tabela
  // let lastFocus = $('body');

  // // mostrar modal de ajuda
  // help.call($('.content'));

  // $(document).keydown((e) => {
  //   // fecha o modal com ESC
  //   if (e.key === 'Escape' || e.code === 'Escape') {
  //     if ($('.wall').is(':visible')) {
  //       $('.wall').hide();
  //       lastFocus.focus();
  //     }
  //   }
  //   // abre o modal de ajuda
  //   if (e.altKey) {
  //     if (e.key === 'h' || e.key === 'H' || e.code === 'KeyH') {
  //       help.call($('.content'));
  //     }
  //   }
  //   // pula para o primeiro elemento da tabela
  //   if (e.ctrlKey && e.altKey) {
  //     if (e.key === 't' || e.key === 'T' || e.code === 'KeyT') {
  //       if ($('.wall').is(':hidden')) {
  //         $('.tabela .elemento').first().focus();
  //       }
  //     }
  //   }
  // });

  // $('.pop-up').on('keydown', '.content', (e) => {
  //   // prende o foco no modal
  //   if (e.shiftKey) {
  //     if (e.key === 'Tab' || e.code === 'Tab') {
  //       e.preventDefault();
  //       $('.fechar').focus();
  //     }
  //   }
  // });

  // $('.pop-up').on('keydown', '.fechar', (e) => {
  //   // prende o foco no modal
  //   if (e.key === 'Tab' || e.code === 'Tab') {
  //     e.preventDefault();
  //     $('.content .read').focus();
  //   }
  // });

  // $('.ajuda').on({
  //   // abre o modal de ajuda
  //   click: () => {
  //     help.call($('.content'));
  //   },
  //   // abre o modal de ajuda com ENTER
  //   keydown: (e) => {
  //     if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter') {
  //       help.call($('.content'));
  //     }
  //   },
  // });

  // $('.fechar').on({
  //   // fecha o modal com clique no botão
  //   click: () => {
  //     $('.wall').hide();
  //   },
  //   // fecha o modal com ENTER
  //   keydown: (e) => {
  //     if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter') {
  //       $('.wall').hide();
  //     }
  //   },
  //   // volta o foco ao elemento
  //   blur: () => {
  //     if ($('.wall').is(':hidden')) {
  //       lastFocus.focus();
  //     }
  //   },
  // });

  // // define os controles Ctrl + Alr + Setas
  // $('.tabela').on('keydown', '.elemento', (e) => {
  //   if (e.ctrlKey && e.altKey) {
  //     if (e.key === 'ArrowRight' || e.code === 'ArrowRight') {
  //       e.preventDefault();
  //       $('.tabela .elemento')
  //         .get($('.tabela .elemento').index($(':focus')) + 1)
  //         .focus();
  //     }
  //     if (e.key === 'ArrowLeft' || e.code === 'ArrowLeft') {
  //       e.preventDefault();
  //       $('.tabela .elemento')
  //         .get(Math.abs($('.tabela .elemento').index($(':focus')) - 1))
  //         .focus();
  //     }
  //     if (e.key === 'ArrowUp' || e.code === 'ArrowUp') {
  //       e.preventDefault();
  //       $('.tabela td')
  //         .get(Math.abs($('.tabela td').index($(':focus')) - 18))
  //         .focus();
  //     }
  //     if (e.key === 'ArrowDown' || e.code === 'ArrowDown') {
  //       e.preventDefault();
  //       $('.tabela td')
  //         .get($('.tabela td').index($(':focus')) + 18)
  //         .focus();
  //     }
  //   }
  // });

  // // abrindo os detalhes de um elemento
  // $('.tabela .elemento').on({
  //   click: detalhar,
  //   keydown: (e) => {
  //     if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter') {
  //       detalhar.call($(':focus'));
  //     }
  //   },
  // });

  // function detalhar() {
  //   if ($(this).hasClass('atalho')) {
  //     $('.atalho').index($(':focus')) ? $('.actinidio')[1].focus() : $('.lantanideo')[1].focus();
  //     return;
  //   }
  //   lastFocus = $(this);
  //   const index = $(this).data('id');
  //   $('.display td').replaceWith($(this).clone().removeAttr('tabindex'));
  //   $('.content').html(`
  //     <div class="show" tabindex="0">
  //       <ul>
  //         <li><b>Nome:</b> ${elementos[index].nome}.</li>
  //         <li><b>Sigla:</b> ${elementos[index].sigla}.</li>
  //         <li><b>Número atômico:</b> ${elementos[index].atomico}.</li>
  //         <li><b>Massa atômica:</b> ${elementos[index].massa} g/mol.</li>
  //       </ul>
  //     <div>
  //     <div class="read" tabindex="0">
  //       <ul>
  //         <li><b>Família:</b> ${elementos[index].familia}.</li>
  //         <li><b>Classificação:</b> ${elementos[index].classe}.</li>
  //         <li><b>Estado:</b> ${elementos[index].estado}.</li>
  //         <li><b>Ponto de fusão:</b> ${elementos[index].fusao}.</li>
  //         <li><b>Ponto de ebulição:</b> ${elementos[index].ebulicao}.</li>
  //         <li><b>Distribuição:</b> ${elementos[index].distribuicao}.</li>
  //         <li><b>Curiosidade:</b> ${elementos[index].curiosidade}.</li>
  //       </ul>
  //     </div>
  //   `);
  //   $('.wall').show();
  //   $('.display').show();
  //   $('.content .read').focus();
  // }

  // function help() {
  //   lastFocus = $(':focus');
  //   $('.display td').replaceWith('<td></td>');
  //   $(this).html(`
  //     <div class="read" tabindex="0">
  //       <b>Controles:</b>
  //       <ul>
  //         <li>Use os atalhos Tab e Shift + Tab para navegação padrão.</li>
  //         <li>Use o atalho Ctrl + Alt + T para pular ao começo da tabela.</li>
  //         <li>Use o atalho Ctrl + Alt + Setas do teclado para navegar entre os elementos da tabela.</li>
  //         <li>Use a tecla Enter para detalhar os elementos e a tecla ESC para fechar a descrição.</li>
  //         <li>Se precisar revisar esta informação, aperte Alt + H.</li>
  //       </ul>
  //     </div>
  //   `);
  //   $('.wall').show();
  //   $('.display').hide();
  //   $('.content .read').focus();
  // }
});
