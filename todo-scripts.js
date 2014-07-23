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
			}
			
		}  

        $(textBox).keypress(function(e) {//aplastas enter y pasa algo
        	inputText = textBox.val(); //pa saber que esta escrito en el textbox
    		if(e.which == 13) {//tecla enter
    			//anadir tarea  
    			textBox.after("<div class='task'><input type='checkbox' class='checkbox' /> "+ inputText + "<input type='submit' class='eraseButton' value='X' /></div>");    			
				checkboxes = $('main :checkbox');				
				tasks = $(".task");				
    			check();		
    		}
		});

    }
    $(window).load(setup);	
}(jQuery));