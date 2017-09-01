'use strict';

(function() {
	var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
	var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
	var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
	var similarListElement = window.util.userDialog.querySelector('.setup-similar-list');

	function getFullName() {
	  return window.util.getRandom(wizardName) + ' ' + window.util.getRandom(wizardSurname);
	}

	var wizards = [
	  {
	    name: getFullName(),
	    coatColor: window.util.getRandom(window.util.coatColors),
	    eyesColor: window.util.getRandom(window.util.eyesColors)
	  },
	  {
	    name: getFullName(),
	    coatColor: window.util.getRandom(window.util.coatColors),
	    eyesColor: window.util.getRandom(window.util.eyesColors)
	  },
	  {
	    name: getFullName(),
	    coatColor: window.util.getRandom(window.util.coatColors),
	    eyesColor: window.util.getRandom(window.util.eyesColors)
	  },
	  {
	    name: getFullName(),
	    coatColor: window.util.getRandom(window.util.coatColors),
	    eyesColor: window.util.getRandom(window.util.eyesColors)
	  }
	];

	function renderWizard(wizard) {
	  var element = template.cloneNode(true);
	  element.querySelector('.setup-similar-label').textContent = wizard.name;
	  element.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	  element.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
	  return element;
	}

	var fragment = document.createDocumentFragment();
	for (var i = 0; i < wizards.length; i++) {
	  fragment.appendChild(renderWizard(wizards[i]));
	}

	similarListElement.appendChild(fragment);

	window.util.userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();