$(document).ready(function() {
//$(document).foundation();


  var heightNavbar = +($('.lok-navbar').height());
  $('body').find('.lok-header').css('height', ('calc(100vh - ' + heightNavbar + 'px)' ));
});
