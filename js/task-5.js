function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  buttonEl: document.querySelector('.change-color'),
  bodyEl: document.querySelector('body'),
  spanEl: document.querySelector('.color'),
};

refs.buttonEl.addEventListener('click', () => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  const valueColor = refs.bodyEl.style.backgroundColor;
  refs.spanEl.innerHTML = valueColor;
});
