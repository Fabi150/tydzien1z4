(function($) {

    $(document).ready(function() {

		var lista = $("<ul id='list'></ul>");
		var formImput = $("#textfield");
		var formButton = $("#button");
		
		$("body").append(lista);
		
		formButton.on("click", function(){
			
			var imputValue = $.trim(formImput.val());
			
			if(imputValue!==""){
				var listItem = $("<li></li>");
				listItem.text(imputValue);
				lista.append(listItem);
				formImput.val("");
			}else {
				alert("Musisz coś wpisać!");
			}
			
			
			
		});

    });

})(jQuery);