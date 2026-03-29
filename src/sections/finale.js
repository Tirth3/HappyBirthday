const STAR_EMOJIS = ['⭐', '🌟', '✨', '💛', '🎉', '🎊', '🎈', '🌼'];

const wishes = [
  { icon: '🏗️', text: 'May your plans always come together perfectly' },
  { icon: '💛', text: 'May your days be as bright as fresh yellow paint' },
  { icon: '🔩', text: 'May your problem be as easy as nuts and bolts' },
  { icon: '🌈', text: 'May this year be your most colourful build yet' },
  { icon: '🍰', text: 'May your cake be as tall as your ambitions' },
  { icon: '🎊', text: 'Here\'s to infosys. May be something good is up ahead' },
];

function spawnStars(container) {
  for (let i = 0; i < 35; i++) {
    const s = document.createElement('span');
    s.className = 'star';
    s.textContent = STAR_EMOJIS[Math.floor(Math.random() * STAR_EMOJIS.length)];
    s.style.cssText = `
      left: ${Math.random() * 100}%;
      font-size: ${14 + Math.random() * 18}px;
      animation-duration: ${6 + Math.random() * 10}s;
      animation-delay: ${Math.random() * 8}s;
    `;
    container.appendChild(s);
  }
}

export function createFinale() {
  const section = document.createElement('section');
  section.id = 'finale';

  // Falling stars background
  const starsWrap = document.createElement('div');
  starsWrap.className = 'finale-stars-wrap';
  spawnStars(starsWrap);

  const cake = document.createElement('div');
  cake.className = 'finale-cake';
  cake.textContent = '🎂';

  const heading = document.createElement('h2');
  heading.className = 'finale-title reveal';
  heading.innerHTML = 'Happy Birthday<br>Bob the Builder!';

  const tagline = document.createElement('p');
  tagline.className = 'finale-tagline reveal';
  tagline.textContent = 'Can we fix it? YES WE CAN! 🎉🔧';

  const grid = document.createElement('div');
  grid.className = 'wishes-grid';

  wishes.forEach(({ icon, text }, i) => {
    const chip = document.createElement('div');
    chip.className = 'wish-chip reveal';
    chip.style.transitionDelay = `${i * 0.1}s`;
    chip.innerHTML = `<span class="wish-icon">${icon}</span><p>${text}</p>`;
    grid.appendChild(chip);
  });

  const sig = document.createElement('p');
  sig.className = 'finale-sig';
  sig.innerHTML = 'Made with 🔨 and loads of love';

  section.append(starsWrap, cake, heading, tagline, grid, sig);
  return section;
}
