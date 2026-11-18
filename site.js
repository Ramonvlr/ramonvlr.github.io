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

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href');
    const target = targetId ? document.querySelector(targetId) : null;
    if (!target) return;
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});
