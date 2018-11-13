// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.min
//= require responsiveslides.min
//= require rails-ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function () {
  
  // Toggles Hamburger Icon
    $('body').on('click', '.menu-handle', function(){
      $('nav ul').toggleClass('showing');

  });

  //Hides "x" button
    $('.nav-close').on('click', function(){
      $('nav ul').toggleClass('showing');

  });

//touch screen carousel
$(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 3 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -3 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});   


});

//stop auto-slide for video carousel
$(document).ready(function() {      
   $('.carousel').carousel('pause');
});

//slider slideshow
$(document).ready(function (){
  $(".rslides").responsiveSlides();
})

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  random: true,          // Boolean: Randomize the order of the slides, true or false
  pause: true,           // Boolean: Pause on hover, true or false
  pauseControls: true   // Boolean: Pause when hovering controls, true or false 
});