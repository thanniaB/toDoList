(function(){
	function setup(){
		var textBox = $("#insertTask"), 
			inputText,
			tasks,
			totalItems,
			itemCount = 0,
			checkboxes,
			thisCheckbox;

		function check(){			
			//if not checked add +1 items on the list
			checkboxes = $('main :checkbox');
			totalItems = checkboxes.length;
			checkboxes.each(
				function(){
					if(this.checked){
						totalItems --;
					}
				}
			);
			if(totalItems > 0){
				$(".info").css("visibility", "visible");
				if(totalItems ===1){
					$(".info").text("only ONE item left");
				} else {
					$(".info").text(totalItems + " items left");
				}
				//dont forget to delete checked ones
			} else {
				$(".info").css("visibility", "hidden");
			}
			
		}  

        $(textBox).keypress(function(e) {//aplastas enter y pasa algo
        	inputText = textBox.val(); //pa saber que esta escrito en el textbox
    		if(e.which == 13) {//tecla enter
    			//anadir tarea  
    			textBox.after("<div class='task'><input type='checkbox' class='checkbox' /> "+ inputText + "<input type='submit' class='eraseButton' value='X' /></div>");
    			textBox.val("");

						
    			check();		
    		}
		});

		$("main").on("click", ".checkbox",
			function(){
				//modify div properties AND erase one from the count thingy
				if($(this).prop("checked")){
					$(this).parent().css("text-decoration", "line-through" );
				} else {
					$(this).parent().css("text-decoration", "none" );
				}
				check();
			}
		);
		$("main").on("click", ".eraseButton",
			function(){
				$(this).parent().remove();
				check();
			}
		);

    }
    $(window).load(setup);	
}(jQuery));