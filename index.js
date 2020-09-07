// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// Configure Slider
$(".carousel").carousel({
  interval: 5000,
  // pause: 'hover'
});

// Lightbox Init
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Video Play
$(function () {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto =
        videoSRC +
        "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal).on("click", function () {
      $(theModal + " iframe").attr("src", videoSRC);
    });
  });
});

// Button back to top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});

// Testimonials slider in About page
$(".slider").slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1,
});
