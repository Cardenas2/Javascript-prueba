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
		var post=`<div class="tweet__cajpubli">
					<div class="media">
						<img class="align-self-end mr-3 tweet__cajpubli-img" src="${imagenUsuario}">
						<div class="media-body tweet__cajpubli-nombre">
							<h4 class="mt-5 pt-3 ">${ nombrePopio }</h4>
							
						</div>
					</div>
					<p class="mt-4 tweet__cajpubli-opinion">
						${ pensamiento }
					</p>
					<div class="row tweet__cajpubli-grupoicon">
						<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 tweet__cajpubli-icono">
							<i class="tweet__cajpubli-grupoicon--rojo fas fa-heart"></i>
						</div>
						<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 tweet__cajpubli-icono">
							<span><i class=" fas fa-thumbs-up"></i>1</span>
						</div>
						<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 tweet__cajpubli-icono">
							<button type="reset" class="btn btn-info">Borrar</button>
						</div>
					</div><!--fin row tweet__cajpubli-icono-->
				</div><!--fin tweet__cajpubli-->`
	});  












});

