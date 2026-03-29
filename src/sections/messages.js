const messages = [
  {
    side: 'left',
    icon: '🔨',
    dotBg: '#FFF9C4',
    title: 'The Hardest Worker',
    text: 'You show up every single day with your hard hat on and a can-do attitude. There\'s nobody else we\'d trust with a hammer — or with our hearts. 💪',
  },
  {
    side: 'right',
    icon: '🏗️',
    dotBg: '#BBDEFB',
    title: 'The Master Builder',
    text: 'You don\'t just build houses — you build friendships that last a lifetime. Every moment with you feels like a carefully crafted masterpiece. ✨',
  },
  {
    side: 'left',
    icon: '🌟',
    dotBg: '#FFE0B2',
    title: 'The Life of Every Party',
    text: 'You bring the kind of energy that lights up every room. If joy were a building material, you\'d have enough to construct an entire city! 🎉',
  },
  {
    side: 'right',
    icon: '🤝',
    dotBg: '#C8E6C9',
    title: 'The Best Friend',
    text: 'You\'re the person who fixes things — not just buildings, but bad days, broken spirits and tough situations. We\'re so lucky to have you. 💛',
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
