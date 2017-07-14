


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
var $cardColors = document.querySelectorAll('.card-options');


for (var i = 0; i < $cards.length; i++) {
	$cards[i].addEventListener('click', function(event) {

		var $this = event.target;
		var $card = this;
		var $cardContent = $card.querySelector('.card-content');

		//console.log($card);
		//console.log($this.dataset.color);

		if ($this.dataset.color) {
			

			for (var j = 0; j < $cardColors.length; j++) {
				$cardColors[j].classList.remove('isActive');
			}

			$card.dataset.color = $this.dataset.color
			$this.classList.add('isActive');

		};

		if ($this.classList.contains('card_delete')) {
			
			$card.remove();
		
		};

		if ($this.classList.contains('card_edit')) {


			if ($cardContent.getAttribute('contenteditable') == 'false'){
				//muda atributo com setAttribute('parametro a mudar', 'valor')
				$cardContent.setAttribute('contenteditable', 'true');
				$cardContent.focus();
				$this.classList.add('isActive');

			} else {

				$cardContent.setAttribute('contenteditable', 'false');
				$cardContent.blur();
				$this.classList.remove('isActive');
			};
		
		};

	});
};

