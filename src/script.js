
const baseURL = `https://top-chess-players.onrender.com`;


// Function to fetch all players and display them on the page
async function fetchPlayers() {
  try {
      const response = await fetch(`${baseURL}/players`);
      const data = await response.json();

      console.log('Response:', data); // Log the response for inspection

      if (Array.isArray(data)) {
          const playersList = document.getElementById('playersList');
          playersList.innerHTML = '';

          data.forEach((player) => {
              const listItem = document.createElement('li');
              listItem.innerHTML = `
                <img src="${(player.image)?player.image+'"style="max-width: 100px; max-height: 100px;">' :"https://ui-avatars.com/api/?name="+player.name.replace(',','+')+  'style="max-width: 100px; max-height: 100px;">'}
                <br>
                Name: ${player.name}
                <br>
                Rank: ${player.cpid}
                <br>
                Rating: ${player.rating}
                <hr>
              `;
              playersList.appendChild(listItem);
          });
      } else {
          console.error('Response is not an array:', data);
      }
  } catch (error) {
      console.error('Error fetching players:', error.message);
      alert('An error occurred while fetching players. Please try again.');
  }
}



// Function to save a new player
async function savePlayer() {
    const cpid = document.getElementById('cpid').value;
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;

    try {
        const response = await fetch(`${baseURL}/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cpid: cpid,
                name: name,
                rating: rating
            })
        });

        if (response.ok) {
            alert('Player saved successfully!');
            fetchPlayers();
        } else {
            alert('Failed to save player. Please try again.');
        }
    } catch (error) {
        console.error('Error saving player:', error.message);
        alert('An error occurred while saving the player.');
    }
}

// Function to update an existing player
async function updatePlayer() {
    const playerId = document.getElementById('playerIdToUpdate').value;
    const name = document.getElementById('nameToUpdate').value;
    const rating = document.getElementById('ratingToUpdate').value;

    try {
        const response = await fetch(`${baseURL}/players/${playerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                rating: rating
            })
        });

        if (response.ok) {
            alert('Player updated successfully!');
            fetchPlayers();
        } else {
            alert('Failed to update player. Please try again.');
        }
    } catch (error) {
        console.error('Error updating player:', error.message);
        alert('An error occurred while updating the player.');
    }
}


// Function to delete a player
async function deletePlayer() {
    const playerId = document.getElementById('playerIdToDelete').value;

    try {
        const response = await fetch(`${baseURL}/players/${playerId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Player deleted successfully!');
            fetchPlayers();
        } else {
            alert('Failed to delete player. Please try again.');
        }
    } catch (error) {
        console.error('Error deleting player:', error.message);
        alert('An error occurred while deleting the player.');
    }
}

// Fetch and display players when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchPlayers();
});
