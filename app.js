// app.js

(function() {
  // ==================== DATA ====================
  const projects = [
    { icon: 'fa-wind', titleAr: 'رياح الزعفرانة', titleEn: 'Zafarana Wind', descAr: 'من أكبر مزارع الرياح في مصر، بطاقة 262 ميجاواط. يساهم في خفض الانبعاثات وتوفير طاقة نظيفة لآلاف المنازل.', descEn: 'One of Egypt\'s largest wind farms, 262 MW. Reduces emissions and powers thousands of homes.' },
    { icon: 'fa-sun', titleAr: 'شمس الصالحية', titleEn: 'El Salheya Solar', descAr: 'محطة الخانكة الشمسية بقدرة 50 ميجاواط تغذي مدن الصالحية الجديدة والعاشر من رمضان بالطاقة النظيفة.', descEn: 'El Khanka solar plant (50 MW) supplies clean energy to New Salheya and 10th of Ramadan cities.' },
    { icon: 'fa-recycle', titleAr: 'تدوير بلبيس', titleEn: 'Bilbeis Recycling', descAr: 'مصنع متكامل لتحويل المخلفات الصلبة إلى كهرباء وسماد عضوي، بطاقة 600 طن/يوم.', descEn: 'Integrated plant converting solid waste to electricity and compost, 600 tons/day.' },
    { icon: 'fa-train', titleAr: 'القطار الكهربائي', titleEn: 'Electric Train', descAr: 'الخط الثاني للقطار السريع (العاشر من رمضان – العاصمة الإدارية) يقلل الاعتماد على الوقود الأحفوري.', descEn: 'Line 2 of high-speed rail reduces fossil fuel dependency.' },
    { icon: 'fa-water', titleAr: 'معالجة صان الحجر', titleEn: 'San El-Hagar', descAr: 'أكبر محطة معالجة ثلاثية بالشرق الأوسط، تعيد استخدام المياه لري 330 ألف فدان.', descEn: 'Largest tertiary treatment plant in ME, reusing water for 330k acres.' },
    { icon: 'fa-seedling', titleAr: 'مستقبل مصر (الصالحية)', titleEn: 'Future of Egypt', descAr: 'استصلاح 500 ألف فدان بالطاقة الشمسية والري الحديث، إنتاج زراعي مستدام.', descEn: 'Reclaiming 500k acres with solar and modern irrigation.' },
    { icon: 'fa-bus', titleAr: 'أتوبيسات الغاز الطبيعي', titleEn: 'Natural Gas Buses', descAr: 'تحويل أسطول النقل الداخلي بالزقازيق للغاز الطبيعي، خفض التلوث بنسبة 50%.', descEn: 'Converting Zagazig public transport to natural gas, 50% pollution reduction.' },
    { icon: 'fa-solar-panel', titleAr: 'مجمع بنبان (امتداد)', titleEn: 'Benban Extension', descAr: 'محطات شمسية إضافية تغذي شبكة الشرقية بطاقة 100 ميجاواط.', descEn: 'Additional solar plants feeding Sharqia grid, 100 MW.' }
  ];

  const challengesData = {
    ar: [
      'توسيع شبكات الطاقة المتجددة لتغطية المناطق النائية',
      'زيادة كفاءة تخزين الطاقة',
      'تعزيز الوعي المجتمعي بأهمية التكنولوجيا الخضراء',
      'تمويل المشروعات الصغيرة والمتوسطة في المجال الأخضر'
    ],
    en: [
      'Expanding renewable grids to remote areas',
      'Improving energy storage efficiency',
      'Raising public awareness',
      'Financing green SMEs'
    ]
  };

  const opportunitiesData = {
    ar: [
      'الاستثمار في الهيدروجين الأخضر',
      'تحويل المخلفات الزراعية لطاقة حيوية',
      'إنشاء مجمعات صناعية خضراء',
      'توسيع مشروعات تحلية المياه بالطاقة الشمسية'
    ],
    en: [
      'Green hydrogen investment',
      'Agri-waste to bioenergy',
      'Green industrial zones',
      'Solar desalination expansion'
    ]
  };

  const sdgData = [
    { icon: 'fa-bolt', textAr: 'SDG 7: طاقة نظيفة', textEn: 'SDG 7: Clean energy' },
    { icon: 'fa-industry', textAr: 'SDG 9: صناعة وابتكار', textEn: 'SDG 9: Industry & innovation' },
    { icon: 'fa-city', textAr: 'SDG 11: مدن مستدامة', textEn: 'SDG 11: Sustainable cities' },
    { icon: 'fa-water', textAr: 'SDG 13: مناخ', textEn: 'SDG 13: Climate' },
    { icon: 'fa-tree', textAr: 'SDG 15: حياة الأرض', textEn: 'SDG 15: Life on land' }
  ];

  const chipsData = [
    { icon: 'fa-solar-panel', textAr: 'الطاقة الشمسية', textEn: 'Solar' },
    { icon: 'fa-wind', textAr: 'طاقة الرياح', textEn: 'Wind' },
    { icon: 'fa-recycle', textAr: 'إعادة تدوير', textEn: 'Recycling' },
    { icon: 'fa-train', textAr: 'نقل نظيف', textEn: 'Clean transport' },
    { icon: 'fa-water', textAr: 'معالجة مياه', textEn: 'Water treatment' },
    { icon: 'fa-seedling', textAr: 'زراعة مستدامة', textEn: 'Sustainable farming' }
  ];

  const mapMarkers = [
    { pos: [29.1, 32.6], icon: '<i class="fas fa-wind" style="font-size:2rem;color:#1f8a7c;"></i>', nameAr: 'رياح الزعفرانة', nameEn: 'Zafarana Wind', descAr: '262 ميجاواط', descEn: '262 MW' },
    { pos: [30.5, 31.9], icon: '<i class="fas fa-sun" style="font-size:2rem;color:#e08e2b;"></i>', nameAr: 'شمس الصالحية', nameEn: 'Salheya Solar', descAr: 'محطات شمسية', descEn: 'Solar plants' },
    { pos: [30.42, 31.56], icon: '<i class="fas fa-recycle" style="font-size:2rem;color:#2a9d8f;"></i>', nameAr: 'تدوير بلبيس', nameEn: 'Bilbeis Recycling', descAr: 'مصنع تدوير', descEn: 'Recycling plant' },
    { pos: [30.3, 31.75], icon: '<i class="fas fa-train" style="font-size:2rem;color:#116b7c;"></i>', nameAr: 'القطار الكهربائي', nameEn: 'Electric Train', descAr: 'الخط الثاني', descEn: 'Line 2' },
    { pos: [30.9, 31.88], icon: '<i class="fas fa-water" style="font-size:2rem;color:#2c7da0;"></i>', nameAr: 'معالجة صان الحجر', nameEn: 'San El-Hagar', descAr: 'معالجة مياه', descEn: 'Water treatment' },
    { pos: [30.55, 32.0], icon: '<i class="fas fa-seedling" style="font-size:2rem;color:#2e933c;"></i>', nameAr: 'مستقبل مصر', nameEn: 'Future of Egypt', descAr: 'استصلاح', descEn: 'Agri-reclamation' },
    { pos: [30.57, 31.5], icon: '<i class="fas fa-bus" style="font-size:2rem;color:#116b7c;"></i>', nameAr: 'أتوبيسات غاز', nameEn: 'Gas Buses', descAr: 'الزقازيق', descEn: 'Zagazig' },
    { pos: [30.4, 31.95], icon: '<i class="fas fa-solar-panel" style="font-size:2rem;color:#e08e2b;"></i>', nameAr: 'مجمع بنبان', nameEn: 'Benban Ext', descAr: 'طاقة شمسية', descEn: 'Solar' }
  ];

  // ==================== RENDER FUNCTIONS ====================
  function renderProjects() {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;
    grid.innerHTML = projects.map(p => `
      <div class="project-card">
        <div class="project-icon"><i class="fas ${p.icon}"></i></div>
        <div class="project-title lang-ar">${p.titleAr}</div>
        <div class="project-title lang-en">${p.titleEn}</div>
        <div class="project-desc lang-ar">${p.descAr}</div>
        <div class="project-desc lang-en">${p.descEn}</div>
      </div>
    `).join('');
  }

  function renderChallengesAndOpportunities() {
    const challengesList = document.getElementById('challengesList');
    const opportunitiesList = document.getElementById('opportunitiesList');
    if (!challengesList || !opportunitiesList) return;

    challengesList.innerHTML = challengesData.ar.map((item, i) => `
      <li><i class="fas fa-dot-circle"></i> <span class="lang-ar">${challengesData.ar[i]}</span><span class="lang-en">${challengesData.en[i]}</span></li>
    `).join('');

    opportunitiesList.innerHTML = opportunitiesData.ar.map((item, i) => `
      <li><i class="fas fa-dot-circle"></i> <span class="lang-ar">${opportunitiesData.ar[i]}</span><span class="lang-en">${opportunitiesData.en[i]}</span></li>
    `).join('');
  }

  function renderSdgs() {
    const sdgGrid = document.getElementById('sdgGrid');
    if (!sdgGrid) return;
    sdgGrid.innerHTML = sdgData.map(s => `
      <span class="chip"><i class="fas ${s.icon}"></i> <span class="lang-ar">${s.textAr}</span><span class="lang-en">${s.textEn}</span></span>
    `).join('');
  }

  function renderChips() {
    const chipsContainer = document.getElementById('chipsContainer');
    if (!chipsContainer) return;
    chipsContainer.innerHTML = chipsData.map(c => `
      <span class="chip"><i class="fas ${c.icon}"></i> <span class="lang-ar">${c.textAr}</span><span class="lang-en">${c.textEn}</span></span>
    `).join('');
  }

  // ==================== MAP ====================
  function initMap() {
    const map = L.map('sharqiaMap').setView([30.6, 31.8], 9);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    function createIcon(html) {
      return L.divIcon({ html, className: 'custom-marker', iconSize: [34, 34], popupAnchor: [0, -18] });
    }

    mapMarkers.forEach(m => {
      L.marker(m.pos, { icon: createIcon(m.icon) }).addTo(map)
        .bindPopup(`
          <b><span class="lang-ar">${m.nameAr}</span><span class="lang-en">${m.nameEn}</span></b><br>
          <span class="lang-ar">${m.descAr}</span><span class="lang-en">${m.descEn}</span>
        `);
    });
  }

  // ==================== THEME ====================
  function setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const newTheme = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon(newTheme);
    });

    function updateIcon(theme) {
      themeIcon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }

  // ==================== LANGUAGE ====================
  function setupLanguage() {
    const langToggle = document.getElementById('langToggle');
    const root = document.documentElement;
    const savedLang = localStorage.getItem('language') || 'ar';
    root.setAttribute('data-lang', savedLang);
    root.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');

    langToggle.addEventListener('click', () => {
      const currentLang = root.getAttribute('data-lang');
      const newLang = currentLang === 'ar' ? 'en' : 'ar';
      root.setAttribute('data-lang', newLang);
      localStorage.setItem('language', newLang);
      root.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    });
  }

  // ==================== INIT ====================
  renderProjects();
  renderChallengesAndOpportunities();
  renderSdgs();
  renderChips();
  setupTheme();
  setupLanguage();
  initMap();
})();