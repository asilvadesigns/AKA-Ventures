/*
 *utils
 */
(function() {
  var throttle = function(type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function() {
      if (running) { return; }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();

/*
 *scrollspy
 */
var spy = new ScrollSpy('#js-scrollspy', {
  nav: '.js-scrollspy-nav .nav__link',
  className: 'is-inview'
});

/*
 *swiper slider
 */
var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  autoplay: 3500,
  loop: true,
  grabCursor: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});



/*
 * mobile menu
 */
var MobileMenu = (function() {
  var mobileMenuToggle = document.querySelector('#mobileMenuToggle');
  var mobileMenuLinks  = document.querySelectorAll('.js-nav__mobile-menu__menu .nav__link');
  var mobileMenuParent = document.querySelector('.nav__mobile-menu');

  function Init() {
    if (!mobileMenuToggle) {
      return;
    }

    _AddEventListeners();
  }

  function _AddEventListeners() {
    mobileMenuToggle.addEventListener('click', _ToggleState);
    for (var i = 0; i < mobileMenuLinks.length; i++ ) {
      mobileMenuLinks[i].addEventListener('click', _ToggleMobileState);
    }
  }

  function _ToggleState() {
    mobileMenuParent.classList.toggle('is-open');
  }

  function _ToggleMobileState() {
    _ToggleState();
  }

  return {
    init: Init
  }

})();
MobileMenu.init();

/*
 * google map dynamic height
 */
var GoogleMapHeight = (function() {
  var googleMapHeightRef = document.querySelector('.js-google-map__height');
  var googleMapIframe = document.querySelector('.js-google-map__iframe');

  function Init() {
    _SetHeight();
    window.addEventListener("optimizedResize", _SetHeight);
  }


  function _SetHeight() {
    if (window.innerWidth > 960) {
      googleMapIframe.style.height = parseInt(googleMapHeightRef.clientHeight) + "px";
    } else {
      googleMapIframe.style.height = "500px";
    }
  }

  return {
    init: Init
  }

})();
GoogleMapHeight.init();
