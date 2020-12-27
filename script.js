// Divs and constants creation
const container = document.querySelector('.container');
let arrayDiv = [];

let sizeNumber = 4;

const doc = document.documentElement;
doc.style.setProperty('--size', sizeNumber);

for (let i = 0; i < (sizeNumber*sizeNumber); i++) {
  arrayDiv[i] = document.createElement('div');
  arrayDiv[i].className = 'grid';
  container.appendChild(arrayDiv[i]);
};


// Change board color
arrayDiv.forEach((div) => {
  div.addEventListener('mouseover', function(e) {
    this.classList.add('colored');
  });
});


// Buttons events
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.name) {
      case 'reset':
        resetBoard();
        break;
      case 'color':
        alert('Button clicked: ' + e.target.name);
        pickColor();
        break;
      case 'resize':
        changeSize();
        break;
    };
  });
});


// Reset Board
function resetBoard() {
  arrayDiv.forEach((div) => {
    div.classList.remove('colored');
  });
};


// Resize Board
function changeSize() {
  container.textContent = '';
  arrayDiv = [];
  sizeNumber = prompt('Choose the number of rows/columns of the board', '5');
  doc.style.setProperty('--size', sizeNumber);
  for (let i = 0; i < (sizeNumber*sizeNumber); i++) {
    arrayDiv[i] = document.createElement('div');
    arrayDiv[i].className = 'grid';
    container.appendChild(arrayDiv[i]);
  };
};
