//api.js created by Nathan Stowe
//for the OverwatchLFG COMP55 Project

//This script gets the username from the HTML, and passes to api.php, which is run using it

function getUserFromApi(){
	//get the username from html
	var username = document.getElementById('addUsername').value;

    $.post('/OverwatchLFG/php/username_check.php', "username-raw="+username, 
        function(output){
            
            if ($.trim(output) === "-1"){
                // didnt pass check, send alert and bail
                alert("Please enter a valid username");

                return false;
            }

            //if the username has a #
            if(username.indexOf("#") != -1){
                username = username.replace("#","-");
            }

            //add str= for passing to the php function
            username = "str=" + username;

            $.post('/OverwatchLFG/php/api.php', username, function(players) {
                //parse returned values and store in js variables
                var sr = players.slice(0, players.indexOf(","));
                var lvl = players.slice(players.indexOf(",") + 1, players.length);

                //change html values to values returned by api
                document.getElementById("SR rankID").value = sr;
                document.getElementById("levelID").value = lvl;
                
                
            }
            );
        }
    );

}

