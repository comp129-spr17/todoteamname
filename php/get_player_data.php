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
include_once("constants.php"); // constants

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
    $server_f = str_replace("'", "''", $_POST['server_f']);
	$condition = $condition . "Server = '" . $server_f . "'";
	$postData = true;
	$multiVar = true;
	//set fserver cookie
	setcookie('fserver', $_POST['server_f'],time()+3600,'/');
}
if (isset($_POST['language_f']) && !empty($_POST['language_f'])){
    $language_f = str_replace("'", "''", $_POST['language_f']);
	if($multiVar){
		$condition = $condition . " AND Language = '" . $language_f . "'";
	}
	else{
		$condition = $condition . "Language = '" . $language_f . "'";
	}
	$postData = true;
	$multiVar = true;
	//set flanguage cookie
	setcookie('flanguage', $_POST['language_f'],time()+3600, '/');
}
if (isset($_POST['sr_f']) && !empty($_POST['sr_f'])){
	$srStart = split(',',$_POST['sr_f'])[0];
	$srEnd = split(',',$_POST['sr_f'])[1];
	if($multiVar){
		$condition = $condition . " AND (SeasonRank <= " .($srEnd). " AND SeasonRank >= " .($srStart). ")";
	}
	else{
		$condition = $condition . "(SeasonRank <= " .($srEnd). " AND SeasonRank >= " .($srStart). ")";
	}
	$postData = true;
	$multiVar = true;
	//set fsr cookie
	setcookie('fsr', $_POST['sr_f'],time()+3600, '/');
}
if (isset($_POST['role_f']) && !empty($_POST['role_f'])){
    $role_f = str_replace("'", "''", $_POST['role_f']);
	if($multiVar){
		$condition = $condition . " AND Role = '" . $role_f . "'";
	}
	else{
		$condition = $condition . "Role = '" . $role_f . "'";
	}
	$postData = true;
	$multiVar = true;
	//set frole cookie
	setcookie('frole', $_POST['role_f'],time()+3600, '/');
}
if (isset($_POST['level_f']) && !empty($_POST['level_f'])){
	$lvlStart = split(',',$_POST['level_f'])[0];
	$lvlEnd = split(',',$_POST['level_f'])[1];
	if($multiVar){
		$condition = $condition . " AND (Level <= " .($lvlEnd). " AND Level >= " .($lvlStart). ")";
	}
	else{
		$condition = $condition . "(Level <= " .($lvlEnd). " AND Level >= " .($lvlStart). ")";
	}
	$postData = true;
	$multiVar = true;
	//set flevel cookie
	setcookie('flevel', $_POST['level_f'],time()+3600, '/');
}
if (isset($_POST['platform_f']) && !empty($_POST['platform_f'])){
    $platform_f = str_replace("'", "''", $_POST['platform_f']);
	if($multiVar){
		$condition = $condition . " AND Platform = '" . $platform_f . "'";
	}
	else{
		$condition = $condition . "Platform = '" . $platform_f . "'";
	}
	$postData = true;
	$multiVar = true;
	//set fplatform cookie
	setcookie('fplatform', $_POST['platform_f'],time()+3600, '/');
}
if (isset($_POST['mic_f']) && !empty($_POST['mic_f'])){
    $mic_f = str_replace("'", "''", $_POST['mic_f']);
	if($multiVar){
		$condition = $condition . " AND HasMicrophone = " . $mic_f . "";
	}
	else{
		$condition = $condition . "HasMicrophone = " . $mic_f . "";
	}
	$postData = true;
	$multiVar = true;
	//set fmic cookie
	setcookie('fmic', $_POST['mic_f'],time()+3600, '/');
}
if (isset($_POST['comp_f']) && !empty($_POST['comp_f'])){
    $comp_f = str_replace("'", "''", $_POST['comp_f']);
	if($multiVar){
		$condition = $condition . " AND IsCompetitive = " . $comp_f . "";
	}
	else{
		$condition = $condition . "IsCompetitive = " . $comp_f . "";
	}
	$postData = true;
	$multiVar = true;
	//set fcomp cookie
	setcookie('fcomp', $_POST['comp_f'],time()+3600, '/');
}
if (isset($_POST['mat_f']) && !empty($_POST['mat_f'])){
    $mat_f = str_replace("'", "''", $_POST['mat_f']);
	if($multiVar){
		$condition = $condition . " AND IsMature = " . $mat_f . "";
	}
	else{
		$condition = $condition . "IsMature = " . $mat_f . "";
	}
	$postData = true;
	$multiVar = true;
	//set fmat cookie
	setcookie('fmat', $_POST['mat_f'],time()+3600, '/');
}

// get the type of filtering via post
if (isset($_POST['order_type']) && !empty($_POST['order_type'])) {
	$ordering_type = $_POST['order_type'];
}
else {
	$ordering_type = "default";
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


// output the different json based on what the hidden value is in order_type
switch ($ordering_type) {
    case "sr_d":
        if ($postData){
			$sql = "SELECT DISTINCT * FROM Players WHERE " . $condition . " ORDER BY SeasonRank DESC";
		}
		else{
			$sql = "SELECT DISTINCT * FROM Players ORDER BY SeasonRank DESC";
		}
        break;
	case "sr_a":
        if ($postData){
			$sql = "SELECT DISTINCT * FROM Players WHERE " . $condition . " ORDER BY SeasonRank ASC";
		}
		else{
			$sql = "SELECT DISTINCT * FROM Players ORDER BY SeasonRank ASC";
		}
        break;
	case "lvl_d":
        if ($postData){
		$sql = "SELECT DISTINCT * FROM Players WHERE " . $condition . " ORDER BY Level DESC";
		}
		else{
			$sql = "SELECT DISTINCT * FROM Players ORDER BY Level DESC";
		}
        break;
    case "lvl_a":
        if ($postData){
		$sql = "SELECT DISTINCT * FROM Players WHERE " . $condition . " ORDER BY Level ASC";
		}
		else{
			$sql = "SELECT DISTINCT * FROM Players ORDER BY Level ASC";
		}
        break;
    default:
        if ($postData){
		$sql = "SELECT DISTINCT * FROM Players WHERE " . $condition . " ORDER BY creationTime DESC";
		}
		else{
			$sql = "SELECT DISTINCT * FROM Players ORDER BY creationTime DESC";
		}	
}


// $my_file = 'file.txt';
// $handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
// $data = 'This is the data';
// fwrite($handle, $sql);
// echo $sql;



// Code to actually execute the query on the database
$query = $playerdb->prepare($sql);
$query->execute();

// Fetches the data from the DB
$result = $query->fetchAll();

// echo JSON encoded data that was fetched from the database
echo json_encode($result);

?>
