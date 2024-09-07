document.addEventListener("DOMContentLoaded", function () {
    const flashcards = document.querySelectorAll('.flashcard');
    let currentFlashcardIndex = 0;
    let level = 'beginner';
    let currentLevel = level;

    function showFlashcards(level) {
        console.log("Showing flashcards for level:", level);

        if (level !== currentLevel) {
            currentFlashcardIndex = 0;
            currentLevel = level;
        }
        const allFlashcards = document.querySelectorAll('.flashcard');
        allFlashcards.forEach(flashcard => {
            flashcard.classList.remove('visible');
        });

        const flashcardsContainer = document.querySelector(`.${level}-flashcards`);
        const flashcard = flashcardsContainer.querySelectorAll('.flashcard');
            
        flashcard[currentFlashcardIndex].classList.add('visible');
    }

    showFlashcards('beginner');

    flashcards.forEach(flashcard => {
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flip');
        });
    });

    const beginnerButton = document.getElementById('beginner-button');
    const intermediateButton = document.getElementById('intermediate-button');
    const advancedButton = document.getElementById('advanced-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    beginnerButton.addEventListener('click', function () {
        level = 'beginner';
        showFlashcards(level);
    });

    intermediateButton.addEventListener('click', function () {
        level = 'intermediate';
        showFlashcards(level);
    });

    advancedButton.addEventListener('click', function () {
        level = 'advanced';
        showFlashcards(level);
    });

    prevButton.addEventListener('click', function () {
        console.log("Previous button clicked");
        currentFlashcardIndex--;
        if (currentFlashcardIndex < 0) {
            currentFlashcardIndex = 0;
        }
        showFlashcards(level);
    });

    nextButton.addEventListener('click', function () {
        console.log("Next button clicked");
        const flashcardsContainer = document.querySelector(`.${level}-flashcards`);
        const flashcardCount = flashcardsContainer.querySelectorAll('.flashcard').length;

        console.log("Current index before increment:", currentFlashcardIndex);
        currentFlashcardIndex++;
        console.log("Current index after increment:", currentFlashcardIndex);
        if (currentFlashcardIndex >= flashcardCount) {
            currentFlashcardIndex = 0;
        }

        console.log("Current index after reset:", currentFlashcardIndex);
        showFlashcards(level);
    });
});