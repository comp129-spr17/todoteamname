<?php
        //api.php created by Nathan Stowe
        //for the OverwatchLFG COMP55 Project

        //This script takes in a username from api.js, and uses it to run getUserFromApi.py

        //used to find who is running these script so we can give permission, leave disabled
        //system("whoami");

        //get username from api.js
        $bnetName = $_POST['str'];
        
        //create shell cmd to run script with bnetName as Arg(machine specific)
        $cmd = escapeshellcmd("sudo -u ubuntu python /opt/lampp/htdocs/OverwatchLFG/Python/getUserFromApi.py ");

        //append username as a argument
        $cmd .= $bnetName;

        //run script with cmd
        $output = shell_exec($cmd);

        //if the api returns an error:
        if(strcmp($output, "error\n") == 0)
            echo "\nUsername " . $bnetName . " was not found! Please try again.\n";
        else
            //if not we echo the output(for now)
            echo $output;
?>