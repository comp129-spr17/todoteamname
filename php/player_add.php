<?php
/*
 * @author Andre Allan Ponce
 * @email andreponce@null.net
 *
 * Submits data gathered from form into database
 */

include_once("playerdb.php"); // $playerdb

// for now, just display all the information candidly so data gathering works

// eventually this will all just be php, no html

// validation for everything will be done lter
// for now, validation for sr and level is on the form itself
$cookie_values
setcookie($cookie_values time() + (86400 * 30), "/"); // 86400 = 1 day cookie


if(isset($_POST['username'])
    && isset($_POST['server'])
    && isset($_POST['lang'])
    && isset($_POST['sr'])
    && isset($_POST['level'])
    && isset($_POST['platform'])
    && isset($_POST['group'])
    && isset($_POST['role'])
    && isset($_POST['mic'])
    && isset($_POST['contact'])){
    // check if everything has a value
    // now we can do an insert

	
    // but first turn some of the data into ints
    $groupsize = (int)$_POST['group'];
    $seasonrank = (int)$_POST['sr'];
    $hasmic = (int)$_POST['mic'];
    //    $ismature = (int)$_POST[' this isnt here what
    //    neither is $iscomp
    $level = (int)$_POST['level'];
    $contactclean = str_replace("'", "''", $_POST['contact']);

    $fields = "Name,Info,Server,Platform,GroupSize,Language,SeasonRank,";
    $fields = $fields."HasMicrophone,Role,Level";
    //    $fields = $fields."HasMicrophone,Role,IsMature,Level,IsCompetitive";
    //     we dont have two fields
    $values = "'".$_POST['username']."','".$contactclean."','";
    $values = $values.$_POST['server']."','".$_POST['platform']."',";
    $values = $values.$groupsize.",'".$_POST['lang']."',".$seasonrank.",";
    $values = $values.$hasmic.",'".$_POST['role']."',".$level;
	//save values to cookie
	$cookie_values = $values
    $sql = "INSERT INTO Players(".$fields.") VALUES(".$values.")";
    $query = $playerdb->prepare($sql);
    $query->execute();

    // TODO: add confirmation message before redirect?
    //  actually maybe just a session variable that notifies main page about
    //  data insert.
    header("Location:../");
}else{
	if(!isset($_COOKIE[$cookie_values])) {
		//if values is saved in a cookie use $cookie_values
		$fields = "Name,Info,Server,Platform,GroupSize,Language,SeasonRank,";
		$fields = $fields."HasMicrophone,Role,Level";
		$sql = "INSERT INTO Players(".$fields.") VALUES(".$cookie_values.")";
		$query = $playerdb->prepare($sql);
		$query->execute();
	}
}

?>
<?php
/*
<html>
<head>
<title>SUBMIT TEST PAGE</title>
</head>
<body>

<div style="width:1000px;margin: auto;">
<h1>TEST page for submitting</h1>
<p>USERNAME: <?php echo $_POST['username']; ?></p>
<p>SERVER: <?php echo $_POST['server']; ?></p>
<p>LANGUAGE: <?php echo $_POST['lang']; ?></p>
<p>SR RANK: <?php echo $_POST['sr']; ?></p>
<p>ROLE: <?php echo $_POST['role']; ?></p>
<p>LEVEL: <?php echo $_POST['level']; ?></p>
<p>PLATFORM: <?php echo $_POST['platform']; ?></p>
<p>GROUP SIZE: <?php echo $_POST['group']; ?></p>
<p>MICRO: <?php echo $_POST['mic']; ?></p>
<p>CONTACT: <?php echo $_POST['contact']; ?></p>
<h1><?php echo $sql;?></h1>
</div>

</body>
</html>
 */ ?>
