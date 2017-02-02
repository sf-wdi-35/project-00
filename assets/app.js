//console.log('sanity check');
$(document).ready(function() {

  $(window).on('keypress', function(e) {
    if(e.keyCode === 13) {
      $( ".turtle" ).animate({ "left": "+=50px" }, "slow" );
    }
  });

  $(window).on('keypress', function(e) {
    if(e.keyCode === 32) {
      $( ".bunny" ).animate({ "left": "+=50px" }, "slow" );
    }
  });
  
})
