 /*
|--------------------------------------------------------------------------
| APP START
|--------------------------------------------------------------------------
*/
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



 /*
|--------------------------------------------------------------------------
| GLOBAL VARS
|--------------------------------------------------------------------------
*/

var ajaxUrl = 'https://www.hotcountrytv.com/wp/wp-content/themes/hot-country-tv/app.php';
var paymentUrl = 'https://www.hotcountrytv.com/wp/wp-content/themes/hot-country-tv/app-payment.php';
var adminAjaxUrl = 'https://www.hotcountrytv.com/wp/wp-admin/admin-ajax.php';



 /*
|--------------------------------------------------------------------------
| GLOBAL FUNCTIONS
|--------------------------------------------------------------------------
*/

function setVideoHeight(){

        $('.video-container, .video-frame').each( function(){
            $( this ).height(  Math.ceil( $( this ).width() * 0.56 ) );
        })  

        
        /*$('section.related .item').each( function(){
            $( this ).height(  Math.ceil( $( this ).width() * 0.56 ) );
        })*/    
}
    

function GetURLParameter( sParam ){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
}


function initiateSwiper(){

    var advertSwiper = new Swiper ('.banner-adverts .swiper-container', {
        pagination: false,   
        loop: true,
        speed: 1000,
        autoplay: 4000,
        preventClicks: false,
        preventClicksPropagation: false,
        autoplayDisableOnInteraction: false
    });  

}



$( document ).ready( function(){

    /*
    |--------------------------------------------------------------------------
    | SHIFTER MOBILE MENU
    |--------------------------------------------------------------------------
    */

    $.shifter({
        maxWidth: Infinity
    });


    /*
    |--------------------------------------------------------------------------
    | BACK BUTTON LINKS
    |--------------------------------------------------------------------------
    */

    $('.back-button').on('click', function( e ){
        e.preventDefault();
        window.history.back();
    });

    /*
    |--------------------------------------------------------------------------
    | LOAD ADVERTS
    |--------------------------------------------------------------------------
    */

    $.ajax({
          type: "GET",
          url: ajaxUrl,
          data: {type: 'banner-adverts'},
          success: function (result) {
              $('section.banner-adverts .swiper-wrapper').html( result );
              initiateSwiper();
          }
    });


    /*
    |--------------------------------------------------------------------------
    | SUBMIT SEARCH
    |--------------------------------------------------------------------------
    */

    $('.mobile-search form').on('submit', function( e ) {

        e.preventDefault();
        window.location.replace('./search.html?s=' + $('.search-field').val() )
    });
});


$( window ).load( function(){ setVideoHeight(); });
$( window ).resize(function(){ setVideoHeight(); });

