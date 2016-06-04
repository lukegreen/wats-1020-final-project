$(document).ready(function(){

  //Architect details event listener
  
  $('.view-details').on('click', function(event){
    var targetElement = event.target;
    var container = targetElement.parentElement.parentElement;
    $(container).find('.details').each(function (index, el){
      if($(el).is(':visible')) {
        $(el).fadeOut();
        targetElement.innerHTML = "View Details";
      } else {
        $(el).fadeIn();
        targetElement.innerHTML = "Hide Details";
      }
    });
  });
  

  //Featurette image scroll-triggered fadeIn
  //utilizing Waypoints plug-in: http://imakewebthings.com/waypoints/
  
  var waypoints = $('#waypoint-one').waypoint({
  handler: function() {
    console.log("success!");
    $('#featurette-img-one').fadeIn(3000);
  },
    offset: '25%'
});
  
   var waypoints2 = $('#waypoint-two').waypoint({
  handler: function() {
    console.log("success!");
    $('#featurette-img-two').fadeIn(3000);
  },
    offset: '25%'
});
  
   var waypoints3 = $('#waypoint-three').waypoint({
  handler: function() {
    console.log("success!");
    $('#featurette-img-three').fadeIn(3000);
  },
    offset: '10%'
});
  
 
  
  
});