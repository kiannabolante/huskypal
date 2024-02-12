function openPopup() {
  document.getElementById('popup-container').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup-container').style.display = 'none';
}

function selectTrack(track) {
  document.getElementById('welcome-message').innerHTML = `The ${track} Track!`;
  populateTraitDetails(track);
  closePopup();
}

function populateTraitDetails(track) {
  // Simulate fetching trait details from an API or database
  // and populating the #trait-details element
  const traitDetailsContainer = document.getElementById('trait-details');
  traitDetailsContainer.innerHTML = `
    <h2>${track} Track Details</h2>
    <p>Challenges to finish:</p>
    <img id="pal-img" src='login-imgs/huskyAvatar.png'>
    <div class="checkbox-wrapper-63">
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
      <p class="challenges"> test </p>
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
      <p class="challenges"> test </p>
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
      <p class="challenges"> test </p>
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
      <p class="challenges"> test </p>
    </div>
  `;
}

// Open the popup when the page loads (for demo purposes)
window.onload = openPopup;
