
<?php
/*
 * @author Andre Allan Ponce
 * @email andreponce@null.net
 *
 * Literally a file to hold constants
 *
 */

// CONSTANTS:
$SR_DEFAULT = 0;
$LVL_DEFAULT = 1;

// constants for main page
$servers = [
    0 => "NA",
    1 => "EU",
    2 => "AS",
];

$languages = [
    0   => "English",
    1   => "Español(EU)",
    2   => "Español(AL)",
    3   => "Italiano",
    4   => "Русский",
    5   => "Polski",
    6   => "Français" ,
    7   => "Deutsch",
    8   => "Português",
    9   => "日本語",
    10  => "한국어",
    11  => "简体中文",
    12  => "繁體中文",
];

$roles = [
    0 => "DPS",
    1 => "Tank",
    2 => "Support",
];

$platforms = [
    0 => "XBOX",
    1 => "PS4",
    2 => "PC",
];


// regex for username validation
$username_regex = "/^\p{L}[\p{L}0-9]{2,11}#[0-9]{4}$/";

// character encodings
$valid_encodings = [
    0 => "ISO-8859-16",
    1 => "7bit",
    2 => "EUC-CN",
    3 => "CP1251",
];

?>
