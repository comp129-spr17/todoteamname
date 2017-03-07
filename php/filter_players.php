<?php

/* File:  
 *    filter_players.php
 *
 * Author:
 *    Alexis Miranda	
 *
 * Purpose:
 *    A simple script to filter players from the database based on the user's preferences
 *    
 */

include_once("playerdb.php"); // $playerdb

// Get data from POST
$server = $_POST['server_f'];
$language = $_POST['language_f'];
$sr = (int)$_POST['sr_f'];
$role = $_POST['role_f'];
$level = (int)$_POST['level_f'];
$platform = $_POST['platform_f'];
//$gSize = (int)$_POST['gSize_f'];
$mic = $_POST['mic_f'];

// What to get from players
$data = "
Name,
Info,
Server,
Platform,
GroupSize,
Language,
SeasonRank,
HasMicrophone,
Role,
IsMature,
Level,
IsCompetitive";

// How the players should be filtered
$condition = "
Server = '" .$server. "' AND
Language = '" .$language. "' AND
(SeasonRank <= " .($sr + 500). " OR
SeasonRank >= " .($sr - 500). ") AND
Role = '" .$role. "' AND
(Level <= " .($level + 50). " OR
Level >= " .($level - 50). ") AND
Platform = '" .$platform. "' AND
HasMicrophone = '" .$mic . "'";

// Code to actually execute the query on the database
$sql = "SELECT DISTINCT " .$data. " FROM Players WHERE " . $condition;
$query = $playerdb->prepare($sql);
$query->execute();

// Get all of the returned rows
$rows = $query->fetchAll();

// Get number of results
$total = $query->columnCount();

// Check whether there were any results
if($total <= 0){
	print "<h1 class=\"text-center\">No Results</h1>\n";
}
else{ // Generate a primitive table to show that this is working. PLEASE CHANGE THIS TO BE ON THE SAME PAGE AS EVERYTHING ELSE!
	print "<!DOCTYPE html>
		   <html lang=\"en\">";
	print "<head>
  		   <title>Filter Test</title>
  		   <meta charset=\"utf-8\">
  		   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
  		   <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">
  		   <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js\"></script>
  		   <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>
		   </head>";
	print "<body>";
	print "<div class = \"container\">\n";
	print "<h2>Results</h2>";
	print "<p>This table is mereley here to demonstrate working code. <strong><mark>PLEASE CHANGE THIS CODE TO BE DISPLAYED ON THE SAME PAGE AS EVERYTHING ELSE!</mark></strong></p>\n";
	print "<table class = \"table\">\n";
	print "<thead>\n";
	print "<tr>\n";
	print "<th>Name</th>\n";
	print "<th>Info</th>\n";
	print "<th>Server</th>\n";
	print "<th>Platform</th>\n";
	print "<th>Group Size</th>\n";
	print "<th>Language</th>\n";
	print "<th>SR</th>\n";
	print "<th>Mic?</th>\n";
	print "<th>Role</th>\n";
	print "<th>Mature?</th>\n";
	print "<th>Level</th>\n";
	print "<th>Competitive?</th>\n";
	print "</tr>\n";
	print "</thead>\n";
	print "<tbody>\n";
	// Go through each row of the results
	foreach ($rows as $row) {
		// Place all of the data into variables
		$nameT = $row["Name"];
		$infoT = $row["Info"];
		$serverT = $row["Server"];
		$platformT = $row["Platform"];
		$gSizeT = $row["GroupSize"];
		$languageT = $row["Language"];
		$srT = $row["SeasonRank"];
		$micT = $row["HasMicrophone"];
		$roleT = $row["Role"];
		$matureT = $row["IsMature"];
		$levelT = $row["Level"];
		$compT = $row["IsCompetitive"];

		// Create a row of the table
		print "<tr>\n";
		print "<td>{$nameT}</td>\n";
		print "<td>{$infoT}</td>\n";
		print "<td>{$serverT}</td>\n";
		print "<td>{$platformT}</td>\n";
		print "<td>{$gSizeT}</td>\n";
		print "<td>{$languageT}</td>\n";
		print "<td>{$srT}</td>\n";
		print "<td>{$micT}</td>\n";
		print "<td>{$roleT}</td>\n";
		print "<td>{$matureT}</td>\n";
		print "<td>{$levelT}</td>\n";
		print "<td>{$compT}</td>\n";
		print "</tr>\n";
	}
	print "</tbody>\n";
	print "</table>\n";
	print "</div>\n";

	print "</body>";
	print "</html>";

}


?>