<?php
/**
 * @author Andre Allan Ponce
 * @email andreponce@null.net
 *
 * Checks if username given in post['username-raw'] is valid
 */

include_once("constants.php");

if (isset($_POST['username-raw']) && !empty($_POST['username-raw'])){

    $username = $_POST['username-raw'];

    foreach ($valid_encodings as $e){
        if (preg_match($username_regex, mb_convert_encoding($username, $e))){
            echo "0";
            return;
        }
    }
}
echo "-1";
?>
