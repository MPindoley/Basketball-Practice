// Drill diagrams, part 4: Team Offense, Team Defense, Special Situations, Competitive Games,
// Conditioning, Breaks. Format: see diagrams-1.js. Blank circles (ids a, d, e, g) are a waiting team.
Object.assign(DIAGRAMS, {
  // ---------- TO: Team Offense ----------
  'TO-01': {
    p: { '1*': 'ls', 2: 'rs', 3: 'lc', 4: 'rc', 5: 'lb' },
    s: [
      ['Walk it first: pass, cut through, and fill behind. No defense.',
        [['p', '1', '2'], '|', ['c', '1', [-1, 10], [-6, 3], [-19, 3]], ['c', '3', [-17, 12], [-9, 25]]]],
      ['Then jog, then game speed. Move it side to side.', [['p', '2', '3'], '|', ['p', '3', '1'], '|', ['p', '1', '5']]],
      ['Five passes before any shot. Kick out and knock it down.', [['c', '3', [-11, 23]], ['p', '5', '3'], '|', ['sh', '3']]],
    ],
  },
  'TO-02': {
    p: { '1*': 'ls', 2: 'rs', 3: 'lc', 4: 'rc', x1: [-7.5, 22], x2: [5.5, 21], x3: [-15, 8], x4: [14, 8] },
    s: [
      ['Pass and cut: 1 passes to 2 and cuts to the basket.', [['p', '1', '2'], ['c', 'x2', [7.5, 22.5]], ['c', 'x1', [-4, 20]], '|', ['c', '1', [-2, 12]], ['c', 'x1', [-0.5, 15.5]]]],
      ['Fill the empty spot: the cutter goes to the open corner and the corner lifts.',
        [['c', '1', [-6, 4], [-20, 4]], ['c', 'x1', [-14, 7]], ['c', '3', [-14, 15], [-9, 25]], ['c', 'x3', [-7.5, 21]]]],
      ['Round 1: no dribbles. Round 2: 1 dribble. Round 3: live.', [['p', '2', '3'], ['c', 'x3', [-8, 22.5]], ['c', 'x2', [3, 19]], '|', ['c', '2', [3, 12]], ['c', 'x2', [1, 14.5]]]],
    ],
  },
  'TO-03': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rc', x1: [-6, 21], x2: [6, 21], x3: [-12, 8], x4: [12, 8], x5: [0, 8.5] },
    n: [['Walk it 5v0 first: X = their zone shape', [0, 40]]],
    s: [
      ['Line up in the gaps, not in front of a defender. High-post flash: catch in the middle and face up.', [['c', '4', [0, 16]], ['p', '1', '4']]],
      ['Short corner and skip passes shift the zone. One skip or inside touch before any shot.',
        [['c', '5', 'rsc+1,1'], ['p', '4', '2'], ['c', 'x2', [12, 17]], ['c', 'x4', [15, 11]], ['c', 'x1', [3, 19]], '|',
          ['p', '2', '3'], ['c', 'x1', [-12, 16.5]], ['c', 'x3', [-14, 12]], ['c', 'x2', [-1, 19]], '|', ['sh', '3']]],
      ['Then play it 5v5 live.', []],
    ],
  },
  'TO-04': {
    p: { '1*': 'top', 4: 're', 5: 'le', 2: 'rc', 3: 'lc' },
    n: [['Checklist: Notes → Offense install', [0, 41]]],
    s: [
      ['Primary: walk it 5v0. Every player can say who gets the ball, where, and why.', [['p', '1', '4'], ['c', '5', [-4, 10], [-3, 7]]]],
      ['Secondary: 5v5 dummy defense takes the first look away. Flow into the counter without a call.', [['c', '2', [17, 16]], ['p', '4', '2'], ['c', '5', [-7.5, 8]]]],
      ['Fallback: denied? Backdoor. Stalled? Screen away. Nothing after 4-5 passes? Reset.', [['c', '1', [-3, 18], [-2, 9]], ['p', '2', '1'], '|', ['sh', '1']]],
    ],
  },
  'TO-05': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 4: 'rc', 5: 'lb', x1: [0, 24.5], x2: [14.8, 16.2], x3: [-14.8, 16.2], x4: [18.5, 6], x5: [-5.5, 10.5] },
    s: [
      ['Scrimmage with one rule. Example: 3 passes before a shot.', [['p', '1', '3'], '|', ['p', '3', '5'], '|', ['p', '5', '1']]],
      ['Change the rule: paint touch before a 3. Drive, draw the help, kick it out.', [['d', '1', [3, 13]], ['c', 'x1', [3, 16.5]], ['c', 'x4', [11, 8]], '|', ['p', '1', '4']]],
      ['Corner three = 2 points. New rule every 3-4 minutes.', [['sh', '4']]],
    ],
  },

  // ---------- TD: Team Defense ----------
  'TD-01': {
    p: { '1*': 'ls', 2: 'rs', 3: 'lw', 4: 'rw', 5: 'lb', x1: [-7.5, 22], x2: [5.5, 21], x3: [-13.5, 16.5], x4: [8, 12.5], x5: [-5.5, 10.5] },
    s: [
      ['Segment 1: 4 passes around. The defense jumps to the ball on every pass and checks rotations.',
        [['p', '1', '2'], ['c', 'x2', [7.5, 22]], ['c', 'x1', [-4, 19.5]], ['c', 'x3', [-9, 13.5]], ['c', 'x4', [14.5, 16.5]], ['c', 'x5', [-3.5, 8]], '|',
          ['p', '2', '4'], ['c', 'x4', [14.8, 16]], ['c', 'x2', [10, 20]], ['c', 'x1', [-1, 16.5]], ['c', 'x3', [-6, 11.5]], ['c', 'x5', [-2.5, 7.5]]]],
      ['Segment 2: long skip pass to check the closeout, then drive on the whistle to check the rotation.',
        [['p', '4', '3'], ['c', 'x3', [-14.8, 16.2]], ['c', 'x1', [-4, 19]], ['c', 'x2', [4, 17]], ['c', 'x4', [8, 12]], ['c', 'x5', [-5, 9]], '|',
          ['d', '3', [-17, 9], [-13, 4.5]], ['c', 'x3', [-15.5, 10]], ['c', 'x5', [-9.5, 5]], ['c', 'x4', [-3, 7.5]]]],
      ['Segment 3: 4 passes, then live on the first drive. The offense reads when to go.', []],
    ],
  },
  'TD-02': {
    p: { '1*': 'ls', 2: 'rs', 3: 'lc', 4: 'rc', 5: [0, 17], x1: [-7.5, 22], x2: [5.5, 21], x3: [-14, 8], x4: [8, 9] },
    s: [
      ['Four defenders guard five, so the defense has to rotate on every pass.',
        [['p', '1', '2'], ['c', 'x2', [7.5, 22.5]], ['c', 'x1', [-3, 18.5]], ['c', 'x4', [13, 7]], ['c', 'x3', [-8, 9]], '|',
          ['p', '2', '4'], ['c', 'x4', [18.5, 6]], ['c', 'x2', [8, 16]], ['c', 'x1', [1, 14.5]]]],
      ['Corner drives baseline: the help comes and the next defender rotates behind it.', [['d', '4', [14, 4]], ['c', 'x4', [16.5, 7]], ['c', 'x1', [8, 4.5]], ['c', 'x3', [-1, 8]], ['c', 'x2', [3, 13]]]],
      ['Kick out and close out with short steps, hands high. No backside cuts to score. 4 passes to check rotation.', [['p', '4', '2'], ['c', 'x2', [7.5, 22.5]]]],
    ],
  },
  'TD-03': {
    p: { '1*': 'rw', 2: 'lw', 3: 'rc', 4: 'lc', x1: [14.8, 16.2], x2: [-4, 14], x3: [18.5, 7], x4: [-7, 6] },
    s: [
      ['Phases 1-2: stationary passing, no steals. On-ball pressure, deny one pass away, help two away.',
        [['p', '1', '3'], ['c', 'x3', [19.5, 5.5]], ['c', 'x1', [15, 13]], ['c', 'x2', [-3, 12]], ['c', 'x4', [-5, 6.5]], '|',
          ['p', '3', '1'], ['c', 'x1', [14.8, 16.2]], ['c', 'x3', [18.5, 7]], ['c', 'x2', [-4, 14]], ['c', 'x4', [-7, 6]]]],
      ['Phases 3-5: deny when the dribble is picked up, help and recover on penetration (stop the ball, no trap).',
        [['d', '1', [15.5, 13], [10, 11]], ['c', 'x2', [4, 10.5]], ['c', 'x1', [12.5, 15]], '|', ['p', '1', '2'], ['c', 'x2', [-14.5, 16]], ['c', 'x1', [7, 12]]]],
      ['Phases 6-8: live shell with cuts and screens, then play to 5 (stop = switch), then 3 teams.', []],
    ],
  },
  'TD-04': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 4: 'rc', x1: [0, 24.5], x2: [14.8, 16.2], x3: [-14.5, 16.5], x4: [18.5, 6.5], a: [-6, 43.5], d: [-2, 43.5], e: [2, 43.5], g: [6, 43.5] },
    s: [
      ['Offense attacks; the defense needs a stop. Only the defense can win.',
        [['p', '1', '2'], ['c', 'x1', [3, 21]], '|', ['d', '2', [12, 10]], ['c', 'x2', [9.5, 12.5]], '|', ['sh', '2']]],
      ['Offense scores? The defense sits, the offense becomes the defense, and the waiting team attacks.',
        [['m', 'x1', [-24, 40]], ['m', 'x2', [-24, 35]], ['m', 'x3', [-24, 30]], ['m', 'x4', [-24, 25]],
          ['c', '1', [0, 24.5]], ['c', '2', [14.5, 16.5]], ['c', '3', [-14.5, 16.5]], ['c', '4', [18.5, 6.5]],
          ['c', 'a', [0, 28.5]], ['c', 'd', 'rw+0.5,1'], ['c', 'e', 'lw-0.5,1'], ['c', 'g', 'rc'], ['g', 'a']]],
      ['A team wins with 3 stops in a row. The other two teams run or do push-ups.', []],
    ],
  },
  'TD-05': {
    p: { 'c*': 'top', 1: 'rw', 2: 'lw', x1: [6, 1], x2: [-6, 1] },
    c: [['rim', 16, 'pack line']],
    s: [
      ['Defenders close out relative to the ball: in the gaps, inside the pack line.', [['c', 'x1', [9, 15.5]], ['c', 'x2', [-9, 15.5]]]],
      ['Coach passes to the wing; the defense jumps to the ball.', [['p', 'c', '1'], ['c', 'x1', [14.8, 16.2]], ['c', 'x2', [-3.5, 13]]]],
      ['On a clap the ball goes back. Coach drives the elbow: the gap helper stabs at the ball, then recovers.',
        [['p', '1', 'c'], ['c', 'x1', [9, 15.5]], ['c', 'x2', [-9, 15.5]], '|', ['d', 'c', [-5, 21.5]], ['c', 'x2', [-6.5, 17.5]], '|', ['c', 'x2', [-14, 16]]]],
      ['After 3-4 ball changes it goes live. Rotate: defense to offense to out.', []],
    ],
  },
  'TD-06': {
    p: { '1*': 'ls', 2: 'rs', 3: 'lw', 4: 'rw', x1: [-7.5, 22], x2: [5.5, 23.5], x3: [-14.5, 19.5], x4: [6, 12] },
    s: [
      ['Deny one pass away: hand and foot in the lane, thumb down. The next pass must go away from the basket.', [['c', '2', [11, 31]], ['c', 'x2', [8, 27.5]], ['p', '1', '2']]],
      ['On the pass, everyone jumps: on-ball pressure, deny, and back-side help.', [['c', 'x2', [9.5, 28.3]], ['c', 'x1', [-6.5, 25]], ['c', 'x4', [15.5, 21]], ['c', 'x3', [-6, 13]]]],
      ['Offense can cut. No face cuts: beat the cutter to the spot and make them go behind you.', [['c', '3', [-10, 13], [-2, 8]], ['c', 'x3', [-4.5, 11], [0.5, 9.5]]]],
    ],
  },
  'TD-07': {
    p: { 'c*': 'top', 1: 'rw', 2: 'lw', 3: 'rc', 4: 'lc', x1: [-6, 21], x2: [6, 21], x3: [-12, 8], x4: [12, 8], x5: [0, 8.5] },
    s: [
      ['Pass to the wing: the zone shifts on the flight of the pass.', [['p', 'c', '1'], ['c', 'x2', [14.5, 16.5]], ['c', 'x1', [3, 19]], ['c', 'x4', [14, 9.5]], ['c', 'x5', [5, 7.5]], ['c', 'x3', [-5, 8]]]],
      ['Pass to the corner: the bottom defender takes the ball, the middle slides to the block.', [['p', '1', '3'], ['c', 'x4', [19, 5.5]], ['c', 'x5', [8, 9]], ['c', 'x2', [12, 13.5]], ['c', 'x1', [0, 15]], ['c', 'x3', [-2, 7]]]],
      ['Skip to the other wing: everyone sprints to shift. Call the coverage out loud on every pass.',
        [['p', '3', '2'], ['c', 'x1', [-14.5, 16.5]], ['c', 'x2', [-3, 19]], ['c', 'x3', [-14, 9.5]], ['c', 'x5', [-5, 7.5]], ['c', 'x4', [5, 8]]]],
    ],
  },
  'TD-08': {
    court: 'f',
    p: { '1*': [20, 72], x1: [16, 66], x2: [18, 42], x3: [6, 40], 2: [6, 60] },
    n: [['trap here', [13, 50]]],
    s: [
      ['Ball handler dribbles up the sideline. The on-ball defender keeps them there.', [['d', '1', [21.5, 54]], ['c', 'x1', [19, 55]]]],
      ['Trap at the half-court corner: feet together, NO splits, mirror the ball with your hands, NO fouls.', [['c', 'x2', [20.5, 51]], ['c', 'x1', [18.5, 54.5]]]],
      ['Add an interceptor who reads the passer\'s eyes and jumps the pass.', [['c', '2', [8, 58]], ['c', 'x3', [11, 56]], ['p', '1', 'x3']]],
    ],
  },
  'TD-09': {
    court: 'f',
    p: { '1*': [21, 60], x1: [17.5, 62], x2: [19.5, 55.5], x3: [12, 47], x4: [2, 54], x5: [0, 20], 2: [6, 68], 3: [-14, 50], 4: [22, 38] },
    n: [['goaltender', [0, 15]]],
    s: [
      ['Guard starts in the trap and holds the ball for 2 seconds. The interceptors read the eyes.', []],
      ['Guard passes out of the trap. Play is live.', [['c', '3', [-11, 46]], ['p', '1', '3'], ['c', 'x4', [-4, 49]]]],
      ['The defense sprints back in transition and tries to intercept or deflect.',
        [['d', '3', [-8, 26]], ['c', 'x4', [-5, 31]], ['c', 'x3', [2, 30]], ['c', 'x1', [8, 40]], ['c', 'x2', [14, 38]], ['c', '4', [14, 18]], ['c', '2', [6, 42]], '|',
          ['p', '3', '4'], ['c', 'x5', [7, 10]], '|', ['sh', '4']]],
    ],
  },
  'TD-10': {
    court: 'f',
    p: { '1*': [-6, -1.5], 2: [-12, 12], 3: [10, 12], 4: [0, 30], x1: [-6, 2.8], x2: [-10, 16], x3: [8, 16], x4: [0, 34.5], a: [-10, 70], d: [10, 70], e: [-6, 84], g: [6, 84] },
    n: [['next team waits here', [0, 77]]],
    s: [
      ['Inbound against the press. The defense presses to half court, looking for a steal.',
        [['c', '2', [-16, 18]], ['c', 'x2', [-13.5, 21.5]], ['p', '1', '2'], '|', ['d', '2', [-18, 36]], ['c', 'x2', [-15, 39]], ['c', '1', [-4, 14]]]],
      ['Past half court, the team waiting at the other end picks them up.',
        [['d', '2', [-12, 54]], ['c', '3', [14, 54]], ['c', '4', [2, 60]], ['c', '1', [-2, 40]], ['c', 'a', [-11, 61]], ['c', 'd', [12, 62]], ['c', 'e', [0, 68]]]],
      ['Score: keep it and inbound again. Lose it: you press. A stop makes the defense the new offense.', [['p', '2', '4'], '|', ['sh', '4']]],
    ],
  },

  // ---------- SP: Special Situations ----------
  'SP-01': {
    court: 'f',
    p: { '4*': [-8, -1.5], 1: [-10, 14], 2: [10, 14], 3: [0, 36], 5: [0, 62] },
    n: [['5 seconds to inbound', [10, 4]]],
    s: [
      ['Inbound in under 5 seconds. Receivers get open with a hard cut.', [['c', '1', [-15, 9]], ['p', '4', '1']]],
      ['Middle flash. Covered? Reverse it to the inbounder stepping in.', [['c', '3', [0, 24]], ['c', '4', [-3, 4]], ['p', '1', '3']]],
      ['Look deep every time, then attack if you have numbers. Walk it, then 5 dummies, then live.',
        [['c', '5', [-10, 74]], ['p', '3', '5'], ['c', '2', [16, 50]], ['c', '1', [-14, 46]], '|', ['L', '5', [-3, 85]]]],
    ],
  },
  'SP-02': {
    p: { '1*': [8, -2.5], 2: 're', 3: 'le', 4: 'rb', 5: 'lb' },
    s: [
      ['Box set: 3 clears to the corner, 2 pops to the top as the safety, 4 screens across for 5.', [['c', '3', 'lc+1,2'], ['c', '2', 'top'], ['s', '4', [-4.5, 9.5]]]],
      ['5 comes off the screen to the rim for the pass and the layup.', [['c', '5', [-5, 12.5], [1, 7.5]], ['p', '1', '5'], '|', ['sh', '5']]],
      ['Install it 5v0, then go 5v5 live and track conversions. Run your sideline (SLOB) sets the same way.', []],
    ],
  },
  'SP-03': {
    p: { '1*': [26, 25], 2: [8, 9], 3: [-12, 26], 4: [0, 18], 5: [10, 19], x1: [23, 24], x2: [8, 12], x3: [-10, 23.5], x4: [0, 15], x5: [7.5, 16.5] },
    n: [['DOWN 2 · 0:12 · our ball', [-9, 40]]],
    s: [
      ['Coach sets the score, time, and possession. Example: down 2, 0:12, sideline out of bounds.', []],
      ['5 screens down and 2 comes off it to the wing. Get the shot off with time for a rebound.',
        [['s', '5', [9.5, 14.5]], ['c', 'x5', [12, 18]], '|', ['c', '2', [12.5, 12], [17, 21]], ['p', '1', '2'], '|', ['sh', '2']]],
      ['Up 3, 0:10, their ball? Decide your foul policy before the season. Play each situation live.', []],
    ],
  },
  'SP-04': {
    p: { '1*': [0, 20], x4: [7, 8.5], 4: [7, 12], x3: [7, 15.5], x5: [-7, 8.5], 5: [-7, 12], x2: [-7, 15.5], 2: [12, 30], x1: [-6, 31] },
    s: [
      ['Line up the lane. The shooter shoots.', [['sh', '1']]],
      ['Miss: box out from the first spots and rebound.', [['c', 'x4', [4.5, 9.5]], ['c', '4', [6, 12.5]], ['c', 'x5', [-4.5, 9.5]], ['c', '5', [-6, 12.5]], ['c', 'x2', [-3, 16.5]], ['c', '1', [0, 17.5]], '|', ['r', 'x4']]],
      ['Make: sprint back in transition. After our make, pick up full-court defense.', []],
    ],
  },

  // ---------- CG: Competitive Games ----------
  'CG-01': {
    p: { '1*': [0, 21], '2*': [0, 24.5], 3: [0, 28], 4: [0, 31.5], 5: [0, 35] },
    s: [
      ['First shooter shoots from the free-throw line. Miss? Chase it and put it back.', [['sh', '1'], '|', ['c', '1', [2.5, 8]], ['r', '1']]],
      ['Second shooter goes right away. Make it before the player ahead of you and they\'re out.', [['sh', '2'], '|', ['sh', '1']]],
      ['Rebound the make, pass to the next in line, and go to the back. Last player standing wins.',
        [['c', '2', [-1.5, 8]], ['r', '2'], ['m', '1', [-18, 40]], '|', ['p', '2', '3'], '|', ['m', '2', [4.5, 30], [4.5, 37], [0, 39]]]],
    ],
  },
  'CG-02': {
    p: { '1*': [-8, 10], '2*': [6, 9], '3*': [-3, 16], '4*': [9, 16], '5*': [-13, 17], '6*': [3, 22] },
    s: [
      ['Everyone dribbles inside the 3-point arc.', [['d', '1', [-4, 7]], ['d', '2', [10, 11]], ['d', '3', [-6, 20]], ['d', '4', [7, 13.5]], ['d', '5', [-10, 13]], ['d', '6', [0, 18]]]],
      ['Protect your dribble while you try to knock other balls away.', [['d', '3', [-9, 16]], ['d', '5', [-13, 10]], ['d', '6', [4, 15.5]], ['d', '4', [10, 17]], ['d', '1', [-2, 10]], ['d', '2', [12, 7]]]],
      ['Lose your ball or step out and you\'re out. Last one dribbling wins.', [['m', '5', [-23, 30]]]],
    ],
  },
  'CG-03': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', x1: [0, 24.5], x2: [14.8, 16.2], x3: [-14.5, 16.5], a: [-5, 44], d: [0, 44], e: [5, 44] },
    s: [
      ['3v3 live. Play to 2 (or a single possession).', [['p', '1', '2'], ['c', 'x1', [3, 21.5]], '|', ['d', '2', [13, 9]], ['c', 'x2', [10.5, 11]], '|', ['sh', '2']]],
      ['Defense gets the stop, so winners stay and the losing team goes off.', [['c', 'x2', [5, 7]], ['r', 'x2'], '|', ['m', '1', [24, 26]], ['m', '2', [24, 30]], ['m', '3', [24, 34]]]],
      ['Next team comes on to play defense. The winners attack.',
        [['c', 'a', [-1, 23]], ['c', 'd', [12, 16.5]], ['c', 'e', [-12, 16.5]], ['c', 'x1', [0, 28.5]], ['d', 'x2', [16, 19]], ['c', 'x3', [-17, 19]]]],
    ],
  },
  'CG-04': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 4: 'rc', 5: 'lb', x1: [0, 24.5], x2: [14.8, 16.2], x3: [-14.8, 16.2], x4: [18.5, 6], x5: [-5.5, 10.5] },
    n: [['+1 charge · +1 O-board · +1 deflection · +1 for 5 passes', [0, 40]]],
    s: [
      ['Normal scoring plus bonus points. +1 for 5 passes before a score.',
        [['p', '1', '2'], '|', ['p', '2', '4'], '|', ['p', '4', '2'], '|', ['p', '2', '1'], '|', ['p', '1', '3'], '|', ['sh', '3']]],
      ['+1 for an offensive rebound.', [['c', '5', [-3, 7]], ['c', 'x5', [-4.5, 9.8]], '|', ['r', '5']]],
      ['+1 for a deflection and +1 for a charge taken. Keep a running score.', []],
    ],
  },

  // ---------- CD: Toughness & Conditioning ----------
  'CD-01': {
    p: { 1: [-24, 8], 2: [-24, 16], 3: [-24, 24], 4: [-24, 32], 5: [-24, 40] },
    n: [['17 trips · target about 65 sec', [0, 45]]],
    s: [
      ['Sprint sideline to sideline and touch the line.', [['c', '1', [24, 8]], ['c', '2', [24, 16]], ['c', '3', [24, 24]], ['c', '4', [24, 32]], ['c', '5', [24, 40]]]],
      ['Keep going for 17 trips.',
        [['c', '1', [-24, 8]], ['c', '2', [-24, 16]], ['c', '3', [-24, 24]], ['c', '4', [-24, 32]], ['c', '5', [-24, 40]], '|',
          ['c', '1', [24, 8]], ['c', '2', [24, 16]], ['c', '3', [24, 24]], ['c', '4', [24, 32]], ['c', '5', [24, 40]]]],
      ['Rest 1 minute between reps.', []],
    ],
  },
  'CD-02': {
    court: 'f',
    p: { '1*': [-15, 1.5], '2*': [-5, 1.5], '3*': [5, 1.5], '4*': [15, 1.5] },
    s: [
      ['Near free-throw line and back. Right hand down, left hand back.',
        [['d', '1', [-15, 19]], ['d', '2', [-5, 19]], ['d', '3', [5, 19]], ['d', '4', [15, 19]], '|',
          ['d', '1', [-12.5, 10], [-15, 1.5]], ['d', '2', [-2.5, 10], [-5, 1.5]], ['d', '3', [7.5, 10], [5, 1.5]], ['d', '4', [17.5, 10], [15, 1.5]]]],
      ['Half court and back.',
        [['d', '1', [-15, 47]], ['d', '2', [-5, 47]], ['d', '3', [5, 47]], ['d', '4', [15, 47]], '|',
          ['d', '1', [-12.5, 24], [-15, 1.5]], ['d', '2', [-2.5, 24], [-5, 1.5]], ['d', '3', [7.5, 24], [5, 1.5]], ['d', '4', [17.5, 24], [15, 1.5]]]],
      ['Far free-throw line and back, then the far baseline and back.',
        [['d', '1', [-15, 75]], ['d', '2', [-5, 75]], ['d', '3', [5, 75]], ['d', '4', [15, 75]], '|',
          ['d', '1', [-12.5, 38], [-15, 1.5]], ['d', '2', [-2.5, 38], [-5, 1.5]], ['d', '3', [7.5, 38], [5, 1.5]], ['d', '4', [17.5, 38], [15, 1.5]]]],
    ],
  },
  'CD-03': {
    p: { 'c*': [-5, 28], 'c2*': [-12, 34], 1: 'rc', x: [5, 9] },
    s: [
      ['Defender guards the post. Coach passes to the corner, who drives: rotate over and take the charge.', [['p', 'c', '1'], '|', ['d', '1', [14, 5]], ['c', 'x', [9.5, 5]]]],
      ['Sprint to the sideline for a diving save on the ball the coach rolls toward the baseline.', [['c', 'x', [12, 9.5], [23, 3.5]], '|', ['g', 'x'], ['p', 'x', 'c']]],
      ['Then sprint to the opposite sideline to jump and save (or deflect) a ball thrown by a coach.', [['c', 'x', [0, 14], [-23, 14]], ['p', 'c2', 'x']]],
    ],
  },
  'CD-04': {
    p: { x1: [-5, 10], x2: [-5, 28], x3: [-5, 40] },
    z: [[[-6, 24], [6, 32]], [[-6, 36], [6, 44]]],
    s: [
      ['Slide lane line to lane line. Touch each line with the outside hand.',
        [['c', 'x1', [5, 10]], ['c', 'x2', [5, 28]], ['c', 'x3', [5, 40]], '|', ['c', 'x1', [-5, 10]], ['c', 'x2', [-5, 28]], ['c', 'x3', [-5, 40]]]],
      ['Go for 30 seconds and count touches. HS-ready target: 16.',
        [['c', 'x1', [5, 10]], ['c', 'x2', [5, 28]], ['c', 'x3', [5, 40]], '|', ['c', 'x1', [-5, 10]], ['c', 'x2', [-5, 28]], ['c', 'x3', [-5, 40]]]],
    ],
  },

  // ---------- BR: Breaks & Wrap-Up ----------
  'BR-01': {
    p: { c: [0, 30], 1: [-15, 12], 2: [12, 8], 3: [-6, 24], 4: [16, 26], 5: [-20, 30] },
    n: [['WATER', [22, 46]]],
    s: [
      ['Get water.', [['c', '1', [22, 30]], ['c', '2', [22, 34.5]], ['c', '3', [18, 37]], ['c', '4', [22, 39]], ['c', '5', [18, 42]]]],
      ['Back on the line before the coach finishes the countdown.', [['c', '1', [-16, 1.8]], ['c', '2', [-8, 1.8]], ['c', '3', [0, 1.8]], ['c', '4', [8, 1.8]], ['c', '5', [16, 1.8]]]],
    ],
  },
  'BR-02': {
    p: { c: [0, 22], 1: [-15, 12], 2: [12, 8], 3: [-6, 34], 4: [16, 30], 5: [-20, 26], 6: [4, 40] },
    s: [
      ['Bring it in. Recap the focus of the day.',
        [['c', '1', [-5, 22]], ['c', '2', [2.5, 17.7]], ['c', '3', [-2.5, 26.3]], ['c', '4', [5, 22]], ['c', '5', [-2.5, 17.7]], ['c', '6', [2.5, 26.3]]]],
      ['Recognize effort and great plays. Announcements.', []],
      ['Hands in. Team break on three.', []],
    ],
  },
});
