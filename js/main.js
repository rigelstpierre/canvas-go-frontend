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
		var border = $('.addBorderColors').is(':visible'),
			rolled = $('.addRolledCanvas').is(':visible'),
			fancy = $('.addFancyEdges').is(':visible')
			if( border == true ) { var borderCost = 15.50 } else { var borderCost = 0.00 }
			if( rolled == true ) { var rolledCost = 10.00 } else { var rolledCost = 0.00 }
			if( fancy == true ) { var fancyCost = 5.50 } else { var fancyCost = 0.00 }
			
			total = parseFloat( borderCost + rolledCost + fancyCost ).toFixed(2)
			$('.total').text('$' + total)
	}
	
	// orientation
	$('input[name="photoOrientation"]').click(function() {
		$('input[name="photoOrientation"].active').removeClass('active');
		$(this).addClass('active');
	});
	
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
		
		calculateTotal()
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
		
		calculateTotal()
	});
	
	// canvas choice
	$('input[name="canvasChoice"]').click(function() {
		$('input[name="canvasChoice"].active').removeClass('active');
		$(this).addClass('active');
	});
});