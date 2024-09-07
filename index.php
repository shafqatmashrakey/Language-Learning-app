<?php 
session_start(); 

if (!isset($_SESSION['username'])) {
    $_SESSION['msg'] = "You must log in first";
    header('location: login.php');
}
if (isset($_GET['logout'])) {
    session_destroy();
    unset($_SESSION['username']);
    header("location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/css/register.css">
    <link href="assets/css/indexcard.css" rel="stylesheet">
    <title>User Dashboard</title>
    <style>
        .btn {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 12px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .btn:hover {
            background-color: #45a049;
        }

        .btn-danger {
            background-color: #f44336;
        }

        .btn-danger:hover {
            background-color: #e53935;
        }

        .container {
            margin: 0 auto;
            max-width: 1200px;
            
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand" href="#"></a>
            <ul class="nav-links">
                <li><a href="index.php">Home</a></li>
                <li><a href="public/team.html">Team</a></li>
                <li><a href="public/about.html">About</a></li>
                <li><a href="public/form.html">Contact</a></li>
                <li><a href="login.php">Login</a></li>
            </ul>
        </div>
    </nav>

    <div class="content">
        <!-- Logged in user information -->
        <?php if (isset($_SESSION['username'])) : ?>
            <div>
                <p>Welcome <strong><?php echo $_SESSION['username']; ?></strong>, choose your destiny!</p>
            </div>

            <!-- User Dashboard Content -->
            <main>
                <section class="articles">
                    <article>
                        <div class="article-wrapper">
                            <figure>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" alt="Bangladesh Flag" />
                            </figure>
                            <div class="article-body">
                                <h2>Game 1</h2>
                                <p>
                                    Introducing the Bangla Quiz Game, an interactive and educational experience designed to help users learn common Bengali phrases while having fun!
                                </p>
                                <p class="hidden">
                                    In this game, users are presented with a paragraph containing Bangla phrases along with their English meanings. The goal is to match each Bangla phrase with its correct English translation. Once the quiz is completed, users have the option to save their name along with their score, allowing them to track their progress and compete with others on the high score table.
                                </p>
                                <a href="game1/indexgame1.html" class="btn">Play Game 1</a>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div class="article-wrapper">
                            <figure>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png" alt="Brazil Flag" />
                            </figure>
                            <div class="article-body">
                                <h2>Game 2</h2>
                                <p>
                                    Introducing the Portuguese Quiz Adventure! Dive into an interactive journey of language discovery with this engaging quiz game. Test your knowledge of English-to-Portuguese translations as you navigate through a series of questions.
                                </p>
                                <p class="hidden">
                                    With each query covering a diverse array of topics, you'll find yourself immersed in the richness of the Portuguese language. After each round, save your name and score to track progress and compete with others on the leaderboard.
                                </p>
                                <a href="game2/index.php" class="btn">Play Game 2</a>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div class="article-wrapper">
                            <figure>
                                <img src="https://cdn.countryflags.com/thumbs/spain/flag-800.png" alt="Spain Flag" />
                            </figure>
                            <div class="article-body">
                                <h2>Game 3</h2>
                                <p>
                                    Presenting the Spanish Word Unscrambler - an exciting twist on language learning! Immerse yourself in the challenge of deciphering scrambled Spanish words. 
                                </p>
                                <p class="hidden">
                                    Track your progress as you unscramble your way through the game! Compete with others or challenge yourself to climb the ranks on our leaderboard.
                                </p>
                                <a href="game3/game3.html" class="btn">Play Game 3</a>
                            </div>
                        </div>
                    </article>
                </section>
            </main>

            <div>
                <a href="useraccount.php" class="btn">Customize Your Profile</a>
            </div>
            <div>
                <a href="public/form.html" class="btn">Contact Us</a>
            </div>
            
            <p><a href="index.php?logout='1'" class="btn btn-danger">Logout</a></p>
        <?php endif ?>
    </div>

    <footer>
        <div class="container">
            <h5 class="footer-text">Copyright © Vasha/Idioma</h5>
        </div>
    </footer>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const readMoreLinks = document.querySelectorAll('.read-more');

            readMoreLinks.forEach(link => {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    const hiddenContent = this.previousElementSibling;
                    hiddenContent.classList.toggle('hidden');
                    if (hiddenContent.classList.contains('hidden')) {
                        this.textContent = 'Read more';
                    } else {
                        this.textContent = 'Read less';
                    }
                });
            });
        });
    </script>
</body>
</html>
