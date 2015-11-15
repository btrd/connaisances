


getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startCompass = function(elCompass, pts) {

  elCompass.empty().append('<div class="compass"><div class="compass-inner"><div class="main-arrow"><div class="arrow-up"></div><div class="compass-metre"></div></div></div></div>');

  var m = $(elCompass).find('.compass-metre');
  
 
  var count = 10;
  var processFn = function(previousX) {

    if ( previousX == undefined ) {
      previousX = 500;
    }
    var x = getRandomInt(0, previousX);
    
    count--;
    if (count == 0 || x == 0 ) {
      elCompass.empty().append('<i class="glyphicon glyphicon-ok"></i><div class="compass-point">+'+pts+'</div>');
    } else {
      m.empty().append(x+'m');
      setTimeout(function() {
        processFn(x);
      }, 500);
    }
  };
  
  processFn();
};


$(document.body).ready(function() {
  

  $('#index-list tr').on('click', function(e) {

    //
    if ( $(e.currentTarget).data('id') == 'eura' ) {
      $('.main-container-detail[data-id="eura"]').show();
      $('.main-container-detail[data-id="omnia"]').hide();

      startCompass($('.main-container-detail[data-id="eura"]').find('.compass'), 1000);

    } else if ( $(e.currentTarget).data('id') == 'omnia' ) {
      $('.main-container-detail[data-id="omnia"]').show();
      $('.main-container-detail[data-id="eura"]').hide();

      startCompass($('.main-container-detail[data-id="omnia"]').find('.compass'), 2000);

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

