<?php
header("content-type: text/plain");
//print_r($_SERVER);

echo $_SERVER['REQUEST_METHOD'] . " method received\n";

echo "Input found: \n";

if($_SERVER['REQUEST_METHOD'] == "GET") {
	print_r($_GET);
} else {
	$rawdata = file_get_contents("php://input");
	echo $rawdata . "\n"; 
}
