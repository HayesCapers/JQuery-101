$(document).ready(function(){
	$('form').submit(function(event){
		$('.error').each(function(){
			$(this).html('');
		})
		event.preventDefault();
		console.log("user submitted the form!");
		$('input').each(function(){
			var currentInputTagClass = $(this).attr('id');
			console.log(currentInputTagClass);
			// target the corresponding error div for this input
			var errorDivClass = '.' + currentInputTagClass + '-error';
			console.log(errorDivClass);
			// input tags have a val
			if ($(this).val() == ''){
				// console.log("user did not enter enough info");
				$(errorDivClass).html('Field cannot be empty');
			}
		});

		var password = ($('#password1').val());
		var password2 = ($('#password2').val());
		if (password != password2){
			$('.password1-error').html('Your passwords do not match');
			$('.password2-error').html('Your passwords do not match');
		}
		// force user to have number in their password
		// keep track of number found as bool
		var numberFound = false
		for (let i = 0; i < password.length; i++){
			if (isNaN(Number(password[i]))){
				// this is not a number
				continue;
			}else{
				numberFound = true;
			}
		}
		if (!numberFound){
			$('.password1-error').html('Your password must contain a number');
		}

	});
});