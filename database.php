<!-- database.php -->
<?php

$mysqli = new mysqli('localhost', 'user', 'password', 'todoapp');

if($mysqli->connect_errno) {
	printf("Connection Failed: %s\n", $mysqli->connect_error);
	exit;
}
?>