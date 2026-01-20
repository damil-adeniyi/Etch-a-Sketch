const container =  document.querySelector('.container')
let gridItem = document.createElement('div');

let gridItems = 16;
let gridSquare = gridItems * gridItems;

function createGrid() {
    for(let i = 0; i < gridSquare; i++ ) {

        let gridItem = document.createElement('div');

        gridItem.classList.add('grid-item')

        // gridItem.innerText = i + 1;
        
        container.appendChild(gridItem);


    }

}

createGrid()

let btn =  document.querySelector('button');

btn.addEventListener('click' () => {
    
})


