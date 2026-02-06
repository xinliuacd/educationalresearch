// Tiny scroll-spy for nav highlighting
(() => {
  const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const setActive = () => {
    const y = window.scrollY + 90;
    let activeId = sections[0]?.id || '';
    for (const s of sections) {
      if (s.offsetTop <= y) activeId = s.id;
    }
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${activeId}`));
  };

  window.addEventListener('scroll', setActive, { passive: true });
  window.addEventListener('load', setActive);
})();
