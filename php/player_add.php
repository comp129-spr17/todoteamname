<?php
/*
 * @author Andre Allan Ponce
 * @email andreponce@null.net
 *
 * Submits data gathered from form into database
 */

// for now, just display all the information candidly so data gathering works

// eventually this will all just be php, no html
?>

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
<p>LEVEL: <?php echo $_POST['level']; ?></p>
<p>PLATFORM: <?php echo $_POST['platform']; ?></p>
<p>GROUP SIZE: <?php echo $_POST['group']; ?></p>
<p>MICRO: <?php echo $_POST['mic']; ?></p>
<p>CONTACT: <?php echo $_POST['contact']; ?></p>
</div>

</body>
</html>
