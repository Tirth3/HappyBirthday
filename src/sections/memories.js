/** Helper – renders a coloured placeholder block */
      /*<span class="ph-icon">${icon}</span>
      <span class="ph-label">${label}</span>
  */
function placeholder(colorClass, icon, label , path) {
  console.log(path)
  return `
    <div class="placeholder-img ${colorClass}">
      <span class="ph-icon">${icon}</span>
      <span class="ph-label">${label}</span>
    </div>
  `;
}

// Replace src="" with your real image paths when ready, e.g. src="/images/memory1.jpg"
const photos = [
  { colorClass: 'ph-amber',  icon: '🏗️', label: 'TPO', path: "images/img2.jpg", caption: '🏗️ Khambre baman naaa, We prefer harshita',         classes: 'tall' },
  { colorClass: 'ph-blue',   icon: '🎉', label: 'SRK', path: "images/img3.jpg", caption: '🎥 Hollywood noooo, Bollywood Hell yeah',               classes: ''},
  { colorClass: 'ph-pink',   icon: '😂', label: 'HEHEHE', path: "images/img1.jpg", caption: "😂 Laugh um may not be as polite,, but hey it is pure AF",                  classes: '' },
  { colorClass: 'ph-green',  icon: '🌻', label: 'uuu a sunflower', path: "images/img2.png", caption: '🌻 Sunny and happy personality',                  classes: 'wide' },
  { colorClass: 'ph-orange', icon: '🍕', label: 'Pizza maybe?', path: "images/img1.jpg", caption: "🍕 Don't know what you like to eat but it's okk",           classes: '' },
];

export function createMemories() {
  const section = document.createElement('section');
  section.id = 'memories';

  const title = document.createElement('h2');
  title.className = 'section-title reveal';
  title.textContent = '📸 IDK random things.';

  const grid = document.createElement('div');
  grid.className = 'memories-grid';

  photos.forEach(({ colorClass, icon, label, path, caption, classes }, i) => {
    const card = document.createElement('div');
    card.className = `memory-card reveal ${classes}`;
    card.style.transitionDelay = `${i * 0.1}s`;

    card.innerHTML = `
      <div class="img-wrap">
        ${placeholder(colorClass, icon, label,path)}
      </div>
      <div class="memory-caption">${caption}</div>
    `;
    grid.appendChild(card);
  });

  section.appendChild(title);
  section.appendChild(grid);
  return section;
}
