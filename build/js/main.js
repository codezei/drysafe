(function () {
	'use strict';

	function reviews () {
	  var reviewsSwiper = new Swiper(".reviews-swiper", {
	    slidesPerView: 1,
	    spaceBetween: 16,
	    loop: true,
	    breakpoints: {
	      768: {
	        slidesPerView: 2
	      },
	      1200: {
	        slidesPerView: 3
	      },
	      1540: {
	        slidesPerView: 4,
	        spaceBetween: 24
	      }
	    },
	    navigation: {
	      nextEl: ".swiper-button-next",
	      prevEl: ".swiper-button-prev"
	    }
	  });
	}

	function accordion () {
	  var accordions = document.querySelectorAll('.accordion');

	  var _loop = function _loop(a) {
	    var items = accordions[a].querySelectorAll('.accordion-item');
	    var activeItem = accordions[a].querySelector('.accordion-item.active');

	    for (var i = 0; i < items.length; i++) {
	      items[i].addEventListener('click', function (e) {
	        var button = e.currentTarget.querySelector('.accordion-item__btn');

	        if (e.currentTarget !== activeItem && !!activeItem) {
	          activeItem.classList.remove('active');
	          button.setAttribute('aria-expanded', false);
	        }

	        if (e.currentTarget.classList.contains('active')) {
	          e.currentTarget.classList.remove('active');
	          button.setAttribute('aria-expanded', false);
	        } else {
	          e.currentTarget.classList.add('active');
	          button.setAttribute('aria-expanded', true);
	          activeItem = e.currentTarget;
	        }
	      });
	    }
	  };

	  for (var a = 0; a < accordions.length; a++) {
	    _loop(a);
	  }
	}

	function history () {
	  var video = document.querySelector(".video");
	  var play = document.querySelector(".video__play");
	  var videoId = video.dataset.id;
	  play.addEventListener("click", function (e) {
	    video.innerHTML = "\n    <iframe\n      src=\"https://www.youtube.com/embed/".concat(videoId, "?autoplay=1&rel=0\"\n      allow=\"autoplay; encrypted-media\"\n      allowfullscreen\n      loading=\"lazy\"\n    ></iframe>\n  ");
	  });
	}

	function gallery () {
	  var gallerySwiper = new Swiper(".gallery-swiper", {
	    slidesPerView: 1,
	    spaceBetween: 16,
	    loop: true,
	    navigation: {
	      nextEl: ".swiper-button-next",
	      prevEl: ".swiper-button-prev"
	    }
	  });
	}

	document.addEventListener('DOMContentLoaded', function () {
	  // header()
	  reviews();
	  accordion();
	  history();
	  gallery(); // AOS.init({
	  // 	offset: 80,
	  // 	duration: 200,
	  // 	easing: 'ease-in',
	  // 	once: true,
	  // });
	});

}());
