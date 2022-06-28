document.addEventListener('keydown', evt => {
  // console.log(evt);
  if (evt.key === 'Enter') {
    evt.preventDefault();
    if (evt.target.id === 'E57-71') {
      console.log('aaa');
      document.querySelector('#E57').focus();
    }
    if (evt.target.id === 'E89-103') {
      document.querySelector('#E89').focus();
    }
  }
  if (evt.key === 'ArrowRight') {
    evt.preventDefault();
    if (evt.target.nextElementSibling.classList.contains('col-hidden')) {
      evt.target.nextElementSibling.nextElementSibling.focus();
    } else {
      evt.target.nextElementSibling.focus();
    }
  }
  if (evt.key === 'ArrowLeft') {
    evt.preventDefault();
    if (evt.target.previousElementSibling.classList.contains('col-hidden')) {
      evt.target.previousElementSibling.previousElementSibling.focus();
    } else {
      evt.target.previousElementSibling.focus();
    }
  }
  if (evt.key === 'ArrowUp') {
    evt.preventDefault();
    // document.querySelector(`#E${parseInt(evt.target.id.split('').shift) - 12}`).focus()
  }
});
