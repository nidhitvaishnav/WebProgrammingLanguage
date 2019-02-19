
//By Nidhi Vaishnav - ntv170030
$(document).ready(function() {
	//Initializing variables
	var at = '@';
	var regex = /^[A-Za-z0-9]+$/;

	//adding span
	$("#username").after("<span id='uNameSpan' class='info'>InfoMessage: UserName must have only alphanumeric characters</span>");
	$('#uNameSpan').hide();
	$("#password").after("<span id='pwordSpan' class='info'>InfoMessage: Password must have atleast 6 characters</span>");
	$('#pwordSpan').hide();
	$("#email").after("<span id='emailSpan' class='info'>InfoMessage: email must have '@' character</span>");
	$('#emailSpan').hide();


	//user name
	$( "#username" ).focus(function() {
	  $( this ).next( "span" ).show();
	});


	//username blur event
	$( "#username" ).blur(function() {
		//no text in username field
		if ($('#username').val().length==0){
			if ( $( this ).next("span").is( ".error" ) ) {
				$( this ).next( "span" ).removeClass("error").addClass("info").text("InfoMessage: UserName must have only alphanumeric characters");	
			}
  	
  			else if ( $( this ).next("span").is( ".ok" ) ) {
				$( this ).next( "span" ).removeClass("ok").addClass("info").text("InfoMessage: UserName must have only alphanumeric characters");
			}
		  $( this ).next( "span" ).hide();

  		}
  		//user name satisfies the constrain
		else if (regex.test($('#username').val())){
			if ( $( this ).next("span").is( ".info" ) ) {
				$( this ).next( "span" ).removeClass("info").addClass("ok").text("OK");	
			}
  	
  			else if ( $( this ).next("span").is( ".error" ) ) {
				$( this ).next( "span" ).removeClass("error").addClass("ok").text("OK");
			}
  		}
  		//user name fails the constrain
  		else{
			if ( $( this ).next("span").is( ".info" ) ) {
				$( this ).next( "span" ).removeClass("info").addClass("error").text("Error");	
			}
  	
  			else if ( $( this ).next("span").is( ".ok" ) ) {
				$( this ).next( "span" ).removeClass("ok").addClass("error").text("Error");
			}
		}
	});



	//password
	$( "#password" ).focus(function() {
	  $( this ).next( "span" ).show();
	});



	//password blur event
	$( "#password" ).blur(function() {
		//no text in password field
		if ($('#password').val().length==0){
			if ( $( this ).next("span").is( ".error" ) ) {
				$( this ).next( "span" ).removeClass("error").addClass("info").text("InfoMessage: Password must have atleast 6 characters");	
			}
		
				else if ( $( this ).next("span").is( ".ok" ) ) {
				$( this ).next( "span" ).removeClass("ok").addClass("info").text("InfoMessage: Password must have atleast 6 characters");
			}
		  	$( this ).next( "span" ).hide();
		}  
		//password fails the constrain
		else if ($('#password').val().length<6){
			if ( $( this ).next("span").is( ".info" ) ) {
				$( this ).next( "span" ).removeClass("info").addClass("error").text("Error");	
			}
  	
  			else if ( $( this ).next("span").is( ".ok" ) ) {
				$( this ).next( "span" ).removeClass("ok").addClass("error").text("Error");
			}
  		}
  		//password satisfies the constrain
  		else{
  			if ( $( this ).next("span").is( ".info" ) ) {
				$( this ).next( "span" ).removeClass("info").addClass("ok").text("OK");	
			}
  	
  			else if ( $( this ).next("span").is( ".error" ) ) {
				$( this ).next( "span" ).removeClass("error").addClass("ok").text("OK");
			}
		}
	});



	//email
	$( "#email" ).focus(function() {
	  $( this ).next( "span" ).show();
	});



	//email blur event
	$( "#email" ).blur(function() {
		//no text in email field
  		if ($('#email').val().length==0){
			if ( $( this ).next("span").is( ".error" ) ) {
				$( this ).next( "span" ).removeClass("error").addClass("info").text("InfoMessage: email must have '@' character");	
			}
		
				else if ( $( this ).next("span").is( ".ok" ) ) {
				$( this ).next( "span" ).removeClass("ok").addClass("info").text("InfoMessage: email must have '@' character");
			}
		  $( this ).next( "span" ).hide();
		}
  		//email satisfies the constrain
		else if ($('#email').val().search(at)!=-1){
  			if ( $( this ).next("span").is( ".info" ) ) {
				$( this ).next( "span" ).removeClass("info").addClass("ok").text("OK");	
			}
  	
  			else if ( $( this ).next("span").is( ".error" ) ) {
				$( this ).next( "span" ).removeClass("error").addClass("ok").text("OK");
			}
  		}
  		//email fails the constrain
  		else{
  			if ( $( this ).next("span").is( ".info" ) ) {
				$( this ).next( "span" ).removeClass("info").addClass("error").text("Error");	
			}
  	
  			else if ( $( this ).next("span").is( ".ok" ) ) {
				$( this ).next( "span" ).removeClass("ok").addClass("error").text("Error");
			}

		}
	});
});

