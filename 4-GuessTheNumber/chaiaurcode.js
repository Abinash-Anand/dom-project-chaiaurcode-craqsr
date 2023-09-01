const form = document.querySelector('.form');
//random number
const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
//guessed Number
const guessedNumber = document.querySelector('.guesses');
console.log(guessedNumber);
//previous guessed number
const guessedNumberArray = [];
const guesses = document.querySelector('.lastResult');
let remainingGuesses = guesses.innerText;
const hint = document.querySelector('#hint');
hint.style.backgroundColor = 'black';
hint.style.borderRadius = '15px';
hint.style.padding = '8px';
if (randomNumber === 100) {
  const hintRange = randomNumber;
  hint.innerHTML = `Number lies between ${
    randomNumber - 10
  } <-> ${randomNumber}`;
} else if (randomNumber > 0 && randomNumber < 100) {
  const hintRange = randomNumber;
  hint.innerHTML = `Number lies between ${randomNumber} <-> ${
    randomNumber + 10
  }`;
}

//event listener

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (remainingGuesses != 0) {
    const numberGuess = parseInt(document.querySelector('#guessField').value);
    guessedNumberArray.push(numberGuess);
    console.log(guessedNumber);
    console.log(guessedNumberArray);
    guessedNumber.innerHTML = guessedNumberArray;
    remainingGuesses--;
    console.log(remainingGuesses);
    guesses.innerText = remainingGuesses;

    if (randomNumber === numberGuess) {
      form.style.backgroundColor = 'green';
    }
    if (remainingGuesses === 0) {
      guesses.style.backgroundColor = 'red';
    }
  }
});
