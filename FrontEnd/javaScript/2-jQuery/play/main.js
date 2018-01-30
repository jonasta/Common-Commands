$(document).ready(function(){
  function preencher(){
    //alert($(this).prop("name"));
    $(this).closest("#minhaDiv").find("#test1").val("Funcionou");
	$(this).closest("#minhaDiv").find("#test1").animate({"opacity":"0"});
  };
  $(document).on( "click", "button", preencher);
});
