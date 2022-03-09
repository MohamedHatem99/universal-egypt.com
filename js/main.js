new WOW().init();

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 30,
    rtl: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    mouseDrag: true,
    autoplayHoverPause: true,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: "URLHash",
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      800: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });

  $(".owl-carousel").each(function () {
    //Find each set of dots in this carousel
    $(this)
      .find(".owl-dot")
      .each(function (index) {
        //Add one to index so it starts from 1
        $(this).attr("aria-label", index + 1);
      });
  });
});

jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchstart", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchmove", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};
jQuery.event.special.wheel = {
  setup: function (_, ns, handle) {
    this.addEventListener("wheel", handle, { passive: true });
  },
};
jQuery.event.special.mousewheel = {
  setup: function (_, ns, handle) {
    this.addEventListener("mousewheel", handle, { passive: true });
  },
};
