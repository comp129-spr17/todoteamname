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

// Initialize postData to false
$postData = false;

// Initialize multiVar to false
$multiVar = false;

// Initialize condition
$condition = "";

// Initialize all data to *
// $server = "*";
// $language = "*";
// $sr = "*";
// $role = "*";
// $level = "*";
// $platform = "*";
// $gSize = "*";
// $mic = "*";
// $comp = "*";
// $mat = "*";


// Check whether there is data from POST
// If so, get the data and add it to the filter
if (isset($_POST['server_f']) && !empty($_POST['server_f'])){
	$condition = $condition . "Server = '" . $_POST['server_f'] . "'";
	$postData = true;
	$multiVar = true;
}
if (isset($_POST['language_f']) && !empty($_POST['language_f'])){
	if($multiVar){
		$condition = $condition . " AND Language = '" . $_POST['language_f'] . "'";
	}
	else{
		$condition = $condition . "Language = '" . $_POST['language_f'] . "'";
	}
	$postData = true;
	$multiVar = true;
}
if (isset($_POST['sr_f']) && !empty($_POST['sr_f'])){
	if($multiVar){
		$condition = $condition . " AND (SeasonRank <= " .($sr + 500). " AND SeasonRank >= " .($sr - 500). ")";
	}
	else{
		$condition = $condition . "(SeasonRank <= " .($sr + 500). " AND SeasonRank >= " .($sr - 500). ")";
	}
	$postData = true;
	$multiVar = true;
}
if (isset($_POST['role_f']) && !empty($_POST['role_f'])){
	if($multiVar){
		$condition = $condition . " AND Role = '" . $_POST['role_f'] . "'";
	}
	else{
		$condition = $condition . "Role = '" . $_POST['role_f'] . "'";
	}
	$postData = true;
	$multiVar = true;
}
if (isset($_POST['level_f']) && !empty($_POST['level_f'])){
	if($multiVar){
		$condition = $condition . " AND (Level <= " .($_POST['level_f'] + 50). " AND Level >= " .($_POST['level_f'] - 50). ")";
	}
	else{
		$condition = $condition . "(Level <= " .($_POST['level_f'] + 50). " AND Level >= " .($_POST['level_f'] - 50). ")";
	}
	$postData = true;
	$multiVar = true;
}
if (isset($_POST['platform_f']) && !empty($_POST['platform_f'])){
	if($multiVar){
		$condition = $condition . " AND Platform = '" . $_POST['platform_f'] . "'";
	}
	else{
		$condition = $condition . "Platform = '" . $_POST['platform_f'] . "'";
	}
	$postData = true;
	$multiVar = true;
}
if (isset($_POST['mic_f']) && !empty($_POST['mic_f'])){
	if($multiVar){
		$condition = $condition . " AND HasMicrophone = " . $_POST['mic_f'] . "";
	}
	else{
		$condition = $condition . "HasMicrophone = " . $_POST['mic_f'] . "";
	}
	$postData = true;
	$multiVar = true;
}
if (isset($_POST['comp_f']) && !empty($_POST['comp_f'])){
	if($multiVar){
		$condition = $condition . " AND IsCompetitive = " . $_POST['comp_f'] . "";
	}
	else{
		$condition = $condition . "IsCompetitive = " . $_POST['comp_f'] . "";
	}
	$postData = true;
	$multiVar = true;
}
if (isset($_POST['mat_f']) && !empty($_POST['mat_f'])){
	if($multiVar){
		$condition = $condition . " AND IsMature = " . $_POST['mat_f'] . "";
	}
	else{
		$condition = $condition . "IsMature = " . $_POST['mat_f'] . "";
	}
	$postData = true;
	$multiVar = true;
}


	


// How the players should be filtered
// $condition = "
// Server = " .$server. " AND
// Language = " .$language. " AND
// (SeasonRank <= " .($sr + 500). " OR
// SeasonRank >= " .($sr - 500). ") AND
// Role = " .$role. " AND
// (Level <= " .($level + 50). " OR
// Level >= " .($level - 50). ") AND
// Platform = " .$platform. " AND
// HasMicrophone = " .$mic . " AND
// IsMature = " . $mat . " AND
// IsCompetitive = " . $comp . "";



// Set up the SQL query
if ($postData){
	$sql = "SELECT DISTINCT * FROM Players WHERE " . $condition;
}
else{
	$sql = "SELECT DISTINCT * FROM Players";
}



//echo $sql;



// Code to actually execute the query on the database
$query = $playerdb->prepare($sql);
$query->execute();

// Fetches the data from the DB
$result = $query->fetchAll();

// echo JSON encoded data that was fetched from the database
echo json_encode($result);

?>
