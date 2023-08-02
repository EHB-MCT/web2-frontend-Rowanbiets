import ChessBoard from 'chessboardjs';



// Chess puzzles data
const puzzle1 = {
  title: 'Puzzle 1',
  description: 'Find the best move for White.',
  position: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
};

const puzzle2 = {
  title: 'Puzzle 2',
  description: 'Find the best move for Black.',
  position: 'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 2',
};

// Function to create a chessboard and puzzle content
function createChessboardAndContent(puzzle, containerId) {
  const container = document.getElementById(containerId);

  // Create a chessboard for the puzzle
  const board = ChessBoard(container, {
    position: puzzle.position,
    draggable: false, // Disable drag and drop for puzzles
  });

  // Create puzzle title and description elements
  const puzzleTitle = document.createElement('h2');
  puzzleTitle.textContent = puzzle.title;

  const puzzleDescription = document.createElement('p');
  puzzleDescription.textContent = puzzle.description;

  // Append elements to the container
  container.appendChild(puzzleTitle);
  container.appendChild(board);
  container.appendChild(puzzleDescription);
}

// Call the function to create the chessboard and content for each puzzle
createChessboardAndContent(puzzle1, 'chessboard1');
createChessboardAndContent(puzzle2, 'chessboard2');
