$(document).ready(function() {

	/*like*/
	$('.likeur').click(function() {
		var idmessage = 12;
		var megaid = $("#idid").text();
		url = "http://www.goudesset.fr/johary/like.php";
		alert('fonction');
		var classe = $('#whisp_' + idmessage + '').attr('class');
		alert(idmessage);
		alert(megaid);
		alert(classe);
		
		/*XHR*/
		if( classe == "post" ) {
			alert('debut');
			document.getElementById("whisp_" + idmessage + "").className = "whispost";
			var noob = document.getElementById("whisp_" + idmessage + "").className;
			alert(noob);
			alert('changement');
			/*XHR
			var xhr = new XMLHttpRequest;
			xhr.open('GET','http://www.goudesset.fr/johary/like.php?message=' + idmessage + '&auteur=' + megaid + '', true);
			xhr.onreadystatechange = function() {
				alert('CACA');
				if(this.readyState == 4) {
					alert(this.responseText);
				}
			}*/
			
			
			/*problème ici*/
			$.post(url,{message:idmessage,auteur:megaid}, function(data) {
				if(data.etat == "OK") {
					alerte(data.rapport);
				}
				else {
					alert(data.rapport);
					$('#whisp_' + idmessage + '').switchClass("whispost","post",200,"easeOutCirc");
				}
			}, "json");
		}
		else {
			alert('Impossible de liker !');
		}
	});
	
	/*affichage whisps*/
	function whisp(type,id,$selecteur) {
		url="http://www.goudesset.fr/johary/whisp.php";
		/*Envoi*/
		$.post(url,{type:type,id:id}, function(data) {
			if(data.etat == "OK") {
				$selecteur.empty();
				var number = parseInt(data.nombre);
				/*On affiche les whisps*/
				for (var i = 1; i <= number; i++) {
					contenu = data.whisp[i];
					$selecteur.append(contenu);
				}
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
		
		whisp("news",$("#idid").text(),$("#news"));
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
		
		whisp("top",$("#idid").text(),$("#top"));
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