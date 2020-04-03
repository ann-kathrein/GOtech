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

// #####################

// Contact Us Button links to the Formular

function linkToContactForm() {
  location.href = '#ContactUs';
}

let contactBtn = document.getElementById('linkToContact');
let contactBtnMobile = document.getElementById('linkToContactMobile');

contactBtn.onclick = linkToContactForm;
contactBtnMobile.onclick = linkToContactForm;

// ####### FORMULAR #########

// MODAL

// open and close Modal

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function closeByWindow(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

let submitBtn = document.getElementById('submitBtn');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-btn');

submitBtn.onclick = validate;
closeBtn.onclick = closeModal;
window.onclick = closeByWindow;

// Close Modal with OK and Change Button
let okBtn = document.getElementById('purplelinebtnModal');
let changeBtn = document.getElementById('purplebtnModal');

okBtn.onclick = closeModal;
changeBtn.onclick = closeModal;

// Validate Data
//Validation for  Mail
function validiereMailInput(input) {
  let isInputValid =
    input.value.length > 4 &&
    input.value.includes('@') &&
    input.value.includes('.');
  return manipulateInputField(input, isInputValid);
}

//Validation for Firstname, Lastname, message
function validiereInput(input) {
  let isInputValid = input.value.length > 0;
  return manipulateInputField(input, isInputValid);
}

// if  Input not valid set border
function manipulateInputField(input, isInputValid) {
  if (isInputValid == 1) {
    input.style.border = 'none';
    return true;
  } else {
    input.style.border = '1px solid #856DD7';
    return false;
  }
}

// get Inputfields and validate them with functions on top
function validate() {
  let isValid = true;

  let firstNameInput = document.getElementById('firstName');
  isValid = validiereInput(firstNameInput) && isValid;
  let lastNameInput = document.getElementById('lastName');
  isValid = validiereInput(lastNameInput) && isValid;
  let mailAdressInput = document.getElementById('mailAdress');
  isValid = validiereMailInput(mailAdressInput) && isValid;
  let messageInput = document.getElementById('message');
  isValid = validiereInput(messageInput) && isValid;
  let problemInput = document.getElementById('problem');

  // if input valid openmodal and add Input
  if (isValid == 1) {
    const space = ' ';

    document.getElementById('firstNameModal').innerHTML +=
      space + firstNameInput.value.bold();
    document.getElementById('lastNameModal').innerHTML +=
      space + lastNameInput.value.bold();
    document.getElementById('emailModal').innerHTML +=
      space + mailAdressInput.value.bold();
    document.getElementById('messageModal').innerHTML +=
      space + messageInput.value.bold();
    document.getElementById('problemModal').innerHTML +=
      space + problemInput.value.bold();

    openModal();
  } else {
    let errormessage = 'Fehler';
  }
}

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
