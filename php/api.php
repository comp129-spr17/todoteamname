<?php

    //header('Content-type: text/json');
    //if(isset($_POST['username']) && !empty($_POST['username'])){
        //echo $_POST['str'];
        // $file = fopen("test.txt","w");
        // echo fwrite($file,"hello");
        // fclose($file);
        //$bnetName = "SquarPlanet-1416";
        //TODO: get username by POST from api.js

        //$bnetName = $_POST['str'];
        echo $_POST['str'];
        
        // $file = fopen("/opt/lampp/htdocs/OverwatchLFG/test.txt","w");

        // echo fwrite($file,$bnetName);
        // fclose($file);
        //system("whoami");
        
        //create shell cmd to run script with bnetName as Arg
        $cmd = escapeshellcmd("sudo -u ubuntu python /opt/lampp/htdocs/OverwatchLFG/Python/getUserFromApi.py ");
        //$cmd = escapeshellcmd("sudo echo hello > ~/output.txt");
        
        $cmd .= $bnetName;

        //run script with cmd
        $output = shell_exec($cmd);
        //echo $output;
        //substring result and check if it is an error
        $possibleError = substr($output, 2, 5);
        //echo $_POST['str'];
        if (strcmp($possibleError, "error") == 0)
            echo "\nUsername " . $bnetName . " was not found! Please try again.\n";
        else
            //if not we echo the output(for now)
            //echo json_encode($output);
            echo $output;
    
    /*
    }else{
        $bnetName = $_POST['username'];
        echo $bnetName;
        //echo "Invalid username!";
    }
    */

    
?>