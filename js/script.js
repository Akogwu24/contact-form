const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('ul');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');

  hamburger.classList.toggle('active');
});

//the password eye toggle
const passwordEye = document.getElementById('togglePassword');
const password = document.getElementById('password');
passwordEye.addEventListener('click', () => {
  const currentType =
    password.getAttribute('type') === 'password' ? 'text' : 'password';
  const type = currentType;

  password.setAttribute('type', type);
  passwordEye.classList.toggle('fa-eye-slash');
});

//form Validation

//name input only validation
const nameInputBar = document.getElementById('name');
nameInputBar.addEventListener('blur', () => {
  const nameInputValue = nameInputBar.value.trim();
  const nameError = document.getElementById('name-error');
  if (nameInputValue == '') {
    nameError.textContent = 'name cannot be empty';
    nameInputBar.style.borderColor = 'red';
  } else {
    nameError.textContent = '';
    nameInputBar.style.borderColor = 'green';
  }
});

//phone only validation
const phoneInputBar = document.getElementById('phone');

phoneInputBar.addEventListener('blur', () => {
  const phoneInputValue = phoneInputBar.value.trim();
  const phoneError = document.getElementById('phone-error');
  if (phoneInputValue == '') {
    phoneError.textContent = 'phone Number cannot be empty';
    phoneInputBar.style.borderColor = 'red';
  } else if (phoneInputValue.length != 11) {
    phoneError.textContent = 'phone Number must be Eleven digits';
    phoneInputBar.style.borderColor = 'red';
  } else {
    phoneError.textContent = '';
    phoneInputBar.style.borderColor = 'green';
  }
});

//email only Validation
const emailInputBar = document.getElementById('email');

emailInputBar.addEventListener('blur', () => {
  const email = emailInputBar.value.trim();
  const emailError = document.getElementById('email-error');
  if (email == '') {
    emailError.textContent = 'email cannot be empty';
    emailInputBar.style.borderColor = 'red';
  } else if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    ) === false
  ) {
    emailError.textContent = 'please input a valid email';
    emailInputBar.style.borderColor = 'red';
  } else {
    emailError.textContent = '';
    emailInputBar.style.borderColor = 'green';
  }
});

// password validation
const passwordInputBar = document.getElementById('password');
passwordInputBar.addEventListener('blur', () => {
  const passwordInputValue = passwordInputBar.value.trim();
  const paswordError = document.getElementById('password-error');
  const passwordInputValueLength = passwordInputValue.length;
  if (
    passwordInputValueLength < 6 ||
    passwordInputValueLength > 15 ||
    passwordInputValueLength === 0
  ) {
    paswordError.textContent = 'password must be between 6 and 15 digits';
    passwordInputBar.style.borderColor = 'red';
  } else {
    paswordError.textContent = '';
    passwordInputBar.style.borderColor = 'green';
  }
  // else if(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(passwordInputValue)===false){
  //   paswordError.textContent = 'password must contain at least one special character';
  //   passwordInputBar.style.borderColor='red'
  // }else{
  //   paswordError.textContent = '';
  //   passwordInputBar.style.borderColor='green'
  // }
});

//all validations
const registerBtn = document.getElementById('register');
registerBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const nameInputValue = nameInputBar.value.trim();
  const nameError = document.getElementById('name-error');
  const phoneInputValue = phoneInputBar.value.trim();
  const phoneError = document.getElementById('phone-error');
  const passwordInputValue = passwordInputBar.value.trim();
  const paswordError = document.getElementById('password-error');
  const email = emailInputBar.value.trim();
  const emailError = document.getElementById('email-error');
  if (nameInputValue == '') {
    nameError.textContent = 'you have not entered your name';
    nameInputBar.style.borderColor = 'red';
  }
  if (phoneInputValue == '') {
    console.log(phoneInputValue);
    phoneInputBar.style.borderColor = 'red';
    phoneError.textContent = 'you have noy entered your phoe number';
  }
  if (phoneInputValue.length != 11) {
    phoneInputBar.style.borderColor = 'red';
    phoneError.textContent = 'phone number must be 11 digits';
  }
  if (email == '') {
    emailInputBar.style.borderColor = 'red';
    emailError.textContent = 'you have not entered your email';
  }
  if (passwordInputValue == '') {
    paswordError.textContent = 'input a valid password';
    passwordInputBar.style.borderColor = 'red';
  }
  {
    if (
      nameError.textContent === '' &&
      phoneError.textContent === '' &&
      emailError.textContent === '' &&
      paswordError.textContent === ''
    ) {
      const formHeader = document.querySelector('.form-header h1');
      formHeader.textContent = 'Registered Successfully';
      formHeader.style.color = 'green';
      document.querySelector('.form-header p').textContent = 'enjoy your stay';
    }
  }
});
