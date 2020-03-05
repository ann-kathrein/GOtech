var backdrop = document.querySelector('#backdrop');
var toggleButton = document.querySelector('.toggle-button ');
var mobileNav = document.querySelector('.mobileNav ');

function closeMobileNav() {
	mobileNav.style.display = 'none';
	backdrop.style.display = 'none';
}

/*Open Navigation Menu and Backdrop when clicking on Hamburger Menu*/
toggleButton.addEventListener('click', function() {
	mobileNav.style.display = 'block';
	backdrop.style.display = 'block';
});

/*Close Mobile Navigation and Backdrop when clicking on Backdrop or Mobile Nav*/
backdrop.addEventListener('click', closeMobileNav);
mobileNav.addEventListener('click', closeMobileNav);




/*FORMULAR*/
const firstName = document.getElementbyID('firstName');
const lastName = document.getElementbyID('lastName');
const mailAdressInput = document.getElementbyID('mailAdress');
const message = document.getElementbyID('message');

let mailAdressClean = mailAdressInput.trim().toLowerCase();

function createDocument() { 
    let create = document.getElementByID('firstName', 'lastName', 'mailAdress', 'message');
}


create.addEventListener('click', 'createFile', function () ){ 

}