(function () {
	'use strict';

	function header () {
	  var header = document.querySelector('.header');
	  var burger = document.querySelector('.js-burger');
	  if (!header) return;
	  burger.addEventListener('click', function (e) {
	    document.documentElement.classList.toggle('open-menu');
	    e.currentTarget.setAttribute('aria-expanded', !(e.currentTarget.getAttribute('aria-expanded') === 'true' ? true : false));
	  });
	  header.addEventListener('click', function (e) {
	    if (e.target.tagName === 'A') {
	      document.documentElement.classList.remove('open-menu');
	      burger.setAttribute('aria-expanded', !(burger.getAttribute('aria-expanded') === 'true' ? true : false));
	    }
	  });
	  var linkNav = document.querySelectorAll('[href^="#"]');
	  var headerHeight = 0; // let headerHeight = header.getBoundingClientRect().height

	  var V = 0.2;

	  for (var i = 0; i < linkNav.length; i++) {
	    linkNav[i].addEventListener('click', function (e) {
	      e.preventDefault();
	      var w = window.pageYOffset;
	      var hash = this.href.replace(/[^#]*(.*)/, '$1');
	      var tar = document.querySelector(hash);
	      var t = tar.getBoundingClientRect().top - headerHeight;
	      var start = null;
	      requestAnimationFrame(step);

	      function step(time) {
	        if (start === null) {
	          start = time;
	        }

	        var progress = time - start,
	            r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
	        window.scrollTo(0, r);

	        if (r != w + t) {
	          requestAnimationFrame(step);
	        } else {
	          location.hash = hash;
	        }
	      }

	      if (t > 1 || t < -1) {
	        requestAnimationFrame(step);
	      }
	    }); // gsap.to(".logo span", {
	    //     opacity: 0.3,
	    //     duration: 0.1,
	    //     repeat: 5,
	    //     yoyo: true,
	    //     ease: "power1.inOut",
	    //     onComplete: function() {
	    //         gsap.to(".logo span", { opacity: 1, duration: 0.5 });
	    //     }
	    // });
	  }
	}

	function reviews () {
	  var reviewsSwiper = new Swiper(".reviews-swiper", {
	    slidesPerView: 1,
	    spaceBetween: 16,
	    breakpoints: {
	      576: {
	        slidesPerView: 1.5
	      },
	      768: {
	        slidesPerView: 2
	      },
	      1200: {
	        slidesPerView: 3
	      },
	      1400: {
	        slidesPerView: 3.5,
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
	    navigation: {
	      nextEl: ".swiper-button-next",
	      prevEl: ".swiper-button-prev"
	    }
	  });
	}

	document.addEventListener('DOMContentLoaded', function () {
	  header();
	  reviews();
	  accordion();
	  history();
	  gallery();
	  AOS.init({
	    offset: 80,
	    duration: 200,
	    easing: 'ease-in',
	    once: true
	  });
	});

}());
