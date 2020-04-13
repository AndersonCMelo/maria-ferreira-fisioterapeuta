document
  .querySelector('.btnMenu-open')
  .addEventListener('click', function() {
    document
      .querySelector('.menu-opened')
      .classList.toggle('hide')
  });

document
  .querySelector('.btnMenu-close')
  .addEventListener('click', function() {
    document
      .querySelector('.menu-opened')
      .classList.toggle('hide')
  });
