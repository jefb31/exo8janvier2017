var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

$(document).ready(function(){

function main(){

	$('.image-holder').replace('<img/>')

	$('button').click(function(){




	}




 //$('#holder').append($('<img/>'))

  $('button').click(function() {
    var esp = $(this).attr("data-animal");
    alert(species[esp]); //on console.log de plein de façons differente pour tester (genre "typeof species.esp") qui marche pas.
    //$('#holder').html("<img src='img/"esp".jpg'>")
    $('#holder').append($('img').attr('src', '..img/' + species[esp])); // une foi qu'on a la bonne on le rentre dans un bout
  }); // de html qu'on inject avec .html(""). (un peu comme innerHTML)
}

$(document).ready(function() {
  main();
});


	/*$('.three ui buttons')

	


	$('button).click(function(){}


		



		$('#holder').html('<h1>Hello World</h1>');



});


		 	{

				$(this).attr('src','img/cat.jpg');

		});


		$("species").click(function()
		{
				$(this).
		}













/*
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/

	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !



	/*function().click{
		$(this).attr('src',cat.jpg= ;)
	}

	function(){
		$(this).attr('src',bear.jpg=;)
	}
	
	function(){
		$(this).attr('src',fish.jpg=;)
	}                                     */



			/*$("holder").replaceWith()


			$( "div.bear" ).replaceWith( src=..img/cat.jpg );

			$( "div.cat" ).replaceWith( "src=..img/bear.jpg );

			$( "div.fish" ).replaceWith( src=..img/fish.jpg );*/

	

	
	
	
	 
}

$(document).ready(function(){
	main();
});