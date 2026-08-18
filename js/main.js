/**
 * alegrä — comportamiento del sitio
 * - Menú mobile (hamburguesa)
 * - Cierre del menú al navegar o al hacer click afuera
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  if (!toggle || !links) return;

  const closeMenu = () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    links.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  };

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Cierra el menú al elegir un link (mobile)
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Cierra el menú si se hace click fuera de la nav
  document.addEventListener('click', (event) => {
    const isClickInsideNav = event.target.closest('nav');
    if (!isClickInsideNav) closeMenu();
  });

  // Año actual en el footer (copyright)
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
