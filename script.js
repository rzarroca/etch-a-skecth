// Variables and constants declaration, Board creation
const container = document.querySelector('.container');
const doc = document.documentElement;
let arrayDiv = [];
let sizeNumber = 4;
createBoard();

// Buttons events declaration
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.name) {
      case 'reset':
        resetBoard();
        break;
      case 'random':
        alert('Button clicked: ' + e.target.name);
        pickColor();
        break;
      case 'resize':
        changeSize();
        break;
    }
  });
});

// create Board and event declaration
function createBoard() {
  //set variables for css grid
  doc.style.setProperty('--size', sizeNumber);

  //create board
  for (let i = 0; i < (sizeNumber*sizeNumber); i++) {
    arrayDiv[i] = document.createElement('div');
    arrayDiv[i].className = 'grid';
    container.appendChild(arrayDiv[i]);
  }

  // Change board color if mouse is over
  arrayDiv.forEach((div) => {
    div.addEventListener('mouseover', function(e) {
      if (this.style.backgroundColor.match(/rgba/)) {
        let opacity = Number(this.style.backgroundColor.slice(-4,-1));
        if (opacity < 0.9) {
          opacity += 0.1;
          this.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        }
      } else {
          this.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
      };
    });
  });
}

// Reset Board
function resetBoard() {
  arrayDiv.forEach(div => div.removeAttribute('style'));
}

// Resize Board
function changeSize() {
  container.textContent = '';
  arrayDiv = [];
  sizeNumber = prompt('Choose the number of rows/columns of the board', 'Max. allowed: 60');
  if (sizeNumber > 60) {
    sizeNumber = 60;
  }
  createBoard();
}
