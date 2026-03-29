const COLORS = ['#FFD600', '#FF7A00', '#1565C0', '#E53935', '#64B5F6', '#ffffff', '#4CAF50'];

export function initConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  /** @type {Array<{x,y,r,color,speed,angle,spin,drift,shape}>} */
  let pieces = [];
  let spawning = true;
  let spawnTick = 0;

  function spawnPiece() {
    pieces.push({
      x:     Math.random() * canvas.width,
      y:     -12,
      r:     5 + Math.random() * 7,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speed: 2 + Math.random() * 3,
      angle: Math.random() * Math.PI * 2,
      spin:  (Math.random() - 0.5) * 0.14,
      drift: (Math.random() - 0.5) * 1.2,
      shape: Math.random() > 0.5 ? 'rect' : 'circle',
    });
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (spawning && ++spawnTick % 3 === 0) spawnPiece();

    pieces = pieces.filter(p => p.y < canvas.height + 20);

    for (const p of pieces) {
      p.y += p.speed;
      p.x += p.drift;
      p.angle += p.spin;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.88;

      if (p.shape === 'rect') {
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    requestAnimationFrame(loop);
  }

  loop();

  // Stop spawning after 6 s — let existing pieces fall out
  setTimeout(() => { spawning = false; }, 6000);
}
