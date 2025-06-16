document.addEventListener('DOMContentLoaded', function () {
  // Toggle Theme
  const toggleButton = document.getElementById('toggleMode');
  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
    });
  }

  // Game Tracker Logic
  const gameForm = document.getElementById('gameForm');
  const gameList = document.getElementById('gameList');
  const gameError = document.getElementById('formError');

  if (gameForm && gameList && gameError) {
    gameForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('gameName').value.trim();
      const status = document.getElementById('gameStatus').value;

      if (!name || !status) {
        gameError.textContent = 'Please fill in all fields.';
        gameError.style.display = 'block';
        return;
      }

      gameError.style.display = 'none';

      const li = document.createElement('li');
      li.textContent = `${name} - ${status}`; // ✅ Correct line
      li.style.cursor = 'pointer';
      li.title = 'Click to remove';

      li.addEventListener('click', function () {
        gameList.removeChild(li);
      });

      gameList.appendChild(li);
      gameForm.reset();
    });
  }

  // Gallery Filter Logic
  const statusFilter = document.getElementById('statusFilter');
  const galleryCards = document.querySelectorAll('.game-card');

  if (statusFilter && galleryCards.length > 0) {
    statusFilter.addEventListener('change', function () {
      const selected = this.value;
      galleryCards.forEach(function (card) {
        const status = card.getAttribute('data-status');
        if (selected === 'all' || status === selected) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  const contactError = document.getElementById('formError');
  const contactSuccess = document.getElementById('formSuccess');

  if (contactForm && contactError && contactSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email.includes('@') || !message) {
        contactError.style.display = 'block';
        contactSuccess.style.display = 'none';
      } else {
        contactError.style.display = 'none';
        contactSuccess.style.display = 'block';
        contactForm.reset();
      }
    });
  }
});
