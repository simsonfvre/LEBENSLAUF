// hm2
const boxes = document.querySelectorAll('.four-box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        boxes.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.add('displaynone');
            }
        });
    });
    box.addEventListener('mouseleave', () => {
        boxes.forEach(otherBox => {
            otherBox.classList.remove('displaynone');
        });
    });
});

// hm7 & hm8
const buttons = document.querySelectorAll('.one-box');
const panels = document.querySelectorAll('.one-box-hidden');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {

        const currentPanel = panels[index];
        const currentImg = button.querySelector('img');

        const isOpen = !currentPanel.classList.contains('closed');

        // one-boxes schliessen
        panels.forEach(panel => {
            panel.classList.add('closed');
        });

        // Icons umdrehen
        buttons.forEach(btn => {
            const img = btn.querySelector('img');
            img.classList.remove('rotated');
        });

        if (!isOpen) {
            currentPanel.classList.remove('closed');
            currentImg.classList.add('rotated');
        }
    });
});

// Quiz 1
let quizOneChecked = false;
// hm12
const quizOneButtons = document.querySelectorAll('.quiz-1-button');
const resultOne = document.getElementById('quiz-one-result');

quizOneButtons.forEach(button => {
    button.addEventListener('click', () => {

        if (button.id === 'quiz-1-3-btn') {
            resultOne.innerHTML =
                `<img src="assets/img/check-button.png" alt="Korrekt" width="20">Richtig!`;
            quizOneChecked = true;
        } else {
            resultOne.innerHTML =
                `<img src="assets/img/wrong.png" alt="Falsch" width="20">Falsch!`;
        }
    });
});

// Quiz 2
// hm13
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let quizTwoChecked = false;
const quizTwoButton = document.getElementById('quiz-2-btn');
const resultTwo = document.getElementById('quiz-two-result');
const number = randomInt(1, 10);

quizTwoButton.addEventListener('click', () => {
    const input = document.getElementById('quiz-2-input');
    let value = parseInt(input.value);

    if (value === '' || value < 1 || value > 10) {
        resultTwo.textContent = 'Bitte eine gültige Zahl eingeben!';
    } else if (value === number) {
        resultTwo.innerHTML =
            `<img src="assets/img/check-button.png" alt="Korrekt" width="20">Richtig!`;
        quizTwoChecked = true;
    } else if (value < number) {
        resultTwo.innerHTML =
            `<img src="assets/img/wrong.png" alt="Falsch" width="20">Zahl ist zu klein!`;
    } else if (value > number) {
        resultTwo.innerHTML =
            `<img src="assets/img/wrong.png" alt="Falsch" width="20">Zahl ist zu gross!`;
        // hm15
    } else if (isNaN(value) || value < 1 || value > 10) {
        resultTwo.textContent = 'Bitte eine gültige Zahl eingeben!';
    }
});


// Quiz 3
let quizThreeChecked;

