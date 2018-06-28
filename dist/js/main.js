! function( j , w , d ) {

	j.app = j.app || {};

	"use strict";

	j.app.sponsor = {

		init: function() {

			j.app.sponsor.owlCarouselLoad();

		},

		owlCarouselLoad: function() {

			var object = j( '.sponsor-section .owl-carousel' );

			object.owlCarousel({
				
				items:3,
				loop:true,
				autoplay:true,
				smartSpeed:500,
				dots: false,
				responsive: {
					768: {
						items: 5
					}
				}

			});

		}

	}

}( jQuery , $( window ) , $( document ) );

! function( j , w , d ) {

	d.ready( function() {

		j.app.sponsor.init();

	});

}( jQuery , $( window ) , $( document ) );