// Variables and constants declaration, Board creation
const container = document.querySelector('.container');
const doc = document.documentElement;
let arrayDiv = [];
let sizeNumber = 10;
let color = 'gray';
createBoard();

// Buttons events declaration
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.name) {
      case 'reset':
        resetBoard();
        break;
      case 'resize':
        changeSize();
        break;
      case 'gray':
        color = 'gray';
        resetBoard();
        break;
      case 'random':
        color = 'random';
        resetBoard();
        break;
      case 'erase':
        color = 'white';
        break;
    }
  });
});

// create Board and board event declaration
function createBoard() {
  //set variables for css grid
  doc.style.setProperty('--size', sizeNumber);

  //create board
  for (let i = 0; i < (sizeNumber*sizeNumber); i++) {
    arrayDiv[i] = document.createElement('div');
    arrayDiv[i].className = 'grid';
    container.appendChild(arrayDiv[i]);
  }

  //start Drawing
  container.addEventListener('mousedown', (e) => {
    arrayDiv.forEach((div) => {
      div.addEventListener('mouseover', paintBoard);
    })
  });

  //stop Drawing
  container.addEventListener('mouseup', (e) => {
    arrayDiv.forEach((div) => {
      div.removeEventListener('mouseover', paintBoard);
    });
  });

  container.addEventListener('mouseleave', (e) => {
    arrayDiv.forEach((div) => {
      div.removeEventListener('mouseover', paintBoard);
    });
  });
}

// Set how the board will be painted
function paintBoard(e) {
  if (color == 'gray') {
    if (this.style.backgroundColor.match(/rgba/)) {
      let opacity = Number(this.style.backgroundColor.slice(-4,-1));
      if (opacity < 0.9) {
        opacity += 0.1;
        this.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
      }
    } else {
        this.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
    }
  } else if (color == 'random') {
    if (this.style.backgroundColor.match(/rgba/)) {
      return;
    } else {
      let r = Math.floor(255*Math.random());
      let g = Math.floor(255*Math.random());
      let b = Math.floor(255*Math.random());
      let a = Math.random();
      this.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    }
  } else {
    this.style.backgroundColor = 'white';
  }
}

function resetBoard() {
  arrayDiv.forEach(div => div.removeAttribute('style'));
}

function changeSize() {
  sizeNumber = prompt('Choose the number of rows/columns of the board', 'Max. allowed: 60');
  container.textContent = '';
  arrayDiv = [];
  if (sizeNumber > 60) {
    sizeNumber = 60;
  }
  createBoard();
}
