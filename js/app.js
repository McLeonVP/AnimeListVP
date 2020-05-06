let txtsq = $("#sq");
// recupera todo el contenido de la fila
let plantilla = $('.row').html();

// borra el contenido de la fila
$('.row').html('');
//evento para que el boton asigne a la busqueda nuestro imput
$("#btn").click(guardar);
function guardar(){

let busqueda = txtsq.val();

console.log(busqueda);
 // recupera los datos del servicio web utilizando ajax
$.get('https://api.jikan.moe/v3/search/anime?q='+busqueda+'&page=1')
/*$.get('https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1')*/
	.done( function(datos){
		 muestraDatos(datos.results);
	} )
	.fail( function(error){
		console.log(error.statusText);	
	} );
	//limpiador de plantilla
	$('.row').html('');

}
//mostrar los datos en la plantilla
function muestraDatos (d) {

	for (let i = 0; i < d.length; i++) {
		
		let plnt = $(plantilla);

		plnt.find('.titulo').text( d[i].title );
		plnt.find('.cap').text( d[i].episodes );
		plnt.find('.punt').text( d[i].score );
		plnt.find('.anhoi').text( d[i].start_date.substr(0,10) );
		plnt.find('.anhof').text( d[i].end_date.substr(0,10) );
		plnt.find('.portada').attr('src', d[i].image_url);
	

		$('.row').append(plnt);
	}

}

