$(document).ready(function(){
	var finish = $('.raceTrack').width();
	console.log("Track width: ", finish);	
	function race(){
		$('body').on('keypress', function(event){
			if(event.which === 107 || event.which === 108){
				console.log($('#red').position().left + 75)
				$('#red').animate({left: "+=3px"},60)
				var carFront = $('#red').position().left + 75;
				if((finish - carFront) < 0){
					$('body').off('keypress')
					if(!($('.winner').text())){
						$('.winner').text("RED WINS!")
					}

				}
			}
			if(event.which === 97 || event.which === 115){
				$('#blue').animate({left: "+=3px"},60);
				console.log($('#blue').position().left + 75)
				var carFront = $('#blue').position().left + 75;
				if((finish - carFront) < 0){	
					$('body').off('keypress')
					if(!($('.winner').text())){
						$('.winner').text("BLUE WINS!")
					}
				}
			}
		})
	}
	function start(){
 		setTimeout(function(){
 			$('.clock').html("3")
 		},0)
 		setTimeout(function(){
 			$('.clock').html("2")
 		},1000)
 		setTimeout(function(){
	 		$('.clock').html("1")
	 	},2000)
	 	setTimeout(function(){
	 			$('.clock').html("GO!")
	 			race();
	 	},3000)
	};
	
	$('.start').on('click', function(){
		$('.winner').text('');
		$('#red').animate({left: "0px"},0);
		$('#blue').animate({left: "0px"},0);
		start();
		return;
	});
})

