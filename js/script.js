const elemento = document.querySelector('#12');

document.addEventListener('keydown', evt => {
  let number = evt.target.id;
  if (evt.key === 'Enter') {
    console.log(number);
  }
});
