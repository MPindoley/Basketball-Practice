// Practice Book app: plan builder, drill library with animated whiteboards, live practice runner,
// sketch board, and the staff's reference notes. Plain DOM, no build step.
(() => {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const ic = (p, fill) => `<svg viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="${fill ? 'none' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I = {
    plan: ic('<path d="M9 3h6v3H9z"/><path d="M7 4.5H5V21h14V4.5h-2"/><path d="M8.5 11h7M8.5 15h5"/>'),
    drills: ic('<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>'),
    run: ic('<circle cx="12" cy="13.5" r="7.5"/><path d="M12 10v3.5l2.5 2M9.5 2.5h5M12 2.5V6"/>'),
    board: ic('<path d="M4 20l4.2-1L19.3 7.9a2.1 2.1 0 0 0-3-3L5.2 16z"/><path d="M14.5 6.5l3 3"/>'),
    plays: ic('<circle cx="6.5" cy="17" r="3"/><path d="M14.5 4.5l5 5M19.5 4.5l-5 5M9 14.5c2-4 4.5-6.5 7.5-7.5M13.5 6.5l3-.5-.5 3"/>'),
    notes: ic('<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3M9 7.5h6"/>'),
    play: ic('<path d="M8 5.2v13.6a.6.6 0 0 0 .9.5l10.7-6.8a.6.6 0 0 0 0-1L8.9 4.7a.6.6 0 0 0-.9.5z"/>', 1),
    pause: ic('<rect x="6.5" y="5" width="4" height="14" rx="1"/><rect x="13.5" y="5" width="4" height="14" rx="1"/>', 1),
    next: ic('<path d="M6 6l8 6-8 6zM17 6v12"/>'),
    prev: ic('<path d="M18 6l-8 6 8 6zM7 6v12"/>'),
    plus: ic('<path d="M12 5v14M5 12h14"/>'),
    back: ic('<path d="M15 5l-7 7 7 7"/>'),
    more: ic('<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>', 1),
    up: ic('<path d="M12 19V5M6 11l6-6 6 6"/>'),
    down: ic('<path d="M12 5v14M6 13l6 6 6-6"/>'),
    swap: ic('<path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5"/>'),
    shuffle: ic('<path d="M3 7h3.5c2.6 0 4 1.6 5.5 5s2.9 5 5.5 5H21M3 17h3.5c1.4 0 2.5-.6 3.4-1.6M14.1 8.6c.9-1 2-1.6 3.4-1.6H21M18 4l3 3-3 3M18 14l3 3-3 3"/>'),
    undo: ic('<path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>'),
    trash: ic('<path d="M4 7h16M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13"/>'),
    list: ic('<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>'),
    copy: ic('<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>'),
    search: ic('<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>'),
    star: ic('<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z"/>', 1),
    check: ic('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    people: ic('<circle cx="9" cy="8" r="3.2"/><path d="M3 20c.6-3.4 3-5.3 6-5.3s5.4 1.9 6 5.3"/><path d="M16 4.8a3.2 3.2 0 0 1 0 6.4M18.2 14.9c1.6.8 2.6 2.5 2.9 5.1"/>'),
    edit: ic('<path d="M4 20h4L19 9l-4-4L4 16z"/>'),
    plusOne: ic('<circle cx="12" cy="12" r="8.5"/><path d="M12 8v8M8 12h8"/>'),
    flag: ic('<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>'),
  };
  const BALL = '<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="#f07a1a" stroke="#8a3b06" stroke-width="2"/><path d="M3 20h34M20 3v34M8 8c6 5 6 19 0 24M32 8c-6 5-6 19 0 24" fill="none" stroke="#8a3b06" stroke-width="2"/></svg>';

  // ---------- library data ----------
  const BY_ID = Object.fromEntries(DATA.drills.map(d => [d.id, d]));
  const GROUP = {};
  DATA.groups.forEach(g => g.cats.forEach(c => { GROUP[c] = g; }));
  const gc = cat => `--gc:var(--g-${(GROUP[cat] || { id: 'breaks' }).id})`;
  const LEVELS = ['Foundation', 'Intermediate', 'Advanced'];
  const levelBars = l => `<span class="level l${LEVELS.indexOf(l) + 1}" title="${esc(l)}"><i></i><i></i><i></i></span>`;
  const own = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
  // state.edits[id] holds only the fields the coach changed on a built-in item, so the originals keep updating underneath
  const withEdits = d => own(state.edits, d.id) ? { ...d, ...state.edits[d.id], edited: true } : d;
  const drill = id => (own(BY_ID, id) && withEdits(BY_ID[id])) || (own(state.custom, id) && state.custom[id]) || null;
  const allDrills = () => DATA.drills.map(withEdits).concat(Object.values(state.custom));
  // the diagram to show: the coach's own (his play, or his edit of ours), else the built-in one
  const diagOf = id => { const d = drill(id); return (d && d.dg) || DIAGRAMS[id] || null; };
  // A sheet photo is an uploaded asset in the Claude version (so it syncs; the record only holds its id),
  // or a data URL this app made, kept on this device. Nothing else gets shown.
  const PHOTO = /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/, ASSET = /^[A-Za-z0-9_-]{8,64}$/;
  const photoSrc = ph => !ph ? '' : ph.id && ASSET.test(ph.id) ? '/_blob/' + ph.id : PHOTO.test(ph.img || '') ? ph.img : '';
  const photoOk = ph => !!photoSrc(ph);
  const BOOK = new Set((DATA.groups.find(g => g.id === 'plays') || { cats: [] }).cats); // playbook categories
  // the Lake program (js/program.js): the "Runs at" ladder is a different idea from drill difficulty, so it never says "level"
  const P = DATA.program, LADDER = P.LADDER, VALUES = P.VALUES, keyOf = P.keyOf;
  const teamName = t => P.LEVEL_NAMES[t] + (t === '7' || t === '8' ? ' grade' : '');
  const cap = s => s ? s[0].toUpperCase() + s.slice(1) : '';
  const typeName = d => cap(d.style && d.style !== 'motion' ? d.style : d.type); // "Quick hitter", "Action", "Continuity"
  const isConf = it => !!(it.confirm || (it.play && (BY_ID[it.play] || {}).confirm));
  const thumbs = new Map();
  const thumb = id => {
    if (!thumbs.has(id)) { const dg = diagOf(id); thumbs.set(id, dg ? Court.thumb({ ...dg, id }) : Court.blank(false)); }
    return thumbs.get(id);
  };

  // ---------- time helpers ----------
  const pad = n => String(n).padStart(2, '0');
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
  const toMin = hhmm => { const [h, m] = (hhmm || '15:30').split(':').map(Number); return h * 60 + m; };
  const clock = (min, ampm) => {
    const t = Math.round(min), h = Math.floor(t / 60) % 24, m = t % 60;
    return `${((h + 11) % 12) + 1}:${pad(m)}${ampm ? (h < 12 ? ' AM' : ' PM') : ''}`;
  };
  const prettyDate = s => {
    if (!s) return '';
    const d = new Date(s + 'T12:00:00');
    return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  };
  const uid = () => Math.random().toString(36).slice(2, 9);

  // ---------- state ----------
  const KEY = 'practicebook.v1', RKEY = 'practicebook.run', SKEY = 'practicebook.synced';
  const read = k => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; /* private mode or full: keep going in memory */ } };

  function planFrom(tpl, start) {
    const p = { id: uid(), name: 'New Practice', date: today(), start: start || '15:30', focus: '', message: '', items: [] };
    if (tpl === 'blueprint') {
      p.name = '90-Minute Blueprint';
      p.items = DATA.blueprint.flatMap(b => b.cats.every(c => c.includes('-'))
        ? b.cats.map(id => ({ d: id, min: BY_ID[id].min }))
        : b.block === 'Water' ? [{ d: 'BR-01', min: 2 }] : [{ slot: b.block, cats: b.cats, min: parseInt(b.min, 10) }]);
    } else if (tpl !== 'blank') {
      const t = DATA.templates.find(x => x.id === tpl);
      Object.assign(p, { name: t.name, focus: t.focus, message: t.message, items: t.items.map(id => ({ d: id, min: BY_ID[id].min })) });
    }
    return p;
  }
  // program settings: our team, "We run this" overrides, Our 5, cleared "Staff to confirm" tags
  const fresh = () => ({ team: '8', runs: {}, our5: [], confirmed: {}, sheet: { title: '', ids: [] }, edits: {} }); // sheet: the plays picked for the printed play sheet
  function seed() {
    const p = planFrom('plan1');
    return { v: 1, updated: 0, plans: { [p.id]: p }, current: p.id, custom: {}, notes: {}, installed: {}, sketch: { full: false, h: [], f: [] }, ...fresh() };
  }
  // saved or synced state from before the program lacks the new keys; an unknown team would empty Our Package
  const load = s => { s = { ...fresh(), ...s }; if (!LADDER.includes(s.team)) s.team = '8'; return s; };
  let state = load(read(KEY) || seed());
  const cur = () => state.plans[state.current] || Object.values(state.plans)[0];
  const ours = it => it.mine ? state.runs[it.id] !== false : DATA.runsHere(it, state.team, state.runs);
  function save(rerender = true) {
    state.updated = Date.now();
    if (!write(KEY, state)) toast('This device is out of room, so that is not saved here. Delete a photo or an old play.');
    sync.push();
    if (rerender) render();
  }

  // ---------- sync through the artifact's per-person store (claude.ai); local-only elsewhere ----------
  const merge = (to, from) => ['plans', 'custom', 'notes', 'installed', 'runs', 'confirmed', 'edits'].forEach(k => {
    to[k] = to[k] || {};
    for (const id in from[k] || {}) if (!(id in to[k])) to[k][id] = from[k][id];
  });
  const sync = {
    ref: null, on: false, timer: 0, chain: Promise.resolve(), first: true,
    async init() {
      if (!window.claude || !window.claude.use) return;
      const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
      const id = user && db ? await user.id() : null;
      if (!id) return;
      this.ref = db.doc('data/users/' + id + '/state');
      this.ref.onSnapshot(snap => {
        if (snap.metadata.hasPendingWrites || snap.metadata.fromCache) return;
        this.on = true; paintSync();
        const remote = snap.exists ? JSON.parse(JSON.stringify(snap.data().state)) : null;
        const first = this.first; this.first = false;
        if (!remote) return this.push();
        // only edits made since the last sync get merged, so plans deleted elsewhere stay deleted
        const dirty = first && state.updated > (read(SKEY) || 0);
        if (remote.updated > state.updated) {
          const mine = dirty ? state : null;
          state = load(remote);
          if (mine) { merge(state, mine); save(); } else { write(KEY, state); render(); }
          refreshDetail();
        } else if (remote.updated < state.updated) {
          if (dirty) merge(state, remote);
          this.push();
        }
        if (remote.updated === state.updated) write(SKEY, state.updated);
      }, () => { this.on = false; paintSync(); });
    },
    push() {
      if (!this.ref) return;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const body = { state: JSON.parse(JSON.stringify(state)) };
        this.chain = this.chain.then(() => this.ref.set(body)).catch(e => {
          this.on = false; paintSync();
          toast(e && (e.code === 'quota_exceeded' || e.code === 'invalid_argument') ? 'Cloud save is full. Delete old plans or sketches.' : 'Could not save to your account. Changes are on this device.');
        });
      }, 1200);
    },
  };
  function paintSync() {
    const el = $('#sync');
    if (!el) return;
    el.className = 'sync' + (sync.on ? ' on' : '');
    el.innerHTML = `<i></i>${sync.on ? 'Synced to your account' : 'Saved on this device'}`;
  }

  // ---------- UI scaffolding ----------
  let view = 'plan', catOpen = null, toolsOpen = -1, notesTab = 'program', allCalls = false, flash = null;
  let libQuery = '', libLevel = '', libCollege = false, libValue = '', speed = 1, navigatedIn = false, lastHash = '#plan';
  const foldsOpen = new Set(); // Playbook <details> stay open across re-renders
  document.addEventListener('toggle', e => { const k = e.target.dataset && e.target.dataset.fold; if (k) foldsOpen[e.target.open ? 'add' : 'delete'](k); }, true);
  let pick = null; // {mode: 'add'|'slot'|'swap', i, cats, label}
  let mainBoards = [];

  document.getElementById('app').innerHTML = `
    <div class="shell">
      <header class="topbar">
        <a class="brand" href="#plan" aria-label="Practice Book home">${BALL}<span><b>Practice Book</b><small id="teamline"></small></span></a>
        <span class="spacer"></span>
        <span id="sync" class="sync"></span>
      </header>
      <main id="main"></main>
      <nav class="tabs" aria-label="Sections">
        ${[['plan', 'Plan'], ['drills', 'Drills'], ['plays', 'Plays'], ['run', 'Run'], ['board', 'Board'], ['notes', 'Notes']]
          .map(([k, l]) => `<a href="#${k}" data-tab="${k}">${I[k]}<span>${l}</span></a>`).join('')}
      </nav>
      <a id="runpill" href="#run" hidden></a>
    </div>`;
  const main = $('#main');
  paintSync();

  function render() {
    mainBoards.forEach(b => b.destroy());
    mainBoards = [];
    main.innerHTML = ({ plan: viewPlan, drills: viewDrills, plays: viewPlays, run: viewRun, board: viewBoard, notes: viewNotes })[view]();
    $('#teamline').textContent = `Lake Flyers · ${teamName(state.team)} · 2026-27`;
    const tab = view === 'drills' && BOOK.has(catOpen) ? 'plays' : view;
    $$('.tabs a').forEach(a => a.classList.toggle('on', a.dataset.tab === tab));
    $$('.board-scope', main).forEach(s => mainBoards.push(mountBoard(s, { loop: view === 'run', autoplay: view === 'run' })));
    if (view === 'board') mountSketch($('#sketch'), sketchData(), () => save(false));
    tickRun();
  }

  function toast(msg) {
    $$('.toast').forEach(t => t.remove());
    const t = document.createElement('div');
    t.className = 'toast'; t.setAttribute('role', 'status'); t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2400);
  }
  function sheet(html) {
    closeSheet();
    const bd = document.createElement('div');
    bd.className = 'sheet-backdrop';
    bd.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;
    bd.addEventListener('click', e => { if (e.target === bd) closeSheet(); });
    document.body.appendChild(bd);
    return bd;
  }
  const closeSheet = () => $$('.sheet-backdrop').forEach(s => s.remove());

  // ---------- routing ----------
  function route() {
    const h = decodeURIComponent(location.hash.slice(1));
    if ((h.startsWith('drill-') || h === 'flash') && !main.childElementCount) render(); // opened straight from a link: draw the screen behind it
    if (h.startsWith('drill-')) { openDrill(h.slice(6)); return; }
    if (h === 'flash') { if (!$('#flash')) openFlash(); return; }
    $('#flash') && $('#flash').remove();
    closeDetailEl();
    let v = h, c = null;
    if (h.startsWith('cat-')) { v = 'drills'; c = h.slice(4); }
    if (!['plan', 'drills', 'plays', 'run', 'board', 'notes'].includes(v)) v = 'plan';
    if ('#' + (h || 'plan') !== lastHash) { closePicker(); closeSheet(); $('#playsheet') && $('#playsheet').remove(); $('#drillform') && $('#drillform').remove(); }
    lastHash = '#' + (h || 'plan');
    if (v === view && c === catOpen && main.childElementCount) return;
    view = v; catOpen = c; toolsOpen = -1;
    render();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  const goDrill = id => { navigatedIn = true; location.hash = 'drill-' + id; };
  function closeDetail() {
    if (navigatedIn && location.hash.startsWith('#drill-')) history.back();
    else { closeDetailEl(); if (location.hash.startsWith('#drill-')) location.hash = lastHash; }
  }

  // ---------- plan view ----------
  function schedule(p) {
    let t = toMin(p.start);
    return p.items.map(it => { const s = t; t += it.min; return s; }).concat(t);
  }
  const stepper = (i, min) => `<div class="stepper"><button data-act="min" data-i="${i}" data-d="-1" aria-label="One minute less">−</button><span class="num">${min}<small>min</small></span><button data-act="min" data-i="${i}" data-d="1" aria-label="One minute more">+</button></div>`;

  function viewPlan() {
    const p = cur();
    const times = schedule(p);
    const total = times[times.length - 1] - toMin(p.start);
    const count = p.items.filter(it => it.d).length;
    const rows = p.items.map((it, i) => itemRow(it, i, times[i])).join('');
    const vals = VALUES.map(v => [v, p.items.filter(it => it.d && ((drill(it.d) || {}).values || []).includes(v)).length])
      .filter(x => x[1]).sort((a, b) => b[1] - a[1]);
    return `
      <section class="card plan-head">
        <div class="row" style="flex-wrap:nowrap;align-items:flex-start">
          <div style="flex:1;min-width:0"><div class="eyebrow">${esc(prettyDate(p.date)) || 'Practice plan'}</div>
            <input class="name" id="pname" data-field="name" value="${esc(p.name)}" aria-label="Plan name"></div>
          <button class="icon-btn" data-act="plans" aria-label="Saved plans" title="Saved plans">${I.list}</button>
          <button class="icon-btn" data-act="newplan" aria-label="New plan" title="New plan">${I.plus}</button>
        </div>
        <div class="plan-meta">
          <label class="lbl">Date<input class="field" type="date" id="pdate" data-field="date" value="${esc(p.date)}"></label>
          <label class="lbl">Start time<input class="field" type="time" id="pstart" data-field="start" value="${esc(p.start)}"></label>
          <label class="lbl wide">Focus<input class="field" id="pfocus" data-field="focus" value="${esc(p.focus)}" placeholder="What this practice is about"></label>
          <label class="lbl" style="grid-column:1/-1">Message to the team<input class="field" id="pmsg" data-field="message" value="${esc(p.message)}" placeholder="One line they should remember" list="sayings"></label>
          <datalist id="sayings">${P.sayings.map(s => `<option value="${esc(s)}">`).join('')}</datalist>
        </div>
        <div class="plan-stats">
          <div><b class="num">${total}</b><span>Minutes</span></div>
          <div><b class="num">${count}</b><span>Drills</span></div>
          <div><b class="num">${clock(toMin(p.start))}–${clock(times[times.length - 1], true)}</b><span>Start to finish</span></div>
        </div>
        <div class="values-line"><span class="eyebrow">Trains</span>${vals.length
          ? vals.map(([v, n]) => `<span><b>${v}</b> <span class="num">${n}</span></span>`).join('<i>·</i>')
          : '<span class="muted">No mentality drills yet.</span> <a href="#cat-LM">Add one from Lake Mentality</a>'}</div>
      </section>
      ${p.items.length ? `<div class="plan-shuffle"><button class="btn small" data-act="pshuffle">${I.shuffle}Shuffle drills</button>
        ${unshuffle && unshuffle.id === p.id && unshuffle.after === JSON.stringify(p.items) ? `<button class="btn small" data-act="unshuffle">${I.undo}Undo shuffle</button>` : ''}
        <span class="muted">Same blocks and minutes, new drills</span></div>` : ''}
      <div class="timeline">${rows || `<div class="card empty"><h3>No drills yet</h3><p>Add drills from the library, or start from a template.</p><button class="btn primary" data-act="newplan">Start from a template</button></div>`}</div>
      <div class="plan-actions">
        <button class="btn" data-act="add">${I.plus}Add drill</button>
        <button class="btn" data-act="copy">${I.copy}Copy as text</button>
      </div>
      ${count ? `<div class="start-bar"><a class="btn primary big block" href="#run">${I.play}${run && !run.done ? 'Back to practice' : 'Run this practice'}</a></div>` : ''}`;
  }

  function itemRow(it, i, start) {
    const tools = toolsOpen === i ? `<div class="item-tools">
        <button class="btn small" data-act="move" data-i="${i}" data-d="-1" ${i === 0 ? 'disabled' : ''}>${I.up}Up</button>
        <button class="btn small" data-act="move" data-i="${i}" data-d="1" ${i === cur().items.length - 1 ? 'disabled' : ''}>${I.down}Down</button>
        <button class="btn small" data-act="swap" data-i="${i}">${I.swap}${it.d ? 'Swap drill' : 'Pick drill'}</button>
        ${movable(it) ? `<button class="btn small" data-act="reroll" data-i="${i}">${I.shuffle}Shuffle</button>` : ''}
        <button class="btn small" data-act="remove" data-i="${i}">${I.trash}Remove</button></div>` : '';
    const side = `<div class="side">${stepper(i, it.min)}<button class="icon-btn ghost" data-act="tools" data-i="${i}" aria-label="More options" aria-expanded="${toolsOpen === i}">${I.more}</button></div>`;
    if (!it.d) {
      return `<div class="item slot" style="${gc(it.cats[0].slice(0, 2))}"><div class="time num">${clock(start)}</div>
        <button class="body" data-act="fill" data-i="${i}"><span class="nm">+ Pick a drill</span>
        <span class="meta"><span class="tag">${esc(it.slot)}</span>${it.cats.map(c => `<span class="cat-code" style="${gc(c.slice(0, 2))}">${c}</span>`).join('')}</span></button><span class="ithumb"></span>${side}${tools}</div>`;
    }
    const d = drill(it.d) || { id: it.d, name: 'Deleted drill', cat: 'BR' };
    return `<div class="item${d.cat === 'BR' ? ' water' : ''}" style="${gc(d.cat)}"><div class="time num">${clock(start)}</div>
      <button class="body" data-act="open" data-id="${esc(d.id)}"><span class="nm">${esc(d.name)}</span>
      <span class="meta"><span class="cat-code">${esc(d.cat)}</span><span class="tag">${esc(DATA.cats[d.cat] || '')}</span>${d.college ? `<span class="college">${I.star}${esc(d.college.split(' (')[0])}</span>` : ''}</span></button>
      <button class="ithumb" data-act="open" data-id="${esc(d.id)}" tabindex="-1" aria-hidden="true">${d.sketch && !d.dg ? sketchStatic(d.sketch, true) : thumb(d.id)}</button>${side}${tools}</div>`;
  }

  function planText(p) {
    const times = schedule(p);
    const lines = [`${p.name.toUpperCase()} · ${prettyDate(p.date)} · ${clock(toMin(p.start))}–${clock(times[times.length - 1], true)}`];
    if (p.focus) lines.push('Focus: ' + p.focus);
    if (p.message) lines.push('Message: ' + p.message);
    if (state.our5.length) lines.push('Our 5: ' + state.our5.join(' · '));
    lines.push('');
    p.items.forEach((it, i) => {
      const d = it.d && drill(it.d);
      lines.push(`${clock(times[i])}  ${d ? d.name : 'Open: ' + it.slot} (${it.min} min)`);
      if (d && d.points) lines.push('      ' + d.points.join(' / '));
    });
    return lines.join('\n');
  }

  // ---------- shuffle: new drills that do the same job, so a template's shape stays sound ----------
  // Same job = same category and side (a blueprint block keeps its own categories). Free-throw drills trade only with each other,
  // plays only with plays of the same type (or OB kind) in Our Package. Water, the huddle, the dynamic warm-up and drills marked
  // shuffle: false (js/program.js) never move and are never picked; minutes stay put.
  const jobOf = d => d.cat === 'BR' || d.id === 'WU-01' || d.shuffle === false ? null
    : /free throw/i.test(d.name) ? 'FT'
    : d.cat === 'PL' ? 'PL:' + d.type
    : d.cat === 'OB' ? 'OB:' + (/SLOB/.test(d.name) ? 'side' : /BLOB/.test(d.name) ? 'base' : 'press')
    : d.cat + (d.side ? ':' + d.side : '');
  const movable = it => !it.d || !!jobOf(drill(it.d) || { cat: 'BR' });
  function reroll(it, used) {
    if (!movable(it)) return it;
    const job = it.d && jobOf(drill(it.d));
    const fits = it.cats ? d => d.cat !== 'BR' && d.shuffle !== false && it.cats.some(c => c === d.cat || c === d.id) : d => jobOf(d) === job;
    const pool = allDrills().filter(d => !used.has(d.id) && fits(d) && (!BOOK.has(d.cat) || ours(d)));
    const near = pool.filter(d => Math.abs(d.min - it.min) <= 4);
    const from = near.length ? near : pool;
    return from.length ? { ...it, d: from[Math.floor(Math.random() * from.length)].id } : it;
  }
  let unshuffle = null; // the drills before the last shuffle; Undo shows only until the plan changes again

  // ---------- library ----------
  function matches(d) {
    if (libLevel && d.level !== libLevel) return false;
    if (libCollege && !d.college) return false;
    if (libValue && !(d.values || []).includes(libValue)) return false;
    if (!libQuery) return true;
    const q = libQuery.toLowerCase();
    return [d.id, d.name, d.college, d.players, d.setup, d.runs, DATA.cats[d.cat]].some(s => s && s.toLowerCase().includes(q));
  }
  const inPlan = id => cur().items.some(it => it.d === id);
  // "Runs at" chips: filled from the lowest level that runs it up; our team gets a ring
  const runsAt = (from, sm) => `<span class="runsat${sm ? ' sm' : ''}" role="img" aria-label="Runs at ${from ? esc(P.LEVEL_NAMES[from]) + (from === 'V' ? '' : ' and up') : ': not set'}"><b>Runs at</b>${LADDER.map((l, i) =>
    `<i class="${from && i >= LADDER.indexOf(from) ? 'on' : ''}${l === state.team ? ' us' : ''}">${l}</i>`).join('')}</span>`;
  const confirmTag = (it, tap) => !isConf(it) || state.confirmed[keyOf(it)] ? '' : tap
    ? `<button class="confirm" data-act="confirm" data-k="${esc(keyOf(it))}" title="Tap twice once the staff confirms it">Staff to confirm</button>`
    : '<span class="confirm">Staff to confirm</span>';
  const isProg = d => !!(d.from || d.candidate);
  function drillCard(d, picking, opts = {}) {
    return `<div class="drill-card${opts.dim ? ' dim' : ''}" style="${gc(d.cat)}">
      <button class="thumb" data-act="open" data-id="${esc(d.id)}" aria-label="Open ${esc(d.name)}">${d.sketch && !d.dg ? sketchStatic(d.sketch, true) : thumb(d.id)}</button>
      <button class="info" data-act="open" data-id="${esc(d.id)}">
        <b>${esc(d.name)}</b>
        <span class="row" style="gap:8px"><span class="cat-code">${esc(d.id)}</span>${levelBars(d.level)}<span class="tag num">${d.min} min</span>${inPlan(d.id) && !picking ? '<span class="tag" style="color:var(--accent)">In plan</span>' : ''}</span>
        ${isProg(d) ? `<span class="row prog-line">${runsAt(P.fromOf(d), true)}${d.num ? `<span class="numtag">${esc(d.num)}</span>` : ''}${d.type ? `<span class="tag">${esc(typeName(d))}</span>` : ''}${confirmTag(d)}</span>` : ''}
        ${opts.why && d.why ? `<span class="why"><b>Why it fits Lake:</b> ${esc(d.why)}</span>` : ''}${opts.why && d.best ? `<span class="why"><b>Best for:</b> ${esc(d.best)}</span>` : ''}
        ${d.college ? `<span><span class="college">${I.star}${esc(d.college)}</span></span>` : ''}
        ${opts.why ? '' : `<small class="muted">${esc(d.players || '')}</small>`}
      </button>
      ${opts.sheet ? `<button class="add${onSheet(d.id) ? ' on' : ''}" data-act="sheetpick" data-id="${esc(d.id)}" aria-pressed="${onSheet(d.id)}" aria-label="${esc(d.name)} on the play sheet" title="${onSheet(d.id) ? 'Take off the play sheet' : 'Put on the play sheet'}">${onSheet(d.id) ? I.check : I.plus}</button>`
    : `<button class="add" data-act="${picking ? 'pick' : 'quickadd'}" data-id="${esc(d.id)}" aria-label="${picking ? 'Use' : 'Add'} ${esc(d.name)}" title="${picking ? 'Use this drill' : 'Add to plan'}">${picking ? I.check : I.plus}</button>`}
    </div>`;
  }
  function filterBar(prefix) {
    return `<div class="search">${I.search}<input class="field" type="search" id="${prefix}q" data-search="${prefix}" value="${esc(libQuery)}" placeholder="Search drills and plays: closeout, Villanova, Texas…" aria-label="Search drills"></div>
      <div class="filters chips">
        ${['', ...LEVELS].map(l => `<button class="chip ${libLevel === l ? 'on' : ''}" data-act="level" data-v="${l}" aria-pressed="${libLevel === l}">${l ? levelBars(l) + l : 'All levels'}</button>`).join('')}
        <button class="chip ${libCollege ? 'on' : ''}" data-act="college" aria-pressed="${libCollege}">${I.star.replace('<svg', '<svg width="14" height="14"')}College drills</button>
      </div>
      <div class="filters chips" role="group" aria-label="Values">${['', ...VALUES].map(v => `<button class="chip ${libValue === v ? 'on' : ''}" data-act="value" data-v="${v}" aria-pressed="${libValue === v}">${v || 'All values'}</button>`).join('')}</div>`;
  }
  function results(picking, cats) {
    const list = allDrills().filter(d => matches(d) && (!cats || cats.some(c => c === d.cat || c === d.id)));
    if (!list.length) return `<div class="empty"><h3>No drills match</h3><p>Try a different word or clear the filters.</p></div>`;
    const byCat = {};
    list.forEach(d => (byCat[d.cat] = byCat[d.cat] || []).push(d));
    return Object.keys(DATA.cats).filter(c => byCat[c]).map(c => `
      <section class="group" style="${gc(c)}"><h2>${c} · ${esc(DATA.cats[c])}</h2>
      <div class="drill-list">${byCat[c].map(d => drillCard(d, picking)).join('')}</div></section>`).join('');
  }
  function viewDrills() {
    if (catOpen) {
      const list = allDrills().filter(d => d.cat === catOpen);
      const what = BOOK.has(catOpen) ? 'plays' : 'drills';
      return `<a class="back" href="#drills">${I.back}All categories</a>
        <div class="cat-title" style="${gc(catOpen)}"><span class="cat-code" style="font-size:22px;padding:6px 9px 5px">${esc(catOpen)}</span><h1>${esc(DATA.cats[catOpen] || '')}</h1></div>
        <p class="muted">${list.length} ${what} · tap one to see it drawn up, or + to add it to <b>${esc(cur().name)}</b>.</p>
        <div class="drill-list">${list.map(d => drillCard(d)).join('')}</div>`;
    }
    const filtering = libQuery || libLevel || libCollege || libValue;
    const drillsOnly = allDrills().filter(d => !BOOK.has(d.cat)), college = drillsOnly.filter(d => d.college).length;
    const plays = allDrills().length - drillsOnly.length;
    return `<div class="section-head" style="margin-top:0"><h2>Drill Library</h2><span class="muted num">${drillsOnly.length} drills · ${college} from college programs${plays ? ` · ${plays} plays and sets` : ''}</span></div>
      ${filterBar('lib')}
      <div id="libres">${filtering ? results(false) : groupsGrid()}</div>
      <div style="margin-top:28px"><button class="btn" data-act="newdrill">${I.plus}Add your own drill</button></div>`;
  }
  function groupsGrid() {
    return DATA.groups.map(g => `
      <section class="group" style="--gc:var(--g-${g.id})"><h2>${esc(g.name)}</h2>
      <div class="cat-grid">${g.cats.map(c => {
        const list = allDrills().filter(d => d.cat === c);
        const lv = LEVELS.map(l => list.filter(d => d.level === l).length);
        return `<a class="cat-tile" href="#cat-${c}" style="${gc(c)}"><span class="big">${c}</span><span><b>${esc(DATA.cats[c])}</b><small class="num">${list.length} ${BOOK.has(c) ? 'plays' : 'drills'} · ${lv[0]} foundation · ${lv[2]} advanced</small></span></a>`;
      }).join('')}</div></section>`).join('');
  }

  // Playbook order: offense in the program's order (transition first), then OB, then defenses by number (1, 0, 2, 3, 4, 13, 14, 20s, 30s)
  const NUMS = ['1', '0', '2', '3', '4', '13', '14', '20s', '30s'];
  const pos = (arr, v) => { const i = arr.indexOf(v); return i < 0 ? 99 : i; };
  const bookSort = (a, b) => pos([...BOOK], a.cat) - pos([...BOOK], b.cat) || pos(P.TYPES, a.type) - pos(P.TYPES, b.type) || pos(NUMS, a.num) - pos(NUMS, b.num);
  function viewPlays() {
    const all = allDrills().filter(d => BOOK.has(d.cat)).sort(bookSort), rank = l => LADDER.indexOf(l), team = rank(state.team);
    const pkg = all.filter(ours);
    const grp = (title, list, cat) => list.length ? `<section class="group" style="${gc(cat)}"><h2>${esc(title)}</h2><div class="drill-list">${list.map(d => drillCard(d)).join('')}</div></section>` : '';
    const fold = (key, title, sub, list, opts) => `<details class="fold" data-fold="${key}" ${foldsOpen.has(key) ? 'open' : ''}><summary><span>${esc(title)}</span><span class="count num">${list.length}</span></summary>
      <p class="muted fold-sub">${sub}</p>${list.length ? `<div class="drill-list">${list.map(d => drillCard(d, false, opts)).join('')}</div>` : ''}</details>`;
    const off = pkg.filter(d => d.cat === 'PL');
    const turnedOff = all.filter(d => !d.candidate && d.from && rank(d.from) <= team && !ours(d));
    return `<div class="section-head" style="margin-top:0"><h2>Playbook</h2><button class="chip on" data-act="goteam" aria-label="Our team: ${esc(P.LEVEL_NAMES[state.team])}. Change it in the Program tab">Our team: ${esc(P.LEVEL_NAMES[state.team])}</button></div>
      <p class="muted" style="margin:0">Tap one to see it run, or + to add it to <b>${esc(cur().name)}</b>.</p>
      <div class="row" style="gap:8px;margin-top:12px;flex-wrap:wrap"><button class="btn" data-act="newplay">${I.edit}Draw your own play</button>
        <button class="btn" data-act="playsheet">${I.list}Play sheet for players${sheetIds().length ? ` · ${sheetIds().length} picked` : ''}</button>
        <button class="btn" data-act="moveplays">${I.swap}Move plays</button></div>
      <div class="section-head pkg-head"><h2>Our Package</h2><span class="muted num">${pkg.length} plays &amp; defenses</span></div>
      ${P.TYPES.map(t => grp(P.typeLabels[t], off.filter(d => d.type === t), 'PL')).join('')}
      ${grp('More plays', off.filter(d => !P.TYPES.includes(d.type)), 'PL')}
      ${[...BOOK].filter(c => c !== 'PL').map(c => grp(DATA.cats[c], pkg.filter(d => d.cat === c), c)).join('')}
      ${pkg.length ? '' : '<div class="card empty"><h3>Nothing in Our Package</h3><p>Pick our team in Notes · Program, or turn items on with “We run this”.</p></div>'}
      <div class="folds">
      ${LADDER.slice(team + 1).map(l => {
        const list = all.filter(d => !d.candidate && d.from === l && !ours(d));
        return fold('at-' + l, `Coming at ${P.LEVEL_NAMES[l]}`, list.length ? `What our pieces grow into. ${esc(P.LEVEL_NAMES[l])} runs these on top of everything below.` : `Nothing starts at ${esc(P.LEVEL_NAMES[l])} yet.`, list, { dim: true });
      }).join('')}
      ${fold('options', 'Offense Options', 'Real motion, action and continuity offenses for the staff to choose from. Open one and tap “We run this” to add it to Our Package.', all.filter(d => d.candidate && !ours(d)), { why: true })}
      ${turnedOff.length ? fold('off', 'Turned off', `${esc(teamName(state.team))} would run these, but you switched them off. Open one and tap “We run this” to bring it back.`, turnedOff, { dim: true }) : ''}
      </div>`;
  }

  // ---------- play sheet: pick plays and defenses, print a handout for the players ----------
  const bookAll = () => allDrills().filter(d => BOOK.has(d.cat)).sort(bookSort);
  const sheetIds = () => state.sheet.ids.filter(id => drill(id)); // a deleted custom drill drops off quietly
  const onSheet = id => state.sheet.ids.includes(id);
  const sheetTitle = () => state.sheet.title.trim() || `${teamName(state.team)} Play Sheet`;
  function paintPlaySheet() {
    const ov = $('#playsheet');
    if (!ov) return;
    const all = bookAll(), n = sheetIds().length, y = ov.scrollTop;
    const grp = (title, list, cat) => list.length ? `<section class="group" style="${gc(cat)}"><h2>${esc(title)}</h2><div class="drill-list">${list.map(d => drillCard(d, false, { sheet: true })).join('')}</div></section>` : '';
    const mine = all.filter(ours), off = mine.filter(d => d.cat === 'PL');
    ov.innerHTML = `<div class="overlay-bar"><button class="icon-btn ghost" data-act="closeplaysheet" aria-label="Close">${I.back}</button>
      <div class="ttl">Play sheet</div><button class="btn primary small" data-act="sheetprint" ${n ? '' : 'disabled'}>${inClaude ? 'Save to print' : 'Print'} · ${n}</button></div>
      <div class="overlay-body">
        <p class="muted" style="margin:0 0 12px">Tick the plays and defenses the players need to study, then ${inClaude ? 'Save to print: you get a page to open and print' : 'Print'}. Each one prints with its step-by-step diagrams and coaching points. Your picks are saved.</p>
        <label class="lbl">Title on the sheet<input class="field" data-sheettitle value="${esc(state.sheet.title)}" placeholder="${esc(sheetTitle())}" maxlength="60"></label>
        <div class="row" style="gap:8px;margin-top:10px;flex-wrap:wrap"><button class="btn small" data-act="sheetall">Pick all of Our Package</button><button class="btn small" data-act="sheetclear" ${n ? '' : 'disabled'}>Clear</button></div>
        ${P.TYPES.map(t => grp(P.typeLabels[t], off.filter(d => d.type === t), 'PL')).join('')}
        ${grp('More plays', off.filter(d => !P.TYPES.includes(d.type)), 'PL')}
        ${[...BOOK].filter(c => c !== 'PL').map(c => grp(DATA.cats[c], mine.filter(d => d.cat === c), c)).join('')}
        ${grp('Not in Our Package', all.filter(d => !ours(d)), 'PL')}
      </div>`;
    ov.scrollTop = y;
  }
  function openPlaySheet() {
    $('#playsheet') && $('#playsheet').remove();
    const ov = document.createElement('div');
    ov.className = 'overlay'; ov.id = 'playsheet';
    ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-label', 'Play sheet');
    document.body.appendChild(ov);
    paintPlaySheet();
  }
  const closePlaySheet = () => { $('#playsheet') && $('#playsheet').remove(); if (view === 'plays') render(); };
  // The handout itself: hidden on screen, the only thing on the page when printing (see @media print in app.css).
  function printSheetHtml() {
    const plays = bookAll().filter(d => onSheet(d.id));
    return `<header class="ps-head"><h1>${esc(sheetTitle())}</h1><p>Lake Flyers · ${esc(teamName(state.team))} · Numbers are offense, X is defense. Each picture is one step: players are where the step starts, arrows show where they go.</p>${LEGEND}</header>
      ${plays.map(d => {
        const dg = diagOf(d.id);
        const pics = dg ? Court.stills({ ...dg, id: d.id }) : d.sketch ? [sketchStatic(d.sketch)] : photoOk(d.photo) ? [`<img src="${photoSrc(d.photo)}" alt="">`] : [];
        const caps = dg ? dg.s.map(s => s[0]) : [];
        return `<section class="ps-play"><div class="ps-top"><h2>${esc(d.name)}</h2><span>${esc([DATA.cats[d.cat] && d.cat !== 'PL' ? DATA.cats[d.cat] : '', typeName(d)].filter(Boolean).join(' · '))}</span>
          <p><b>Start:</b> ${esc(d.setup || '')}</p></div>
          <div class="ps-steps${dg && dg.court === 'f' ? ' full' : ''}">${pics.map((svg, i) => `<figure>${svg}<figcaption>${caps[i] || pics.length > 1 ? `<b>${i + 1}</b> ${esc(caps[i])}` : ''}</figcaption></figure>`).join('')}</div>
          ${d.points && d.points.length ? `<ul class="ps-points">${d.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}</section>`;
      }).join('')}`;
  }
  // Inside Claude the print dialog is blocked, so there the sheet is saved as a page to open and print.
  const inClaude = !!(window.claude && window.claude.use);
  async function printPlaySheet() {
    $('#printsheet') && $('#printsheet').remove();
    const el = document.createElement('div');
    el.id = 'printsheet';
    el.innerHTML = printSheetHtml();
    document.body.appendChild(el);
    const dl = inClaude ? await window.claude.use('downloads').catch(() => null) : null;
    if (!dl) { window.print(); return; }
    // the print styles apply on screen too in the saved page, so it opens looking like the printout
    const css = (await fetch('css/app.css').then(r => r.text()).catch(() => '')).replace('@media print {', '@media all {');
    const doc = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(sheetTitle())}</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&family=Kalam:wght@400;700&display=swap">
<style>${css}\n#printsheet { max-width: 7.5in; margin: 0 auto; padding: 16px; }</style></head><body>${el.outerHTML}</body></html>`;
    try {
      await dl.save({ filename: (sheetTitle().replace(/[^A-Za-z0-9 _-]+/g, '').trim() || 'Play Sheet') + '.html', data: doc });
      toast('Saved. Open the file and print it from there.');
    } catch (e) {
      if (!e || e.code !== 'declined') toast('Could not save the sheet here. Print it from the GitHub Pages copy.');
    }
  }

  // ---------- picker overlay ----------
  function openPicker(ctx) {
    pick = ctx;
    libQuery = ''; libLevel = ''; libCollege = false; libValue = '';
    $('#picker') && $('#picker').remove();
    const ov = document.createElement('div');
    ov.className = 'overlay'; ov.id = 'picker';
    ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-label', 'Pick a drill');
    document.body.appendChild(ov);
    paintPicker();
  }
  function paintPicker() {
    const ov = $('#picker');
    if (!ov) return;
    const cats = pick.showAll ? null : pick.cats;
    ov.innerHTML = `<div class="overlay-bar"><button class="icon-btn ghost" data-act="closepicker" aria-label="Close">${I.back}</button>
      <div class="ttl">${pick.mode === 'add' ? 'Add a drill' : 'Pick a drill'}${pick.label ? ' · ' + esc(pick.label) : ''}</div></div>
      <div class="overlay-body">
        ${filterBar('pick')}
        ${pick.cats ? `<div class="filters chips"><button class="chip ${!pick.showAll ? 'on' : ''}" data-act="pickall" data-v="0">${pick.cats.join(' · ')}</button><button class="chip ${pick.showAll ? 'on' : ''}" data-act="pickall" data-v="1">All categories</button></div>` : ''}
        <div id="pickres">${results(true, cats)}</div>
      </div>`;
  }
  const closePicker = () => { pick = null; $('#picker') && $('#picker').remove(); libQuery = ''; };
  function choose(id) {
    const p = cur(), d = drill(id);
    if (pick.mode === 'add') p.items.push({ d: id, min: d.min });
    else p.items[pick.i] = { d: id, min: d.min };
    const msg = `${d.name} ${pick.mode === 'swap' ? 'swapped in' : 'added'}`;
    closePicker();
    if (location.hash.startsWith('#drill-')) closeDetail();
    save();
    toast(msg);
  }
  function quickAdd(id) {
    const p = cur(), d = drill(id);
    const slot = p.items.findIndex(it => !it.d && it.cats.some(c => c === d.cat || c === d.id));
    const block = slot >= 0 && p.items[slot].slot;
    if (slot >= 0) p.items[slot] = { d: id, min: d.min };
    else p.items.push({ d: id, min: d.min });
    const inSearch = view === 'drills' && libQuery && !catOpen;
    save(!inSearch);
    if (inSearch) $('#libres').innerHTML = results(false);
    toast(block ? `${d.name} fills the ${block} block` : `Added to ${p.name}`);
  }

  // ---------- drill detail ----------
  let detailBoard = null;
  function closeDetailEl() {
    if (detailBoard) { detailBoard.destroy(); detailBoard = null; }
    $('#detail') && $('#detail').remove();
  }
  function refreshDetail() {
    const ov = $('#detail');
    if (ov) openDrill(ov.dataset.id);
  }
  const LEGEND = (() => {
    const s = (path, color, dash) => `<svg viewBox="0 0 26 10" aria-hidden="true"><path d="${path}" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ${dash ? `stroke-dasharray="${dash}"` : ''}/></svg>`;
    return `<div class="legend" aria-label="Diagram key">
      <span>${s('M2 5H21M17 1.5L21.5 5 17 8.5', 'var(--off)')}Cut</span>
      <span>${s('M2 5l2-3 2 6 2-6 2 6 2-6 2 6 2-3h5M17 1.5L21.5 5 17 8.5', 'var(--off)')}Dribble</span>
      <span>${s('M2 5H21', 'var(--pass)', '3 2.4')}Pass</span>
      <span>${s('M2 5H21M21 1v8', 'var(--off)')}Screen</span>
      <span>${s('M2 8Q12 -2 22 6', 'var(--ball)', '1.4 1.6')}Shot</span>
      <span>${s('M2 5H21', '#9aa3b3', '.8 1.8')}Rotate</span>
      <span><svg viewBox="0 0 26 10"><circle cx="5" cy="5" r="4" fill="#fff" stroke="var(--off)"/><path d="M15 1.5l7 7M22 1.5l-7 7" stroke="var(--def)" stroke-width="1.6"/></svg>Offense / defense</span>
    </div>`;
  })();
  function boardBlock(id) {
    const d = drill(id), dg = diagOf(id);
    if (!dg && d.sketch) return `<div class="board-frame">${sketchStatic(d.sketch)}</div>`;
    if (!dg) return `<div class="board-frame">${Court.blank(false)}</div>`;
    return `<div class="board-scope" data-id="${esc(id)}">
      <div class="board-frame"><div class="board-mount"></div></div>
      <div class="player-bar">
        <button class="play" data-act="bplay" aria-label="Play">${I.play}</button>
        <div class="steps-dots" role="tablist" aria-label="Steps">${dg.s.map((s, i) => `<button data-act="bstep" data-i="${i}" aria-label="Step ${i + 1}">${i + 1}</button>`).join('')}</div>
        <button class="speed" data-act="bspeed" aria-label="Playback speed">${speed === 1 ? '1×' : '½×'}</button>
      </div>
      <div class="caption" aria-live="polite"><b>1</b><span></span></div>
      ${LEGEND}
    </div>`;
  }
  function mountBoard(scope, opts = {}) {
    const id = scope.dataset.id, dg = diagOf(id), seen = new Set();
    const ctl = Court.mount($('.board-mount', scope), { ...dg, id }, {
      loop: opts.loop, speed: () => speed, label: (drill(id) || {}).name + ' diagram',
      onStep(i, playing) {
        seen.add(i);
        const cap = $('.caption', scope);
        $('b', cap).textContent = i + 1;
        $('span', cap).textContent = dg.s[i][0];
        $$('.steps-dots button', scope).forEach((b, k) => { b.classList.toggle('on', k === i); b.classList.toggle('seen', seen.has(k) && k !== i); });
        const pb = $('.play', scope);
        pb.innerHTML = playing ? I.pause : I.play;
        pb.setAttribute('aria-label', playing ? 'Pause' : 'Play');
      },
    });
    scope._ctl = ctl;
    $('.board-mount', scope).addEventListener('click', () => (ctl.playing ? ctl.pause() : ctl.play()));
    if (opts.autoplay) setTimeout(() => ctl.play(), 450);
    return ctl;
  }

  // "We run this" + "Runs at" + confirm tag, for a program item (play, defense) or a call
  const progRow = it => { const on = ours(it); return `<div class="prog" id="prog">${runsAt(P.fromOf(it))}
    <button class="toggle${on ? ' on' : ''}" data-act="runs" data-k="${esc(keyOf(it))}" aria-pressed="${on}">${on ? I.check : I.plus}We run this</button>
    <span class="muted prog-note">${on ? 'In Our Package' : 'Not in Our Package'}</span>${confirmTag(it, true)}</div>`; };
  const itemByKey = k => k.startsWith('call:') ? P.calls.find(c => 'call:' + c.code === k) : drill(k);
  function repaintOpen() { // after a toggle: update the open detail or call sheet in place (no re-animation)
    const pr = $('#detail #prog');
    if (pr) pr.outerHTML = progRow(drill($('#detail').dataset.id));
    const sh = $('.sheet[data-code]');
    if (sh) sh.innerHTML = callSheet(sh.dataset.code);
  }
  function openDrill(id) {
    const d = drill(id);
    if (!d) { closeDetailEl(); return; }
    closeDetailEl();
    const ov = document.createElement('div');
    ov.className = 'overlay'; ov.id = 'detail'; ov.dataset.id = id;
    ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-label', d.name);
    const primary = pick
      ? `<button class="btn primary" data-act="pick" data-id="${esc(id)}">${I.check}Use this drill</button>`
      : `<button class="btn primary" data-act="quickadd" data-id="${esc(id)}">${I.plus}<span>Add to plan</span></button>`;
    const block = (title, body, cls = '') => body ? `<section class="block ${cls}"><h3>${title}</h3>${body}</section>` : '';
    ov.innerHTML = `<div class="overlay-bar"><button class="icon-btn ghost" data-act="closedetail" aria-label="Back">${I.back}</button>
        <div class="ttl">${esc(d.id)} · ${esc(DATA.cats[d.cat] || '')}</div>${primary}</div>
      <div class="overlay-body"><div class="detail" style="${gc(d.cat)}">
        <div class="left stack">
          <div class="detail-head">
            <div class="row" style="gap:8px"><span class="cat-code">${esc(d.id)}</span><span class="eyebrow">${esc(DATA.cats[d.cat] || '')}</span></div>
            <h1>${esc(d.name)}</h1>
            <div class="meta">${levelBars(d.level)}<span class="tag">${esc(d.level)}</span><span class="tag num">${d.min} min</span>
              ${d.num ? `<span class="numtag">${esc(d.num)}</span>` : ''}${d.type ? `<span class="tag type">${esc(typeName(d))}</span>` : ''}
              ${d.college ? `<span class="college">${I.star}${esc(d.college)}</span>` : ''}${d.mine || d.edited ? `<span class="college" style="background:var(--accent-soft);color:var(--accent)">${d.mine ? 'Yours' : 'Edited by you'}</span>` : ''}</div>
            ${isProg(d) ? progRow(d) : ''}
          </div>
          ${boardBlock(id)}
          ${photoOk(d.photo) ? `<section class="block"><h3>Your sheet</h3><img class="sheet-photo" src="${photoSrc(d.photo)}" alt="Photo of the play sheet for ${esc(d.name)}"></section>` : ''}
        </div>
        <div class="right stack">
          ${d.candidate ? block('Offense option', `<p><b>Why it fits Lake:</b> ${esc(d.why || '')}</p><p><b>Best for:</b> ${esc(d.best || '')}</p>`, 'option') : ''}
          ${block(`${I.people.replace('<svg', '<svg width="18" height="18"')}Setup`, (d.players ? `<p style="font-weight:600;margin-bottom:6px">${esc(d.players)}</p>` : '') + (d.setup ? `<p>${esc(d.setup)}</p>` : ''))}
          ${block('How it runs', d.runs ? `<p>${esc(d.runs)}</p>` : '')}
          ${block('How we do it at Lake', d.lake ? `<p>${esc(d.lake)}</p>` : '', 'lake')}
          ${block('Coaching points', d.points && d.points.length ? `<ul class="points">${d.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : '')}
          ${d.cat === 'PL' ? `<p class="remind"><b>Boards</b> ${esc(P.oreb.t)}</p>` : ''}
          ${d.type === 'motion' ? block('Beat the switch', `<p class="muted" style="margin-bottom:8px">Our own D switches everything, so we see it every day.</p><ul class="points">${P.switchReads.map(r => `<li>${esc(r)}</li>`).join('')}</ul>${chipsFor([P.switchDrill])}`, 'switch') : ''}
          ${(d.drills || []).some(x => drill(x)) ? block('Breakdown drills', chipsFor(d.drills)) : ''}
          ${block('MS adaptation · progression', d.ms ? `<p>${esc(d.ms)}</p>` : '', 'adapt')}
          <section class="block"><h3>My notes</h3><textarea class="field" id="note-${esc(id)}" data-note="${esc(id)}" placeholder="What worked, who needs reps, how you changed it…">${esc(state.notes[id] || '')}</textarea></section>
          ${d.source || d.url ? `<p class="muted" style="font-size:14px;margin:0">Source: ${esc(d.source || '')}${d.url ? ` · <a href="${esc(d.url)}" target="_blank" rel="noopener">Original drill</a>` : ''}</p>` : ''}
          <div class="row"><button class="btn" data-act="editdrill" data-id="${esc(id)}">${I.edit}Edit</button>${d.mine ? `<button class="btn" data-act="deldrill" data-id="${esc(id)}">${I.trash}Delete</button>`
            : d.edited ? `<button class="btn" data-act="resetdrill" data-id="${esc(id)}">${I.undo}<span>Undo my edits</span></button>` : ''}</div>
        </div>
      </div></div>`;
    document.body.appendChild(ov);
    const scope = $('.board-scope', ov);
    if (scope) detailBoard = mountBoard(scope, { autoplay: true });
  }

  // ---------- run practice ----------
  let run = read(RKEY);
  const saveRun = () => write(RKEY, run);
  const runPlan = () => run && state.plans[run.planId];
  const runItems = () => (runPlan() ? runPlan().items.filter(it => it.d && drill(it.d)) : []);
  const elapsed = () => run.elapsed + (run.resumedAt ? (Date.now() - run.resumedAt) / 1000 : 0);
  const fmt = s => { const a = Math.abs(Math.round(s)); return `${s < -0.5 ? '+' : ''}${Math.floor(a / 60)}:${pad(a % 60)}`; };
  let wakeLock = null, audio = null;

  function beep(n, freq) {
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      for (let k = 0; k < n; k++) {
        const o = audio.createOscillator(), g = audio.createGain(), t = audio.currentTime + k * 0.32;
        o.frequency.value = freq; o.type = 'square';
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.25, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.24);
        o.connect(g).connect(audio.destination); o.start(t); o.stop(t + 0.26);
      }
    } catch (e) { /* no audio on this device */ }
    if (navigator.vibrate) try { navigator.vibrate(n > 1 ? [250, 100, 250, 100, 400] : 200); } catch (e) { /* ignore */ }
  }
  async function keepAwake() {
    try { if ('wakeLock' in navigator && document.visibilityState === 'visible') wakeLock = await navigator.wakeLock.request('screen'); } catch (e) { wakeLock = null; }
  }
  document.addEventListener('visibilitychange', () => { if (run && !run.done && document.visibilityState === 'visible') keepAwake(); });

  function startRun() {
    const p = cur();
    if (!p.items.some(it => it.d)) { toast('Add a drill before you start'); return; }
    run = { planId: p.id, i: 0, elapsed: 0, resumedAt: Date.now(), extra: 0, t0: Date.now(), warned: false, alarmed: false };
    saveRun(); beep(1, 520); keepAwake(); render(); // the beep also unlocks audio while we have a tap
  }
  function goItem(i) {
    const items = runItems();
    if (i >= items.length) { run.done = Date.now(); run.resumedAt = null; saveRun(); render(); beep(2, 784); return; }
    run.i = Math.max(0, i); run.elapsed = 0; run.extra = 0; run.warned = false; run.alarmed = false;
    run.resumedAt = run.paused ? null : Date.now();
    saveRun(); render(); window.scrollTo(0, 0);
  }
  function togglePause() {
    if (run.resumedAt) { run.elapsed = elapsed(); run.resumedAt = null; run.paused = true; }
    else { run.resumedAt = Date.now(); run.paused = false; }
    saveRun(); tickRun(true);
  }

  const our5Strip = () => state.our5.length ? `<section class="our5-strip" aria-label="Our 5"><span class="eyebrow">Our 5</span><ol>${state.our5.map(t => `<li>${esc(t)}</li>`).join('')}</ol></section>` : '';
  function viewRun() {
    const p = run && runPlan();
    if (!p || !runItems().length) {
      run = null; saveRun();
      const plan = cur(), times = schedule(plan), items = plan.items.filter(it => it.d);
      return `${our5Strip()}<section class="card" style="padding:22px">
          <div class="eyebrow">Ready to run</div>
          <h1 style="font-size:40px;text-transform:uppercase;margin:6px 0 8px">${esc(plan.name)}</h1>
          <p class="muted" style="margin:0 0 6px">${items.length} drills · ${times[times.length - 1] - toMin(plan.start)} minutes${plan.focus ? ' · ' + esc(plan.focus) : ''}</p>
          ${plan.message ? `<p style="font-family:var(--marker);font-size:22px;margin:10px 0 0;color:var(--off)">“${esc(plan.message)}”</p>` : ''}
          <ul style="margin:18px 0 0;padding:0;list-style:none;display:grid;gap:6px">${plan.items.map((it, i) => it.d && drill(it.d) ? `<li class="row" style="gap:12px;flex-wrap:nowrap"><span class="num" style="font:700 16px var(--display);color:var(--muted);width:44px">${clock(times[i])}</span><span class="cat-code" style="${gc(drill(it.d).cat)}">${drill(it.d).cat}</span><span style="flex:1;min-width:0">${esc(drill(it.d).name)}</span><span class="num muted">${it.min}′</span></li>` : '').join('')}</ul>
          <button class="btn primary big block" style="margin-top:22px" data-act="startrun" ${items.length ? '' : 'disabled'}>${I.play}Start practice</button>
          <p class="muted" style="font-size:14px;margin:12px 0 0">A beep at 1 minute left and a triple beep at time. The screen stays awake while the timer runs.</p>
        </section>`;
    }
    run.i = Math.min(run.i, runItems().length - 1);
    if (run.done) {
      const mins = Math.round((run.done - run.t0) / 60000);
      return `<section class="card empty" style="padding:40px 20px"><div class="eyebrow">Practice complete</div>
        <h3 style="font-size:44px;margin:8px 0">${esc(p.name)}</h3><p>${runItems().length} drills in ${mins} minutes (planned ${runItems().reduce((a, it) => a + it.min, 0)}).</p>
        ${p.message ? `<p style="font-family:var(--marker);font-size:22px;color:var(--off)">“${esc(p.message)}”</p>` : ''}
        <button class="btn primary big" data-act="endrun">${I.check}Done</button></section>`;
    }
    const items = runItems(), it = items[run.i], d = drill(it.d), next = items[run.i + 1];
    return `${our5Strip()}<div class="run live">
      <div class="stack">
        <section class="card clock-card o1" style="${gc(d.cat)}">
          <div class="now"><span>Drill ${run.i + 1} of ${items.length}</span><span id="rpace" class="pace">On pace</span></div>
          <div id="rtimer" class="timer">0:00</div>
          <div class="bar"><i id="rbar" style="width:0"></i></div>
          <div class="run-name"><div class="row" style="justify-content:center;gap:8px"><span class="cat-code">${esc(d.cat)}</span><span class="eyebrow">${esc(DATA.cats[d.cat] || '')}</span></div>
            <h2 style="margin-top:8px">${esc(d.name)}</h2></div>
          <div class="run-controls">
            <button class="btn" data-act="rprev" ${run.i === 0 ? 'disabled' : ''}>${I.prev}Back</button>
            <button class="btn dark" data-act="rpause" id="rpause">${run.resumedAt ? I.pause + 'Pause' : I.play + 'Resume'}</button>
            <button class="btn" data-act="rplus">${I.plusOne}+1 min</button>
            <button class="btn primary" data-act="rnext">${I.next}${next ? 'Next' : 'Finish'}</button>
          </div>
          <p class="muted num" id="rends" style="text-align:center;margin:14px 0 0;font-size:14px"></p>
        </section>
        ${d.points || d.lake ? `<section class="block o3">${d.lake ? `<p class="lake-mini"><b>At Lake</b> ${esc(d.lake)}</p>` : ''}${d.points ? `<h3>Coaching points</h3><ul class="points">${d.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</section>` : ''}
        ${next ? `<section class="card up-next o4"><span class="eyebrow">Up next</span><span class="nm">${esc(drill(next.d).name)}</span><span class="num muted">${next.min} min</span></section>` : ''}
      </div>
      <div class="stack">
        <div class="o2">${boardBlock(it.d)}</div>
        ${d.setup ? `<section class="block o5"><h3>Setup</h3><p>${esc(d.setup)}</p></section>` : ''}
        <section class="block o6"><h3>Today's practice</h3><div class="run-list">${items.map((x, k) => `<button data-act="rjump" data-i="${k}" class="${k === run.i ? 'cur' : k < run.i ? 'past' : ''}"><span class="t num">${x.min}′</span><span>${esc(drill(x.d).name)}</span></button>`).join('')}</div>
          <button class="btn small" style="margin-top:10px" data-act="endrun" id="endbtn">End practice</button></section>
      </div>
    </div>`;
  }

  function tickRun() {
    const pill = $('#runpill');
    const active = run && !run.done && runPlan() && runItems()[run.i];
    if (!active) { if (pill) pill.hidden = true; return; }
    const items = runItems(), it = items[run.i];
    const total = it.min * 60 + run.extra, el = elapsed(), rem = total - el;
    if (rem <= 60 && rem > 0 && !run.warned && total > 90) { run.warned = true; saveRun(); beep(1, 660); }
    if (rem <= 0 && !run.alarmed) { run.alarmed = true; saveRun(); beep(3, 988); }
    pill.hidden = view === 'run' && !$('.overlay');
    pill.classList.toggle('low', !!$('.overlay'));
    pill.textContent = `${run.resumedAt ? '' : 'Paused '}${fmt(rem)} · ${drill(it.d).name}`;
    pill.classList.toggle('over', rem < 0);
    const t = $('#rtimer');
    if (!t) return;
    t.textContent = fmt(rem);
    t.className = 'timer num' + (rem < 0 ? ' over' : rem <= 60 ? ' low' : '');
    $('#rbar').style.width = Math.min(100, (el / total) * 100) + '%';
    const planned = items.slice(0, run.i + 1).reduce((a, x) => a + x.min * 60, 0);
    const drift = ((Date.now() - run.t0) / 1000 + Math.max(rem, 0)) - planned;
    const pace = $('#rpace'), m = Math.round(Math.abs(drift) / 60);
    pace.textContent = Math.abs(drift) < 60 ? 'On pace' : `${m} min ${drift > 0 ? 'behind' : 'ahead'}`;
    pace.className = 'pace ' + (Math.abs(drift) < 60 ? 'ok' : drift > 0 && m >= 4 ? 'bad' : drift > 0 ? 'warn' : 'ok');
    const restMin = items.slice(run.i + 1).reduce((a, x) => a + x.min, 0);
    const now = new Date(), nowMin = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
    $('#rends').textContent = `Now ${clock(nowMin, true)} · Practice ends about ${clock(nowMin + Math.max(rem, 0) / 60 + restMin, true)}`;
    const pb = $('#rpause');
    if (pb) pb.innerHTML = run.resumedAt ? I.pause + 'Pause' : I.play + 'Resume';
  }
  setInterval(tickRun, 250);

  // ---------- sketch board ----------
  const PENS = [['#1f5bd8', 'Blue: offense'], ['#d2342a', 'Red: defense'], ['#172033', 'Black'], ['#0e8a5f', 'Green: coach'], ['#f07a1a', 'Orange: ball']];
  let pen = PENS[0][0], clearArmed = false;
  const strokeD = pts => 'M' + pts.map(p => p.join(' ')).join('L');
  const sketchData = () => {
    state.sketch = state.sketch || { full: false, h: [], f: [] };
    return { full: state.sketch.full, strokes: state.sketch.full ? state.sketch.f : state.sketch.h };
  };
  function sketchStatic(sk, mini) {
    const s = Court.blank(sk.full).replace('class="wb"', `class="wb${mini ? ' mini' : ''}"`);
    return s.replace('</svg>', sk.strokes.map(st => `<path class="ink" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width=".55" stroke="${esc(st.c)}" d="${strokeD(st.d)}"/>`).join('') + '</svg>');
  }
  function mountSketch(el, sk, onChange) {
    el.innerHTML = Court.blank(sk.full).replace('</svg>', '<g class="inks"></g></svg>');
    const svg = $('svg', el), g = $('.inks', svg);
    svg.setAttribute('aria-label', 'Whiteboard. Draw with your finger or mouse.');
    const paint = () => { g.innerHTML = sk.strokes.map(s => `<path class="ink" stroke="${esc(s.c)}" d="${strokeD(s.d)}"/>`).join(''); };
    paint();
    let curS = null;
    const at = e => {
      const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(svg.getScreenCTM().inverse());
      return [Math.round(p.x * 10) / 10, Math.round(p.y * 10) / 10];
    };
    svg.addEventListener('pointerdown', e => {
      if (!e.isPrimary) return;
      e.preventDefault(); svg.setPointerCapture(e.pointerId);
      curS = { c: pen, d: [at(e)] }; sk.strokes.push(curS); paint();
    });
    svg.addEventListener('pointermove', e => {
      if (!curS || !e.isPrimary) return;
      const p = at(e), l = curS.d[curS.d.length - 1];
      if (Math.hypot(p[0] - l[0], p[1] - l[1]) < 0.35) return;
      curS.d.push(p); g.lastChild.setAttribute('d', strokeD(curS.d));
    });
    const end = e => {
      if (!curS || !e.isPrimary) return;
      if (curS.d.length === 1) { curS.d.push([curS.d[0][0] + 0.05, curS.d[0][1]]); paint(); }
      curS = null; onChange();
    };
    svg.addEventListener('pointerup', end);
    svg.addEventListener('pointercancel', end);
    el._redraw = paint;
  }
  function penTools(prefix) {
    return PENS.map(([c, l]) => `<button class="pen ${pen === c ? 'on' : ''}" style="--c:${c}" data-act="pen" data-v="${c}" aria-label="${l}" title="${l}"></button>`).join('') +
      `<span style="flex:1"></span><button class="btn small" data-act="${prefix}undo">Undo</button><button class="btn small" data-act="${prefix}clear">${clearArmed ? 'Tap again to clear' : 'Clear'}</button>`;
  }
  function viewBoard() {
    const sk = sketchData();
    return `<div class="section-head" style="margin-top:0"><h2>Whiteboard</h2>
        <div class="chips"><button class="chip ${!sk.full ? 'on' : ''}" data-act="skcourt" data-v="0">Half court</button><button class="chip ${sk.full ? 'on' : ''}" data-act="skcourt" data-v="1">Full court</button></div></div>
      <div class="sketch-tools">${penTools('sk')}</div>
      <div class="board-frame sketch-wrap" id="sketch"></div>
      <p class="muted" style="font-size:14px">Draw up a set during a timeout, a fix in the middle of a drill, or next week's idea. It saves as you draw.</p>`;
  }

  // ---------- your own drills and plays, and edits to ours ----------
  // The play editor writes the same diagram format as the built-in plays (see js/diagrams-1.js), so they animate the same way.
  let draft = null, tool = 'c';
  const TOOLS = [['c', 'Cut'], ['d', 'Dribble'], ['p', 'Pass'], ['s', 'Screen'], ['sh', 'Shot']];
  const newId = () => 'MY-' + pad(Object.keys(state.custom).length + 1) + uid().slice(0, 2).toUpperCase();
  const startDg = () => ({ p: { '1*': [0, 28], 2: [17, 18], 3: [-17, 18], 4: [-7.5, 8], 5: [7.5, 8] }, s: [['', []]] });
  const pkey = (p, id) => Object.keys(p).find(k => k.replace(/\*/g, '') === id);
  const tryBuild = dg => { try { Court.build({ ...dg, id: 'edit' }); return null; } catch (e) { return e; } };
  function openDrillForm(id, opts = {}) {
    const d = id ? drill(id) : null, base = d && !d.mine ? BY_ID[id] : null; // base: a built-in item, edited on top
    const play = d ? BOOK.has(d.cat) : !!opts.play, noun = play ? 'play' : 'drill';
    const dg0 = id ? diagOf(id) : null;
    draft = { i: dg0 ? 1 : 0, dirty: false, touched: false, dg: JSON.parse(JSON.stringify(dg0 || startDg())), photo: d && photoOk(d.photo) ? d.photo : null, ctl: null };
    if (!draft.dg.s.length) draft.dg.s.push(['', []]);
    const cats = Object.entries(DATA.cats).filter(([c]) => !play || BOOK.has(c));
    const ov = document.createElement('div');
    ov.className = 'overlay'; ov.id = 'drillform';
    ov.innerHTML = `<div class="overlay-bar"><button class="icon-btn ghost" data-act="closeform" aria-label="Close">${I.back}</button>
      <div class="ttl">${base ? `Edit ${noun}` : d ? `Edit your ${noun}` : play ? 'Draw your own play' : 'Add your own drill'}</div><button class="btn primary" form="dform" type="submit">${I.check}Save</button></div>
      <div class="overlay-body"><form id="dform" class="detail" data-id="${esc(id || '')}">
        <div class="stack">
          <label class="lbl">Name<input class="field" name="name" id="f-name" required maxlength="80" value="${esc(d ? d.name : '')}" placeholder="${play ? 'e.g. Bulldog' : 'e.g. Shell Drill with Skip'}"></label>
          <div class="plan-meta" style="grid-template-columns:repeat(${base ? 2 : 3},minmax(0,1fr))">
            ${base ? '' : `<label class="lbl">Category<select class="field" name="cat" id="f-cat">${cats.map(([c, n]) => `<option value="${c}" ${(d ? d.cat === c : play && c === 'PL') ? 'selected' : ''}>${c} · ${esc(n)}</option>`).join('')}</select></label>`}
            <label class="lbl">Minutes<input class="field" name="min" id="f-min" type="number" min="1" max="60" value="${d ? d.min : play ? 8 : 6}"></label>
            <label class="lbl">Level<select class="field" name="level" id="f-level">${LEVELS.map(l => `<option ${d && d.level === l ? 'selected' : ''}>${l}</option>`).join('')}</select></label>
          </div>
          ${play && !base ? `<label class="lbl">Kind of play (offense only)<select class="field" name="type"><option value="">Other</option>${P.TYPES.map(t => `<option value="${esc(t)}" ${d && d.type === t ? 'selected' : ''}>${esc(P.typeLabels[t])}</option>`).join('')}</select></label>` : ''}
          <label class="lbl">Players${play ? '' : ' &amp; equipment'}<input class="field" name="players" id="f-players" value="${esc(d ? d.players : play ? '5 players, half court' : '')}" placeholder="Groups of 3, 1 ball"></label>
          <label class="lbl">Setup${play ? ' · starting spots' : ''}<textarea class="field" name="setup" id="f-setup">${esc(d ? d.setup : '')}</textarea></label>
          <label class="lbl">How it runs · notes<textarea class="field" name="runs" id="f-runs">${esc(d ? d.runs : '')}</textarea></label>
          <label class="lbl">Coaching points (one per line)<textarea class="field" name="points" id="f-points">${esc(d && d.points ? d.points.join('\n') : '')}</textarea></label>
          <label class="lbl">${play ? 'Teaching it' : 'Make it harder / easier'}<textarea class="field" name="ms" id="f-ms">${esc(d ? d.ms : '')}</textarea></label>
        </div>
        <div class="stack"><div id="fdiag"></div>
          ${d && d.sketch && !d.dg ? '<p class="muted" style="margin:0">Your old sketch stays until you build a diagram here.</p>' : ''}
          ${base ? '' : '<div class="stack" id="fphotobox" style="gap:8px"></div><input type="file" id="fphotoin" accept="image/*" hidden data-upload>'}</div>
      </form></div>`;
    document.body.appendChild(ov);
    paintDiag(); paintPhoto();
    $('#dform').addEventListener('submit', e => {
      e.preventDefault();
      const f = new FormData(e.target), oldId = e.target.dataset.id, t = k => String(f.get(k) || '').trim();
      const fields = { name: t('name'), min: Math.max(1, Math.min(60, +f.get('min') || 5)), level: f.get('level'), players: t('players'), setup: t('setup'),
        runs: t('runs'), ms: t('ms'), points: String(f.get('points') || '').split('\n').map(x => x.trim()).filter(Boolean) };
      let key = id;
      if (base) { // keep only what differs from the original
        const ch = {};
        for (const [k, v] of Object.entries(fields)) if (JSON.stringify(v) !== JSON.stringify(base[k] ?? (k === 'points' ? [] : ''))) ch[k] = v;
        if (JSON.stringify(draft.dg) !== JSON.stringify(DIAGRAMS[id])) ch.dg = draft.dg;
        if (Object.keys(ch).length) state.edits[id] = ch; else delete state.edits[id];
      } else {
        key = oldId || newId();
        const cat = f.get('cat'), dg = draft.dg;
        dg.s = dg.s.filter(([c, acts]) => c.trim() || acts.some(a => a !== '|'));
        if (!dg.s.length) dg.s.push(['', []]);
        const keepDg = draft.touched || (d && d.dg);
        state.custom[key] = { id: key, mine: true, cat, ...fields, type: (cat === 'PL' && f.get('type')) || undefined, dg: keepDg ? dg : undefined,
          sketch: !keepDg && d && d.sketch ? d.sketch : undefined, photo: draft.photo || undefined, source: BOOK.has(cat) ? 'Your play' : 'Your drill' };
      }
      thumbs.delete(key);
      if (draft.ctl) draft.ctl.destroy();
      ov.remove(); save(); refreshDetail();
      toast(base ? (state.edits[id] ? 'Saved your changes' : 'No changes from the original') : oldId ? 'Saved' : BOOK.has(f.get('cat')) ? 'Play added to the Playbook' : 'Drill added to the library');
    });
  }
  // Start: drag players to their spots, tap one to give him the ball. Steps: pick a move and drag from a player.
  function paintDiag() {
    const box = $('#fdiag');
    if (!box) return;
    const dg = draft.dg, n = dg.s.length, i = draft.i, hasX = Object.keys(dg.p).some(k => /^x/.test(k));
    box.innerHTML = `<div class="row" style="justify-content:space-between"><span class="eyebrow">Diagram</span>
        <div class="chips"><button type="button" class="chip ${dg.court !== 'f' ? 'on' : ''}" data-act="fcourt" data-v="0">Half</button><button type="button" class="chip ${dg.court === 'f' ? 'on' : ''}" data-act="fcourt" data-v="1">Full</button></div></div>
      <div class="steps-dots" style="flex:none;margin:8px 0 10px"><button type="button" class="wide ${i ? '' : 'on'}" data-act="fstep" data-i="0" aria-pressed="${!i}">Start</button>
        ${dg.s.map((_, k) => `<button type="button" class="${k + 1 === i ? 'on' : ''}" data-act="fstep" data-i="${k + 1}" aria-label="Step ${k + 1}" aria-pressed="${k + 1 === i}">${k + 1}</button>`).join('')}
        <button type="button" data-act="faddstep" aria-label="Add a step">+</button></div>
      ${!i ? `<p class="muted ed-help">Drag the players to where they start. Tap a player to give him the ball.</p>
        <div class="row ed-tools"><button type="button" class="btn small" data-act="fdef">${hasX ? 'Take off the defense' : 'Add defense'}</button></div>`
      : `<p class="muted ed-help">Pick a move, then drag from a player to where he goes. Pass: drag from the ball to a teammate. Different players move together; <b>Then</b> makes the next move wait.</p>
        <div class="row ed-tools">${TOOLS.map(([t, l]) => `<button type="button" class="chip ${tool === t ? 'on' : ''}" data-act="ftool" data-v="${t}" aria-pressed="${tool === t}">${l}</button>`).join('')}</div>
        <div class="row ed-tools"><button type="button" class="btn small" data-act="fthen">Then</button><button type="button" class="btn small" data-act="fundo">${I.undo}Undo</button>
          <button type="button" class="btn small" data-act="fplay">${I.play}Play it</button>
          ${n > 1 ? `<button type="button" class="btn small" data-act="fdelstep">${I.trash}<span>Delete step ${i}</span></button>` : ''}</div>`}
      <div class="board-frame sketch-wrap" id="fboard"></div>
      ${i ? `<label class="lbl" style="margin-top:12px">Step ${i}: what happens<textarea class="field" data-capt placeholder="1 passes to 2 and cuts to the rim…">${esc(dg.s[i - 1][0])}</textarea></label>` : ''}
      ${LEGEND}`;
    drawBoard();
  }
  function drawBoard() {
    const el = $('#fboard');
    if (!el) return;
    if (draft.ctl) { draft.ctl.destroy(); draft.ctl = null; }
    const i = draft.i, dg = { ...draft.dg, id: 'edit', s: i ? draft.dg.s : [['', []]] }, si = i ? i - 1 : 0;
    const model = Court.build(dg), st = model.steps[si], H = model.full ? 94 : 47;
    el.innerHTML = Court.stills(dg)[si];
    const svg = $('svg', el);
    // a player can be grabbed where the step drew him or where his last move left him
    const spots = Object.entries(st.end.pos).concat(Object.entries(st.start.pos));
    const nearest = (P, not) => {
      let best = null, bd = 3.4 * model.k;
      for (const [who, q] of spots) { const dd = Math.hypot(q[0] - P[0], q[1] - P[1]); if (who !== not && dd < bd) { bd = dd; best = who; } }
      return best;
    };
    const at = e => { const q = new DOMPoint(e.clientX, e.clientY).matrixTransform(svg.getScreenCTM().inverse()); return [q.x, q.y]; };
    let g = null;
    svg.addEventListener('pointerdown', e => {
      if (!e.isPrimary) return;
      const P = at(e), who = nearest(P);
      if (!who) return;
      e.preventDefault(); svg.setPointerCapture(e.pointerId);
      if (i && tool === 'sh') { addAct(['sh', who]); return; }
      g = { who, pts: [P], moved: false, el: i ? null : svg.querySelector(`.pl[data-id="${who}"]`) };
      if (i) { g.line = document.createElementNS('http://www.w3.org/2000/svg', 'path'); g.line.setAttribute('class', 'ed-ink' + (tool === 'p' ? ' pass' : '')); svg.appendChild(g.line); }
    });
    svg.addEventListener('pointermove', e => {
      if (!g || !e.isPrimary) return;
      const P = at(e), L = g.pts[g.pts.length - 1];
      if (Math.hypot(P[0] - L[0], P[1] - L[1]) < 0.3) return;
      g.pts.push(P); g.moved = true;
      if (g.el) g.el.setAttribute('transform', `translate(${P[0]} ${P[1]})`);
      else g.line.setAttribute('d', 'M' + (tool === 'p' ? [g.pts[0], P] : g.pts).map(p => p.join(' ')).join('L'));
    });
    svg.addEventListener('pointerup', e => {
      if (!g || !e.isPrimary) return;
      const { who, pts, moved } = g, P = pts[pts.length - 1];
      g = null;
      if (!i) { if (moved && Math.hypot(P[0] - pts[0][0], P[1] - pts[0][1]) > 0.5) movePlayer(who, P, H); else giveBall(who); return; }
      if (tool === 'p') { const to = nearest(P, who); if (to) addAct(['p', who, to]); else drawBoard(); return; }
      const path = Court.simplify(pts, H);
      if (path) addAct([tool, who, ...path.slice(1)]); else drawBoard();
    });
    svg.addEventListener('pointercancel', () => { g = null; drawBoard(); });
  }
  function movePlayer(who, P, H) {
    const r = v => Math.round(v * 2) / 2;
    draft.dg.p[pkey(draft.dg.p, who)] = [r(Math.max(-25, Math.min(25, P[0]))), r(Math.max(-3, Math.min(H + 3, P[1])))];
    draft.dirty = draft.touched = true; drawBoard();
  }
  function giveBall(who) {
    const p = draft.dg.p, holders = Object.keys(p).filter(k => k.includes('*'));
    if (holders.reduce((n, k) => n + k.split('*').length - 1, 0) > 1) { toast('This one has more than one ball. Move them with passes.'); return; }
    const wk = pkey(p, who), hk = holders[0];
    if (wk === hk) return;
    const before = draft.dg.p;
    draft.dg.p = Object.fromEntries(Object.entries(p).map(([k, v]) => [k === hk ? k.replace('*', '') : k === wk ? k + '*' : k, v]));
    if (tryBuild(draft.dg)) { draft.dg.p = before; toast('Your steps pass the ball from where it is now. Undo those moves first.'); return; }
    draft.dirty = draft.touched = true; drawBoard();
  }
  // Same player twice, or a player using a ball he is catching in this beat: that move waits for the beat to finish.
  function addAct(act) {
    const step = draft.dg.s[draft.i - 1], acts = step[1], who = act[1];
    const beat = acts.slice(acts.lastIndexOf('|') + 1);
    const busy = beat.some(a => a[1] === who || (a[0] === 'p' && a[2] === who && ['p', 'd', 'sh'].includes(act[0])));
    const withActs = list => ({ ...draft.dg, s: draft.dg.s.map((x, k) => (k === draft.i - 1 ? [x[0], list, ...x.slice(2)] : x)) });
    let list = beat.length && busy ? [...acts, '|', act] : [...acts, act], err = tryBuild(withActs(list));
    if (err && beat.length && !busy && !tryBuild(withActs([...acts, '|', act]))) { list = [...acts, '|', act]; err = null; }
    if (err) { toast(/has no ball/.test(err.message) ? `${who.toUpperCase()} doesn't have the ball there.` : "That move doesn't fit here."); drawBoard(); return; }
    step[1] = list; draft.dirty = draft.touched = true; drawBoard();
  }
  function paintPhoto() {
    const box = $('#fphotobox');
    if (!box) return;
    const ph = draft.photo;
    box.innerHTML = `<span class="eyebrow" style="margin-top:14px">Photo of your sheet (optional)</span>
      ${ph ? `<img class="sheet-photo" src="${photoSrc(ph)}" alt="Your sheet">` : ''}
      <div class="row" style="gap:8px"><button type="button" class="btn small" data-act="fphoto">${ph ? 'Replace photo' : 'Upload a photo'}</button>${ph ? '<button type="button" class="btn small" data-act="fnophoto">Remove photo</button>' : ''}</div>`;
  }
  // A phone photo is several MB: shrink it first. In the Claude version it goes to the artifact's file storage,
  // because the synced record is capped at 256 KB; elsewhere it stays on this device as a data URL.
  async function addPhoto(file) {
    if (file.type && !file.type.startsWith('image/')) { toast('Pick a photo or a picture file.'); return; }
    const dr = draft, url = URL.createObjectURL(file), c = document.createElement('canvas');
    try {
      const im = new Image();
      im.src = url;
      await im.decode();
      const k = Math.min(1, 1000 / Math.max(im.naturalWidth, im.naturalHeight));
      c.width = Math.round(im.naturalWidth * k); c.height = Math.round(im.naturalHeight * k);
      const g = c.getContext('2d');
      g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(im, 0, 0, c.width, c.height);
    } catch (err) {
      toast('Could not read that photo. Try a JPEG or PNG.'); return;
    } finally { URL.revokeObjectURL(url); }
    const assets = window.claude && window.claude.use ? await window.claude.use('assets').catch(() => null) : null;
    if (assets) {
      try {
        const blob = await new Promise(res => c.toBlob(res, 'image/jpeg', 0.75));
        const up = await assets.upload(blob, { type: 'image/jpeg' });
        dr.photo = { id: up.id, w: c.width, h: c.height };
      } catch (err) {
        toast(err && err.code === 'quota_or_state' ? 'Photo storage is full. Remove photos from old plays.' : 'Could not upload the photo. Try again.'); return;
      }
    } else dr.photo = { img: c.toDataURL('image/jpeg', 0.6), w: c.width, h: c.height };
    dr.dirty = true;
    if (draft === dr) paintPhoto();
  }

  // ---------- move your plays between copies of the app (GitHub Pages and the Claude link keep separate storage) ----------
  const moveCount = () => Object.keys(state.custom).length + Object.keys(state.edits).length;
  const moveSheet = () => `<h2>Move your plays</h2>
    <p class="muted" style="margin:0 0 12px">The GitHub Pages copy and your Claude link keep separate storage. This moves the plays and drills you made, and your edits to ours, from one to the other.</p>
    <div class="stack" style="gap:10px">
      <b>1. In the copy that has them</b>
      <button class="btn block" data-act="xcopy" ${moveCount() ? '' : 'disabled'}>${I.copy}${moveCount() ? `Copy my plays · ${moveCount()}` : 'Nothing to copy here'}</button>
      <b>2. In the copy you want them in</b>
      <label class="lbl">Paste here<textarea class="field" id="xin" rows="4" placeholder="Paste the copied plays"></textarea></label>
      <button class="btn primary block" data-act="ximport">${I.check}Add these plays</button>
    </div>`;
  // Pasted text is checked field by field; anything that does not look like this app's own data is dropped.
  const SPOTRE = /^f?[a-z]+(?:[+-][\d.]+,[+-]?[\d.]+)?$/, IDRE = /^[A-Za-z0-9]{1,6}$/;
  const okPt = v => (Array.isArray(v) ? v.length === 2 && v.every(Number.isFinite) : typeof v === 'string' && SPOTRE.test(v));
  function cleanDg(dg, base) {
    if (!dg || typeof dg !== 'object' || !dg.p || typeof dg.p !== 'object' || !Array.isArray(dg.s)) return null;
    const p = {};
    for (const [k, v] of Object.entries(dg.p)) { if (!/^[A-Za-z0-9]{1,6}\*{0,4}$/.test(k) || !okPt(v)) return null; p[k] = v; }
    const okAct = a => a === '|' || (Array.isArray(a) && IDRE.test(a[0]) && IDRE.test(a[1]) && a.slice(2).every(x => okPt(x) || (typeof x === 'string' && IDRE.test(x))));
    const s = dg.s.map(st => (Array.isArray(st) && typeof st[0] === 'string' && Array.isArray(st[1]) && st[1].every(okAct) ? (Number.isInteger(st[2]) ? [st[0], st[1], st[2]] : [st[0], st[1]]) : null));
    if (!s.length || s.includes(null)) return null;
    const out = { ...(dg.court === 'f' ? { court: 'f' } : {}), p, s };
    if (base) for (const k of ['n', 'z', 'c']) if (base[k]) out[k] = base[k]; // board labels only ever come from our own diagrams
    return tryBuild(out) ? null : out;
  }
  const cleanFields = o => {
    const out = {};
    for (const k of ['name', 'players', 'setup', 'runs', 'ms']) if (typeof o[k] === 'string') out[k] = o[k].slice(0, 4000);
    if (LEVELS.includes(o.level)) out.level = o.level;
    if (Number.isFinite(o.min)) out.min = Math.max(1, Math.min(60, Math.round(o.min)));
    if (Array.isArray(o.points)) out.points = o.points.filter(x => typeof x === 'string').map(x => x.slice(0, 400)).slice(0, 30);
    return out;
  };
  function cleanItem(raw) {
    if (!raw || typeof raw !== 'object' || typeof raw.name !== 'string' || !raw.name.trim() || !own(DATA.cats, raw.cat)) return null;
    const d = { id: String(raw.id || ''), mine: true, cat: raw.cat, min: 6, level: 'Foundation', ...cleanFields(raw), source: BOOK.has(raw.cat) ? 'Your play' : 'Your drill' };
    if (raw.cat === 'PL' && P.TYPES.includes(raw.type)) d.type = raw.type;
    if (raw.dg) { const dg = cleanDg(raw.dg); if (dg) d.dg = dg; }
    if (raw.sketch && Array.isArray(raw.sketch.strokes)) d.sketch = { full: !!raw.sketch.full, strokes: raw.sketch.strokes.filter(st => st && /^#[0-9a-f]{6}$/i.test(st.c) && Array.isArray(st.d) && st.d.every(okPt) && st.d.every(Array.isArray)) };
    if (raw.photo && PHOTO.test(raw.photo.img || '') && raw.photo.w > 0 && raw.photo.h > 0) d.photo = { img: raw.photo.img, w: +raw.photo.w, h: +raw.photo.h };
    return d;
  }
  async function importPlays(text) {
    let data = null;
    try { data = JSON.parse(text.trim()); } catch (e) { /* not JSON: handled below */ }
    if (!data || data.app !== 'practicebook-plays' || !data.custom || typeof data.custom !== 'object' || !data.edits || typeof data.edits !== 'object') {
      toast("That isn't a plays code from this app. Copy it again and paste all of it."); return;
    }
    const assets = inClaude ? await window.claude.use('assets').catch(() => null) : null;
    let added = 0, edits = 0, here = 0, bad = 0, noPhoto = 0;
    for (const raw of Object.values(data.custom)) {
      const d = cleanItem(raw);
      if (!d) { bad++; continue; }
      if (Object.values(state.custom).some(x => x.name === d.name && x.cat === d.cat && JSON.stringify(x.dg || null) === JSON.stringify(d.dg || null))) { here++; continue; }
      if (!/^MY-[A-Z0-9]{1,12}$/.test(d.id) || own(state.custom, d.id) || own(BY_ID, d.id)) d.id = newId();
      if (d.photo && assets) { // the synced record can't hold photos: move it to the artifact's file storage
        try {
          const [head, b64] = d.photo.img.split(','), bin = atob(b64), bytes = new Uint8Array(bin.length), type = head.slice(5, head.indexOf(';'));
          for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
          const up = await assets.upload(new Blob([bytes], { type }), { type });
          d.photo = { id: up.id, w: d.photo.w, h: d.photo.h };
        } catch (e) { delete d.photo; noPhoto++; }
      }
      state.custom[d.id] = d; thumbs.delete(d.id); added++;
    }
    for (const [id, e] of Object.entries(data.edits)) {
      if (!own(BY_ID, id) || !e || typeof e !== 'object') { bad++; continue; }
      if (own(state.edits, id)) { here++; continue; } // your edit in this copy stays
      const ch = cleanFields(e);
      if (e.dg) { const dg = cleanDg(e.dg, DIAGRAMS[id]); if (dg) ch.dg = dg; }
      if (Object.keys(ch).length) { state.edits[id] = ch; thumbs.delete(id); edits++; }
    }
    save(); closeSheet();
    const n = (k, w) => `${k} ${w}${k === 1 ? '' : 's'}`;
    toast([added || edits ? `Added ${[added && n(added, 'play'), edits && n(edits, 'edit')].filter(Boolean).join(' and ')}.` : 'Nothing new to add.',
      here ? `${here} ${here === 1 ? 'was' : 'were'} already here.` : '',
      bad ? `${n(bad, 'item')} could not be read.` : '', noPhoto ? `${n(noPhoto, 'photo')} could not be uploaded.` : ''].filter(Boolean).join(' '));
  }

  // ---------- notes ----------
  const chipsFor = ids => `<div class="drill-chips">${ids.filter(id => drill(id)).map(id => `<button data-act="open" data-id="${id}" title="${esc(drill(id).name)}">${id} · ${esc(drill(id).name.length > 26 ? drill(id).name.slice(0, 24) + '…' : drill(id).name)}</button>`).join('')}</div>`;
  const installBtn = key => `<button class="check ${state.installed[key] ? 'on' : ''}" data-act="install" data-k="${esc(key)}" aria-pressed="${!!state.installed[key]}">${state.installed[key] ? I.check + 'Installed' : 'Not yet'}</button>`;
  // ---------- the program, calls and flashcards ----------
  const noteCard = (x, i, conf) => `<section class="card note-item"><div class="top">${i >= 0 ? `<span class="n">${i + 1}</span>` : ''}<b>${esc(x.t)}</b>${conf || ''}</div>
    ${x.text ? `<p>${esc(x.text)}</p>` : ''}${chipsFor(x.drills || [])}</section>`;
  const noteList = (title, list) => `<div class="section-head"><h2>${title}</h2></div><div class="stack" style="gap:8px">${list.map((x, i) => noteCard(x, i)).join('')}</div>`;
  function viewProgram() {
    const s = P.structure;
    return `<section class="card prog-card"><div class="eyebrow">Our team</div>
        <div class="filters chips" style="margin:0">${LADDER.map(l => `<button class="chip ${state.team === l ? 'on' : ''}" data-act="team" data-v="${l}" aria-pressed="${state.team === l}">${esc(P.LEVEL_NAMES[l])}</button>`).join('')}</div>
        <p class="muted small">The Playbook and Calls show Our Package: what ${esc(teamName(state.team))} runs. Every team in the program uses the same words.</p></section>
      <section class="card prog-card"><div class="row" style="justify-content:space-between;flex-wrap:nowrap"><div class="eyebrow">Our 5</div>
          <button class="btn small" data-act="pick5">${state.our5.length ? 'Change' : 'Pick Our 5'}</button></div>
        <div class="staff">${esc(P.staffNotes[0])}</div>
        ${state.our5.length ? `<ol class="our5-list">${state.our5.map(t => `<li>${esc(t)}</li>`).join('')}</ol>` : '<p class="muted small">Pick up to 5 things you go nuts on. They show on the Run screen and in the copied plan.</p>'}</section>
      <section class="card motto"><span class="eyebrow">Program motto</span><p>${esc(P.motto)}</p></section>
      <div class="section-head"><h2>Philosophies</h2></div>
      <section class="card note-item"><ul class="sayings">${P.philosophies.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>
      <div class="section-head"><h2>Core values</h2></div>
      <div class="value-tags">${P.coreValues.map(x => `<span>${esc(x)}</span>`).join('')}</div>
      <div class="section-head"><h2>Basketball values</h2></div>
      <section class="card note-item"><ol class="principles">${P.bbValues.map(x => `<li>${esc(x)}</li>`).join('')}</ol></section>
      <div class="section-head"><h2>Defensive philosophy</h2></div>
      <section class="card note-item"><p>${esc(P.defPhilosophy)}</p></section>
      ${noteList('Absolutes', P.absolutes)}${noteList('Keys', P.keys)}${noteList('Offensive musts', P.musts)}${noteList('Points of emphasis', P.emphasis)}
      <div class="section-head"><h2>Offensive structure</h2></div>
      <section class="card note-item"><p>${esc(s.text)}</p></section>
      <div class="stack" style="gap:8px;margin-top:8px">${s.steps.map((x, i) => noteCard(x, i)).join('')}</div>
      <div class="section-head"><h2>Offensive rebounding</h2></div>
      ${noteCard(P.oreb, -1, confirmTag({ ...P.oreb, code: 'OREB' }, true))}`;
  }
  const isNum = code => /^\d+$/.test(code);
  const meaning = c => ({ head: isNum(c.code) ? DATA.decodeCall(c.code) : '', text: c.text || (drill(c.play) || {}).name || '' });
  const callChips = c => chipsFor(c.drills || (c.play ? [c.play] : []));
  const callRow = c => { const m = meaning(c); return `<div class="card call-row${ours(c) ? '' : ' dim'}">
    <button class="call-main" data-act="call" data-code="${esc(c.code)}"><span class="code${isNum(c.code) ? '' : ' word'}">${esc(c.code)}</span>
      <span class="mean">${m.head ? `<b>${esc(m.head)}</b>` : ''}${m.text ? `<span>${esc(m.text)}</span>` : ''}</span></button>
    <div class="call-foot">${runsAt(P.fromOf(c), true)}${confirmTag(c)}</div>${callChips(c)}</div>`; };
  function callSheet(code) {
    const c = P.calls.find(x => x.code === code), m = meaning(c);
    return `<div class="call-big${isNum(code) ? '' : ' word'}">${esc(code)}</div>${m.head ? `<h2>${esc(m.head)}</h2>` : ''}${m.text ? `<p class="call-text">${esc(m.text)}</p>` : ''}
      ${progRow(c)}${callChips(c)}<button class="btn block" style="margin-top:16px" data-act="closesheet">Close</button>`;
  }
  const flashCards = () => P.calls.filter(c => ['number', 'full', 'example'].includes(c.kind) || allCalls || ours(c));
  function viewCalls() {
    const list = P.calls.filter(c => allCalls || ours(c));
    const secs = [['Half-court numbers', ['number']], ['Full court', ['full', 'example']], ['Calls', ['call']], ['Specials', ['special']]];
    return `<div class="calls-bar"><button class="btn primary" data-act="flash">Flashcards</button>
        <button class="chip ${allCalls ? 'on' : ''}" data-act="callsall" aria-pressed="${allCalls}">Show all</button></div>
      <p class="muted small" style="margin:10px 0 0">${allCalls ? 'Every number and call in the program. Faded ones are not in Our Package.' : `Our Package for ${esc(teamName(state.team))}: ${list.length} of ${P.calls.length}. Tap one for the full meaning.`}</p>
      ${secs.map(([t, kinds]) => { const rows = list.filter(c => kinds.includes(c.kind)); return rows.length ? `<div class="section-head"><h2>${t}</h2></div><div class="stack" style="gap:8px">${rows.map(callRow).join('')}</div>` : ''; }).join('')}`;
  }
  function openFlash() {
    flash = { cards: flashCards(), i: 0, flip: false };
    const ov = document.createElement('div');
    ov.className = 'overlay flash'; ov.id = 'flash';
    ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-label', 'Flashcards');
    document.body.appendChild(ov);
    paintFlash('flip'); // focus the card so keyboard and screen reader users start inside the overlay
  }
  function paintFlash(focus) {
    const ov = $('#flash');
    if (!ov) return;
    const c = flash.cards[flash.i], m = meaning(c);
    ov.innerHTML = `<div class="overlay-bar"><button class="icon-btn ghost" data-act="closeflash" aria-label="Close">${I.back}</button>
        <div class="ttl">Flashcards</div><span class="num fc-count">${flash.i + 1} / ${flash.cards.length}</span></div>
      <div class="flash-body">
        <button class="flashcard${flash.flip ? ' back' : ''}" data-act="flip" aria-live="polite">${flash.flip
          ? `<span class="fc-code">${esc(c.code)}</span>${m.head ? `<b>${esc(m.head)}</b>` : ''}${m.text ? `<span class="fc-text">${esc(m.text)}</span>` : ''}`
          : `<span class="fc-front${isNum(c.code) ? '' : ' word'}">${esc(c.code)}</span><small>Tap to see what it means</small>`}</button>
        <div class="flash-ctl"><button class="btn big" data-act="shuffle">Shuffle</button><button class="btn primary big" data-act="fnext">${I.next}Next</button></div>
      </div>`;
    if (focus) $(`[data-act="${focus}"]`, ov).focus();
  }
  const closeFlash = () => { if (navigatedIn && location.hash === '#flash') history.back(); else location.hash = 'notes'; };
  const our5Sheet = () => {
    const kinds = [...new Set(P.our5Options.map(o => o.kind))], stale = state.our5.filter(t => !P.our5Options.some(o => o.t === t));
    const chip = t => `<button class="chip ${state.our5.includes(t) ? 'on' : ''}" data-act="our5" data-v="${esc(t)}" aria-pressed="${state.our5.includes(t)}">${state.our5.includes(t) ? I.check.replace('<svg', '<svg width="15" height="15"') : ''}${esc(t)}</button>`;
    return `<h2>Our 5</h2><p class="muted" style="margin:0">Pick up to 5. <b class="num">${state.our5.length}/5</b> picked.</p>
      ${kinds.map(k => `<div class="eyebrow pick5-h">${esc(k)}s</div><div class="pick5">${P.our5Options.filter(o => o.kind === k).map(o => chip(o.t)).join('')}</div>`).join('')}
      ${stale.length ? `<div class="eyebrow pick5-h">Older picks</div><div class="pick5">${stale.map(chip).join('')}</div>` : ''}
      <button class="btn primary block" style="margin-top:16px" data-act="closesheet">Done</button>`;
  };
  function viewNotes() {
    const tabs = [['program', 'Program'], ['calls', 'Calls & Numbers'], ['blueprint', 'Practice blueprint'], ['offense', 'Offense install'], ['defense', 'Defense'], ['positions', 'Guards & posts'], ['readiness', 'HS readiness']];
    let body = '';
    if (notesTab === 'program') body = viewProgram();
    else if (notesTab === 'calls') body = viewCalls();
    else if (notesTab === 'blueprint') {
      body = `<section class="card" style="padding:16px 18px;overflow-x:auto"><table class="bp-table"><thead><tr><th>Block</th><th>Min</th><th>Pull drills from</th></tr></thead><tbody>
        ${DATA.blueprint.map(b => `<tr><td>${esc(b.block)}</td><td class="m num">${esc(b.min)}</td><td><div class="row" style="gap:6px">${b.cats.map(c => c.includes('-') ? chipsFor([c]) : `<a class="cat-code" style="${gc(c)};text-decoration:none" href="#cat-${c}">${c}</a>`).join('')}</div></td></tr>`).join('')}
        </tbody></table>
        <button class="btn primary" style="margin-top:14px" data-act="blueprint">${I.plus}Build a plan from this blueprint</button></section>
        <div class="section-head"><h2>Pushing middle schoolers</h2></div>
        <section class="card" style="padding:18px"><ol class="principles">${DATA.principles.map(p => `<li>${esc(p)}</li>`).join('')}</ol></section>`;
    } else if (notesTab === 'offense' || notesTab === 'defense') {
      const src = notesTab === 'offense' ? DATA.plays : DATA.defense;
      body = src.map(sec => `<div class="section-head"><h2>${esc(sec.title)}</h2><span class="muted num">${sec.items.filter(x => x.title && state.installed[notesTab + ':' + sec.title + ':' + x.title]).length}/${sec.items.filter(x => x.title).length} installed</span></div>
        <div class="stack" style="gap:8px">${sec.items.map((x, i) => x.sub ? `<div class="eyebrow" style="margin-top:6px">${esc(x.sub)}</div>` : `
          <section class="card note-item"><div class="top"><span class="n">${esc(x.n || i + 1)}</span><b>${esc(x.title)}</b>${confirmTag({ ...x, code: notesTab + ':' + x.title }, true)}${installBtn(notesTab + ':' + sec.title + ':' + x.title)}</div>
          ${x.staff ? `<div class="staff">${esc(x.staff)}</div>` : ''}${x.text ? `<p>${esc(x.text)}</p>` : ''}${x.drills.length ? chipsFor(x.drills) : ''}</section>`).join('')}</div>`).join('');
    } else if (notesTab === 'positions') {
      body = DATA.positions.map(sec => `<div class="section-head"><h2>${esc(sec.title)}</h2></div><div class="stack" style="gap:8px">${sec.items.map(x => `
        <section class="card note-item"><div class="top"><b>${esc(x.title)}</b></div>${x.staff ? `<div class="staff">${esc(x.staff)}</div>` : ''}
        ${x.text ? `<p><span class="eyebrow" style="color:var(--ok)">HS-ready</span> ${esc(x.text)}</p>` : ''}${chipsFor(x.drills)}</section>`).join('')}</div>`).join('');
    } else {
      body = `<p class="muted">Test in week 1, again mid-season, and at the end. Targets are starting points for 8th grade.</p>
        <div class="drill-list">${DATA.tests.map(x => `<section class="card note-item"><div class="top"><b>${esc(x.test)}</b><span style="text-align:right"><b class="num" style="font:800 30px/1 var(--display)">${esc(x.target)}</b><br><small class="muted">${esc(x.better.toLowerCase())} is better</small></span></div>
          <p class="muted">${esc(x.how)}</p>${chipsFor(x.drills)}</section>`).join('')}</div>`;
    }
    return `<div class="section-head" style="margin-top:0"><h2>Coach's Notes</h2></div>
      <div class="seg">${tabs.map(([k, l]) => `<button class="chip ${notesTab === k ? 'on' : ''}" data-act="ntab" data-v="${k}">${l}</button>`).join('')}</div>${body}`;
  }

  // ---------- events ----------
  const ACT = {
    open: el => { closeSheet(); goDrill(el.dataset.id); },
    closedetail: () => closeDetail(),
    bplay: el => { const c = el.closest('.board-scope')._ctl; c.playing ? c.pause() : c.play(); },
    bstep: el => el.closest('.board-scope')._ctl.go(+el.dataset.i),
    bspeed: () => { speed = speed === 1 ? 0.5 : 1; $$('.speed').forEach(b => { b.textContent = speed === 1 ? '1×' : '½×'; }); },
    tools: el => { toolsOpen = toolsOpen === +el.dataset.i ? -1 : +el.dataset.i; render(); },
    min: el => { const it = cur().items[+el.dataset.i]; it.min = Math.max(1, Math.min(60, it.min + +el.dataset.d)); save(); },
    move: el => {
      const items = cur().items, i = +el.dataset.i, j = i + +el.dataset.d;
      if (j < 0 || j >= items.length) return;
      [items[i], items[j]] = [items[j], items[i]]; toolsOpen = j; save();
    },
    remove: el => { cur().items.splice(+el.dataset.i, 1); toolsOpen = -1; save(); },
    pshuffle: () => {
      const p = cur(), used = new Set(p.items.map(it => it.d).filter(Boolean)), before = JSON.parse(JSON.stringify(p.items));
      let n = 0;
      p.items = p.items.map(it => { const nx = reroll(it, used); if (nx !== it) { n++; used.add(nx.d); } return nx; });
      if (!n) { toast('No other drills fit these blocks'); return; }
      unshuffle = { id: p.id, items: before, after: JSON.stringify(p.items) };
      toolsOpen = -1; save(); toast(`${n} new drills. Same blocks, same minutes.`);
    },
    unshuffle: () => {
      const p = cur();
      if (!unshuffle || unshuffle.id !== p.id) return;
      p.items = unshuffle.items; unshuffle = null; save(); toast('Your drills are back');
    },
    reroll: el => {
      const p = cur(), i = +el.dataset.i, nx = reroll(p.items[i], new Set(p.items.map(it => it.d).filter(Boolean)));
      if (nx === p.items[i]) { toast('No other drill fits this spot'); return; }
      p.items[i] = nx; save(); toast(`${drill(nx.d).name} is in`);
    },
    swap: el => {
      const it = cur().items[+el.dataset.i], d = it.d && drill(it.d);
      openPicker({ mode: it.d ? 'swap' : 'slot', i: +el.dataset.i, cats: d ? (GROUP[d.cat] || { cats: [d.cat] }).cats : it.cats, label: d ? 'swap ' + d.name : it.slot });
    },
    fill: el => { const it = cur().items[+el.dataset.i]; openPicker({ mode: 'slot', i: +el.dataset.i, cats: it.cats, label: it.slot }); },
    add: () => openPicker({ mode: 'add' }),
    pick: el => choose(el.dataset.id),
    pickall: el => { pick.showAll = el.dataset.v === '1'; paintPicker(); },
    closepicker: () => closePicker(),
    playsheet: () => openPlaySheet(),
    closeplaysheet: () => closePlaySheet(),
    sheetpick: el => {
      const ids = state.sheet.ids, i = ids.indexOf(el.dataset.id);
      if (i >= 0) ids.splice(i, 1); else ids.push(el.dataset.id);
      save(false); paintPlaySheet();
    },
    sheetall: () => { state.sheet.ids = [...new Set([...state.sheet.ids, ...bookAll().filter(ours).map(d => d.id)])]; save(false); paintPlaySheet(); },
    sheetclear: () => { state.sheet.ids = []; save(false); paintPlaySheet(); },
    sheetprint: () => printPlaySheet(),
    moveplays: () => sheet(moveSheet()),
    xcopy: () => {
      const text = JSON.stringify({ app: 'practicebook-plays', v: 1, custom: state.custom, edits: state.edits });
      const fallback = () => { sheet(`<h2>Copy your plays</h2><p class="muted">Select all and copy, then paste it under Move plays in the other copy of the app.</p><textarea class="field" id="copytext" rows="10" readonly>${esc(text)}</textarea>`); $('#copytext').select(); };
      try { navigator.clipboard.writeText(text).then(() => toast('Copied. Open the other copy of the app and paste it under Move plays.'), fallback); } catch (e) { fallback(); }
    },
    ximport: () => { const t = $('#xin') ? $('#xin').value : ''; if (t.trim()) importPlays(t); else toast('Paste the copied plays first.'); },
    quickadd: el => quickAdd(el.dataset.id),
    level: el => { libLevel = el.dataset.v; repaintLib(el); },
    college: el => { libCollege = !libCollege; repaintLib(el); },
    copy: () => {
      const text = planText(cur());
      const fallback = () => { sheet(`<h2>Copy plan</h2><p class="muted">Select all and copy.</p><textarea class="field" id="copytext" rows="14" readonly>${esc(text)}</textarea>`); $('#copytext').select(); };
      try { navigator.clipboard.writeText(text).then(() => toast('Plan copied. Paste it in a text or email.'), fallback); } catch (e) { fallback(); }
    },
    newplan: () => {
      const tot = t => t.items.reduce((a, id) => a + BY_ID[id].min, 0);
      sheet(`<h2>New practice</h2><p class="muted" style="margin:0">Your current plan stays saved.</p>
        <button class="opt" data-act="mkplan" data-v="blueprint"><span class="n">90</span><span><b>90-minute blueprint</b><small>One block per group: tap each block to pick the drill.</small></span></button>
        ${DATA.templates.map(t => `<button class="opt" data-act="mkplan" data-v="${t.id}"><span class="n num">${tot(t)}</span><span><b>${esc(t.name)}</b><small>${esc(t.focus)}</small></span></button>`).join('')}
        <button class="opt" data-act="mkplan" data-v="blank"><span class="n">0</span><span><b>Blank plan</b><small>Start empty and add drills from the library.</small></span></button>`);
    },
    mkplan: el => { const p = planFrom(el.dataset.v, cur() && cur().start); state.plans[p.id] = p; state.current = p.id; closeSheet(); location.hash = 'plan'; save(); toast(`${p.name} is today's plan`); },
    blueprint: () => ACT.mkplan({ dataset: { v: 'blueprint' } }),
    plans: () => {
      const list = Object.values(state.plans).sort((a, b) => (b.date || '').localeCompare(a.date || '') || a.name.localeCompare(b.name));
      sheet(`<h2>Saved plans</h2>${list.map(p => `<div class="row" style="flex-wrap:nowrap;margin-top:10px">
          <button class="opt" style="margin:0;flex:1;min-width:0" data-act="useplan" data-id="${p.id}"><span class="n num" style="font-size:20px">${p.items.reduce((a, x) => a + x.min, 0)}</span><span style="min-width:0"><b>${esc(p.name)}${p.id === state.current ? ' · open' : ''}</b><small>${esc(prettyDate(p.date))} · ${p.items.length} blocks</small></span></button>
          <button class="icon-btn" data-act="dupplan" data-id="${p.id}" aria-label="Copy ${esc(p.name)} to today" title="Copy to today">${I.copy}</button>
          <button class="icon-btn" data-act="delplan" data-id="${p.id}" aria-label="Delete ${esc(p.name)}" title="Delete" ${list.length === 1 ? 'disabled' : ''}>${I.trash}</button></div>`).join('')}`);
    },
    useplan: el => { state.current = el.dataset.id; closeSheet(); location.hash = 'plan'; save(); },
    dupplan: el => {
      const p = JSON.parse(JSON.stringify(state.plans[el.dataset.id]));
      p.id = uid(); p.date = today(); state.plans[p.id] = p; state.current = p.id; closeSheet(); location.hash = 'plan'; save(); toast('Copied to today');
    },
    delplan: el => {
      if (el.dataset.armed) { delete state.plans[el.dataset.id]; if (!state.plans[state.current]) state.current = Object.keys(state.plans)[0]; save(); ACT.plans(); return; }
      el.dataset.armed = 1; el.style.color = 'var(--bad)'; el.style.borderColor = 'var(--bad)'; el.title = 'Tap again to delete';
      toast('Tap the trash again to delete');
    },
    startrun: () => startRun(),
    rnext: () => goItem(run.i + 1),
    rprev: () => goItem(run.i - 1),
    rjump: el => goItem(+el.dataset.i),
    rpause: () => togglePause(),
    rplus: () => { run.extra += 60; if (elapsed() < run.extra + runItems()[run.i].min * 60) run.alarmed = false; saveRun(); tickRun(); },
    endrun: el => {
      if (run && !run.done && !el.dataset.armed) { el.dataset.armed = 1; el.textContent = 'Tap again to end practice'; el.style.color = 'var(--bad)'; return; }
      run = null; saveRun(); if (wakeLock) wakeLock.release().catch(() => {}); wakeLock = null; render();
    },
    pen: el => { pen = el.dataset.v; $$('.pen').forEach(b => b.classList.toggle('on', b.dataset.v === pen)); },
    skcourt: el => { state.sketch.full = el.dataset.v === '1'; save(); },
    skundo: () => { sketchData().strokes.pop(); save(); },
    skclear: () => {
      if (!clearArmed) { clearArmed = true; render(); setTimeout(() => { clearArmed = false; if (view === 'board') render(); }, 3000); return; }
      clearArmed = false; sketchData().strokes.length = 0; save();
    },
    fcourt: el => { if (el.dataset.v === '1') draft.dg.court = 'f'; else delete draft.dg.court; draft.dirty = draft.touched = true; paintDiag(); },
    fstep: el => { draft.i = +el.dataset.i; paintDiag(); },
    faddstep: () => { draft.dg.s.push(['', []]); draft.i = draft.dg.s.length; draft.dirty = true; paintDiag(); },
    ftool: el => { tool = el.dataset.v; paintDiag(); },
    fthen: () => {
      const acts = draft.dg.s[draft.i - 1][1];
      if (acts.length && acts[acts.length - 1] !== '|') { acts.push('|'); toast('The next move waits for these to finish'); }
    },
    fundo: () => {
      const step = draft.dg.s[draft.i - 1], acts = step[1].slice();
      while (acts.length && acts[acts.length - 1] === '|') acts.pop();
      acts.pop();
      while (acts.length && acts[acts.length - 1] === '|') acts.pop();
      const was = step[1];
      step[1] = acts;
      if (tryBuild(draft.dg)) { step[1] = was; toast('A later step needs that move. Change that step first.'); return; }
      draft.dirty = draft.touched = true; drawBoard();
    },
    fplay: () => { if (draft.ctl) draft.ctl.destroy(); draft.ctl = Court.mount($('#fboard'), { ...draft.dg, id: 'edit' }, { speed: () => speed }); draft.ctl.go(draft.i - 1); draft.ctl.play(true); },
    fdelstep: el => {
      if (!el.dataset.armed) { el.dataset.armed = 1; el.lastChild.textContent = 'Tap again to delete'; el.style.color = 'var(--bad)'; return; }
      const gone = draft.dg.s.splice(draft.i - 1, 1);
      if (tryBuild(draft.dg)) { draft.dg.s.splice(draft.i - 1, 0, ...gone); toast('Another step starts from this one, so it stays.'); return; }
      draft.i = Math.min(draft.i, draft.dg.s.length); draft.dirty = draft.touched = true; paintDiag();
    },
    fdef: () => {
      const p = draft.dg.p, xs = Object.keys(p).filter(k => /^x/.test(k));
      if (xs.length) {
        const keep = { ...p };
        xs.forEach(k => delete p[k]);
        if (tryBuild(draft.dg)) { draft.dg.p = keep; toast('Your steps move the defense. Undo those moves first.'); return; }
      } else {
        for (const n of ['1', '2', '3', '4', '5']) { // each defender a step inside his man, toward the rim
          const k = pkey(p, n);
          if (!k) continue;
          const [x, y] = Court.pt(p[k]);
          p['x' + n] = [Math.round(x * 0.8 * 10) / 10, Math.round((y + (5.25 - y) * 0.2) * 10) / 10];
        }
      }
      draft.dirty = draft.touched = true; paintDiag();
    },
    fphoto: () => $('#fphotoin').click(),
    fnophoto: () => { draft.photo = null; draft.dirty = true; paintPhoto(); },
    closeform: el => { // one stray tap must not throw away a drawn-up play
      if (draft && draft.dirty && !el.dataset.armed) { el.dataset.armed = 1; toast('Tap back again to throw away your changes'); return; }
      if (draft && draft.ctl) draft.ctl.destroy();
      $('#drillform').remove();
    },
    newdrill: () => openDrillForm(),
    newplay: () => openDrillForm(null, { play: true }),
    resetdrill: el => {
      if (!el.dataset.armed) { el.dataset.armed = 1; el.lastChild.textContent = 'Tap again: back to the original'; el.style.color = 'var(--bad)'; return; }
      delete state.edits[el.dataset.id]; thumbs.delete(el.dataset.id); save(); refreshDetail(); toast('Back to the original');
    },
    editdrill: el => openDrillForm(el.dataset.id),
    deldrill: el => {
      if (!el.dataset.armed) { el.dataset.armed = 1; el.lastChild.textContent = 'Tap again to delete'; el.style.color = 'var(--bad)'; return; }
      delete state.custom[el.dataset.id];
      Object.values(state.plans).forEach(p => { p.items = p.items.filter(it => it.d !== el.dataset.id); });
      closeDetail(); save(); toast('Drill deleted');
    },
    ntab: el => { notesTab = el.dataset.v; render(); },
    install: el => { const k = el.dataset.k; state.installed[k] = !state.installed[k]; save(); },
    value: el => { libValue = el.dataset.v; repaintLib(el); },
    team: el => { state.team = el.dataset.v; save(); toast(`Our team: ${P.LEVEL_NAMES[state.team]}. Our Package updated.`); },
    goteam: () => { notesTab = 'program'; location.hash = 'notes'; if (view === 'notes') render(); },
    pick5: () => { sheet(our5Sheet()).firstChild.classList.add('pick5-sheet'); },
    our5: el => {
      const t = el.dataset.v, i = state.our5.indexOf(t);
      if (i >= 0) state.our5.splice(i, 1);
      else if (state.our5.length >= 5) { toast('Our 5 is full. Tap one to take it off.'); return; }
      else state.our5.push(t);
      save();
      const sh = $('.pick5-sheet');
      if (sh) sh.innerHTML = our5Sheet();
    },
    closesheet: () => closeSheet(),
    runs: el => {
      const k = el.dataset.k, it = itemByKey(k);
      if (!it) return;
      state.runs[k] = !ours(it);
      save(); repaintOpen();
      toast(state.runs[k] ? 'Added to Our Package' : 'Taken out of Our Package');
    },
    confirm: el => {
      if (!el.dataset.armed) { el.dataset.armed = 1; el.textContent = 'Tap again: confirmed'; return; }
      state.confirmed[el.dataset.k] = true; save(); repaintOpen(); toast('Marked confirmed by the staff');
    },
    call: el => { sheet(callSheet(el.dataset.code)).firstChild.dataset.code = el.dataset.code; },
    callsall: () => { allCalls = !allCalls; render(); },
    flash: () => { navigatedIn = true; location.hash = 'flash'; },
    closeflash: () => closeFlash(),
    flip: () => { flash.flip = !flash.flip; paintFlash('flip'); },
    fnext: () => { flash.i = (flash.i + 1) % flash.cards.length; flash.flip = false; paintFlash('fnext'); },
    shuffle: () => {
      const a = flash.cards;
      for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
      flash.i = 0; flash.flip = false; paintFlash('shuffle'); toast('Shuffled');
    },
  };
  function repaintLib(el) {
    if (el.closest('#picker')) { paintPicker(); return; }
    render();
  }

  document.addEventListener('click', e => {
    try { // browsers only allow sound after a tap; only make the context during a run so music isn't interrupted
      if (run && !run.done) audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      if (audio && audio.state === 'suspended') audio.resume();
    } catch (e) { /* no audio on this device */ }
    const el = e.target.closest('[data-act]');
    if (!el || el.disabled) return;
    const fn = ACT[el.dataset.act];
    if (!fn) return;
    if (el.tagName === 'A') e.preventDefault();
    fn(el, e);
  });
  let noteTimer = 0;
  document.addEventListener('input', e => {
    const el = e.target;
    if (draft && el.closest('#drillform')) draft.dirty = true;
    if (el.dataset.field) {
      cur()[el.dataset.field] = el.value;
      if (el.dataset.field === 'name' || el.dataset.field === 'focus' || el.dataset.field === 'message') save(false);
    } else if ('capt' in el.dataset) {
      draft.dg.s[draft.i - 1][0] = el.value; draft.touched = true;
    } else if ('sheettitle' in el.dataset) {
      state.sheet.title = el.value;
      clearTimeout(noteTimer); noteTimer = setTimeout(() => save(false), 600);
    } else if (el.dataset.search) {
      libQuery = el.value;
      if (el.dataset.search === 'pick') $('#pickres').innerHTML = results(true, pick.showAll ? null : pick.cats);
      else if (!catOpen) $('#libres').innerHTML = libQuery || libLevel || libCollege || libValue ? results(false) : groupsGrid();
    } else if (el.dataset.note) {
      const v = el.value.trim();
      if (v) state.notes[el.dataset.note] = el.value; else delete state.notes[el.dataset.note];
      clearTimeout(noteTimer); noteTimer = setTimeout(() => save(false), 600);
    }
  });
  document.addEventListener('change', e => {
    if ('upload' in e.target.dataset) { const file = e.target.files[0]; e.target.value = ''; if (file) addPhoto(file); return; }
    if (e.target.dataset.field === 'date' || e.target.dataset.field === 'start') save();
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if ($('.sheet-backdrop')) closeSheet();
    else if ($('#flash')) closeFlash();
    else if ($('#drillform')) $('#drillform').remove();
    else if ($('#detail')) closeDetail();
    else if ($('#picker')) closePicker();
    else if ($('#playsheet')) closePlaySheet();
  });

  route();
  if (run && !run.done) keepAwake();
  sync.init().catch(() => {});
  if ('serviceWorker' in navigator && location.protocol === 'https:' && !window.claude) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
