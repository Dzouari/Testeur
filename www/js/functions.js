$(document).ready(function() {
	
	/*affichage whisps*/
	function whisp(type,id,$selecteur) {
		url="http://www.goudesset.fr/johary/whisp.php";
		
		/*Envoi*/
		$.post(url,{type:type,id:id}, function(data) {
			if(data.etat = "OK") {
				var number = data.nombre;
				/*for (var i = 1; i < nombre; iter++) {
					$selecteur.append(data.whisp.i);
				}*/
				alert(number);
			}
			else {
				alert(data.rapport);
			}
		});
	}
	
	/*Si on clique sur un*/
	$('#un').click(function() {
		$('#poster').animate({
			left:"2000px",
		},200, function(){
			$('#mine').animate({
				left:"2000px",
			},200, function() {
				$('#top').animate({
					left:"2000px",
				},200, function() {
					$('#news').animate({
						left:"0px",
					}).show();
				}).hide(1000);
			}).hide(1000);
		}).hide(1000);
		
		$('#selecteur').animate({
			left:"0%"
		},500, function() {
			$('#un').css('color', '#ffffff');
			$('#deux').css('color', '#808080');
			$('#trois').css('color', '#808080');
			$('#quatre').css('color', '#808080');
		})
		
		whisp("news",13,$("#news"));
	})
	
	
	/*Si on clique sur deux*/
	$('#deux').click(function() {
		$('#news').animate({
			left:"-2000px"
		},200, function(){
			$('#mine').animate({
				left:"2000px"
			},200, function() {
				$('#poster').animate({
					left:"2000px"
				},200, function() {
					$('#top').animate({
						left:"0px"
					}).show();
				}).hide(1000);
			}).hide(1000);
		}).hide(1000);
		
		$('#selecteur').animate({
			left:"25%"
		},500, function() {
			$('#un').css('color', '#808080');
			$('#deux').css('color', '#ffffff');
			$('#trois').css('color', '#808080');
			$('#quatre').css('color', '#808080');
		})
	})
	
	
	/*Si on clique sur trois*/
	$('#trois').click(function() {
		$('#news').animate({
			left:"-2000px",
		},200, function(){
			$('#top').animate({
				left:"-2000px",
			},200, function() {
				$('#poster').animate({
					left:"2000px",
				},200, function() {
					$('#mine').animate({
						left:"0px",
					}).show();
				}).hide(1000);
			}).hide(1000);
		}).hide(1000);
		
		$('#selecteur').animate({
			left:"50%"
		},500, function() {
			$('#un').css('color', '#808080');
			$('#deux').css('color', '#808080');
			$('#trois').css('color', '#ffffff');
			$('#quatre').css('color', '#808080');
		})
	})
	
	
	/*Si on clique sur quatre*/
	$('#quatre').click(function() {
		$('#news').animate({
			left:"-2000px",
		},200, function(){
			$('#top').animate({
				left:"-2000px",
			},200, function() {
				$('#mine').animate({
					left:"-2000px",
				},200, function() {
					$('#poster').animate({
						left:"0px",
					}).show();
				}).hide(1000);
			}).hide(1000);
		}).hide(1000);
		
		$('#selecteur').animate({
			left:"75%"
		},500, function() {
			$('#un').css('color', '#808080');
			$('#deux').css('color', '#808080');
			$('#trois').css('color', '#808080');
			$('#quatre').css('color', '#ffffff');
		})
	})
})