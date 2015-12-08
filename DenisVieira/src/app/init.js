

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $(".dropdown-button").dropdown();
    $('.collapsible').collapsible({
  accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
});
  }); // end of document ready
})(jQuery); // end of jQuery name space

 $(document).ready(function(){
    $('ul.tabs').tabs();
    $(".dropdown-button").dropdown();
    $('.parallax').parallax();
    $('.collapsible').collapsible({
     accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   });
  });
