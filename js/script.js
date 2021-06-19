const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('ul');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  console.log('hamburger clicked');
  hamburger.classList.toggle('active');
});

//the password eye toggle
const passwordEye = document.getElementById('togglePassword');
const password = document.getElementById('password');
passwordEye.addEventListener('click', () => {
  // const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  //same as below
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
