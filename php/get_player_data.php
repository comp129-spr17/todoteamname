<?php

/* File:  
 *    get_player_data.php
 *
 * Authors:
 *    Alexis Miranda, Kyle Cookerly
 *
 * Purpose:
 *    Grabs all of the players in the database (or filters them) and outputs 
 *    the information in JSON format to be used by js code
 *    to print the data to the results page
 *    
 */

header('Content-type: text/json');

include_once("playerdb.php"); // $playerdb


// Check whether all required data is in POST
$postData = true;

if (isset($_POST['server_f']) &&
	isset($_POST['language_f']) &&
	isset($_POST['sr_f']) && 
	isset($_POST['role_f']) && 
	isset($_POST['level_f']) && 
	isset($_POST['platform_f']) && 
	isset($_POST['gSize_f']) && 
	isset($_POST['mic_f'])) {


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
}
else{
	$postData = false;
}





// If any field is missing just pull all players
if ($postData){
	$sql = "SELECT DISTINCT " .$data. " FROM Players WHERE " . $condition;
}
else{
	$sql = "SELECT DISTINCT * FROM Players";
}


// Code to actually execute the query on the database
$query = $playerdb->prepare($sql);
$query->execute();

// Fetches the data from the DB
$result = $query->fetchAll();

// echo JSON encoded data that was fetched from the database
echo json_encode($result);

?>
