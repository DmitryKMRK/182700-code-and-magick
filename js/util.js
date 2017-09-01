'use strict';

(function() {
	var ENTER_KEY = 13;
	var ESC_KEY = 27;
	var userDialog = document.querySelector('.setup');
	var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
	var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
	function getRandom(arr) {
	  return arr[Math.floor(Math.random() * arr.length)];
	}

	window.util = {
		ENTER_KEY: 13,
		ESC_KEY: 27,
		userDialog: document.querySelector('.setup'),
		getRandom: function(arr) {
	  	return arr[Math.floor(Math.random() * arr.length)];
		},
		coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
		eyesColors: ['black', 'red', 'blue', 'yellow', 'green']
	}
})();