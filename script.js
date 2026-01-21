const container =  document.querySelector('.container')
let gridItem = document.createElement('div');

let gridItems = 16;
let gridSquareDefault = gridItems * gridItems;

// Create Grid Function
function createGrid(gridSquare, width, height) {
    for(let i = 0; i < gridSquare; i++ ) {

        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item')
        
        gridItem.style.width = `calc(960px / ${width})`;
        gridItem.style.height = `calc(960px / ${height})`;

         gridItem.addEventListener('mouseenter', () => {
            gridItem.style.backgroundColor = 'black';
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
    } else {
        alert('Put in a a value within 1 to 100')
    }
    
})


// Reset Btn
rstBtn.addEventListener('click', () => {

    container.innerHTML = '';
    createGrid(gridSquareDefault, gridItems, gridItems);
})
