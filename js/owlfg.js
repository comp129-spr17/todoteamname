$(function () {
  	$('[data-toggle="popover"]').popover()
});

$(document).ready(function(){
    $("#list_me").click(function(){
    $('#results_table').append('<tr id="found_player"><td style=width:25%>name</td> <td style=width:10%>server</td> <td style=width:10%>SR rank</td> <td style=width:10%>role</td> <td style=width:10%>level</td> <td style=width:10%>platform</td> <td style=width:10%>mic</td></tr>');
  });
});
