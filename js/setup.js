'use strict';

var ENTER_KEY = 13;
var ESC_KEY = 27;

var userDialog = document.querySelector('.setup');
var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = userDialog.querySelector('.setup-similar-list');

var dialogOpen = document.querySelector('.setup-open');
var dialogClose = userDialog.querySelector('.setup-close');
var userName = userDialog.querySelector('.setup-user-name');
var dialogSubmit = userDialog.querySelector('.setup-submit');

// Open-close dialog window
dialogOpen.addEventListener('click', function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEY && evt.target !== userName) {
      userDialog.classList.add('hidden');
    }
  });

  dialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      userDialog.classList.add('hidden');
    }
  });

  dialogSubmit.addEventListener('click', function () {
    userDialog.classList.add('hidden');
  });

  dialogSubmit.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      userDialog.classList.add('hidden');
    }
  });
});

dialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY) {
    userDialog.classList.remove('hidden');
  }
});

dialogClose.addEventListener('click', function () {
  userDialog.classList.add('hidden');
});

// Wizard colors

var wizardCoat = userDialog.querySelector('.wizard-coat');
var wizardEyes = userDialog.querySelector('.wizard-eyes');
var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  var currentColor = wizardCoat.style.fill;
  while (true) {
    var newColor = getRandom(coatColors);
    if (newColor !== currentColor) {
      break;
    }
  }
  wizardCoat.style.fill = newColor;
});

wizardEyes.addEventListener('click', function () {
  var currentColor = wizardEyes.style.fill;
  while (true) {
    var newColor = getRandom(eyesColors);
    if (newColor !== currentColor) {
      break;
    }
  }
  wizardEyes.style.fill = newColor;
});

wizardFireball.addEventListener('click', function () {
  var currentColor = wizardFireball.style.backgroundColor;
  while (true) {
    var newColor = getRandom(fireballColors);
    if (newColor !== currentColor) {
      break;
    }
  }
  wizardFireball.style.backgroundColor = newColor;
});

// Random wizards
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
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
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
