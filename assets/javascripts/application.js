// javascripts here

$( document ).ready(function() {

  // -----------------------------------------
  var isSlideLeadAreaOpen = false;
  console.log(isSlideLeadAreaOpen);


  // special case
  $('.js-legal-show').on('click', function () {
      $('.js-legal-item').show();
      var isSlideLeadAreaOpen = true;
      console.log('Open >> ' + isSlideLeadAreaOpen);
  });


  function slideToggle () {
    // toggles isSlideLeadAreaOpen (true or false) at each click
    isSlideLeadAreaOpen = !isSlideLeadAreaOpen;
    
    if (isSlideLeadAreaOpen){
      console.log('Close >> ' + isSlideLeadAreaOpen);
      $('.js-legal-item').hide();
      $('.js-form-area').hide();

    } else {
      console.log('Open >> ' + isSlideLeadAreaOpen);
      $('.js-legal-item').show();
       $('.js-form-area').show();
    }
  }


  // this should be the loop (show and hide)
  $('.js-minimize').on('click', function () {
    slideToggle();
  });

});