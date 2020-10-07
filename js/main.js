	
$(document).on('click', ".shared", function() {	
	var url = window.location.href;
	var title = document.title;
	
	url = encodeURIComponent(url);
	title = encodeURIComponent(title);
	
	//Boton Facebook
	if($(this).hasClass('fb')){	
		url = 'https://www.facebook.com/'+url+'&t='+title;

	//Boton WhatsApp
	}else if($(this).hasClass('wa')){		
		url = 'https://wa.me/4251115677?text='+document.title+'" - "'+window.location.href+'"';
	
	//Boton correo electronico
	}else if($(this).hasClass('ce')){
		url = 'https://outlook.live.com/owa/'+url+'&t='+title;	
		
	//Ningun boton valido
	}else return;
	
	//Abrimos la url
	window.open(url, '_blank');			
});