'use strict';

// ######## Nav Mobile ###########

document.getElementById('hamburger').addEventListener('click', navStatus);

function navStatus() {
  let menuElement = document.querySelector('.menu');
  //let icon = document.querySelector('.hamIcon');
  if (menuElement.classList.contains('menu-active')) {
    menuElement.classList.remove('menu-active');
    //icon.classList.remove('hamburger-active');
  } else {
    menuElement.classList.add('menu-active');
    //icon.classList.add('hamburger-active');
  }
}

// ####### FORMULAR #########
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const mailAdressInput = document.getElementById('mailAdress');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

//let mailAdressClean = mailAdressInput.toLowerCase();

function validate() {
  if (
    firstName.value.length > 0 &&
    lastName.value.length > 0 &&
    mailAdress.value.length > 4 &&
    //mailAdress.includes('@') &&
    //mailAdress.includes('.') &&
    message.value.length > 0
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
