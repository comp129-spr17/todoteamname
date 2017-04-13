/*
*
* Author: Kyle Cookerly
*
* This JS calls different filter configurations on the control data located on the 
* DB in the testData table, it compares the received data with verfied correct 
* expected data and prints the result out the JS console. To run the unit tests,
* load the unit_tests.html page and click "Run Unit Tests" button. View the JS console to 
* see the status of the tests.
*
* TODO: update to qunit js unit testing framework
*
*/

$(document).ready(function(){
    $("#run-tests-button").click(function() {
        console.log("Starting Tests...")
        run_tests();
    });
});

function run_tests() {
    // Test Server Filter
    var input_for_server_filter = [
        {
            name: "server_f",
            value: "NA",
        },
        {
            name: "language_f",
            value: "",
        },
        {
            name: "sr_f",
            value: "0,5000",
        },
        {
            name: "level_f",
            value: "0,2400",
        },
        {
            name: "role_f",
            value : "",
        },
        {
            name: "platform_f",
            value: ""
        },
        {
        	name: "mic_f",
        	value: "0"
        },
        {
        	name: "comp_f",
        	value: "0"
        },
        {
        	name: "mat_f",
        	value: "0"
        }
    ];

    
	$.post('/OWLFGtest/todoteamname/tests/filter_test.php', input_for_server_filter, function(testData) {
        console.log("\nTesting Server Filter...");

        // Server filter test expected results
		var expected_results = [{"0":"0000000000","1":"test1","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000000","Name":"test1","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000004","1":"test4","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000004","Name":"test4","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000007","1":"test7","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000007","Name":"test7","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000010","1":"tes10","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"600","12":"1","13":"2017-03-28 21:20:40","UID":"0000000010","Name":"tes10","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"600","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000013","1":"tes13","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000013","Name":"tes13","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"}];
        var actual_results = testData;
        
        if (JSON.stringify(actual_results) != JSON.stringify(expected_results)) {
            console.log("FAILED: Server Filter Test");
        }
        else {
            console.log("Passed: Server Filter Test");
        }
    }
    ,
    'json');

    // Test Language Filter
    var input_for_lang_filter = [
        {
            name: "server_f",
            value: "",
        },
        {
            name: "language_f",
            value: "Italiano",
        },
        {
            name: "sr_f",
            value: "0,5000",
        },
        {
            name: "level_f",
            value: "0,2400",
        },
        {
            name: "role_f",
            value : "",
        },
        {
            name: "platform_f",
            value: ""
        },
        {
        	name: "mic_f",
        	value: "0"
        },
        {
        	name: "comp_f",
        	value: "0"
        },
        {
        	name: "mat_f",
        	value: "0"
        }
    ];
    
    $.post('/OWLFGtest/todoteamname/tests/filter_test.php', input_for_lang_filter, function(testData) {
        console.log("\nTesting Language Filter...");

        // Language filter test expected results
		var expected_results = [{"0":"0000000001","1":"test2","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000001","Name":"test2","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000005","1":"test5","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000005","Name":"test5","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000009","1":"test9","2":"test","3":"AS","4":"PS4","5":"1","6":"Italiano","7":"1500","8":"1","9":"DPS","10":"0","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000009","Name":"test9","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"Italiano","SeasonRank":"1500","HasMicrophone":"1","Role":"DPS","IsMature":"0","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000012","1":"tes12","2":"test","3":"AS","4":"PS4","5":"1","6":"Italiano","7":"1200","8":"1","9":"DPS","10":"1","11":"255","12":"0","13":"2017-03-28 21:46:40","UID":"0000000012","Name":"tes12","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"Italiano","SeasonRank":"1200","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"0","creationTime":"2017-03-28 21:46:40"},{"0":"0000000014","1":"tes14","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"2000","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000014","Name":"tes14","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"2000","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"}];
        var actual_results = testData;
        
        if (JSON.stringify(actual_results) != JSON.stringify(expected_results)) {
            console.log("FAILED: Language Filter Test");
        }
        else {
            console.log("Passed: Language Filter Test");
        }
    }
    ,
    'json');

    // Test SR Filter
    var input_for_sr_filter = [
        {
            name: "server_f",
            value: "",
        },
        {
            name: "language_f",
            value: "",
        },
        {
            name: "sr_f",
            value: "0,500",
        },
        {
            name: "level_f",
            value: "0,2400",
        },
        {
            name: "role_f",
            value : "",
        },
        {
            name: "platform_f",
            value: ""
        },
        {
        	name: "mic_f",
        	value: "0"
        },
        {
        	name: "comp_f",
        	value: "0"
        },
        {
        	name: "mat_f",
        	value: "0"
        }
    ];
    
    $.post('/OWLFGtest/todoteamname/tests/filter_test.php', input_for_sr_filter, function(testData) {
        console.log("\nTesting SR Filter...");

        // SR filter test expected results
		var expected_results = [{"0":"0000000000","1":"test1","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000000","Name":"test1","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000001","1":"test2","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000001","Name":"test2","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000002","1":"test3","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"100","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000002","Name":"test3","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"100","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000004","1":"test4","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000004","Name":"test4","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000005","1":"test5","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000005","Name":"test5","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000006","1":"test6","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"109","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000006","Name":"test6","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"109","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000007","1":"test7","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000007","Name":"test7","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000008","1":"test8","2":"test","3":"EU","4":"PC","5":"1","6":"English","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000008","Name":"test8","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"English","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000010","1":"tes10","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"600","12":"1","13":"2017-03-28 21:20:40","UID":"0000000010","Name":"tes10","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"600","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000013","1":"tes13","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000013","Name":"tes13","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"}];
        var actual_results = testData;
        
        if (JSON.stringify(actual_results) != JSON.stringify(expected_results)) {
            console.log("FAILED: SR Filter Test");
        }
        else {
            console.log("Passed: SR Filter Test");
        }
    }
    ,
    'json');

    // Test Level Filter
    var input_for_lvl_filter = [
        {
            name: "server_f",
            value: "",
        },
        {
            name: "language_f",
            value: "",
        },
        {
            name: "sr_f",
            value: "0,5000",
        },
        {
            name: "level_f",
            value: "0,250",
        },
        {
            name: "role_f",
            value : "",
        },
        {
            name: "platform_f",
            value: ""
        },
        {
        	name: "mic_f",
        	value: "0"
        },
        {
        	name: "comp_f",
        	value: "0"
        },
        {
        	name: "mat_f",
        	value: "0"
        }
    ];
    
    $.post('/OWLFGtest/todoteamname/tests/filter_test.php', input_for_lvl_filter, function(testData) {
        console.log("\nTesting Level Filter...");

        // Level filter test expected results
		var expected_results = [{"0":"0000000001","1":"test2","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000001","Name":"test2","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000005","1":"test5","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000005","Name":"test5","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000008","1":"test8","2":"test","3":"EU","4":"PC","5":"1","6":"English","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000008","Name":"test8","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"English","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000014","1":"tes14","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"2000","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000014","Name":"tes14","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"2000","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"}];
        var actual_results = testData;
        
        if (JSON.stringify(actual_results) != JSON.stringify(expected_results)) {
            console.log("FAILED: Level Filter Test");
        }
        else {
            console.log("Passed: Level Filter Test");
        }
    }
    ,
    'json');

    // Test Role Filter
    var input_for_role_filter = [
        {
            name: "server_f",
            value: "",
        },
        {
            name: "language_f",
            value: "",
        },
        {
            name: "sr_f",
            value: "0,5000",
        },
        {
            name: "level_f",
            value: "0,2400",
        },
        {
            name: "role_f",
            value : "Tank",
        },
        {
            name: "platform_f",
            value: ""
        },
        {
        	name: "mic_f",
        	value: "0"
        },
        {
        	name: "comp_f",
        	value: "0"
        },
        {
        	name: "mat_f",
        	value: "0"
        }
    ];
    
    $.post('/OWLFGtest/todoteamname/tests/filter_test.php', input_for_role_filter, function(testData) {
        console.log("\nTesting Role Filter...");

        // Role filter test expected results
		var expected_results = [{"0":"0000000000","1":"test1","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000000","Name":"test1","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000004","1":"test4","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000004","Name":"test4","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000007","1":"test7","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000007","Name":"test7","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000010","1":"tes10","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"600","12":"1","13":"2017-03-28 21:20:40","UID":"0000000010","Name":"tes10","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"600","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000013","1":"tes13","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000013","Name":"tes13","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"}];
        var actual_results = testData;
        
        if (JSON.stringify(actual_results) != JSON.stringify(expected_results)) {
            console.log("FAILED: Role Filter Test");
        }
        else {
            console.log("Passed: Role Filter Test");
        }
    }
    ,
    'json');

    // Test Platform Filter
    var input_for_platform_filter = [
        {
            name: "server_f",
            value: "",
        },
        {
            name: "language_f",
            value: "",
        },
        {
            name: "sr_f",
            value: "0,5000",
        },
        {
            name: "level_f",
            value: "0,2400",
        },
        {
            name: "role_f",
            value : "",
        },
        {
            name: "platform_f",
            value: "PC"
        },
        {
        	name: "mic_f",
        	value: "0"
        },
        {
        	name: "comp_f",
        	value: "0"
        },
        {
        	name: "mat_f",
        	value: "0"
        }
    ];
    
    $.post('/OWLFGtest/todoteamname/tests/filter_test.php', input_for_platform_filter, function(testData) {
        console.log("\nTesting Platform Filter...");

        // Platform filter test expected results
		var expected_results = [{"0":"0000000001","1":"test2","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000001","Name":"test2","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000005","1":"test5","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000005","Name":"test5","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000008","1":"test8","2":"test","3":"EU","4":"PC","5":"1","6":"English","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000008","Name":"test8","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"English","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000011","1":"tes11","2":"test","3":"EU","4":"PC","5":"1","6":"English","7":"2000","8":"0","9":"SUPPORT","10":"1","11":"734","12":"1","13":"2017-03-28 21:48:40","UID":"0000000011","Name":"tes11","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"English","SeasonRank":"2000","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"734","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000014","1":"tes14","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"2000","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000014","Name":"tes14","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"2000","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"}];
        var actual_results = testData;
        
        if (JSON.stringify(actual_results) != JSON.stringify(expected_results)) {
            console.log("FAILED: Platform Filter Test");
        }
        else {
            console.log("Passed: Platform Filter Test");
        }
    }
    ,
    'json');

    // Test No Filter
    var input_for_no_filter = [
        {
            name: "server_f",
            value: "",
        },
        {
            name: "language_f",
            value: "",
        },
        {
            name: "sr_f",
            value: "0,5000",
        },
        {
            name: "level_f",
            value: "0,2400",
        },
        {
            name: "role_f",
            value : "",
        },
        {
            name: "platform_f",
            value: ""
        },
        {
        	name: "mic_f",
        	value: "0"
        },
        {
        	name: "comp_f",
        	value: "0"
        },
        {
        	name: "mat_f",
        	value: "0"
        }
    ];
    
    $.post('/OWLFGtest/todoteamname/tests/filter_test.php', input_for_no_filter, function(testData) {
        console.log("\nTesting No Filter...");

        // No filter test expected results
		var expected_results = [{"0":"0000000000","1":"test1","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000000","Name":"test1","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000001","1":"test2","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000001","Name":"test2","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000002","1":"test3","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"100","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000002","Name":"test3","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"100","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000004","1":"test4","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000004","Name":"test4","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000005","1":"test5","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000005","Name":"test5","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000006","1":"test6","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"109","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000006","Name":"test6","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"109","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000007","1":"test7","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000007","Name":"test7","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000008","1":"test8","2":"test","3":"EU","4":"PC","5":"1","6":"English","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000008","Name":"test8","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"English","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000009","1":"test9","2":"test","3":"AS","4":"PS4","5":"1","6":"Italiano","7":"1500","8":"1","9":"DPS","10":"0","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000009","Name":"test9","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"Italiano","SeasonRank":"1500","HasMicrophone":"1","Role":"DPS","IsMature":"0","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000010","1":"tes10","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"600","12":"1","13":"2017-03-28 21:20:40","UID":"0000000010","Name":"tes10","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"600","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000011","1":"tes11","2":"test","3":"EU","4":"PC","5":"1","6":"English","7":"2000","8":"0","9":"SUPPORT","10":"1","11":"734","12":"1","13":"2017-03-28 21:48:40","UID":"0000000011","Name":"tes11","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"English","SeasonRank":"2000","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"734","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000012","1":"tes12","2":"test","3":"AS","4":"PS4","5":"1","6":"Italiano","7":"1200","8":"1","9":"DPS","10":"1","11":"255","12":"0","13":"2017-03-28 21:46:40","UID":"0000000012","Name":"tes12","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"Italiano","SeasonRank":"1200","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"0","creationTime":"2017-03-28 21:46:40"},{"0":"0000000013","1":"tes13","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000013","Name":"tes13","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000014","1":"tes14","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"2000","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000014","Name":"tes14","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"2000","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000015","1":"tes15","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"1200","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000015","Name":"tes15","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"1200","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"}];
        var actual_results = testData;
        
        if (JSON.stringify(actual_results) != JSON.stringify(expected_results)) {
            console.log("FAILED: No Filter Test");
        }
        else {
            console.log("Passed: No Filter Test");
        }
    }
    ,
    'json');

    // Test Server and Language Filter together
    var input_for_servlang_filter = [
        {
            name: "server_f",
            value: "NA",
        },
        {
            name: "language_f",
            value: "English",
        },
        {
            name: "sr_f",
            value: "0,5000",
        },
        {
            name: "level_f",
            value: "0,2400",
        },
        {
            name: "role_f",
            value : "",
        },
        {
            name: "platform_f",
            value: ""
        },
        {
        	name: "mic_f",
        	value: "0"
        },
        {
        	name: "comp_f",
        	value: "0"
        },
        {
        	name: "mat_f",
        	value: "0"
        }
    ];
    
    $.post('/OWLFGtest/todoteamname/tests/filter_test.php', input_for_servlang_filter, function(testData) {
        console.log("\nTesting Server and Language Filter...");

        // Server + Language filter test expected results
		var expected_results = [{"0":"0000000000","1":"test1","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000000","Name":"test1","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000004","1":"test4","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000004","Name":"test4","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000007","1":"test7","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000007","Name":"test7","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000010","1":"tes10","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"600","12":"1","13":"2017-03-28 21:20:40","UID":"0000000010","Name":"tes10","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"600","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000013","1":"tes13","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000013","Name":"tes13","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"}];
        var actual_results = testData;
        
        if (JSON.stringify(actual_results) != JSON.stringify(expected_results)) {
            console.log("FAILED: Server and Language Filter Test");
        }
        else {
            console.log("Passed: Server and Language Filter Test");
        }
    }
    ,
    'json');

    // Test Micro Filter
    var example_input = [
        {
            name: "server_f",
            value: "",
        },
        {
            name: "language_f",
            value: "",
        },
        {
            name: "sr_f",
            value: "0,5000",
        },
        {
            name: "level_f",
            value: "0,2400",
        },
        {
            name: "role_f",
            value : "",
        },
        {
            name: "platform_f",
            value: ""
        },
        {
            name: "mic_f",
            value: "1"
        },
        {
            name: "comp_f",
            value: "0"
        },
        {
            name: "mat_f",
            value: "0"
        }
    ];

    $.post('/OWLFGtest/todoteamname/tests/filter_test.php', input_for_servlang_filter, function(testData) {
        console.log("\nTesting Mic Filter...");

        // Mic filter test expected results
		var expected_results = [{"0":"0000000002","1":"test3","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"100","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000002","Name":"test3","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"100","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000006","1":"test6","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"109","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000006","Name":"test6","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"109","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000009","1":"test9","2":"test","3":"AS","4":"PS4","5":"1","6":"Italiano","7":"1500","8":"1","9":"DPS","10":"0","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000009","Name":"test9","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"Italiano","SeasonRank":"1500","HasMicrophone":"1","Role":"DPS","IsMature":"0","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000012","1":"tes12","2":"test","3":"AS","4":"PS4","5":"1","6":"Italiano","7":"1200","8":"1","9":"DPS","10":"1","11":"255","12":"0","13":"2017-03-28 21:46:40","UID":"0000000012","Name":"tes12","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"Italiano","SeasonRank":"1200","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"0","creationTime":"2017-03-28 21:46:40"},{"0":"0000000015","1":"tes15","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"1200","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000015","Name":"tes15","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"1200","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000000","1":"test1","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000000","Name":"test1","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000004","1":"test4","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000004","Name":"test4","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000007","1":"test7","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000007","Name":"test7","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000010","1":"tes10","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"600","12":"1","13":"2017-03-28 21:20:40","UID":"0000000010","Name":"tes10","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"600","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000013","1":"tes13","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000013","Name":"tes13","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"}];
		var actual_results = testData;
        
        if (JSON.stringify(actual_results) != JSON.stringify(expected_results)) {
            console.log("FAILED: Mic Filter Test");
        }
        else {
            console.log("Passed: Mic Filter Test");
        }
    }
    ,
    'json');

	//test competitive filter
	var example_input = [
        {
            name: "server_f",
            value: "",
        },
        {
            name: "language_f",
            value: "",
        },
        {
            name: "sr_f",
            value: "0,5000",
        },
        {
            name: "level_f",
            value: "0,2400",
        },
        {
            name: "role_f",
            value : "",
        },
        {
            name: "platform_f",
            value: ""
        },
        {
            name: "mic_f",
            value: "0"
        },
        {
            name: "comp_f",
            value: "1"
        },
        {
            name: "mat_f",
            value: "0"
        }
    ];

    $.post('/OWLFGtest/todoteamname/tests/filter_test.php', input_for_servlang_filter, function(testData) {
        console.log("\nTesting Competitive Filter...");

        // Competitive filter test expected results
		var expected_results = [{"0":"0000000001","1":"test2","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000001","Name":"test2","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000005","1":"test5","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000005","Name":"test5","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000008","1":"test8","2":"test","3":"EU","4":"PC","5":"1","6":"English","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000008","Name":"test8","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"English","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000011","1":"tes11","2":"test","3":"EU","4":"PC","5":"1","6":"English","7":"2000","8":"0","9":"SUPPORT","10":"1","11":"734","12":"1","13":"2017-03-28 21:48:40","UID":"0000000011","Name":"tes11","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"English","SeasonRank":"2000","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"734","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000014","1":"tes14","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"2000","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000014","Name":"tes14","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"2000","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000002","1":"test3","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"100","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000002","Name":"test3","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"100","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000006","1":"test6","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"109","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000006","Name":"test6","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"109","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000009","1":"test9","2":"test","3":"AS","4":"PS4","5":"1","6":"Italiano","7":"1500","8":"1","9":"DPS","10":"0","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000009","Name":"test9","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"Italiano","SeasonRank":"1500","HasMicrophone":"1","Role":"DPS","IsMature":"0","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000015","1":"tes15","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"1200","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000015","Name":"tes15","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"1200","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000000","1":"test1","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000000","Name":"test1","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000004","1":"test4","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000004","Name":"test4","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000007","1":"test7","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000007","Name":"test7","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000010","1":"tes10","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"600","12":"1","13":"2017-03-28 21:20:40","UID":"0000000010","Name":"tes10","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"600","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000013","1":"tes13","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000013","Name":"tes13","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"}];
		var actual_results = testData;
        
        if (JSON.stringify(actual_results) != JSON.stringify(expected_results)) {
            console.log("FAILED: Competitive Filter Test");
        }
        else {
            console.log("Passed: Competitive Filter Test");
        }
    }
    ,
    'json');

	//test mature filter
	var example_input = [
        {
            name: "server_f",
            value: "",
        },
        {
            name: "language_f",
            value: "",
        },
        {
            name: "sr_f",
            value: "0,5000",
        },
        {
            name: "level_f",
            value: "0,2400",
        },
        {
            name: "role_f",
            value : "",
        },
        {
            name: "platform_f",
            value: ""
        },
        {
            name: "mic_f",
            value: "0"
        },
        {
            name: "comp_f",
            value: "0"
        },
        {
            name: "mat_f",
            value: "1"
        }
    ];

    $.post('/OWLFGtest/todoteamname/tests/filter_test.php', input_for_servlang_filter, function(testData) {
        console.log("\nTesting Mature Filter...");

		// Mature filter test expected results
		var expected_results = [{"0":"0000000001","1":"test2","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000001","Name":"test2","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000005","1":"test5","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000005","Name":"test5","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000008","1":"test8","2":"test","3":"EU","4":"PC","5":"1","6":"English","7":"500","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000008","Name":"test8","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"English","SeasonRank":"500","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000011","1":"tes11","2":"test","3":"EU","4":"PC","5":"1","6":"English","7":"2000","8":"0","9":"SUPPORT","10":"1","11":"734","12":"1","13":"2017-03-28 21:48:40","UID":"0000000011","Name":"tes11","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"English","SeasonRank":"2000","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"734","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000014","1":"tes14","2":"test","3":"EU","4":"PC","5":"1","6":"Italiano","7":"2000","8":"0","9":"SUPPORT","10":"1","11":"34","12":"1","13":"2017-03-28 21:48:40","UID":"0000000014","Name":"tes14","Info":"test","Server":"EU","Platform":"PC","GroupSize":"1","Language":"Italiano","SeasonRank":"2000","HasMicrophone":"0","Role":"SUPPORT","IsMature":"1","Level":"34","IsCompetitive":"1","creationTime":"2017-03-28 21:48:40"},{"0":"0000000002","1":"test3","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"100","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000002","Name":"test3","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"100","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000006","1":"test6","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"109","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000006","Name":"test6","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"109","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000012","1":"tes12","2":"test","3":"AS","4":"PS4","5":"1","6":"Italiano","7":"1200","8":"1","9":"DPS","10":"1","11":"255","12":"0","13":"2017-03-28 21:46:40","UID":"0000000012","Name":"tes12","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"Italiano","SeasonRank":"1200","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"0","creationTime":"2017-03-28 21:46:40"},{"0":"0000000015","1":"tes15","2":"test","3":"AS","4":"PS4","5":"1","6":"English","7":"1200","8":"1","9":"DPS","10":"1","11":"255","12":"1","13":"2017-03-28 21:46:40","UID":"0000000015","Name":"tes15","Info":"test","Server":"AS","Platform":"PS4","GroupSize":"1","Language":"English","SeasonRank":"1200","HasMicrophone":"1","Role":"DPS","IsMature":"1","Level":"255","IsCompetitive":"1","creationTime":"2017-03-28 21:46:40"},{"0":"0000000000","1":"test1","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000000","Name":"test1","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000004","1":"test4","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000004","Name":"test4","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000007","1":"test7","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000007","Name":"test7","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000010","1":"tes10","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"600","12":"1","13":"2017-03-28 21:20:40","UID":"0000000010","Name":"tes10","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"600","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"},{"0":"0000000013","1":"tes13","2":"test","3":"NA","4":"XBOX","5":"1","6":"English","7":"200","8":"1","9":"TANK","10":"1","11":"400","12":"1","13":"2017-03-28 21:20:40","UID":"0000000013","Name":"tes13","Info":"test","Server":"NA","Platform":"XBOX","GroupSize":"1","Language":"English","SeasonRank":"200","HasMicrophone":"1","Role":"TANK","IsMature":"1","Level":"400","IsCompetitive":"1","creationTime":"2017-03-28 21:20:40"}];
		var actual_results = testData;
        
        if (JSON.stringify(actual_results) != JSON.stringify(expected_results)) {
            console.log("FAILED: Mature Filter Test");
        }
        else {
            console.log("Passed: Mature Filter Test");
        }
    }
    ,
    'json');







};
