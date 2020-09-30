function createInput(initialValue) {
  const input = document.createElement('input');
  input.value = initialValue;

  input.addEventListener('input', function (event) {
    console.log('Value', event.target.value);
    localStorage.setItem('monTexte', event.target.value);
  });

  return input;
}
