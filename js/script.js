var checkClass = function() {
  
  // Remove Existing Hide 
  if ( $('img').hasClass('hide') ) {
    $('img').removeClass('hide'); 
  }
  
};

// Click Photography
$('#photo').click( function() {
  
  // Check Class
  checkClass();
  
  // Hide Other Stuff
  $('img:not(.photo)').toggleClass('hide');

});

// Click Illustration
$('#illus').click( function() {
  
      checkClass();
    $('img:not(.illus)').toggleClass('hide');
  
});

// Click Logo
$('#Digital').click( function() {
 
    checkClass();
    $('img:not(.Digital)').toggleClass('hide');
  
});

// Show All 
$('#all').click( function() {
  
  checkClass();
  
});
