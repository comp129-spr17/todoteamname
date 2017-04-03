/*
* OverwatchLFG Javascript
*
*
*/

$(document).ready(function(){
    $("#submit-to-database").click(function(){
    document.getElementById("player-add-form").submit();
  });
  // Functions below are for displaying the value of the sliders when hovered over or dragged   
    $("#sr-slide").bootstrapSlider({
	formatter: function(value) {
		return value;
	    }
    });
    $("#sr-slide-listme").bootstrapSlider({
	formatter: function(value) {
		return value;
	    }
    });
    $("#lvl-slide").bootstrapSlider({
	formatter: function(value) {
		return value;
	    }
    });
    $("#lvl-slide-listme").bootstrapSlider({
	formatter: function(value) {
		return value;
	    }
    });

    // When the refresh button is pressed the contents of the table are 
    // removed and re-drawn to the page, for updating the table without 
    // refreshing the page
    $("#refresh-button").click(function() {
        $("#results-table tbody tr").remove();
        build_table();
    });
});


// On page load, the entire database contents are inserted into the results table
$(window).on("load", function() {
    build_table();
});


// Function to build the table with the data passed in via PHP GET as JSON
function build_table() {
    $.getJSON('/php/get_player_data.php', function(players) {
        $.each(players, function(key, val) {
            var start_row='<tr id="found-player">';
            var name='<td style=width:25%>'+ val.Name +'</td>';
            var server='<td style=width:10%>'+ val.Server +'</td>';
            var sr='<td style=width:10%>'+ val.SeasonRank +'</td>';
            var role='<td style=width:10%>'+ val.Role +'</td>';
            var lvl='<td style=width:10%>'+ val.Level +'</td>';
            var platform='<td style=width:10%>'+ val.Platform +'</td>';
            var language='<td style=width:10%>'+ val.Language +'</td>';
            if(val.IsMature == '1'){
                var mature2 = 'Yes';
            }
            else{
                var mature2 = 'No';
            }
            var mature='<td style=width:10%>'+ mature2 +'</td>';
            if(val.IsCompetitive == '1'){
                var comp2 = 'Competitive';
            }
            else{
                var comp2 = 'Casual';
            }
            var comp='<td style=width:10%>'+ comp2 +'</td>';
            if(val.HasMicrophone == '1'){
                var mic2 = 'Yes';
            }
            else{
                var mic2 = 'No';
            }
            var mic='<td style=width:10%>'+ mic2 +'</td>';
            var end_row='</tr>';

            // add the row to the table
            $('#results-table').append(start_row+name+server+sr+role+lvl+platform+language+mature+comp+mic+end_row); 
        });
    });
};
