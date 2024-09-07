<?php
// Connect to MySQL database
$db = mysqli_connect('localhost', 'root', 'admin', 'csc400');

// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}

// Initialize variables
$username = '';
$score = 0;
$message = '';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $data = json_decode(file_get_contents('php://input'), true);
    $username = mysqli_real_escape_string($db, $data['username']);
    $score = intval($data['score']);

    // Insert data into database
    $query = "INSERT INTO high_scores (username, score) VALUES ('$username', $score)";
    $result = mysqli_query($db, $query);

    if ($result) {
        $message = "Score saved successfully!";
    } else {
        $message = "Error: " . mysqli_error($db);
    }
}

// Close the database connection
mysqli_close($db);

echo $message;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submit Score</title>
</head>
<body>
    <h2>Submit Your Score</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        Username: <input type="text" name="username" value="<?php echo htmlspecialchars($username); ?>" required><br><br>
        Score: <input type="number" name="score" value="<?php echo htmlspecialchars($score); ?>" readonly><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
