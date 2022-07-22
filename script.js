img = document.getElementById("img_flork")


setTimeout(cambia_mensaje, 15000)

function cambia_mensaje(){
	document.getElementById("mensaje_cargando").innerText = "Abrazando <3"

}

setTimeout(cambia_mensaje2, 16500)

function cambia_mensaje2(){
	document.getElementById("abrazo_id").innerText = "ADRIIIIIIII¡¡¡¡¡"

}



setTimeout(cambia_imagen, 16500)

function cambia_imagen(){
	img.setAttribute('src', '/img/ABRAZO.svg');

}



setTimeout(cambia_imagen, 1)

function cambia_imagen(){
	img.setAttribute('src', '/img/img4.jpg');

}


