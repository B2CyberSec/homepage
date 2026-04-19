(function () {
  const MOBILE_MAX = 767;
  const SMALL_MOBILE_MAX = 389;
  const CALENDLY_URL = 'https://calendly.com/b2cybersec/kontakt?hide_gdpr_banner=1';
  let calendlyLoadPromise;

  const ensureCalendlyWidget = () => {
    if (window.Calendly) {
      return Promise.resolve(window.Calendly);
    }

    if (calendlyLoadPromise) {
      return calendlyLoadPromise;
    }

    calendlyLoadPromise = new Promise((resolve) => {
      const existing = document.querySelector('script[data-calendly-widget="true"]');

      const finish = () => resolve(window.Calendly || null);

      if (existing) {
        if (window.Calendly) {
          finish();
          return;
        }

        existing.addEventListener('load', finish, { once: true });
        window.setTimeout(finish, 4500);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.dataset.calendlyWidget = 'true';
      script.addEventListener('load', finish, { once: true });
      script.addEventListener('error', finish, { once: true });
      document.head.appendChild(script);
      window.setTimeout(finish, 4500);
    });

    return calendlyLoadPromise;
  };

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

  const splitMobileLegalLinks = () => {
    const footerLinkGroup = document.querySelector('footer .container > div:last-child > div');
    if (!footerLinkGroup) return;

    if (window.innerWidth <= MOBILE_MAX) {
      footerLinkGroup.setAttribute('data-mobile-legal-links', 'stacked');
      Object.assign(footerLinkGroup.style, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.7rem',
        width: '100%'
      });

      footerLinkGroup.querySelectorAll('a').forEach((link) => {
        Object.assign(link.style, {
          display: 'block',
          width: '100%'
        });
      });
      return;
    }

    footerLinkGroup.removeAttribute('data-mobile-legal-links');
    ['display', 'flexDirection', 'alignItems', 'gap', 'width'].forEach((prop) => {
      footerLinkGroup.style[prop] = '';
    });

    footerLinkGroup.querySelectorAll('a').forEach((link) => {
      link.style.display = '';
      link.style.width = '';
    });
  };

  const openCalendlyPopup = async () => {
    const Calendly = await ensureCalendlyWidget();
    if (Calendly?.initPopupWidget) {
      Calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }

    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  };

  const wireCalendlyTriggers = () => {
    const triggers = Array.from(document.querySelectorAll('a, button')).filter((element) => {
      const text = (element.textContent || '').trim().toLowerCase();
      const href = element.getAttribute('href') || '';
      return href === '#kontakt' && (
        text.includes('termin') ||
        text.includes('book') ||
        text.includes('meeting')
      );
    });

    triggers.forEach((trigger) => {
      if (trigger.dataset.calendlyBound === 'true') return;
      trigger.dataset.calendlyBound = 'true';
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        openCalendlyPopup();
      });
    });
  };

  const initCalendlyEmbed = async () => {
    const shell = document.querySelector('.calendly-embed-shell');
    if (!shell) return;

    let container = shell.querySelector('[data-calendly-inline-widget="true"]');
    if (!container) {
      shell.innerHTML = '';
      container = document.createElement('div');
      container.setAttribute('data-calendly-inline-widget', 'true');
      container.style.width = '100%';
      container.style.minHeight = '760px';
      shell.appendChild(container);
    }

    if (window.innerWidth <= 639) {
      container.style.minHeight = '680px';
    } else {
      container.style.minHeight = '760px';
    }

    const Calendly = await ensureCalendlyWidget();

    if (Calendly?.initInlineWidget) {
      if (container.dataset.calendlyInitialized !== 'true') {
        container.innerHTML = '';
        Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: container,
          resize: true,
        });
        container.dataset.calendlyInitialized = 'true';
      }
      return;
    }

    if (!shell.querySelector('[data-calendly-fallback="true"]')) {
      shell.innerHTML = '';
      const fallback = document.createElement('a');
      fallback.href = CALENDLY_URL;
      fallback.target = '_blank';
      fallback.rel = 'noopener noreferrer';
      fallback.textContent = 'Calendly öffnen';
      fallback.setAttribute('data-calendly-fallback', 'true');
      Object.assign(fallback.style, {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '3.6rem',
        borderRadius: '999px',
        fontWeight: '700',
        textDecoration: 'none'
      });
      shell.appendChild(fallback);
    }
  };

  const updateMobileNav = () => {
    const header = document.querySelector('header');
    const nav = header?.querySelector('nav');
    if (!header || !nav) return;

    const container = header.querySelector('.container');
    let trigger = header.querySelector('[data-mobile-nav-trigger]');

    if (window.innerWidth <= MOBILE_MAX) {
      if (container) {
        container.style.position = 'relative';
      }

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
    splitMobileLegalLinks();
    wireCalendlyTriggers();
    initCalendlyEmbed();
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
