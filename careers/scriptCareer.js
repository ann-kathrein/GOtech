function btnListener(id) {
	changeColour(id);
	if (id === 'developerBtn') {
		for (let el of document.querySelectorAll('.designer, .mgmt')) el.style.display = 'none';
	} else if (id == 'designerBtn') {
		for (let el of document.querySelectorAll('.mgmt, .dev')) el.style.display = 'none';
	} else if (id == 'managementBtn') {
		for (let el of document.querySelectorAll('.dev, .designer')) el.style.display = 'none';
	} else if (id == 'allTogetherBtn') {
		for (let el of document.querySelectorAll('.dev, .designer, .mgmt')) el.style.display = 'unset';
	}
}

function changeColour(id) {
	if (document.getElementById(id).classList.contains('purplelinebtn2')) {
		document.getElementById(id).classList.add('purplebtn2');
		document.getElementById(id).classList.remove('purplelinebtn2');
	} else {
		document.getElementById(id).classList.add('purplelinebtn2');
		document.getElementById(id).classList.remove('purplebtn2');
	}
	/*if (id === 'developerBtn') {
		document.getElementById(id).classList.add('purplelinebtn2');
		document.getElementById(id).classList.remove('purplebtn2');
	}*/
}
