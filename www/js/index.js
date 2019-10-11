$( document ).ready( function(){
	

    /*
    |--------------------------------------------------------------------------
    | PAGE CONTENT
    |--------------------------------------------------------------------------
    */

    if( $('body').hasClass('page-home')){

	   $('.spinner').fadeIn(200);
	   $.ajax({
			  type: "GET",
			  url: ajaxUrl,
			  data: {type: 'page-home', version: $('body').data('version') },
			  success: function (result) {
				  $('.spinner').fadeOut(200);
				  $('section.main').append( result );
				  setVideoHeight();
			  }
		});
    }
	



})

