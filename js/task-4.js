const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Запобігає перезавантаженню сторінки

  const emailInput = document.querySelector('[name="email"]');
  const passwordInput = document.querySelector('[name="password"]');

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return; // Зупиняє подальше виконання коду
  }

  const formData = {
    email,
    password,
  };

  console.log('Form data:', formData);
  loginForm.reset(); // Очищає значення полів форми
});
