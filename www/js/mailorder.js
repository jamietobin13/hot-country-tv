$( document ).ready( function(){


    /*
    |--------------------------------------------------------------------------
    | PAGE CONTENT
    |--------------------------------------------------------------------------
    */

    var paged = 1;
    if( $('body').hasClass('page-mailorder')){

		 $('.spinner').fadeIn(200);
		 $.ajax({
			  type: "GET",
			  url: ajaxUrl,
			  data: {type: 'page-mailorder'},
			  success: function (result) {
				  $('.spinner').fadeOut(200);
				  $('section.main').html( result );
				  setVideoHeight();
			  }
		 });
    }

    /*
    |--------------------------------------------------------------------------
    | CURRENCY SELECT
    |--------------------------------------------------------------------------
    */

    $('body').on('change', '.currency-select', function(){

    	if( $( this ).val() == 'EUR' ) {

    		$('.product').each( function(){

    			var newPrice = $( this ).data('eur');
    			$( this ).children('form').children('.pp_currency').val('EUR');
    			$( this ).children('form').children('.pp_price').val( newPrice );
    			$( this ).children('.display-price').html('<strong>€' + newPrice + ' incl. p&amp;p</strong>');

    		})
    		
    	} 

    	if( $( this ).val() == 'GBP' ) {
    		
    		$('.product').each( function(){

    			var newPrice = $( this ).data('gbp');
    			$( this ).children('form').children('.pp_currency').val('GBP');
    			$( this ).children('form').children('.pp_price').val( newPrice );
    			$( this ).children('.display-price').html('<strong>£' + newPrice + ' incl. p&amp;p</strong>');

    		})

    	}

        if( $( this ).val() == 'USD' ) {
            
            $('.product').each( function(){

                var newPrice = $( this ).data('usd');
                $( this ).children('form').children('.pp_currency').val('USD');
                $( this ).children('form').children('.pp_price').val( newPrice );
                $( this ).children('.display-price').html('<strong>$' + newPrice + ' incl. p&amp;p</strong>');

            })

        }

    });


    /*
    |--------------------------------------------------------------------------
    | SUBMIT FORM 
    |--------------------------------------------------------------------------
    */


    $('body').on('submit', '.paypal-form', function( e ){

    	e.preventDefault(); 
    	window.open( paymentUrl + '?c=' + $(this).children('.pp_currency').val() + '&p=' + $(this).children('.pp_price').val() + '&i=' + $(this).children('.pp_item').val() + '&n=' + $(this).children('.pp_name').val() , '_system');

    });



});
