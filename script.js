const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneno = document.getElementById('phoneno');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
  const small = formControl.querySelector('small');
  small.innerText = '';
}

// Check email is valid
function checkEmail(input) {
  // Regular Expression (Regex Check)
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'Email is not valid');
    return false;
  }
}
// Check phone number is valid
function checkPhoneNo(input){
  const re = /^[0-9]{10}$/;
  if(re.test(input.value.trim())){
    showSuccess(input);
    return true;
  }else{
    showError(input, 'Phone number must contain 10 numbers only');
    return false;
  }
}

// Check password
function checkPassword(input){
  const pass = input.value.trim();
  if(pass === 'password' || pass === username.value || pass.length < 8){
    showError(input, 'Password must contain 8 characters and should not be word \'password\' and username');
    return false;
  }else{
    showSuccess(input);
    return true;
  }
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
    return false;
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
    return false;
  }
  showSuccess(input1);
  return true;
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  if(checkLength(username, 5, 15) &&
  checkEmail(email) &&
  checkPhoneNo(phoneno) &&
  checkPassword(password) &&
  checkPasswordsMatch(password, password2)){
      return alert('Form Submitted Successfully');
  }

});
