const div = document.getElementById('click');
div.addEventListener('click', function () {
  console.log('COUCOU');
  div.classList.add('full');
});
