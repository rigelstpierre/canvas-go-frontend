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

	// calculate total
	function calculateTotal() {
		var borderCost = parseFloat( $('.addBorderColors.calc').children('.cost').html().replace("$", "") );
			rolledCost = parseFloat( $('.addRolledCanvas.calc').children('.cost').html().replace("$", "") );
			edgesCost = parseFloat( $('.addFancyEdges.calc').children('.cost').html().replace("$", "") );
			total = borderCost.val(); + rolledCost.val(); + edgesCost.val();
			alert(total)
	}
	
	// effects
	$('input[name="photoEffect"]').click(function() {
		$('input[name="photoEffect"].active').removeClass('active');
		$(this).addClass('active');
	});
	
	// border
	$('input[name="borderColors"]').click(function() {
		$('input[name="borderColors"].active').removeClass('active');
		$(this).addClass('active');
		
		var check = $(this).attr('class');
			neg = 'none active'
		
		if ( check == neg ) {
			$('.addBorderColors').hide();
		} else {
			$('.addBorderColors').show().addClass('calc');
		}
		
		calculateTotal()
	});
	
	// rolled canvas
	$('input[name="rolledCanvas"]').click(function() {
		$('input[name="rolledCanvas"].active').removeClass('active');
		$(this).addClass('active');
		
		var check = $(this).attr('value');
			neg = 'no'
		
		if ( check == neg ) {
			$('.addRolledCanvas').hide();
		} else {
			$('.addRolledCanvas').show().addClass('calc');
		}
	});
	
	// fancy edges
	$('input[name="fancyEdges"]').click(function() {
		$('input[name="fancyEdges"].active').removeClass('active');
		$(this).addClass('active');
		
		var check = $(this).attr('value');
			neg = 'no'
		
		if ( check == neg ) {
			$('.addFancyEdges').hide();
		} else {
			$('.addFancyEdges').show().addClass('calc');
		}
	});
	
	// canvas choice
	$('input[name="canvasChoice"]').click(function() {
		$('input[name="canvasChoice"].active').removeClass('active');
		$(this).addClass('active');
	});
});