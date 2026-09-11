let currentLang = 'ru';

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.getElementById('logo-text').textContent = t.logo;
  document.getElementById('footer-logo').textContent = t.logo;
  document.getElementById('hero-title').innerHTML = t.heroTitle;
  document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
  document.getElementById('hero-btn1').textContent = t.heroBtn1;
  document.getElementById('hero-btn2').textContent = t.heroBtn2;
  document.getElementById('cities-title').textContent = t.citiesTitle;
  document.getElementById('cities-subtitle').textContent = t.citiesSubtitle;
  document.getElementById('features-title').textContent = t.featuresTitle;
  document.getElementById('features-subtitle').textContent = t.featuresSubtitle;
  document.getElementById('footer-text').textContent = t.footerText;
  document.getElementById('modal-pano-badge').textContent = t.panoBadge;

  const fg = document.getElementById('features-grid');
  fg.innerHTML = t.features.map((f, i) => `
    <div class="feature-card" onclick="openFeatureModal(${i})" role="button" tabindex="0">
      <div class="feature-icon">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.text}</p>
      <div class="feature-more">${t.readMore}</div>
    </div>
  `).join('');

  const cg = document.getElementById('cities-grid');
  cg.innerHTML = t.cities.map((c, i) => `
    <div class="city-card" onclick="openModal(${i})">
      <div class="city-img" style="background-image: url('${c.img}')">
        <div class="city-badge">${c.region}</div>
        <div class="pano-badge">🌐 360°</div>
        <div class="city-name-overlay">${c.name}</div>
      </div>
      <div class="city-body">
        <p class="city-desc">${c.desc}</p>
        <div class="city-meta">
          <span>🕐 ${c.hours}</span>
          <span>👥 ${c.pop}</span>
          <span style="margin-left:auto; color:var(--primary); font-weight:600;">${t.readMore}</span>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

function openModal(index) {
  const t = translations[currentLang];
  const c = t.cities[index];

  document.getElementById('modal-img').style.backgroundImage = `url('${c.img}')`;
  document.getElementById('modal-title').textContent = c.name;
  document.getElementById('modal-desc').textContent = c.long;

  document.getElementById('modal-h1').textContent = t.h1;
  document.getElementById('modal-highlights-hint').textContent = t.highlightsHint;
  document.getElementById('modal-highlights').innerHTML = c.highlights.map(h => {
    const query = encodeURIComponent(h);
    return `<a class="highlight-tag" href="https://www.google.com/maps/search/?api=1&query=${query}" target="_blank" rel="noopener">
      <span>📍</span>${h}<span class="ext-icon">↗</span></a>`;
  }).join('');

  const [lat, lng] = c.coords;
  document.getElementById('modal-pano-title').textContent = t.panoramaTitle;
  document.getElementById('modal-pano-hint').textContent = t.panoramaHint;
  const iframe = document.getElementById('modal-pano-iframe');
  iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&z=16&t=k&output=embed&hl=${currentLang === 'zh' ? 'zh-CN' : currentLang}`;

  document.getElementById('modal-h2').textContent = t.h2;
  document.getElementById('modal-season').textContent = c.season;

  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openFeatureModal(index) {
  const t = translations[currentLang];
  const f = t.features[index];
  document.getElementById('feature-modal-icon').textContent = f.icon;
  document.getElementById('feature-modal-title').textContent = f.title;
  document.getElementById('feature-modal-desc').textContent = f.long;
  document.getElementById('feature-examples-title').textContent = t.examplesTitle;
  document.getElementById('feature-examples-hint').textContent = t.examplesHint;
  document.getElementById('feature-examples').innerHTML = f.examples.map(e => {
    const query = encodeURIComponent(e);
    return `<a class="highlight-tag" href="https://www.google.com/maps/search/?api=1&query=${query}" target="_blank" rel="noopener">
      <span>📍</span>${e}<span class="ext-icon">↗</span></a>`;
  }).join('');
  document.getElementById('featureModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
  if (id === 'modal') document.getElementById('modal-pano-iframe').src = 'about:blank';
}

document.getElementById('modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal('modal'); });
document.getElementById('featureModal').addEventListener('click', e => { if (e.target.id === 'featureModal') closeModal('featureModal'); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal('modal'); closeModal('featureModal'); }
});

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const el = document.querySelector(a.getAttribute('href'));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.getElementById('features-grid').addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('feature-card')) {
    e.preventDefault(); e.target.click();
  }
});

applyLang('ru');