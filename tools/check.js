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
console.log(errors ? `\n${errors} problem(s)` : `All ${Object.keys(DIAGRAMS).length} diagrams OK`);
process.exit(errors ? 1 : 0);
