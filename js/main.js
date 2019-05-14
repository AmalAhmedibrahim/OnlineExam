class user {
  constructor(firstName, lastName, userName,uemail, password, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName=userName
    this.email = uemail;
    this.password = password;
    this.gender = gender;
  }
}


var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var userName = document.getElementById('user-name');

firstName.addEventListener('keyup', function () {
  if (validateName(firstName.value)) {
    firstName.style.borderColor = 'green';
  }
  else {
    firstName.style.borderColor = 'red';
  }
})

lastName.addEventListener('keyup', function () {
  if (validateName(lastName.value)) {
    lastName.style.borderColor = 'green';
  }
  else {
    lastName.style.borderColor = 'red';
  }
});
userName.addEventListener('keyup', function () {
  if (validateUserName(userName.value)) {
    userName.style.borderColor = 'green';
  }
  else {
    userName.style.borderColor = 'red';
  }
})
email.addEventListener('keyup', function () {
  if (validateEmail(email.value)) {
    email.style.borderColor = 'green';
  }
  else {
    email.style.borderColor = 'red';
  }
})
password.addEventListener('keyup', function () {
  if (validatePassword(password.value)) {
    password.style.borderColor = 'green';
  }
  else {
    password.style.borderColor = 'red';
  }
})

var btnLogin = document.getElementById("login");
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  if (document.getElementById('male').checked) {
    var gender = 'Male';
  }
  else {
    var gender = 'Female';
  }
  var student = new user(firstName.value, lastName.value, userName.value,email.value, password.value, gender);
  debugger;
  if(validateData(student))
  {
    document.getElementById("form").submit();
  }
  else
  {
    alert('enter valid data')
  }
  // get data and create user
  // validate user
  // if true form.submit();
  // else validation error
})

function validateData(user) {
  if (validateName(user.firstName) && validateName(user.lastName) && validateUserName(user.userName) && validatePassword(user.password) && validateEmail(user.email)) {
    return true;
  }
  else {
    return false;
  }
}

function validateName(name) {
  var regex = /^[a-zA-Z ]{2,30}$/;
  if (name == null || name == '' || !regex.test(name)) {
    return false;
  }
  else
    return true;
}
function validateUserName(userName) {
  var regex = /^[a-z0-9_-]{3,15}$/;
  if (userName == null || userName == '' || !regex.test(userName)) {
    return false;
  }
  else
    return true;
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePassword(password) {
  if (password == null || password == '' || password.length < 8) {
    return false;
  }
  else
    return true;
}








