const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors module

// Enable CORS for all routes
app.use(cors());

// Sample JSON data representing the chess openings (replace this with your actual data)
const chessOpenings = [
    {
        "name": "King's Pawn Opening",
        "explanation": "The King's Pawn Opening begins with 1.e4, aiming to control the center and open lines for the queen and bishop. It is one of the most common and aggressive opening moves.",
        "video_link": "https://www.youtube.com/embed/mkT9Odb3zLg"

      },
      {
        "name": "Queen's Pawn Opening",
        "explanation": "The Queen's Pawn Opening starts with 1.d4, aiming to control the center with the pawn. It is a flexible and popular opening that leads to various pawn structures.",
        "video_link": "https://www.youtube.com/embed/vEK8vPRlt2g"
      },
      {
        "name": "Italian Game",
        "explanation": "The Italian Game starts with 1.e4 e5 2.Nf3 Nc6 3.Bc4, developing the bishop and preparing to castle kingside. It is a classical opening with many strategic ideas.",
        "video_link": "https://www.youtube.com/embed/MhNs8GLo894"
      },
      {
        "name": "French Defense",
        "explanation": "The French Defense arises after 1.e4 e6, where Black immediately stakes a claim in the center. It is a solid and strategic opening for Black.",
        "video_link": "https://www.youtube.com/embed/5pec-u6PSvA"
      },
      {
        "name": "Caro-Kann Defense",
        "explanation": "The Caro-Kann Defense begins with 1.e4 c6, creating a strong pawn chain in the center. It is a solid and reliable opening for Black.",
        "video_link": "https://www.youtube.com/embed/rmbU97iftC8"
      },
      {
        "name": "English Opening",
        "explanation": "The English Opening starts with 1.c4, aiming for a flexible and hypermodern setup. It allows White to control the center indirectly.",
        "video_link": "https://www.youtube.com/embed/va0s92praEM"
      }
];

app.get('/api/chess_openings', (req, res) => {
  res.json(chessOpenings);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
