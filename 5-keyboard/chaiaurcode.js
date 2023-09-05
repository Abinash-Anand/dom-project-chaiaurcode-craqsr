console.log('Project 5');
const keyId = document.querySelector('.key');
window.addEventListener(
  'keydown',
  function (e) {
    console.log(e.key);
    console.log(e.code);
    keyId.innerHTML = ` <table>
    <tr>
      <th>key</th>
      <th>keyCode</th>
      <th>code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
   
  </table> `;
  },
  false
);
