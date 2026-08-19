/**
 * alegrä — comportamiento del sitio
 * - Menú mobile (hamburguesa)
 * - Cierre del menú al navegar o al hacer click afuera
 * - Datos de contacto centralizados (una sola fuente de verdad)
 */

// ---------- Datos de contacto: editar acá y se propaga a todo el sitio ----------
const CONTACT = {
  phone: '5493875094522',              // formato internacional, sin "+", para wa.me
  phoneDisplay: '+54 9 3875 09-4522',  // como se muestra al usuario
  instagram: 'budinnymate',            // sin @
};

function aplicarDatosDeContacto() {
  document.querySelectorAll('[data-whatsapp]').forEach((el) => {
    el.href = `https://wa.me/${CONTACT.phone}`;
  });

  document.querySelectorAll('[data-instagram]').forEach((el) => {
    el.href = `https://instagram.com/${CONTACT.instagram}`;
  });

  document.querySelectorAll('[data-phone-display]').forEach((el) => {
    el.textContent = CONTACT.phoneDisplay;
  });

  document.querySelectorAll('[data-instagram-display]').forEach((el) => {
    el.textContent = `@${CONTACT.instagram}`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  aplicarDatosDeContacto();

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
