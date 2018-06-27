$(document).ready(function(){
	//Aqui va a ejecutarse el codigo una vez que el documento este ready(listo o cargado)
	
	$("#uploader").change(function(evt){

		console.log("se cambio a imagen");
		var reader = new FileReader();
		var file = $(evt.target).get(0).files[0];
		reader.readAsDataURL(file);
		console.log(file);

		reader.onload = function(e){
    		console.log('The image was load');
    		$('#imagen').attr('src', e.target.result);
  		};

	});

	$("#formulario").submit(function(e){
		e.preventDefault();//previene el comportamiento por defecto de un elemento y asi no se recargaa pagina

		var imagenUsuario = $('#imagen').val();
		var elegirImagen = $('#uploader').val();
		var nombrePropio = $ ('#nombre').val();
		var pensamiento = $ ('#mensaje').val();
		var enviar = $ ('#borrar').val(); 
	})  












});

