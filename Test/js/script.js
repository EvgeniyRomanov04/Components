jQuery(document).ready(function() {
	
	let btn = document.getElementsByTagName('button')[0];
	let backgr = document.getElementsByClassName('background_pay')[0];
	let close = document.getElementsByClassName('close')[0];

	function activePayment() {
		$('.pay').toggleClass('active');
	}

	btn.addEventListener('click', activePayment);
	backgr.addEventListener('click', activePayment);
	close.addEventListener('click', activePayment);

	let form = document.getElementById('form');
	let name = document.getElementById('name');
	let surname = document.getElementById('surname');
	let tel_number = document.getElementById('tel_number');
	let email = document.getElementById('email');

	const inputs = [{num: 0, input: 'name', error: 'name_error'},
		{num: 1, input: 'surname', error: 'surname_error'},
		{num: 2, input: 'tel_number', error: 'tel_number_error'},
		{num: 3, input: 'email', error: 'email_error'}]

	$.mask.definitions['9'] = false;
	$.mask.definitions['5'] = "[0-9]";
	$('#tel_number').mask("+7 (955) - 555 - 55 - 55", {placeholder:"*", autoclear: false, completed: function(){
    
		hideErrorMessage(2)

  	}});

	form.addEventListener('submit', function(event) {
		if(!name.validity.valid) {
			showErrorMessage(0);
			event.preventDefault();
		} else if (!surname.validity.valid) {
			showErrorMessage(1);
			event.preventDefault();
		} else if (!tel_number.validity.valid) {
			showErrorMessage(2);
			event.preventDefault();
		} else if (!email.validity.valid) {
			showErrorMessage(3);
			event.preventDefault();
		} else {

		}

	})

	function showErrorMessage(num) {
		
		let name_input = document.getElementById(inputs[num].input);
		let name_error = document.getElementsByClassName(inputs[num].error)[0];

		if (name_input.validity.valueMissing) {
			name_error.textContent = 'Это поле обязательно для заполнения';
		} else if (name_input.validity.typeMismatch) {
			name_error.textContent = 'Данные введены не корректно';
		}
		name_error.className = inputs[num].error + ' error active';
	};

	function hideErrorMessage(num) {
		
		let name_error = document.getElementsByClassName(inputs[num].error)[0];

		name_error.textContent = '';
		name_error.className = inputs[num].error + ' error';
	};

	name.oninput = function() {
		if(name.validity.valid) {
			hideErrorMessage(0);
		} else {
			if (name.validity.valueMissing) {
				hideErrorMessage(0);
			}
		}
	};

	surname.oninput = function() {
		if(surname.validity.valid) {
			hideErrorMessage(1);
		} else {
			if (surname.validity.valueMissing) {
				hideErrorMessage(1);
			}
		}
	};

	email.oninput = function() {
		if(email.validity.valid) {
			hideErrorMessage(3);
		} else {
			if (email.validity.valueMissing) {
				hideErrorMessage(3);
			}
		}
	};

});