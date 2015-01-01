/**
 * Main JS file
 */
"use strict";

(function ($) {
	var breakpoint = 600;
	var delay = 1000;
	var isMobileDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

	function initEffects() {
		var browserWidth = $(window).width(); 
	    if (browserWidth > breakpoint) { 
	      addEffects();
	    } else {
	      removeEffects();
	    }
	}
	
	function addEffects() {
		/* Initialize hover effect on menu links */
	    $(".swan-menu-item-1").hover(function() {
	        if (!$(this).find("h2").hasClass("active")) {
	            circleHoverIn("swan-menu-item-1-circle", $('.swan-menu-item-1'));
	        }
	    }, function() {
	        if (!$(this).find("h2").hasClass("active")) {
	            circleHoverOut("swan-menu-item-1-circle", $('.swan-menu-item-1'));
	        }
	    });

	    $(".swan-menu-item-2").hover(function() {
	        if (!$(this).find("h2").hasClass("active")) {
	            circleHoverIn("swan-menu-item-2-circle", $('.swan-menu-item-2'));
	        }
	    }, function() {
	        if (!$(this).find("h2").hasClass("active")) {
	            circleHoverOut("swan-menu-item-2-circle", $('.swan-menu-item-2'));
	        }
	    });

		$(".swan-menu-item-3").hover(function() {
	        if (!$(this).find("h2").hasClass("active")) {
	            circleHoverIn("swan-menu-item-3-circle", $('.swan-menu-item-3'));
	        }
	    }, function() {
	        if (!$(this).find("h2").hasClass("active")) {
	            circleHoverOut("swan-menu-item-3-circle", $('.swan-menu-item-3'));
	        }
	    });

	    /* Initialize fade in and up effect when scrolling */
        $('.withAnimation .animated').appear(function () {
            var $this = $(this);
            $this.each(function () {
                $this.addClass('activate');
                $this.addClass($this.data('fx'));
            });
        }, {accX: 50, accY: -100});       
	}

	function removeEffects() {
		/* Remove the hover effect from menu links */
		$('.swan-menu-item-1, .swan-menu-item-2, .swan-menu-item-3').off('mouseenter mouseleave');

		/* Remove the fade in and up effect when scrolling */
		var $elems = $('.withAnimation .animated');
		$.removeData($elems);
		$elems.off('appear');
	}

	function circleHoverIn(circle, $menuItem) {
		circleIn(circle, 480);
	    $menuItem.find("h2,.swan-circle-inner").addClass("hovered");
	}

	function circleHoverOut(circle, $menuItem) {
		circleOut(circle, 480);
	    $menuItem.find("h2,.swan-circle-inner").removeClass("hovered");
	}

	function circleIn(b, a) {
	    var circleR = $("#" + b).find("circle").attr("r");
	    var circleScope = (Math.PI) * 2 * circleR;
	    $("#" + b).find("circle").attr("stroke-dasharray", circleScope);
	    $("#" + b).find("circle").animate({svgStrokeDashOffset: 0}, a);
	}

	function circleOut(b, a) {
	    var strokeW = $("#" + b).find("circle").attr("stroke-width");
	    var circleR = $("#" + b).find("circle").attr("r");
	    var circleScope = (Math.PI) * 2 * circleR;
	    $("#" + b).find("circle").attr("stroke-dasharray", circleScope);
	    $("#" + b).find("circle").stop().animate({svgStrokeDashOffset: circleScope}, a);
	}

    $(document).ready(function() {
		$("svg").find("circle").each(function() {
	        var strokeW = $(this).attr("stroke-width");
	        var circleR = $(this).attr("r");
	        var circleScope = (Math.PI) * 2 * circleR;
	        $(this).attr("stroke-dasharray", circleScope);
	        $(this).animate({svgStrokeDashOffset: circleScope}, 0);
	    });

    	if (!isMobileDevice) {
    		initEffects();
	    }
    });

    var t;
	$(window).resize(function() { 
		clearTimeout(t);
  		t = setTimeout(initEffects, delay);
	});

}(jQuery));