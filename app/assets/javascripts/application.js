// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {
	$('p.notice').fadeOut(5000);
	$('p.alert').fadeOut(5000);

	$(".wrapper nav ul#nav").children("li").on("mouseover", function(){
	  $(".wrapper nav ul#nav").children("li").addClass("current-menu-item");
	});

	$(".wrapper nav ul#nav").children("li").on("mouseout", function(){
	  $(".wrapper nav ul#nav").children("li").removeClass("current-menu-item");
	});

	$("#search").bind("click", function(){
	  	$(".form").addClass("shown");
	  
	});
});	