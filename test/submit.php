<?php
header("content-type: text/plain");
//print_r($_SERVER);

echo $_SERVER['REQUEST_METHOD'] . " method received\n";

echo "Input found: \n";

$age_range[0] = "0 - 4";
$age_range[1] = "5 - 12";
$age_range[2] = "13 - 19";
$age_range[3] = "20 - 29";
$age_range[4] = "30 - 39";
$age_range[5] = "40 - 49";
$age_range[6] = "50 - 59";
$age_range[7] = "60 - 69";
$age_range[8] = "70 - 79";
$age_range[9] = "80 - above";

echo "    > Name: " . $_REQUEST["name"] . "\n";
echo "    > Age Range: " . $age_range[$_REQUEST["age_range"] - 1] . "\n";


