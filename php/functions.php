<?php
/*
 * @author Andre Allan Ponce
 * @email andreponce@null.net
 *
 * Just some functions we need to use
 *
 */

include_once("constants.php");

/*
 * Clean the username into a script friendly version by removing bad 
 * characters (and replacing #)
 *
 * IN:
 *  @param username - the username to clean
 *
 * OUT:
 *  @returns the username after being clean
 */
function clean_username($username){
}

/*
 * Checks if the given username is valid according to our standards
 *
 * IN:
 *  @param username - the username to check for validity
 *
 * OUT:
 *  @returns true if the username is valid, false if not
 */
function is_username_valid($username){
    global $username_regex;

    return preg_match($username_regex, $username);
}


?>
