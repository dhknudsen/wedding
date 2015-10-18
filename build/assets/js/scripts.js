/*!
 * bryllup
 * 
 * 
 * @author Daniel Harding Knudsen
 * @version 1.0.0
 * Copyright 2015. ISC licensed.
 */
$(document).ready(function() {
		
	
	var isChromeMobile = function isChromeMobile() {
		if (device.tablet() || device.mobile()) {
			if (window.navigator.userAgent.indexOf("Chrome") > 0 || window.navigator.userAgent.indexOf("CriOS") > 0){
				return 1;
			}
		}
	}
	
	var isIOS = function isIOS() {
		if (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0){
			return 1;
		}
	}
	
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			return 1;
		}
	}
	
	var isIE = function isIE() {
 		if (window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 1;
		}
	}
	
	var isIE11 = function isIE11() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 1;
		}
	}
	
	var isIE11desktop = function isIE11desktop() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
   		 	return 1;
		}
	}
	
	var isIE10 = function isIE10() {
 		if (window.navigator.userAgent.indexOf("MSIE 10.0") > 0) {
   		 	return 1;
		}
	}
	
	var isIE9 = function isIE9() {
 		if (window.navigator.userAgent.indexOf("MSIE 9.0") > 0) {
   		 	return 1;
		}
	}
	
	var isSafari = function isSafari() {
	 	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1) {
   		 	return 1;
		}
	}
		
	var fullscreen = function(){
		// var navheight = $('#nav-bar').height();
		// var fheight = $(window).height() - navheight;
		var fheight = $(window).height();
		$('.fullscreen').css("height",fheight);		
	}
	
	//Execute on load
	fullscreen();
		
	//Execute on window resize
	$(window).resize(function() {	
		fullscreen();	
	});
	
	// 03. HIDDEN ALL ANIMATION CLASS
	//==================================================================================
	// Waypoint will animate it later (04.5 Waypoint Animate CSS)
	if( !device.tablet() && !device.mobile() && !isIE9() ) {
			$('.animation').css({
				visibility: 'hidden'
			});	
	}
			
	// 04. PACE PRELOADER
	//==================================================================================
	Pace.on('done', function () {
		$('#preloader').hide();
	});
	
	Pace.on('hide', function () {
		
		// 04.1 Gallery - Masonry
		//------------------------------------------------------------------------------
		var $gallery = $('#masonry-gallery');
			
		if (device.tablet() || device.mobile()) {
			$gallery.masonry({
				columnWidth: ".grid-sizer",
				itemSelector: ".masonry-col",
				gutter: ".gutter-sizer",
				transitionDuration: 0,
			});
		}
		else
		{
			$gallery.masonry({
				columnWidth: ".grid-sizer",
				itemSelector: ".masonry-col",
				gutter: ".gutter-sizer",
				transitionDuration: "1s",
			});
		}
			
		
		// 04.2 Nav Header Position (Mobile)
		//------------------------------------------------------------------------------
		if (device.tablet() || device.mobile()) {
			if ($("#nav-bar").hasClass("sticky-nav")) {
				$("#nav-header").css("position","relative");
			}
		}
		
		// 04.3 Waypoint Sticky Navbar
		//------------------------------------------------------------------------------		
		if ($("#nav-bar").hasClass("sticky-nav")){
			
			// 04.3.1 Top Bar
			if ($("#nav-bar").hasClass("top-bar")){
			
	 			var nav_header_waypoint = $('#nav-header').waypoint(function(direction) {
  					
					if (direction === 'down') {
						if( !device.tablet() && !device.mobile() ) {
							$("#nav-bar").addClass("stick-it animated fadeInDownBig");
						}
						else
						{
							$("#nav-bar").addClass("stick-it");
						}
					}
					else {
						$("#nav-bar").removeClass("stick-it animated fadeInDownBig");
					}
				
				}, {
  					offset:'-100%'
				});
			}
			
			// 04.3.2 Bottom Bar
			else if  ($("#nav-bar").hasClass("bottom-bar")){
				
				var waypoints = $('#nav-header').waypoint(function(direction) {
  					
					if (direction === 'down') {
						if( !device.tablet() && !device.mobile() ) {
							$("#nav-bar").addClass("stick-it animated fadeInDownBig");
						}
						else
						{
							$("#nav-bar").addClass("stick-it");
						}
					}
					else if (direction === 'up') {
						$("#nav-bar").removeClass("stick-it animated fadeInDownBig");
					}
						
				}, {
  					offset:'-145px'
				});		
			}
			
		}
		
		// 04.4 Waypoint Sticky Menu Icon (Sidebar Version)
		//------------------------------------------------------------------------------
		
		var sticky_menuicon_waypoint = $('#menu-icon').waypoint(function(direction) {
			if (direction === 'down') {
				$('#sticky-menuicon').show();
			}
			else {
				$('#sticky-menuicon').hide();
			}
			
		}, {
  			offset:'-100%'
		})
			
			
		// 04.5 Waypoint Animate CSS
		//------------------------------------------------------------------------------
		if( !device.tablet() && !device.mobile() && !isIE9() ) {	
			$('.animation').each(function(){
        		var _this = this;
        		var animation_waypoint = new Waypoint({
            		element: _this,
            		handler: function (direction) {
						$(this.element).css({ visibility: 'visible' });
						$(this.element).addClass('animated');
            			},
            			offset: '90%'
        			});
        	});
			
		}		
		
		// 04.6 Stellar Parallax
		//------------------------------------------------------------------------------
	 	// removed !isIE9() && !isIE10() && !isSafari()
	 	if( !device.tablet() && !device.mobile() ) {
			$(".image-divider").css("background-attachment","fixed");
		 	$(window).stellar({
			 	horizontalScrolling: false,
		 	});
	 	}
	 		 
	}); // END of Pace on Hide
	
	
	// 05. PRELOADER HEART ANIMATION (IE10 / 11)
	//==================================================================================	
	if (isIE10() || isIE11()){
		$(".heart-animation").css("letter-spacing","normal");
	}
	
	// 05. IMAGE DIVIDER (Mobile / Tablet)
	//==================================================================================
	/*if (device.tablet() || device.mobile() || isIE9() || isIE10() ||isSafari()) {
		$(".image-divider").addClass("mobile");
	}*/
		
	// 06. BIND TOUCH FOR PHOTO ITEM (Mobile / Tablet)
	//==================================================================================
	$('.photo-item').bind('touchstart touchend', function(e) {
	});	
		
	// 07. COUNTDOWN
	//===================================================================================
	var theday = new Date();
	theday = new Date(2015, 7, 12);
	$('#countdown').countdown({until: theday, format: 'WDHMS'});
	$('#countdown').countdown($.countdown.regionalOptions['custom-label']); 
		 
	$('#date-countdown').countdown({until: theday, format: 'WDHMS'});
		 
	// 08. MOBILE MENU
	//==================================================================================
	$("#mobile-nav").click(function(e){
		e.preventDefault()
		$("#nav-menu").toggleClass("open");
	});
	
	// Hide Menu After Click It. Will be used on onepage version. 
	$("#nav-menu li a").click(function(){
		 if ($(this).attr("href") !== "#") {
			 $("#nav-menu").removeClass("open");
		 }
	});
	 	 
	// 09. DOUBLE TAP DROP DOWN MENU
	//==================================================================================
	if ($(window).width() > 991){
		$( '#nav-menu' ).doubleTapToGo();
	}	 

	// 10. OWL CAROUSEL
	//==================================================================================

	// 10.1 OWL CAROUSEL - GIFT REGISTRY
	//------------------------------------------------------------------------------
	if ($("#gift-registry").length){
    	$("#gift-registry").owlCarousel({
			items : 3, 
			autoPlay: 2000,
			stopOnHover: true,
			pagination: true,
		});
		
		if (device.tablet() || device.mobile()) {
			var owl_gift = $("#gift-registry").data('owlCarousel');
			owl_gift.stop()
		}
	}
 	
	// 10.2 OWL CAROUSEL - MORE EVENTS (ONEPAGE)
	//------------------------------------------------------------------------------
	if ($("#events-carousel").length){		
    	$("#events-carousel").owlCarousel({
			items : 2,
			itemsDesktopSmall: [979,2], 
			autoPlay: 2000,
			stopOnHover: true,
			pagination: true,
			navigation:false,
		});		
		
		if (device.tablet() || device.mobile()) {
			var owl_events = $("#events-carousel").data('owlCarousel');
			owl_events.stop()
		}	
	}
 	
	// 10.3 OWL CAROUSEL - REGISTRY LOGO (ONEPAGE)
	//------------------------------------------------------------------------------
	if ($("#registry-logo").length){		
    	$("#registry-logo").owlCarousel({
			items : 3, 
			autoPlay: 2000,
			stopOnHover: true,
			pagination: false,
			navigation: false,
		});
		
		if (device.tablet() || device.mobile()) {
			var owl_logo = $("#registry-logo").data('owlCarousel');
			owl_logo.stop()
		}
	}
		
		
	// 11. RSVP
	//==================================================================================
	if ($("#rsvpform").length){
		$("#rsvpform").ajaxrsvp();
	}
	
	// 11.1 Custom Checkbox
	//----------------------------------------------------------------------------------
	$(".ajax-checkbox .custom-option-icon").click(function(){
		$(this).toggleClass( "active-icon" );
	});

	// 11.2 Custom Radio
	//----------------------------------------------------------------------------------
	$(".ajax-radio .custom-option-icon").click(function(){
		if (!($(this).parent().hasClass("radio"))){
			$(this).siblings().removeClass( "active-icon" );
			$(this).addClass( "active-icon" );
		}
		else{
			$(this).parent().siblings().children(".custom-option-icon").removeClass( "active-icon" );
			$(this).addClass( "active-icon" );
		}
	});	 
	 
	// 12. SMOOTH SCROLL
	//=========================================================================
	$('a.smooth-scroll').smoothScroll({
		speed: 1000,
	});	 
	 
	$('.nav-smooth-scroll a').smoothScroll({
		speed: 1000,
		offset: -80,
	});	
	 
	// 13. MAGNIFIC POPUP
	//==================================================================================
	
	// 13.1 Magnific Zoom
	//----------------------------------------------------------------------------------
	$('.magnific-zoom').magnificPopup({
 		type: 'image',
		image: {
    		// options for image content type
    		titleSrc: 'title'
 		},
		//fixedContentPos:true,
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened
    		},
    		afterClose: function() {
      			// Will fire when popup is closed
    		}
  		},
	});
	
	// 13.2 Magnific Zoom Gallery
	//----------------------------------------------------------------------------------	
	$('.magnific-zoom-gallery').magnificPopup({
 		type: 'image',
		image: {
    		// options for image content type
    		titleSrc: 'title'
 		},
		gallery: {
         	 enabled:true
        },
		//fixedContentPos:true,
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened
    		},
    		afterClose: function() {
      			// Will fire when popup is closed
    		}
  		},
	});	 
	 
	// MAGNIFIC AJAX
	//==================================================================================
	$('.magnific-ajax').magnificPopup({
  		type: 'ajax',
		ajax: {
			settings: {cache:false} 
			// Ajax settings object that will extend default one - http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
			// For example:
			// settings: {cache:false, async:false}
		},
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened
    		},
    		afterClose: function() {
      			// Will fire when popup is closed
				
    		}
  		},
	});		
	 
	// 14. DISALBE TRANSITION (Mobile / Tablet)
	//==================================================================================
	if( device.tablet() || device.mobile() ) {
		if (!isIE11desktop()){
			// de-icon
			$(".de-icon, .de-icon i").css("transition","none");
		
			// Photo-item		 
			$(".photo-item img.hover-animation").css("transition","none");
			$(".photo-item .layer.hover-animation").css("transition","none"); 
		 }
	 }
	 
	 
	// 15. AUDIO
	//==================================================================================

	// 15.1 Reset Mute Control (Chrome and Safari Mobile)
	//----------------------------------------------------------------------------------
	//	Chrome and Safari IOS not cannot autoplay audio. 
	//	Default audio will reset to mute
	 if (isChromeMobile() || isIOS()){
		var audioElm = document.getElementById('audioID');	
		
		if (audioElm != null){
			audioElm.muted = true;
		 
			var mute_icon = $("#mute-audio").data("mute-icon");
			var unmute_icon = $("#mute-audio").data("unmute-icon");		
		
			$("#mute-audio").removeAttr('data-start').attr({ 'data-start': 'mute' });
			$("#mute-audio").removeAttr('data-mute-icon').attr({ 'data-mute-icon': unmute_icon });
			$("#mute-audio").removeAttr('data-unmute-icon').attr({ 'data-unmute-icon': mute_icon });
			$("#mute-audio i").removeClass();
			$("#mute-audio i").addClass(mute_icon);	
		}
	 }
	 
	 
	// 15.2 On toggle mute button
	//----------------------------------------------------------------------------------
	 $("#mute-audio").click(function(e){
		e.preventDefault();
		var audioElm = document.getElementById('audioID');		
		 
		var on_start = $(this).data("start");
		var mute_icon = $(this).data("mute-icon");
		var unmute_icon = $(this).data("unmute-icon");
		
		if (on_start == "unmute"){
			if ($("#mute-audio i").hasClass( unmute_icon )){
				$("#mute-audio i").removeClass( unmute_icon );
				$("#mute-audio i").addClass( mute_icon );
				if (isIOS()){
					//Because of IOS cannot mute by script, then change it to pause.				
					audioElm.pause();
				}
				else
				{
					audioElm.muted = true;
				}
			}
			else
			{
				$("#mute-audio i").removeClass( mute_icon );
				$("#mute-audio i").addClass( unmute_icon );
				audioElm.play();
				audioElm.muted = false;
			}
		}
		else if (on_start == "mute"){
			if ($("#mute-audio i").hasClass( mute_icon )){
				$("#mute-audio i").removeClass( mute_icon );
				$("#mute-audio i").addClass( unmute_icon );
				audioElm.play();
				audioElm.muted = false;
			}
			else
			{
				$("#mute-audio i").removeClass( unmute_icon );
				$("#mute-audio i").addClass( mute_icon );
				if (isIOS()){
					//Because of IOS cannot mute by script, then change it to pause.
					audioElm.pause();
				}
				else
				{
					audioElm.muted = true;
				}
			}
		}
	});
	
	
	// 16. VIDEO CONTROL
	//==================================================================================
	
	// 16.1 Hide Video Control (Mobile / Tablet)
	//----------------------------------------------------------------------------------
	if ((device.tablet() || device.mobile()) && !isIE11desktop()) {
		$(".hide-control-onmobile").addClass("mobile");
	}
	
	// 16.2 Play Pause Video
	//----------------------------------------------------------------------------------
	if( device.tablet() || device.mobile() ) {
		$(".slide-video-control").hide();
	}
	
	$("#play-pause").click(function(e){
		e.preventDefault();
		var video = $(".slide-video").data("vide").getVideoObject();
		var on_start = $(this).data("start");
		var pause_icon = $(this).data("pause-icon");
		var play_icon = $(this).data("play-icon");
		
		if (on_start == "play"){
			if ($("#play-pause i").hasClass( pause_icon )){
				$("#play-pause i").removeClass( pause_icon );
				$("#play-pause i").addClass( play_icon );
				video.pause();
			}
			else
			{
				$("#play-pause i").removeClass( play_icon );
				$("#play-pause i").addClass( pause_icon );
				video.play();
			}
		}
		else if ($(this).data("start") == "pause"){
			if ($("#play-pause i").hasClass( play_icon )){
				$("#play-pause i").removeClass( play_icon );
				$("#play-pause i").addClass( pause_icon );
				video.play();
			}
			else
			{
				$("#play-pause i").removeClass( pause_icon );
				$("#play-pause i").addClass( play_icon );
				video.pause();
			}
		}
		
		
	});
	
	$("#mute").click(function(e){
		e.preventDefault();
		var on_start = $(this).data("start");
		var mute_icon = $(this).data("mute-icon");
		var unmute_icon = $(this).data("unmute-icon");
		
		if (on_start == "unmute"){
			if ($("#mute i").hasClass( unmute_icon )){
				$("#mute i").removeClass( unmute_icon );
				$("#mute i").addClass( mute_icon );
				$(".slide-video video").prop('muted', true);
			}
			else
			{
				$("#mute i").removeClass( mute_icon );
				$("#mute i").addClass( unmute_icon );
				$(".slide-video video").prop('muted', false);
			}
		}
		else if (on_start == "mute"){
			if ($("#mute i").hasClass( mute_icon )){
				$("#mute i").removeClass( mute_icon );
				$("#mute i").addClass( unmute_icon );
				$(".slide-video video").prop('muted', false);
			}
			else
			{
				$("#mute i").removeClass( unmute_icon );
				$("#mute i").addClass( mute_icon );
				$(".slide-video video").prop('muted', true);
			}
		}
	});
	
});
	 
(function ( $ ) {

	'use strict';

	$.fn.ajaxrsvp = function( options ) {
		
		var defaults = {           
            messageWrapper: "#message",
			scrollAfterSubmit : true,			
        }
		
        var settings = $.extend( {},defaults, options );
		
		//GET FORM ID NAME
		var form_id = this.attr("id");
		
		//ON SUBMIT EVENT
		this.submit(function(event){
			
			//PREVENT DEFAULT SUBMIT
			event.preventDefault();				
			
			//GET ALL INPUT ELEMENT
			var ajax_input_element = $(this).find ( ".ajax-input" );
			/*console.log (ajax_input_item.get(0).id);*/
			
			//GET FORM ACTION URL
			var action_url = $(this).attr( 'action' );
			
			//DEFINE ARRAY VARIABLE FOR SAVE ALL INPUT ID
			var all_id = [];
			
			//DEFINE ARRAY VARIABLE FOR SAVE ALL ERR VALIDATION MESSAGE
			var all_err = [];
						
			//DEFINE OBJECT VARIABLE FOR SAVE ALL INPUT VALUE AND DATA-REQUIRED MESSAGE
			var post_data = {};			
			/*var post_data1 = { inputname: $('#inputname').val()};*/
			
						
					
			//LOOPING TO SAVE ALL INPUT VALUE, DATA-REQUIRED MESSAGE, AND ADD/REMOVE HAS-ERROR CLASS
			$.each(ajax_input_element , function(index, element){
				
				//DEBUG CONSOLE LOG
     			//console.log(index + ':' + element.id + ' ' +element.type+ ' ' + element.getAttribute("data-required")); 
				
				//SAVE INPUT ID TO all_id ARRAY
				all_id.push(element.id);
				
				//IF CHECKBOX INPUT
				if ($(this).hasClass("ajax-checkbox")){
					
					//DEFINE CHECKED CHECKBOX
					var checked_checkbox = $("#" + element.id + " input[type='checkbox']:checked");
									
					//VALIDATION, SAVE INPUT VALUE OR ERR VALUE, ADD REMOVE HAS-ERROR CLASS				
					if (checked_checkbox.length > 0 || !($(this).attr("data-required")) ) {		
						$(this).removeClass("has-error");
						post_data[element.id] = checked_checkbox.map(function(i, elem) { return $(this).val(); }).get().join( ", " );
						post_data[element.id + "_label"] = element.getAttribute("data-output-label");
       		 		}
					else 
					{
						$(this).addClass("has-error");
						all_err.push(element.getAttribute("data-required"));
										
					}
				}
				
				//ELSE IF RADIO INPUT
				else if ($(this).hasClass("ajax-radio")){
										
					//DEFINE RADIO NAME
					var radio_name = $("#" + element.id + " input").first().attr("name");
					
					//DEFINE CHECKED RADIO
					//var checked_radio = $("#" + element.id + " [type='radio']:checked");
					var checked_radio = $("#" + element.id + " [type='radio'][name='" + radio_name + "']:checked");
					
					//GET RADIO VALUE
					var radio_value = $("#" + element.id + " [type='radio'][name='" + radio_name + "']:checked").val();
					
					//SAVE RADIO VALUE & DATA-REQUIRED TO post_data
					if (radio_value == null)
					{
						radio_value = "";
					}
					
					//VALIDATION, SAVE INPUT VALUE OR ERR VALUE, ADD REMOVE HAS-ERROR CLASS		
					if (checked_radio.length > 0 || !($(this).attr("data-required"))) {
						$(this).removeClass("has-error");
						post_data[element.id] = radio_value;
						post_data[element.id + "_label"] = element.getAttribute("data-output-label");
       		 		}
					else
					{
						$(this).addClass("has-error");
						all_err.push(element.getAttribute("data-required"));
					
					}
				}
				
				//ELSE OTHER INPUT (TEXT, TEXTAREA, SELECT OPTIONS)
				else
				{
					//GET INPUT VALUE
					var this_input_value = $(this).val();
					
					//VALIDATION, SAVE INPUT VALUE OR ERR VALUE, ADD REMOVE HAS-ERROR CLASS			
					if ( this_input_value == null  || this_input_value.length == 0 ) {
						if ($(this).attr("data-required"))
						{
            				$(this).closest("div").addClass("has-error");	
							all_err.push(element.getAttribute("data-required"));
						}
       		 		}
					else
					{
						$(this).closest("div").removeClass("has-error");
						post_data[element.id] = this_input_value;		
						post_data[element.id + "_label"] = element.getAttribute("data-output-label");					
					}
				}
			});
			
			
			//SAVE ALL ID TO POST DATA	
			post_data["all_input_id"] = all_id;
			
			//SAVE ALL ERROR REQUIRED TO POST DATA	
			post_data["all_error_required"] = all_err;
			
			//DEBUG POST DATA	
			/*console.log ("json " + JSON.stringify(post_data));*/
			
			
			//START POST ACTION
            $.post(action_url, post_data, function(response){  
			
                //DEFINE OUTPUT MESSAGE VARIABLE
				var output = "";
				
				//IF RESPONSE ERROR
				if(response.type == 'error')
				{
					output = '<div class="bg-danger">'+response.text+'</div>';
				}
				//ELSE IF NO ERROR
				else
				{
				    output = '<div class="bg-success">'+response.text+'</div>';
					
					//RESET INPUT VALUE
					$("#" + form_id).find("input[type='text']").val('');
					$("#" + form_id).find("input[type='email']").val('');
					$("#" + form_id).find("textarea").val('');
					$("#" + form_id).find("input[type='radio']").prop("checked", false);
					$("#" + form_id).find($('.ajax-radio .btn')).removeClass('active-icon active');
					$("#" + form_id).find("input[type='checkbox']").attr('checked', false);
					$("#" + form_id).find($('.ajax-checkbox .btn')).removeClass('active-icon active');
					$("#" + form_id).find("select").prop('selectedIndex',0);
					$("#" + form_id).find("select[multiple]").prop('selectedIndex',-1);						
				}				
				
				//OUTPUT MESSAGE
				$(settings.messageWrapper).hide().html(output).slideDown();
				
				if (settings.scrollAfterSubmit){
					$('html, body').animate({
        				scrollTop: $(settings.messageWrapper).offset().top - 200
    				}, 1000);	
				}
				
            }, 'json');
		});
		
		
		
		
		
   	 	/*return this.each(function(){
		});*/
	};

}( jQuery ));
	'use strict';
	
	// MAIN SLIDER-FLEXSLIDER
	//==================================================================================
	$(window).load(function() {
		$('#main-slider.flexslider').flexslider(
		{
			animation : "fade",
			controlNav: false,
			directionNav: true,
			slideshowSpeed: 5000,  
			animationSpeed:1000,
			pauseOnAction: false,
			animationLoop: true, 
			pauseOnHover: true,			
		});
	});
	
	
	// Check FIREFOX 
	//----------------------------------------------------------------------------------
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			return 1;
		}
	}
	
	// Check IE11 (Not Windows Phone)
	///----------------------------------------------------------------------------------
	var isIE11desktop = function isIE11desktop() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
   		 	return 1;
		}
	}
	
	if (is_firefox() || isIE11desktop()){
		$('.flexslider .slides').addClass("css-fade");
	}
	
(function () {

	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});
	
	//INITIALIZE MAP
	function initialize() {
		
		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
        zoom: 12,		
        mapTypeId: google.maps.MapTypeId.ROADMAP,	
    		center: new google.maps.LatLng(56.1556615,10.1971365),
        panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
  			//scaleControl: false,
  			streetViewControl: true,
  			overviewMapControl: true,
        //rotateControl:true,
  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';
		
		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});
		
		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(-12.042559, -77.027426),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/
		
		
		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		var marker1 = new MarkerWithLabel({
       		position: new google.maps.LatLng(56.158084, 10.205038),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle medium-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="de-icon-bell-alt" style="color:#f0394d"></i></div>',
       		labelAnchor: new google.maps.Point(29, 20),
       		labelClass: "labels" // the CSS class for the label
     		});
    
		var marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(56.124913,10.2139903),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#6a6a6a"><i class="de-icon-food"></i></div>',
       		labelAnchor: new google.maps.Point(0, 0),
       		labelClass: "labels" // the CSS class for the label
     		});
			
		// var marker3 = new MarkerWithLabel({
  //      		position: new google.maps.LatLng(-12.045909, -77.031712),
  //      		draggable: false,
  //      		raiseOnDrag: false,
  //      		icon: ' ',
  //      		map: map, 
  //        	labelContent: '<div class="de-icon circle small-size" style="background-color:#67a80e"><i class="de-icon-food"></i></div>',
  //      		labelAnchor: new google.maps.Point(0, 0),
  //      		labelClass: "labels" // the CSS class for the label
  //    		});
			
		// var marker4 = new MarkerWithLabel({
  //      		position: new google.maps.LatLng(-12.046617, -77.030567	),
  //      		draggable: false,
  //      		raiseOnDrag: false,
  //      		icon: ' ',
  //      		map: map, 
  //        	labelContent: '<div class="de-icon circle small-size" style="background-color:#c89d1b"><i class="de-icon-coffee"></i></div>',
  //      		labelAnchor: new google.maps.Point(0, 0),
  //      		labelClass: "labels" // the CSS class for the label
  //    		});
			
		// var marker5 = new MarkerWithLabel({
  //      		position: new google.maps.LatLng(-12.045857, -77.032538),
  //      		draggable: false,
  //      		raiseOnDrag: false,
  //      		icon: ' ',
  //      		map: map, 
  //        	labelContent: '<div class="de-icon circle small-size" style="background-color:#f0394d"><i class="de-icon-basket"></i></div>',
  //      		labelAnchor: new google.maps.Point(0, 0),
  //      		labelClass: "labels" // the CSS class for the label
  //    		});	
		
		// var marker6 = new MarkerWithLabel({
  //      		position: new google.maps.LatLng(-12.046053, -77.028732),
  //      		draggable: false,
  //      		raiseOnDrag: false,
  //      		icon: ' ',
  //      		map: map, 
  //        	labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e"><i class="de-icon-paper-plane"></i></div>',
  //      		labelAnchor: new google.maps.Point(0, 0),
  //      		labelClass: "labels" // the CSS class for the label
  //    		});	
			
		// var marker7 = new MarkerWithLabel({
  //      		position: new google.maps.LatLng(-12.045363, -77.029939),
  //      		draggable: false,
  //      		raiseOnDrag: false,
  //      		icon: ' ',
  //      		map: map, 
  //        	labelContent: '<div class="de-icon circle small-size" style="background-color:#0d9a48"><i class="de-icon-tree"></i></div>',
  //      		labelAnchor: new google.maps.Point(0, 0),
  //      		labelClass: "labels" // the CSS class for the label
  //    		});			
    	//marker.setMap( map );
		
		
		//INFO WINDOWS
		//=======================================================================================
		var contentString = '<div>Vielsen i Vor Frue Kirke</div>';
		
		var contentString1 = '<div>Reception & Fest på Varna Palæet</div>';

 	 	var infowindow = new google.maps.InfoWindow({
      		content: contentString
  		});
		
		var infowindow1 = new google.maps.InfoWindow({
      		content: contentString1
  		});
		
		
		
		//OPEN INFO WINDOWS ON LOAD
		//=======================================================================================
  		// infowindow.open(map,marker1);
      // infowindow1.open(map,marker2);
		
		//ON CLICK MARKER, OPEN INFO WINDOWS
		//=======================================================================================
		google.maps.event.addListener(marker1, 'click', function() {
  			infowindow.open(map,marker1);
  		});

    google.maps.event.addListener(marker2, 'click', function() {
        infowindow1.open(map,marker2);
      });

		//ON MARKER CLICK EVENTS
		//=======================================================================================
  		/*google.maps.event.addListener(marker, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow.open(map,marker);
  		});
		
		google.maps.event.addListener(marker1, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow1.open(map,marker1);
  		});
		
		google.maps.event.addListener(marker2, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow1.open(map,marker2);
  		});*/
		
		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {  		
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);
	
}());
	
