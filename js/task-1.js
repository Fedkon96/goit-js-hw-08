const liItemEl = document.querySelectorAll('.item');

console.log(`categories = ${liItemEl.length}`);

liItemEl.forEach(el => {
  const h2El = el.querySelector('h2').textContent;
  const liEl = el.querySelectorAll('ul li').length;
  console.log(`Category: ${h2El}`);
  console.log(`Elements: ${liEl}`);
});
