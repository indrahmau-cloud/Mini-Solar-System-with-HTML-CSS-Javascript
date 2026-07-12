'use strict';
/* ============================================================
   SOLAR SYSTEM EXPLORER — Complete App Logic
   ============================================================ */

// ============================================================
// SECTION 1: PLANET DATA
// ============================================================
const SOLAR_SIZE   = 1100;   // px — solar system container
const SOLAR_CENTER = SOLAR_SIZE / 2; // 550

const PLANETS = {
  sun: {
    name: 'Sun', type: 'Star',
    image: 'sun.png',
    color: '#FDB813', glowColor: 'rgba(253,184,19,0.45)',
    displaySize: 68,
    orbitRadius: 0, period: 0, startAngle: 0,
    facts: {
      distance:    '0 km (center of solar system)',
      diameter:    '1,392,700 km (109× Earth)',
      moons:       'N/A',
      dayLength:   '25 Earth days (equatorial)',
      yearLength:  '225 million years (galactic orbit)',
      temperature: '5,500°C surface / 15 million°C core',
      mass:        '1.989 × 10³⁰ kg',
      gravity:     '274 m/s²',
    },
    funFacts: [
      '☀️ The Sun contains 99.86% of all the mass in the solar system!',
      '⚡ The Sun produces enough energy in one second to power Earth for 750,000 years.',
      '🌡️ The Sun\'s core is about 15 million degrees Celsius — hotter than anything else nearby.',
      '💨 The Sun loses about 4 million tons of mass every second through nuclear fusion.',
      '🔭 Light from the Sun takes exactly 8 minutes and 20 seconds to reach Earth.',
    ],
    scaleData: { diameter: 1392700, distanceMKm: 0, gravity: 274, moons: 0, periodYears: 0 },
  },

  mercury: {
    name: 'Mercury', type: 'Terrestrial Planet',
    image: 'mercury.png',
    color: '#B5B5B5', glowColor: 'rgba(181,181,181,0.3)',
    displaySize: 12,
    orbitRadius: 90, period: 8000, startAngle: 0,
    facts: {
      distance:    '57.9 million km from Sun',
      diameter:    '4,879 km',
      moons:       '0',
      dayLength:   '176 Earth days',
      yearLength:  '88 Earth days',
      temperature: '-180°C to 430°C',
      mass:        '3.285 × 10²³ kg',
      gravity:     '3.7 m/s²',
    },
    funFacts: [
      '☀️ Mercury is the closest planet to the Sun but NOT the hottest!',
      '⏰ A day on Mercury (176 Earth days) is longer than its year (88 Earth days)!',
      '🌡️ Without an atmosphere, Mercury has extreme temperature swings of over 600°C.',
      '💫 Mercury has a huge iron core taking up about 85% of its radius.',
      '🔭 Only two spacecraft have visited Mercury: Mariner 10 and MESSENGER.',
    ],
    scaleData: { diameter: 4879, distanceMKm: 57.9, gravity: 3.7, moons: 0, periodYears: 0.24 },
  },

  venus: {
    name: 'Venus', type: 'Terrestrial Planet',
    image: 'venus.png',
    color: '#E8CDA2', glowColor: 'rgba(232,205,162,0.3)',
    displaySize: 18,
    orbitRadius: 130, period: 20000, startAngle: Math.PI * 0.25,
    facts: {
      distance:    '108.2 million km from Sun',
      diameter:    '12,104 km',
      moons:       '0',
      dayLength:   '243 Earth days (retrograde)',
      yearLength:  '225 Earth days',
      temperature: '465°C (average)',
      mass:        '4.867 × 10²⁴ kg',
      gravity:     '8.87 m/s²',
    },
    funFacts: [
      '🌡️ Venus is the HOTTEST planet — 465°C average — even hotter than Mercury!',
      '🔄 Venus spins backwards! On Venus, the Sun rises in the west and sets in the east.',
      '☁️ Thick clouds of sulfuric acid trap heat in a runaway greenhouse effect.',
      '🌍 Venus is nearly the same size as Earth — sometimes called Earth\'s "evil twin".',
      '⏰ A day on Venus (243 Earth days) is longer than its year (225 Earth days)!',
    ],
    scaleData: { diameter: 12104, distanceMKm: 108.2, gravity: 8.87, moons: 0, periodYears: 0.62 },
  },

  earth: {
    name: 'Earth', type: 'Terrestrial Planet',
    image: 'earth.png',
    color: '#4FA3E0', glowColor: 'rgba(79,163,224,0.3)',
    displaySize: 20,
    orbitRadius: 175, period: 30000, startAngle: Math.PI * 0.5,
    facts: {
      distance:    '149.6 million km from Sun (1 AU)',
      diameter:    '12,742 km',
      moons:       '1 (The Moon)',
      dayLength:   '24 hours',
      yearLength:  '365.25 days',
      temperature: '15°C (average)',
      mass:        '5.972 × 10²⁴ kg',
      gravity:     '9.8 m/s²',
    },
    funFacts: [
      '🌊 About 71% of Earth\'s surface is covered in water — making it look blue from space!',
      '🦎 Earth is the only planet currently known to support life.',
      '🧲 Earth\'s magnetic field shields us from deadly solar radiation.',
      '🌙 Earth has one natural satellite — the Moon — which causes our ocean tides.',
      '🔵 Seen from space, Earth looks like a beautiful blue marble floating in darkness.',
    ],
    scaleData: { diameter: 12742, distanceMKm: 149.6, gravity: 9.8, moons: 1, periodYears: 1 },
  },

  moon: {
    name: 'Moon', type: 'Natural Satellite',
    image: 'moon.png',
    color: '#C8C8C8', glowColor: 'rgba(200,200,200,0.2)',
    displaySize: 8,
    orbitRadius: 28, period: 3200, startAngle: 0,   // orbits Earth
    facts: {
      distance:    '384,400 km from Earth',
      diameter:    '3,474 km',
      moons:       '0',
      dayLength:   '29.5 Earth days',
      yearLength:  '27.3 Earth days (orbital period)',
      temperature: '-173°C to 127°C',
      mass:        '7.342 × 10²² kg',
      gravity:     '1.62 m/s²',
    },
    funFacts: [
      '🌕 The Moon is slowly drifting away from Earth at about 3.8 cm per year!',
      '🌑 We always see the same side of the Moon because it rotates in sync with Earth.',
      '👣 Only 12 humans have walked on the Moon — all between 1969 and 1972.',
      '🌊 The Moon\'s gravity is the main driver of Earth\'s ocean tides.',
      '🔭 The Moon is the 5th largest natural satellite in the entire solar system.',
    ],
    scaleData: { diameter: 3474, distanceMKm: 0, gravity: 1.62, moons: 0, periodYears: 0.075 },
  },

  mars: {
    name: 'Mars', type: 'Terrestrial Planet',
    image: 'mars.png',
    color: '#CD5C5C', glowColor: 'rgba(205,92,92,0.3)',
    displaySize: 14,
    orbitRadius: 220, period: 56000, startAngle: Math.PI * 0.75,
    facts: {
      distance:    '227.9 million km from Sun',
      diameter:    '6,779 km',
      moons:       '2 (Phobos & Deimos)',
      dayLength:   '24 hours 37 minutes',
      yearLength:  '687 Earth days (1.9 years)',
      temperature: '-63°C (average)',
      mass:        '6.39 × 10²³ kg',
      gravity:     '3.72 m/s²',
    },
    funFacts: [
      '🔴 Mars is called the "Red Planet" because iron oxide (rust) covers its surface!',
      '🏔️ Mars has Olympus Mons, the tallest volcano in the solar system — 21.9 km high!',
      '💨 Mars can have planet-wide dust storms lasting for months.',
      '🤖 Multiple rovers (Curiosity, Perseverance) are exploring Mars right now!',
      '❄️ Mars has polar ice caps made of water ice and dry ice (carbon dioxide).',
    ],
    scaleData: { diameter: 6779, distanceMKm: 227.9, gravity: 3.72, moons: 2, periodYears: 1.88 },
  },

  jupiter: {
    name: 'Jupiter', type: 'Gas Giant',
    image: 'jupiter.png',
    color: '#C88B3A', glowColor: 'rgba(200,139,58,0.3)',
    displaySize: 44,
    orbitRadius: 305, period: 90000, startAngle: Math.PI,
    facts: {
      distance:    '778.5 million km from Sun',
      diameter:    '139,820 km',
      moons:       '95 (confirmed as of 2024)',
      dayLength:   '9 hours 56 minutes',
      yearLength:  '11.9 Earth years',
      temperature: '-108°C (cloud tops)',
      mass:        '1.898 × 10²⁷ kg',
      gravity:     '24.79 m/s²',
    },
    funFacts: [
      '🏆 Jupiter is the LARGEST planet — 1,300 Earths could fit inside it!',
      '🌀 The Great Red Spot is a storm that has raged for over 350 years!',
      '🌙 Jupiter has 95 confirmed moons — more than any other planet!',
      '⚡ Jupiter has the shortest day — less than 10 hours — despite being huge!',
      '🛡️ Jupiter\'s gravity acts as a shield, deflecting asteroids away from the inner planets.',
    ],
    scaleData: { diameter: 139820, distanceMKm: 778.5, gravity: 24.79, moons: 95, periodYears: 11.86 },
  },

  saturn: {
    name: 'Saturn', type: 'Gas Giant',
    image: 'saturn.png',
    color: '#E3D39F', glowColor: 'rgba(227,211,159,0.3)',
    displaySize: 48,
    orbitRadius: 365, period: 140000, startAngle: Math.PI * 1.25,
    facts: {
      distance:    '1.43 billion km from Sun',
      diameter:    '116,460 km',
      moons:       '146 (confirmed — most in the solar system!)',
      dayLength:   '10 hours 42 minutes',
      yearLength:  '29.5 Earth years',
      temperature: '-138°C (cloud tops)',
      mass:        '5.683 × 10²⁶ kg',
      gravity:     '10.44 m/s²',
    },
    funFacts: [
      '💍 Saturn\'s rings stretch 282,000 km wide but are only about 1 km thick!',
      '🪶 Saturn is the least dense planet — it would actually float on water!',
      '🌙 Saturn has 146 confirmed moons — the most of any planet!',
      '💨 Saturn has winds up to 1,800 km/h — faster than any hurricane on Earth.',
      '📡 The Cassini spacecraft orbited Saturn for 13 incredible years (2004–2017).',
    ],
    scaleData: { diameter: 116460, distanceMKm: 1432, gravity: 10.44, moons: 146, periodYears: 29.46 },
  },

  uranus: {
    name: 'Uranus', type: 'Ice Giant',
    image: 'uranus.png',
    color: '#7DE8E8', glowColor: 'rgba(125,232,232,0.3)',
    displaySize: 28,
    orbitRadius: 422, period: 200000, startAngle: Math.PI * 1.5,
    facts: {
      distance:    '2.87 billion km from Sun',
      diameter:    '50,724 km',
      moons:       '28',
      dayLength:   '17 hours 14 minutes',
      yearLength:  '84 Earth years',
      temperature: '-195°C (average)',
      mass:        '8.681 × 10²⁵ kg',
      gravity:     '8.69 m/s²',
    },
    funFacts: [
      '😵 Uranus is tipped 98° on its side — it literally rolls around the Sun!',
      '🌬️ Uranus is the coldest planet despite not being the farthest from the Sun.',
      '💍 Uranus has 13 known rings, discovered in 1977 — a big surprise!',
      '🔵 Its blue-green color comes from methane gas absorbing red light.',
      '🔭 Uranus was the first planet discovered with a telescope, by William Herschel in 1781.',
    ],
    scaleData: { diameter: 50724, distanceMKm: 2871, gravity: 8.69, moons: 28, periodYears: 84 },
  },

  neptune: {
    name: 'Neptune', type: 'Ice Giant',
    image: 'neptune.png',
    color: '#3F54BA', glowColor: 'rgba(63,84,186,0.3)',
    displaySize: 26,
    orbitRadius: 474, period: 260000, startAngle: Math.PI * 1.75,
    facts: {
      distance:    '4.5 billion km from Sun',
      diameter:    '49,244 km',
      moons:       '16',
      dayLength:   '16 hours 6 minutes',
      yearLength:  '165 Earth years',
      temperature: '-200°C (average)',
      mass:        '1.024 × 10²⁶ kg',
      gravity:     '11.15 m/s²',
    },
    funFacts: [
      '💨 Neptune has the STRONGEST winds in the solar system — up to 2,100 km/h!',
      '🔭 Neptune was discovered mathematically before it was actually seen through a telescope!',
      '🌑 Triton, Neptune\'s largest moon, orbits backwards — opposite to Neptune\'s spin.',
      '🌀 Neptune has a "Great Dark Spot" similar to Jupiter\'s Great Red Spot.',
      '📡 Only Voyager 2 has visited Neptune, flying by in 1989.',
    ],
    scaleData: { diameter: 49244, distanceMKm: 4495, gravity: 11.15, moons: 16, periodYears: 164.8 },
  },

  pluto: {
    name: 'Pluto', type: 'Dwarf Planet',
    image: 'pluto.png',
    color: '#C9A882', glowColor: 'rgba(201,168,130,0.2)',
    displaySize: 9,
    orbitRadius: 518, period: 390000, startAngle: Math.PI * 0.33,
    facts: {
      distance:    '5.9 billion km from Sun (average)',
      diameter:    '2,376 km',
      moons:       '5 (Charon, Styx, Nix, Kerberos, Hydra)',
      dayLength:   '6.4 Earth days',
      yearLength:  '248 Earth years',
      temperature: '-225°C (average)',
      mass:        '1.303 × 10²² kg',
      gravity:     '0.62 m/s²',
    },
    funFacts: [
      '🪐 Pluto was reclassified from a planet to a dwarf planet in 2006.',
      '❤️ New Horizons found a giant heart-shaped region of nitrogen ice on Pluto in 2015!',
      '🌙 Pluto\'s moon Charon is so big the two orbit each other like a double-dwarf system.',
      '❄️ Pluto is so cold that its atmosphere can freeze and snow down on the surface.',
      '🔭 Pluto was discovered in 1930 by 24-year-old Clyde Tombaugh at the Lowell Observatory.',
    ],
    scaleData: { diameter: 2376, distanceMKm: 5906, gravity: 0.62, moons: 5, periodYears: 248 },
  },
};

// ============================================================
// SECTION 2: QUIZ QUESTION BANK
// ============================================================
const QUIZ_BANK = [
  {
    question: 'Which is the largest planet in our solar system?',
    options: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'],
    correct: 1,
    explanation: 'Jupiter is the largest planet — over 1,300 Earths could fit inside it!',
    planet: 'jupiter',
  },
  {
    question: 'Which planet has the most confirmed moons (as of 2024)?',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correct: 1,
    explanation: 'Saturn has 146 confirmed moons — the most of any planet in our solar system!',
    planet: 'saturn',
  },
  {
    question: 'Which planet is called the "Red Planet"?',
    options: ['Venus', 'Jupiter', 'Mars', 'Mercury'],
    correct: 2,
    explanation: 'Mars is the Red Planet because iron oxide (rust) covers its surface, giving it that distinctive reddish colour.',
    planet: 'mars',
  },
  {
    question: 'Which planet is closest to the Sun?',
    options: ['Venus', 'Earth', 'Mars', 'Mercury'],
    correct: 3,
    explanation: 'Mercury is the closest planet to the Sun, at only 57.9 million km away.',
    planet: 'mercury',
  },
  {
    question: 'Which is the hottest planet in our solar system?',
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    correct: 1,
    explanation: 'Venus averages 465°C — even hotter than Mercury! Its thick atmosphere traps heat like a greenhouse.',
    planet: 'venus',
  },
  {
    question: 'Which planet is tilted so far it rolls around the Sun on its side?',
    options: ['Neptune', 'Saturn', 'Uranus', 'Jupiter'],
    correct: 2,
    explanation: 'Uranus is tilted 98° — it essentially rolls around the Sun on its side!',
    planet: 'uranus',
  },
  {
    question: 'Which planet has a massive storm called the "Great Red Spot"?',
    options: ['Saturn', 'Neptune', 'Mars', 'Jupiter'],
    correct: 3,
    explanation: 'Jupiter\'s Great Red Spot is a storm that has been raging for over 350 years!',
    planet: 'jupiter',
  },
  {
    question: 'Which planet has the strongest winds in the solar system?',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correct: 3,
    explanation: 'Neptune\'s winds reach up to 2,100 km/h — the fastest of any planet!',
    planet: 'neptune',
  },
  {
    question: 'Which body was reclassified as a "dwarf planet" in 2006?',
    options: ['Mars', 'Mercury', 'Pluto', 'Neptune'],
    correct: 2,
    explanation: 'Pluto was reclassified as a dwarf planet by the International Astronomical Union in 2006.',
    planet: 'pluto',
  },
  {
    question: 'What is the smallest of the 8 official planets?',
    options: ['Pluto', 'Mars', 'Mercury', 'Venus'],
    correct: 2,
    explanation: 'Mercury is the smallest planet with a diameter of only 4,879 km.',
    planet: 'mercury',
  },
  {
    question: 'Which planet has the shortest day?',
    options: ['Mars', 'Jupiter', 'Saturn', 'Earth'],
    correct: 1,
    explanation: 'Despite being enormous, Jupiter rotates in just under 10 hours — the shortest day of any planet!',
    planet: 'jupiter',
  },
  {
    question: 'How many moons does Earth have?',
    options: ['0', '1', '2', '3'],
    correct: 1,
    explanation: 'Earth has exactly 1 natural satellite — The Moon!',
    planet: 'earth',
  },
  {
    question: 'On which planet is a day longer than its year?',
    options: ['Mars', 'Mercury', 'Venus', 'Saturn'],
    correct: 2,
    explanation: 'Venus rotates so slowly that its day (243 Earth days) is longer than its year (225 Earth days)!',
    planet: 'venus',
  },
  {
    question: 'Which planet is known as Earth\'s "twin" because of similar size?',
    options: ['Mars', 'Mercury', 'Neptune', 'Venus'],
    correct: 3,
    explanation: 'Venus (diameter 12,104 km) is nearly the same size as Earth (12,742 km) — earning it the nickname "Earth\'s twin."',
    planet: 'venus',
  },
  {
    question: 'Where is Olympus Mons, the tallest volcano in the solar system?',
    options: ['Earth', 'Venus', 'Mars', 'Mercury'],
    correct: 2,
    explanation: 'Olympus Mons on Mars is 21.9 km high — nearly 3× taller than Mount Everest!',
    planet: 'mars',
  },
  {
    question: 'Which planet would float on water because it is less dense than water?',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correct: 1,
    explanation: 'Saturn is the least dense planet in the solar system — less dense than water, so it would float!',
    planet: 'saturn',
  },
];

// ============================================================
// SECTION 3: ACHIEVEMENTS
// ============================================================
const ACHIEVEMENTS_DEF = {
  spaceExplorer: {
    icon: '🌟',
    title: 'Space Explorer',
    description: 'Complete your first quiz',
  },
  planetMaster: {
    icon: '🚀',
    title: 'Planet Master',
    description: 'Score 80% or higher on a quiz',
  },
  solarSystemExpert: {
    icon: '🪐',
    title: 'Solar System Expert',
    description: 'Complete the Speed Challenge',
  },
  speedDemon: {
    icon: '⚡',
    title: 'Speed Demon',
    description: 'Score 100% in Challenge Mode',
  },
  curiousMind: {
    icon: '🔍',
    title: 'Curious Mind',
    description: 'Explore all 9 planets & the Moon',
  },
  comparologist: {
    icon: '📊',
    title: 'Comparologist',
    description: 'Compare two planets side by side',
  },
  perfectScore: {
    icon: '💯',
    title: 'Perfect Score!',
    description: 'Answer every quiz question correctly',
  },
};

// ============================================================
// SECTION 4: APP STATE
// ============================================================
const state = {
  currentMode: 'explore',
  selectedPlanet: null,
  infoPanelOpen: false,
  theme: 'dark',
  largeText: false,
  animationSpeed: 1,
  zoomLevel: 0.68,
  panX: 0, panY: 0,

  // Quiz
  quizQuestions: [], quizCurrentIndex: 0, quizScore: 0, quizAnswered: false,

  // Challenge
  chalQuestions: [], chalCurrentIndex: 0, chalScore: 0,
  chalTimerId: null, chalTimeLeft: 15,

  // Compare
  compareA: null, compareB: null,

  // Scale
  currentScale: 'size',

  // Achievements
  achievements: {},
  viewedPlanets: new Set(),

  // TTS
  isSpeaking: false,

  // Animation
  planetAngles: {},
  moonAngle: 0,
  animFrameId: null,
  lastTs: null,
};

// ============================================================
// SECTION 5: INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  loadAchievements();
  buildSolarSystem();
  setupEventListeners();
  startAnimation();
  populateCompareDropdowns();
  renderScaleDisplay('size');
  renderAchievements();
});

// ============================================================
// SECTION 6: STARS CANVAS
// ============================================================
function initStars() {
  const canvas = document.getElementById('stars-canvas');
  const ctx    = canvas.getContext('2d');
  let stars    = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = Array.from({ length: 350 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.2,
      op: Math.random(),
      spd: Math.random() * 0.008 + 0.002,
      dir: Math.random() > 0.5 ? 1 : -1,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.op += s.spd * s.dir;
      if (s.op >= 1)   { s.op = 1;   s.dir = -1; }
      if (s.op <= 0.1) { s.op = 0.1; s.dir =  1; }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.op})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
}

// ============================================================
// SECTION 7: BUILD SOLAR SYSTEM DOM
// ============================================================
function buildSolarSystem() {
  initStars();
  const container = document.getElementById('solar-system');

  // Orbit rings
  Object.keys(PLANETS).forEach(key => {
    const p = PLANETS[key];
    if (key === 'sun' || key === 'moon' || p.orbitRadius === 0) return;
    const ring = document.createElement('div');
    ring.className = 'orbit-ring';
    ring.id = `orbit-${key}`;
    const d = p.orbitRadius * 2;
    ring.style.width  = d + 'px';
    ring.style.height = d + 'px';
    container.appendChild(ring);
  });

  // Asteroid belt (between Mars 220 and Jupiter 305 → center ~262)
  const belt = document.createElement('div');
  belt.className = 'asteroid-belt';
  const bd = 262 * 2;
  belt.style.width  = bd + 'px';
  belt.style.height = bd + 'px';
  container.appendChild(belt);

  // Comet
  const comet = document.createElement('div');
  comet.className = 'comet';
  container.appendChild(comet);

  // Planet elements (excluding moon which is handled separately)
  Object.keys(PLANETS).forEach(key => {
    if (key === 'moon') return;
    const p = PLANETS[key];

    const el = document.createElement('div');
    el.className = key === 'sun' ? 'celestial sun-el' : 'celestial';
    el.id = `planet-${key}`;
    el.setAttribute('data-planet', key);
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `${p.name}${p.type === 'Dwarf Planet' ? ' (Dwarf Planet)' : ''} — click to learn more`);
    el.style.setProperty('--size', p.displaySize + 'px');
    el.style.setProperty('--glow', p.glowColor);

    if (p.type === 'Dwarf Planet') el.classList.add('dwarf-planet');

    el.innerHTML = `
      ${key === 'sun' ? '<div class="sun-corona" aria-hidden="true"></div>' : ''}
      <div class="planet-body">
        <img src="${p.image}" alt="${p.name}" draggable="false">
      </div>
      <span class="planet-label" aria-hidden="true">${p.name}${p.type === 'Dwarf Planet' ? ' ⬡' : ''}</span>
    `;

    // Sun positioned at center
    if (key === 'sun') {
      el.style.left = SOLAR_CENTER + 'px';
      el.style.top  = SOLAR_CENTER + 'px';
    }

    container.appendChild(el);
  });

  // Moon element (orbits Earth)
  const moonEl = document.createElement('div');
  moonEl.className = 'celestial';
  moonEl.id = 'planet-moon';
  moonEl.setAttribute('data-planet', 'moon');
  moonEl.setAttribute('tabindex', '0');
  moonEl.setAttribute('role', 'button');
  moonEl.setAttribute('aria-label', 'Moon — click to learn more');
  moonEl.style.setProperty('--size', '8px');
  moonEl.style.setProperty('--glow', PLANETS.moon.glowColor);
  moonEl.innerHTML = `
    <div class="planet-body">
      <img src="moon.png" alt="Moon" draggable="false">
    </div>
    <span class="planet-label" aria-hidden="true">Moon</span>
  `;
  container.appendChild(moonEl);

  // Initialize planet angles from startAngle values
  Object.keys(PLANETS).forEach(key => {
    state.planetAngles[key] = PLANETS[key].startAngle || 0;
  });
  state.moonAngle = 0;
}

// ============================================================
// SECTION 8: ANIMATION LOOP
// ============================================================
function startAnimation() {
  if (state.animFrameId) cancelAnimationFrame(state.animFrameId);
  state.lastTs = null;
  state.animFrameId = requestAnimationFrame(animFrame);
}

function animFrame(ts) {
  if (!state.lastTs) state.lastTs = ts;
  const dt    = Math.min(ts - state.lastTs, 100); // cap dt to prevent jumps
  state.lastTs = ts;

  const spd = state.animationSpeed;

  // Update each planet's angle and position
  Object.keys(PLANETS).forEach(key => {
    const p = PLANETS[key];
    if (key === 'sun' || key === 'moon' || p.period === 0) return;

    const angSpeed = (2 * Math.PI) / p.period; // rad per ms
    state.planetAngles[key] = (state.planetAngles[key] + angSpeed * dt * spd) % (2 * Math.PI);

    const angle = state.planetAngles[key];
    const x = SOLAR_CENTER + Math.cos(angle) * p.orbitRadius;
    const y = SOLAR_CENTER + Math.sin(angle) * p.orbitRadius;

    const el = document.getElementById(`planet-${key}`);
    if (el) { el.style.left = x + 'px'; el.style.top = y + 'px'; }
  });

  // Moon orbits Earth
  const moonAngSpeed = (2 * Math.PI) / PLANETS.moon.period;
  state.moonAngle = (state.moonAngle + moonAngSpeed * dt * spd) % (2 * Math.PI);

  const earthEl = document.getElementById('planet-earth');
  const moonEl  = document.getElementById('planet-moon');
  if (earthEl && moonEl) {
    const ex = parseFloat(earthEl.style.left) || SOLAR_CENTER;
    const ey = parseFloat(earthEl.style.top)  || SOLAR_CENTER;
    moonEl.style.left = (ex + Math.cos(state.moonAngle) * PLANETS.moon.orbitRadius) + 'px';
    moonEl.style.top  = (ey + Math.sin(state.moonAngle) * PLANETS.moon.orbitRadius) + 'px';
  }

  state.animFrameId = requestAnimationFrame(animFrame);
}

// ============================================================
// SECTION 9: PLANET INTERACTION
// ============================================================
function onPlanetClick(key) {
  state.selectedPlanet = key;
  state.viewedPlanets.add(key);
  openInfoPanel(key);

  // Check "Curious Mind" — viewed all main planets + moon
  const allPlanets = ['mercury','venus','earth','moon','mars','jupiter','saturn','uranus','neptune','pluto'];
  if (allPlanets.every(p => state.viewedPlanets.has(p))) {
    unlockAchievement('curiousMind');
  }
}

function openInfoPanel(key) {
  const p = PLANETS[key];
  if (!p) return;

  // Image
  const img = document.getElementById('info-img');
  img.src = p.image;
  img.alt = p.name;
  img.style.animationDuration = `${p.displaySize < 20 ? 25 : 18}s`;

  // Glow
  document.getElementById('info-glow').style.background =
    `radial-gradient(circle, ${p.glowColor} 0%, transparent 70%)`;

  // Header
  document.getElementById('info-name').textContent = p.name;
  document.getElementById('info-type').textContent = p.type;

  // Stats
  const f = p.facts;
  const statsData = [
    { icon: '📍', label: 'Distance from Sun', value: f.distance },
    { icon: '📏', label: 'Diameter',          value: f.diameter },
    { icon: '🌙', label: 'Moons',             value: f.moons },
    { icon: '⏱️', label: 'Day Length',        value: f.dayLength },
    { icon: '🔄', label: 'Year Length',       value: f.yearLength },
    { icon: '🌡️', label: 'Temperature',      value: f.temperature },
    { icon: '⚖️', label: 'Mass',             value: f.mass },
    { icon: '⬇️', label: 'Gravity',          value: f.gravity },
  ];

  document.getElementById('info-stats').innerHTML = statsData.map(({ icon, label, value }) => `
    <div class="stat-item" role="listitem">
      <span class="stat-icon" aria-hidden="true">${icon}</span>
      <span class="stat-label">${label}</span>
      <span class="stat-value">${value}</span>
    </div>
  `).join('');

  // Fun facts
  document.getElementById('info-facts-list').innerHTML =
    p.funFacts.map(fact => `<li class="fact-item">${fact}</li>`).join('');

  // Show panel
  const panel = document.getElementById('info-panel');
  panel.setAttribute('aria-hidden', 'false');
  panel.classList.add('open');
  state.infoPanelOpen = true;

  // Stop any ongoing speech
  stopSpeech();
}

function closeInfoPanel() {
  const panel = document.getElementById('info-panel');
  panel.setAttribute('aria-hidden', 'true');
  panel.classList.remove('open');
  state.infoPanelOpen = false;
  state.selectedPlanet = null;
  stopSpeech();
}

function highlightPlanet(key) {
  const el = document.getElementById(`planet-${key}`);
  if (!el) return;
  el.classList.add('highlighted');
  setTimeout(() => el.classList.remove('highlighted'), 3000);
}

// ============================================================
// SECTION 10: TEXT-TO-SPEECH
// ============================================================
function speakPlanetInfo(key) {
  if (!('speechSynthesis' in window)) {
    alert('Text-to-speech is not supported in your browser. Try Chrome or Edge!');
    return;
  }
  const p = PLANETS[key];
  const f = p.facts;

  const text = [
    `${p.name}. ${p.type}.`,
    `Distance from the Sun: ${f.distance}.`,
    `Diameter: ${f.diameter}.`,
    `Number of moons: ${f.moons}.`,
    `Length of a day: ${f.dayLength}.`,
    `Length of a year: ${f.yearLength}.`,
    `Average temperature: ${f.temperature}.`,
    `Gravity: ${f.gravity}.`,
    `Here are some fun facts about ${p.name}.`,
    ...p.funFacts.map((fact, i) => `Fact ${i + 1}: ${fact.replace(/[\u{1F300}-\u{1FAFF}]/gu, '')}`),
  ].join(' ');

  stopSpeech();

  const utterance        = new SpeechSynthesisUtterance(text);
  utterance.rate         = 0.88;
  utterance.pitch        = 1.05;
  utterance.volume       = 1;
  utterance.onend        = () => { state.isSpeaking = false; updateListenBtn(); };
  utterance.onerror      = () => { state.isSpeaking = false; updateListenBtn(); };

  state.isSpeaking = true;
  updateListenBtn();
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  state.isSpeaking = false;
  updateListenBtn();
}

function updateListenBtn() {
  const btn = document.getElementById('listen-btn');
  if (!btn) return;
  btn.innerHTML = state.isSpeaking
    ? '<span class="btn-icon" aria-hidden="true">⏹️</span> Stop'
    : '<span class="btn-icon" aria-hidden="true">🔊</span> Listen';
}

// ============================================================
// SECTION 11: SEARCH
// ============================================================
function initSearch() {
  const input    = document.getElementById('search-input');
  const dropdown = document.getElementById('search-dropdown');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { dropdown.classList.add('hidden'); return; }

    const matches = Object.keys(PLANETS).filter(key =>
      PLANETS[key].name.toLowerCase().includes(q)
    );

    if (!matches.length) { dropdown.classList.add('hidden'); return; }

    dropdown.innerHTML = matches.map(key => `
      <div class="search-item" data-planet="${key}" role="option" tabindex="0"
           aria-label="${PLANETS[key].name}, ${PLANETS[key].type}">
        <img src="${PLANETS[key].image}" alt="${PLANETS[key].name}" class="search-item-img">
        <div>
          <div class="search-item-name">${PLANETS[key].name}</div>
          <div class="search-item-type">${PLANETS[key].type}</div>
        </div>
      </div>
    `).join('');

    dropdown.classList.remove('hidden');

    dropdown.querySelectorAll('.search-item').forEach(item => {
      const select = () => {
        const key = item.dataset.planet;
        dropdown.classList.add('hidden');
        input.value = '';
        switchMode('explore');
        onPlanetClick(key);
        highlightPlanet(key);
        document.getElementById(`planet-${key}`)?.focus();
      };
      item.addEventListener('click', select);
      item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') select(); });
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-container')) dropdown.classList.add('hidden');
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { dropdown.classList.add('hidden'); input.value = ''; }
  });
}

// ============================================================
// SECTION 12: QUIZ MODE
// ============================================================
function startQuiz() {
  const shuffled = [...QUIZ_BANK].sort(() => Math.random() - 0.5);
  state.quizQuestions    = shuffled.slice(0, 10);
  state.quizCurrentIndex = 0;
  state.quizScore        = 0;
  state.quizAnswered     = false;

  showPanel('quiz-question', 'quiz-mode');
  renderQuizQ();
}

function renderQuizQ() {
  const q     = state.quizQuestions[state.quizCurrentIndex];
  const total = state.quizQuestions.length;
  const cur   = state.quizCurrentIndex + 1;

  // Progress
  document.getElementById('quiz-prog-fill').style.width = `${((cur - 1) / total) * 100}%`;
  document.getElementById('quiz-status').textContent    = `Question ${cur} of ${total} • Score: ${state.quizScore}`;

  // Planet thumbnail
  const thumb = document.getElementById('quiz-q-planet');
  if (q.planet && PLANETS[q.planet]) {
    thumb.style.cssText = `background-image:url(${PLANETS[q.planet].image});display:block;`;
  } else {
    thumb.style.display = 'none';
  }

  // Question text
  document.getElementById('quiz-q-text').textContent = q.question;

  // Shuffle options
  const pairs        = q.options.map((opt, i) => ({ opt, i })).sort(() => Math.random() - 0.5);
  const correctOpt   = q.options[q.correct];
  const newCorrectIdx = pairs.findIndex(p => p.opt === correctOpt);

  const grid = document.getElementById('quiz-options');
  grid.innerHTML = pairs.map(({ opt }, idx) => `
    <button class="option-btn" data-idx="${idx}" data-correct="${idx === newCorrectIdx}"
            aria-label="Option ${idx + 1}: ${opt}">
      <span class="option-letter" aria-hidden="true">${'ABCD'[idx]}</span>
      <span class="option-text">${opt}</span>
    </button>
  `).join('');

  document.getElementById('quiz-feedback').className = 'quiz-feedback hidden';
  document.getElementById('quiz-next-btn').className = 'btn-primary hidden';
  state.quizAnswered = false;

  grid.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.quizAnswered) return;
      handleQuizAnswer(btn, q, newCorrectIdx);
    });
  });
}

function handleQuizAnswer(btn, q, correctIdx) {
  state.quizAnswered = true;
  const isCorrect = btn.dataset.correct === 'true';
  if (isCorrect) state.quizScore++;

  // Style options
  document.querySelectorAll('#quiz-options .option-btn').forEach((b, i) => {
    b.disabled = true;
    if (parseInt(b.dataset.idx) === correctIdx) b.classList.add('correct');
    else if (b === btn && !isCorrect)           b.classList.add('wrong');
  });

  // Feedback
  const fb = document.getElementById('quiz-feedback');
  document.getElementById('quiz-feedback-icon').textContent = isCorrect ? '✅' : '❌';
  document.getElementById('quiz-feedback-text').textContent = isCorrect
    ? `Correct! ${q.explanation}`
    : `Not quite. ${q.explanation}`;
  fb.className = `quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`;

  // Next button
  const nxt = document.getElementById('quiz-next-btn');
  nxt.className = 'btn-primary';
  const isLast = state.quizCurrentIndex >= state.quizQuestions.length - 1;
  nxt.textContent = isLast ? 'See Results 🏆' : 'Next Question →';

  // Update score in status
  document.getElementById('quiz-status').textContent =
    `Question ${state.quizCurrentIndex + 1} of ${state.quizQuestions.length} • Score: ${state.quizScore}`;
}

function quizNext() {
  const isLast = state.quizCurrentIndex >= state.quizQuestions.length - 1;
  if (isLast) { showQuizResults(); return; }
  state.quizCurrentIndex++;
  renderQuizQ();
}

function showQuizResults() {
  const score = state.quizScore;
  const total = state.quizQuestions.length;
  const pct   = Math.round((score / total) * 100);

  showPanel('quiz-result', 'quiz-mode');
  document.getElementById('quiz-prog-fill').style.width = '100%';

  let emoji = '😔', badge = '', msg = '';
  if (pct === 100) {
    emoji = '💯'; badge = '💯 Perfect Score!'; msg = '🎉 PERFECT! You know the solar system inside out!';
    unlockAchievement('perfectScore');
    unlockAchievement('planetMaster');
    unlockAchievement('spaceExplorer');
  } else if (pct >= 80) {
    emoji = '🏆'; badge = '🚀 Planet Master!'; msg = '🌟 Excellent work — you\'re a true Planet Master!';
    unlockAchievement('planetMaster');
    unlockAchievement('spaceExplorer');
  } else if (pct >= 60) {
    emoji = '🌟'; badge = '🌟 Space Explorer'; msg = '👍 Good job! Keep exploring to learn more.';
    unlockAchievement('spaceExplorer');
  } else if (pct >= 40) {
    emoji = '📚'; badge = ''; msg = '📚 Keep studying! The solar system has so much to discover.';
  } else {
    emoji = '🔭'; badge = ''; msg = '🔭 Start in Explore Mode to learn about each planet, then try again!';
  }

  document.getElementById('quiz-result-emoji').textContent = emoji;
  document.getElementById('quiz-result-score').innerHTML = `
    <div class="score-circle">
      <span class="score-num">${score}/${total}</span>
      <span class="score-pct">${pct}%</span>
    </div>`;
  document.getElementById('quiz-result-badge').textContent = badge;
  document.getElementById('quiz-result-msg').textContent   = msg;
}

// ============================================================
// SECTION 13: CHALLENGE MODE
// ============================================================
function startChallenge() {
  clearChalTimer();
  const shuffled = [...QUIZ_BANK].sort(() => Math.random() - 0.5);
  state.chalQuestions    = shuffled.slice(0, 10);
  state.chalCurrentIndex = 0;
  state.chalScore        = 0;

  showPanel('chal-question', 'challenge-mode');
  renderChalQ();
}

function renderChalQ() {
  const q     = state.chalQuestions[state.chalCurrentIndex];
  const total = state.chalQuestions.length;
  const cur   = state.chalCurrentIndex + 1;

  document.getElementById('chal-prog-fill').style.width = `${((cur - 1) / total) * 100}%`;
  document.getElementById('chal-status').textContent    = `Question ${cur} of ${total}`;
  document.getElementById('chal-q-text').textContent    = q.question;

  state.chalTimeLeft = 15;
  updateTimerUI(15);

  // Shuffle options
  const opts          = [...q.options].sort(() => Math.random() - 0.5);
  const correctOpt    = q.options[q.correct];
  const newCorrectIdx = opts.indexOf(correctOpt);

  const grid = document.getElementById('chal-options');
  grid.innerHTML = opts.map((opt, i) => `
    <button class="option-btn" data-idx="${i}" data-correct="${i === newCorrectIdx}"
            aria-label="Option ${i + 1}: ${opt}">
      <span class="option-letter" aria-hidden="true">${'ABCD'[i]}</span>
      <span class="option-text">${opt}</span>
    </button>
  `).join('');

  document.getElementById('chal-feedback').className = 'quiz-feedback hidden';

  grid.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.chalTimerId === null) return; // already answered / timed out
      clearChalTimer();
      handleChalAnswer(btn, q, newCorrectIdx, false);
    });
  });

  // Start timer
  state.chalTimerId = setInterval(() => {
    state.chalTimeLeft--;
    updateTimerUI(state.chalTimeLeft);
    if (state.chalTimeLeft <= 0) {
      clearChalTimer();
      handleChalTimeout(q, newCorrectIdx);
    }
  }, 1000);
}

function clearChalTimer() {
  if (state.chalTimerId !== null) { clearInterval(state.chalTimerId); state.chalTimerId = null; }
}

function updateTimerUI(sec) {
  const num  = document.getElementById('timer-num');
  const ring = document.getElementById('timer-ring');
  if (num)  num.textContent  = sec;
  if (ring) {
    const circ = 2 * Math.PI * 20; // r=20
    const pct  = sec / 15;
    ring.style.strokeDasharray = `${circ * pct} ${circ}`;
    ring.style.stroke = pct > 0.6 ? '#4ade80' : pct > 0.3 ? '#facc15' : '#f87171';
  }
}

function handleChalAnswer(btn, q, correctIdx, timedOut) {
  const isCorrect = !timedOut && btn.dataset.correct === 'true';
  if (isCorrect) state.chalScore++;

  document.querySelectorAll('#chal-options .option-btn').forEach(b => {
    b.disabled = true;
    if (parseInt(b.dataset.idx) === correctIdx) b.classList.add('correct');
    else if (b === btn && !isCorrect)           b.classList.add('wrong');
  });

  const text = timedOut
    ? `⏰ Time's up! ${q.explanation}`
    : isCorrect
      ? `✅ Correct! ${q.explanation}`
      : `❌ Not quite. ${q.explanation}`;

  const fb = document.getElementById('chal-feedback');
  document.getElementById('chal-feedback-icon').textContent = timedOut ? '⏰' : isCorrect ? '✅' : '❌';
  document.getElementById('chal-feedback-text').textContent = isCorrect
    ? `Correct! ${q.explanation}` : timedOut ? `Time's up! ${q.explanation}` : `Not quite. ${q.explanation}`;
  fb.className = `quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`;

  setTimeout(() => {
    state.chalCurrentIndex++;
    if (state.chalCurrentIndex >= state.chalQuestions.length) showChalResults();
    else renderChalQ();
  }, 1800);
}

function handleChalTimeout(q, correctIdx) {
  handleChalAnswer({ dataset: { correct: 'false', idx: -1 } }, q, correctIdx, true);
}

function showChalResults() {
  const score = state.chalScore;
  const total = state.chalQuestions.length;
  const pct   = Math.round((score / total) * 100);

  showPanel('chal-result', 'challenge-mode');
  document.getElementById('chal-prog-fill').style.width = '100%';

  let badge = '';
  unlockAchievement('solarSystemExpert');
  if (pct === 100) { badge = '⚡ Speed Legend!'; unlockAchievement('speedDemon'); }
  else if (pct >= 80) badge = '🚀 Speed Master!';
  else badge = '🌟 Challenger!';

  document.getElementById('chal-result-score').innerHTML = `
    <div class="score-circle">
      <span class="score-num">${score}/${total}</span>
      <span class="score-pct">${pct}%</span>
    </div>`;
  document.getElementById('chal-result-badge').textContent = badge;
}

// ============================================================
// SECTION 14: COMPARE MODE
// ============================================================
function populateCompareDropdowns() {
  const opts = Object.keys(PLANETS).map(k =>
    `<option value="${k}">${PLANETS[k].name}</option>`
  ).join('');
  document.getElementById('compare-a').innerHTML = `<option value="">Select Planet A…</option>${opts}`;
  document.getElementById('compare-b').innerHTML = `<option value="">Select Planet B…</option>${opts}`;

  document.getElementById('compare-a').addEventListener('change', updateCompare);
  document.getElementById('compare-b').addEventListener('change', updateCompare);
}

function updateCompare() {
  const ka = document.getElementById('compare-a').value;
  const kb = document.getElementById('compare-b').value;

  // Update previews
  setComparePrev('a', ka);
  setComparePrev('b', kb);

  const result = document.getElementById('compare-result');
  if (!ka || !kb) { result.classList.add('hidden'); return; }

  const pa = PLANETS[ka], pb = PLANETS[kb];
  document.getElementById('compare-col-a').textContent = pa.name;
  document.getElementById('compare-col-b').textContent = pb.name;

  const rows = [
    ['Type',           pa.type,           pb.type],
    ['Distance',       pa.facts.distance, pb.facts.distance],
    ['Diameter',       pa.facts.diameter, pb.facts.diameter],
    ['Moons',          pa.facts.moons,    pb.facts.moons],
    ['Day Length',     pa.facts.dayLength,pb.facts.dayLength],
    ['Year Length',    pa.facts.yearLength,pb.facts.yearLength],
    ['Temperature',    pa.facts.temperature,pb.facts.temperature],
    ['Mass',           pa.facts.mass,     pb.facts.mass],
    ['Gravity',        pa.facts.gravity,  pb.facts.gravity],
  ];

  document.getElementById('compare-tbody').innerHTML = rows.map(([prop, va, vb]) => `
    <tr>
      <td class="prop-cell">${prop}</td>
      <td class="val-cell">${va}</td>
      <td class="val-cell">${vb}</td>
    </tr>
  `).join('');

  result.classList.remove('hidden');
  unlockAchievement('comparologist');
}

function setComparePrev(side, key) {
  const el = document.getElementById(`compare-img-${side}`);
  if (key && PLANETS[key]) {
    el.innerHTML = `
      <img src="${PLANETS[key].image}" alt="${PLANETS[key].name}">
      <div class="compare-planet-name">${PLANETS[key].name}</div>`;
  } else {
    el.innerHTML = '<div class="compare-placeholder">?</div>';
  }
}

// ============================================================
// SECTION 15: SCALE MODE
// ============================================================
const SCALE_CONFIGS = {
  size:     { label: 'Planet Diameters (km)',             getValue: k => PLANETS[k].scaleData.diameter,     color: k => PLANETS[k].color },
  distance: { label: 'Distance from Sun (million km)',    getValue: k => PLANETS[k].scaleData.distanceMKm,  color: () => '#00d9ff' },
  gravity:  { label: 'Surface Gravity (m/s²)',            getValue: k => PLANETS[k].scaleData.gravity,      color: () => '#4ade80' },
  moons:    { label: 'Number of Moons',                   getValue: k => PLANETS[k].scaleData.moons,        color: () => '#facc15' },
  period:   { label: 'Orbital Period (Earth years)',      getValue: k => PLANETS[k].scaleData.periodYears,  color: () => '#7b61ff' },
};

function renderScaleDisplay(type) {
  state.currentScale = type;
  const cfg = SCALE_CONFIGS[type];

  // All planets excluding moon for most (include for some)
  const keys = Object.keys(PLANETS);
  const entries = keys
    .map(k => ({ k, v: cfg.getValue(k) }))
    .filter(e => e.v > 0 || (type === 'distance' && e.k === 'sun'))
    .sort((a, b) => b.v - a.v);

  const maxV = Math.max(...entries.map(e => e.v), 1);

  document.getElementById('scale-display').innerHTML = `
    <h3 class="scale-label">${cfg.label}</h3>
    <div class="scale-bars">
      ${entries.map(({ k, v }) => {
        const p   = PLANETS[k];
        const pct = (v / maxV) * 100;
        return `
          <div class="scale-row" data-planet="${k}" tabindex="0" role="button"
               aria-label="${p.name}: ${fmtScale(v, type)}">
            <div class="scale-row-label">
              <img src="${p.image}" alt="${p.name}" class="scale-planet-img">
              <span>${p.name}</span>
            </div>
            <div class="scale-bar-track">
              <div class="scale-bar-fill" style="width:0%;background:${cfg.color(k)}" data-pct="${pct}">
                <span class="scale-bar-value">${fmtScale(v, type)}</span>
              </div>
            </div>
          </div>`;
      }).join('')}
    </div>`;

  // Animate bars in after paint
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll('.scale-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.pct + '%';
    });
  }));

  // Click to open info panel
  document.querySelectorAll('.scale-row').forEach(row => {
    row.addEventListener('click', () => {
      switchMode('explore');
      onPlanetClick(row.dataset.planet);
    });
  });
}

function fmtScale(v, type) {
  if (type === 'size')     return v.toLocaleString() + ' km';
  if (type === 'distance') return v === 0 ? 'Center' : v.toLocaleString() + 'M km';
  if (type === 'gravity')  return v + ' m/s²';
  if (type === 'moons')    return v + (v === 1 ? ' moon' : ' moons');
  if (type === 'period')   return v === 0 ? 'N/A' : v + ' yrs';
  return String(v);
}

// ============================================================
// SECTION 16: ACHIEVEMENTS
// ============================================================
function loadAchievements() {
  try { state.achievements = JSON.parse(localStorage.getItem('solarExplorerAch') || '{}'); }
  catch { state.achievements = {}; }
}

function saveAchievements() {
  try { localStorage.setItem('solarExplorerAch', JSON.stringify(state.achievements)); }
  catch { /* storage unavailable */ }
}

function unlockAchievement(id) {
  if (state.achievements[id]) return;
  state.achievements[id] = { ts: Date.now() };
  saveAchievements();
  renderAchievements();
  showBadgePopup(id);
}

function showBadgePopup(id) {
  const def = ACHIEVEMENTS_DEF[id];
  if (!def) return;
  const popup = document.getElementById('badge-popup');
  popup.innerHTML = `
    <div class="badge-inner">
      <span class="badge-icon">${def.icon}</span>
      <div>
        <div class="badge-earned">Achievement Unlocked!</div>
        <div class="badge-title">${def.title}</div>
      </div>
    </div>`;
  popup.classList.remove('hidden');
  requestAnimationFrame(() => popup.classList.add('show'));
  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => popup.classList.add('hidden'), 450);
  }, 3500);
}

function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;
  const unlocked = Object.keys(state.achievements).length;
  const total    = Object.keys(ACHIEVEMENTS_DEF).length;
  const counter  = document.getElementById('achievements-count');
  if (counter) counter.textContent = `${unlocked} / ${total} unlocked`;

  grid.innerHTML = Object.entries(ACHIEVEMENTS_DEF).map(([id, def]) => {
    const done = !!state.achievements[id];
    return `
      <div class="achievement-card ${done ? 'unlocked' : 'locked'}" aria-label="${def.title}: ${def.description} — ${done ? 'Unlocked' : 'Locked'}">
        <div class="ach-icon">${def.icon}</div>
        <div class="ach-info">
          <div class="ach-title">${def.title}</div>
          <div class="ach-desc">${def.description}</div>
        </div>
        <div class="${done ? 'ach-check' : 'ach-lock'}" aria-hidden="true">${done ? '✓' : '🔒'}</div>
      </div>`;
  }).join('');
}

// ============================================================
// SECTION 17: MODE NAVIGATION
// ============================================================
function switchMode(mode) {
  if (state.currentMode === mode) return;
  state.currentMode = mode;

  // Tabs
  document.querySelectorAll('.nav-tab').forEach(t => {
    const active = t.dataset.mode === mode;
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  // Panels
  document.querySelectorAll('.mode-panel').forEach(panel => {
    const active = panel.id === `${mode}-mode`;
    panel.classList.toggle('active', active);
    if (active) panel.classList.remove('hidden');
    else        panel.classList.add('hidden');
  });

  // Close info panel when leaving explore
  if (mode !== 'explore') closeInfoPanel();

  stopSpeech();
}

function showPanel(panelId, modeId) {
  const mode = document.getElementById(modeId);
  if (!mode) return;
  mode.querySelectorAll('.quiz-screen').forEach(s => {
    s.classList.toggle('hidden', s.id !== panelId);
  });
}

// ============================================================
// SECTION 18: ZOOM & PAN
// ============================================================
function initZoomPan() {
  const viewport = document.getElementById('solar-viewport');
  let dragging = false, startX = 0, startY = 0, startPX = 0, startPY = 0;

  document.getElementById('zoom-in-btn').addEventListener('click',    () => doZoom(0.15));
  document.getElementById('zoom-out-btn').addEventListener('click',   () => doZoom(-0.15));
  document.getElementById('zoom-reset-btn').addEventListener('click', resetZoom);

  viewport.addEventListener('wheel', e => { e.preventDefault(); doZoom(e.deltaY > 0 ? -0.08 : 0.08); }, { passive: false });

  viewport.addEventListener('mousedown', e => {
    if (e.target.closest('.celestial') || e.target.closest('.zoom-controls')) return;
    dragging = true; startX = e.clientX; startY = e.clientY;
    startPX = state.panX; startPY = state.panY;
    viewport.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    state.panX = startPX + (e.clientX - startX);
    state.panY = startPY + (e.clientY - startY);
    applyTransform();
  });

  window.addEventListener('mouseup', () => {
    dragging = false;
    viewport.style.cursor = 'grab';
  });

  // Touch support
  let lastPinchDist = 0;
  let touchDrag = false;

  viewport.addEventListener('touchstart', e => {
    if (e.touches.length === 1 && !e.target.closest('.celestial')) {
      touchDrag = true;
      startX = e.touches[0].clientX; startY = e.touches[0].clientY;
      startPX = state.panX; startPY = state.panY;
    }
    if (e.touches.length === 2) {
      touchDrag = false;
      lastPinchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
  }, { passive: true });

  viewport.addEventListener('touchmove', e => {
    e.preventDefault();
    if (e.touches.length === 1 && touchDrag) {
      state.panX = startPX + (e.touches[0].clientX - startX);
      state.panY = startPY + (e.touches[0].clientY - startY);
      applyTransform();
    }
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      doZoom((dist - lastPinchDist) * 0.004);
      lastPinchDist = dist;
    }
  }, { passive: false });

  viewport.addEventListener('touchend', () => { touchDrag = false; });

  resetZoom();
}

function doZoom(delta) {
  state.zoomLevel = Math.max(0.25, Math.min(2.8, state.zoomLevel + delta));
  applyTransform();
}

function resetZoom() {
  state.zoomLevel = 0.68;
  state.panX = 0; state.panY = 0;
  applyTransform();
}

function applyTransform() {
  const sys = document.getElementById('solar-system');
  if (sys) {
    sys.style.transform = `translate(calc(-50% + ${state.panX}px), calc(-50% + ${state.panY}px)) scale(${state.zoomLevel})`;
  }
}

// ============================================================
// SECTION 19: SETTINGS (Theme, Text, Speed)
// ============================================================
function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  document.getElementById('theme-btn').textContent = state.theme === 'dark' ? '🌙' : '☀️';
  saveSettings();
}

function toggleLargeText() {
  state.largeText = !state.largeText;
  document.body.classList.toggle('large-text', state.largeText);
  const btn = document.getElementById('fontsize-btn');
  btn.classList.toggle('active', state.largeText);
  saveSettings();
}

function cycleSpeed() {
  const speeds = [1, 5, 10, 50];
  state.animationSpeed = speeds[(speeds.indexOf(state.animationSpeed) + 1) % speeds.length];
  document.getElementById('speed-btn').textContent = state.animationSpeed + 'x';
}

function saveSettings() {
  try { localStorage.setItem('solarExplorerSettings', JSON.stringify({ theme: state.theme, largeText: state.largeText })); }
  catch { /* storage unavailable */ }
}

function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem('solarExplorerSettings') || '{}');
    if (s.theme) {
      state.theme = s.theme;
      document.documentElement.setAttribute('data-theme', s.theme);
      // Theme btn updated after DOM is ready in setupEventListeners
    }
    if (s.largeText) {
      state.largeText = true;
      document.body.classList.add('large-text');
    }
  } catch { /* storage unavailable */ }
}

// ============================================================
// SECTION 20: EVENT LISTENERS
// ============================================================
function setupEventListeners() {
  // Sync theme button text with loaded setting
  document.getElementById('theme-btn').textContent = state.theme === 'dark' ? '🌙' : '☀️';
  if (state.largeText) document.getElementById('fontsize-btn').classList.add('active');

  // Home ↔ App
  document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('app-screen').classList.remove('hidden');
  });

  document.getElementById('home-btn').addEventListener('click', () => {
    stopSpeech();
    closeInfoPanel();
    document.getElementById('home-screen').classList.remove('hidden');
    document.getElementById('app-screen').classList.add('hidden');
  });

  // Nav tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => switchMode(tab.dataset.mode));
  });

  // Planet clicks (event delegation)
  document.getElementById('solar-system').addEventListener('click', e => {
    const el = e.target.closest('.celestial');
    if (el?.dataset.planet) onPlanetClick(el.dataset.planet);
  });

  // Info panel
  document.getElementById('info-close-btn').addEventListener('click', closeInfoPanel);

  document.getElementById('listen-btn').addEventListener('click', () => {
    if (state.isSpeaking) stopSpeech();
    else if (state.selectedPlanet) speakPlanetInfo(state.selectedPlanet);
  });

  document.getElementById('compare-from-info-btn').addEventListener('click', () => {
    if (!state.selectedPlanet) return;
    const key = state.selectedPlanet;
    switchMode('compare');
    document.getElementById('compare-a').value = key;
    updateCompare();
  });

  // Quiz
  document.getElementById('quiz-start-btn').addEventListener('click', startQuiz);
  document.getElementById('quiz-next-btn').addEventListener('click', quizNext);
  document.getElementById('quiz-retry-btn').addEventListener('click', () => showPanel('quiz-start', 'quiz-mode'));
  document.getElementById('quiz-explore-btn').addEventListener('click', () => switchMode('explore'));

  // Challenge
  document.getElementById('chal-start-btn').addEventListener('click', startChallenge);
  document.getElementById('chal-retry-btn').addEventListener('click', () => {
    clearChalTimer();
    showPanel('chal-start', 'challenge-mode');
  });
  document.getElementById('chal-explore-btn').addEventListener('click', () => switchMode('explore'));

  // Settings
  document.getElementById('theme-btn').addEventListener('click', toggleTheme);
  document.getElementById('fontsize-btn').addEventListener('click', toggleLargeText);
  document.getElementById('speed-btn').addEventListener('click', cycleSpeed);

  // Achievements modal
  document.getElementById('achievements-btn').addEventListener('click', () => {
    renderAchievements();
    document.getElementById('achievements-modal').classList.remove('hidden');
  });
  document.getElementById('close-achievements').addEventListener('click', () =>
    document.getElementById('achievements-modal').classList.add('hidden')
  );
  document.getElementById('achievements-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('achievements-modal'))
      document.getElementById('achievements-modal').classList.add('hidden');
  });

  // Scale tabs
  document.querySelectorAll('.scale-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.scale-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderScaleDisplay(tab.dataset.scale);
    });
  });

  // Keyboard navigation
  setupKeyboard();

  // Zoom/Pan
  initZoomPan();

  // Search
  initSearch();
}

// ============================================================
// SECTION 21: KEYBOARD NAVIGATION
// ============================================================
function setupKeyboard() {
  // Planet keyboard activation
  document.getElementById('solar-system').addEventListener('keydown', e => {
    const el = e.target.closest('.celestial');
    if (!el) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onPlanetClick(el.dataset.planet);
    }
  });

  // Global shortcuts
  document.addEventListener('keydown', e => {
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;

    switch (e.key) {
      case 'Escape':
        closeInfoPanel();
        document.getElementById('achievements-modal').classList.add('hidden');
        break;
      case '+': case '=': e.preventDefault(); doZoom(0.1); break;
      case '-':           e.preventDefault(); doZoom(-0.1); break;
      case '0':           e.preventDefault(); resetZoom(); break;
      case '1': case '2': case '3': case '4': case '5': {
        const modes = ['explore','quiz','challenge','compare','scale'];
        const idx = parseInt(e.key) - 1;
        if (modes[idx]) switchMode(modes[idx]);
        break;
      }
    }
  });
}