$( document ).ready( function(){
	

    /*
    |--------------------------------------------------------------------------
    | PAGE CONTENT
    |--------------------------------------------------------------------------
    */

    var paged = 1;
    if( $('body').hasClass('page-search')){
		 $('.spinner').fadeIn(200);
		 $.ajax({
			  type: "GET",
			  url: ajaxUrl,
			  data: {type: 'page-search', s: decodeURI(GetURLParameter('s')) },
			  success: function (result) {
				  $('.spinner').fadeOut(200);
				  $('section.main').html( result );
				  setVideoHeight();
			  }
		 });
    }
	



})

