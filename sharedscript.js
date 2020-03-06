'use strict';

const mobileNav = document.querySelector('.smallScreen');
const menuButton = document.querySelector('.checkbox');
const menuButton = document.querySelector('.checkbox');

/*
var backdrop = document.querySelector('#backdrop');
var toggleButton = document.querySelector('.toggle-button ');
var mobileNav = document.querySelector('.mobileNav ');

function closeMobileNav() {
	mobileNav.style.display = 'none';
	backdrop.style.display = 'none';
}

/*Open Navigation Menu and Backdrop when clicking on Hamburger Menu*/
/*toggleButton.addEventListener('click', function() {
	mobileNav.style.display = 'block';
	backdrop.style.display = 'block';
})
*/

/*Close Mobile Navigation and Backdrop when clicking on Backdrop or Mobile Nav*/
/*backdrop.addEventListener('click', closeMobileNav);
mobileNav.addEventListener('click', closeMobileNav); */

/*FORMULAR*/
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
