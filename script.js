/* ==========================================================
   SAFE STORAGE WRAPPER (Works in all browser & sandbox modes)
   ========================================================== */
const SafeStorage = (() => {
  const mem = new Map();
  let hasLS = false;
  try {
    const k = '__mac_test__';
    window.localStorage.setItem(k, '1');
    window.localStorage.removeItem(k);
    hasLS = true;
  } catch (_) {
    hasLS = false;
  }
  return {
    get(key, fallback) {
      try {
        const raw = hasLS ? window.localStorage.getItem(key) : mem.get(key);
        return raw != null ? JSON.parse(raw) : fallback;
      } catch (_) {
        return fallback;
      }
    },
    set(key, val) {
      try {
        const str = JSON.stringify(val);
        if (hasLS) window.localStorage.setItem(key, str);
        else mem.set(key, str);
      } catch (_) {}
    }
  };
})();

/* ==========================================================
   EXPANDED 24-ICON CURATED MONOCHROME LIBRARY
   ========================================================== */
const ICONS = {
  folder: `<path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"/>`,
  briefcase: `<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
  code: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
  book: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`,
  cart: `<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>`,
  heart: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`,
  star: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
  zap: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
  home: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
  coffee: `<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>`,
  music: `<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>`,
  globe: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
  fitness: `<path d="M6.5 6.5l11 11"/><path d="M21 21l-1-1"/><path d="M3 3l1 1"/><path d="M18 22l4-4"/><path d="M2 6l4-4"/><path d="M3 10l7-7"/><path d="M14 21l7-7"/>`,
  terminal: `<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>`,
  layers: `<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`,
  calendar: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,
  sparkles: `<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/><path d="M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16z"/>`,
  plane: `<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>`,
  camera: `<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>`,
  pen: `<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>`,
  cpu: `<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>`,
  flag: `<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>`,
  shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
  gift: `<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>`
};

const BUILTIN_ICONS = {
  all: `<path d="M4 6h16M4 12h16M4 18h16"/>`,
  active: `<circle cx="12" cy="12" r="9"/>`,
  done: `<path d="M20 6L9 17l-5-5"/>`
};

const THEMES = ['oled', 'graphite', 'paper'];

/* ==========================================================
   SUBTLE PROCEDURAL WEB AUDIO UI SOUNDS
   ========================================================== */
const SoundFX = (() => {
  let ctx = null;
  let enabled = SafeStorage.get('mac_sound_enabled', true);

  function ensureCtx() {
    if (!enabled) return null;
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) ctx = new AudioCtx();
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  function tone(freq, endFreq, duration, gainVal = 0.04, type = 'sine', delay = 0) {
    const c = ensureCtx();
    if (!c) return;
    try {
      const now = c.currentTime + delay;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      if (endFreq && endFreq !== freq) {
        osc.frequency.exponentialRampToValueAtTime(endFreq, now + duration);
      }
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(gainVal, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(now);
      osc.stop(now + duration + 0.01);
    } catch (_) {}
  }

  return {
    isEnabled: () => enabled,
    toggle() {
      enabled = !enabled;
      SafeStorage.set('mac_sound_enabled', enabled);
      if (enabled) this.tick();
      return enabled;
    },
    tick: () => tone(520, 380, 0.035, 0.03, 'triangle'),
    // Soft position-aware blip played when scrolling/hovering across dock tabs:
    // pitch steps up with the tab's slot so scrubbing feels like a physical ratchet.
    // Kept very short & quiet because a fast scrub fires one per tab crossed.
    scroll(pos = 0) {
      const freq = 460 + Math.max(0, pos) * 32;
      tone(freq, freq * 1.08, 0.06, 0.065, 'sine', 0);
    },
    pop: () => tone(380, 660, 0.065, 0.045, 'sine'),
    uncheck: () => tone(480, 320, 0.06, 0.035, 'sine'),
    complete() {
      tone(587.33, 587.33, 0.09, 0.045, 'sine', 0);
      tone(880, 880, 0.16, 0.05, 'sine', 0.055);
    },
    celebrate() {
      [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
        tone(f, f, 0.22, 0.045, 'sine', idx * 0.065);
      });
    },
    trash: () => tone(300, 110, 0.16, 0.05, 'triangle')
  };
})();

/* ==========================================================
   60FPS CANVAS PARTICLE BURST ENGINE (Zero idle CPU)
   ========================================================== */
const ParticleFX = (() => {
  const canvas = document.getElementById('fxCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let rings = [];
  let rafId = null;

  let resizeTimer = null;

  function resize() {
    if (!ctx) return;
    // Cap DPR at 2: a full-screen canvas at DPR 3 doubles fill-rate for zero visible gain on these tiny particles
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // Debounced: mobile browsers fire a resize burst on every scroll while the URL bar collapses,
  // and reallocating a full-screen canvas each time causes visible jank.
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });
  resize();

  function getFgColor() {
    const theme = document.documentElement.getAttribute('data-theme');
    return theme === 'paper' ? '#09090b' : '#ffffff';
  }

  function startLoop() {
    if (!ctx || rafId) return;
    rafId = requestAnimationFrame(tick);
  }

  function tick() {
    if (!ctx) {
      rafId = null;
      return;
    }
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = rings.length - 1; i >= 0; i--) {
      const r = rings[i];
      r.radius += (r.maxRadius - r.radius) * 0.18;
      r.alpha *= 0.88;
      ctx.save();
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      ctx.strokeStyle = r.color;
      ctx.globalAlpha = r.alpha;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
      if (r.alpha < 0.02) rings.splice(i, 1);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.life -= p.decay;
      p.rot += p.vRot;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    if (particles.length > 0 || rings.length > 0) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = null;
    }
  }

  return {
    burstCheck(x, y) {
      const color = getFgColor();
      rings.push({ x, y, radius: 4, maxRadius: 24, alpha: 0.65, color });
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12 + (Math.random() - 0.5) * 0.25;
        const speed = 2.1 + Math.random() * 2.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          gravity: 0.05,
          drag: 0.92,
          size: 3 + Math.random() * 2.2,
          life: 1,
          decay: 0.042 + Math.random() * 0.015,
          rot: 0,
          vRot: 0.1,
          shape: i % 2 === 0 ? 'circle' : 'rect',
          color
        });
      }
      startLoop();
    },

    burstTrash(x, y) {
      const fg = getFgColor();
      rings.push({ x, y, radius: 12, maxRadius: 68, alpha: 0.85, color: '#ff453a' });
      for (let i = 0; i < 24; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2.5 + Math.random() * 5.2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.2,
          gravity: 0.14,
          drag: 0.94,
          size: 4 + Math.random() * 3.5,
          life: 1,
          decay: 0.028 + Math.random() * 0.015,
          rot: Math.random() * 3,
          vRot: (Math.random() - 0.5) * 0.25,
          shape: 'rect',
          color: i % 3 === 0 ? fg : '#ff453a'
        });
      }
      startLoop();
    },

    burstCelebration(x, y) {
      const fg = getFgColor();
      rings.push({ x, y, radius: 8, maxRadius: 56, alpha: 0.75, color: fg });
      for (let i = 0; i < 32; i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.4;
        const speed = 3 + Math.random() * 5.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          gravity: 0.14,
          drag: 0.96,
          size: 4 + Math.random() * 3.5,
          life: 1,
          decay: 0.018 + Math.random() * 0.012,
          rot: Math.random() * Math.PI,
          vRot: (Math.random() - 0.5) * 0.3,
          shape: i % 3 === 0 ? 'circle' : 'rect',
          color: i % 2 === 0 ? fg : '#888888'
        });
      }
      startLoop();
    }
  };
})();

/* ==========================================================
   DATA & STATE INITIALIZATION
   ========================================================== */
let currentFilter = 'all';
let currentSort = 'manual';
let searchQuery = '';
let selectedIconKey = 'folder';
let editingTabFilter = null; // null = creating new tab, string = editing existing custom tab

// Composer metadata state
let composerPriorityVal = 'none';
let composerDueVal = '';
let composerCategoryVal = '';

// Expanded task detail drawers
const expandedTaskIds = new Set();

// Load & normalize custom tabs
let rawTabs = SafeStorage.get('mac_custom_tabs', [
  { name: 'Work', icon: 'briefcase' },
  { name: 'Ideas', icon: 'sparkles' }
]);
let customTabs = rawTabs.map(t => (typeof t === 'string' ? { name: t, icon: 'folder' } : t));
SafeStorage.set('mac_custom_tabs', customTabs);

// Load & normalize tasks (backwards-compatible with original format)
let rawTasks = SafeStorage.get('mac_tasks', null);
if (rawTasks === null && !SafeStorage.get('mac_seeded_v2', false)) {
  const todayIso = getLocalISODate(0);
  rawTasks = [
    {
      id: Date.now() - 300,
      text: 'Refine liquid-spring Dock physics & micro-interactions',
      done: false,
      category: 'work',
      priority: 'high',
      dueDate: todayIso,
      notes: 'Try hovering across the dock, pressing Cmd+K, or starting a Focus session.',
      subtasks: [
        { id: 1, text: '60fps harmonic spring magnification', done: true },
        { id: 2, text: 'Ghost-icon drag to Center Trash Bin', done: false }
      ],
      createdAt: Date.now() - 300
    },
    {
      id: Date.now() - 200,
      text: 'Sketch minimalist monochrome icon set',
      done: false,
      category: 'ideas',
      priority: 'medium',
      dueDate: getLocalISODate(1),
      notes: '',
      subtasks: [],
      createdAt: Date.now() - 200
    },
    {
      id: Date.now() - 100,
      text: 'Ship local-first task persistence',
      done: true,
      category: 'work',
      priority: 'low',
      dueDate: '',
      notes: '',
      subtasks: [],
      createdAt: Date.now() - 100
    }
  ];
  SafeStorage.set('mac_seeded_v2', true);
}

let tasks = (rawTasks || []).map((t, idx) => normalizeTask(t, idx));
SafeStorage.set('mac_tasks', tasks);

function normalizeTask(t, idx = 0) {
  return {
    id: t.id || Date.now() + idx,
    text: String(t.text || ''),
    done: Boolean(t.done),
    category: t.category ? String(t.category).toLowerCase() : null,
    priority: ['none', 'low', 'medium', 'high'].includes(t.priority) ? t.priority : 'none',
    dueDate: t.dueDate || '',
    notes: t.notes || '',
    subtasks: Array.isArray(t.subtasks) ? t.subtasks : [],
    createdAt: t.createdAt || t.id || Date.now()
  };
}

function getLocalISODate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/* ==========================================================
   DOM ELEMENTS
   ========================================================== */
const dock = document.getElementById('dock');
const dockDivider = document.getElementById('dockDivider');
const taskList = document.getElementById('taskList');
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const viewTitle = document.getElementById('viewTitle');
const viewIcon = document.getElementById('viewIcon');
const viewIconBox = document.getElementById('viewIconBox');
const taskStats = document.getElementById('taskStats');
const addCategoryBtn = document.getElementById('addCategoryBtn');
const editCurrentTabBtn = document.getElementById('editCurrentTabBtn');

/* Header & Progress Ring */
const progressRingWrap = document.getElementById('progressRingWrap');
const progressRingFill = document.getElementById('progressRingFill');
const progressRingText = document.getElementById('progressRingText');
const searchToggleBtn = document.getElementById('searchToggleBtn');
const cmdPaletteBtn = document.getElementById('cmdPaletteBtn');
const headerFocusBtn = document.getElementById('headerFocusBtn');
const soundToggleBtn = document.getElementById('soundToggleBtn');
const soundIcon = document.getElementById('soundIcon');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');

/* Toolbar & Composer */
const toolbarAccordion = document.getElementById('toolbarAccordion');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const sortPills = document.getElementById('sortPills');
const clearDoneBtn = document.getElementById('clearDoneBtn');

const composerOptBtn = document.getElementById('composerOptBtn');
const composerActiveDot = document.getElementById('composerActiveDot');
const composerAccordion = document.getElementById('composerAccordion');
const composerPriority = document.getElementById('composerPriority');
const composerDuePresets = document.getElementById('composerDuePresets');
const composerDueDate = document.getElementById('composerDueDate');
const composerCategory = document.getElementById('composerCategory');
const smartTokens = document.getElementById('smartTokens');

/* Undo Toast */
const undoToast = document.getElementById('undoToast');
const undoMsg = document.getElementById('undoMsg');
const undoActionBtn = document.getElementById('undoActionBtn');
const undoProgress = document.getElementById('undoProgress');

/* Modal Elements */
const tabModalBackdrop = document.getElementById('tabModalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const newTabForm = document.getElementById('newTabForm');
const tabNameInput = document.getElementById('tabNameInput');
const tabError = document.getElementById('tabError');
const iconGrid = document.getElementById('iconGrid');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const saveTabSubmitBtn = document.getElementById('saveTabSubmitBtn');
const modalDeleteTabBtn = document.getElementById('modalDeleteTabBtn');

/* Center Trash Bin & Drag Ghost */
const dragGhost = document.getElementById('dragGhost');
const trashOverlay = document.getElementById('trashOverlay');
const trashZone = document.getElementById('trashZone');
const trashConfirmBtn = document.getElementById('trashConfirmBtn');
const trashCancelBtn = document.getElementById('trashCancelBtn');
const trashTabName = document.getElementById('trashTabName');

/* Focus Session & Dynamic Island */
const focusModalBackdrop = document.getElementById('focusModalBackdrop');
const closeFocusModalBtn = document.getElementById('closeFocusModalBtn');
const minimizeFocusBtn = document.getElementById('minimizeFocusBtn');
const focusModeTabs = document.getElementById('focusModeTabs');
const focusDialRing = document.getElementById('focusDialRing');
const focusClockDisplay = document.getElementById('focusClockDisplay');
const focusStatusLabel = document.getElementById('focusStatusLabel');
const focusTaskSelect = document.getElementById('focusTaskSelect');
const focusCompleteTaskBtn = document.getElementById('focusCompleteTaskBtn');
const focusResetBtn = document.getElementById('focusResetBtn');
const focusStartPauseBtn = document.getElementById('focusStartPauseBtn');

const focusIsland = document.getElementById('focusIsland');
const islandExpandBtn = document.getElementById('islandExpandBtn');
const islandPulse = document.getElementById('islandPulse');
const islandTaskName = document.getElementById('islandTaskName');
const islandTime = document.getElementById('islandTime');
const islandToggleBtn = document.getElementById('islandToggleBtn');
const islandToggleIcon = document.getElementById('islandToggleIcon');

/* Command Palette */
const cmdBackdrop = document.getElementById('cmdBackdrop');
const cmdInput = document.getElementById('cmdInput');
const cmdList = document.getElementById('cmdList');

/* ==========================================================
   THEME & SOUND HEADER INITIALIZATION
   ========================================================== */
let currentTheme = SafeStorage.get('mac_theme', 'oled');
if (!THEMES.includes(currentTheme)) currentTheme = 'oled';

const THEME_COLORS = {
  oled: '#000000',
  graphite: '#0f1014',
  paper: '#f6f6f7'
};

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  SafeStorage.set('mac_theme', theme);
  const metaTheme = document.getElementById('metaThemeColor');
  if (metaTheme) metaTheme.setAttribute('content', THEME_COLORS[theme] || '#000000');

  if (theme === 'paper') {
    themeIcon.innerHTML = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
  } else if (theme === 'graphite') {
    themeIcon.innerHTML = `<circle cx="12" cy="12" r="9"/><path d="M12 3v18"/><path d="M12 8l5-3"/><path d="M12 13l6-3.5"/><path d="M12 18l4-2.5"/>`;
  } else {
    themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
  }
  themeToggleBtn.title = `Theme: ${theme.toUpperCase()} (Click to cycle)`;
}

function renderSoundButton() {
  const on = SoundFX.isEnabled();
  soundIcon.innerHTML = on
    ? `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>`
    : `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>`;
  soundToggleBtn.title = on ? 'UI Sounds: On' : 'UI Sounds: Muted';
}

themeToggleBtn.addEventListener('click', () => {
  const next = THEMES[(THEMES.indexOf(currentTheme) + 1) % THEMES.length];
  applyTheme(next);
  SoundFX.tick();
});

soundToggleBtn.addEventListener('click', () => {
  SoundFX.toggle();
  renderSoundButton();
});

applyTheme(currentTheme);
renderSoundButton();

/* ==========================================================
   RENDER DOCK, BADGES & HEADER
   ========================================================== */
function renderCustomDockItems() {
  document.querySelectorAll('.dock-item.custom-item').forEach(el => el.remove());
  dockDivider.classList.toggle('hidden', customTabs.length === 0);

  customTabs.forEach(tab => {
    const lower = tab.name.toLowerCase();
    const item = document.createElement('div');
    item.className = 'dock-item custom-item';
    if (currentFilter === lower) item.classList.add('active');
    item.dataset.filter = lower;
    item.dataset.label = tab.name;
    item.dataset.icon = tab.icon || 'folder';

    const svgPath = ICONS[tab.icon] || ICONS.folder;
    item.innerHTML = `
      <svg viewBox="0 0 24 24">${svgPath}</svg>
      <span class="dock-badge hidden" data-badge-for="${escapeHtml(lower)}">0</span>
      <span class="dock-tooltip">${escapeHtml(tab.name)}</span>
      <div class="dock-dot"></div>
    `;

    // Right-click to quickly edit custom tab
    item.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      openEditTabModal(lower);
    });

    dock.insertBefore(item, addCategoryBtn);
  });

  syncComposerCategoryOptions();
  updateDockBadges();
  DockPhysics.syncItems();
}

function syncComposerCategoryOptions() {
  const prev = composerCategory.value;
  composerCategory.innerHTML = `<option value="">Auto (Current View)</option><option value="__none__">No Category</option>`;
  customTabs.forEach(tab => {
    const opt = document.createElement('option');
    opt.value = tab.name.toLowerCase();
    opt.textContent = tab.name;
    composerCategory.appendChild(opt);
  });
  if ([...composerCategory.options].some(o => o.value === prev)) {
    composerCategory.value = prev;
  }
}

function updateDockBadges() {
  const activeCount = tasks.filter(t => !t.done).length;
  const doneCount = tasks.filter(t => t.done).length;

  setBadgeValue('all', tasks.length > 0 ? activeCount : 0);
  setBadgeValue('active', activeCount);
  setBadgeValue('done', 0); // Keep Done clean without clutter

  customTabs.forEach(tab => {
    const key = tab.name.toLowerCase();
    const c = tasks.filter(t => !t.done && (t.category || '').toLowerCase() === key).length;
    setBadgeValue(key, c);
  });

  // Toggle "Clear Done" button visibility
  clearDoneBtn.classList.toggle('hidden', doneCount === 0);
  if (doneCount > 0) {
    clearDoneBtn.querySelector('span').textContent = `Clear Done (${doneCount})`;
  }
}

function setBadgeValue(filterKey, count) {
  const badge = dock.querySelector(`.dock-badge[data-badge-for="${CSS.escape(filterKey)}"]`);
  if (!badge) return;
  if (count > 0) {
    badge.textContent = count > 99 ? '99+' : String(count);
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

let headerMorphTimer = null;

function updateHeaderView(label, filterKey, animateMorph = true) {
  let svgContent = BUILTIN_ICONS[filterKey];
  const isCustom = !svgContent;
  if (isCustom) {
    const found = customTabs.find(t => t.name.toLowerCase() === filterKey);
    svgContent = ICONS[found ? found.icon : 'folder'] || ICONS.folder;
  }

  editCurrentTabBtn.classList.toggle('hidden', !isCustom);

  if (headerMorphTimer) {
    clearTimeout(headerMorphTimer);
    headerMorphTimer = null;
  }

  if (animateMorph) {
    viewIconBox.classList.add('morphing');
    viewTitle.classList.add('morphing');
    headerMorphTimer = setTimeout(() => {
      headerMorphTimer = null;
      viewTitle.textContent = label;
      viewIcon.innerHTML = `<svg viewBox="0 0 24 24">${svgContent}</svg>`;
      viewIconBox.classList.remove('morphing');
      viewTitle.classList.remove('morphing');
    }, 85);
  } else {
    viewTitle.textContent = label;
    viewIcon.innerHTML = `<svg viewBox="0 0 24 24">${svgContent}</svg>`;
    viewIconBox.classList.remove('morphing');
    viewTitle.classList.remove('morphing');
  }
}

editCurrentTabBtn.addEventListener('click', () => {
  if (!['all', 'active', 'done'].includes(currentFilter)) {
    openEditTabModal(currentFilter);
  }
});

/* ==========================================================
   60/120FPS LIQUID-SPRING DOCK PHYSICS ENGINE
   ========================================================== */
const DockPhysics = (() => {
  const MAX_SCALE = 1.66;
  const INFLUENCE_DIST = 122;
  const STIFFNESS = 0.24;
  const DAMPING = 0.72;
  const BASE_SLOT = 52; // 44px width + 8px gap

  let pointerX = null;
  let rafId = null;
  const stateMap = new WeakMap();
  const dockContainerEl = document.getElementById('dockContainer');
  let currentItemSize = 44;
  let currentGap = 8;
  let dynamicMaxScale = MAX_SCALE;
  let resizeTimer = null;

  // Resting slot centers (viewport px). Refreshed only on structural changes (tab added/removed,
  // viewport resize) and at the start of each animation frame, so high-frequency touch/pointer
  // handlers never trigger a forced layout read on mobile.
  let cachedCenters = [];

  function fitDockToViewport() {
    const items = dock.querySelectorAll('.dock-item');
    const count = Math.max(1, items.length);
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const isShort = vh <= 540;
    const isNarrow = vw <= 580;

    const idealSize = isShort ? 38 : isNarrow ? 40 : 44;
    const idealGap = isShort || isNarrow ? 6 : 8;
    const hasDivider = !dockDivider.classList.contains('hidden');
    const padAndBorder = isNarrow ? 20 : 26;
    const dividerSpace = hasDivider ? idealGap + 5 : 0;

    // Leave generous horizontal headroom so Dock + magnification fits any screen ratio
    const maxAllowedDockWidth = Math.max(240, vw - 20);
    const neededWidth = count * idealSize + (count - 1) * idealGap + padAndBorder + dividerSpace;

    if (neededWidth <= maxAllowedDockWidth) {
      currentItemSize = idealSize;
      currentGap = idealGap;
    } else {
      currentGap = vw <= 380 ? 4 : 5;
      const availForItems = maxAllowedDockWidth - padAndBorder - (hasDivider ? currentGap + 5 : 0) - (count - 1) * currentGap;
      currentItemSize = Math.max(28, Math.min(idealSize, Math.floor(availForItems / count)));
    }

    // Scale magnification ceiling slightly on very crowded narrow screens so neighbors never clip off-screen
    const spareWidth = maxAllowedDockWidth - (count * currentItemSize + (count - 1) * currentGap + padAndBorder + dividerSpace);
    dynamicMaxScale = spareWidth < 50 ? 1.38 : spareWidth < 95 ? 1.52 : MAX_SCALE;

    if (dockContainerEl) {
      dockContainerEl.style.setProperty('--dock-item-size', `${currentItemSize}px`);
      dockContainerEl.style.setProperty('--dock-gap', `${currentGap}px`);
    }
  }

  function computeRestCenters(items) {
    const dockRect = dock.getBoundingClientRect();
    const centerX = dockRect.left + dockRect.width / 2;
    const slot = currentItemSize + currentGap;
    const hasDivider = !dockDivider.classList.contains('hidden');
    const divExtra = hasDivider ? currentGap + 5 : 0;
    const total = items.length;
    const totalSpan = (total - 1) * slot + divExtra;
    const startCenter = centerX - totalSpan / 2;

    return Array.from(items).map((_, idx) => {
      const shift = hasDivider && idx >= 3 ? divExtra : 0;
      return startCenter + idx * slot + shift;
    });
  }

  function cacheCenters() {
    cachedCenters = computeRestCenters(dock.querySelectorAll('.dock-item'));
  }

  function primeLayout() {
    fitDockToViewport();
    cacheCenters();
  }

  // Debounced: mobile browsers fire resize bursts while the URL bar collapses during scroll,
  // and refitting the dock on every event causes jank.
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      primeLayout();
      startLoop();
    }, 120);
  });

  function getItemState(el) {
    let st = stateMap.get(el);
    if (!st) {
      st = {
        scale: 1,
        targetScale: 1,
        vScale: 0,
        lift: 0,
        targetLift: 0,
        vLift: 0,
        bounce: 0,
        vBounce: 0,
        // Last values actually written to the DOM (rest state = inline styles unset)
        wScale: 1,
        wLift: 0,
        wMargin: 0
      };
      stateMap.set(el, st);
    }
    return st;
  }

  function startLoop() {
    if (!rafId) rafId = requestAnimationFrame(step);
  }

  function step() {
    const items = dock.querySelectorAll('.dock-item');
    const centers = computeRestCenters(items);
    cachedCenters = centers; // keep pointer resolution fresh while animating
    let closestItem = null;
    let minDist = Infinity;
    let moving = false;

    items.forEach((item, idx) => {
      const st = getItemState(item);

      if (pointerX !== null && !isDeleteModeOpen) {
        const dist = Math.abs(pointerX - centers[idx]);
        if (dist < minDist) {
          minDist = dist;
          closestItem = item;
        }
        if (dist < INFLUENCE_DIST) {
          const factor = Math.cos((dist / INFLUENCE_DIST) * (Math.PI / 2));
          const curve = factor * factor;
          st.targetScale = 1 + (dynamicMaxScale - 1) * curve;
          st.targetLift = (st.targetScale - 1) * 21;
        } else {
          st.targetScale = 1;
          st.targetLift = 0;
        }
      } else {
        st.targetScale = 1;
        st.targetLift = 0;
      }

      // Harmonic spring integration for scale & lift
      st.vScale = (st.vScale + (st.targetScale - st.scale) * STIFFNESS) * DAMPING;
      st.scale += st.vScale;

      st.vLift = (st.vLift + (st.targetLift - st.lift) * STIFFNESS) * DAMPING;
      st.lift += st.vLift;

      // Click hop bounce spring
      st.vBounce = (st.vBounce + (0 - st.bounce) * 0.22) * 0.74;
      st.bounce += st.vBounce;

      const marginPush = Math.max(0, (st.scale - 1) * (currentItemSize * 0.32));
      const totalLift = st.lift - st.bounce;

      // Only touch the DOM when a value actually changed — settled items cost nothing per frame
      if (Math.abs(st.scale - st.wScale) > 0.0008 || Math.abs(totalLift - st.wLift) > 0.04) {
        item.style.transform = `translate3d(0, ${-totalLift.toFixed(2)}px, 0) scale(${st.scale.toFixed(4)})`;
        st.wScale = st.scale;
        st.wLift = totalLift;
      }
      if (Math.abs(marginPush - st.wMargin) > 0.25) {
        item.style.margin = `0 ${marginPush.toFixed(2)}px`;
        st.wMargin = marginPush;
      }

      if (
        Math.abs(st.targetScale - st.scale) > 0.001 ||
        Math.abs(st.vScale) > 0.001 ||
        Math.abs(st.bounce) > 0.05 ||
        Math.abs(st.vBounce) > 0.05
      ) {
        moving = true;
      }
    });

    items.forEach(item => {
      const show = pointerX !== null && !isDeleteModeOpen && item === closestItem && minDist < 48;
      item.classList.toggle('show-tooltip', show);
    });

    if (moving) {
      rafId = requestAnimationFrame(step);
    } else {
      // Springs settled. If no pointer is held, drop the inline styles once so the
      // next interaction starts from a clean state; a held pointer keeps its styles.
      if (pointerX === null) {
        items.forEach(item => {
          const st = getItemState(item);
          if (st.wScale !== 1 || st.wLift !== 0 || st.wMargin !== 0) {
            item.style.transform = '';
            item.style.margin = '';
            st.wScale = 1;
            st.wLift = 0;
            st.wMargin = 0;
          }
        });
      }
      rafId = null;
    }
  }

  let lastResolvedItem = null;

  // Resolve nearest item purely from cached rest centers — no layout reads in
  // touch/mouse event handlers (they run at up to 120Hz on mobile).
  function resolveNearest(x) {
    const items = dock.querySelectorAll('.dock-item');
    if (cachedCenters.length !== items.length) {
      // Rare fallback if structure changed without a syncItems() call
      cachedCenters = computeRestCenters(items);
    }
    let best = null;
    let bestScore = Infinity;
    let rawDistForBest = Infinity;
    items.forEach((item, idx) => {
      const d = Math.abs(x - (cachedCenters[idx] ?? -Infinity));
      const score = item === lastResolvedItem ? d - 5 : d;
      if (score < bestScore) {
        bestScore = score;
        rawDistForBest = d;
        best = item;
      }
    });
    return rawDistForBest < 56 ? best : null;
  }

  // Initial sizing + center cache (renderCustomDockItems() re-syncs once custom tabs mount)
  primeLayout();

  return {
    setPointer(x) {
      pointerX = x;
      startLoop();
      const resolved = resolveNearest(x);
      if (resolved) lastResolvedItem = resolved;
      return resolved;
    },
    releasePointer() {
      pointerX = null;
      lastResolvedItem = null;
      dock.querySelectorAll('.dock-item').forEach(i => i.classList.remove('show-tooltip'));
      startLoop();
    },
    bounceItem(item, impulse = -9.5) {
      if (!item) return;
      const st = getItemState(item);
      st.vBounce = impulse;
      startLoop();
    },
    syncItems() {
      primeLayout();
      startLoop();
    }
  };
})();

/* ==========================================================
   LONG-PRESS SPRING GHOST DRAG-TO-TRASH + UNDO RESTORE
   ========================================================== */
const HOLD_DURATION = 420;
let holdTimer = null;
let startX = 0;
let startY = 0;
let pendingDeleteItem = null;
let isDeleteModeOpen = false;
let isDraggingToTrash = false;
let suppressNextClick = false;

// Ghost spring state
let ghostState = { x: 0, y: 0, tx: 0, ty: 0, vx: 0, vy: 0, raf: null };

function startHoldTimer(item, clientX, clientY) {
  clearHoldTimer();
  if (!item || !item.classList.contains('custom-item')) return;
  startX = clientX;
  startY = clientY;
  holdTimer = setTimeout(() => {
    triggerDeleteMode(item, clientX, clientY);
  }, HOLD_DURATION);
}

function clearHoldTimer() {
  if (holdTimer) {
    clearTimeout(holdTimer);
    holdTimer = null;
  }
}

function triggerDeleteMode(item, clientX, clientY) {
  clearHoldTimer();
  isDeleteModeOpen = true;
  isDraggingToTrash = true;
  suppressNextClick = true;
  pendingDeleteItem = item;

  DockPhysics.releasePointer();
  item.classList.add('holding-delete');

  if (navigator.vibrate) navigator.vibrate(40);
  SoundFX.pop();

  // Spawn floating ghost icon at item position
  const rect = item.getBoundingClientRect();
  const iconSvg = ICONS[item.dataset.icon] || ICONS.folder;
  dragGhost.innerHTML = `<svg viewBox="0 0 24 24">${iconSvg}</svg>`;
  ghostState.x = rect.left + rect.width / 2;
  ghostState.y = rect.top + rect.height / 2;
  ghostState.tx = clientX || ghostState.x;
  ghostState.ty = clientY || ghostState.y;
  ghostState.vx = 0;
  ghostState.vy = 0;
  dragGhost.classList.add('active');
  startGhostLoop();

  trashTabName.textContent = item.dataset.label;
  trashOverlay.classList.add('show');
  trashOverlay.setAttribute('aria-hidden', 'false');
}

function startGhostLoop() {
  if (ghostState.raf) return;
  const loop = () => {
    if (!isDeleteModeOpen || !isDraggingToTrash) {
      ghostState.raf = null;
      return;
    }

    // Subtle magnetic pull toward trash icon circle when nearby
    let targetX = ghostState.tx;
    let targetY = ghostState.ty;
    const binRect = trashConfirmBtn.getBoundingClientRect();
    const binCx = binRect.left + binRect.width / 2;
    const binCy = binRect.top + binRect.height / 2;
    const distToBin = Math.hypot(targetX - binCx, targetY - binCy);

    if (distToBin < 120) {
      const pull = (1 - distToBin / 120) * 0.42;
      targetX += (binCx - targetX) * pull;
      targetY += (binCy - targetY) * pull;
    }

    const prevX = ghostState.x;
    ghostState.x += (targetX - ghostState.x) * 0.34;
    ghostState.y += (targetY - ghostState.y) * 0.34;
    const velX = ghostState.x - prevX;
    const tilt = Math.max(-18, Math.min(18, velX * 1.35));
    const scale = distToBin < 75 ? 0.88 : 1.08;

    dragGhost.style.transform = `translate3d(${ghostState.x.toFixed(1)}px, ${ghostState.y.toFixed(1)}px, 0) scale(${scale}) rotate(${tilt.toFixed(1)}deg)`;
    ghostState.raf = requestAnimationFrame(loop);
  };
  ghostState.raf = requestAnimationFrame(loop);
}

function checkPointerOverTrash(clientX, clientY) {
  const rect = trashZone.getBoundingClientRect();
  const isOver =
    clientX >= rect.left &&
    clientX <= rect.right &&
    clientY >= rect.top &&
    clientY <= rect.bottom;

  trashZone.classList.toggle('drag-over', isOver);
  dragGhost.classList.toggle('over-trash', isOver);
  return isOver;
}

function closeDeleteMode() {
  clearHoldTimer();
  isDeleteModeOpen = false;
  isDraggingToTrash = false;
  dragGhost.classList.remove('active', 'over-trash');
  trashZone.classList.remove('drag-over');
  trashOverlay.classList.remove('show');
  trashOverlay.setAttribute('aria-hidden', 'true');

  if (pendingDeleteItem) {
    pendingDeleteItem.classList.remove('holding-delete');
    pendingDeleteItem = null;
  }
}

function deleteTabByFilter(filterToRemove, labelForUndo) {
  const removedTabs = customTabs.filter(t => t.name.toLowerCase() === filterToRemove);
  const removedTasks = tasks.filter(t => (t.category || '').toLowerCase() === filterToRemove);

  const binRect = trashConfirmBtn.getBoundingClientRect();
  if (binRect.width > 0) {
    ParticleFX.burstTrash(binRect.left + binRect.width / 2, binRect.top + binRect.height / 2);
  }
  SoundFX.trash();

  customTabs = customTabs.filter(t => t.name.toLowerCase() !== filterToRemove);
  SafeStorage.set('mac_custom_tabs', customTabs);

  tasks = tasks.filter(t => (t.category || '').toLowerCase() !== filterToRemove);
  SafeStorage.set('mac_tasks', tasks);

  if (currentFilter === filterToRemove) {
    const allTab = dock.querySelector('[data-filter="all"]');
    if (allTab) selectTab(allTab, false);
  }

  closeDeleteMode();
  renderCustomDockItems();
  renderTasks({ cascade: true });

  showUndoToast(`Deleted "${labelForUndo}" tab`, () => {
    customTabs.push(...removedTabs);
    SafeStorage.set('mac_custom_tabs', customTabs);
    tasks.unshift(...removedTasks);
    SafeStorage.set('mac_tasks', tasks);
    renderCustomDockItems();
    renderTasks({ cascade: true });
  });
}

function confirmDeleteSelectedTab() {
  if (!pendingDeleteItem) return;
  deleteTabByFilter(pendingDeleteItem.dataset.filter, pendingDeleteItem.dataset.label);
}

trashConfirmBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  confirmDeleteSelectedTab();
});

trashCancelBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  closeDeleteMode();
});

trashOverlay.addEventListener('click', (e) => {
  if (e.target === trashOverlay) closeDeleteMode();
});

/* ==========================================================
   AUTO-SELECT ON HOVER (DESKTOP) & LIVE TOUCH-SCRUB (MOBILE)
   ========================================================== */
const HOVER_DWELL_MS = 45;
let hoverDwellTimer = null;
let hoverDwellItem = null;
let recentTouchUntil = 0;

function isAnyModalBlockingDock() {
  const installModal = document.getElementById('installModalBackdrop');
  return (
    isDeleteModeOpen ||
    tabModalBackdrop.classList.contains('open') ||
    focusModalBackdrop.classList.contains('open') ||
    cmdBackdrop.classList.contains('open') ||
    Boolean(installModal && installModal.classList.contains('open'))
  );
}

function clearHoverDwell() {
  if (hoverDwellTimer) {
    clearTimeout(hoverDwellTimer);
    hoverDwellTimer = null;
  }
  hoverDwellItem = null;
}

function autoActivateTab(item, mode = 'hover') {
  if (!item || item.classList.contains('dock-add') || isAnyModalBlockingDock()) return;
  const nextFilter = item.dataset.filter;
  if (!nextFilter || nextFilter === currentFilter) return;

  // Gentle tactile micro-impulse so the icon acknowledges selection without jumping away
  DockPhysics.bounceItem(item, -4.5);
  if (mode === 'scrub' && navigator.vibrate) {
    navigator.vibrate(8);
  }

  // Distinct scroll blip instead of the plain click tick — pitch follows the
  // tab's position in the dock so dragging over tabs reads as movement
  const dockItems = dock.querySelectorAll('.dock-item');
  const slotIndex = Array.prototype.indexOf.call(dockItems, item);
  SoundFX.scroll(slotIndex);
  selectTab(item, false);
}

function handleDesktopHover(e) {
  if (performance.now() < recentTouchUntil) return;
  if (holdTimer) {
    const moved = Math.hypot(e.clientX - startX, e.clientY - startY);
    if (moved > 12) clearHoldTimer();
  }
  if (isAnyModalBlockingDock()) {
    clearHoverDwell();
    return;
  }

  const nearestItem = DockPhysics.setPointer(e.clientX);
  const directItem = e.target.closest ? e.target.closest('.dock-item') : null;
  const candidate = directItem || nearestItem;

  if (!candidate || candidate.classList.contains('dock-add') || candidate.dataset.filter === currentFilter) {
    clearHoverDwell();
    return;
  }

  if (hoverDwellItem !== candidate) {
    clearHoverDwell();
    hoverDwellItem = candidate;
    hoverDwellTimer = setTimeout(() => {
      const target = hoverDwellItem;
      hoverDwellTimer = null;
      hoverDwellItem = null;
      autoActivateTab(target, 'hover');
    }, HOVER_DWELL_MS);
  }
}

dock.addEventListener('mouseenter', handleDesktopHover);
dock.addEventListener('mousemove', handleDesktopHover);

dock.addEventListener('mouseleave', () => {
  clearHoverDwell();
  clearHoldTimer();
  if (!isDeleteModeOpen) DockPhysics.releasePointer();
});

dock.addEventListener('mousedown', (e) => {
  if (e.button !== 0) return;
  const item = e.target.closest('.dock-item');
  if (item && item.classList.contains('custom-item')) {
    startHoldTimer(item, e.clientX, e.clientY);
  }
});

window.addEventListener('mousemove', (e) => {
  if (isDeleteModeOpen && isDraggingToTrash) {
    ghostState.tx = e.clientX;
    ghostState.ty = e.clientY;
    checkPointerOverTrash(e.clientX, e.clientY);
  }
});

window.addEventListener('mouseup', (e) => {
  clearHoldTimer();
  if (isDeleteModeOpen && isDraggingToTrash) {
    isDraggingToTrash = false;
    dragGhost.classList.remove('active', 'over-trash');
    if (checkPointerOverTrash(e.clientX, e.clientY)) {
      confirmDeleteSelectedTab();
    }
  }
});

dock.addEventListener('click', (e) => {
  if (suppressNextClick) {
    suppressNextClick = false;
    return;
  }
  const item = e.target.closest('.dock-item');
  if (!item) return;

  if (item.classList.contains('dock-add')) {
    DockPhysics.bounceItem(item, -9.5);
    openNewTabModal();
  } else {
    clearHoverDwell();
    DockPhysics.bounceItem(item, item.dataset.filter === currentFilter ? -6.5 : -9.5);
    selectTab(item);
  }
});

/* Mobile Live Touch-Scrubbing & Hold-to-Trash */
let isTouchScrubbing = false;
let touchedItem = null;

dock.addEventListener('touchstart', (e) => {
  recentTouchUntil = performance.now() + 600;
  clearHoverDwell();
  if (isDeleteModeOpen) return;

  const touch = e.touches[0];
  isTouchScrubbing = true;
  const physicsNearest = DockPhysics.setPointer(touch.clientX);
  const directTouchItem = e.target.closest ? e.target.closest('.dock-item') : null;
  touchedItem = directTouchItem || physicsNearest;

  if (touchedItem) {
    // Auto-select tab immediately upon finger contact (no tap/release required)
    if (!touchedItem.classList.contains('dock-add')) {
      autoActivateTab(touchedItem, 'scrub');
    }
    // Preserve hold-still-to-delete on custom tabs
    if (touchedItem.classList.contains('custom-item')) {
      startHoldTimer(touchedItem, touch.clientX, touch.clientY);
    }
  }
}, { passive: true });

dock.addEventListener('touchmove', (e) => {
  recentTouchUntil = performance.now() + 600;
  const touch = e.touches[0];

  if (holdTimer) {
    const moved = Math.hypot(touch.clientX - startX, touch.clientY - startY);
    if (moved > 14) clearHoldTimer();
  }

  if (isDeleteModeOpen && isDraggingToTrash) {
    ghostState.tx = touch.clientX;
    ghostState.ty = touch.clientY;
    checkPointerOverTrash(touch.clientX, touch.clientY);
    return;
  }

  if (isTouchScrubbing) {
    const nextItem = DockPhysics.setPointer(touch.clientX);
    if (nextItem && nextItem !== touchedItem) {
      touchedItem = nextItem;
      if (!nextItem.classList.contains('dock-add')) {
        autoActivateTab(nextItem, 'scrub');
      }
    }
  }
}, { passive: true });

function finishDockTouch(e) {
  recentTouchUntil = performance.now() + 600;
  clearHoldTimer();

  if (isDeleteModeOpen) {
    if (isDraggingToTrash && e.changedTouches && e.changedTouches[0]) {
      const touch = e.changedTouches[0];
      isDraggingToTrash = false;
      dragGhost.classList.remove('active', 'over-trash');
      if (checkPointerOverTrash(touch.clientX, touch.clientY)) {
        confirmDeleteSelectedTab();
      }
    }
    isTouchScrubbing = false;
    touchedItem = null;
    return;
  }

  if (isTouchScrubbing && touchedItem) {
    suppressNextClick = true;
    setTimeout(() => { suppressNextClick = false; }, 380);

    // '+' New Tab only opens when finger actually releases on '+'
    if (touchedItem.classList.contains('dock-add')) {
      DockPhysics.bounceItem(touchedItem, -9.5);
      openNewTabModal();
    }
  }

  isTouchScrubbing = false;
  touchedItem = null;
  DockPhysics.releasePointer();
}

dock.addEventListener('touchend', finishDockTouch);
dock.addEventListener('touchcancel', finishDockTouch);

function selectTab(item, playSound = true) {
  const nextFilter = item.dataset.filter;
  const changed = currentFilter !== nextFilter;
  document.querySelectorAll('.dock-item').forEach(i => i.classList.remove('active'));
  item.classList.add('active');
  currentFilter = nextFilter;
  if (playSound && changed) SoundFX.tick();
  updateHeaderView(item.dataset.label, currentFilter, changed);
  renderTasks({ cascade: changed });
}

/* ==========================================================
   NEW / EDIT TAB MODAL + 24-ICON PICKER
   ========================================================== */
function renderIconPicker() {
  iconGrid.innerHTML = '';
  Object.keys(ICONS).forEach(key => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `icon-option ${key === selectedIconKey ? 'selected' : ''}`;
    btn.dataset.iconKey = key;
    btn.title = key.charAt(0).toUpperCase() + key.slice(1);
    btn.innerHTML = `<svg viewBox="0 0 24 24">${ICONS[key]}</svg>`;

    btn.addEventListener('click', () => {
      selectedIconKey = key;
      SoundFX.tick();
      iconGrid.querySelectorAll('.icon-option').forEach(el => el.classList.remove('selected'));
      btn.classList.add('selected');
    });

    iconGrid.appendChild(btn);
  });
}

// Timestamp of the last open — used to swallow the synthetic click mobile browsers
// fire right after touchend (it lands on the freshly-opened backdrop and would
// instantly close the modal, which made "New Tab" appear broken on phones).
let tabModalOpenedAt = 0;

function presentTabModal() {
  tabModalOpenedAt = performance.now();
  tabModalBackdrop.classList.add('open');
  tabModalBackdrop.setAttribute('aria-hidden', 'false');
  SoundFX.pop();
  // Focus synchronously inside the user gesture so iOS opens the keyboard
  // (a setTimeout focus is rejected by Safari as "not user-activated").
  try {
    tabNameInput.focus({ preventScroll: true });
  } catch (_) {
    tabNameInput.focus();
  }
}

function openNewTabModal() {
  editingTabFilter = null;
  selectedIconKey = 'folder';
  modalTitle.textContent = 'New Navigation Tab';
  saveTabSubmitBtn.textContent = 'Create Tab';
  modalDeleteTabBtn.classList.add('hidden');
  tabNameInput.value = '';
  tabError.textContent = '';
  renderIconPicker();
  presentTabModal();
}

function openEditTabModal(filterKey) {
  const tab = customTabs.find(t => t.name.toLowerCase() === filterKey);
  if (!tab) return;
  editingTabFilter = filterKey;
  selectedIconKey = tab.icon || 'folder';
  modalTitle.textContent = 'Edit Tab';
  saveTabSubmitBtn.textContent = 'Save Changes';
  modalDeleteTabBtn.classList.remove('hidden');
  tabNameInput.value = tab.name;
  tabError.textContent = '';
  renderIconPicker();
  presentTabModal();
}

function closeNewTabModal() {
  tabModalBackdrop.classList.remove('open');
  tabModalBackdrop.setAttribute('aria-hidden', 'true');
}

closeModalBtn.addEventListener('click', closeNewTabModal);
cancelModalBtn.addEventListener('click', closeNewTabModal);
tabModalBackdrop.addEventListener('click', (e) => {
  if (e.target !== tabModalBackdrop) return;
  // Ignore the immediate ghost click after opening from the dock's "+" on touch devices
  if (performance.now() - tabModalOpenedAt < 450) return;
  closeNewTabModal();
});

modalDeleteTabBtn.addEventListener('click', () => {
  if (!editingTabFilter) return;
  const tab = customTabs.find(t => t.name.toLowerCase() === editingTabFilter);
  closeNewTabModal();
  if (tab) deleteTabByFilter(editingTabFilter, tab.name);
});

newTabForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const cleanName = tabNameInput.value.trim();

  if (!cleanName) {
    tabError.textContent = 'Please enter a tab name.';
    tabNameInput.focus();
    return;
  }

  const lower = cleanName.toLowerCase();
  const reserved = ['all', 'active', 'done'];
  const duplicate = customTabs.some(
    t => t.name.toLowerCase() === lower && t.name.toLowerCase() !== editingTabFilter
  );

  if (reserved.includes(lower) || duplicate) {
    tabError.textContent = 'A tab with this name already exists.';
    tabNameInput.focus();
    return;
  }

  if (editingTabFilter) {
    customTabs = customTabs.map(t =>
      t.name.toLowerCase() === editingTabFilter ? { name: cleanName, icon: selectedIconKey } : t
    );
    tasks = tasks.map(t =>
      (t.category || '').toLowerCase() === editingTabFilter ? { ...t, category: lower } : t
    );
    SafeStorage.set('mac_custom_tabs', customTabs);
    SafeStorage.set('mac_tasks', tasks);
    if (currentFilter === editingTabFilter) currentFilter = lower;
    renderCustomDockItems();
    updateHeaderView(cleanName, currentFilter, false);
    renderTasks();
    closeNewTabModal();
    SoundFX.pop();
    return;
  }

  customTabs.push({ name: cleanName, icon: selectedIconKey });
  SafeStorage.set('mac_custom_tabs', customTabs);
  renderCustomDockItems();
  closeNewTabModal();
  SoundFX.pop();

  const newItem = Array.from(dock.querySelectorAll('.dock-item')).find(
    i => i.dataset.filter === lower
  );
  if (newItem) {
    DockPhysics.bounceItem(newItem);
    selectTab(newItem, false);
  }
});

/* ==========================================================
   SEARCH, SORT & SMART COMPOSER LOGIC
   ========================================================== */
searchToggleBtn.addEventListener('click', () => {
  const isOpen = toolbarAccordion.classList.toggle('open');
  searchToggleBtn.classList.toggle('active', isOpen);
  SoundFX.tick();
  if (isOpen) setTimeout(() => searchInput.focus(), 140);
});

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim().toLowerCase();
  clearSearchBtn.classList.toggle('hidden', !searchQuery);
  renderTasks({ flip: true });
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearchBtn.classList.add('hidden');
  renderTasks({ flip: true });
  searchInput.focus();
});

sortPills.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-sort]');
  if (!btn) return;
  currentSort = btn.dataset.sort;
  sortPills.querySelectorAll('.pill-btn').forEach(b => b.classList.toggle('active', b === btn));
  SoundFX.tick();
  renderTasks({ flip: true });
});

clearDoneBtn.addEventListener('click', () => {
  const doneTasks = tasks.filter(t => t.done);
  if (doneTasks.length === 0) return;
  const snapshot = [...tasks];
  tasks = tasks.filter(t => !t.done);
  SafeStorage.set('mac_tasks', tasks);
  SoundFX.trash();
  renderTasks({ flip: true });
  updateDockBadges();

  showUndoToast(`Cleared ${doneTasks.length} completed task${doneTasks.length === 1 ? '' : 's'}`, () => {
    tasks = snapshot;
    SafeStorage.set('mac_tasks', tasks);
    renderTasks({ flip: true });
    updateDockBadges();
  });
});

/* Composer Drawer & Smart Natural Language Tokens */
composerOptBtn.addEventListener('click', () => {
  const open = composerAccordion.classList.toggle('open');
  composerOptBtn.classList.toggle('active', open);
  composerOptBtn.setAttribute('aria-expanded', String(open));
  SoundFX.tick();
});

composerPriority.addEventListener('click', (e) => {
  const chip = e.target.closest('[data-priority]');
  if (!chip) return;
  composerPriorityVal = chip.dataset.priority;
  composerPriority.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === chip));
  syncComposerDot();
  SoundFX.tick();
});

composerDuePresets.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-due-preset]');
  if (!btn) return;
  const preset = btn.dataset.duePreset;
  const targetIso = preset === 'today' ? getLocalISODate(0) : getLocalISODate(1);

  if (composerDueVal === targetIso) {
    composerDueVal = '';
    composerDueDate.value = '';
    btn.classList.remove('active');
  } else {
    composerDueVal = targetIso;
    composerDueDate.value = targetIso;
    composerDuePresets.querySelectorAll('[data-due-preset]').forEach(b => b.classList.toggle('active', b === btn));
  }
  syncComposerDot();
  SoundFX.tick();
});

composerDueDate.addEventListener('change', () => {
  composerDueVal = composerDueDate.value;
  composerDuePresets.querySelectorAll('[data-due-preset]').forEach(b => b.classList.remove('active'));
  syncComposerDot();
});

composerCategory.addEventListener('change', () => {
  composerCategoryVal = composerCategory.value;
  syncComposerDot();
});

function syncComposerDot() {
  const hasCustom =
    composerPriorityVal !== 'none' || Boolean(composerDueVal) || Boolean(composerCategoryVal);
  composerActiveDot.classList.toggle('hidden', !hasCustom);
}

function parseSmartInput(rawText) {
  let text = rawText;
  let priority = null;
  let dueDate = null;
  let category = null;

  // Priority tokens: !high, !!!, !med, !!, !low, !
  const prioMatch = text.match(/(?:^|\s)(!high|!!!|!medium|!med|!!|!low)(?=\s|$)/i);
  if (prioMatch) {
    const tok = prioMatch[1].toLowerCase();
    if (tok === '!high' || tok === '!!!') priority = 'high';
    else if (tok === '!medium' || tok === '!med' || tok === '!!') priority = 'medium';
    else priority = 'low';
    text = text.replace(prioMatch[0], ' ');
  }

  // Due tokens: @today, @tomorrow, @tmrw, @nextweek
  const dueMatch = text.match(/(?:^|\s)@(today|tomorrow|tmrw|nextweek)(?=\s|$)/i);
  if (dueMatch) {
    const d = dueMatch[1].toLowerCase();
    if (d === 'today') dueDate = getLocalISODate(0);
    else if (d === 'tomorrow' || d === 'tmrw') dueDate = getLocalISODate(1);
    else if (d === 'nextweek') dueDate = getLocalISODate(7);
    text = text.replace(dueMatch[0], ' ');
  }

  // Category hashtag: #tabname
  const catMatch = text.match(/(?:^|\s)#([a-z0-9_-]+)(?=\s|$)/i);
  if (catMatch) {
    const candidate = catMatch[1].toLowerCase();
    const exists = customTabs.find(t => t.name.toLowerCase() === candidate);
    if (exists) {
      category = candidate;
      text = text.replace(catMatch[0], ' ');
    }
  }

  return {
    cleanText: text.replace(/\s+/g, ' ').trim(),
    priority,
    dueDate,
    category
  };
}

todoInput.addEventListener('input', () => {
  const parsed = parseSmartInput(todoInput.value);
  const pills = [];
  if (parsed.priority) pills.push(`Priority: ${parsed.priority.toUpperCase()}`);
  if (parsed.dueDate) pills.push(`Due: ${formatDueLabel(parsed.dueDate).label}`);
  if (parsed.category) pills.push(`Tab: #${parsed.category}`);

  if (pills.length > 0) {
    smartTokens.innerHTML = pills.map(p => `<span class="token-pill">${escapeHtml(p)}</span>`).join('');
    smartTokens.classList.remove('hidden');
  } else {
    smartTokens.classList.add('hidden');
  }
});

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const raw = todoInput.value.trim();
  if (!raw) return;

  const parsed = parseSmartInput(raw);
  const finalTitle = parsed.cleanText || raw;

  let category = ['all', 'active', 'done'].includes(currentFilter) ? null : currentFilter;
  if (composerCategoryVal === '__none__') category = null;
  else if (composerCategoryVal) category = composerCategoryVal;
  if (parsed.category) category = parsed.category;

  const priority = parsed.priority || composerPriorityVal || 'none';
  const dueDate = parsed.dueDate || composerDueVal || '';

  const newTask = normalizeTask({
    id: Date.now(),
    text: finalTitle,
    done: false,
    category,
    priority,
    dueDate,
    notes: '',
    subtasks: [],
    createdAt: Date.now()
  });

  tasks.unshift(newTask);
  SafeStorage.set('mac_tasks', tasks);

  // Reset input & inline tokens
  todoInput.value = '';
  smartTokens.classList.add('hidden');
  SoundFX.pop();

  renderTasks({ newId: newTask.id, flip: true });
  updateDockBadges();
});

/* ==========================================================
   UNDO TOAST MANAGER
   ========================================================== */
let undoTimer = null;
let undoCallback = null;

function showUndoToast(message, onUndo) {
  if (undoTimer) clearTimeout(undoTimer);
  undoCallback = onUndo;
  undoMsg.textContent = message;
  undoToast.classList.add('show');

  undoProgress.style.transition = 'none';
  undoProgress.style.transform = 'scaleX(1)';
  void undoProgress.offsetWidth;
  undoProgress.style.transition = 'transform 4.6s linear';
  undoProgress.style.transform = 'scaleX(0)';

  undoTimer = setTimeout(() => {
    undoToast.classList.remove('show');
    undoCallback = null;
  }, 4600);
}

undoActionBtn.addEventListener('click', () => {
  if (undoTimer) clearTimeout(undoTimer);
  undoToast.classList.remove('show');
  if (undoCallback) {
    SoundFX.pop();
    undoCallback();
    undoCallback = null;
  }
});

/* ==========================================================
   TASK FILTERING, SORTING, FLIP ANIMATION & RENDERING
   ========================================================== */
const PRIORITY_WEIGHT = { high: 3, medium: 2, low: 1, none: 0 };

function getFilteredAndSortedTasks() {
  let list = tasks.filter(t => {
    if (currentFilter === 'active' && t.done) return false;
    if (currentFilter === 'done' && !t.done) return false;
    if (!['all', 'active', 'done'].includes(currentFilter)) {
      if ((t.category || '').toLowerCase() !== currentFilter) return false;
    }
    if (searchQuery) {
      const hay = `${t.text} ${t.notes || ''} ${(t.subtasks || []).map(s => s.text).join(' ')}`.toLowerCase();
      if (!hay.includes(searchQuery)) return false;
    }
    return true;
  });

  if (currentSort !== 'manual') {
    list = [...list].sort((a, b) => {
      if (a.done !== b.done) return a.done ? 1 : -1;
      if (currentSort === 'priority') {
        const diff = (PRIORITY_WEIGHT[b.priority] || 0) - (PRIORITY_WEIGHT[a.priority] || 0);
        if (diff !== 0) return diff;
      } else if (currentSort === 'due') {
        const da = a.dueDate || '9999-99-99';
        const db = b.dueDate || '9999-99-99';
        if (da !== db) return da.localeCompare(db);
      } else if (currentSort === 'newest') {
        return (b.createdAt || 0) - (a.createdAt || 0);
      }
      return 0;
    });
  }
  return list;
}

let lastCompletionPct = 0;
let displayedPct = 0;
let pctAnimRaf = null;

function animatePctText(targetPct) {
  if (pctAnimRaf) cancelAnimationFrame(pctAnimRaf);
  const step = () => {
    const diff = targetPct - displayedPct;
    if (Math.abs(diff) < 0.6) {
      displayedPct = targetPct;
      progressRingText.textContent = `${Math.round(displayedPct)}%`;
      pctAnimRaf = null;
      return;
    }
    displayedPct += diff * 0.22;
    progressRingText.textContent = `${Math.round(displayedPct)}%`;
    pctAnimRaf = requestAnimationFrame(step);
  };
  pctAnimRaf = requestAnimationFrame(step);
}

function updateProgressAndStats(filtered) {
  // Scope progress ring to the current view (for Active/Done views, use overall tasks so % stays meaningful)
  const scope = ['active', 'done'].includes(currentFilter)
    ? tasks
    : currentFilter === 'all'
      ? tasks
      : tasks.filter(t => (t.category || '').toLowerCase() === currentFilter);

  const total = scope.length;
  const doneCount = scope.filter(t => t.done).length;
  const activeInView = filtered.filter(t => !t.done).length;

  if (currentFilter === 'done') {
    taskStats.textContent = `${filtered.length} completed`;
  } else if (total > 0) {
    taskStats.textContent = `${activeInView} active · ${doneCount}/${total} done`;
  } else {
    taskStats.textContent = '0 items';
  }

  const pct = total === 0 ? 0 : Math.round((doneCount / total) * 100);
  const circumference = 91.1;
  const offset = circumference - (pct / 100) * circumference;
  progressRingFill.style.strokeDashoffset = offset.toFixed(2);
  animatePctText(pct);
  progressRingWrap.title = `${pct}% completed (${doneCount} of ${total})`;

  if (pct === 100 && lastCompletionPct < 100 && total > 0) {
    progressRingWrap.classList.add('complete-pop');
    setTimeout(() => progressRingWrap.classList.remove('complete-pop'), 450);
  }
  lastCompletionPct = pct;
}

function formatDueLabel(isoDate) {
  if (!isoDate) return null;
  const today = getLocalISODate(0);
  const tomorrow = getLocalISODate(1);
  if (isoDate === today) return { label: 'Today', state: 'due-today' };
  if (isoDate === tomorrow) return { label: 'Tomorrow', state: 'upcoming' };
  if (isoDate < today) return { label: `Overdue · ${isoDate.slice(5)}`, state: 'overdue' };
  const [y, m, d] = isoDate.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  const label = dt.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  return { label, state: 'upcoming' };
}

function captureTaskRects() {
  const map = new Map();
  taskList.querySelectorAll('.task-item').forEach(el => {
    map.set(Number(el.dataset.id), el.getBoundingClientRect());
  });
  return map;
}

function playFLIP(firstRects) {
  if (!firstRects || firstRects.size === 0) return;
  taskList.querySelectorAll('.task-item').forEach(el => {
    if (el.classList.contains('new-pop') || el.classList.contains('deleting')) return;
    const id = Number(el.dataset.id);
    const first = firstRects.get(id);
    if (!first) return;
    const last = el.getBoundingClientRect();
    const dx = first.left - last.left;
    const dy = first.top - last.top;
    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
      el.style.transition = 'none';
      el.style.willChange = 'transform';
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      void el.offsetWidth;
      el.style.transition = 'transform 0.36s var(--spring), border-color 0.22s, background-color 0.22s';
      el.style.transform = '';
      clearTimeout(el._willChangeTimer);
      el._willChangeTimer = setTimeout(() => {
        el.style.willChange = '';
        el._willChangeTimer = null;
      }, 420);
    }
  });
}

function renderTasks(opts = {}) {
  const { cascade = false, flip = false, newId = null } = opts;
  const firstRects = flip ? captureTaskRects() : null;
  const filtered = getFilteredAndSortedTasks();

  updateProgressAndStats(filtered);
  syncFocusTaskDropdown();

  if (filtered.length === 0) {
    taskList.innerHTML = `
      <li class="empty-state">
        <div class="empty-icon-circle">
          <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <p class="empty-title">${searchQuery ? 'No matching tasks' : 'All clear in this view'}</p>
        <p class="empty-sub">${
          searchQuery
            ? 'Try another search keyword or clear the filter.'
            : 'Add a task above, or switch views from the Dock below.'
        }</p>
      </li>
    `;
    return;
  }

  // Remove empty state if present
  const emptyEl = taskList.querySelector('.empty-state');
  if (emptyEl) emptyEl.remove();

  // Map existing DOM elements so we preserve focus, transitions & open accordions!
  const existingMap = new Map();
  taskList.querySelectorAll('.task-item').forEach(el => {
    existingMap.set(Number(el.dataset.id), el);
  });

  const keepIds = new Set(filtered.map(t => t.id));
  existingMap.forEach((el, id) => {
    if (!keepIds.has(id)) el.remove();
  });

  // Collect cascade targets first so the whole batch needs ONE forced layout
  // instead of one per card (that per-card reflow was a major mobile jank source
  // on every dock tab switch).
  const cascadeItems = [];

  filtered.forEach((task, index) => {
    let li = existingMap.get(task.id);
    if (!li) {
      li = createTaskElement(task);
      if (newId === task.id) {
        li.classList.add('new-pop');
        setTimeout(() => li.classList.remove('new-pop'), 450);
      } else if (cascade) {
        cascadeItems.push({ li, index });
      }
    } else {
      updateTaskElement(li, task);
      if (cascade) {
        li.classList.remove('cascade-in');
        cascadeItems.push({ li, index });
      }
    }
    taskList.appendChild(li);
  });

  if (cascadeItems.length > 0) {
    void taskList.offsetWidth; // single batched reflow for the entire list
    cascadeItems.forEach(({ li, index }) => {
      li.style.setProperty('--stagger', Math.min(index, 12));
      li.classList.add('cascade-in');
      setTimeout(() => li.classList.remove('cascade-in'), 600);
    });
  }

  if (flip) playFLIP(firstRects);
}

function buildTaskMetaHTML(task) {
  const pills = [];

  if (task.priority && task.priority !== 'none') {
    const label = task.priority === 'high' ? '!!! High' : task.priority === 'medium' ? '!! Med' : '! Low';
    pills.push(`<span class="meta-pill ${task.priority === 'high' ? 'priority-high' : ''}">${label}</span>`);
  }

  if (task.category && currentFilter === 'all') {
    const tabObj = customTabs.find(c => c.name.toLowerCase() === task.category);
    const tabLabel = tabObj ? tabObj.name : task.category;
    pills.push(`<span class="meta-pill">#${escapeHtml(tabLabel)}</span>`);
  }

  if (task.dueDate) {
    const dueInfo = formatDueLabel(task.dueDate);
    if (dueInfo) {
      const cls = !task.done ? dueInfo.state : '';
      pills.push(`
        <span class="meta-pill ${cls}">
          <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          ${escapeHtml(dueInfo.label)}
        </span>
      `);
    }
  }

  if (task.subtasks && task.subtasks.length > 0) {
    const subDone = task.subtasks.filter(s => s.done).length;
    pills.push(`
      <span class="meta-pill">
        <svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        ${subDone}/${task.subtasks.length}
      </span>
    `);
  }

  if (task.notes && task.notes.trim()) {
    pills.push(`
      <span class="meta-pill" title="Has notes">
        <svg viewBox="0 0 24 24"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
        Note
      </span>
    `);
  }

  return pills.join('');
}

function buildSubtasksHTML(task) {
  return (task.subtasks || [])
    .map(
      sub => `
      <li class="subtask-row ${sub.done ? 'done' : ''}" data-sub-id="${sub.id}">
        <div class="subtask-left" data-action="toggle-sub" data-sub-id="${sub.id}">
          <span class="sub-check">
            <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
          </span>
          <span class="subtask-text">${escapeHtml(sub.text)}</span>
        </div>
        <button type="button" class="subtask-del" data-action="del-sub" data-sub-id="${sub.id}" aria-label="Delete subtask">
          <svg width="13" height="13" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </li>
    `
    )
    .join('');
}

function buildCategorySelectOptions(selectedCat) {
  let html = `<option value="" ${!selectedCat ? 'selected' : ''}>No Tab</option>`;
  customTabs.forEach(t => {
    const val = t.name.toLowerCase();
    html += `<option value="${escapeHtml(val)}" ${selectedCat === val ? 'selected' : ''}>${escapeHtml(t.name)}</option>`;
  });
  return html;
}

function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = `task-item ${task.done ? 'done' : ''} ${expandedTaskIds.has(task.id) ? 'expanded' : ''}`;
  li.dataset.id = task.id;
  li.dataset.priority = task.priority || 'none';
  li.draggable = currentSort === 'manual';

  const metaHtml = buildTaskMetaHTML(task);
  const subsHtml = buildSubtasksHTML(task);
  const catHtml = buildCategorySelectOptions(task.category);
  const subTotal = (task.subtasks || []).length;
  const subPct = subTotal > 0 ? Math.round((task.subtasks.filter(s => s.done).length / subTotal) * 100) : 0;

  li.innerHTML = `
    <span class="priority-edge"></span>
    <div class="task-main-row">
      <div class="task-left">
        <span class="drag-handle" title="Drag to reorder">
          <svg viewBox="0 0 16 16"><circle cx="5" cy="4" r="1.3"/><circle cx="11" cy="4" r="1.3"/><circle cx="5" cy="8" r="1.3"/><circle cx="11" cy="8" r="1.3"/><circle cx="5" cy="12" r="1.3"/><circle cx="11" cy="12" r="1.3"/></svg>
        </span>
        <div class="checkbox" data-action="toggle" role="checkbox" aria-checked="${task.done}" tabindex="0">
          <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <div class="task-body" data-action="expand">
          <div class="task-text-wrap">
            <span class="task-text">${escapeHtml(task.text)}</span>
          </div>
          <div class="task-meta-row ${metaHtml ? '' : 'hidden'}">${metaHtml}</div>
        </div>
      </div>

      <div class="task-actions">
        <button type="button" class="row-action-btn focus-btn" data-action="focus" title="Start Focus Timer on this task">
          <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"/></svg>
        </button>
        <button type="button" class="row-action-btn expand-btn" data-action="expand" title="Task Details & Subtasks">
          <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <button type="button" class="row-action-btn del-btn" data-action="delete" title="Delete Task">
          <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
    </div>

    <div class="subtask-progress-track ${subTotal > 0 ? '' : 'hidden'}">
      <div class="subtask-progress-fill" style="width: ${subPct}%"></div>
    </div>

    <div class="task-drawer-wrap">
      <div class="task-drawer-inner">
        <div class="task-drawer-content">
          <input type="text" class="drawer-edit-title" value="${escapeHtml(task.text)}" placeholder="Task title..." aria-label="Edit task title" />

          <div class="drawer-controls-grid">
            <div class="opt-pills drawer-prio-group">
              ${['none', 'low', 'medium', 'high']
                .map(
                  p =>
                    `<button type="button" class="chip ${task.priority === p ? 'active' : ''}" data-action="set-prio" data-prio="${p}">${
                      p === 'none' ? 'No Priority' : p === 'low' ? '! Low' : p === 'medium' ? '!! Med' : '!!! High'
                    }</button>`
                )
                .join('')}
            </div>

            <input type="date" class="date-chip-input drawer-due-input" value="${escapeHtml(task.dueDate || '')}" title="Due Date" />

            <select class="select-chip drawer-cat-select" title="Assign Tab">
              ${catHtml}
            </select>
          </div>

          <div class="subtasks-box">
            <ul class="subtask-list">${subsHtml}</ul>
            <div class="subtask-add-row">
              <input type="text" class="subtask-input" placeholder="Add a subtask step..." />
              <button type="button" class="subtask-add-btn" data-action="add-sub">Add</button>
            </div>
          </div>

          <textarea class="drawer-notes" placeholder="Add notes, links, or context...">${escapeHtml(task.notes || '')}</textarea>
        </div>
      </div>
    </div>
  `;

  // Seed the update-skip caches so the first re-render doesn't re-parse identical HTML
  const metaRowEl = li.querySelector('.task-meta-row');
  if (metaRowEl) metaRowEl._cachedHtml = metaHtml;
  const catSelEl = li.querySelector('.drawer-cat-select');
  if (catSelEl) catSelEl._cachedHtml = catHtml;
  const subListEl = li.querySelector('.subtask-list');
  if (subListEl) subListEl._cachedHtml = subsHtml;

  bindTaskCardEvents(li);
  return li;
}

function updateTaskElement(li, task) {
  li.classList.toggle('done', task.done);
  li.classList.toggle('expanded', expandedTaskIds.has(task.id));
  li.dataset.priority = task.priority || 'none';
  li.draggable = currentSort === 'manual';

  const cb = li.querySelector('.checkbox');
  if (cb) cb.setAttribute('aria-checked', String(task.done));

  const textEl = li.querySelector('.task-text');
  if (textEl && textEl.textContent !== task.text) {
    textEl.textContent = task.text;
  }

  const editTitle = li.querySelector('.drawer-edit-title');
  if (editTitle && document.activeElement !== editTitle) {
    editTitle.value = task.text;
  }

  const metaRow = li.querySelector('.task-meta-row');
  if (metaRow) {
    const metaHtml = buildTaskMetaHTML(task);
    // Skip identical innerHTML writes — re-parsing every card on every render
    // (e.g. dock tab scrubbing) caused heavy style/layout churn on mobile.
    if (metaRow._cachedHtml !== metaHtml) {
      metaRow._cachedHtml = metaHtml;
      metaRow.innerHTML = metaHtml;
    }
    metaRow.classList.toggle('hidden', !metaHtml);
  }

  li.querySelectorAll('[data-action="set-prio"]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.prio === (task.priority || 'none'));
  });

  const dueInput = li.querySelector('.drawer-due-input');
  if (dueInput && document.activeElement !== dueInput) {
    dueInput.value = task.dueDate || '';
  }

  const catSelect = li.querySelector('.drawer-cat-select');
  if (catSelect && document.activeElement !== catSelect) {
    const catHtml = buildCategorySelectOptions(task.category);
    if (catSelect._cachedHtml !== catHtml) {
      catSelect._cachedHtml = catHtml;
      catSelect.innerHTML = catHtml;
    }
  }

  const subList = li.querySelector('.subtask-list');
  if (subList) {
    const subsHtml = buildSubtasksHTML(task);
    if (subList._cachedHtml !== subsHtml) {
      subList._cachedHtml = subsHtml;
      subList.innerHTML = subsHtml;
    }
  }

  const subTrack = li.querySelector('.subtask-progress-track');
  const subFill = li.querySelector('.subtask-progress-fill');
  if (subTrack && subFill) {
    const subTotal = (task.subtasks || []).length;
    const subPct = subTotal > 0 ? Math.round((task.subtasks.filter(s => s.done).length / subTotal) * 100) : 0;
    subTrack.classList.toggle('hidden', subTotal === 0);
    subFill.style.width = `${subPct}%`;
  }

  const notesArea = li.querySelector('.drawer-notes');
  if (notesArea && document.activeElement !== notesArea) {
    notesArea.value = task.notes || '';
  }
}

function bindTaskCardEvents(li) {
  // Pointer spotlight tracking
  li.addEventListener('mousemove', (e) => {
    const rect = li.getBoundingClientRect();
    li.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    li.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });

  // Double-click task text to immediately expand & focus title editor
  const textEl = li.querySelector('.task-text');
  if (textEl) {
    textEl.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      const id = Number(li.dataset.id);
      if (!expandedTaskIds.has(id)) {
        expandedTaskIds.add(id);
        li.classList.add('expanded');
      }
      const titleInput = li.querySelector('.drawer-edit-title');
      if (titleInput) {
        setTimeout(() => {
          titleInput.focus();
          titleInput.select();
        }, 120);
      }
    });
  }

  // Elastic Touch Swipe Gestures (Right = Toggle Done, Left = Delete)
  let swipeStartX = 0;
  let swipeStartY = 0;
  let swipeDx = 0;
  let isSwiping = false;

  const mainRow = li.querySelector('.task-main-row');
  mainRow.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    swipeStartX = e.touches[0].clientX;
    swipeStartY = e.touches[0].clientY;
    swipeDx = 0;
    isSwiping = false;
  }, { passive: true });

  mainRow.addEventListener('touchmove', (e) => {
    if (!swipeStartX) return;
    const dx = e.touches[0].clientX - swipeStartX;
    const dy = e.touches[0].clientY - swipeStartY;
    if (!isSwiping && Math.abs(dx) > 16 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      isSwiping = true;
      li.style.transition = 'none';
      // Promote only for the duration of the gesture (persistent will-change on
      // every card created a compositor layer per task on mobile)
      li.style.willChange = 'transform';
    }
    if (isSwiping) {
      swipeDx = dx * 0.52;
      li.style.transform = `translate3d(${swipeDx.toFixed(1)}px, 0, 0)`;
      li.classList.toggle('swiping-right', swipeDx > 38);
      li.classList.toggle('swiping-left', swipeDx < -38);
    }
  }, { passive: true });

  mainRow.addEventListener('touchend', () => {
    if (!isSwiping) {
      swipeStartX = 0;
      return;
    }
    const id = Number(li.dataset.id);
    li.classList.remove('swiping-right', 'swiping-left');
    li.style.transition = 'transform 0.36s var(--bounce)';
    li.style.transform = '';
    clearTimeout(li._willChangeTimer);
    li._willChangeTimer = setTimeout(() => {
      li.style.willChange = '';
      li._willChangeTimer = null;
    }, 420);

    if (swipeDx > 52) {
      if (navigator.vibrate) navigator.vibrate(25);
      toggleTaskWithFX(id, li.querySelector('.checkbox'));
    } else if (swipeDx < -52) {
      if (navigator.vibrate) navigator.vibrate(35);
      deleteTaskWithUndo(id);
    }
    swipeStartX = 0;
    swipeDx = 0;
    isSwiping = false;
  });

  // Delegated click actions inside card
  li.addEventListener('click', (e) => {
    const id = Number(li.dataset.id);
    const actionEl = e.target.closest('[data-action]');
    if (!actionEl) return;

    const action = actionEl.dataset.action;
    if (action === 'toggle') {
      e.stopPropagation();
      toggleTaskWithFX(id, actionEl);
    } else if (action === 'delete') {
      e.stopPropagation();
      deleteTaskWithUndo(id);
    } else if (action === 'expand') {
      toggleExpandTask(id, li);
    } else if (action === 'focus') {
      e.stopPropagation();
      openFocusModalForTask(id);
    } else if (action === 'set-prio') {
      updateTaskField(id, { priority: actionEl.dataset.prio }, true);
      SoundFX.tick();
    } else if (action === 'add-sub') {
      const input = li.querySelector('.subtask-input');
      addSubtask(id, input);
    } else if (action === 'toggle-sub') {
      toggleSubtask(id, Number(actionEl.dataset.subId));
    } else if (action === 'del-sub') {
      deleteSubtask(id, Number(actionEl.dataset.subId));
    }
  });

  // Keyboard support on checkbox
  const cb = li.querySelector('.checkbox');
  cb.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTaskWithFX(Number(li.dataset.id), cb);
    }
  });

  // Title inline editing
  const titleInput = li.querySelector('.drawer-edit-title');
  titleInput.addEventListener('input', () => {
    const clean = titleInput.value.trim();
    if (clean) updateTaskField(Number(li.dataset.id), { text: clean }, false);
  });

  // Subtask Enter key
  const subInput = li.querySelector('.subtask-input');
  subInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSubtask(Number(li.dataset.id), subInput);
    }
  });

  // Due Date & Category changes
  const dueInput = li.querySelector('.drawer-due-input');
  dueInput.addEventListener('change', () => {
    updateTaskField(Number(li.dataset.id), { dueDate: dueInput.value }, true);
  });

  const catSelect = li.querySelector('.drawer-cat-select');
  catSelect.addEventListener('change', () => {
    updateTaskField(Number(li.dataset.id), { category: catSelect.value || null }, true);
  });

  // Notes live save
  const notesArea = li.querySelector('.drawer-notes');
  notesArea.addEventListener('input', () => {
    updateTaskField(Number(li.dataset.id), { notes: notesArea.value }, false);
  });

  // Drag & Drop Reorder Events
  li.addEventListener('dragstart', (e) => {
    if (currentSort !== 'manual') {
      e.preventDefault();
      return;
    }
    draggedTaskId = Number(li.dataset.id);
    li.classList.add('dragging-card');
    e.dataTransfer.effectAllowed = 'move';
  });

  li.addEventListener('dragend', () => {
    draggedTaskId = null;
    taskList.querySelectorAll('.task-item').forEach(el => {
      el.classList.remove('dragging-card', 'drag-over-top', 'drag-over-bottom');
    });
  });

  li.addEventListener('dragover', (e) => {
    if (draggedTaskId === null || currentSort !== 'manual') return;
    e.preventDefault();
    const targetId = Number(li.dataset.id);
    if (targetId === draggedTaskId) return;

    const rect = li.getBoundingClientRect();
    const isTop = e.clientY < rect.top + rect.height / 2;
    li.classList.toggle('drag-over-top', isTop);
    li.classList.toggle('drag-over-bottom', !isTop);
  });

  li.addEventListener('dragleave', () => {
    li.classList.remove('drag-over-top', 'drag-over-bottom');
  });

  li.addEventListener('drop', (e) => {
    e.preventDefault();
    li.classList.remove('drag-over-top', 'drag-over-bottom');
    const targetId = Number(li.dataset.id);
    if (!draggedTaskId || draggedTaskId === targetId) return;

    const rect = li.getBoundingClientRect();
    const placeBefore = e.clientY < rect.top + rect.height / 2;
    reorderTasks(draggedTaskId, targetId, placeBefore);
  });
}

let draggedTaskId = null;

function reorderTasks(fromId, toId, placeBefore) {
  const fromIdx = tasks.findIndex(t => t.id === fromId);
  if (fromIdx === -1) return;
  const [moved] = tasks.splice(fromIdx, 1);
  let toIdx = tasks.findIndex(t => t.id === toId);
  if (toIdx === -1) {
    tasks.push(moved);
  } else {
    if (!placeBefore) toIdx += 1;
    tasks.splice(toIdx, 0, moved);
  }
  SafeStorage.set('mac_tasks', tasks);
  SoundFX.tick();
  renderTasks({ flip: true });
}

function toggleExpandTask(id, li) {
  if (expandedTaskIds.has(id)) {
    expandedTaskIds.delete(id);
    li.classList.remove('expanded');
  } else {
    expandedTaskIds.add(id);
    li.classList.add('expanded');
  }
  SoundFX.tick();
}

function updateTaskField(id, patch, triggerFlip = false) {
  tasks = tasks.map(t => (t.id === id ? { ...t, ...patch } : t));
  SafeStorage.set('mac_tasks', tasks);
  renderTasks({ flip: triggerFlip });
  updateDockBadges();
}

function addSubtask(taskId, inputEl) {
  const text = inputEl.value.trim();
  if (!text) return;
  tasks = tasks.map(t => {
    if (t.id !== taskId) return t;
    return {
      ...t,
      subtasks: [...(t.subtasks || []), { id: Date.now(), text, done: false }]
    };
  });
  inputEl.value = '';
  SafeStorage.set('mac_tasks', tasks);
  SoundFX.pop();
  renderTasks();
  inputEl.focus();
}

function toggleSubtask(taskId, subId) {
  tasks = tasks.map(t => {
    if (t.id !== taskId) return t;
    return {
      ...t,
      subtasks: (t.subtasks || []).map(s => (s.id === subId ? { ...s, done: !s.done } : s))
    };
  });
  SafeStorage.set('mac_tasks', tasks);
  SoundFX.tick();
  renderTasks();
}

function deleteSubtask(taskId, subId) {
  tasks = tasks.map(t => {
    if (t.id !== taskId) return t;
    return {
      ...t,
      subtasks: (t.subtasks || []).filter(s => s.id !== subId)
    };
  });
  SafeStorage.set('mac_tasks', tasks);
  SoundFX.trash();
  renderTasks();
}

function toggleTaskWithFX(id, checkboxEl) {
  const target = tasks.find(t => t.id === id);
  if (!target) return;
  const becomingDone = !target.done;

  tasks = tasks.map(t => (t.id === id ? { ...t, done: becomingDone } : t));
  SafeStorage.set('mac_tasks', tasks);

  const cardEl = taskList.querySelector(`.task-item[data-id="${id}"]`);
  if (cardEl) {
    cardEl.classList.remove('just-toggled');
    void cardEl.offsetWidth;
    cardEl.classList.add('just-toggled');
  }

  if (becomingDone) {
    if (checkboxEl) {
      const r = checkboxEl.getBoundingClientRect();
      ParticleFX.burstCheck(r.left + r.width / 2, r.top + r.height / 2);
    }

    // Check if view just hit 100% completion!
    const scope = ['all', 'active', 'done'].includes(currentFilter)
      ? tasks
      : tasks.filter(t => (t.category || '').toLowerCase() === currentFilter);
    const allDoneNow = scope.length > 0 && scope.every(t => t.done);

    if (allDoneNow) {
      SoundFX.celebrate();
      const ringRect = progressRingWrap.getBoundingClientRect();
      ParticleFX.burstCelebration(
        ringRect.left + ringRect.width / 2,
        ringRect.top + ringRect.height / 2
      );
    } else {
      SoundFX.complete();
    }
  } else {
    SoundFX.uncheck();
  }

  // If in 'active' or 'done' filter, give brief moment to admire checkmark animation before gliding out!
  if (currentFilter === 'active' || currentFilter === 'done') {
    if (cardEl) cardEl.classList.toggle('done', becomingDone);
    updateDockBadges();
    setTimeout(() => {
      renderTasks({ flip: true });
    }, 300);
  } else {
    renderTasks({ flip: currentSort !== 'manual' });
    updateDockBadges();
  }
}

function deleteTaskWithUndo(id) {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return;
  const removedTask = tasks[idx];
  const taskEl = taskList.querySelector(`.task-item[data-id="${id}"]`);

  SoundFX.trash();

  const finalizeDelete = () => {
    const firstRects = captureTaskRects();
    tasks = tasks.filter(t => t.id !== id);
    expandedTaskIds.delete(id);
    SafeStorage.set('mac_tasks', tasks);
    if (taskEl) taskEl.remove();
    renderTasks();
    playFLIP(firstRects);
    updateDockBadges();

    showUndoToast('Task deleted', () => {
      const restoreIdx = Math.min(idx, tasks.length);
      tasks.splice(restoreIdx, 0, removedTask);
      SafeStorage.set('mac_tasks', tasks);
      renderTasks({ newId: removedTask.id, flip: true });
      updateDockBadges();
    });
  };

  if (taskEl) {
    taskEl.classList.add('deleting');
    setTimeout(finalizeDelete, 240);
  } else {
    finalizeDelete();
  }
}

// Keep global helpers for backwards compatibility
window.toggleTask = (id) => toggleTaskWithFX(id, null);
window.deleteTask = (id) => deleteTaskWithUndo(id);

/* ==========================================================
   FOCUS / POMODORO TIMER + DYNAMIC ISLAND
   ========================================================== */
const FocusTimer = (() => {
  const CIRCUMFERENCE = 603.19; // 2 * PI * 96
  let durationSec = 25 * 60;
  let remainingSec = 25 * 60;
  let running = false;
  let intervalId = null;
  let focusedTaskId = '';
  let islandVisible = false;

  function formatMMSS(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function renderUI() {
    const timeStr = formatMMSS(remainingSec);
    focusClockDisplay.textContent = timeStr;
    islandTime.textContent = timeStr;

    const progress = durationSec > 0 ? (durationSec - remainingSec) / durationSec : 0;
    const offset = progress * CIRCUMFERENCE;
    focusDialRing.style.strokeDashoffset = offset.toFixed(2);

    focusStartPauseBtn.textContent = running ? 'Pause' : remainingSec < durationSec ? 'Resume' : 'Start Focus';
    focusStatusLabel.textContent = running ? 'IN FLOW STATE' : remainingSec === 0 ? 'SESSION COMPLETE' : 'READY TO FOCUS';

    islandPulse.classList.toggle('paused', !running);
    islandToggleIcon.innerHTML = running
      ? `<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>`
      : `<polygon points="6 4 20 12 6 20 6 4"/>`;

    const taskObj = tasks.find(t => String(t.id) === String(focusedTaskId));
    islandTaskName.textContent = taskObj ? taskObj.text : 'Focus Session';
    focusCompleteTaskBtn.classList.toggle('hidden', !taskObj || taskObj.done);

    const showIsland = islandVisible && (running || remainingSec < durationSec);
    focusIsland.classList.toggle('visible', showIsland);
    focusIsland.setAttribute('aria-hidden', String(!showIsland));
    document.body.classList.toggle('has-island', showIsland);
  }

  function start() {
    if (running) return;
    if (remainingSec <= 0) remainingSec = durationSec;
    running = true;
    SoundFX.pop();
    intervalId = setInterval(() => {
      remainingSec -= 1;
      if (remainingSec <= 0) {
        remainingSec = 0;
        pause(false);
        SoundFX.celebrate();
        ParticleFX.burstCelebration(window.innerWidth / 2, window.innerHeight / 3);
      }
      renderUI();
    }, 1000);
    renderUI();
  }

  function pause(playTick = true) {
    running = false;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    if (playTick) SoundFX.tick();
    renderUI();
  }

  function toggle() {
    if (running) pause();
    else start();
  }

  function reset() {
    pause(true);
    remainingSec = durationSec;
    islandVisible = false;
    renderUI();
  }

  function setPreset(minutes) {
    pause(false);
    durationSec = minutes * 60;
    remainingSec = durationSec;
    renderUI();
  }

  function setTask(id) {
    focusedTaskId = id ? String(id) : '';
    focusTaskSelect.value = focusedTaskId;
    renderUI();
  }

  function openModal(taskId = null) {
    islandVisible = false;
    if (taskId !== null) setTask(taskId);
    focusModalBackdrop.classList.add('open');
    focusModalBackdrop.setAttribute('aria-hidden', 'false');
    SoundFX.pop();
    renderUI();
  }

  function closeModal(minimizeToIsland = false) {
    focusModalBackdrop.classList.remove('open');
    focusModalBackdrop.setAttribute('aria-hidden', 'true');
    if (minimizeToIsland || running || remainingSec < durationSec) {
      islandVisible = true;
    }
    renderUI();
  }

  return { openModal, closeModal, toggle, reset, setPreset, setTask, renderUI, getTaskId: () => focusedTaskId };
})();

function syncFocusTaskDropdown() {
  const currentVal = focusTaskSelect.value;
  const activeTasks = tasks.filter(t => !t.done);
  focusTaskSelect.innerHTML = `<option value="">General Deep Work</option>`;
  activeTasks.forEach(t => {
    const opt = document.createElement('option');
    opt.value = String(t.id);
    opt.textContent = t.text;
    focusTaskSelect.appendChild(opt);
  });
  if ([...focusTaskSelect.options].some(o => o.value === currentVal)) {
    focusTaskSelect.value = currentVal;
  }
  FocusTimer.renderUI();
}

function openFocusModalForTask(id) {
  syncFocusTaskDropdown();
  FocusTimer.openModal(id);
}

headerFocusBtn.addEventListener('click', () => FocusTimer.openModal());
closeFocusModalBtn.addEventListener('click', () => FocusTimer.closeModal(false));
minimizeFocusBtn.addEventListener('click', () => {
  SoundFX.tick();
  FocusTimer.closeModal(true);
});
focusModalBackdrop.addEventListener('click', (e) => {
  if (e.target === focusModalBackdrop) FocusTimer.closeModal(true);
});

focusModeTabs.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-minutes]');
  if (!btn) return;
  focusModeTabs.querySelectorAll('.pill-btn').forEach(b => b.classList.toggle('active', b === btn));
  FocusTimer.setPreset(Number(btn.dataset.minutes));
  SoundFX.tick();
});

focusTaskSelect.addEventListener('change', () => FocusTimer.setTask(focusTaskSelect.value));
focusStartPauseBtn.addEventListener('click', () => FocusTimer.toggle());
focusResetBtn.addEventListener('click', () => FocusTimer.reset());

focusCompleteTaskBtn.addEventListener('click', () => {
  const tid = Number(FocusTimer.getTaskId());
  if (tid) {
    toggleTaskWithFX(tid, null);
    syncFocusTaskDropdown();
  }
});

islandExpandBtn.addEventListener('click', () => FocusTimer.openModal());
islandToggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  FocusTimer.toggle();
});

/* ==========================================================
   COMMAND PALETTE (⌘K / Ctrl+K)
   ========================================================== */
let cmdItems = [];
let cmdSelectedIndex = 0;

function buildCommands(query) {
  const q = query.trim().toLowerCase();
  const list = [
    {
      label: 'New Navigation Tab...',
      tag: 'Dock',
      icon: `<path d="M12 5v14M5 12h14"/>`,
      run: () => openNewTabModal()
    },
    {
      label: 'Open Focus / Pomodoro Timer',
      tag: 'Focus',
      icon: `<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5"/>`,
      run: () => FocusTimer.openModal()
    },
    {
      label: `Cycle Monochrome Theme (Current: ${currentTheme.toUpperCase()})`,
      tag: 'Appearance',
      icon: `<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2"/>`,
      run: () => themeToggleBtn.click()
    },
    {
      label: `${SoundFX.isEnabled() ? 'Mute' : 'Enable'} Tactile UI Sounds`,
      tag: 'Audio',
      icon: `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>`,
      run: () => soundToggleBtn.click()
    },
    {
      label: 'Switch View: All Tasks',
      tag: 'Navigate',
      icon: BUILTIN_ICONS.all,
      run: () => dock.querySelector('[data-filter="all"]')?.click()
    },
    {
      label: 'Switch View: Active Tasks',
      tag: 'Navigate',
      icon: BUILTIN_ICONS.active,
      run: () => dock.querySelector('[data-filter="active"]')?.click()
    },
    {
      label: 'Switch View: Completed Tasks',
      tag: 'Navigate',
      icon: BUILTIN_ICONS.done,
      run: () => dock.querySelector('[data-filter="done"]')?.click()
    }
  ];

  if (!isRunningStandalone()) {
    list.unshift({
      label: 'Install App to Device (PWA)...',
      tag: 'App',
      icon: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`,
      run: () => triggerPwaInstallFlow()
    });
  }

  customTabs.forEach(tab => {
    const lower = tab.name.toLowerCase();
    list.push({
      label: `Switch View: ${tab.name}`,
      tag: 'Custom Tab',
      icon: ICONS[tab.icon] || ICONS.folder,
      run: () => dock.querySelector(`[data-filter="${CSS.escape(lower)}"]`)?.click()
    });
  });

  if (tasks.some(t => t.done)) {
    list.push({
      label: 'Clear All Completed Tasks',
      tag: 'Cleanup',
      icon: `<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>`,
      run: () => clearDoneBtn.click()
    });
  }

  list.push({
    label: 'Export Tasks Backup (JSON)',
    tag: 'Data',
    icon: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`,
    run: () => exportTasksJSON()
  });

  // Also include tasks for instant toggling / jumping
  tasks.forEach(t => {
    list.push({
      label: `${t.done ? 'Uncheck' : 'Complete'}: ${t.text}`,
      tag: t.category ? `#${t.category}` : 'Task',
      icon: t.done ? BUILTIN_ICONS.done : BUILTIN_ICONS.active,
      run: () => toggleTaskWithFX(t.id, null)
    });
  });

  if (!q) return list.slice(0, 12);
  return list.filter(item => `${item.label} ${item.tag}`.toLowerCase().includes(q)).slice(0, 15);
}

function renderCommandList() {
  cmdItems = buildCommands(cmdInput.value);
  if (cmdSelectedIndex >= cmdItems.length) cmdSelectedIndex = 0;

  if (cmdItems.length === 0) {
    cmdList.innerHTML = `<li class="cmd-item"><span class="cmd-item-label">No matching commands or tasks</span></li>`;
    return;
  }

  cmdList.innerHTML = cmdItems
    .map(
      (item, idx) => `
      <li class="cmd-item ${idx === cmdSelectedIndex ? 'selected' : ''}" data-cmd-idx="${idx}" role="option">
        <div class="cmd-item-left">
          <svg viewBox="0 0 24 24">${item.icon}</svg>
          <span class="cmd-item-label">${escapeHtml(item.label)}</span>
        </div>
        <span class="cmd-item-tag">${escapeHtml(item.tag)}</span>
      </li>
    `
    )
    .join('');
}

function openCmdPalette() {
  cmdInput.value = '';
  cmdSelectedIndex = 0;
  renderCommandList();
  cmdBackdrop.classList.add('open');
  cmdBackdrop.setAttribute('aria-hidden', 'false');
  SoundFX.pop();
  setTimeout(() => cmdInput.focus(), 100);
}

function closeCmdPalette() {
  cmdBackdrop.classList.remove('open');
  cmdBackdrop.setAttribute('aria-hidden', 'true');
}

cmdPaletteBtn.addEventListener('click', openCmdPalette);
cmdBackdrop.addEventListener('click', (e) => {
  if (e.target === cmdBackdrop) closeCmdPalette();
});

cmdInput.addEventListener('input', () => {
  cmdSelectedIndex = 0;
  renderCommandList();
});

cmdInput.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (cmdItems.length) cmdSelectedIndex = (cmdSelectedIndex + 1) % cmdItems.length;
    renderCommandList();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (cmdItems.length) cmdSelectedIndex = (cmdSelectedIndex - 1 + cmdItems.length) % cmdItems.length;
    renderCommandList();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    const chosen = cmdItems[cmdSelectedIndex];
    if (chosen) {
      closeCmdPalette();
      chosen.run();
    }
  }
});

cmdList.addEventListener('click', (e) => {
  const row = e.target.closest('[data-cmd-idx]');
  if (!row) return;
  const chosen = cmdItems[Number(row.dataset.cmdIdx)];
  if (chosen) {
    closeCmdPalette();
    chosen.run();
  }
});

function exportTasksJSON() {
  const payload = {
    exportedAt: new Date().toISOString(),
    customTabs,
    tasks
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `monochrome-dock-tasks-${getLocalISODate(0)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  SoundFX.pop();
}

/* ==========================================================
   GLOBAL KEYBOARD SHORTCUTS
   ========================================================== */
window.addEventListener('keydown', (e) => {
  // Cmd/Ctrl + K -> Toggle Command Palette
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (cmdBackdrop.classList.contains('open')) closeCmdPalette();
    else openCmdPalette();
    return;
  }

  // '/' to quick-focus search when not typing in an input
  const tag = (document.activeElement?.tagName || '').toLowerCase();
  const isTyping = tag === 'input' || tag === 'textarea' || tag === 'select';

  if (e.key === '/' && !isTyping) {
    e.preventDefault();
    if (!toolbarAccordion.classList.contains('open')) {
      toolbarAccordion.classList.add('open');
      searchToggleBtn.classList.add('active');
    }
    searchInput.focus();
    return;
  }

  if (e.key === 'n' && !isTyping && !e.metaKey && !e.ctrlKey) {
    e.preventDefault();
    todoInput.focus();
    return;
  }

  if (e.key === 'Escape') {
    if (cmdBackdrop.classList.contains('open')) closeCmdPalette();
    if (tabModalBackdrop.classList.contains('open')) closeNewTabModal();
    if (focusModalBackdrop.classList.contains('open')) FocusTimer.closeModal(true);
    if (installModalBackdrop && installModalBackdrop.classList.contains('open')) closeInstallModal();
    if (isDeleteModeOpen) closeDeleteMode();
  }
});

function escapeHtml(s) {
  return String(s).replace(/[&<>'"]/g, t => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[t] || t));
}

/* ==========================================================
   PWA SERVICE WORKER & CROSS-DEVICE INSTALL CONTROLLER
   (Android, iOS/iPadOS, macOS, Windows, Linux — GitHub Pages Ready)
   ========================================================== */
const installPwaBtn = document.getElementById('installPwaBtn');
const installModalBackdrop = document.getElementById('installModalBackdrop');
const closeInstallModalBtn = document.getElementById('closeInstallModalBtn');
const gotItInstallBtn = document.getElementById('gotItInstallBtn');

let deferredInstallPrompt = null;

function isRunningStandalone() {
  const displayMode = q => (typeof window.matchMedia === 'function' ? window.matchMedia(q).matches : false);
  return (
    displayMode('(display-mode: standalone)') ||
    displayMode('(display-mode: minimal-ui)') ||
    window.navigator.standalone === true
  );
}

function isAppleTouchDevice() {
  const ua = window.navigator.userAgent || '';
  const iOS = /iPad|iPhone|iPod/.test(ua);
  const iPadOS = window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1;
  return iOS || iPadOS;
}

function syncInstallButtonVisibility() {
  if (!installPwaBtn) return;
  if (isRunningStandalone()) {
    installPwaBtn.classList.add('hidden');
    return;
  }
  // Show install button when native prompt is ready OR on iOS/iPadOS Safari
  const canPrompt = Boolean(deferredInstallPrompt) || isAppleTouchDevice();
  installPwaBtn.classList.toggle('hidden', !canPrompt);
}

function openInstallModal() {
  if (!installModalBackdrop) return;
  installModalBackdrop.classList.add('open');
  installModalBackdrop.setAttribute('aria-hidden', 'false');
  SoundFX.pop();
}

function closeInstallModal() {
  if (!installModalBackdrop) return;
  installModalBackdrop.classList.remove('open');
  installModalBackdrop.setAttribute('aria-hidden', 'true');
}

async function triggerPwaInstallFlow() {
  if (deferredInstallPrompt) {
    SoundFX.pop();
    deferredInstallPrompt.prompt();
    try {
      const choice = await deferredInstallPrompt.userChoice;
      if (choice && choice.outcome === 'accepted') {
        deferredInstallPrompt = null;
        syncInstallButtonVisibility();
      }
    } catch (_) {}
    return;
  }
  // Fallback manual install guide (iOS/iPadOS Safari or browsers without beforeinstallprompt)
  openInstallModal();
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  syncInstallButtonVisibility();
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  syncInstallButtonVisibility();
  closeInstallModal();
  SoundFX.celebrate();
  ParticleFX.burstCelebration(window.innerWidth / 2, window.innerHeight / 3);
});

if (installPwaBtn) {
  installPwaBtn.addEventListener('click', triggerPwaInstallFlow);
}
if (closeInstallModalBtn) {
  closeInstallModalBtn.addEventListener('click', closeInstallModal);
}
if (gotItInstallBtn) {
  gotItInstallBtn.addEventListener('click', closeInstallModal);
}
if (installModalBackdrop) {
  installModalBackdrop.addEventListener('click', (e) => {
    if (e.target === installModalBackdrop) closeInstallModal();
  });
}

// Register relative Service Worker (works on GitHub Pages subpaths & root domains)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { scope: './' }).catch(() => {});
  });
}

/* Handle PWA Manifest App Shortcuts (?action=new | ?action=focus | ?view=active) */
function handleLaunchParams() {
  try {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    const actionParam = params.get('action');

    if (viewParam) {
      const tabEl = dock.querySelector(`[data-filter="${CSS.escape(viewParam.toLowerCase())}"]`);
      if (tabEl) selectTab(tabEl, false);
    }

    if (actionParam === 'new') {
      setTimeout(() => todoInput.focus(), 120);
    } else if (actionParam === 'focus') {
      setTimeout(() => FocusTimer.openModal(), 150);
    }

    if (viewParam || actionParam) {
      const cleanUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, '', cleanUrl);
    }
  } catch (_) {}
}

/* ==========================================================
   INITIALIZE APP
   ========================================================== */
renderCustomDockItems();
updateHeaderView('All', 'all', false);
renderTasks({ cascade: true });
syncInstallButtonVisibility();
handleLaunchParams();

