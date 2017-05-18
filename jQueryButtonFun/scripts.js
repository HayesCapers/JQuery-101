
// console.log(document);
// var dom = $(document);
// console.dir(dom);
// console.dir($);
// 1. wati until the document is fully loaded
// 2. Once the DOM is loaded, run the anon function
// 3. $ == jQuery


// $(document).ready(function(){
// 	These are all valid ways to select DOM elements in javascript nd JQuery
// 	var thing = document.getElementById('thing');
// 	var jQueryThing. = $('#thing')
// 	console.log(thing);
// 	console.log(getElementById('thing'));
// 	console.log($('#thing'));
// 	console.log(document.querySelector('#thing'));

// 	var body = document.getElementsByTagName('body')
// 	body = $('body');
// });


$(document).ready(function(){
	$('button').click(function(){
		// console.log(this);
		// console.log($(this).attr('toDo'));
		var whatToDo = $(this).attr('toDo');
		if (whatToDo == 'hide'){
			$('#thing').hide();
		}else if (whatToDo == 'show'){
			$('#thing').show();
		}else if (whatToDo == 'toggle'){
			$('#thing').toggle();
		}else if (whatToDo == 'html'){
			// if you dont pass html() arg it will simply return the inner html
			console.log($('#thing').html());
			// If you pass an arg to html() it will change the inner html
			$('#thing').html('<strong>I am new inner html</strong>');
		}else if (whatToDo == 'text'){
			$('#thing').text('<strong>This will change inner html exactly</strong>');
		}else if (whatToDo == 'prepend'){
			// get teh innerHTML and adds the new text to the beginning
			$('#thing').prepend('I am prepended inner HTML');
		}else if (whatToDo == 'append'){
			// get teh innerHTML and adds the new text to the end
			$('#thing').append('I am appended HTML');
		}else if (whatToDo == 'css'){
			// css method take an argument (an object), just like css
			// it will apply the css as a style attribute
			$('#thing').css({
				'color':'orange',
				'font-size':'10px',
				'background-color':'blue',
				'border-radius':'50%'
			});
		}else if (whatToDo == 'addClass'){
			$('#thing').addClass('crazy-css');
		}else if (whatToDo == 'animate'){
			$('#thing').animate({
				height: '400%',
				width: '400%',
				fontSize: '25px',
				opacity: '.4'
			}, "slow");
			$('#thing').animate({
				width: '100%',
				height: '100%',
				opacity: '1',
				fontSize: '12px',
			}, "slow")
		}else if (whatToDo == 'slideDown'){
			$('#thing').slideToggle();
		}else if (whatToDo == 'loop'){
			$('button').each(()=>{
				$(this).html("hahaha")
			})
		}
	});
});


