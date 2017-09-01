'use strict';

(function() {
	var wizardCoat = window.util.userDialog.querySelector('.wizard-coat');
	var wizardEyes = window.util.userDialog.querySelector('.wizard-eyes');
	var wizardFireball = window.util.userDialog.querySelector('.setup-fireball-wrap');
	var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

	wizardCoat.addEventListener('click', function () {
	  var currentColor = wizardCoat.style.fill;
	  while (true) {
	    var newColor = window.util.getRandom(window.util.coatColors);
	    if (newColor !== currentColor) {
	      break;
	    }
	  }
	  wizardCoat.style.fill = newColor;
	});

	wizardEyes.addEventListener('click', function () {
	  var currentColor = wizardEyes.style.fill;
	  while (true) {
	    var newColor = window.util.getRandom(window.util.eyesColors);
	    if (newColor !== currentColor) {
	      break;
	    }
	  }
	  wizardEyes.style.fill = newColor;
	});

	wizardFireball.addEventListener('click', function () {
	  var currentColor = wizardFireball.style.backgroundColor;
	  while (true) {
	    var newColor = window.util.getRandom(fireballColors);
	    if (newColor !== currentColor) {
	      break;
	    }
	  }
	  wizardFireball.style.backgroundColor = newColor;
	});
})();