// create a size * size canvas on the page
function createCanvas (size) {
    const container = document.querySelector('.grid-container');
    
    for (i = 1; i <= size; i++) {
        var row = document.createElement('div');
        row.classList.add('column')
        for (var x = 1; x <= size; x++){
            var cell = document.createElement('div');
            cell.className = 'grid-square';
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

// reset the size of the grid
function resetSize (){
    let container = document.querySelector('.grid-container');
    container.innerHTML = "";
    createCanvas(25);
}

// create default canvas size of 30 * 30 and add button click event listener on DOM load
document.addEventListener('DOMContentLoaded', () => {
    let resetButton = document.querySelector('.reset-button');
    createCanvas(30);
    resetButton.addEventListener('click', resetSize);
})
