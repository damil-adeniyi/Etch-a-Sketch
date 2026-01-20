const container =  document.querySelector('.container')
let gridItem = document.createElement('div');

let gridItems = 16;
let gridSquareDefault = gridItems * gridItems;


function createGrid(gridSquare) {
    for(let i = 0; i < gridSquare; i++ ) {

        let gridItem = document.createElement('div');

        gridItem.classList.add('grid-item')

        // width =  gridItem.style.width;
        // height = gridItem.style.height;

        // width = '16';
        // height = '16';

         gridItem.addEventListener('mouseenter', () => {
            gridItem.style.backgroundColor = 'black';
        })

        gridItem.innerText = i + 1;
        
        container.appendChild(gridItem);

    }

}

createGrid(gridSquareDefault)

let btn =  document.querySelector('.btn');


btn.addEventListener('click', () => {
    
    let num = Number(prompt('Number of squares per sides'));
    container.innerHTML = '';

    if (num <= 100) {
        let numSquare = num * num;
        createGrid(numSquare);
    } else {
        alert('Put in a a value within 1 to 100')
    }
    
})


