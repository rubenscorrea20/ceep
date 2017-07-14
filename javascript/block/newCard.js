var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');
var $newCardAction = document.querySelector('.newCard-action');

$newCardContent.addEventListener('input', function(){

	var $error = document.querySelector('.error');

	if ($error != null) {
		$error.remove();
	};
})


$newCard.addEventListener('submit', function(event){

	event.preventDefault();

	if ($newCardContent.value == ''){
		

		if (document.querySelector('.error') == null) {
			var $error = document.createElement('span');
			$error.classList.add('error');
			$error.textContent = 'Por Favor, preencha o campo a cima!'
		
			$newCard.insertBefore($error, $newCardAction);
		};

	} else {
		var $wrapCard = document.querySelector('.wrap-card');
		var $card = document.querySelector('.card');
		var $copyCard = $card.cloneNode(true);
		console.log($copyCard.querySelector('.wrap-card-options'));
		$copyCard.querySelector('.card-content').textContent = $newCardContent.value;
		$wrapCard.insertBefore($copyCard, $card);
	};
});
