const container = document.querySelector('.container');
const arrayDiv = [];

for (let i = 0; i < 16; i++) {
  arrayDiv[i] = document.createElement('div');
  arrayDiv[i].className = 'grid';
  container.appendChild(arrayDiv[i]);
}

console.log(container);
