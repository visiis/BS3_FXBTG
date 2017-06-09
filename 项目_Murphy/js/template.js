


//Preloader


	$(window).load(function() {
		$("#logo-preload ").fadeOut();
		$("#preloader").delay(350).fadeOut("slow");
	}) 
	
    jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 100,
            time: 2000
        });
    });	
	
	
//Scrolling	
		
	$(document).ready(
	function() {  
		$("html").niceScroll();
		}
	);	


	
	
/*global $:false */
$(document).ready(function(){"use strict";
	$(".scroll").click(function(event){

		event.preventDefault();

		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top - 77;

		$('html, body').animate({scrollTop:target_top}, 1200);
	});
});


	

//IE9 RECOGNITION

function initializeHarmony() {

	"use strict";

	
	if (jQuery.browser.msie && jQuery.browser.version == 9) {

		jQuery('html').addClass('ie9');
	}
	
};	



	



//Animations



	jQuery('.animated').appear();

	jQuery(document.body).on('appear', '.bounceInRight', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-bounceInRight') });
	});	

	jQuery(document.body).on('appear', '.flip', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-flip') });
	});		

	jQuery(document.body).on('appear', '.slide', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-slide') });
	});	

	jQuery(document.body).on('appear', '.bounceInDown', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-bounceInDown') });
	});	
	
	jQuery(document.body).on('appear', '.bounceInLeft', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-bounceInLeft') });
	});
		
	jQuery(document.body).on('appear', '.bounceIn', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-bounceIn') });
	});
	
	jQuery(document.body).on('appear', '.puffIn', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-puffIn') });
	});
	
	jQuery(document.body).on('appear', '.holeIn', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('animated-holeIn') });
	});	
	
	jQuery(document.body).on('appear', '.bar-prc1', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('bar-prc1-an') });
	});	

	jQuery(document.body).on('appear', '.bar-prc2', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('bar-prc2-an') });
	});	
	
	jQuery(document.body).on('appear', '.bar-prc3', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('bar-prc3-an') });
	});	
	
	jQuery(document.body).on('appear', '.bar-prc4', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('bar-prc4-an') });
	});	
	
	jQuery(document.body).on('appear', '.bar-prc5', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('bar-prc5-an') });
	});	
	
	jQuery(document.body).on('appear', '.bar-prc6', function() {
		jQuery(this).each(function(){ jQuery(this).addClass('bar-prc6-an') });
	});	
	
	

	
//Home Carousel Slider	


$(document).ready(function() {
 
  var time = 7; // time in seconds
 
  var $progressBar,
      $bar, 
      $elem, 
      isPause, 
      tick,
      percentTime;
 

    //Init the carousel
    $("#home-slide").owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem : true,
      afterInit : progressBar,
      afterMove : moved,
      startDragging : pauseOnDragging
    });
 
    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }
 
    //create div#progressBar and div#bar then prepend to $("#owl-demo")
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }
 
    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    };
 
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item 
          $elem.trigger('owl.next')
        }
      }
    }
 
    //pause while dragging 
    function pauseOnDragging(){
      isPause = true;
    }
 
    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }
 
    //uncomment this to make pause on mouseover 
    // $elem.on('mouseover',function(){
    //   isPause = true;
    // })
    // $elem.on('mouseout',function(){
    //   isPause = false;
    // })
 
});

	

//Navigation	

$('ul.slimmenu').on('click',function(){
var width = $(window).width(); 
if ((width <= 800)){ 
    $(this).slideToggle(); 
}	
});		

		
$('ul.slimmenu').slimmenu(
{
    resizeWidth: '800',
    collapserTitle: '',
    easingEffect:'easeInOutQuint',
    animSpeed:'medium',
    indentChildren: true,
    childrenIndenter: '&raquo;'
});




//Team Carousel


$(document).ready(function() {
 
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({
    items : 3,
    itemsDesktop      : [1199,3],
    itemsDesktopSmall     : [979,3],
    itemsTablet       : [768,3],
    itemsMobile       : [479,2],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }
 
});


	
//Colorbox single project pop-up

$(document).ready(function(){
$(".iframe").colorbox({iframe:true, width:"100%", height:"100%"});	
});

$(".group1").colorbox({rel:'group1'});		


//Testimonial Carousel


$(document).ready(function() {
 
  var sync1 = $("#sync3");
  var sync2 = $("#sync4");
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({
    items : 3,
    itemsDesktop      : [1199,3],
    itemsDesktopSmall     : [979,3],
    itemsTablet       : [768,3],
    itemsMobile       : [479,2],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync4")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync4").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#sync4").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }
 
});



//Sliders	
	
	$(document).ready(function(){
		$('.slider').bxSlider({
			adaptiveHeight: true,
			touchEnabled: true,
			pager: false,
			controls: true,
			auto: false,
			slideMargin: 1
		});
	});	





//Parallax effects 
	
$(document).ready(function(){
		$('.parallax').parallax("50%", 0.5);
		$('.parallax1').parallax("50%", 0.5);
		$('.parallax2').parallax("50%", 0.5);
	});


//Portfolio filter 

/*global $:false */
	$(window).load(function () {
	    var $container = $('.portfolio-wrap');
	    var $filter = $('#filter');
	    // Initialize isotope
	    $container.isotope({
	        filter: '*',
	        layoutMode: 'fitRows',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear'
	        }
	    });
	    // Filter items when filter link is clicked
	    $filter.find('a').click(function () {
	        var selector = $(this).attr('data-filter');
	        $filter.find('a').removeClass('current');
	        $(this).addClass('current');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                animationDuration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });
		
		
		
		
	});


	
  jQuery(document).ready(function($){     
// Portfolio Isotope
	var container = $('.portfolio-wrap');	
	

		
		
		function splitColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = 1;
			
			
			if (winWidth > 1024) {
				columnNumb = 4;
			} else if (winWidth > 900) {
				columnNumb = 2;
			} else if (winWidth > 479) {
				columnNumb = 2;
			} else if (winWidth < 479) {
				columnNumb = 1;
			}
			
			return columnNumb;
		}		
		
		function setColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = splitColumns(), 
				postWidth = Math.floor(winWidth / columnNumb);
			
			container.find('.portfolio-box').each(function () { 
				$(this).css( { 
					width : postWidth + 'px' 
				});
			});
		}		
		
		function setProjects() { 
			setColumns();
			container.isotope('reLayout');
		}		
		
		container.imagesLoaded(function () { 
			setColumns();
		});
		
	
		$(window).bind('resize', function () { 
			setProjects();			
		});

});	
	
	
	
	
	


	
//Google map	
	
/*global $:false */
	

	
	
	
	
	










// Switcher CSS 
  $(document).ready(function() {
"use strict";
    $("#hide, #show").click(function () {
        if ($("#show").is(":visible")) {
           
            $("#show").animate({
                "margin-left": "-300px"
            }, 300, function () {
                $(this).hide();
            });
            
            $("#switch").animate({
                "margin-left": "0px"
            }, 300).show();
        } else {
            $("#switch").animate({
                "margin-left": "-300px"
            }, 300, function () {
                $(this).hide();
            });
            $("#show").show().animate({
                "margin-left": "0"
            }, 300);
        }
    });
                      
});







	
	