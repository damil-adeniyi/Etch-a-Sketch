const container =  document.querySelector('.container')
let gridItem = document.createElement('div');

let gridItems = 16;
let gridSquareDefault = gridItems * gridItems;


function createGrid(gridSquare) {
    for(let i = 0; i < gridSquare; i++ ) {

        let gridItem = document.createElement('div');

        gridItem.classList.add('grid-item')

         gridItem.addEventListener('mouseenter', () => {
            gridItem.style.backgroundColor = 'black';
        })

        // gridItem.innerText = i + 1;
        
        container.appendChild(gridItem);

    }

}

createGrid(gridSquareDefault)

let btn =  document.querySelector('.btn');


btn.addEventListener('click', () => {
    
    let num = Number(prompt('Number of squares per sides'));
    

    console.log(num);
    

 
    


   

})


