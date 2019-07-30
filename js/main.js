//1) Define required constants

const SPRITE = {
	'1' : 'X',
	'-1' : 'O'
	'null' : ''
}

const COMBOS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[6, 4, 2],
	[0, 3, 6]
]

//2) Define required variables used to track the state of the game
let board, turn, winner;
//3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
const message = document.querySelector('h2');
cosnt squares = document.querySelectorAll('.sqare');

//4) Upon loading the app should:
	//4.1) Initialize the state variables
	//4.2) Render those values to the page
	//4.3) Wait for the user to click a square

//5) Handle a player clicking a square

//6) Handle a player clicking the replay button
 
//Event listeners/
document.querySelector('button').addEventListener('click', init);
document.querySelector('.game-board').addEventListener('click', handleMove);
//functions/
init();

function init () {
	board = new Array(9).fill(null);
	turn = 1;
	winner = null;
	render();
}

function handleMove (evt) {
	const moveIdx = parseInt(evt.target.dataset.square);
	if(board[moveIdx]) return;
	winner = getWinner();
	turn *= -1;
	board[moveIdx] = turn;
	render();
}

function getWinner() {
	for(let i = 0; i < COMBOS.lenth; i++){
		if(Math.abs(board[COMBOS[i][0]
			+ board[COMBOS][i][2]]
			+ board[COMBOS][i][3]) === 3
			)
			return board[COMBOS[i][0]]
			
	}
	if(board.includes(null)) return null;
	return "T";
}

function render() {
	board.forEach(function(element, idx) {
		squares[idx].textContent = SPRITE[elem];
	});
	if(!winner) {
		message.textContent = `${SPRITE[turn]}' Turn`;
	} else if(winner === "T") {
		message.textContent = 'Tie Game!';
	} ele {
		message.textContent =	`${SPRITE[winner]} Wins`;
	}
	}