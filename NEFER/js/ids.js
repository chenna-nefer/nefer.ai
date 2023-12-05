var elms = document.getElementsByClassName("splide");
var splide;

$(".splide__track").css("overflow", "inherit");

for (var i = 0, len = elms.length; i < len; i++) {
  var slides = elms[i].getElementsByClassName("splide__slide");
  var loopSlides = slides.length >= 7; // set to true if there are at least 3 slides
  splide = new Splide(elms[i], {
    type: loopSlides ? "loop" : "slide", // if there are less than 3 slides, set the type to "slide" to prevent looping
    start: 0,
    perMove: 1,
    arrows: true, //loopSlides ? true : false,
    isNavigation: true, //loopSlides ? true : false,
    pagination: false,
    autoWidth: true,
    gap: "2rem",
    drag: true, //loopSlides ? true : false,
    breakpoints: {
      480: {
        gap: "1.25em"
        //drag: 'free',
        //type: 'slide'
      }
    }
  }).mount();

  var numSlides = splide.Components.Elements.slides.length;

  if (numSlides <= 3) {
    var xx = $(elms[i].closest(".component-wrapper"));
    console.log(xx);
    xx.find(".splide-arrow-wrapper").hide();
  }
}

$(".arrow.is--left").on("click", function () {
  $(this)
    .closest(".container")
    .find(".splide__arrows .splide__arrow--prev")
    .click();
});

$(".arrow.is--right").on("click", function () {
  $(this)
    .closest(".container")
    .find(".splide__arrows .splide__arrow--next")
    .click();
});

$(".menu_dropdown").on("mouseenter", function () {
  $("body").css("overflow", "hidden");
});
$(".menu_dropdown").on("mouseleave", function () {
  $("body").css("overflow", "auto");
});
