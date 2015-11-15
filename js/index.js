

$(document.body).ready(function() {
  

  $('#index-list tr').on('click', function(e) {

    //
    if ( $(e.currentTarget).data('id') == 'eura' ) {
      $('.main-container-detail[data-id="eura"]').show();
      $('.main-container-detail[data-id="omnia"]').hide();
    } else if ( $(e.currentTarget).data('id') == 'omnia' ) {
      $('.main-container-detail[data-id="omnia"]').show();
      $('.main-container-detail[data-id="eura"]').hide();
    } else {
      return null;
    }

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

