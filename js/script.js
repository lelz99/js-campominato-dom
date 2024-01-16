const button = document.querySelector('button');
const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('strong')

const rows = 10;
const cols = 10;
const totalCells = rows * cols;


const stratGame = () => {

    let score = 0;
    
    button.addEventListener('click', () =>{

        const createCells = number => {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.append(number);
            
            return cell;
        }
        
        const generateBombs = (maxBombNumber, totalBombs) => {
            const bombs = [];
            
            while(bombs.length < totalBombs){
                
                const randomNumber = Math.floor(Math.random() * maxBombNumber ) + 1
                if(!bombs.includes(randomNumber)) bombs.push(randomNumber)
                
            }
            
            return bombs
        }
        
        const totalBombs = 16
        const maxPoints = totalCells - totalBombs
        
        const bombs = generateBombs(totalCells, totalBombs)
        console.log(bombs)
        
        let isGameOver = false
        
        grid.innerText = ''
        
        for(let i = 1; i <= totalCells; i++){
            
            const cell = createCells(i);
            
            cell.addEventListener('click', () => {

                if(isGameOver) return

                if(cell.classList.contains('clicked')) {
                    return
                }

                cell.classList.add('clicked');
                console.log(i);

                const hashitBombs = bombs.includes(i);

                if(hashitBombs){
                    cell.classList.add('bomb')
                    score = 0
                    isGameOver = true
                    console.log('hai perso')

                } else {
                    scoreDisplay.innerText = ++score

                    if(score === maxPoints){
                        isGameOver = true
                        console.log('hai vinto')
                    }
                }

            })
            
            grid.appendChild(cell);
        }
    })
}
    
stratGame()