// #FFFFFF.
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());

const startElement = document.querySelector('#start');
const stopElement = document.querySelector('#stop');
let intervalEvent;
startElement.addEventListener(
  'click',
  function () {
    intervalEvent = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  },
  false
);

stopElement.addEventListener(
  'click',
  function () {
    clearInterval(intervalEvent);
    // intervalEvent = null;
  },
  false
);
