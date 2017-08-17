'use strict';

var userDialog = document.querySelector('.setup');
var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = userDialog.querySelector('.setup-similar-list');

userDialog.classList.remove('hidden');

function getRandom(arr) {
	return arr[Math.floor(Math.random()*arr.length)];
}

function getFullName() {
	return getRandom(wizardName) + ' ' + getRandom(wizardSurname);
}

var wizards = [
	{
		name: getFullName(),
		coatColor: getRandom(coatColors),
		eyesColor: getRandom(eyesColors)
	},
	{
		name: getFullName(),
		coatColor: getRandom(coatColors),
		eyesColor: getRandom(eyesColors)
	},
	{
		name: getFullName(),
		coatColor: getRandom(coatColors),
		eyesColor: getRandom(eyesColors)
	},
	{
		name: getFullName(),
		coatColor: getRandom(coatColors),
		eyesColor: getRandom(eyesColors)
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
for (var i = 0; i < wizards.length; i ++) {
	fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');