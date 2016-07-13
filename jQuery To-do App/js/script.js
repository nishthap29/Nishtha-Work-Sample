// For add value of textbox into the <p> element after user press "ENTER" key

$(document).ready(function(){
	$('#mytxtbox').on('keypress',function(event){
		var txtval = $('#mytxtbox').val();
		var t = document.getElementById('mytxtbox');
		if(event.keyCode == 13){
			
			if(t.value == ""){
				alert("Please enter value into the textbox");
			}
			else{
				t.value = "";
				$('.checkbox').append("<div class='bottom'><input type='checkbox' class='chk'><span>"
	 				+ txtval + "</span><span class='glyphicon glyphicon-remove-circle'></span></div>");
				}	
		}	
	});

			// if user checked any checkbox, it's color will be "red", if user unchecked a perticular checkbox it's color change again with original
			$('.checkbox').on('click','.chk',function(){
				if(this.checked === true){
					//console.log($(this).parent());
					$(this).parent().css({"color":"red"});
				}
				else if(this.checked === false){
					$(this).parent().css({"color":"black"});
				}
			});

			// if user checked all the checkboxes the topper most checkbox named "select all" must be checked by itself
			$('.checkbox').on('click','.chk',function(){
				if ($('.chk:checked').length == $('.chk').length) {
       					document.getElementById('sAll').checked = true;
    			}
    			else{
    					document.getElementById('sAll').checked = false;
    			}
			});

			// if user checked "select all" chekcbox then all the checkboxes must be checked by itself
			$('.checkbox').on('click','#sAll',function(){
				if(this.checked){
					$('.chk').prop('checked',true);
					$('.chk').parent().css('color','red');
				}
				else{
					$('.chk').prop('checked',false);
					$('.chk').parent().css('color','black');
				}
			});	


			// if user click on All button this function will be execute
			$('.btn-div').on('click','#all',function(){
				console.log("I am executeing");
				$('.bottom').show();
			});

			// if user click on completed button this function will be execute
			$('.btn-div').on('click','#completed',function(){
				console.log($('.chk:checked'));
				$('.chk').parent().hide();
				$('.chk:checked').parent().show();
			});
				
			// if user click on pending button this function will be execute
			$('.btn-div').on('click','#pending',function(){
				$('.chk').parent().show();
				$('.chk:checked').parent().hide();
			});

	
			// if user click on "cross" image then this function will be executes
			$('.checkbox').on('click','.glyphicon-remove-circle',function(){
				$(this).parent().remove();
			});

			//if user click on "Remove Completed" button then all the items which are completed should be delted from the list.
			$('.com_btn').on('click','#removeBtn',function(){
				$('.chk:checked').parent().remove();
			});	
});
