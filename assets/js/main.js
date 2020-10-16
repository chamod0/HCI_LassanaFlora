/*global jQuery */
(function ($) {
	"use strict";

	// Sticky menu 
	var $window = $(window);
	$window.on('scroll', function() {    
		var scroll = $window.scrollTop();
		if (scroll < 300) {
			$(".sticky").removeClass("is-sticky");
		}else{
			$(".sticky").addClass("is-sticky");
		}
	});
	
	// language & currency toggler
	$(".currency-btn").on("click", function (event) {
		event.stopPropagation();
		event.preventDefault();
		$(".currency-list").slideToggle();
		$(".language-list").slideUp();
		$(".search-box").slideUp("slow");
		$(".cart-list").slideUp("slow");
	});

	$(".language-btn").on("click", function (event) {
		event.stopPropagation();
		event.preventDefault();
        $(".language-list").slideToggle();
        $(".currency-list").slideUp("slow");
		$(".search-box").slideUp("slow");
		$(".cart-list").slideUp("slow");
	});
	
	$(".currency-list, .language-list, .cart-list, .search-box").on("click", function (event) {
		event.stopPropagation();
	});
	
	$("body:not(.currency-btn)").on("click", function () {
		$(".currency-list").slideUp("slow");
	});

	$("body:not(.language-btn)").on("click", function () {
		$(".language-list").slideUp("slow");
	});

	// mini cart toggler
	$(".cart-toggler-icon").on("click", function (event) {
		event.stopPropagation();
		event.preventDefault();
		$(".cart-list").slideToggle();
		$(".language-list").slideUp("slow");
		$(".currency-list").slideUp("slow");
		$(".search-box").slideUp("slow");
	});

	// header-search
	$(".header-search-btn").on("click", function (event) {
		event.stopPropagation();
		event.preventDefault();
		$(".search-box").slideToggle();
		$(".language-list").slideUp("slow");
		$(".currency-list").slideUp("slow");
		$(".cart-list").slideUp("slow");
	});

	
	// responsive menu js
	jQuery('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});


	// Hero main slider active js
	$('.hero-slider-active').slick({
		autoplay: true,
		infinite: true,
		fade: true,
		dots: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
				}
			},
		]
	});

	// product carousel active js
	var pro_slider = $('.product-tab-carousel');
	pro_slider.slick({
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		infinite: true,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});

	/*------ Hero main slider active js ------*/
	$('.daily-deals-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: false,
		dots: false,
		arrows: true,
		appendArrows: ".deals-arrows",
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
		]
	});

	// testimonial carousel active
	$('.testimonial-carousel-active').slick({
		infinite: true,
		speed: 1000,
		fade: false,
		dots: false,
		arrows: true,
		adaptiveHeight: true,
		appendArrows: ".testimonial-arrows",
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
		]
	});

	// brand slider active js
	var brand = $('.brand-active');
	brand.slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		speed: 1000,
		pauseOnFocus: false,
		pauseOnHover: false,
		infinite: true,
		slidesToShow: 6,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					arrows: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});

	// blog carousel active
	var blog = $('.blog-carousel-active');
	blog.slick({
		infinite: true,
		arrows: true,
		autoplay: false,
		speed: 1000,
		pauseOnFocus: false,
		pauseOnHover: false,
		infinite: true,
		slidesToShow: 2,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});

	// product carousel active js
	var trend = $('.product-trend-carousel');
	trend.slick({
		arrows: true,
		autoplay: false,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		infinite: true,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});

	// prodct details slider active
	$('.product-large-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		asNavFor: '.pro-nav'
	});


	// product details slider nav active
	$('.pro-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.product-large-slider',
		centerMode: true,
		arrows: false,
		centerPadding: 0,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
		]
	});

	// product details vertical slider active
	$('.product-large-slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		asNavFor: '.pro-nav2'
	});


	// product details vertical slider nav active
	$('.pro-nav2').slick({
		autoplay: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.product-large-slider2',
		centerMode: true,
		arrows: false,
		vertical: true,
		centerPadding: 0,
		focusOnSelect: true,
	});

	// related post carousel
	var related = $('.related-post-carousel');
	related.slick({
		arrows: true,
		autoplay: false,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		infinite: true,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});

	// related post carousel
	var slider_box = $('.slider-box-active');
	slider_box.slick({
		arrows: true,
		autoplay: false,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		infinite: true,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});

	// blog gallery slider
	var gallery = $('.blog-gallery-slider');
	gallery.slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
		]
	});

	// magnificPopup img view 
	$('.img-popup').magnificPopup({
		type: 'image',
		gallery: {
		  enabled: true
		}
	});

	// sticky sidebar
	$('.is-stickyy').stickySidebar({
		topSpacing: 130,
		bottomSpacing: -20
	}); 

	// Sidebar Category
	var categoryChildren = $('.sidebar-category li .children');	
	categoryChildren.slideUp();
	categoryChildren.parents('li').addClass('has-children');
	$('.sidebar-category').on('click', 'li.has-children > a', function(e) {
	if ($(this).parent().hasClass('has-children')) {
		if ($(this).siblings('ul:visible').length > 0) $(this).siblings('ul').slideUp();
		else {
			$(this).parents('li').siblings('li').find('ul:visible').slideUp();
			$(this).siblings('ul').slideDown();
		}
	}
	if ($(this).attr('href') === '#') {
		e.preventDefault();
		return false;
	}
	});

	// quantity change js
	$('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
	$('.pro-qty').append('<span class="inc qtybtn">+</span>');
	$('.qtybtn').on('click', function() {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
		var newVal = parseFloat(oldValue) + 1;
		} else {
		// Don't allow decrementing below zero
		if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
			} else {
			newVal = 0;
		}
		}
		$button.parent().find('input').val(newVal);
	}); 


	// nice select active js
	$('select').niceSelect();


	// modal fix
	$('.modal').on('shown.bs.modal', function (e) {
		$('.pro-nav').resize();
	})


	// product view mode change js
	$('.product-view-mode a').on('click', function(e){
		e.preventDefault();
		var shopProductWrap = $('.shop-product-wrap');
		var viewMode = $(this).data('target');
		$('.product-view-mode a').removeClass('active');
		$(this).addClass('active');
		shopProductWrap.removeClass('grid list').addClass(viewMode);
	})

	// Countdown Activation
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text"></span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text"></span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text"></span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text"></span></div>'));
		});
	});

	// Checkout Page accordion
	$("#create_pwd").on("change", function () {
		$(".account-create").slideToggle("100");
	});

	$("#ship_to_different").on("change", function () {
		$(".ship-to-different").slideToggle("100");
	});

	
	// Payment Method Accordion
	$('input[name="paymentmethod"]').on('click', function () {
		var $value = $(this).attr('value');
		$('.payment-method-details').slideUp();
		$('[data-method="' + $value + '"]').slideDown();
	});

	// scroll to top
	$(window).on('scroll',function(){
		if($(this).scrollTop() > 600){
			$('.scroll-top').removeClass('not-visible');
		}
		else{
			$('.scroll-top').addClass('not-visible');
		}
	});
	$('.scroll-top').on('click',function (event){
		$('html,body').animate({
			scrollTop:0
		},1000);
	});

	// Mailchimp for dynamic newsletter
	$('#mc-form').ajaxChimp({
		language: 'en',
		callback: mailChimpResponse,
		// ADD YOUR MAILCHIMP URL BELOW HERE!
		url: 'https://company.us19.list-manage.com/subscribe/post?u=2f2631cacbe4767192d339ef2&amp;id=24db23e68a'

	});


	// mailchimp active js
	function mailChimpResponse(resp) {
		if (resp.result === 'success') {
			$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
			$('.mailchimp-error').fadeOut(400);

		} else if (resp.result === 'error') {
			$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
		}
	}

	// google map
	var map_id = $('#map_content');
	if (map_id.length > 0) {
		var $lat = map_id.data('lat'),
			$lng = map_id.data('lng'),
			$zoom = map_id.data('zoom'),
			$maptitle = map_id.data('maptitle'),
			$mapaddress = map_id.data('mapaddress'),
			mymap = L.map('map_content').setView([$lat, $lng], $zoom);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map',
			maxZoom: 18,
			id: 'mapbox.streets',
			scrollWheelZoom: false,
			accessToken: 'pk.eyJ1Ijoic2hha2lsYWhtbWVlZCIsImEiOiJjamk4anF6NDgwMGd5M3BwM2c4eHU5dmIzIn0.yBLGUAB8kV1I1yGGonxzzg'
		}).addTo(mymap);

		var marker = L.marker([$lat, $lng]).addTo(mymap);
		marker.bindPopup('<b>' + $maptitle + '</b><br>' + $mapaddress).openPopup();
		mymap.scrollWheelZoom.disable();
	}

	
	// DateCountdown active 1
    $(".DateCountdown").TimeCircles({
        direction: "Counter-clockwise",
        fg_width: 0.009,
        bg_width: 0,
        use_background: false,
        time: {
            Days: {
                text: "Days",
                color: "#fff"
            },
            Hours: {
                text: "Hours",
                color: "#fff"
            },
            Minutes: {
                text: "Mins",
                color: "#fff"
            },
            Seconds: {
                text: "Secs",
                color: "#fff"
            }
        }

    });


}(jQuery));