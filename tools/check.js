// Self-check: every drill has a diagram that builds, and every frame stays on the board.
// Run: node tools/check.js
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const load = f => fs.readFileSync(path.join(root, f), 'utf8');

global.Court = eval(load('js/court.js') + ';Court');
eval(load('js/data.js') + ';global.DATA = DATA');
eval(load('js/drills-college.js'));
eval(load('js/plays.js'));
eval(load('js/sets.js'));
eval(load('js/program.js'));
global.DIAGRAMS = {};
for (const f of fs.readdirSync(path.join(root, 'js')).filter(f => /^diagrams-\d+\.js$/.test(f)).sort()) {
  eval(load('js/' + f).replace('const DIAGRAMS = {};', ''));
}

let errors = 0;
const fail = msg => { errors++; console.error('✗ ' + msg); };
const ids = new Set(DATA.drills.map(d => d.id));
for (const id of ids) if (!DIAGRAMS[id]) fail(`${id}: no diagram`);
for (const id of Object.keys(DIAGRAMS)) if (!ids.has(id)) fail(`${id}: diagram for a drill that is not in the library`);

for (const [id, dg] of Object.entries(DIAGRAMS)) {
  let model;
  try { model = Court.build({ ...dg, id }); } catch (e) { fail(e.message); continue; }
  if (!model.steps.length) fail(`${id}: no steps`);
  const H = model.full ? 94 : 47;
  model.steps.forEach((st, si) => {
    if (!st.text || st.text.length > 170) fail(`${id} step ${si + 1}: caption missing or too long (${st.text.length})`);
    for (let t = 0; t <= st.dur + 0.01; t += 0.1) {
      const fr = Court.frame(model, si, t);
      for (const [p, [x, y]] of Object.entries(fr.pos)) {
        if (!isFinite(x) || !isFinite(y)) { fail(`${id} step ${si + 1}: ${p} position is not a number`); return; }
        if (x < -27.5 || x > 27.5 || y < -4.5 || y > H + 4.5) { fail(`${id} step ${si + 1}: ${p} leaves the board at (${x.toFixed(1)}, ${y.toFixed(1)})`); return; }
      }
    }
  });
  // two markers parked on the same spot read as one player
  const start = model.steps[0] ? model.steps[0].start.pos : {};
  const list = Object.entries(start);
  for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
    const [a, p] = list[i], [b, q] = list[j];
    if (Math.hypot(p[0] - q[0], p[1] - q[1]) < 2.2) fail(`${id}: ${a} and ${b} start on top of each other`);
  }
}

// ---------- the Lake program (js/program.js) ----------
const P = DATA.program;
for (const id of P.missing) fail(`program.js patches ${id}, which is not in the library`);
const refs = [];
const walk = (o, where) => {
  if (Array.isArray(o)) o.forEach(x => walk(x, where));
  else if (o && typeof o === 'object') {
    for (const [k, v] of Object.entries(o)) {
      if (k === 'drills' && Array.isArray(v)) v.forEach(id => refs.push([id, where]));
      else if (k === 'play' && typeof v === 'string') refs.push([v, where]);
      else walk(v, where);
    }
  }
};
walk(P, 'program notes'); walk(DATA.defense, 'defense notes'); walk(DATA.plays, 'offense notes'); walk(DATA.positions, 'guards & posts notes');
DATA.templates.forEach(t => t.items.forEach(id => refs.push([id, `template "${t.name}"`])));
DATA.drills.forEach(d => (d.drills || []).forEach(id => refs.push([id, d.id])));
refs.push([P.switchDrill, 'switch reads']);
for (const [id, where] of refs) if (!ids.has(id)) fail(`${where} links ${id}, which is not in the library`);

const BOOKCATS = new Set(DATA.groups.find(g => g.id === 'plays').cats);
for (const d of DATA.drills) {
  if (BOOKCATS.has(d.cat)) {
    if (!P.LADDER.includes(d.from)) fail(`${d.id}: from must be one of ${P.LADDER.join(', ')}`);
    if (d.cat === 'PL' && !P.TYPES.includes(d.type)) fail(`${d.id}: type must be one of ${P.TYPES.join(', ')}`);
  }
  for (const v of d.values || []) if (!P.VALUES.includes(v)) fail(`${d.id}: "${v}" is not one of the six values`);
  if (d.candidate) for (const team of P.LADDER) if (DATA.runsHere(d, team, {})) fail(`${d.id}: a candidate is in Our Package without the coach switching it on`);
}
for (const c of P.calls) if (!P.LADDER.includes(P.fromOf(c))) fail(`call ${c.code}: from must be one of ${P.LADDER.join(', ')}`);
for (let i = 1; i <= 11; i++) {
  const d = DATA.drills.find(x => x.id === 'PL-' + String(i).padStart(2, '0'));
  if (!d || P.LADDER.indexOf(d.from) > P.LADDER.indexOf('8')) fail(`PL-${String(i).padStart(2, '0')}: the Base 10 run at 8th grade or lower`);
}
const decodes = { 1: ['man'], 0: ['soft man'], 13: ['man run and jump', 'three-quarter court'], 14: ['centerfield', 'full court'],
  231: ['2-1-2 trap', 'three-quarter court', 'man'], 342: ['1-2-2 trap', 'full court', '2-3 zone'] };
for (const [code, want] of Object.entries(decodes)) {
  const got = (DATA.decodeCall(code) || '').toLowerCase();
  for (const w of want) if (!got.includes(w)) fail(`decodeCall("${code}") should mention "${w}" (got "${got}")`);
}
if (DATA.decodeCall('999') !== null) fail('decodeCall("999") should be null');
console.log(errors ? `\n${errors} problem(s)` : `All ${Object.keys(DIAGRAMS).length} diagrams OK`);
process.exit(errors ? 1 : 0);
