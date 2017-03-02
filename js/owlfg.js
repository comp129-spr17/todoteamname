// Place holder action until we are actually pulling data from the database

$(document).ready(function(){
    $("#submit-to-database").click(function(){
    document.getElementById("player-add-form").submit();
  });
});

// On page load, the entire database contents are dumped into the table
// Data is a placeholder, will use json file instead from the database
$(window).on("load", function() {

    //placeholder data to test building the table in json format
    var test_data=[
        {
            Name : "SoManyHax",
            Server : "test",
            SeasonRank : "2000",
            Role : "DPS",
            Level : "0",
            Platform : "PC",
            HasMicrophone : "Yes"
        },
        {
            Name : "NoName",
            Server : "test",
            SeasonRank : "1000",
            Role : "DPS",
            Level : "88",
            Platform : "PS4",
            HasMicrophone : "Yes"
        },
        {
            Name : "MyKDisOver9000",
            Server : "test",
            SeasonRank : "30",
            Role : "Tank",
            Level : "22",
            Platform : "Xbox",
            HasMicrophone : "No"
        },
        {
            Name : "MyNameisOriginal",
            Server : "test",
            SeasonRank : "300",
            Role : "Tank",
            Level : "220",
            Platform : "Xbox",
            HasMicrophone : "No"
        }
    ]
    for(var i = 0; i < test_data.length; i++) {
        var start_row='<tr id="found-player">';
        var name='<td style=width:25%>'+test_data[i]["Name"]+'</td>';
        var server='<td style=width:10%>'+test_data[i]["Server"]+'</td>';
        var sr='<td style=width:10%>'+test_data[i]["SeasonRank"]+'</td>';
        var role='<td style=width:10%>'+test_data[i]["Role"]+'</td>';
        var lvl='<td style=width:10%>'+test_data[i]["Level"]+'</td>';
        var platform='<td style=width:10%>'+test_data[i]["Platform"]+'</td>';
        var mic='<td style=width:10%>'+test_data[i]["HasMicrophone"]+'</td>';
        var end_row='</tr>';

       $('#results-table').append(start_row+name+server+sr+role+lvl+platform+mic+end_row); 
    }
});
