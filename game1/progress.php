<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progress Page</title>
    <!-- Include provided stylesheet -->
    <link rel="stylesheet" href="https://classless.de/classless.css">
    <style>
        /* Style for the home button */
        .home-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            font-size: 16px;
            cursor: pointer;
        }

        .home-button:hover {
            background-color: #0056b3;
        }

        /* Style for the container */
        .container {
            background-image: url('./bangla.jpg');
            background-color: green;
            background-size: cover;
            background-position: cover;
            height: 100vh;
        
            padding: 100px;
           
        }
    </style>
</head>

<body>
    <div class="container">
        <?php
        // Initialize username variable
        $username = "";

        // Connect to the database
        $db = mysqli_connect('localhost', 'root', 'admin', 'csc400');

        // Check connection
        if (!$db) {
            die("Connection failed: " . mysqli_connect_error());
        }

       
        if (isset($_GET['username'])) {
            $username = $_GET['username'];

            
            $check_query = "SELECT * FROM progress WHERE username = '$username'";
            $result = mysqli_query($db, $check_query);
            if (mysqli_num_rows($result) > 0) {
                
                $row = mysqli_fetch_assoc($result);
                $count = $row['count'] + 1;
                
                $update_query = "UPDATE progress SET count = '$count' WHERE username = '$username'";
                mysqli_query($db, $update_query);
            } else {
             
                $insert_query = "INSERT INTO progress (username, count) VALUES ('$username', 1)";
                mysqli_query($db, $insert_query);
                $count = 1;
            }
        } else {
            $count = 0;
        }

        // Calculate progress percentage
        $max_count = 10; // Set maximum count for full progress (adjust as needed)
        $progress_percentage = ($count / $max_count) * 100;

        // Display username, count, and progress bar
        echo "<p>Username: $username</p>";
        echo "<p>Count: $count</p>";
        echo "<progress value='$count' max='$max_count'></progress>";
        ?>

        <!-- HTML form to input username -->
        <form method="GET" action="">
            <label>Enter Username: </label>
            <input type="text" name="username">
            <button type="submit">Submit</button>
        </form>

        <!-- Home button linking to indexgame1.html -->
        <a href="indexgame1.html" class="home-button">Home</a>
    </div>
</body>

</html>