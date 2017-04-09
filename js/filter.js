function filter(){
	$.post('/php/get_player_data.php', $('form').serializeArray(), function(players) {
		$("#results-table tbody tr").remove();
        var table = 0;
        $.each(players, function(key, val) {
            var start_row='<tr id="found-player" data-toggle="collapse" data-target="#'+ table +'" class="accordion-toggle collapsed"> <td style=width:1%><span class="fa fa-chevron-right rotate unactive"></span></td>';
            var name='<td style=width:15%>'+ val.Name +'</td>';
            var server='<td style=width:10%>'+ val.Server +'</td>';
            var sr='<td style=width:10%>'+ val.SeasonRank +'</td>';
            var role='<td style=width:10%>'+ val.Role +'</td>';
            var lvl='<td style=width:10%>'+ val.Level +'</td>';
            var platform='<td style=width:10%>'+ val.Platform +'</td>';
            var language='<td style=width:5%>'+ val.Language +'</td>';
            var info = val.Info.replace(/(?:\r\n|\r|\n)/g, '<br />');
            if(info == ''){
                info = 'No info provided';
            }
            if(val.IsMature == '1'){
                var mature2 = 'Yes';
            }
            else{
                var mature2 = 'No';
            }
            var mature='<td style=width:5%>'+ mature2 +'</td>';
            if(val.IsCompetitive == '1'){
                var comp2 = 'Competitive';
            }
            else{
                var comp2 = 'Casual';
            }
            var comp='<td style=width:5%>'+ comp2 +'</td>';
            if(val.HasMicrophone == '1'){
                var mic2 = 'Yes';
            }
            else{
                var mic2 = 'No';
            }
            var mic='<td style=width:5%>'+ mic2 +'</td>';
            var t = val.creationTime.split(/[- :]/);
            var jDate = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
            var cTime='<td style=width:15%> '+ timeSince(jDate) +' ago </td>';
            var end_row='</tr> <tr> <td colspan="20" class="hiddenRow"><div id="'+table+'" class="accordian-body collapse">'+info+'</div></td> </tr>';
            table++;

            // add the row to the table
            $('#results-table').append(start_row+name+platform+server+sr+role+lvl+comp+language+mic+mature+cTime+end_row); 
        });
    }
    ,
    'json');
}


function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    if (interval == 1){
        return interval + " yr";
    }
    else{
        return interval + " yrs";
    }
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    if (interval == 1){
        return interval + " month";
    }
    else{
        return interval + " months";
    }
    
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    if (interval == 1){
        return interval + " day";
    }
    else{
        return interval + " days";
    }
    
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    if (interval == 1){
        return interval + " hr";
    }
    else{
        return interval + " hrs";
    }
    
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    if (interval == 1){
        return interval + " min";
    }
    else{
        return interval + " mins";
    }
    
  }
  if(Math.floor(seconds) == 1){
    return Math.floor(seconds) + " second";
  }
  else{
    return Math.floor(seconds) + " seconds";
  }
  
}
var aDay = 24*60*60*1000
console.log(timeSince(new Date(Date.now()-aDay)));
console.log(timeSince(new Date(Date.now()-aDay*2)));