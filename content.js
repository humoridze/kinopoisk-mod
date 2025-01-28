const MOD_CLASS = 'kp-mod-button';

function modifyButton(btn) {
  try {
    btn.innerHTML = btn.innerHTML.replace('Буду смотреть', 'Смотреть');
    
    btn.classList.add(MOD_CLASS);
    
    const icon = btn.querySelector('.style_icon__QLJtP');
    if(icon) {
      icon.className = 'style_icon__V3VQE style_watchedIconLight__mmI4M';
    }

    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.location.href = window.location.href
        .replace('kinopoisk.ru', 'kinopoiskkk.ru');
    });
  } catch(err) {
    console.error('KP Mod Error:', err);
  }
}

function checkAndModify() {
  const btn = document.querySelector('button[title="Буду смотреть"]');
  if(btn && !btn.classList.contains(MOD_CLASS)) {
    modifyButton(btn);
  }
}

document.addEventListener('DOMContentLoaded', checkAndModify);

const observer = new MutationObserver(mutations => {
  mutations.forEach(() => checkAndModify());
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false
});