;$(function()
	{
		'use strict'

		var sidebar=$('.sidebar'),
			mask=$('.mask'),
			sidebar_trigger=$('#sidebar_trigger'),
			backBotton=$('.back-to-top');
		var snow;

			function showsidebar()
			{
				mask.fadeIn();
				sidebar.css('right',0);
			}

			function hidesidebar()
			{
				mask.fadeOut();
				sidebar.css('right',-sidebar.width());
			}
			
			function snowfallStart(){
				$(document).snowfall({flakeCount:20,maxSpeed:5});<!--开启特效-->
			}

			sidebar_trigger.on('click',showsidebar);
			mask.on('click',hidesidebar);

			backBotton.on('click',function()
			{
				$('html,body').animate({
					scrollTop:0
				},800)
			})	
			snowfallStart();	
			$(window).on('scroll',function(){
				if ($(window).scrollTop() > $(window).height()) {
					backBotton.fadeIn();

				}
				else
					backBotton.fadeOut();			
			})
			
			$(window).trigger('scroll');
	})
