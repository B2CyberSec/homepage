(() => {
  const MOBILE_MAX = 767;
  const SMALL_MOBILE_MAX = 389;

  const updateHeroHeadline = () => {
    const h1 = document.querySelector('h1.hero-title');
    if (!h1) return;

    if (!h1.dataset.originalHtml) {
      h1.dataset.originalHtml = h1.innerHTML;
    }

    if (window.innerWidth > MOBILE_MAX) {
      h1.innerHTML = h1.dataset.originalHtml;
      return;
    }

    if (window.innerWidth <= SMALL_MOBILE_MAX) {
      h1.innerHTML = 'Cyberrisiken<br>erkennen.<br><span class="accent-word">Sicherheit<br>sichtbar<br>machen.</span>';
      return;
    }

    h1.innerHTML = 'Cyberrisiken<br>erkennen.<br><span class="accent-word">Sicherheit sichtbar<br>machen.</span>';
  };

  const updateMobileNav = () => {
    const header = document.querySelector('header');
    const nav = header?.querySelector('nav');
    if (!header || !nav) return;

    const container = header.querySelector('.container');
    let trigger = header.querySelector('[data-mobile-nav-trigger]');

    if (window.innerWidth <= MOBILE_MAX) {
      if (!trigger && container) {
        trigger = document.createElement('button');
        trigger.type = 'button';
        trigger.setAttribute('data-mobile-nav-trigger', 'true');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-label', 'Navigation öffnen');
        trigger.textContent = 'Menü';
        Object.assign(trigger.style, {
          marginLeft: 'auto',
          border: '1px solid rgba(148, 163, 184, 0.28)',
          borderRadius: '999px',
          padding: '0.55rem 0.9rem',
          fontSize: '0.82rem',
          fontWeight: '600',
          background: 'rgba(255,255,255,0.92)',
          color: 'rgb(15 23 42)',
          boxShadow: '0 12px 30px rgba(15,23,42,0.08)'
        });
        trigger.addEventListener('click', () => {
          const open = nav.dataset.mobileOpen === 'true';
          nav.dataset.mobileOpen = open ? 'false' : 'true';
          trigger.setAttribute('aria-expanded', open ? 'false' : 'true');
          updateMobileNav();
        });
        container.appendChild(trigger);
      }

      const open = nav.dataset.mobileOpen === 'true';
      Object.assign(nav.style, {
        display: open ? 'flex' : 'none',
        position: 'absolute',
        top: 'calc(100% + 0.5rem)',
        left: '1rem',
        right: '1rem',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '0.35rem',
        padding: '0.85rem',
        borderRadius: '1rem',
        background: 'rgba(255,255,255,0.96)',
        border: '1px solid rgba(148, 163, 184, 0.18)',
        boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)',
        zIndex: '60'
      });

      nav.querySelectorAll('a').forEach((link) => {
        Object.assign(link.style, {
          display: 'block',
          padding: '0.7rem 0.2rem',
          fontSize: '0.96rem'
        });
      });
      return;
    }

    if (trigger) {
      trigger.remove();
    }

    nav.dataset.mobileOpen = 'false';
    ['display','position','top','left','right','flexDirection','alignItems','gap','padding','borderRadius','background','border','boxShadow','zIndex'].forEach((prop) => {
      nav.style[prop] = '';
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.style.display = '';
      link.style.padding = '';
      link.style.fontSize = '';
    });
  };

  const apply = () => {
    updateHeroHeadline();
    updateMobileNav();
  };

  let frame = 0;
  const schedule = () => {
    window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(apply);
  };

  window.addEventListener('load', schedule);
  window.addEventListener('resize', schedule);
  document.addEventListener('DOMContentLoaded', schedule);
  schedule();
})();
