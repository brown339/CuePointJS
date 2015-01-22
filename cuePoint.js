// JavaScript Document

(function ( $ ) {
	$.fn.cuePoint = function (div, options) {
		// defaults			
		var settings = $.extend ({
		}, options);
		
		// Append divs for time, text
		var points = options["points"];
		for (var i = 0; i < points.length; i++) {
			var time = points[i]["time"];
			var text = points[i]["text"];
			var playback = (points[i]["playback"]) ? points[i]["playback"] : "play";
			$(div).append("<div data-time='"+time+"' data-text='"+text+"' data-playback='"+playback+"'>(" + points[i]["time"] + ") " + points[i]["text"] + "</div>");
		}
		
		// Click functionality
		var video = $(this).get(0);
		$(div + " div").click(function () {
			// Jump to cue point
			video.currentTime = timeToSeconds ($(this).data("time"));	
			
			// Play/pause
			if ($(this).data("playback") === "play") {
				video.play();
			}
			
			else if ($(this).data("playback") === "pause") {
				video.pause();
			}
			
			// Default
			else {
				video.play();
			}
			
			// Active css
			$(this).addClass(options.active);
			$(this).removeClass(options.inactive);
		});
		
		// Hover 
		$(div + " div").hover(
			function () {$(this).addClass("__hovered");}, 			// ON
			function () {$(this).removeClass("__hovered");}			// OFF
		);
		
		// Highlight current card 
		video.ontimeupdate = function () {
			$(div + " div").not (".__hovered").each (function () {
				if (video.currentTime >= timeToSeconds ($(this).data("time")) ) {
					$(this).addClass (options.active);
					$(this).removeClass (options.inactive);
				} else {
					$(this).addClass (options.inactive);	
					$(this).removeClass (options.active);
				}
			});
		} 
	}
}(jQuery));


// Convert time into seconds. eg: 0:04 => 4.000
function timeToSeconds (time) {
	// Break into array by ':'
	time = time.split (":");
	
	var seconds = 0;
	
	// Add seconds
	seconds += parseInt (time[time.length-1]);
			
	// Multiply minutes
	seconds += parseInt (time[time.length-2] * 60);
	
	// Multiply hours if they exist
	if (time[time.length-3] !== undefined) {
		seconds += parseInt (time[time.length-3] * 3600);
	}
	
	return seconds;
}