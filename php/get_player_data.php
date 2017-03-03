<?php

/*
 * @author Kyle Cookerly
 *
 * Grabs all of the players in the database and outputs 
 * the information in JSON format to be used by js code
 * to print the data to the results page
 */

header('Content-type: text/json');

include_once("playerdb.php"); // $playerdb

$sql = "SELECT DISTINCT * FROM Players";
$query = $playerdb->prepare($sql);
$query->execute();

// Fetches the data from the DB
$result = $query->fetchAll();

// echo JSON encoded data that was fetched from the database
echo json_encode($result);

?>
