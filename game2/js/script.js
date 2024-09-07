// Author: Ricardo Carneiro
// Define questions for each difficulty level

const easyQuestions = [
    {
        question: "What does 'obrigado' mean in English?",
        choices: ["Hello", "Goodbye", "Thank you", "Please"],
        correctAnswer: "Thank you"
    },
    {
        question: "How do you say 'bom dia' in English?",
        choices: ["Good morning", "Goodnight", "Good afternoon", "Goodbye"],
        correctAnswer: "Good morning"
    },
    {
        question: "What is the translation of 'água' in English?",
        choices: ["Fire", "Water", "Air", "Earth"],
        correctAnswer: "Water"
    },
	{
        question: "What does 'celular' mean in English?",
        choices: ["Television", "Computer", "Telephone", "Radio"],
        correctAnswer: "Cell phone"
    },
    {
        question: "How do you say 'olá' in English?",
        choices: ["Goodbye", "Thank you", "Hello", "Please"],
        correctAnswer: "Hello"
    },
	{
        question: "How do you say 'azul' in English?",
        choices: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: "Blue"
    },
    {
        question: "What is the translation of 'maçã' in English?",
        choices: ["Apple", "Banana", "Orange", "Grapes"],
        correctAnswer: "Apple"
    },
    {
        question: "How do you say 'school' in Portuguese?",
        choices: ["Escola", "Casa", "Rua", "Prédio"],
        correctAnswer: "Escola"
    },
    {
        question: "What does 'pão' mean in English?",
        choices: ["Rice", "Bread", "Meat", "Cheese"],
        correctAnswer: "Bread"
    },
    {
        question: "What is the translation of 'livro' in English?",
        choices: ["Pen", "Pencil", "Paper", "Book"],
        correctAnswer: "Book"
    }
];


const mediumQuestions = [
    {
        question: "What does 'celular' mean in English?",
        choices: [
            "A. A device used for communication, typically with a touchscreen interface",
            "B. A type of fruit found in tropical regions",
            "C. A large vehicle used for transportation of goods",
            "D. A musical instrument played with keys"
        ],
        correctAnswer: "A. A device used for communication, typically with a touchscreen interface"
    },
    {
        question: "How do you say 'azul' in English?",
        choices: [
            "A. A type of flower with vibrant colors",
            "B. The color of the sky on a sunny day",
            "C. A flavor commonly found in candies",
            "D. A material used for construction"
        ],
        correctAnswer: "B. The color of the sky on a sunny day"
    },
    {
        question: "What is the translation of 'maçã' in English?",
        choices: [
            "A. A type of citrus fruit with a sour taste",
            "B. A small round fruit typically red or green in color",
            "C. A tropical fruit with a hard outer shell and soft interior",
            "D. A type of nut commonly used in baking"
        ],
        correctAnswer: "B. A small round fruit typically red or green in color"
    },
    {
        question: "How do you say 'school' in Portuguese?",
        choices: [
            "A. A place for children to play and learn",
            "B. A building where people live",
            "C. A street with shops and restaurants",
            "D. A tall structure with many floors"
        ],
        correctAnswer: "A. A place for children to play and learn"
    },
    {
        question: "What does 'pão' mean in English?",
        choices: [
            "A. A type of pasta commonly served with sauce",
            "B. A baked food made of flour, water, and yeast",
            "C. A meat dish served with potatoes and vegetables",
            "D. A dairy product with a soft texture"
        ],
        correctAnswer: "B. A baked food made of flour, water, and yeast"
    },
    {
        question: "How do you say 'amigo' in English?",
        choices: [
            "A. A person who helps others in need",
            "B. A type of animal often kept as a pet",
            "C. A small insect that can fly",
            "D. A natural phenomenon occurring in the sky"
        ],
        correctAnswer: "A. A person who helps others in need"
    },
    {
        question: "What is the translation of 'água' in English?",
        choices: [
            "A. A type of tree found in tropical forests",
            "B. A liquid essential for life, typically clear and tasteless",
            "C. A type of fish commonly eaten in sushi",
            "D. A tool used for cutting wood"
        ],
        correctAnswer: "B. A liquid essential for life, typically clear and tasteless"
    },
    {
        question: "How do you say 'cachorro' in English?",
        choices: [
            "A. A type of musical instrument often played in orchestras",
            "B. A traditional dance performed in South America",
            "C. A small rodent commonly kept as a pet",
            "D. A domesticated animal often kept for companionship"
        ],
        correctAnswer: "D. A domesticated animal often kept for companionship"
    },
    {
        question: "What does 'verde' mean in English?",
        choices: [
            "A. A type of vegetable commonly used in salads",
            "B. A color typically associated with nature and growth",
            "C. A material used for building structures",
            "D. A type of currency used in European countries"
        ],
        correctAnswer: "B. A color typically associated with nature and growth"
    },
    {
        question: "How do you say 'livro' in English?",
        choices: [
            "A. A type of food made from fermented grains",
            "B. A small container used for storing liquids",
            "C. An object used for writing or drawing",
            "D. An item consisting of bound pages with printed text or images"
        ],
        correctAnswer: "D. An item consisting of bound pages with printed text or images"
    },
    {
        question: "What is the translation of 'futebol' in English?",
        choices: [
            "A. A sport played with a ball and a net",
            "B. A type of dance popular in Latin America",
            "C. A traditional dish served during festivals",
            "D. A form of transportation commonly used in cities"
        ],
        correctAnswer: "A. A sport played with a ball and a net"
    },
    {
        question: "How do you say 'feliz' in English?",
        choices: [
            "A. A state of being content and satisfied",
            "B. A type of weather characterized by sunshine and warmth",
            "C. A feeling of sadness or disappointment",
            "D. A type of food commonly eaten for breakfast"
        ],
        correctAnswer: "A. A state of being content and satisfied"
    },
    {
        question: "What does 'coração' mean in English?",
        choices: [
            "A. A part of the body responsible for pumping blood",
            "B. A type of flower commonly given on Valentine's Day",
            "C. A musical instrument often played in orchestras",
            "D. A type of bird found in tropical rainforests"
        ],
        correctAnswer: "A. A part of the body responsible for pumping blood"
    },
    {
        question: "How do you say 'comida' in English?",
        choices: [
            "A. A type of vehicle used for traveling long distances",
            "B. A traditional dance performed during cultural celebrations",
            "C. An activity involving physical exertion and competition",
            "D. An item of sustenance consumed to provide nourishment"
        ],
        correctAnswer: "D. An item of sustenance consumed to provide nourishment"
    },
    {
        question: "What is the translation of 'chuva' in English?",
        choices: [
            "A. A type of weather characterized by snow and cold temperatures",
            "B. A sudden and temporary increase in temperature",
            "C. A form of precipitation falling from the sky in droplets",
            "D. A natural disaster causing destruction and loss of life"
        ],
        correctAnswer: "C. A form of precipitation falling from the sky in droplets"
    }
];


const hardQuestions = [
    {
        question: "How would you ask 'What time is it?' in Portuguese?",
        choices: [
            "A. Que horas são?",
            "B. Onde fica o banheiro?",
            "C. Qual é o seu nome?",
            "D. Como vai você?"
        ],
        correctAnswer: "A. Que horas são?"
    },
    {
        question: "What is the translation of 'I'm allergic to peanuts' in Portuguese?",
        choices: [
            "A. Eu sou alérgico a camarão",
            "B. Eu sou vegetariano",
            "C. Eu sou intolerante à lactose",
            "D. Eu sou alérgico a amendoim"
        ],
        correctAnswer: "D. Eu sou alérgico a amendoim"
    },
    {
        question: "How would you say 'I need to make a reservation' in Portuguese?",
        choices: [
            "A. Eu preciso comprar um bilhete",
            "B. Eu preciso de ajuda",
            "C. Eu preciso fazer uma reserva",
            "D. Eu preciso de um médico"
        ],
        correctAnswer: "C. Eu preciso fazer uma reserva"
    },
    {
        question: "What does 'Eu estou com saudades de você' mean in English?",
        choices: [
            "A. I'm happy to see you",
            "B. I miss you",
            "C. I'm sorry",
            "D. I love you"
        ],
        correctAnswer: "B. I miss you"
    },
    {
        question: "How do you ask 'Can you repeat that, please?' in Portuguese?",
        choices: [
            "A. Você fala inglês?",
            "B. Você pode me ajudar?",
            "C. Você pode repetir, por favor?",
            "D. Onde está o banheiro?"
        ],
        correctAnswer: "C. Você pode repetir, por favor?"
    },
    {
        question: "What is the translation of 'This dish is delicious' in Portuguese?",
        choices: [
            "A. Esta comida está horrível",
            "B. Este prato está delicioso",
            "C. Eu não gosto disso",
            "D. Este restaurante é caro"
        ],
        correctAnswer: "B. Este prato está delicioso"
    },
    {
        question: "How would you say 'I have a headache' in Portuguese?",
        choices: [
            "A. Eu estou cansado",
            "B. Eu estou com fome",
            "C. Eu tenho dor de cabeça",
            "D. Eu estou doente"
        ],
        correctAnswer: "C. Eu tenho dor de cabeça"
    },
    {
        question: "What does 'Eu não entendi' mean in English?",
        choices: [
            "A. I understand",
            "B. I didn't hear you",
            "C. I don't like it",
            "D. I didn't understand"
        ],
        correctAnswer: "D. I didn't understand"
    },
    {
        question: "How do you ask 'Where is the nearest pharmacy?' in Portuguese?",
        choices: [
            "A. Onde fica o supermercado?",
            "B. Onde está o hospital?",
            "C. Onde fica a farmácia mais próxima?",
            "D. Onde posso comprar remédios?"
        ],
        correctAnswer: "C. Onde fica a farmácia mais próxima?"
    },
    {
        question: "What is the translation of 'I'm looking for the train station' in Portuguese?",
        choices: [
            "A. Eu estou procurando o aeroporto",
            "B. Eu estou procurando a estação de ônibus",
            "C. Eu estou procurando a estação de trem",
            "D. Eu estou procurando um hotel"
        ],
        correctAnswer: "C. Eu estou procurando a estação de trem"
    },
    {
        question: "How would you say 'I need a taxi' in Portuguese?",
        choices: [
            "A. Eu preciso de um táxi",
            "B. Eu preciso de uma bicicleta",
            "C. Eu preciso de uma carona",
            "D. Eu preciso de um ônibus"
        ],
        correctAnswer: "A. Eu preciso de um táxi"
    },
    {
        question: "What does 'Eu não sei' mean in English?",
        choices: [
            "A. I know",
            "B. I don't understand",
            "C. I don't like it",
            "D. I don't know"
        ],
        correctAnswer: "D. I don't know"
    },
    {
        question: "How do you ask 'How much does it cost?' in Portuguese?",
        choices: [
            "A. Quanto custa isso?",
            "B. O que é isso?",
            "C. Onde está o banheiro?",
            "D. Eu gostaria de uma bebida"
        ],
        correctAnswer: "A. Quanto custa isso?"
    },
    {
        question: "What is the translation of 'I'm lost' in Portuguese?",
        choices: [
            "A. Eu estou atrasado",
            "B. Eu estou perdido",
            "C. Eu estou ocupado",
            "D. Eu estou com fome"
        ],
        correctAnswer: "B. Eu estou perdido"
    },
    {
        question: "How would you say 'I don't speak Portuguese' in Portuguese?",
        choices: [
            "A. Eu falo português",
            "B. Eu não entendo português",
            "C. Eu não falo português",
            "D. Eu não gosto de português"
        ],
        correctAnswer: "C. Eu não falo português"
    }
];



// Variables to track quiz state
let currentQuestions = [];
let questionIndex = 0;
let score = 0;
let countdownTimer;

// Function to start the quiz with a specific difficulty
function startQuiz(difficulty) {
    // Hide home page, show quiz page
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';

    // Set currentQuestions based on selected difficulty
    if (difficulty === 'easy') {
        currentQuestions = easyQuestions;
    } else if (difficulty === 'medium') {
        currentQuestions = mediumQuestions;
    } else if (difficulty === 'hard') {
        currentQuestions = hardQuestions;
    }

    // Initialize quiz
    questionIndex = 0;
    score = 0;
    updateScore();
    showNextQuestion();
}

// Function to show the next question
function showNextQuestion() {
    if (questionIndex < currentQuestions.length) {
        const question = currentQuestions[questionIndex];
        document.getElementById('question').textContent = question.question;

        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        question.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.addEventListener('click', () => selectAnswer(index));
            choicesContainer.appendChild(button);
        });

        startTimer();
    } else {
        // Quiz ended
        endQuiz();
    }
}

// Function to handle answer selection
function selectAnswer(choiceIndex) {
    const question = currentQuestions[questionIndex];
    const selectedChoice = question.choices[choiceIndex];

    if (selectedChoice === question.correctAnswer) {
        // Correct answer
        score++;
        updateScore();
    }

    questionIndex++;
    showNextQuestion();
}

// Function to update score display
function updateScore() {
    document.getElementById('score').textContent = 'Score: ' + score;
}


function endQuiz() {

    // Hide quiz page, show home page
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';

    // Create a modal or a message with the options and display the score
    const endMessage = document.createElement('div');
    endMessage.innerHTML = `
        <p>Quiz Completed! Your Score: ${score}</p>
        <p>What would you like to do?</p>
        <button id="submit-score">Submit Score</button>
        <button id="restart-quiz">Restart Quiz</button>
    `;

    // Append the message to the document body
    document.body.appendChild(endMessage);

    // Add event listeners to the buttons
    document.getElementById('submit-score').addEventListener('click', () => {
        // Redirect to submit score page
        window.location.href = 'submit_score.html?score=' + score;
    });

    document.getElementById('restart-quiz').addEventListener('click', () => {
        // Restart the quiz
        document.body.removeChild(endMessage); // Remove the end message
        startQuiz(); // Restart the quiz
    });
}



// Event listeners for difficulty selection buttons
document.getElementById('start-easy').addEventListener('click', () => startQuiz('easy'));
document.getElementById('start-medium').addEventListener('click', () => startQuiz('medium'));
document.getElementById('start-hard').addEventListener('click', () => startQuiz('hard'));
