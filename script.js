function generateEquation() {
    const isTrue = Math.random() < 0.5;
    const operation = Math.floor(Math.random() * 4);
    const firstInt = Math.floor(Math.random() * 50) + 1;
    const secondInt = Math.floor(Math.random() * 50) + 1;
    const falseInt = Math.floor(Math.random() * 10 + 1) * 2;
    let currentEquation;

    if (operation === 0) {
        // Addition
        Equation = `${firstInt} + ${secondInt} = ${isTrue ? firstInt + secondInt : firstInt + secondInt + falseInt}`;
    } else if (operation === 1) {
        // Subtraction
        Equation = `${isTrue ? firstInt + secondInt : firstInt + secondInt + falseInt} - ${firstInt} = ${secondInt}`;
    } else if (operation === 2) {
        // Multiplication
        Equation = `${firstInt} × ${secondInt} = ${isTrue ? firstInt * secondInt : firstInt * secondInt + falseInt}`;
    } else if (operation === 3) {
        // Division
        Equation = `${isTrue ? firstInt * secondInt : firstInt * secondInt + falseInt} ÷ ${firstInt} = ${secondInt}`;
    }

    return {
        equation: Equation,
        isTrue: isTrue,
    };
}

currentStep = 1000;
score = 0;
currentEquation = generateEquation();
document.getElementById('prompt').textContent = currentEquation.equation;

document.getElementById('false').addEventListener('click', function() {
    if (currentEquation.isTrue == 0) {
        score += 1
        document.getElementById('score').textContent = score;
        currentStep = 1000
    } else {
        window.location.href="result.html?score=" + score
    }
    currentEquation = generateEquation();
    document.getElementById('prompt').textContent = currentEquation.equation;

});

document.getElementById('true').addEventListener('click', function() {
    if (currentEquation.isTrue == 0) {
        window.location.href="result.html?score=" + score
    } else {
        score += 1
        document.getElementById('score').textContent = score;
        currentStep = 1000
    }
    currentEquation = generateEquation();
    document.getElementById('prompt').textContent = currentEquation.equation;
});


document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('timer');
    const totalSteps = 1000;
    const totalTime = 10000; // 10 seconds
    const stepTime = totalTime / totalSteps;

    const interval = setInterval(() => {
        currentStep--;
        const progressPercentage = (currentStep / totalSteps) * 100;
        progressBar.style.width = progressPercentage + '%';

        if (currentStep == 0) {
            window.location.href="result.html?score=" + score
        }
    }, stepTime);
});
