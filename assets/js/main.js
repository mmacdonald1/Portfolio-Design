$(document).ready(function() {
  $('#dropdown-menu').on('click', function(event) {
    $('.nav-items').toggleClass('hidden');
      
  });

  $('.nav-items').on('click', function(event){
      $('.nav-items').toggleClass('hidden');
  });
});