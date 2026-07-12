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
      radius:      '696,340 km',
      moons:       'N/A',
      dayLength:   '25 Earth days (equatorial)',
      yearLength:  '225 million years (galactic orbit)',
      temperature: '5,500°C surface / 15 million°C core',
      atmosphere:  'Plasma atmosphere',
      planetType:  'Star',
      escapeVelocity: '617.7 km/s',
      mass:        '1.989 × 10³⁰ kg',
      gravity:     '274 m/s²',
      moonNames:   'N/A',
      discovery:   'Known since ancient times',
      mission:     'SOHO, Parker Solar Probe',
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
      radius:      '2,439.7 km',
      mass:        '3.285 × 10²³ kg',
      gravity:     '3.7 m/s²',
      temperature: '-180°C to 430°C',
      atmosphere:  'Extremely thin exosphere',
      planetType:  'Terrestrial planet',
      dayLength:   '176 Earth days',
      yearLength:  '88 Earth days',
      escapeVelocity: '4.25 km/s',
      moons:       '0',
      moonNames:   'None',
      discovery:   'Known since ancient times',
      mission:     'Messenger',
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
      radius:      '6,051.8 km',
      mass:        '4.867 × 10²⁴ kg',
      gravity:     '8.87 m/s²',
      temperature: '465°C (average)',
      atmosphere:  'Carbon dioxide, nitrogen, sulfuric acid clouds',
      planetType:  'Terrestrial planet',
      dayLength:   '243 Earth days (retrograde)',
      yearLength:  '225 Earth days',
      escapeVelocity: '10.36 km/s',
      moons:       '0',
      moonNames:   'None',
      discovery:   'Known since ancient times',
      mission:     'Magellan',
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
      radius:      '6,371 km',
      mass:        '5.972 × 10²⁴ kg',
      gravity:     '9.8 m/s²',
      temperature: '15°C (average)',
      atmosphere:  'Nitrogen, oxygen, argon, carbon dioxide',
      planetType:  'Terrestrial planet',
      dayLength:   '24 hours',
      yearLength:  '365.25 days',
      escapeVelocity: '11.19 km/s',
      moons:       '1 (The Moon)',
      moonNames:   'The Moon',
      discovery:   'Known since ancient times',
      mission:     'Apollo, Mars rovers',
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
      radius:      '1,737.4 km',
      moons:       '0',
      dayLength:   '29.5 Earth days',
      yearLength:  '27.3 Earth days (orbital period)',
      temperature: '-173°C to 127°C',
      atmosphere:  'Very thin exosphere',
      planetType:  'Natural satellite',
      escapeVelocity: '2.38 km/s',
      mass:        '7.342 × 10²² kg',
      gravity:     '1.62 m/s²',
      moonNames:   'None',
      discovery:   'Known since ancient times',
      mission:     'Apollo missions',
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
      radius:      '3,389.5 km',
      mass:        '6.39 × 10²³ kg',
      gravity:     '3.72 m/s²',
      temperature: '-63°C (average)',
      atmosphere:  'Thin carbon dioxide atmosphere',
      planetType:  'Terrestrial planet',
      dayLength:   '24 hours 37 minutes',
      yearLength:  '687 Earth days (1.9 years)',
      escapeVelocity: '5.03 km/s',
      moons:       '2 (Phobos & Deimos)',
      moonNames:   'Phobos, Deimos',
      discovery:   'Known since ancient times',
      mission:     'Curiosity, Perseverance',
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
      radius:      '69,911 km',
      mass:        '1.898 × 10²⁷ kg',
      gravity:     '24.79 m/s²',
      temperature: '-108°C (cloud tops)',
      atmosphere:  'Hydrogen, helium, traces of methane',
      planetType:  'Gas giant',
      dayLength:   '9 hours 56 minutes',
      yearLength:  '11.9 Earth years',
      escapeVelocity: '59.5 km/s',
      moons:       '95 (confirmed as of 2024)',
      moonNames:   'Io, Europa, Ganymede, Callisto',
      discovery:   'Known since ancient times',
      mission:     'Juno',
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
      radius:      '58,232 km',
      mass:        '5.683 × 10²⁶ kg',
      gravity:     '10.44 m/s²',
      temperature: '-138°C (cloud tops)',
      atmosphere:  'Hydrogen, helium, methane',
      planetType:  'Gas giant',
      dayLength:   '10 hours 42 minutes',
      yearLength:  '29.5 Earth years',
      escapeVelocity: '35.5 km/s',
      moons:       '146 (confirmed — most in the solar system!)',
      moonNames:   'Titan, Enceladus, Rhea, Dione',
      discovery:   'Known since ancient times',
      mission:     'Cassini',
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
      radius:      '25,362 km',
      mass:        '8.681 × 10²⁵ kg',
      gravity:     '8.69 m/s²',
      temperature: '-195°C (average)',
      atmosphere:  'Hydrogen, helium, methane',
      planetType:  'Ice giant',
      dayLength:   '17 hours 14 minutes',
      yearLength:  '84 Earth years',
      escapeVelocity: '21.3 km/s',
      moons:       '28',
      moonNames:   'Titania, Oberon, Umbriel, Ariel, Miranda',
      discovery:   'Discovered by William Herschel in 1781',
      mission:     'Voyager 2',
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
      radius:      '24,622 km',
      mass:        '1.024 × 10²⁶ kg',
      gravity:     '11.15 m/s²',
      temperature: '-200°C (average)',
      atmosphere:  'Hydrogen, helium, methane',
      planetType:  'Ice giant',
      dayLength:   '16 hours 6 minutes',
      yearLength:  '165 Earth years',
      escapeVelocity: '23.5 km/s',
      moons:       '16',
      moonNames:   'Triton, Nereid, Proteus',
      discovery:   'Discovered by Johann Galle in 1846',
      mission:     'Voyager 2',
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
      radius:      '1,188 km',
      mass:        '1.303 × 10²² kg',
      gravity:     '0.62 m/s²',
      temperature: '-225°C (average)',
      atmosphere:  'Thin nitrogen atmosphere',
      planetType:  'Dwarf planet',
      dayLength:   '6.4 Earth days',
      yearLength:  '248 Earth years',
      escapeVelocity: '1.21 km/s',
      moons:       '5 (Charon, Styx, Nix, Kerberos, Hydra)',
      moonNames:   'Charon, Styx, Nix, Kerberos, Hydra',
      discovery:   'Discovered by Clyde Tombaugh in 1930',
      mission:     'New Horizons',
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

const MOON_SYSTEMS = {
  mercury: [],
  venus: [],
  earth: [{ name: 'Moon', image: 'moon.png', orbitRadius: 34, period: 3800, size: 8, color: '#C8C8C8', startAngle: 0 }],
  mars: [
    { name: 'Phobos', image: 'moon.png', orbitRadius: 20, period: 2400, size: 4, color: '#D5C2A2', startAngle: 0 },
    { name: 'Deimos', image: 'moon.png', orbitRadius: 28, period: 4200, size: 3, color: '#E7E7E7', startAngle: Math.PI / 2 },
  ],
  jupiter: [
    { name: 'Io', image: 'moon.png', orbitRadius: 22, period: 1800, size: 4, color: '#F5E0A3', startAngle: 0 },
    { name: 'Europa', image: 'moon.png', orbitRadius: 30, period: 2600, size: 4, color: '#D8D8D8', startAngle: 1.2 },
    { name: 'Ganymede', image: 'moon.png', orbitRadius: 38, period: 3600, size: 5, color: '#C9B38C', startAngle: 2.2 },
    { name: 'Callisto', image: 'moon.png', orbitRadius: 46, period: 4800, size: 5, color: '#B8B0A4', startAngle: 3.5 },
  ],
  saturn: [
    { name: 'Titan', image: 'moon.png', orbitRadius: 26, period: 3400, size: 5, color: '#F0D7A2', startAngle: 0 },
    { name: 'Enceladus', image: 'moon.png', orbitRadius: 34, period: 2400, size: 3, color: '#E2E2E2', startAngle: 1.3 },
    { name: 'Rhea', image: 'moon.png', orbitRadius: 42, period: 4000, size: 4, color: '#D9CBB0', startAngle: 2.4 },
    { name: 'Dione', image: 'moon.png', orbitRadius: 50, period: 5200, size: 4, color: '#C3B7A3', startAngle: 4.1 },
  ],
  uranus: [
    { name: 'Titania', image: 'moon.png', orbitRadius: 24, period: 3000, size: 4, color: '#B7DDE8', startAngle: 0 },
    { name: 'Oberon', image: 'moon.png', orbitRadius: 32, period: 4200, size: 4, color: '#D6DDE6', startAngle: 1.1 },
    { name: 'Umbriel', image: 'moon.png', orbitRadius: 40, period: 5200, size: 3, color: '#C4C6D1', startAngle: 2.2 },
    { name: 'Ariel', image: 'moon.png', orbitRadius: 48, period: 6200, size: 4, color: '#D6E4EE', startAngle: 3.4 },
    { name: 'Miranda', image: 'moon.png', orbitRadius: 56, period: 7600, size: 3, color: '#E1D9D3', startAngle: 4.9 },
  ],
  neptune: [
    { name: 'Triton', image: 'moon.png', orbitRadius: 24, period: 2800, size: 4, color: '#D9E8FF', startAngle: 0 },
    { name: 'Nereid', image: 'moon.png', orbitRadius: 32, period: 4400, size: 3, color: '#D0D9E8', startAngle: 1.6 },
    { name: 'Proteus', image: 'moon.png', orbitRadius: 40, period: 5600, size: 3, color: '#C7CCDA', startAngle: 3.3 },
  ],
  pluto: [],
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

const GUESS_BANK = [
  { clue: 'I am the hottest planet in the solar system and my thick clouds trap heat.', answer: 'venus', options: ['Mercury', 'Venus', 'Mars', 'Neptune'] },
  { clue: 'I am the largest planet and I have a famous storm called the Great Red Spot.', answer: 'jupiter', options: ['Saturn', 'Jupiter', 'Uranus', 'Earth'] },
  { clue: 'I am the red planet and I have the tallest volcano in the solar system.', answer: 'mars', options: ['Mars', 'Mercury', 'Venus', 'Pluto'] },
  { clue: 'I am the only planet known to support life and I have one moon.', answer: 'earth', options: ['Earth', 'Neptune', 'Saturn', 'Mercury'] },
  { clue: 'I am famous for my bright rings and I am the least dense planet.', answer: 'saturn', options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'] },
];

const ORDER_PLANETS = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];

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

  // Games
  guessQuestions: [],
  guessIndex: 0,
  guessScore: 0,
  orderPool: [],
  orderAnswer: [],

  // TTS
  isSpeaking: false,
  contrastMode: false,

  // Animation
  planetAngles: {},
  moonAngles: {},
  moonAngle: 0,
  animFrameId: null,
  lastTs: null,
  hoverTimerId: null,
  hoveredPlanet: null,
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
  let dust     = [];
  let shootingStars = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = Array.from({ length: 420 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.2,
      op: Math.random(),
      spd: Math.random() * 0.008 + 0.002,
      dir: Math.random() > 0.5 ? 1 : -1,
    }));
    dust = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.4,
      op: Math.random() * 0.35 + 0.08,
      drift: Math.random() * 0.2 + 0.05,
    }));
    shootingStars = [];
  }

  function spawnShootingStar() {
    shootingStars.push({
      x: Math.random() * canvas.width * 0.8,
      y: Math.random() * 220,
      len: 80 + Math.random() * 120,
      speed: 8 + Math.random() * 6,
      life: 0,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const nebula = ctx.createRadialGradient(canvas.width * 0.25, canvas.height * 0.2, 0, canvas.width * 0.25, canvas.height * 0.2, canvas.width * 0.65);
    nebula.addColorStop(0, 'rgba(123,97,255,0.16)');
    nebula.addColorStop(0.5, 'rgba(0,217,255,0.08)');
    nebula.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = nebula;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const s of stars) {
      s.op += s.spd * s.dir;
      if (s.op >= 1)   { s.op = 1;   s.dir = -1; }
      if (s.op <= 0.1) { s.op = 0.1; s.dir =  1; }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.op})`;
      ctx.fill();
    }

    for (const d of dust) {
      d.x += d.drift * 0.4;
      d.y += 0.02;
      if (d.x > canvas.width + 6) d.x = -6;
      if (d.y > canvas.height + 6) d.y = -6;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${d.op})`;
      ctx.fill();
    }

    if (Math.random() < 0.012) spawnShootingStar();
    shootingStars = shootingStars.filter(st => {
      st.x += st.speed;
      st.y += st.speed * 0.3;
      st.life += 0.02;
      if (st.x - st.len > canvas.width || st.y > canvas.height) return false;
      ctx.strokeStyle = `rgba(255,255,255,${1 - st.life})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(st.x, st.y);
      ctx.lineTo(st.x - st.len, st.y - st.len * 0.35);
      ctx.stroke();
      return true;
    });

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

  // Moon systems for planets
  Object.keys(MOON_SYSTEMS).forEach(key => {
    const moons = MOON_SYSTEMS[key] || [];
    moons.forEach((moon, idx) => {
      const el = document.createElement('div');
      el.className = 'moon-orbiter';
      el.dataset.moonParent = key;
      el.dataset.moonIndex = idx;
      el.style.setProperty('--moon-size', moon.size + 'px');
      el.style.setProperty('--moon-glow', moon.color);
      el.innerHTML = `
        <div class="planet-body">
          <img src="${moon.image}" alt="${moon.name}" draggable="false">
        </div>
        <span class="planet-label" aria-hidden="true">${moon.name}</span>
      `;
      container.appendChild(el);
    });
  });

  // Initialize planet angles from startAngle values
  Object.keys(PLANETS).forEach(key => {
    state.planetAngles[key] = PLANETS[key].startAngle || 0;
  });
  state.moonAngles = {};
  Object.keys(MOON_SYSTEMS).forEach(key => {
    state.moonAngles[key] = (MOON_SYSTEMS[key] || []).map((moon, idx) => moon.startAngle ?? (idx * Math.PI / 2));
  });
  updateExploreProgress();
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
  if (state.paused) {
    state.lastTs = ts;
    state.animFrameId = requestAnimationFrame(animFrame);
    return;
  }
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

  Object.keys(MOON_SYSTEMS).forEach(key => {
    const moons = MOON_SYSTEMS[key] || [];
    const parentEl = document.getElementById(`planet-${key}`);
    if (!parentEl || !moons.length) return;
    const px = parseFloat(parentEl.style.left) || SOLAR_CENTER;
    const py = parseFloat(parentEl.style.top) || SOLAR_CENTER;
    const moonEls = Array.from(document.querySelectorAll(`.moon-orbiter[data-moon-parent="${key}"]`));
    moonEls.forEach((moonEl, idx) => {
      const moon = moons[idx];
      if (!moon) return;
      const angSpeed = (2 * Math.PI) / moon.period;
      state.moonAngles[key][idx] = (state.moonAngles[key][idx] + angSpeed * dt * spd) % (2 * Math.PI);
      const angle = state.moonAngles[key][idx];
      moonEl.style.left = (px + Math.cos(angle) * moon.orbitRadius) + 'px';
      moonEl.style.top  = (py + Math.sin(angle) * moon.orbitRadius) + 'px';
    });
  });

  state.animFrameId = requestAnimationFrame(animFrame);
}

// ============================================================
// SECTION 9: PLANET INTERACTION
// ============================================================
function onPlanetClick(key) {
  if (!PLANETS[key]) return;
  clearHoverTimer();
  state.selectedPlanet = key;
  state.viewedPlanets.add(key);
  updateExploreProgress();
  focusPlanet(key);
  markPlanetFocus(key);
  openInfoPanel(key);

  // Check "Curious Mind" — viewed all main planets + moon
  const allPlanets = ['mercury','venus','earth','moon','mars','jupiter','saturn','uranus','neptune','pluto'];
  if (allPlanets.every(p => state.viewedPlanets.has(p))) {
    unlockAchievement('curiousMind');
  }
}

function updateExploreProgress() {
  const total = Object.keys(PLANETS).filter(k => k !== 'sun').length;
  const explored = state.viewedPlanets.size;
  const fill = document.getElementById('explore-progress-fill');
  const text = document.getElementById('explore-progress-text');
  if (fill) fill.style.width = `${Math.min(100, (explored / total) * 100)}%`;
  if (text) text.textContent = `${Math.min(explored, total)} / ${total} planets explored`;
}

function focusPlanet(key) {
  const sys = document.getElementById('solar-system');
  const planetEl = document.getElementById(`planet-${key}`);
  if (!sys || !planetEl) return;
  const rect = planetEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const viewportCenterX = window.innerWidth / 2;
  const viewportCenterY = window.innerHeight / 2;
  const dx = (viewportCenterX - centerX) / window.innerWidth * 220;
  const dy = (viewportCenterY - centerY) / window.innerHeight * 220;
  state.panX = Math.max(-120, Math.min(120, dx));
  state.panY = Math.max(-120, Math.min(120, dy));
  state.zoomLevel = 1.2;
  sys.style.transition = 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
  applyTransform();
  setTimeout(() => { if (sys) sys.style.transition = ''; }, 750);
}

function navigatePlanet(dir) {
  const order = ['mercury','venus','earth','mars','jupiter','saturn','uranus','neptune','pluto'];
  if (!state.selectedPlanet) {
    const first = order[0];
    onPlanetClick(first);
    return;
  }
  const index = order.indexOf(state.selectedPlanet);
  const nextIndex = index + dir;
  if (nextIndex >= 0 && nextIndex < order.length) {
    onPlanetClick(order[nextIndex]);
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
    { icon: '⭕', label: 'Radius',            value: f.radius },
    { icon: '⚖️', label: 'Mass',              value: f.mass },
    { icon: '⬇️', label: 'Gravity',           value: f.gravity },
    { icon: '🌡️', label: 'Surface Temperature', value: f.temperature },
    { icon: '☁️', label: 'Atmosphere',        value: f.atmosphere },
    { icon: '🪐', label: 'Planet Type',       value: f.planetType },
    { icon: '⏱️', label: 'Length of Day',     value: f.dayLength },
    { icon: '🔄', label: 'Length of Year',    value: f.yearLength },
    { icon: '🚀', label: 'Escape Velocity',   value: f.escapeVelocity },
    { icon: '🌙', label: 'Number of Moons',    value: f.moons },
    { icon: '🌗', label: 'Moon Names',         value: f.moonNames },
    { icon: '🔭', label: 'Discovery Info',     value: f.discovery },
    { icon: '🛰️', label: 'NASA Mission',      value: f.mission },
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
  document.getElementById('info-type').textContent = `${p.type} • ${f.planetType}`;

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
  clearPlanetFocus();
  stopSpeech();
}

function clearHoverTimer() {
  if (state.hoverTimerId) {
    clearTimeout(state.hoverTimerId);
    state.hoverTimerId = null;
  }
}

function markPlanetFocus(key) {
  const viewport = document.getElementById('solar-viewport');
  if (viewport) viewport.classList.add('is-focusing');
  document.querySelectorAll('.celestial').forEach(el => {
    const isActive = el.dataset.planet === key;
    el.classList.toggle('is-selected', isActive);
    el.classList.remove('is-hovered');
  });
  document.querySelectorAll('.orbit-ring').forEach(ring => {
    ring.classList.toggle('is-active', ring.id === `orbit-${key}`);
  });
}

function clearPlanetFocus() {
  const viewport = document.getElementById('solar-viewport');
  if (viewport) viewport.classList.remove('is-focusing');
  document.querySelectorAll('.celestial').forEach(el => {
    el.classList.remove('is-selected', 'is-hovered');
  });
  document.querySelectorAll('.orbit-ring').forEach(ring => ring.classList.remove('is-active'));
}

function highlightPlanet(key) {
  const el = document.getElementById(`planet-${key}`);
  if (!el) return;
  el.classList.add('highlighted');
  setTimeout(() => el.classList.remove('highlighted'), 3000);
}

function beginPlanetHover(key, event) {
  clearHoverTimer();
  state.hoveredPlanet = key;
  setPlanetHoverPreview(event, key);
  markPlanetFocus(key);
  state.hoverTimerId = setTimeout(() => {
    if (state.hoveredPlanet === key) openInfoPanel(key);
  }, 500);
}

function endPlanetHover() {
  clearHoverTimer();
  state.hoveredPlanet = null;
  hidePlanetHoverPreview();
  if (!state.selectedPlanet) clearPlanetFocus();
}

function setPlanetHoverPreview(event, key) {
  const tooltip = document.getElementById('planet-tooltip');
  const preview = document.getElementById('planet-preview-card');
  if (!tooltip || !preview || !PLANETS[key]) return;
  const p = PLANETS[key];
  tooltip.innerHTML = p.name;
  preview.innerHTML = `
    <img src="${p.image}" alt="${p.name}" class="preview-planet-img">
    <div>
      <div class="preview-planet-title">${p.name}</div>
      <div class="preview-planet-meta">🌡️ ${p.facts.temperature} • 🌙 ${p.facts.moons}</div>
    </div>`;
  tooltip.classList.remove('hidden');
  preview.classList.remove('hidden');
  tooltip.style.left = `${event.clientX}px`;
  tooltip.style.top = `${event.clientY}px`;
}

function hidePlanetHoverPreview() {
  document.getElementById('planet-tooltip')?.classList.add('hidden');
  document.getElementById('planet-preview-card')?.classList.add('hidden');
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
    `Radius: ${f.radius}.`,
    `Mass: ${f.mass}.`,
    `Gravity: ${f.gravity}.`,
    `Surface temperature: ${f.temperature}.`,
    `Atmosphere: ${f.atmosphere}.`,
    `Planet type: ${f.planetType}.`,
    `Length of a day: ${f.dayLength}.`,
    `Length of a year: ${f.yearLength}.`,
    `Escape velocity: ${f.escapeVelocity}.`,
    `Number of moons: ${f.moons}.`,
    `Moon names: ${f.moonNames}.`,
    `Discovery information: ${f.discovery}.`,
    `NASA mission: ${f.mission}.`,
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

  const cert = document.getElementById('quiz-certificate');
  cert.classList.remove('hidden');
  cert.innerHTML = `
    <div class="certificate-badge">🏅</div>
    <h3>Space Explorer Certificate</h3>
    <p>Congratulations! You completed the solar system quiz with ${pct}%.</p>
    <span>Keep exploring the stars.</span>`;
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
// SECTION 14: GAMES MODE
// ============================================================
function renderGuessGame() {
  state.guessQuestions = [...GUESS_BANK].sort(() => Math.random() - 0.5);
  state.guessIndex = 0;
  state.guessScore = 0;
  const questionEl = document.getElementById('guess-question');
  const optionsEl = document.getElementById('guess-options');
  const feedbackEl = document.getElementById('guess-feedback');
  const nextBtn = document.getElementById('guess-next-btn');
  questionEl.innerHTML = '<h3>Guess the Planet</h3><p>Use the clue to identify the planet.</p>';
  optionsEl.innerHTML = '';
  feedbackEl.className = 'quiz-feedback hidden';
  nextBtn.classList.add('hidden');
  renderGuessClue();
}

function renderGuessClue() {
  const q = state.guessQuestions[state.guessIndex];
  if (!q) return;
  const questionEl = document.getElementById('guess-question');
  const optionsEl = document.getElementById('guess-options');
  const feedbackEl = document.getElementById('guess-feedback');
  const nextBtn = document.getElementById('guess-next-btn');
  questionEl.innerHTML = `
    <h3>Guess the Planet</h3>
    <p>${q.clue}</p>
    <div class="mode-chips"><span>Clue ${state.guessIndex + 1} of ${state.guessQuestions.length}</span></div>`;
  optionsEl.innerHTML = q.options.map(opt => `
    <button class="option-btn" data-answer="${opt.toLowerCase()}" aria-label="${opt}">
      <span class="option-letter" aria-hidden="true">•</span>
      <span class="option-text">${opt}</span>
    </button>`).join('');
  feedbackEl.className = 'quiz-feedback hidden';
  nextBtn.classList.add('hidden');
  optionsEl.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isCorrect = btn.dataset.answer === q.answer;
      state.guessScore += isCorrect ? 1 : 0;
      feedbackEl.className = `quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`;
      feedbackEl.innerHTML = `<span>${isCorrect ? '✅' : '❌'} ${isCorrect ? 'Correct!' : `Not quite — the answer is ${PLANETS[q.answer].name}.`}</span>`;
      nextBtn.classList.remove('hidden');
      nextBtn.textContent = state.guessIndex >= state.guessQuestions.length - 1 ? 'Play Again' : 'Next Clue';
      if (state.guessIndex >= state.guessQuestions.length - 1) {
        feedbackEl.innerHTML = `<span>🏁 Finished! You got ${state.guessScore} out of ${state.guessQuestions.length} correct.</span>`;
      }
    });
  });
}

function renderOrderGame() {
  state.orderPool = [...ORDER_PLANETS].sort(() => Math.random() - 0.5);
  state.orderAnswer = [];
  const instructions = document.getElementById('order-instructions');
  const pool = document.getElementById('order-pool');
  const zone = document.getElementById('order-zone');
  const feedback = document.getElementById('order-feedback');

  instructions.innerHTML = '<h3>Order the Planets</h3><p>Place the planets in the correct order from the Sun outward.</p>';
  feedback.className = 'quiz-feedback hidden';
  pool.innerHTML = state.orderPool.map(key => `
    <button class="order-item" draggable="true" data-planet="${key}">${PLANETS[key].name}</button>
  `).join('');
  zone.innerHTML = '<div class="order-zone-empty">Drop planets here</div>';

  pool.querySelectorAll('.order-item').forEach(item => {
    item.addEventListener('click', () => addOrderPlanet(item.dataset.planet));
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', item.dataset.planet);
    });
  });

  zone.addEventListener('dragover', e => e.preventDefault());
  zone.addEventListener('drop', e => {
    e.preventDefault();
    const key = e.dataTransfer.getData('text/plain');
    addOrderPlanet(key);
  });
}

function addOrderPlanet(key) {
  if (!key || state.orderAnswer.includes(key)) return;
  state.orderAnswer.push(key);
  state.orderPool = state.orderPool.filter(item => item !== key);
  renderOrderGameView();
}

function renderOrderGameView() {
  const pool = document.getElementById('order-pool');
  const zone = document.getElementById('order-zone');
  pool.innerHTML = state.orderPool.map(key => `
    <button class="order-item" draggable="true" data-planet="${key}">${PLANETS[key].name}</button>
  `).join('');
  zone.innerHTML = state.orderAnswer.length
    ? state.orderAnswer.map((key, idx) => `
        <button class="order-chip" data-index="${idx}" data-planet="${key}">${idx + 1}. ${PLANETS[key].name}</button>`).join('')
    : '<div class="order-zone-empty">Drop planets here</div>';

  pool.querySelectorAll('.order-item').forEach(item => {
    item.addEventListener('click', () => addOrderPlanet(item.dataset.planet));
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', item.dataset.planet);
    });
  });

  zone.querySelectorAll('.order-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const key = chip.dataset.planet;
      state.orderAnswer = state.orderAnswer.filter(item => item !== key);
      state.orderPool.push(key);
      renderOrderGameView();
    });
  });
}

function checkOrderGame() {
  const feedback = document.getElementById('order-feedback');
  const correct = ORDER_PLANETS.every((key, idx) => state.orderAnswer[idx] === key);
  feedback.className = `quiz-feedback ${correct ? 'correct' : 'wrong'}`;
  feedback.innerHTML = `<span>${correct ? '✅ Excellent! You placed the planets in the correct order.' : '❌ Try again — the correct order starts with Mercury, Venus, Earth...'}</span>`;
}

// ============================================================
// SECTION 15: COMPARE MODE
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
  if (mode === 'games') { renderGuessGame(); }

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

function toggleContrast() {
  state.contrastMode = !state.contrastMode;
  document.body.classList.toggle('high-contrast', state.contrastMode);
  document.getElementById('contrast-btn').classList.toggle('active', state.contrastMode);
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

  // Planet clicks and hover interaction
  const solarSystem = document.getElementById('solar-system');
  solarSystem.addEventListener('click', e => {
    const el = e.target.closest('.celestial');
    if (el?.dataset.planet) onPlanetClick(el.dataset.planet);
  });
  solarSystem.addEventListener('mouseover', e => {
    const el = e.target.closest('.celestial');
    if (el?.dataset.planet) {
      beginPlanetHover(el.dataset.planet, e);
    }
  });
  solarSystem.addEventListener('mousemove', e => {
    const el = e.target.closest('.celestial');
    if (el?.dataset.planet) {
      setPlanetHoverPreview(e, el.dataset.planet);
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const body = el.querySelector('.planet-body');
      if (body) {
        body.style.transform = `scale(1.16) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg)`;
      }
    }
  });
  solarSystem.addEventListener('mouseout', e => {
    const el = e.target.closest('.celestial');
    if (!el) return;
    const next = e.relatedTarget;
    if (next && next instanceof Element && next.closest('.celestial')) return;
    endPlanetHover();
    document.querySelectorAll('.celestial .planet-body').forEach(body => body.style.removeProperty('transform'));
  });
  solarSystem.addEventListener('mouseleave', () => {
    endPlanetHover();
    document.querySelectorAll('.celestial .planet-body').forEach(body => body.style.removeProperty('transform'));
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
  document.getElementById('learn-more-btn').addEventListener('click', () => {
    if (!state.selectedPlanet) return;
    const p = PLANETS[state.selectedPlanet];
    window.open('https://science.nasa.gov/solar-system/', '_blank', 'noopener,noreferrer');
    if (p) speakPlanetInfo(state.selectedPlanet);
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
  document.getElementById('play-btn').addEventListener('click', () => {
    state.paused = !state.paused;
    document.getElementById('play-btn').textContent = state.paused ? '▶' : '⏸';
  });
  document.getElementById('reset-btn').addEventListener('click', resetZoom);
  document.getElementById('fullscreen-btn').addEventListener('click', () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  });
  document.getElementById('contrast-btn').addEventListener('click', toggleContrast);
  document.getElementById('next-planet-btn').addEventListener('click', () => navigatePlanet(1));
  document.getElementById('prev-planet-btn').addEventListener('click', () => navigatePlanet(-1));

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

  document.getElementById('start-guess-btn').addEventListener('click', () => {
    document.getElementById('guess-game-screen').classList.remove('hidden');
    document.getElementById('order-game-screen').classList.add('hidden');
    renderGuessGame();
  });
  document.getElementById('start-order-btn').addEventListener('click', () => {
    document.getElementById('order-game-screen').classList.remove('hidden');
    document.getElementById('guess-game-screen').classList.add('hidden');
    renderOrderGame();
  });
  document.getElementById('guess-next-btn').addEventListener('click', () => {
    if (state.guessIndex < state.guessQuestions.length - 1) {
      state.guessIndex += 1;
      renderGuessClue();
    } else {
      renderGuessGame();
    }
  });
  document.getElementById('order-check-btn').addEventListener('click', checkOrderGame);
  document.getElementById('order-reset-btn').addEventListener('click', renderOrderGame);

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