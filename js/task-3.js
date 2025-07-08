const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  const inputTrim = inputEl.value.trim();
  if (inputTrim !== '') {
    spanEl.textContent = inputTrim;
  } else {
    spanEl.textContent = 'Anonymous';
  }
});
