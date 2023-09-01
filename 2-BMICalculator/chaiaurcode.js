const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  results.style.fontSize = '20px';
  results.style.margin = '10px 190px 20px 0px';
  results.style.color = 'White';
  results.style.backgroundColor = 'black';
  if (height === '' || isNaN(height) || height < 0) {
    results.innerHTML = `Please provide a valid height value ${height}`;
  } else if (weight === '' || isNaN(weight) || weight < 0) {
    results.innerHTML = `Please provide a vali weight value ${weight}`;
  } else {
    //BMI = weight (kg) / (height (m) * height (m))
    const bmi = (weight / height ** 2) * 10000;
    const bmiValue = bmi.toFixed(2);

    results.innerHTML = `Your BMI Score is: ${bmiValue} ${
      bmiValue < 18.6
        ? 'Under Weight'
        : bmiValue >= 18.6 && bmiValue <= 24.9
        ? 'normal Weight'
        : 'Over Weight'
    }`;
  }
});
