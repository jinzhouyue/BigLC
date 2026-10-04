
(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);

  function open() {
    const m = $('sponsorModal');
    if (!m) return;
    m.classList.add('show');
    m.setAttribute('aria-hidden', 'false');
  }

  function close() {
    const m = $('sponsorModal');
    if (!m) return;
    m.classList.remove('show');
    m.setAttribute('aria-hidden', 'true');
  }

  function bind() {
    const btn = $('sponsorBtn');
    if (btn) btn.addEventListener('click', open);

    const x = $('sponsorClose');
    if (x) x.addEventListener('click', close);

    const ok = $('sponsorOk');
    if (ok) ok.addEventListener('click', close);

    const m = $('sponsorModal');
    if (m) {
      m.addEventListener('click', (e) => { if (e.target === m) close(); });  
    }

    const restart = $('restartBtn');
    if (restart) restart.addEventListener('click', close);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }

  window.DanaiwaSponsor = { open: open, close: close };
})();
