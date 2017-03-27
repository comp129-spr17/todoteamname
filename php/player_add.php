<?php
/*
 * @author Andre Allan Ponce
 * @email andreponce@null.net
 *
 * Submits data gathered from form into database
 */




// CONSTANTS:
$SR_DEFAULT = 0;
$LVL_DEFAULT = 0;

include_once("playerdb.php"); // $playerdb
include_once("constants.php"); // constants


//$cookie_values
//setcookie($cookie_values time() + (86400 * 30), "/"); // 86400 = 1 day cookie

if(isset($_POST['username'])
    && isset($_POST['server'])
    && isset($_POST['language'])
    && isset($_POST['sr'])
    && isset($_POST['level'])
    && isset($_POST['platform'])
    && isset($_POST['role'])
    && !empty($_POST['username'])
    && !empty($_POST['server'])
    && !empty($_POST['language'])
    && !empty($_POST['sr'])
    && !empty($_POST['level'])
    && !empty($_POST['platform'])
    && !empty($_POST['role'])){

    setcookie('username', $_POST['username'],time()+3600, '/');
    setcookie('server', $_POST['server'],time()+3600,'/');
    setcookie('language', $_POST['language'],time()+3600, '/');
    setcookie('sr', $_POST['sr'],time()+3600, '/');
    setcookie('level',$_POST['level'],time()+3600, '/');
    setcookie('platform', $_POST['platform'],time()+3600, '/');
    setcookie('role',$_POST['role'],time()+3600, '/');


   
    // check if everything has a value
    // now we can do an insert

    // sql injection rejection
    // (done by escaping single quotes)
    // we do all fields in case of POST spoofing
    // (except num fields and checkboxes)
    // num fields we check using is_numeric and is_int
    // checkboxes is just a set check, we supply boolean value
    $username = str_replace("'", "''", $_POST['username']);
    $server = str_replace("'", "''", $_POST['server']);
    $language = str_replace("'", "''", $_POST['language']);
    $role = str_replace("'", "''", $_POST['role']);
    $platform = str_replace("'", "''", $_POST['platform']);
    $contact = str_replace("'", "''", $_POST['contact']);

    // num field validations (also prevents sql injection)
    // note: we still would need to do slider number validations (maybe)
    $sr_str = $_POST['sr'];
    if(is_numeric($sr_str)){
        $sr = (int)$sr_str;
    }else{
        $sr = $SR_DEFAULT;
    }

    $lvl_str = $_POST['level'];
    if(is_numeric($lvl_str)){
        $lvl = (int)$lvl_str;
    }else{
        $lvl = $LVL_DEFAULT;
    }

    // first do fields
    $fields = "Name,Info,Server,Platform,Language,SeasonRank,";
    $fields = $fields."HasMicrophone,Role,IsMature,Level,IsCompetitive";

    // now to do values
    $values = "'".$username."','".$contact."','".$server."','".$platform."','";
    $values = $values.$language."',".$sr;

    // check for mic
    if(isset($_POST['mic'])){
        $values = $values.",TRUE,";
		setcookie('mic',"TRUE",time()+3600, '/');
    }else{
        $values = $values.",FALSE,";
		setcookie('mic',"FALSE",time()+3600, '/');
    }
        
    $values = $values."'".$role."',";

    // check for maturity
    if(isset($_POST['mat'])){
        $values = $values."TRUE,";
		setcookie('mat',"TRUE",time()+3600, '/');
    }else{
        $values = $values."FALSE,";
		setcookie('mat',"FALSE",time()+3600, '/');
    }

    $values = $values.$lvl.",";

    // check for comp
    if(isset($_POST['comp'])){
        $values = $values."TRUE";
		setcookie('comp',"TRUE",time()+3600, '/');
    }else{
        $values = $values."FALSE";
		setcookie('comp',"FALSE",time()+3600, '/');
    }

	//save values to cookie
	//$cookie_values = $values
    $sql = "INSERT INTO Players(".$fields.") VALUES(".$values.")";
    $query = $playerdb->prepare($sql);
    $query->execute();

    // TODO: add confirmation message before redirect?
    //  actually maybe just a session variable that notifies main page about
    //  data insert.
   



   header("Location:../");
}
else{
    echo "Error: Please fill out all required fields";
}/*else{
	if(!isset($_COOKIE[$cookie_values])) {
		//if values is saved in a cookie use $cookie_values
		$fields = "Name,Info,Server,Platform,GroupSize,Language,SeasonRank,";
		$fields = $fields."HasMicrophone,Role,Level";
		$sql = "INSERT INTO Players(".$fields.") VALUES(".$cookie_values.")";
		$query = $playerdb->prepare($sql);
		$query->execute();
	}
}*/

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
