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

		var imagenUsuario = $("#imagen").attr("src");	
		var elegirImagen = $('#uploader').val();
		var nombrePropio = $ ('#nombre').val();
		var pensamiento = $ ('#mensaje').val();
		var enviarMensaje = $ ('#enviar').val(); 
		var post=`<div class="tweet__cajpubli">
					<div class="media">
						<img class="align-self-end mr-3 tweet__cajpubli-img" src="${imagenUsuario}">
						<div class="media-body tweet__cajpubli-nombre">
							<h4 class="mt-5 pt-3 ">${nombrePropio}</h4>
							
						</div>
					</div>
					<p class="mt-4 tweet__cajpubli-opinion">
						${pensamiento}
					</p>
					<div class="row tweet__cajpubli-grupoicon">
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 tweet__cajpubli-icono">
							<i class="tweet__like fas fa-heart"></i><span class="contador">0</span>
						</div>
				
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 tweet__cajpubli-icono">
							<i class="fas fa-trash-alt"></i>
						</div>
					</div><!--fin row tweet__cajpubli-icono-->
				</div><!--fin tweet__cajpubli-->`;

				$(".tweet__publicaciones").prepend(post);

				//para limpiar el formulario
    			$(e.currentTarget).get(0).reset();

	});  

		//esto es para icono de corazon y cambiarlo a rojo
		$(".tweet__publicaciones").on("click", ".tweet__like", function(evt){
				evt.preventDefault();
				evt.stopPropagation();
				$(this).toggleClass("tweet__like--rojo");
				console.log(this);

				var contador= $(this).parent().find(".contador").text();
				var nuevocontador= parseInt(contador) +1;
				$(this).parent().find(".contador").text(nuevocontador);

		});



		











});

