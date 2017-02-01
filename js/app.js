$(document).ready(function() {
	var position = {
		top: 0,
		left: 50
	}
	$(document).keypress(function move() {
	
			$("div").offset(position);
			position.left +=10;

			console.log("i'm running!")
		
	})
	
})