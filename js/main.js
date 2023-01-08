$(".upcoming-events-slide").slick({
    dots: true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    speed: 2500,
});
function toggleBurger(i) {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const nav = document.querySelector(".nav-menu");
    nav.classList.toggle("open");
    i.classList.toggle("is-active");
    html.classList.toggle("no-scroll");
    body.classList.toggle("no-scroll");
  }