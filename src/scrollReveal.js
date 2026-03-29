/**
 * Uses IntersectionObserver to add the `.visible` class to any element
 * that has the `.reveal` class once it enters the viewport.
 */
export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after reveal so it doesn't re-trigger
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  // Observe all .reveal elements that exist now, and watch for new ones
  function observeAll() {
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
      observer.observe(el);
    });
  }

  // Run immediately, then again shortly after (sections may be added async)
  observeAll();
  setTimeout(observeAll, 100);
}
