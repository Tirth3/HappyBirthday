import './styles/main.css';

import { createIntro }      from './sections/intro.js';
import { createMemories }   from './sections/memories.js';
import { createMessages }   from './sections/messages.js';
import { createFavourites } from './sections/favourites.js';
import { createFinale }     from './sections/finale.js';

import { initConfetti }     from './confetti.js';
import { initScrollReveal } from './scrollReveal.js';

// ─── Build the page ───────────────────────────────────────────────────────────
const app = document.getElementById('app');

const sections = [
  createIntro(),

  // Diagonal builder stripe between sections
  builderStripe(),

  createMemories(),
  builderStripe(),

  createMessages(),
  builderStripe(),

  createFavourites(),
  builderStripe(),

  createFinale(),
];

sections.forEach((el) => app.appendChild(el));

// ─── Init features ────────────────────────────────────────────────────────────
initConfetti();
initScrollReveal();

// ─── Helpers ─────────────────────────────────────────────────────────────────
function builderStripe() {
  const div = document.createElement('div');
  div.className = 'builder-stripe';
  return div;
}
