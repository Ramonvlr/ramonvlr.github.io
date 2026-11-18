(() => {
  const sections = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window)) {
    sections.forEach((section) => section.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((section) => observer.observe(section));
})();
// Email obfuscation: the address is assembled in the browser, so it never
// appears as a plain mailto: link or as text in the HTML source.
document.querySelectorAll('[data-email-user][data-email-domain]').forEach((link) => {
  const user = link.getAttribute('data-email-user');
  const domain = link.getAttribute('data-email-domain').split('').reverse().join('');
  const address = user + '@' + domain;
  link.setAttribute('href', 'mailto:' + address);
  const label = link.querySelector('.email-address');
  if (label) label.textContent = address;
  else link.textContent = address;
});
