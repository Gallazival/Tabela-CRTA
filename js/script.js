const makeArray = (size, content) => new Array(size).fill(content);
const table = [
  [...makeArray(18, '')],
  ['E1',...makeArray(16,''),'E2'],
  ['E3','E4',...makeArray(10,''),'E5','E6','E7','E8','E9','E10'],
  ['E11','E12',...makeArray(10,''),'E13','E14','E15','E16','E17','E18'],
  ['E19','E20','E21','E22','E23','E24','E25','E26','E27','E28','E29','E30','E31','E32','E33','E34','E35','E36'],
  ['E37','E38','E39','E40','E41','E42','E43','E44','E45','E46','E47','E48','E49','E50','E51','E52','E53','E54'],
  ['E55','E56','E57-71','E72','E73','E74','E75','E76','E77','E78','E79','E80','E81','E82','E83','E84','E85','E86'],
  ['E87','E88','E89-103','E104','E105','E106','E107','E108','E109','E110','E111','E112','E113','E114','E115','E116','E117','E118'],
  ['','','','E57','E58','E59','E60','E61','E62','E63','E64','E65','E66','E67','E68','E69','E70','E71'],
  ['','','','E89','E90','E91','E92','E93','E94','E95','E96','E97','E98','E99','E100','E101','E102','E103'],
  ['f1','f2','f3','f4','f5','f6','f7','f8','f9','f10','f11','f12','f13','f14','f15','f16','f17','f18'],
  [...makeArray(18, '')]
];

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
  for (i = 0; i < table.length; i++) {
    for (j = 0; j < table[i].length; j++) {
      if (table[i][j] === evt.target.id) {
        // evt.preventDefault();
        // console.log(table[i - 1][j]);
        // console.log(evt.target.id);
        // console.log(table[i + 1][j]);
        if (evt.key === 'ArrowUp') {
          if (table[i - 1][j] === '') {
            break;
          } else {
            evt.preventDefault();
            document.querySelector(`#${table[i - 1][j]}`).focus();
          }
        }
        if (evt.key === 'ArrowDown') {
          if (table[i + 1][j] === '') {
            break;
          } else {
            evt.preventDefault();
            document.querySelector(`#${table[i + 1][j]}`).focus();
          }
        }
      }
    }
  }
});
