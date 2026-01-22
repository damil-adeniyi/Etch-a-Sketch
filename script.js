
// Variables
const container = document.querySelector('.container')
let gridItem = document.createElement('div');
let gridInfo = document.querySelector('.grid-info');

let gridItems = 16;
gridInfo.innerText = `Grid Size: ${gridItems} x ${gridItems}`;
let gridSquareDefault = gridItems * gridItems;

// Create Grid Function
function createGrid(gridSquare, width, height) {
    for(let i = 0; i < gridSquare; i++ ) {

        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item')
        
        gridItem.style.width = `calc(80vw / ${width})`;
        gridItem.style.height = `calc(80vh / ${height})`;

         gridItem.addEventListener('mouseenter', () => {

            // randomise color
            let color = ['red', 'green', 'blue'];
            let randomize = Math.floor(Math.random() * color.length )
            gridItem.style.backgroundColor = color[randomize];

            // Opacity
            let opacity = Number(gridItem.style.opacity);
            if(opacity < 1) {
                opacity += 0.1;
                gridItem.style.opacity = opacity;
            }
        })

        // gridItem.innerText = i + 1;
        
        container.appendChild(gridItem);

    }

}

createGrid(gridSquareDefault)

let btn =  document.querySelector('.btn');
let rstBtn = document.querySelector('.reset')

// Get square value
btn.addEventListener('click', () => {
    
    let num = Number(prompt('Number of squares per sides'));
    container.innerHTML = '';

    if (num <= 100) {
        let numSquare = num * num;
        createGrid(numSquare, num, num);
        gridInfo.innerText = `Grid Size: ${num} x ${num}`;
    } else {
        alert('Put in a a value within 1 to 100')
    }
    
})


// Reset Btn
rstBtn.addEventListener('click', () => {

    gridInfo.innerText = `Grid Size: ${gridItems} x ${gridItems}`;
    container.innerHTML = '';
    createGrid(gridSquareDefault, gridItems, gridItems);
})
