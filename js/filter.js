function filter(){
	$.post('/php/get_player_data.php', $('form').serializeArray(), function(players) {
		$("#results-table tbody tr").remove();
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
    }
    ,
    'json');
}