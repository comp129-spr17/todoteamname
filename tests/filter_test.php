<?php

/* 
*
* Essentially a copy of the filter_players.php file, made the
* copy so we can pull from a testData table that will be constant in the DB
*
*/

header('Content-type: text/json');

include_once("../php/playerdb.php"); // $playerdb
include_once("../php/constants.php"); // constants

// Initialize postData to false
$postData = false;

// Initialize multiVar to false
$multiVar = false;

// Initialize condition
$condition = "";

// Check whether there is data from POST
// If so, get the data and add it to the filter
if (isset($_POST['server_f']) && !empty($_POST['server_f'])){
    $server_f = str_replace("'", "''", $_POST['server_f']);
	$condition = $condition . "Server = '" . $server_f . "'";
	$postData = true;
	$multiVar = true;
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
}


// Set up the SQL query
if ($postData){
	$sql = "SELECT DISTINCT * FROM testData WHERE " . $condition;
}
else{
	$sql = "SELECT DISTINCT * FROM testData";
}


// Code to actually execute the query on the database
$query = $playerdb->prepare($sql);
$query->execute();

// Fetches the data from the DB
$result = $query->fetchAll();

// echo JSON encoded data that was fetched from the database
echo json_encode($result);

?>
