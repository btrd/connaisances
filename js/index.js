

$(document.body).ready(function() {
  

  $('#index-list tr').on('click', function(e) {
    // slide list
    $('.main-container-list').removeClass('slideIn');
    $('.main-container-list').addClass('slideOut');
    // show icon back
    $('.back-icon').show();
  });

  $('.back-icon').on('click', function(e) {
    // slide back
    $('.main-container-list').addClass('slideIn');
    $('.main-container-list').removeClass('slideOut');
    // show icon back
    $('.back-icon').hide();
  });

});

