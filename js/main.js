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
$(document).ready(function () {
  $("header").delegate(".hamburger", "click", function () {
    $(this).toggleClass("is-active");
    $('.nav-mobile').toggleClass('active')
  });
})
