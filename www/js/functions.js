$(document).ready(function() {
	
	/*affichage whisps*/
	function whisp(type,id,$selecteur) {
		url="http://www.goudesset.fr/johary/whisp.php";
		/*Envoi*/
		alert(id);
		$.post(url,{type:type,id:id}, function(data) {
			if(data.etat == "OK") {
				var number = parseInt(data.nombre);
				/*On affiche les whisps*/
				for (var i = 1; i <= number; i++) {
					contenu = data.whisp[i];
					$selecteur.append(contenu);
				}
				alert(data.rapport);
			}
			else {
				alert(data.rapport);
			}
		}, "json");
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
		
		whisp("news",0,$("#news"));
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
		
		whisp("top",0,$("#top"));
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
		
		whisp("mine",$("#idid").text(),$("#mine"));
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