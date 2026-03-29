const messages = [
  {
    side: 'left',
    icon: '🔨',
    dotBg: '#FFF9C4',
    title: 'The Hardest Worker',
    text: 'You show up every single day with your hard hat on and a can-do attitude. There\'s nobody else we\'d trust with a hammer. 💪',
  },
  {
    side: 'right',
    icon: '🤩',
    dotBg: '#BBDEFB',
    title: 'SRK Fan',
    text: `“Don’t underestimate the power of bob”`,
  },
  {
    side: 'left',
    icon: '🤝',
    dotBg: '#C8E6C9',
    title: 'Infosys',
    text: `Yaa I don\'t what to add so have some infosys placement`,
  },
];

export function createMessages() {
  const section = document.createElement('section');
  section.id = 'messages';

  const title = document.createElement('h2');
  title.className = 'section-title reveal';
  title.textContent = '💬 A Few Words About You';

  const timeline = document.createElement('div');
  timeline.className = 'timeline';

  messages.forEach(({ side, icon, dotBg, title: msgTitle, text }, i) => {
    const item = document.createElement('div');
    item.className = `timeline-item reveal ${side === 'right' ? 'right from-right' : 'from-left'}`;
    item.style.transitionDelay = `${i * 0.12}s`;

    item.innerHTML = `
      <div class="timeline-bubble">
        <h3>${msgTitle}</h3>
        <p>${text}</p>
      </div>
      <div class="timeline-dot" style="background:${dotBg}">${icon}</div>
    `;
    timeline.appendChild(item);
  });

  section.appendChild(title);
  section.appendChild(timeline);
  return section;
}
