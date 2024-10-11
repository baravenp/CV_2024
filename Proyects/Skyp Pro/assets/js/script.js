$(document).ready(function() {
 
  $(".text-body-secondary").click(function() {
      
      var idBoton = $(this).attr("id");
      
      $("#detalles" + idBoton).toggle();
  });

  
  $(".btn-close").click(function() {
      
      $(this).closest(".detalles").hide();
  });
});
