// =====
// modal
// =====
$(function() {
	$('a[rel*=leanModal]').leanModal({ top : 200, overlay : 0.6, closeButton: ".modal_close" });
});




// =====
// carousel
// =====

$(document).ready(function(){
	$('#slider').tinycarousel( { display: 4 } );
});



// =====
// edit page active states
// =====
$(function() {
	
	// effects
	$('input[name="photoEffect"]').click(function() {
		$('input[name="photoEffect"].active').removeClass('active');
		$(this).addClass('active');
	});
	
	// border
	$('input[name="borderColors"]').click(function() {
		$('input[name="borderColors"].active').removeClass('active');
		$(this).addClass('active');
	});
	
	// rolled canvas
	$('input[name="rolledCanvas"]').click(function() {
		$('input[name="rolledCanvas"].active').removeClass('active');
		$(this).addClass('active');
	});
	
	// fancy edges
	$('input[name="fancyEdges"]').click(function() {
		$('input[name="fancyEdges"].active').removeClass('active');
		$(this).addClass('active');
	});
	
	// canvas choice
	$('input[name="canvasChoice"]').click(function() {
		$('input[name="canvasChoice"].active').removeClass('active');
		$(this).addClass('active');
	});
});