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

// Contact Us Button links to the Formular !NOT WORKING!
/*let contactBtn = document.querySelector('contactBtn');
contactBtn.addEventListener("click", {
  location.href = '#ContactUs';
});*/

// ####### FORMULAR #########

// MODAL

// open and close

let submitBtn = document.getElementById('submitBtn');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-btn');

submitBtn.onclick = function openModal() {
  modal.style.display = 'block';
};
closeBtn.onclick = function closeModal() {
  modal.style.display = 'none';
};
window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};

// Close Modal with OK and Change Button

let okBtn = document.getElementById('.purplebtnModal');
let changeBtn = document.getElementById('.purpleblinetnModal');

okBtn.onclick = function closeModal() {
  modal.style.display = 'none';
};
changeBtn.onclick = function closeModal() {
  modal.style.display = 'none';
};

// Validate Data

const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const mailAdressInput = document.getElementById('mailAdress');
const messageInput = document.getElementById('message');

function validate() {
  if (
    firstNameInput.value.length > 0 &&
    lastNameInput.value.length > 0 &&
    mailAdressInput.value.length > 4 &&
    mailAdressInput.value.includes('@') &&
    mailAdressInput.value.includes('.') &&
    messageInput.value.length > 0
  ) {
    openModal();
  } else {
    let errormessage = '';
    errormessage != '';
    alert(errormessage);
    return false;
  }
}
submitBtn.addEventListener('click', validate);

// WORKING
/*function validate() {
  //let mailAdressClean = mailAdressInput.toLowerCase();
  /*if (
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
submitBtn.addEventListener('click', validate);*/
