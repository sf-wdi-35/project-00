$(document).ready(function() {
	var player1 = {
		top: $("#player1").offset().top,
		left: $("#player1").offset().left,
		keyCode: 74 //j

	}

	var player2 = {
		top: $("#player2").offset().top,
		left: $("#player2").offset().left,
		keyCode: 68 //d
	}

	var finish = {
		top: $("#finish").offset().top,
		left: $("#finish").offset().left
	}

	//Keydown event: When player1 presses j key or player2 presses d key, their left position will increase by 20px
	$(document).keydown(function move(e) {
			if (e.keyCode == player1.keyCode) {
				$("#player1").offset({top: player1.top, left: player1.left += 20});
			} 
			if(e.keyCode == player2.keyCode) {
				$("#player2").offset({top: player2.top, left: player2.left +=20});
			}

			//Winning and Tie Conditions

			if (player1.left == finish.left && player2.left == finish.left) {
					//create a tie window because the players don't actually move simultaneously.
			} else if (player1.left == finish.left){
				alert("player 1 is the winner")
				//prevent players from moving further
			} else if (player2.left == finish.left) {
				alert("player 2 is the winner")
				//
			}
	})
	
})