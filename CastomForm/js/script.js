jQuery(document).ready(function() {
	
	const form = $('.form')[0];
	const email = document.getElementById('email');
	const error = $('.error')[0];

	console.log(email.validity.typeMismatch)

	email.oninput = function() {
		if(email.validity.valid) {
			hideErrorMessage();
		} else {
			if (email.validity.valueMissing) {
				hideErrorMessage();
			}
		}
	};

	form.addEventListener('submit', function(event){

		if (!email.validity.valid) {
			showErrorMessage();
			event.preventDefault();
		} else {
			hideErrorMessage();
		}

	});

	function showErrorMessage() {

		if (email.validity.valueMissing) {
			error.textContent = 'Это поле обязательно для заполнения';
		} else if (email.validity.typeMismatch) {
			error.textContent = 'Адрес введен не корректно';
		}
		error.className = 'error active';
	}

	function hideErrorMessage() {
		error.textContent = '';
		error.className = 'error';
	}

});