


// for (var i = 0; i < $cardColors.length; i++) {
// 	$cardColors[i].addEventListener('click', function() {
// 		var $card = this.parentNode.parentNode.parentNode;

// 		$card.dataset.color = this.dataset.color;

// 		for (var j = 0; j < $cardColors.length; j++) {
// 			$cardColors[j].classList.remove('isActive');
// 		}
// 		this.classList.add('isActive');


// });


// }


var $cards = document.querySelectorAll('.card');
var $cardColors = document.querySelectorAll('.card-colors');

for (var i = 0; i < $cards.length; i++) {
	$cards[i].addEventListener('click', function(event) {

		var $this = event.target;

		console.log($this.classList.contains('card-colors'));

		if ($this.classList.contains('card-colors')) {
			var $card = this;

			for (var j = 0; j < $cardColors.length; j++) {
				$cardColors[j].classList.remove('isActive');
			}

			$card.dataset.color = $this.dataset.color
			$this.classList.add('isActive');

		};

	});
};

