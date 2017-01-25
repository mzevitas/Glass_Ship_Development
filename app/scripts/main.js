(function() {

    var app = angular.module('glassShipDevelopment', ['ngRoute'])

    .config(function($routeProvider) {


        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: ''
        });
        $routeProvider.when('/about-us', {
            templateUrl: 'views/about.html',
            controller: ''
        });
        $routeProvider.when('/contact-us', {
            templateUrl: 'views/contact.html',
            controller: ''
        });
        $routeProvider.when('/our-services', {
            templateUrl: 'views/services.html',
            controller: ''
        });
        $routeProvider.when('/why-glass-ship-development', {
            templateUrl: 'views/whyus.html',
            controller: ''
        });
        $routeProvider.when('/team', {
            templateUrl: 'views/team.html',
            controller: ''
        });
        
    });




}());






$(document).ready(function(){       
$('#toggle, nav a').click(function() {
   $('#toggle, nav a').toggleClass('active');
   $('#overlay').toggleClass('open');
  });

            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 210) {
                    $("header").css({
                    	'transition': '1s ease',
                    	'background-color': 'hsla(206, 64%, 98%, 0.9)',
                    	'border-bottom': '.5px ridge hsla(209, 49%, 68%, 1)',
                    	'height': '70px',

                    });
                    $("header img").css({
                    	'width': '200px',
                    	'transition': '1s ease',
                    	'padding-top': '5px'
                    });
                    $(".button_container").css({
                    	'width': '30px',
                    	'height': '22px',
                    	'transition': '1s ease',
                    	'margin-top': '-10px'
                    });


                } else {
                    $("header").css({
                    	'background-color': 'transparent',
                    	'border-bottom': 'none'
                    });
                    $("header img").css({
                    	'width': '300px',
                    	'transition': '.5s ease'
                    });
                    $(".button_container").css({
                    	'width': '35px',
                    	'height': '27px',
                    	'transition': '.5s ease',
                    	// 'padding-top': '5px'
                    });
                }
            });
        });
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



