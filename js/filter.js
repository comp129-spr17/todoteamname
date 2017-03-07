function filter(){
	$.post('/OWLFG/php/get_player_data.php', $('form').serializeArray(), function(players) {
		$("#results-table tbody tr").remove();
        $.each(players, function(key, val) {
            var start_row='<tr id="found-player">';
            var name='<td style=width:25%>'+ val.Name +'</td>';
            var server='<td style=width:10%>'+ val.Server +'</td>';
            var sr='<td style=width:10%>'+ val.SeasonRank +'</td>';
            var role='<td style=width:10%>'+ val.Role +'</td>';
            var lvl='<td style=width:10%>'+ val.Level +'</td>';
            var platform='<td style=width:10%>'+ val.Platform +'</td>';
            var mic='<td style=width:10%>'+ val.HasMicrophone +'</td>';
            var end_row='</tr>';

            // add the row to the table
            $('#results-table').append(start_row+name+server+sr+role+lvl+platform+mic+end_row); 
        });
    }
    ,
    'json');
}