'use strict';

// ######## Nav Mobile ###########

document.getElementById('hamburger').addEventListener('click', navStatus);

function navStatus() {
  let menuElement = document.querySelector('.menu');
  let icon = document.querySelector('.hamIcon');
  if (menuElement.classList.contains('menu-active')) {
    menuElement.classList.remove('menu-active');
    icon.classList.remove('hamburger-active');
    document.body.style.overflow = 'auto';
  } else {
    menuElement.classList.add('menu-active');
    document.body.style.overflow = 'hidden';
    icon.classList.add('hamburger-active');
  }
}

// ####### FORMULAR #########
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const mailAdressInput = document.getElementById('mailAdress');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

//Modal;

function validate() {
  //let mailAdressClean = mailAdressInput.toLowerCase();
  if (
    firstNameInput.value.length > 0 &&
    lastNameInput.value.length > 0 &&
    mailAdressInput.value.length > 4 &&
    mailAdressInput.value.includes('@') &&
    mailAdressInput.value.includes('.') &&
    messageInput.value.length > 0
  ) {
    event.preventDefault();
    alert(
      `Name: ${firstNameInput.value} ${lastNameInput.value}, eMail: ${mailAdressInput.value}, Message: ${messageInput.value}`
    );
  } else {
    alert('Please fill in all fields.');
  }
}
submitBtn.addEventListener('click', validate);
