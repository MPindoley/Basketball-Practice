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

  // ---------- defense numbers (half court and full court) ----------
  DATA.drills.push(
    {"id": "ZN-04", "cat": "ZN", "name": "1 · Man: Pack Line, Switch Everything", "min": 10, "level": "Foundation", "players": "5 defenders vs a 5-player scout team, half court", "setup": "Our base defense. Scout team in a 4-out 1-in: 1 at the top, 2 and 3 on the wings, 4 in the left corner, 5 on the right block. x1 is on the ball. Everyone off the ball is on or inside the 16-foot pack line.", "runs": "On the ball: good stance, nose on the ball, an arm's length away at most. Force the weak hand when you can, never baseline, and make him drive into a crowd. Keep the ball in front of you. Off the ball: always on or inside the 16-foot line, flat, with at least one foot in the lane on the back side. Nobody denies one pass away: let the catch happen. Move on every pass and jump to the ball. On a drive, stay square and wall up, thumbs in the ears. The helper makes the driver pick it up, then recovers when two hands go to the ball. Close out under control to a 2, 2½ or 3. Post: arm and leg in front, high side; step over, not under. Switch ALL screens: ball screens, off-ball screens and handoffs. Talk early, come together shoulder to shoulder and receive the new man. No splits. If a switch leaves a guard on a big, he plays post D: arm and leg in front, high side. Bust every cutter: no face cuts. The possession isn't over until we secure the ball.", "points": ["Off the ball: on or inside 16 feet. No denial", "Jump to the ball on every pass", "Wall up, thumbs in the ears; make him pick it up", "Switch every screen: talk early, receive the new man"], "ms": "This is the base, so it comes first at every level. Teach it in pieces: Pack Line Shell (LB-01) for the help, Closeout Ladder (LB-04) for closeouts, then Switch It (LB-02) and 3v3 Switch All (LB-03) for screens. Denying is only for the FULL DENY special. YOYO tells one player not to switch off his man.", "source": "Lake staff program", "from": "7", "num": "1", "drills": ["LB-01", "LB-04", "LB-02", "LB-03", "TD-05"]},
    {"id": "ZN-05", "cat": "ZN", "name": "0 · Soft Man", "min": 8, "level": "Foundation", "players": "5 defenders vs a 5-player scout team, half court", "setup": "Same scout set as 1: 1 at the top, 2 and 3 on the wings, 4 in the left corner, 5 on the right block. x1 meets the ball at the 3-point arc, not outside it. Everyone else is on or inside the pack line.", "runs": "0 is 1 without ball pressure. NO feet outside the arc: the on-ball defender picks the ball up at the arc and closes out only as far as the arc. NO penetration: use the cushion to beat the driver to his spot, and the helper walls up so he has to pick it up or pass it out. Everything else is 1: pack line help, jump to the ball on every pass, a foot in the lane on the back side, never give up the baseline, switch every screen and receive, bust every cutter. On the shot, hit and go. The possession isn't over until we secure the ball.", "points": ["No feet outside the arc", "NO penetration: beat him to the spot", "Same rules as 1: pack line, jump to the ball, switch everything", "Hit and go: secure the ball"], "ms": "Add 0 once 1 is solid. It is the same defense with one change, so teach it inside Pack Line Shell (LB-01): call \"0\" and the on-ball defender backs off to the arc. Then call it from a dead ball in Number Call Shell (LB-05). When to play 0 is the coach's call, for example against a team that can't shoot from deep.", "source": "Lake staff program", "from": "8", "num": "0", "drills": ["LB-01", "LB-05"]},
    {"id": "PR-04", "cat": "PR", "players": "5 defenders vs a 5-player scout team, full court", "source": "Lake staff program", "confirm": true, "name": "13 · Man Run & Jump", "min": 10, "level": "Intermediate", "setup": "After we score. Man-to-man, picked up at three-quarter court (about the top of the key where they inbound). x4 is on the inbounder. Everyone else plays behind his man, between him and the basket we defend.", "runs": "Let the inbound in. Meet the catch with extreme pressure on the ball: nose on the ball, active hands, and keep the ball in front of you. Zig-zag him: beat him to the spot and turn him every few dribbles. Off the ball, sag to the middle and see the ball. When the dribbler turns back to the middle, the back-side defender jumps out in front of him and the old ball defender runs to the jumper's man. It's a switch: receive it. Everyone else rotates to the nearest open man. Once the ball crosses half court we're in 1: pack line, switch every screen.", "points": ["Play behind your man and let it in", "Extreme ball pressure, but keep the ball in front of you", "Zig-zag: beat him to the spot and turn him", "Jump from the back side and rotate: receive the switch"], "ms": "This is our 8th grade press. Teach the zig-zag first (PD-02), then 1v1 full court (BH-08). Next, teach the jump and switch 2v2 in the backcourt. Then go 5v5. LM-06 Chaos Game is played in 13.", "from": "8", "num": "13", "drills": ["PD-02", "BH-08", "LM-06"]},
    {"id": "PR-05", "cat": "PR", "players": "5 defenders vs a 5-player scout team, full court", "source": "Lake staff program", "confirm": true, "name": "14 · Centerfield", "min": 8, "level": "Advanced", "setup": "After we score. Man-to-man, picked up at full court. Nobody guards the inbounder: his man (x4 here) plays centerfield, in the middle of the floor. The other four deny their men.", "runs": "Deny every inbound pass: stay between your man and the ball, see the ball, hand in the passing lane. Anything thrown over the top belongs to centerfield: read the inbounder's eyes and go get it. A 5-second call is a win. If they get it in, it's 13: extreme pressure on the ball, zig-zag, keep the ball in front, jump from the back side and rotate. Centerfield sprints back and picks up the inbounder when he steps in. Once the ball crosses half court we're in 1.", "points": ["Nobody on the inbounder: deny every inbound pass", "Centerfield owns every lob: read the inbounder's eyes", "Ball in? Play 13", "Over half court: we're in 1"], "ms": "Varsity install. Learn 13 first: 14 is 13 with a full deny on the inbound. Work the deny with PA-07 (the scout player works to get open, our defender denies), then add the centerfielder and go 5v5.", "from": "V", "num": "14", "drills": ["PR-04", "PA-07", "TD-10"]},
    {"id": "PR-06", "cat": "PR", "players": "5 defenders vs a 5-player scout team, full court", "source": "Lake staff program", "confirm": true, "name": "20 Series · 2-1-2 Trap", "min": 10, "level": "Advanced", "setup": "Three-digit call. First digit 2 = the 2-1-2 trap. Second digit = where we pick up: 4 full court, 3 three-quarter court, 2 half court. Third digit = the half-court defense we fall into. Front two (x1, x2), a middle man (x3), back two (x4, x5). The diagram shows 231.", "runs": "Read the call: 231 = 2-1-2 trap at three-quarter court, then 1 · Man. 232 = 2-1-2 trap at three-quarter court, then 2 · 2-3 Zone. 233 = 2-1-2 trap at three-quarter court, then 3 · 3-2 Zone. 221 = 2-1-2 trap at half court, then 1 · Man. Nobody guards the inbounder: let it in. The ball-side front man turns the ball up the sideline and the other front man closes the trap. The middle man takes away the middle, the ball-side back man takes the sideline pass, and the far back man protects the rim. On a pass out of the trap, move on the flight of the ball: the nearest man sprints to the new ball and we keep it out of the middle. Once the ball crosses half court, get into the last digit. If the trap is broken, sprint to the paint and stop the ball first.", "points": ["Read it: the defense, where we pick up, then our half-court D", "Trap: feet together, NO splits", "Mirror the ball with your hands. NO fouls: don't bail them out", "Over half court: sprint into the last digit"], "ms": "Varsity install. Middle school learns the language now: call 231, 232, 233 or 221 in LB-05 and have players tell you where we pick up and what we fall into. Teach the trap 2v1 with TD-08 using our trap rules, and the sprint out of the trap with TD-09.", "from": "V", "num": "20s", "drills": ["TD-08", "TD-09", "LB-05", "TD-10"]},
    {"id": "PR-07", "cat": "PR", "players": "5 defenders vs a 5-player scout team, full court", "source": "Lake staff program", "confirm": true, "name": "30 Series · 1-2-2 Trap", "min": 10, "level": "Advanced", "setup": "Three-digit call. First digit 3 = the 1-2-2 trap. Second digit = where we pick up: 4 full court, 3 three-quarter court, 2 half court. Third digit = the half-court defense we fall into. One man up front (x1), two wings (x2, x3), back two (x4, x5). At full court x1 is on the inbounder. The diagram shows 342.", "runs": "Read the call: 341 = 1-2-2 trap at full court, then 1 · Man. 342 = 1-2-2 trap at full court, then 2 · 2-3 Zone. 343 = 1-2-2 trap at full court, then 3 · 3-2 Zone. 323 = 1-2-2 trap at half court, then 3 · 3-2 Zone. x1 takes away the middle so the ball goes to the side. The ball-side wing stops the ball on the sideline and x1 closes the trap. The far wing takes away the middle, the ball-side back man takes the sideline pass, and the far back man protects the rim. On a pass out of the trap, move on the flight of the ball: the ball-side back man stops the ball and the trappers sprint back. Once the ball crosses half court, get into the last digit. If the trap is broken, sprint to the paint and stop the ball first.", "points": ["Read it: the defense, where we pick up, then our half-court D", "Trap: feet together, NO splits", "Mirror the ball with your hands. NO fouls: don't bail them out", "Over half court: sprint into the last digit"], "ms": "Varsity install. Same trap rules as the 20 series. Middle school learns the language now: call 341, 342, 343 or 323 in LB-05 and have players tell you where we pick up and what we fall into. Teach the trap with TD-08 and the sprint out of the trap with TD-09.", "from": "V", "num": "30s", "drills": ["TD-08", "TD-09", "LB-05", "TD-10"]},
  );
  patch('ZN-01', {"name": "2 · 2-3 Zone", "from": "8", "num": "2", "setup": "The top two, x1 and x2, at the elbows. The bottom block defenders, x3 and x4, a step outside the blocks. The middle man, x5, in the middle of the lane. Scout team in a 1-3-1: 1 at the top, 2 and 3 on the wings, 4 at the high post, 5 in the right corner.", "runs": "2 is a traditional 2-3. Staff rules: the top two guard the top and the wing and help on the high post, with help from the bottom man. The bottom block defenders have the corners. The middle man has block to block, and the high post when needed. Move on the flight of every pass, arms wide, and talk. High post: x5 steps up to it and x3 and x4 pinch in. Wing: the ball-side top man takes the ball, the other top man drops to the high post, x5 and the ball-side bottom man slide over, and the far bottom man sits in the lane. Corner: the ball-side bottom man takes the corner without giving up the baseline, x5 beats the ball to the ball-side block, the ball-side top man takes away the pass back to the wing, and the other top man has the high post. Skip to the far wing: the far bottom man runs out until the top man gets there, then drops back to his block. On a shot, x3, x5 and x4 box out the left, middle and right of the rim, and the top two find the nearest body. The possession isn't over until we secure the ball.", "points": ["Top two: the top and the wing, help on the high post", "Bottom two: the corners, never the baseline", "Middle man: block to block, the high post when needed", "Move on the flight of the pass; on the shot, everyone finds a body"], "ms": "2 is our change-up from 1, and it is traditional: no traps. Walk the slides 5v0 with Zone Slides (TD-07), calling every pass out loud, then let the scout team attack it with TO-03. Practice getting into it from a dead ball in Number Call Shell (LB-05).", "source": "Lake staff program; slides adapted from Coach's Clipboard: 2-3 Zone Defense", "drills": ["TD-07", "TO-03", "LB-05"]});
  patch('ZN-02', {"name": "4 · 1-3-1 Zone", "from": "V", "num": "4", "setup": "x1, the point man, at the top. The wing men, x2 and x3, near the arc at the free-throw line extended. x5, the middle man, at the nail in front of the high post. x4, the bottom man, in the lane. Same scout set: 1 at the top, 2 and 3 on the wings, 4 at the high post, 5 in the right corner.", "runs": "4 is a traditional 1-3-1: no traps. Staff rules: the point man guards side to side. The wing men guard the wings and have backside help. The middle man runs the normal triangle from the nail to the block. The bottom man has the corners. Move on the flight of every pass. Wing: the ball-side wing takes the ball, x1 cuts off the pass back to the top, x4 slides toward the corner, and the far wing drops to the far block. Corner: x4 takes it without giving up the baseline, the ball-side wing sinks inside, x5 fronts the ball-side block and x1 drops to the high post. Skip: the far wing comes out (take away the pass to the corner first, then close out), x4 sprints the baseline to the ball side, x5 crosses to the ball-side block and the old ball-side wing drops to the far block. High post: x1 drops in to bother him, x5 gets between the ball and the rim, x4 gets back to the middle. On a shot everyone finds a body: x4 and x5 inside, x1 and the far wing on the weak side, where long rebounds land.", "points": ["Point man: side to side; cut off the pass back to the top", "Wings: take your wing; ball away, give backside help", "Middle man: the triangle, nail to block", "Bottom man: the corners, never the baseline"], "ms": "Varsity package until the head coach moves it down. It is the traditional 1-3-1: the trapping 1-3-1 (PR-03) is not in our package. Put your quickest, smartest player at the bottom and your best post defender in the middle. Teach the slides with Zone Slides (TD-07), then let the scout team attack it with TO-03 from a 1-3-1 and a 2-1-2.", "source": "Lake staff program; slides adapted from Basketball For Coaches: 1-3-1 Zone Defense", "drills": ["TD-07", "TO-03"]});
  patch('ZN-03', {"name": "3 · 3-2 Zone", "from": "V", "num": "3", "confirm": true, "setup": "Flat across the top: x1, the point man, at the top of the key, and x2 and x3, the elbow players, wide at the free-throw line extended. x4 and x5 on the blocks. Scout team in a 1-3-1: 1 at the top, 2 and 3 on the wings, 4 at the high post, 5 in the right corner.", "runs": "Staff rules: flat across the top. The point and elbow players are wide and try to match up when possible. The bottom block defenders guard the corners and give backside post help. The ball-side block is guarded by the point man. Be active, communicate, arms wide, move when the ball moves. Wing: the ball-side elbow player matches up on the ball, x1 slides to the ball side and the far elbow player slides to the middle, staying flat. The ball-side bottom man slides toward the corner and the far one slides into the lane for post help. Corner: the ball-side bottom man takes the corner without giving up the baseline, and the point man drops to the ball-side block. The ball-side elbow player sinks to the gap, the far elbow player fills the middle and the far bottom man gives backside post help. Ball back out: everyone goes back, and x1 sprints up to the top line. On a shot everyone finds a body and hits first. The possession isn't over until we secure the ball.", "points": ["Flat and wide up top: match up when you can", "Corner pass: the point man drops to the ball-side block", "Bottom two: the corners and backside post help", "Active, talk, arms wide, move when the ball moves"], "ms": "Varsity package until the head coach moves it down. Walk the slides 5v0 with Zone Slides (TD-07), calling every pass, then go live against TO-03. The key rep is the corner pass: the bottom man takes the corner and the point man beats the ball to the ball-side block.", "source": "Lake staff program", "url": "", "drills": ["TD-07", "TO-03"]});

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
  P.typeLabels = { transition: 'Transition', secondary: 'Secondary', motion: 'Motion', set: 'Sets', counter: 'Counters', 'quick hitter': 'Quick Hitters', delay: 'Delays' };
  // Our own defense switches everything, so every motion, action and continuity offense carries these reads.
  P.switchReads = ['Slip the screen when the defense talks early.', 'Seal the smaller defender after a switch.', 'Re-screen when they jump the first one.'];
  P.switchDrill = 'LB-09';
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
