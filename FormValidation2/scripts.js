
$(document).ready(function(){
	$('form').submit(function(event){
		$('.error').each(function(){
			$(this).html('');
		})
		event.preventDefault();
		console.log("submit!");
		$('input').each(function(){
			var currentInputTagId = $(this).attr('id');
			// console.log(currentInputTagId);
			var errorDivClass = '.' + currentInputTagId + '-error';
			if ($(this).val() == ''){
				$('.username-error').html('Required Field * missing');
			}
		})
	})
})