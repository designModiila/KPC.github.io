$(document).ready(function(){



  $(".js-select2").select2({minimumResultsForSearch: -1});
  
  $("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
  });



})