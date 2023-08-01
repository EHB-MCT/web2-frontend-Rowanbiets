// For chess.js
import { Chess } from 'chess.js';

// For chessboard.js
import Chessboard from 'chessboard';
import 'chessboard.js/chess.css';


const chess = new Chess();

// Set up the chessboard
const board = Chessboard('chessboard', 'start');

// Set up the puzzle position
chess.load('r1bq1rk1/ppp2ppp/2np4/2b1pN1Q/2B1P3/8/PPPP1PPP/RNB1K2R w KQ - 0 1');

// Function to solve the puzzle
function solvePuzzle() {
    // Find the winning move for White (checkmate in 1 move)
    const moves = chess.moves({ verbose: true });
    for (const move of moves) {
        chess.move(move);
        if (chess.in_checkmate()) {
            const { from, to } = move;
            console.log(`Winning Move: ${from}-${to}`);
            break;
        }
        chess.undo();
    }
}

// Call the solvePuzzle function when the page loads (optional)
window.onload = solvePuzzle;
