// main.js
const axios = require('axios');

axios.get('http://localhost:3000/api/chess_openings')
  .then(response => {
    const openings = response.data;
    displayOpenings(openings);
  })
  .catch(error => {
    console.error(error);
  });

function displayOpenings(openings) {
  const openingsList = document.getElementById('openingsList');

  openings.forEach(opening => {
   
    const openingName = document.createElement('h2');
    openingName.classList.add('opening-name');
    openingName.textContent = opening.name;

    const openingExplanation = document.createElement('p');
    openingExplanation.classList.add('opening-explanation');
    openingExplanation.textContent = opening.explanation;

    const openingVideo = document.createElement('a');
    openingVideo.classList.add('opening-video');
    openingVideo.textContent = 'Watch Video';
    openingVideo.href = opening.video_link;
    openingVideo.target = '_blank';

    openingCard.appendChild(openingName);
    openingCard.appendChild(openingExplanation);
    openingCard.appendChild(openingVideo);

    openingsList.appendChild(openingCard);
  });
}
