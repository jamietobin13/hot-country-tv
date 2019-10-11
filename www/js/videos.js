$( document ).ready( function(){
	

    /*
    |--------------------------------------------------------------------------
    | PAGE CONTENT
    |--------------------------------------------------------------------------
    */

    var paged = 1;
    if( $('body').hasClass('page-videos')){

		 $('.spinner').fadeIn(200);
		 $.ajax({
			  type: "GET",
			  url: ajaxUrl,
			  data: {type: 'page-videos'},
			  success: function (result) {
				  $('.spinner').fadeOut(200);
				  $('section.main').html( result );
				  setVideoHeight();
			  }
		 });
    }
	

    $(document).on('click', '.button-link-prev', function( e ){

		e.preventDefault();
		$(window).scrollTop(0);

		if( paged <= 1 ){ paged = 1 }
		else{ 
			paged = paged - 1 

			$('.spinner').fadeIn(200);
			 $.ajax({
				  type: "GET",
				  url: ajaxUrl,
				  data: {type: 'page-videos', paged: paged},
				  success: function (result) {
					  $('.spinner').fadeOut(200);
					  if( result != 'empty'){
					  	$('section.main').html( result );
					  	setVideoHeight();
					  }
				  }
			 });

		}
	});

	$(document).on('click', '.button-link-next', function( e ){

		e.preventDefault();
		$(window).scrollTop(0);
		paged = paged + 1;

		$('.spinner').fadeIn(200);
		 $.ajax({
			  type: "GET",
			  url: ajaxUrl,
			  data: {type: 'page-videos', paged: paged},
			  success: function (result) {
				  $('.spinner').fadeOut(200);
				  
				   if( result != 'empty'){
				  	$('section.main').html( result );
				  	setVideoHeight();
				  }
			  }
		 });

		
	});






})
