$(function () {
  // 加载header
  $('header').load("header.html", "", function (response, status, request) {
    $(this).html(response);
  });


  //加载footer
  $('footer').load("footer.html", "", function (response, status, request) {
    $(this).html(response);
  });

  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top >= 100) {
      $('.header').addClass('bgf')
    } else {
      $('.header').removeClass('bgf')
    }
  });
 
  
 
})
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

$(document).ready(function () {
  $("header").delegate(".hamburger", "click", function () {
    $(this).toggleClass("is-active");
    $('.nav-mobile').toggleClass('active')
  });
})
