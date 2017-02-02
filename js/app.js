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

			if (player1.left == finish.left && player2.left == finish.left) {
					alert("it's a tie"); //create a tie window because the players don't actually move simultaneously.
			} else if (player1.left == finish.left){
				alert("player 1 is the winner")
			} else if (player2.left == finish.left) {
				alert("player 2 is the winner")
			}
	})

	//Win condition: when players' left position exceeds the left position of a finish line, the player game stops.

	
})