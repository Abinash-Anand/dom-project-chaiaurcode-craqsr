const clock = document.querySelector('#clock');

setInterval(function () {
  let time = new Date();
  const localTime = time.toLocaleTimeString();
  console.log(time.toLocaleTimeString());
  clock.innerHTML = localTime;
}, 1000);
