$(document).ready(function() {
  $("#close-button").click(function() {
    $("#main-nav").removeClass("active");
    $(".title-text,body").removeClass("body-active");
    $("#nav-mask").removeClass("mask-active");
  });
  $("#open-button").click(function() {
    $("#main-nav").addClass("active");
    $(".title-text,body").addClass("body-active");
    $("#nav-mask").addClass("mask-active");
  });
  $("#nav-mask").click(function() {
    $("#main-nav").removeClass("active");
    $(".title-text,body").removeClass("body-active");
    $("#nav-mask").removeClass("mask-active");
  })
});
