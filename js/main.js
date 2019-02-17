function scrollTo(selector) {
  $('html, body').animate({
    scrollTop: $(selector).offset().top
  }, 1000);
}

$(function() {
  // Navs
  $('.nav a').click(function(e) {
    e.preventDefault();
    scrollTo($(this).attr('href'));
  });

  // Portfolio
  $('.filters a').click(function(event) {
    event.preventDefault();
    console.log('!');

    $(this)
      .addClass('active')
      .siblings().removeClass('active');

    // Some action here...
  });

  $('.grid .item').hover(function() {
    $(this).addClass('active');
  }, function() {
    $(this).removeClass('active');
  });

  // Sliders
  $('.preview-slider').slick({
    draggable: false,
    initialSlide: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    asNavFor: '.slider'
  });

  $('.slider').slick({
    dots: true,
    initialSlide: 1,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.preview-slider',
  });

  // Buttons
  $('.btn-up').click(function() {
    scrollTo('#main');
  });
  $('.get-started').click(function() {
    scrollTo('#services');
  });

});