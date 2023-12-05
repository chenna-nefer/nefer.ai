let perPageValue = window.innerWidth < 450 ? 1 : 3; // Check for the breakpoint

$(".splide").each(function () {
  new Splide(this, {
    type: "loop",
    perPage: perPageValue,
    gap: "16px",
    autoplay: false,
    perMove: 1,
    interval: 3000,
    pauseOnHover: true,
    arrows: true,
    pagination: true,
    focus: "left",
    keyboard: true,
    drag: true,
    isNavigation: false,
    easing: "linear",
    speed: 350
  }).mount();
});

$(".prev-button").on("click", function () {
  $(this)
    .closest(".splide")
    .find(".splide__arrows .splide__arrow--prev")
    .click();
});

$(".next-button").on("click", function () {
  $(this)
    .closest(".splide")
    .find(".splide__arrows .splide__arrow--next")
    .click();
});
