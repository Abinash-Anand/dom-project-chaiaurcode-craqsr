const buttonSpan = document.querySelectorAll('.button');

buttonSpan.forEach((btnId) => {
  console.log(btnId.id);
  btnId.addEventListener(
    'click',
    function (e) {
      document.body.style.backgroundColor = btnId.id;
    },
    false
  );
});
