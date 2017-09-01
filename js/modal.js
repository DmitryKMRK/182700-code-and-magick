'use strict';

(function() {
	var dialogOpen = document.querySelector('.setup-open');
	var dialogClose = window.util.userDialog.querySelector('.setup-close');
	var userName = window.util.userDialog.querySelector('.setup-user-name');
	var dialogSubmit = window.util.userDialog.querySelector('.setup-submit');

	dialogOpen.addEventListener('click', function () {
	  window.util.userDialog.classList.remove('hidden');

	  document.addEventListener('keydown', function (evt) {
	    if (evt.keyCode === window.util.ESC_KEY && evt.target !== userName) {
	      window.util.userDialog.classList.add('hidden');
	    }
	  });

	  dialogClose.addEventListener('keydown', function (evt) {
	    if (evt.keyCode === window.util.ENTER_KEY) {
	      window.util.userDialog.classList.add('hidden');
	    }
	  });

	  dialogSubmit.addEventListener('click', function () {
	    window.util.userDialog.classList.add('hidden');
	  });

	  dialogSubmit.addEventListener('keydown', function (evt) {
	    if (evt.keyCode === window.util.ENTER_KEY) {
	      window.util.userDialog.classList.add('hidden');
	    }
	  });
	});

	dialogOpen.addEventListener('keydown', function (evt) {
	  if (evt.keyCode === window.util.ENTER_KEY) {
	    window.util.userDialog.classList.remove('hidden');
	  }
	});

	dialogClose.addEventListener('click', function () {
	  window.util.userDialog.classList.add('hidden');
	});
})();