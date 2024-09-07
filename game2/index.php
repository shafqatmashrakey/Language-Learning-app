<?php
// Author: Ricardo Carneiro
session_start();

// Database connection parameters
$servername = "localhost"; 
$username = "root"; 
$password = "admin"; 
$dbname = "csc400"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if user is logged in
if (!isset($_SESSION['username'])) {
    $_SESSION['msg'] = "You must log in first";
    header('location: login.php');
    exit(); // Stop execution if user is not logged in
}

// Fetch user details from the database
$sql = "SELECT * FROM users WHERE username = '".$_SESSION['username']."'";
$result = mysqli_query($conn, $sql);

if (!$result || mysqli_num_rows($result) == 0) {
    echo "Error: User not found in the database.";
    exit(); // Stop execution if user not found in the database
}

$row = mysqli_fetch_assoc($result);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portuguese Quiz</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/nav.css">
</head>

<body>
    <!-- Navigation bar -->
    <nav class="navbar">
        <ul class="nav-list">
            <li><a href="../public/index.html">Go Home</a></li>
            <li><a href="index.php">Main Menu</a></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png" alt="Brazilian Flag" class="flag"></li>
            <li><a href="../logout.php">Logout</a></li>
        </ul>
    </nav>

    <div class="container">
        <?php
        // Display "You're logged in as 'username'"
        echo "<p>You're logged in as: <strong>" . $_SESSION['username'] . "</strong></p>";
        ?>
        <h1>Portuguese Quiz</h1>
        <div id="home-page">
            <button id="start-easy">Start Easy</button>
            <button id="start-medium">Start Medium</button>
            <button id="start-hard">Start Hard</button>
            <!-- Link to leaderboard page -->
            <a href="leaderboard.html"><button id="view-leaderboard">View Leaderboard</button></a>
        </div>
        <div id="quiz-page" style="display: none;">
            <h2 id="question"></h2>
            <div id="choices"></div>
            <div id="feedback"></div>
            <div id="score">Score: 0</div>
        </div>
        <div id="leaderboard-page" style="display: none;">
            <h2>Leaderboard</h2>
            <ol id="leaderboard-list"></ol>
        </div>
    </div>

    <script src="js/script.js"></script>
    <script defer src="https://app.fastbots.ai/embed.js" data-bot-id="clv223vgg002lu1bbwdi71fh8"></script>

</body>

</html>

<?php
// Close database connection
mysqli_close($conn);
?>
