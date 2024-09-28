const d = new Date().toDateString();
document.getElementById("date").innerHTML = d;


$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});
