// Whiteboard court: turns a drill diagram (players + steps of actions) into an animated SVG.
// Units are feet. y = 0 is the near baseline at the top of the board; a full court runs to y = 94.
const Court = (() => {
  const RIM = [0, 5.25];
  const FAR_RIM = [0, 94 - 5.25];
  const SPOTS = {
    rim: RIM, top: [0, 28], hp: [0, 18], mid: [0, 11],
    rs: [9, 25], ls: [-9, 25], rw: [17, 18], lw: [-17, 18], rc: [21.5, 3], lc: [-21.5, 3],
    re: [6.5, 19], le: [-6.5, 19], rb: [7.5, 8], lb: [-7.5, 8], rsc: [13, 5], lsc: [-13, 5],
    rd: [9, 2.5], ld: [-9, 2.5], oob: [0, -2.5], roob: [11, -2.5], loob: [-11, -2.5],
    rsl: [26.5, 28], lsl: [-26.5, 28], hc: [0, 44], rhc: [17, 44], lhc: [-17, 44],
    cc: [0, 47], rcc: [17, 47], lcc: [-17, 47],
  };
  // Movement speeds in feet per second, chosen so a walk-through reads at teaching pace.
  const SPEED = { c: 12, d: 10, s: 9, m: 18, L: 10 };
  const MOVES = 'cdsmL';
  const BALL_OFF = [1.25, -1.25];

  function pt(v) {
    if (Array.isArray(v)) return v;
    const m = /^(f?)([a-z]+)(?:([+-][\d.]+),([+-]?[\d.]+))?$/.exec(v);
    if (!m || !SPOTS[m[2]]) throw new Error('Unknown spot: ' + v);
    const [x, y] = SPOTS[m[2]];
    const base = m[1] ? [x, 94 - y] : [x, y];
    return [base[0] + (+m[3] || 0), base[1] + (+m[4] || 0)];
  }

  function kind(id) {
    const t = id[0];
    return 'xckhb'.includes(t) ? t : 'o';
  }
  const label = id => (kind(id) === 'o' ? id : id.slice(1)).replace(/[a-z]+$/, '');

  // --- geometry helpers: everything is a dense polyline so motion and drawing share one path ---
  const dist = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);
  function spline(pts) {
    if (pts.length < 3) return pts.slice();
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      for (let s = 0; s < 14; s++) {
        const t = s / 14, t2 = t * t, t3 = t2 * t;
        out.push([0, 1].map(k => 0.5 * (2 * p1[k] + (-p0[k] + p2[k]) * t +
          (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * t3)));
      }
    }
    out.push(pts[pts.length - 1]);
    return out;
  }
  function measure(poly) {
    const acc = [0];
    for (let i = 1; i < poly.length; i++) acc.push(acc[i - 1] + dist(poly[i - 1], poly[i]));
    return { poly, acc, len: acc[acc.length - 1] };
  }
  function at(path, d) {
    const { poly, acc, len } = path;
    if (len === 0 || d <= 0) return poly[0];
    if (d >= len) return poly[poly.length - 1];
    let i = 1;
    while (acc[i] < d) i++;
    const f = (d - acc[i - 1]) / (acc[i] - acc[i - 1] || 1);
    return [poly[i - 1][0] + (poly[i][0] - poly[i - 1][0]) * f, poly[i - 1][1] + (poly[i][1] - poly[i - 1][1]) * f];
  }
  function trim(path, a, b) {
    const len = path.len, out = [];
    if (len - a - b < 0.6) return measure([at(path, len * 0.3), at(path, len * 0.7)]);
    out.push(at(path, a));
    path.poly.forEach((p, i) => { if (path.acc[i] > a && path.acc[i] < len - b) out.push(p); });
    out.push(at(path, len - b));
    return measure(out);
  }
  function arc(a, b, bend) {
    const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, d = dist(a, b) || 1;
    const c = [mx - (b[1] - a[1]) / d * d * bend, my + (b[0] - a[0]) / d * d * bend];
    const out = [];
    for (let i = 0; i <= 16; i++) {
      const t = i / 16, u = 1 - t;
      out.push([u * u * a[0] + 2 * u * t * c[0] + t * t * b[0], u * u * a[1] + 2 * u * t * c[1] + t * t * b[1]]);
    }
    return measure(out);
  }
  const nearRim = (p, full) => (full && p[1] > 47 ? FAR_RIM : RIM);

  // --- simulation: resolve every step into beats with timed actions and start/end states ---
  function build(dg) {
    const full = dg.court === 'f';
    const pos = {}, balls = {};
    let nb = 0;
    for (const key of Object.keys(dg.p)) {
      const id = key.replace(/\*/g, '');
      pos[id] = pt(dg.p[key]);
      for (const _ of key.match(/\*/g) || []) balls['b' + nb++] = id;
    }
    const ids = Object.keys(pos);
    const steps = dg.s.map(([text, acts]) => {
      const start = { pos: { ...pos }, balls: { ...balls } };
      const beats = [[]];
      for (const a of acts || []) a === '|' ? beats.push([]) : beats[beats.length - 1].push(a);
      const outBeats = beats.filter(b => b.length).map(list => {
        const b0 = { pos: { ...pos }, balls: { ...balls } };
        const acts = [];
        for (const raw of list) {
          const [t, who] = raw;
          if (!(who in pos)) throw new Error(`${dg.id}: no player "${who}" in "${text}"`);
          if (MOVES.includes(t)) {
            const route = [b0.pos[who], ...raw.slice(2).map(pt)];
            const path = measure(spline(route));
            const act = { t, who, path, dur: Math.max(0.35, path.len / SPEED[t]) };
            if (t === 'd' || t === 'L') act.ball = ballOf(balls, who, dg, text);
            pos[who] = route[route.length - 1];
            acts.push(act);
          } else if (!['p', 'sh', 'r', 'g'].includes(t)) throw new Error(`${dg.id}: unknown action ${t}`);
        }
        const mover = w => acts.find(a => a.who === w && MOVES.includes(a.t));
        const arrive = {}; // when a ball reaches each player during this beat
        const flight = len => Math.min(0.9, Math.max(0.35, len / 34));
        for (const raw of list) {
          const [t, who, to] = raw;
          if (t === 'p') {
            if (!(to in pos)) throw new Error(`${dg.id}: pass to unknown "${to}"`);
            const ball = ballOf(balls, who, dg, text);
            const dest = pos[to], recv = mover(to), mine = mover(who);
            // Lead the receiver: release so the ball lands as they arrive, from wherever the passer is by then.
            let delay = Math.max(arrive[who] || 0, recv ? recv.dur - flight(dist(b0.pos[who], dest)) : 0);
            let from = mine ? at(mine.path, mine.path.len * ease(Math.min(1, delay / mine.dur))) : b0.pos[who];
            let dur = flight(dist(from, dest));
            if (recv && delay + dur < recv.dur) { delay = recv.dur - dur; from = mine ? at(mine.path, mine.path.len * ease(Math.min(1, delay / mine.dur))) : from; dur = flight(dist(from, dest)); }
            acts.push({ t, who, to, ball, path: measure([from, dest]), dur, delay });
            arrive[to] = delay + dur;
            balls[ball] = to;
          } else if (t === 'sh' || t === 'L') {
            const ball = ballOf(balls, who, dg, text);
            const from = pos[who], rim = nearRim(from, full), m = mover(who);
            if (m) delete m.ball;
            acts.push({ t: 'sh', who, ball, path: arc(from, rim, from[0] > 0 ? 0.18 : -0.18), dur: 0.8, delay: Math.max(m ? m.dur : 0, arrive[who] || 0) });
            balls[ball] = '@rim';
          } else if (t === 'r') {
            const live = acts.find(a => a.t === 'sh' && balls[a.ball] === '@rim');
            const ball = live ? live.ball : Object.keys(balls).find(k => balls[k] === '@rim') || 'b' + nb++;
            const rim = nearRim(pos[who], full), m = mover(who);
            const shot = acts.find(a => a.t === 'sh' && a.ball === ball);
            const delay = Math.max(m ? m.dur - 0.7 : 0, shot ? shot.delay + shot.dur : 0);
            acts.push({ t, who, ball, path: arc(rim, pos[who], 0.12), dur: 0.7, delay });
            arrive[who] = delay + 0.7;
            balls[ball] = who;
          } else if (t === 'g') {
            const ball = 'b' + nb++;
            acts.push({ t, who, ball, dur: 0.3, delay: 0 });
            balls[ball] = who;
          }
        }
        acts.forEach(a => { a.delay = a.delay || 0; });
        const dur = Math.max(...acts.map(a => a.delay + a.dur));
        return { acts, dur, start: b0, end: { pos: { ...pos }, balls: { ...balls } } };
      });
      let t0 = 0;
      outBeats.forEach(b => { b.t0 = t0; t0 += b.dur + 0.3; });
      return { text, beats: outBeats, start, dur: Math.max(0, t0 - 0.3), end: { pos: { ...pos }, balls: { ...balls } } };
    });
    return { dg, full, k: full ? 1.3 : 1, ids, steps, notes: dg.n || [], zones: dg.z || [], rings: dg.c || [] };
  }
  function ballOf(balls, who, dg, text) {
    const b = Object.keys(balls).find(k => balls[k] === who);
    if (!b) throw new Error(`${dg.id}: "${who}" has no ball in "${text}"`);
    return b;
  }

  const ease = p => (p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2);

  // Player and ball positions at time t inside a step.
  function frame(model, si, t) {
    const step = model.steps[si], off = [BALL_OFF[0] * model.k, BALL_OFF[1] * model.k];
    const pos = { ...step.start.pos }, ballPos = {}, ballScale = {}, held = {};
    let holders = { ...step.start.balls };
    for (const beat of step.beats) {
      if (t >= beat.t0 + beat.dur) { Object.assign(pos, beat.end.pos); holders = { ...beat.end.balls }; continue; }
      if (t <= beat.t0) break;
      const lt = t - beat.t0;
      for (const a of beat.acts) {
        const p = Math.min(1, Math.max(0, (lt - a.delay) / a.dur));
        if (MOVES.includes(a.t)) pos[a.who] = at(a.path, a.path.len * ease(p));
        if (a.t === 'p' || a.t === 'sh' || a.t === 'r') {
          if (p > 0 && p < 1) {
            const q = at(a.path, a.path.len * p);
            const w = a.t === 'p' ? 1 : a.t === 'sh' ? 1 - p : p; // shots leave the hand, rebounds end in it
            ballPos[a.ball] = [q[0] + off[0] * w, q[1] + off[1] * w];
            ballScale[a.ball] = a.t === 'sh' ? 1 + Math.sin(p * Math.PI) * 0.7 : 1;
          } else if (p >= 1) holders[a.ball] = a.t === 'sh' ? '@rim' : a.t === 'p' ? a.to : a.who;
        }
        if (a.t === 'g') { if (p > 0) { holders[a.ball] = a.who; ballScale[a.ball] = p; } }
      }
      break;
    }
    for (const [b, h] of Object.entries(holders)) {
      if (ballPos[b] || !h || h === '@rim') continue;
      held[h] = held[h] || 0;
      const second = held[h]++ > 0; // a second ball sits on the other hand
      ballPos[b] = [pos[h][0] + (second ? -off[0] : off[0]), pos[h][1] + off[1]];
    }
    return { pos, ballPos, ballScale };
  }

  // --- SVG drawing ---
  const NS = 'http://www.w3.org/2000/svg';
  const f = n => Math.round(n * 100) / 100;
  const d = poly => 'M' + poly.map(p => f(p[0]) + ' ' + f(p[1])).join('L');

  function courtLines(full) {
    const end = flip => {
      const Y = y => (flip ? 94 - y : y);
      return `<rect class="lane" x="-6" y="${flip ? 75 : 0}" width="12" height="19"/>` +
        `<path class="ln" d="M-6 ${Y(0)}V${Y(19)}H6V${Y(0)}"/>` +
        `<path class="ln" d="M-6 ${Y(19)}A6 6 0 0 ${flip ? 1 : 0} 6 ${Y(19)}"/>` +
        `<path class="ln dash" d="M-6 ${Y(19)}A6 6 0 0 ${flip ? 0 : 1} 6 ${Y(19)}"/>` +
        `<path class="ln" d="M19.75 ${Y(0)}V${Y(5.25)}A19.75 19.75 0 0 ${flip ? 0 : 1} -19.75 ${Y(5.25)}V${Y(0)}"/>` +
        `<path class="ln" d="M-6 ${Y(7)}h-.8M6 ${Y(7)}h.8M-6 ${Y(11)}h-.8M6 ${Y(11)}h.8"/>` +
        `<path class="board" d="M-3 ${Y(4)}H3"/><circle class="rim" cx="0" cy="${Y(5.25)}" r=".75"/>`;
    };
    let s = `<rect class="floor" x="-25" y="0" width="50" height="${full ? 94 : 47}"/>` + end(false);
    s += full
      ? `<path class="ln" d="M-25 47H25"/><circle class="ln" cx="0" cy="47" r="6"/>` + end(true)
      : `<path class="ln" d="M-6 47A6 6 0 0 1 6 47"/>`;
    return s + `<rect class="ln edge" x="-25" y="0" width="50" height="${full ? 94 : 47}"/>`;
  }

  function arrowHead(poly, t, k = 1) {
    const n = poly.length, tip = poly[n - 1];
    let j = n - 2;
    while (j > 0 && dist(poly[j], tip) < 0.9) j--;
    const b = poly[j], L = dist(b, tip) || 1, ux = (tip[0] - b[0]) / L, uy = (tip[1] - b[1]) / L;
    if (t === 's') return `M${f(tip[0] - uy * 1.3 * k)} ${f(tip[1] + ux * 1.3 * k)}L${f(tip[0] + uy * 1.3 * k)} ${f(tip[1] - ux * 1.3 * k)}`;
    const h = 1.25 * k, w = 0.7 * k;
    return `M${f(tip[0] - ux * h - uy * w)} ${f(tip[1] - uy * h + ux * w)}L${f(tip[0])} ${f(tip[1])}L${f(tip[0] - ux * h + uy * w)} ${f(tip[1] - uy * h - ux * w)}`;
  }
  function zigzag(path) {
    const out = [], end = path.len - 1.4;
    if (end < 1) return path.poly;
    for (let s = 0, i = 0; s <= end; s += 0.4, i++) {
      const p = at(path, s), q = at(path, s + 0.1), L = dist(p, q) || 1;
      const off = Math.sin(i * Math.PI / 2) * 0.55;
      out.push([p[0] - (q[1] - p[1]) / L * off, p[1] + (q[0] - p[0]) / L * off]);
    }
    out.push(at(path, path.len));
    return out;
  }

  function arrows(model, si) {
    const step = model.steps[si];
    let s = '';
    step.beats.forEach((beat, bi) => beat.acts.forEach(a => {
      if (a.t === 'g') return;
      const who = kind(a.who);
      const team = who === 'x' ? 'def' : who === 'c' ? 'coach' : 'off';
      let path = a.path, cls = `ar ${team} t-${a.t} beat${bi}`;
      const k = model.k;
      if (a.t === 'p') path = trim(a.path, 1.8 * k, 1.9 * k);
      else if (a.t === 'sh' || a.t === 'r') path = trim(a.path, (a.t === 'sh' ? 1.6 : 1) * k, (a.t === 'r' ? 1.8 : 0.9) * k);
      else path = trim(a.path, 1.7 * k, 0);
      const line = a.t === 'd' || a.t === 'L' ? zigzag(path) : path.poly;
      const head = a.t === 'sh' || a.t === 'r' ? '' : `<path class="hd" d="${arrowHead(path.poly, a.t, k)}"/>`;
      s += `<g class="${cls}" data-beat="${bi}"><path class="ln2" d="${d(line)}"/>${head}</g>`;
    }));
    return s;
  }

  function marker(id) {
    const k = kind(id), l = label(id);
    if (k === 'o') return `<circle r="1.6"/><text>${l}</text>`;
    if (k === 'x') return `<path class="xx" d="M-1.15-1.15L1.15 1.15M1.15-1.15L-1.15 1.15"/>${l ? `<text class="sub" x="1.75" y="1.25">${l}</text>` : ''}`;
    if (k === 'c') return `<rect x="-1.6" y="-1.6" width="3.2" height="3.2" rx=".7"/><text>C${l}</text>`;
    if (k === 'k') return '<path d="M0-1.2L1.05 .9H-1.05Z"/>';
    if (k === 'b') return '<circle r=".75"/><path d="M-.75 0H.75M0-.75C.35-.3.35.3 0 .75"/>';
    return '<path d="M-1.1-.2H1.1V1M-1.1-.2V1M-1.1-1.2H1.1"/>';
  }

  function svg(model, opts = {}) {
    const H = model.full ? 94 : 47;
    const vb = `-27.5 -4.5 55 ${H + 9}`;
    let s = `<svg xmlns="${NS}" viewBox="${vb}" class="wb${opts.mini ? ' mini' : ''}${model.full ? ' full' : ''}" role="img" aria-label="${opts.label || 'Drill diagram'}">`;
    s += `<g class="court">${courtLines(model.full)}</g><g class="guides">`;
    for (const z of model.zones) {
      const [a, b] = [pt(z[0]), pt(z[1])];
      s += `<rect class="zone" x="${Math.min(a[0], b[0])}" y="${Math.min(a[1], b[1])}" width="${Math.abs(b[0] - a[0])}" height="${Math.abs(b[1] - a[1])}" rx="1"/>`;
      if (z[2] && !opts.mini) s += `<text class="note" x="${(a[0] + b[0]) / 2}" y="${Math.min(a[1], b[1]) - 0.8}">${z[2]}</text>`;
    }
    for (const c of model.rings) {
      const p = pt(c[0]);
      s += `<clipPath id="cl${opts.uid}"><rect x="-25" y="0" width="50" height="${H}"/></clipPath><circle class="zone ring" clip-path="url(#cl${opts.uid})" cx="${p[0]}" cy="${p[1]}" r="${c[1]}"/>`;
      if (c[2] && !opts.mini) s += `<text class="note" x="${p[0]}" y="${p[1] + c[1] + 1.8}">${c[2]}</text>`;
    }
    if (!opts.mini) for (const n of model.notes) { const p = pt(n[1]); s += `<text class="note" x="${p[0]}" y="${p[1]}">${n[0]}</text>`; }
    s += `</g><g class="arrows">${model.steps.length ? arrows(model, 0) : ''}</g><g class="players">`;
    const st = model.steps[0] ? model.steps[0].start : { pos: {}, balls: {} };
    for (const id of model.ids) {
      const p = st.pos[id] || pt(model.dg.p[id] || model.dg.p[id + '*']);
      s += `<g class="pl k-${kind(id)}" data-id="${id}" transform="translate(${f(p[0])} ${f(p[1])})"><g transform="scale(${model.k})">${marker(id)}</g></g>`;
    }
    s += '</g><g class="balls">';
    const allBalls = new Set();
    model.steps.forEach(st2 => { Object.keys(st2.start.balls).forEach(b => allBalls.add(b)); Object.keys(st2.end.balls).forEach(b => allBalls.add(b)); });
    for (const b of allBalls) s += `<g class="ball" data-b="${b}"><circle r=".72"/><path d="M-.72 0H.72M0-.72C.35-.3.35.3 0 .72"/></g>`;
    return s + '</g></svg>';
  }

  // --- interactive board ---
  const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  let uid = 0;

  function mount(el, dg, opts = {}) {
    const model = build(dg);
    el.innerHTML = svg(model, { ...opts, uid: ++uid });
    const root = el.querySelector('svg');
    const players = {}, ballsEl = {};
    root.querySelectorAll('.pl').forEach(g => { players[g.dataset.id] = g; });
    root.querySelectorAll('.ball').forEach(g => { ballsEl[g.dataset.b] = g; });
    const arrowsG = root.querySelector('.arrows');
    let si = 0, t = 0, raf = 0, playing = false, hold = 0, last = 0, dead = false;
    const speed = () => (opts.speed ? opts.speed() : 1);

    function paint() {
      if (!model.steps.length) return;
      const fr = frame(model, si, t);
      for (const id in players) { const p = fr.pos[id]; if (p) players[id].setAttribute('transform', `translate(${f(p[0])} ${f(p[1])})`); }
      for (const b in ballsEl) {
        const p = fr.ballPos[b];
        ballsEl[b].style.display = p ? '' : 'none';
        if (p) ballsEl[b].setAttribute('transform', `translate(${f(p[0])} ${f(p[1])}) scale(${f((fr.ballScale[b] ?? 1) * model.k)})`);
      }
      const step = model.steps[si];
      arrowsG.querySelectorAll('[data-beat]').forEach(g => {
        const beat = step.beats[+g.dataset.beat];
        g.classList.toggle('done', t >= beat.t0 + beat.dur && t > 0);
        g.classList.toggle('live', t > beat.t0 && t < beat.t0 + beat.dur);
      });
    }
    function go(i, at0 = 0) {
      si = Math.max(0, Math.min(model.steps.length - 1, i));
      t = at0;
      arrowsG.innerHTML = arrows(model, si);
      arrowsG.classList.remove('fade'); void arrowsG.offsetWidth; arrowsG.classList.add('fade');
      paint();
      opts.onStep && opts.onStep(si, playing);
    }
    function tick(now) {
      const dt = Math.min(0.1, (now - last) / 1000) * speed();
      last = now;
      const step = model.steps[si];
      if (hold > 0) {
        hold -= dt;
        if (hold <= 0) {
          if (si < model.steps.length - 1) go(si + 1);
          else if (opts.loop) go(0);
          else { stop(); return; }
          hold = -0.5; // short look at the new arrows before anyone moves
        }
      } else if (hold < 0) {
        hold = Math.min(0, hold + dt);
      } else {
        t = reduced() ? step.dur : Math.min(step.dur, t + dt);
        paint();
        const read = Math.max(1.1, step.text.length / 30 - step.dur * 0.5);
        if (t >= step.dur) hold = reduced() ? Math.max(2.2, read) : si === model.steps.length - 1 ? Math.max(2, read) : read;
      }
      raf = requestAnimationFrame(tick);
    }
    function play(fresh) {
      if (dead || !model.steps.length) return;
      if (!fresh && si === model.steps.length - 1 && t >= model.steps[si].dur) go(0);
      playing = true; hold = t === 0 ? -0.4 : 0; last = performance.now();
      cancelAnimationFrame(raf); raf = requestAnimationFrame(tick);
      opts.onStep && opts.onStep(si, true);
    }
    function stop() {
      playing = false; cancelAnimationFrame(raf);
      opts.onStep && opts.onStep(si, false);
    }
    go(0);
    return {
      model, play, pause: stop, go: i => { const was = playing; stop(); go(i); if (was) play(true); },
      get playing() { return playing; }, get step() { return si; },
      destroy() { dead = true; playing = false; cancelAnimationFrame(raf); },
    };
  }

  function thumb(dg) {
    try { return svg(build(dg), { mini: true, uid: ++uid }); } catch (e) { return ''; }
  }

  function blank(full) {
    return `<svg xmlns="${NS}" viewBox="-27.5 -4.5 55 ${(full ? 94 : 47) + 9}" class="wb"><g class="court">${courtLines(full)}</g></svg>`;
  }

  return { build, frame, mount, thumb, blank, pt, SPOTS };
})();
if (typeof module !== 'undefined') module.exports = Court;
