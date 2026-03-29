/** Coloured placeholder blocks — swap the img-wrap contents for real <img> tags later */
function placeholder(colorClass, icon, label) {
  return `<div class="placeholder-img ${colorClass}"><span class="ph-icon">${icon}</span><span class="ph-label">${label}</span></div>`;
}

const favs = [
  {
    icon: '🔧',
    imgColor: 'ph-amber',
    imgLabel: 'Photo: Fixing stuff',
    title: 'A Natural Fixer',
    text: 'Whether it\'s a leaky tap or a friend\'s rough day, Bob always shows up with the right tool for the job. Reliability is basically her superpower.',
    reverse: false,
  },
  {
    icon: '🎵',
    imgColor: 'ph-blue',
    imgLabel: 'Photo: Music vibes',
    title: 'The Playlist Queen',
    text: 'Has an uncanny ability to shuffle to the perfect song at the perfect moment. Every road trip, every pre-game, every chill evening — she\'s got it covered.',
    reverse: true,
  },
  {
    icon: '🌮',
    imgColor: 'ph-pink',
    imgLabel: 'Photo: Food adventures',
    title: 'Serious Foodie',
    text: 'From street tacos to fancy brunch spots, Bob explores the world one meal at a time and somehow always finds the best hidden gem in any city.',
    reverse: false,
  },
];

export function createFavourites() {
  const section = document.createElement('section');
  section.id = 'favourites';

  const title = document.createElement('h2');
  title.className = 'section-title reveal';
  title.textContent = '💚 Things We Love About You';

  const rows = document.createElement('div');
  rows.className = 'fav-rows';

  favs.forEach(({ imgColor, imgLabel, icon, title: favTitle, text, reverse }, i) => {
    const row = document.createElement('div');
    row.className = `fav-row reveal ${reverse ? 'reverse from-right' : 'from-left'}`;
    row.style.transitionDelay = `${i * 0.12}s`;

    row.innerHTML = `
      <div class="fav-img-wrap">
        ${placeholder(imgColor, icon, imgLabel)}
      </div>
      <div class="fav-text">
        <h3>${icon} ${favTitle}</h3>
        <p>${text}</p>
      </div>
    `;
    rows.appendChild(row);
  });

  section.appendChild(title);
  section.appendChild(rows);
  return section;
}
