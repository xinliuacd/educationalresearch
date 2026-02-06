(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Active nav highlighting
  const links = Array.from(document.querySelectorAll('.nav a'));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const setActive = () => {
    const y = window.scrollY + 120;
    let activeId = sections[0]?.id;
    for (const s of sections) {
      if (s.offsetTop <= y) activeId = s.id;
    }
    links.forEach(a => {
      const id = a.getAttribute('href')?.replace('#', '');
      a.classList.toggle('active', id === activeId);
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  // Copy email button
  const btn = document.getElementById('copyEmailBtn');
  if (btn) {
    btn.addEventListener('click', async () => {
      const email = btn.getAttribute('data-email') || '';
      try {
        await navigator.clipboard.writeText(email);
        const prev = btn.textContent;
        btn.textContent = 'Copied ✓';
        setTimeout(() => (btn.textContent = prev), 1200);
      } catch {
        window.location.href = `mailto:${email}`;
      }
    });
  }
})();
