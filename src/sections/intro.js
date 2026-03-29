export function createIntro() {
  const section = document.createElement('section');
  section.id = 'intro';

  section.innerHTML = `
    <div class="intro-hard-hat">👷🏽</div>

    <h1 class="intro-title">
      Harshita Jadhao❌<br>
      <span class="name-highlight">Bob the Builder ✅</span>
    </h1>

    <div class="joke-card reveal">
      <p class="setup">Why is Bob so good at relationships? 🤔</p>
      <p class="punchline">Because he knows how to build trust. 🔨😂</p>
    </div>

    <div class="scroll-hint">
      <span>Yaa I am too lazy to add images. Just adjust with emojis.</span>
      <span>Scroll down</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M12 5v14M5 12l7 7 7-7"/>
      </svg>
    </div>
  `;

  return section;
}
