// $.noConflict();
// jQuery(document).ready(function){

// 	$('menu').slideToggle();
// 	if($('menu').css('display')!='none'){
// 		$('#logo').css('background-color', 'white')
// 	}
// }

// j'essaie de faire le toggle .. mais je sais pas ou placer le logo...

const tags = [
		"Paris",
		"lyon",
		"marseille",];

$( "#tags" ).autocomplete({
  source: function( request, response ) {
          const matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( tags, function( item ){
              return matcher.test( item );
          }) );
      }
});

// lyon paris et marseille sont proposé avec la première lettre.