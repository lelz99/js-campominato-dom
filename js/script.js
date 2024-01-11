const button = document.querySelector('button');
const grid = document.querySelector('.grid')

const rows = 10;
const cols = 10;
const totalCells = rows * cols;


const createCells = number => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.append(number);

    return cell;
}

button.addEventListener('click', () =>{
    console.log('cliccato');

    grid.innerText = ''

    for(let i = 1; i <= totalCells; i++){

        const cell = createCells(i);

        cell.addEventListener('click', (event) => {
            cell.classList.toggle('clicked');
            console.log(i)
        })
        
        grid.appendChild(cell);
    }
})