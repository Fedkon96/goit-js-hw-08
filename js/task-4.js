const formEl = document.querySelector('.login-form');
const labelEl = document.querySelectorAll('.login-form label');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const login = formEl.elements.email.value.trim();
  const password = formEl.elements.password.value.trim();

  if (login === '' || password === '') {
    return alert('All form fields must be filled in');
  } else {
    const valueForm = {
      email: login,
      password: password,
    };
    console.log(valueForm);
    formEl.reset();
  }
});
