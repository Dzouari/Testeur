/* Fonctions JS*/
$(document).ready(function() {
	$('#menu div').click(function() {
		page = $(this).attr("label");
		page = '#' + page;
		afficher(page);
		/*page = $('#lilien').attr("href");
		$.ajax({
			url: page,
			cache:false,
			success:function(html) {
				afficher(html);
			},
			error:function(XMLHttpRequest,textStatus,errorThrown) {
				alert(textStatus);
			}
		})
		return false;*/
	});
});

function afficher(data) {
	
	$('#conteneur').animate({
		left:"-5000"
	},300,function() { 
		$('#conteneur').empty();
		$('#conteneur').append($(data));
		$('#conteneur').animate({
			left:"0"
		},300);
	})
	
}