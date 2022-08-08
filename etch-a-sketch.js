// create a size * size canvas on the page
function createCanvas (size) {
    const container = document.querySelector('.grid-container'); 
    const cellSize = (container.offsetHeight / size) + "px";
    for (i = 1; i <= size; i++) {
        var row = document.createElement('div');
        row.classList.add('column')
        for (var x = 1; x <= size; x++){
            var cell = document.createElement('div');
            cell.className = 'grid-square';
            cell.style.height = cellSize;
            cell.style.width = cellSize;
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    changeColor();
}

// change the color of a grid cell on mouseover
function changeColor () {
    let cells = Array.from(document.querySelectorAll('.grid-square'));
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        // arrow function to change class on mouseover
        cell.classList.add('colored-cell');
    }));
}

// reset the size of the grid, create new canvas with whatever value is present in input field
function resetSize (){
    let newSize = document.querySelector('input').value
    if (newSize > 100 || newSize < 16) { return; };
    let container = document.querySelector('.grid-container');
    container.innerHTML = "";
    createCanvas(newSize);
}


// create default canvas size of 16*16 and add button click event listener on DOM load
document.addEventListener('DOMContentLoaded', () => {
    let resetButton = document.querySelector('.reset-button');
    createCanvas(16);
    resetButton.addEventListener('click', resetSize);
    window.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            resetSize();
        }
    })
});
