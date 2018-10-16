$(function () {
	'use strict';
	var width = $(window).width();
	// to fade in on page load
	$("body").css("display", "none");
	$("body").fadeIn(800); 
	// to fade out before redirect
	$('a').click(function(e){
		redirect = $(this).attr('href');
		e.preventDefault();
		$('body').fadeOut(800, function(){
			document.location.href = redirect
		});
	});
	$('.bxslider').bxSlider({
		mode: 'fade',
		controls: false,
		captions: false
	});
	$('.arrow').click(function(){
		$(this).toggleClass('up');
		$(this).siblings('.slide-menu').slideToggle();
	});
	$('.accordion-title').click(function(){
		$(this).children().toggleClass('up down');
		$(this).siblings().slideToggle();
	});
	if ((width < 1024)) {
		$(".product-page section > .container").css({"padding-top": $(".product-page section > .container .h3").outerHeight() + 15});
	};
	// if ($("body").hasClass("product-page") && (width > 1023)) {
	if ($("body").hasClass("product-page")) {
		$('.xzoom, .xzoom-gallery').xzoom({
			zoomWidth: 400,
			title: false,
			tint: 'rgba(0, 0, 0, 0.25)',
			Xoffset: 20
		});
		var isTouchSupported = 'ontouchstart' in window;
		if (isTouchSupported) {
			$('.xzoom').each(function () {
				var xzoom = $(this).data('xzoom');
				xzoom.eventunbind();
			});
			$('.xzoom,').each(function () {
				var xzoom = $(this).data('xzoom');
				$(this).hammer().on("tap", function (event) {
					event.pageX = event.gesture.center.pageX;
					event.pageY = event.gesture.center.pageY;
					var s = 1,
						ls;
					xzoom.eventmove = function (element) {
						element.hammer().on('drag', function (event) {
							event.pageX = event.gesture.center.pageX;
							event.pageY = event.gesture.center.pageY;
							xzoom.movezoom(event);
							event.gesture.preventDefault();
						});
					}
					xzoom.eventleave = function (element) {
						element.hammer().on('tap', function (event) {
							xzoom.closezoom();
						});
					}
					xzoom.openzoom(event);
				});
			});
		} else {
			$('#xzoom-fancy').bind('click', function (event) {
				var xzoom = $(this).data('xzoom');
				xzoom.closezoom();
				$.fancybox.open(xzoom.gallery().cgallery, {
					padding: 0,
					helpers: {
						overlay: {
							locked: false
						}
					}
				});
				event.preventDefault();
			});
			$('#xzoom-magnific').bind('click', function (event) {
				var xzoom = $(this).data('xzoom');
				xzoom.closezoom();
				var gallery = xzoom.gallery().cgallery;
				var i, images = new Array();
				for (i in gallery) {
					images[i] = {
						src: gallery[i]
					};
				}
				$.magnificPopup.open({
					items: images,
					type: 'image',
					gallery: {
						enabled: true
					}
				});
				event.preventDefault();
			});
		}
	}
});
(function(d) {
	var config = {
		kitId: 'tpp3ihh',
		scriptTimeout: 3000,
		async: true
	},
	h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},
		config.scriptTimeout),
	tk=d.createElement("script"),
	f=false,
	s=d.getElementsByTagName("script")[0],
	a;
	h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';
	tk.async=true;tk.onload=tk.onreadystatechange=function(){
		a=this.readyState;
		if(f||a&&a!="complete"&&a!="loaded")
			return;
		f=true;
		clearTimeout(t);
		try{
			Typekit.load(config)
		}
		catch(e){}
	};
	s.parentNode.insertBefore(tk,s)
})(document);