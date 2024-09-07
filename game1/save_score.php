<?php
// Connect to the database
$db = mysqli_connect('localhost', 'root', 'admin', 'csc400');

// Check connection
if (!$db) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if username is set in the URL
if(isset($_GET['username'])) {
    $username = $_GET['username'];

    // Check if username already exists in the database
    $check_query = "SELECT * FROM progress WHERE username = '$username'";
    $result = mysqli_query($db, $check_query);
    if(mysqli_num_rows($result) > 0) {
        // If username exists, fetch the current count and increment it
        $row = mysqli_fetch_assoc($result);
        $count = $row['count'] + 1;
        // Update the count for the existing username
        $update_query = "UPDATE progress SET count = '$count' WHERE username = '$username'";
        mysqli_query($db, $update_query);
    } else {
        // If username doesn't exist, insert it with count as 1
        $insert_query = "INSERT INTO progress (username, count) VALUES ('$username', 1)";
        mysqli_query($db, $insert_query);
        $count = 1;
    }
} else {
    $count = 0;
}

// Display username and count
echo "Username: $username <br>";
echo "Count: $count";
?>

<!-- HTML form to input username -->
<form method="GET" action="">
    <label>Enter Username: </label>
    <input type="text" name="username">
    <button type="submit">Submit</button>
</form>
