// The Lake Flyers program (Lake High School, 2026-27): the staff's words, the defensive number system and call words,
// the "Runs at" ladder (7th, 8th, Freshman, JV, Varsity), and every Lake change to the library.
// Loaded after sets.js and before court.js. js/data.js is rebuilt from the spreadsheet by tools/import_xlsx.py,
// so spreadsheet content is never edited there: it is patched here at load time and a re-import can't undo it.
(() => {
  const LADDER = ['7', '8', 'F', 'JV', 'V'];
  const LEVEL_NAMES = { 7: '7th', 8: '8th', F: 'Freshman', JV: 'JV', V: 'Varsity' };
  const TYPES = ['transition', 'secondary', 'motion', 'set', 'counter', 'quick hitter', 'delay'];
  const VALUES = ['Effort', 'Communication', 'Intelligence', 'Toughness', 'Teammate', 'Edge'];
  const byId = id => DATA.drills.find(d => d.id === id);
  const missing = []; // ids patched or linked here that are not in the library (tools/check.js fails on any)
  const patch = (id, fields) => { const d = byId(id); if (d) Object.assign(d, fields); else missing.push(id); };

  // ---------- categories ----------
  DATA.cats.PL = 'Lake Offense';
  DATA.cats.ZN = 'Half-Court D (1, 0, 2, 3, 4)';
  DATA.cats.PR = 'Full-Court D (13, 14, 20s, 30s)';
  DATA.cats.LB = 'Lake Breakdowns';
  DATA.cats.LM = 'Lake Mentality';
  DATA.cats.OL = 'Other Looks (not in the Lake package)';
  const group = id => DATA.groups.find(g => g.id === id);
  group('team').cats.push('LB', 'OL');
  group('compete').cats.push('LM');
  const BOOK = group('plays');
  BOOK.cats = ['PL', 'OB', 'ZN', 'PR'];

  // Presses that are not in our package keep their ids (saved plans use them) but leave the Playbook.
  ['PR-01', 'PR-02', 'PR-03'].forEach(id => patch(id, { cat: 'OL', lake: 'Not in the Lake package. Our full-court defenses are 13, 14, the 20 series and the 30 series.' }));

  // ---------- the Base 10 (the HS staff's whiteboard plays) and our OB plays ----------
  const BASE = { 'PL-01': 'quick hitter', 'PL-02': 'secondary', 'PL-03': 'set', 'PL-04': 'quick hitter', 'PL-05': 'quick hitter', 'PL-06': 'set',
    'PL-07': 'set', 'PL-08': 'set', 'PL-09': 'counter', 'PL-10': 'set', 'PL-11': 'set' };
  Object.entries(BASE).forEach(([id, type]) => patch(id, { type, from: '8', confirm: true }));
  for (let i = 1; i <= 12; i++) patch('OB-' + String(i).padStart(2, '0'), { from: '8', confirm: true });

  // ---------- the program, in the staff's words ----------
  DATA.program = {
    LADDER, LEVEL_NAMES, TYPES, VALUES, missing,
    motto: 'Communication + Intelligence + Effort = Non-Negotiables',
    philosophies: ['The season is the war; each game is a battle.', 'Fatigue makes cowards out of all of us.', 'Smart teams win, dumb teams lose.', 'Be the hammer, not the nail.'],
    coreValues: ['Truth', 'Humility', 'Accountability', 'Respect', 'Toughness'],
    bbValues: ['Dominate effort plays', 'Be a great teammate', 'Play with an edge', 'Dictate how the game should be played'],
    staffNotes: ['Every coach should reserve the right to have 4-5 things to go nuts on.', 'How we play, not who we play.', '"Going to war! Each game is a battle."'],
    defPhilosophy: 'If we\'re going to be successful we must play GREAT defense: very intense, physical, passionate and selfless. Make the offense uncomfortable. The keys for man or zone: communication, ball pressure, teamwork, relentless effort and rebounding. A defensive possession is not complete until we secure the ball. Good defense also creates offense. Take pride in the defensive end.',
    absolutes: [
      { t: 'NO dribble penetration', drills: ['LB-01', 'TD-05', 'PD-06', 'TD-02'] },
      { t: 'Keep the ball out of the paint', drills: ['LB-01', 'TD-05', 'TD-01', 'LB-04'] },
      { t: 'COMMUNICATE', drills: ['LM-03', 'LB-02', 'LB-03', 'TD-01'] },
      { t: 'Play as hard as possible', drills: ['LM-02', 'CD-03', 'LM-01', 'RB-06'] },
    ],
    keys: [
      { t: 'Play without fouling', drills: ['PD-06', 'TD-08', 'PD-11'] },
      { t: 'NO 2nd shots', drills: ['RB-06', 'RB-02', 'RB-05', 'LB-06'] },
      { t: 'NO fast-break layups', drills: ['LB-06', 'TR-22', 'TR-09', 'TR-08'] },
      { t: 'Move when the ball moves (on and off the ball; jump to the ball)', drills: ['LB-01', 'TD-01', 'TD-03'] },
      { t: 'NO baseline drives', drills: ['LB-04', 'PD-06', 'PD-03', 'TD-02'] },
      { t: 'Make them shoot contested mid-range jumpers', drills: ['LB-04', 'PD-23', 'TD-05'] },
      { t: 'Work as a UNIT', drills: ['TD-01', 'LB-03', 'TD-04'] },
      { t: 'Be first to the floor for a loose ball', drills: ['LM-01', 'CD-03'] },
      { t: 'Win 50/50 balls', drills: ['LM-01', 'LM-02', 'CD-03'] },
      { t: 'BE PHYSICAL', drills: ['RB-06', 'PD-22', 'LM-01'] },
      { t: 'Create chaos', drills: ['LM-06', 'PR-04', 'TD-10'] },
      { t: 'Be solid', drills: ['LB-01', 'TD-04', 'LB-05'] },
    ],
    musts: [
      { t: 'Value possessions', drills: ['LM-05', 'TO-05', 'SP-22'] },
      { t: 'Impose ourselves', drills: ['LB-08', 'PL-12', 'FC-01'] },
      { t: 'Share the ball ("One more")', drills: ['PA-22', 'LM-05', 'TO-05'] },
      { t: 'Play to your strengths: fair is not equal', drills: ['TO-04', 'PL-15'] },
    ],
    emphasis: [
      { t: 'Offensive efficiency', text: 'Run and read in transition: fast, but not at the expense of bad shots.', drills: ['LB-08', 'PL-12', 'TR-03'] },
      { t: 'Balance', text: 'Offense and defense: dictate our ability on others.', drills: ['LB-06', 'TR-08'] },
      { t: 'Shot selection', text: 'Good shot vs. bad shot.', drills: ['LM-05', 'TO-05'] },
    ],
    structure: {
      text: 'Transition, Secondary, Motion, then a Set or Quick Hitter if needed (Delays exist at higher levels). It is personnel based. Each level finds one set, one motion and one quick hitter.',
      steps: [
        { t: 'Transition', text: 'Run the lanes and read: numbers, attack.', drills: ['PL-12', 'LB-08'] },
        { t: 'Secondary', text: 'No numbers: flow into Push without stopping.', drills: ['PL-02', 'LB-08'] },
        { t: 'Motion', text: '4-out 1-in for now.', drills: ['PL-13', 'TO-21', 'TO-02'] },
        { t: 'Set or Quick Hitter', text: 'Only when needed: one of the Base 10.', drills: ['TO-04', 'LB-08'] },
      ],
    },
    oreb: { t: 'Offensive rebounding: never 5, maybe 4, minimum 3 crash. The shooter gets back. When only 3 crash, the 1 is the second safety.', drills: ['LB-06', 'RB-06'], confirm: true },
  };
  const P = DATA.program;
  P.sayings = [P.motto, ...P.philosophies, ...P.coreValues, ...P.bbValues, ...P.musts.map(x => x.t), ...P.absolutes.map(x => x.t)];
  P.our5Options = [
    ...P.absolutes.map(x => ({ t: x.t, kind: 'Absolute' })), ...P.keys.map(x => ({ t: x.t, kind: 'Key' })),
    ...P.musts.map(x => ({ t: x.t, kind: 'Must' })), ...P.coreValues.map(t => ({ t, kind: 'Core value' })), ...P.bbValues.map(t => ({ t, kind: 'Basketball value' })),
  ];

  // ---------- number system and call words ----------
  // kind: number (half court), full (full/three-quarter court), example (a staff example call), call, special.
  // play = the Playbook entry that draws it; its "Runs at" comes from that entry.
  P.calls = [
    { code: '1', kind: 'number', play: 'ZN-04', text: 'Man. Pack line, switch all screens, ball pressure, NO free cutters, help.' },
    { code: '0', kind: 'number', play: 'ZN-05', text: 'Soft man. NO feet outside the arc. NO penetration. Same principles as 1, without ball pressure.' },
    { code: '2', kind: 'number', play: 'ZN-01', text: '2-3 zone (traditional). The top two guard the top and wing and help on the high post, with help from the bottom man. The bottom block defenders have the corners. The middle man has block to block, and the high post when needed.' },
    { code: '3', kind: 'number', play: 'ZN-03', text: '3-2 zone. Flat across the top. The point and elbow players are wide and match up when they can. The bottom block defenders guard the corners and give backside post help. The ball-side block is guarded by the point man.' },
    { code: '4', kind: 'number', play: 'ZN-02', text: '1-3-1 zone (traditional). The point man guards side to side. The wings guard the wings and have backside help. The middle man runs the triangle from the nail to the block. The bottom man has the corners.' },
    { code: '13', kind: 'full', play: 'PR-04', text: 'Man run and jump. Play behind your man and let it in. Extreme pressure on the ball. Jump from the back side and rotate. Keep the ball in front of you. Zig-zag.' },
    { code: '14', kind: 'full', play: 'PR-05', text: 'Centerfield. Same as 13, but no one on the inbounder: deny every inbound pass.' },
    ...['231', '232', '233', '221'].map(code => ({ code, kind: 'example', play: 'PR-06' })),
    ...['341', '342', '343', '323'].map(code => ({ code, kind: 'example', play: 'PR-07' })),
    { code: 'YOYO', kind: 'call', from: '8', text: 'You\'re on your own. This man doesn\'t switch off his man in 1.', drills: ['LB-03', 'TD-22'] },
    { code: 'THUMBS DOWN', kind: 'call', from: 'V', text: 'Trap the first pass; take the next pass away with rotation from the back side.', drills: ['TD-08', 'TD-09'] },
    { code: 'FOLD', kind: 'call', from: 'V', text: 'Soft press. Retreat on every pass. Control the tempo.', drills: ['PR-04', 'TR-09'] },
    { code: 'BLUE', kind: 'call', from: 'V', confirm: true, text: 'Change defense after the first pass: change into the half-court defense in the call\'s last digit, or the one the coach calls.', drills: ['LB-05'] },
    { code: 'RED', kind: 'call', from: '7', text: 'Foul.', drills: ['SP-03'] },
    { code: 'BLITZ', kind: 'call', from: 'V', text: 'Trap ball screens. (Our default is switch.)', drills: ['TD-24'] },
    { code: 'HEDGE', kind: 'call', from: 'V', text: 'Traditional ball-screen defense. High and hard, stay flat, no seam, go over the top, make the ball handler go sideways.', drills: ['SS-09', 'SS-10'] },
    { code: 'ICE', kind: 'call', from: 'V', text: 'The screener\'s man stays in the key. The ball defender turns and doesn\'t let the screen be used. Force him to the help.', drills: ['SS-09', 'SS-10'] },
    { code: 'FULL DENY', kind: 'special', from: 'V', text: '1 with a full deny of one player: his defender has no help responsibilities. Only when the scouting report warrants it.', drills: ['TD-06', 'PD-09'] },
    { code: 'BOX-AND-1', kind: 'special', from: 'V', text: 'Four in a box zone, one man chases their best player. Only when the scouting report warrants it.', drills: ['TD-07'] },
    { code: 'DIAMOND-AND-1', kind: 'special', from: 'V', text: 'Four in a diamond zone, one man chases their best player. Only when the scouting report warrants it.', drills: ['TD-07'] },
    { code: 'TRIANGLE-AND-2', kind: 'special', from: 'V', text: 'Three in a triangle zone, two men chase their two best players. Only when the scouting report warrants it.', drills: ['TD-07'] },
  ];

  // ---------- reading a call ----------
  const HALF = { 0: '0 · Soft Man', 1: '1 · Man', 2: '2 · 2-3 Zone', 3: '3 · 3-2 Zone', 4: '4 · 1-3-1 Zone' };
  const COURT = { 4: 'full court', 3: 'three-quarter court', 2: 'half court' };
  const SERIES = { 2: '2-1-2 trap', 3: '1-2-2 trap' };
  // "231" -> "2-1-2 trap at three-quarter court, then 1 · Man". Unknown codes return null; never throws.
  DATA.decodeCall = code => {
    try {
      const c = String(code == null ? '' : code).trim().toUpperCase();
      if (/^[0-4]$/.test(c)) return HALF[c];
      if (c === '13') return 'Man run and jump at three-quarter court, then 1 · Man';
      if (c === '14') return 'Centerfield: man at full court, deny every inbound pass, then 1 · Man';
      const m = /^([23])([234])([0-4])$/.exec(c);
      if (m) return `${SERIES[m[1]]} at ${COURT[m[2]]}, then ${HALF[m[3]]}`;
      const call = P.calls.find(x => x.code === c && x.text);
      return call ? call.text : null;
    } catch (e) { return null; }
  };

  // ---------- the "Runs at" ladder ----------
  // An item runs for our team when the coach switched it on ("We run this"), or when it is not a candidate and
  // the lowest level that runs it is at or below our team. runs = state.runs (overrides keyed by item id).
  const fromOf = item => item.from || (item.play && (byId(item.play) || {}).from) || null;
  P.fromOf = fromOf;
  P.keyOf = item => item.play || item.id || 'call:' + item.code;
  DATA.runsHere = (item, team, runs) => {
    const key = P.keyOf(item);
    if (runs && Object.prototype.hasOwnProperty.call(runs, key)) return !!runs[key];
    const from = fromOf(item);
    if (item.candidate || !from) return false;
    return LADDER.indexOf(from) <= LADDER.indexOf(team || '8');
  };
})();
