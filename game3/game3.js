document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('beginnerBtn').addEventListener('click', function () {
        chooseLevel('beginner');
    });
    document.getElementById('intermediateBtn').addEventListener('click', function () {
        chooseLevel('intermediate');
    });
    document.getElementById('advancedBtn').addEventListener('click', function () {
        chooseLevel('advanced');
    });
});

function chooseLevel(level) {
    window.location.href = `game3.html?level=${level}`;
    document.getElementById('difficulty').innerText = level.charAt(0).toUpperCase() + level.slice(1);
    document.getElementById('score').innerText = '0';
    score = 0;
    switch (level) {
        case 'beginner':
            words = beginnerWords;
            break;
        case 'intermediate':
            words = intermediateWords;
            break;
        case 'advanced':
            words = advancedWords;
            break;
        default:
            words = beginnerWords;
    }
    createWord();
}


const beginnerWords = ['hola', 'adios', 'gracias', 'familia', 'frio', 'hoy', 'gato', 'coche', 'sol', 'libro'];
const intermediateWords = ['comida', 'viaje', 'calendario', 'edificio', 'jardin', 'ahora', 'semana', 'dibujar', 'avion', 'deportes'];
const advancedWords = ['felicitaciones', 'bienvenido', 'fotografia', 'itinerario', 'anaranjado', 'equipaje', 'zoologico', 'estaciones', 'biblioteca', 'aeropuerto'];

let words = beginnerWords;



let wordDisplay;
let mixed;
let score = 0;


let wordsDisplayedCount = 0;

document.addEventListener('DOMContentLoaded', function () {
    createWord();
});

function createWord() {
    wordsDisplayedCount++;
    if (wordsDisplayedCount >= 4) {
        window.location.href = './savegame3.html';
        return;
    }

    wordDisplay = Math.floor(Math.random() * words.length);
    const word = words[wordDisplay];
    mixed = jumble(word);
    document.getElementById('word').innerText = mixed;
    document.getElementById('userInput').value = '';
    document.getElementById('message').innerText = '';
}

function jumble(word) {
    const array = word.split('')
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

function findWord() {
    const predict = document.getElementById('userInput').value.toLowerCase();
    const primaryWord = words[wordDisplay];

    if (predict === primaryWord) {
        document.getElementById('message').innerText = 'Correct';
        score++;
        document.getElementById('score').innerText = score;

        localStorage.setItem('mostRecentScore', score);
    } else {
        document.getElementById('message').innerText = 'Incorrect';
    }
}