'use strict';

// ######## Nav mobile ###########

document.getElementById('hamburger').addEventListener('click', navStatus);

function navStatus() {
  let menuElement = document.querySelector('.menu').classList;
  if (menuElement.contains('hamburger-active')) {
    menuElement.remove('hamburger-active');
  } else {
    menuElement.add('hamburger-active');
  }
}

// ####### FORMULAR #########
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const mailAdressInput = document.getElementById('mailAdress');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

//let mailAdressClean = mailAdressInput.trim().toLowerCase();

function submitForm() {
  event.preventDefault();
  alert(
    `Name: ${firstNameInput.value} ${lastNameInput.value}, eMail: ${mailAdressInput.value}, Message: ${messageInput.value}`
  );
}
submitBtn.addEventListener('click', submitForm);
