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

//Versuch Modal - funktioniert nicht

/*const modal = document.getElementById('myModal');
let span = document.getElementsByClassName('close')[0];

function openModal() {
  modal.style.display = 'block';
  `Name: ${firstNameInput.value} ${lastNameInput.value}, eMail: ${mailAdressInput.value}, Message: ${messageInput.value}`;
} --> oben in if einbauen

span.onclick = function closemodal() {
  modal.style.display = 'none';
};

window.onclick = function() {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};*/
