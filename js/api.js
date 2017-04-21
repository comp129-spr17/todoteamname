function getUserFromApi(){
	//console.log($.get("/OverwatchLFG/php/api.php"));
	var username = document.getElementById('addUsername').value;
	//var data = {str: username};
	var data = "str=SquarePlanet-1416"
	alert(data);
	//document.getElementById(
	//console.log(username);
	//document.getElementById("levelID").innerHTML = 5060606;
	$.post('/OverwatchLFG/php/api.php', data, function(players) {
		console.log($.get("/OverwatchLFG/php/api.php"));
		//console.log();
		//$("#results-table tbody tr").remove();
			
		
		//document.getElementById("addUsername").value = $.get("/OverwatchLFG/php/api.php").responseText;
		//return false;
	}
	
	);
}

