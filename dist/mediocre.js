import { Chess } from 'chess.js';

// Maak een nieuw schaakspel met behulp van de 'Chess'-klasse
const chess = new Chess();

// Functie om het schaakbord te tekenen
function drawChessboard() {
  const board = document.getElementById('chessboard');

  for (let rank = 8; rank >= 1; rank--) {
    for (let file = 1; file <= 8; file++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.dataset.rank = rank;
      square.dataset.file = file;
      board.appendChild(square);
    }
  }
}

// Functie om stukken op het schaakbord te plaatsen
function placePieces() {
  const squares = document.querySelectorAll('.square');
  for (const square of squares) {
    const rank = square.dataset.rank;
    const file = square.dataset.file;
    const piece = chess.get(rank + file);
    if (piece) {
      square.textContent = piece.type;
    } else {
      square.textContent = '';
    }
  }
}

// Functie om het schaakspel te initialiseren
function initializeChessGame() {
  drawChessboard();
  placePieces();

  // Voeg event listener toe aan de schaakbord om zetten te verwerken
  const board = document.getElementById('chessboard');
  board.addEventListener('click', handleSquareClick);
}

// Functie om een zet te verwerken wanneer een vakje op het schaakbord wordt geklikt
function handleSquareClick(event) {
  const targetSquare = event.target;
  const rank = targetSquare.dataset.rank;
  const file = targetSquare.dataset.file;

  if (rank && file) {
    const square = rank + file;

    // Verplaats het geselecteerde stuk naar het gekozen vakje
    const move = chess.move({ from: chess.selectedSquare, to: square });

    // Als de zet legaal is, update het bord
    if (move) {
      placePieces();
    }

    // Verwijder de geselecteerde zet (weergave van gekozen vakje) na elke klik
    chess.selectedSquare = null;
  } else {
    // Als er geen vakje is geselecteerd, selecteer het gekozen vakje
    chess.selectedSquare = targetSquare.textContent;
  }
}

// Roep de functie aan om het schaakspel te initialiseren wanneer de pagina geladen is
window.addEventListener('load', initializeChessGame);
