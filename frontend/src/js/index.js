require.config({
	paths: {
		jquery: 		'/public/js/lib/jquery/jquery',
		jqueryCookie: 	'/public/js/lib/jquery/jquery.cookie',
		bootstrap: 		'/public/js/lib/bootstrap'
	},
	shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
});

require(['jquery', 'jqueryCookie', 'bootstrap'],
	function( $ ){

		var submit = $('#submit')[0]
		  , user = $('#user')[0]
		  , email = $('#email')[0]

		submit.onclick= function(){
		  $.cookie('user', user.value);
		  $.cookie('email', email.value);
		}

		$('select').on('change', function(){
			var str = 'url(\'' + ( this.value || $(this).children(0).val() )+ '\')';

			$('body').css('backgroundImage', str);

			if(/gif$/.test($('select').val())){
				$('body').removeClass('stretch')
			} else {
				$('body').addClass('stretch')
			}
		}).trigger('change')

	});

