// Drill diagrams, part 3: Small-Sided & Reads, Transition. Format: see diagrams-1.js.
Object.assign(DIAGRAMS, {
  // ---------- SS: Small-Sided & Reads ----------
  'SS-01': {
    p: { 'x1*': [0, 8], x1a: [4, 2.5], 1: 'top', '1a': [0, 32.5] },
    n: [['4 dribbles max', [12, 34]]],
    s: [
      ['Defender rolls the ball out to the top of the key and closes out.', [['p', 'x1', '1'], ['c', 'x1', [0, 24]]]],
      ['Play 1v1 with a 4-dribble limit.', [['d', '1', [-6, 22], [-5, 13.5]], ['c', 'x1', [-4.5, 19], [-2.5, 11]], '|', ['sh', '1']]],
      ['Score or get the stop, then rotate lines: offense to defense, defense to offense.', [['c', 'x1', [-1, 7.5]], ['r', 'x1']]],
    ],
  },
  'SS-02': {
    p: { 'c*': 'rw', 1: 'lb', x1: [-4, 11] },
    n: [['2 dribbles max', [-12, 30]]],
    s: [
      ['Offense flashes to the high post for the catch.', [['c', '1', [0, 18]], ['c', 'x1', [1.5, 15]], ['p', 'c', '1']]],
      ['Face up: jab, shot fake, then attack with 2 dribbles max.', [['d', '1', [-4, 13], [-3, 9]], ['c', 'x1', [-1, 12], [-0.5, 8]], '|', ['sh', '1']]],
      ['Live 1v1. Play to a score, then rotate.', [['c', 'x1', [1, 7]], ['r', 'x1']]],
    ],
  },
  'SS-03': {
    p: { 'c*': [7, 28], 1: 'rc', x1: [18, 5.5], 2: 'rb', x2: [9.5, 10.5] },
    n: [['8 seconds to score', [-12, 30]]],
    s: [
      ['Post sets the hammer screen on the corner defender.', [['s', '2', [16, 7]], ['c', 'x2', [12.5, 9.5]]]],
      ['Corner fades to the wing for the catch-and-shoot 3.', [['c', '1', [19.5, 15]], ['c', 'x1', [17.5, 8]], ['p', 'c', '1'], '|', ['sh', '1']]],
      ['Other reads: curl, slip to the rim, or post-up entry. Score = go to defense. Stop or rebound = defense stays.', [['c', '2', [5, 7.5]], ['c', 'x2', [7.5, 8.5]], '|', ['r', 'x2']]],
    ],
  },
  'SS-04': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', x1: [0, 24.5], x2: [14.5, 16], x3: [-11, 15] },
    s: [
      ['Top passes to the wing. Defense jumps to the ball.', [['p', '1', '2'], ['c', 'x2', [15.5, 17]], ['c', 'x1', [2, 22]], ['c', 'x3', [-9, 14.5]]]],
      ['Passer screens away for the opposite wing (down screen or back screen).', [['s', '1', [-11, 18]], ['c', 'x1', [-8, 21]]]],
      ['Cutter comes off the screen for the next pass. Screen away after every pass. Play it live.',
        [['c', '3', [-15, 24], [-6, 27]], ['c', 'x3', [-9.5, 16.5]], ['p', '2', '3'], '|', ['c', '1', [-8, 11]], ['c', 'x1', [-6, 15]]]],
    ],
  },
  'SS-05': {
    p: { '1*': 'ls', 2: 'rs', 3: 'lw', 4: 'rw', x1: [-7.5, 21.5], x2: [7.5, 21.5], x3: [-14, 15.5], x4: [14, 15.5] },
    s: [
      ['Pass and cut: 1 passes to 2 and cuts hard to the basket.', [['p', '1', '2'], ['c', 'x2', [8, 22.5]], '|', ['c', '1', [-3, 15], [0, 8]], ['c', 'x1', [-1.5, 18], [2, 10.5]]]],
      ['Cutter fills the open corner and everyone fills behind. Keep four-out spacing.',
        [['c', '1', [-8, 5], 'lc'], ['c', 'x1', [-6, 7.5], [-17, 6]], ['c', '3', [-12, 24], [-9, 26]], ['c', 'x3', [-8, 22]]]],
      ['Pass and screen away: 2 passes to 4, then screens for 3.', [['p', '2', '4'], ['c', 'x4', [15, 17.5]], '|', ['s', '2', [-5.5, 23.5]], ['c', 'x2', [-2, 20.5]]]],
      ['3 comes off the screen to the top; the screener slips. Play it live 4v4.',
        [['c', '3', [-5, 28.5], [1.5, 28]], ['c', 'x3', [-6.5, 21]], ['p', '4', '3'], '|', ['c', '2', [-3, 13]], ['c', 'x2', [-1, 16]]]],
    ],
  },
  'SS-06': {
    p: { '1*': 'rw', 2: 'rc', x: [12.5, 11] },
    s: [
      ['Ball handler drives hard to force the help.', [['d', '1', [12, 15], [7, 10]], ['c', 'x', [7.5, 7.5]]]],
      ['Defender helps? Kick to the open teammate for the shot.', [['c', '2', [21, 6.5]], ['p', '1', '2'], '|', ['sh', '2']]],
      ['No help? Finish at the rim yourself. Rotate and go again.', []],
    ],
  },
  'SS-07': {
    p: { '1*': 'rs', '1a*': [12, 30], 2: 'rc', '3*': 'ls', '3a*': [-12, 30], 4: 'lc' },
    n: [['rack zone', [-1.5, 9]], ['drop zone', [0, 24.6]]],
    s: [
      ['Slot attacks the lane. Gets below the free-throw line (the rack zone)? The corner stays put.', [['d', '1', [6, 18], [3, 12]]]],
      ['Kick out to the corner for the shot.', [['p', '1', '2'], '|', ['sh', '2']]],
      ['Stops at the free-throw line (the drop zone)? The corner loops up to the wing for the pitch and shot.',
        [['d', '3', [-3.5, 21]], ['c', '4', [-19, 9], [-18, 17]], ['p', '3', '4'], '|', ['sh', '4']]],
      ['Rotate: dribbler goes to the corner line; shooter rebounds and goes to the top line.',
        [['c', '2', [5, 7]], ['r', '2'], ['m', '1', [24, 7]], '|', ['d', '2', [13, 34]]]],
    ],
  },
  'SS-08': {
    p: { '1*': 'rs', 2: 'rw', 3: 'lc' },
    n: [['drop zone', [-2, 23]]],
    s: [
      ['Slot dribbles to the drop zone at the free-throw line.', [['d', '1', [3.5, 20]]]],
      ['Wing starts to loop up, then back-cuts. Bounce pass for the layup.', [['c', '2', [18.5, 23.5]], '|', ['c', '2', [11, 10], [4, 7]], ['p', '1', '2']]],
      ['Progression: the back-cutter drives and kicks to the opposite corner for the shot.', [['d', '2', [0, 9]], '|', ['p', '2', '3'], '|', ['sh', '3']]],
    ],
  },
  'SS-09': {
    p: { '1*': 'top', 5: [0, 19] },
    s: [
      ['Screener sprints up and sets the ball screen. The guard waits for it.', [['s', '5', [2, 25.5]]]],
      ['Use the screen shoulder to hip. The screener rolls to the rim for the pocket pass.',
        [['d', '1', [6, 28], [10, 21]], ['c', '5', [2, 18], [1, 11]], '|', ['p', '1', '5'], '|', ['sh', '5']]],
      ['Other reads: reject the screen, pop, or split. Then 2v2: the defense shows one coverage at a time (soft, hedge, switch).', []],
    ],
  },
  'SS-10': {
    p: { '1*': 'top', 5: [1, 21], 2: [-16, 20] },
    n: [['3v0: hedge is imaginary', [12, 34]]],
    s: [
      ['Screener sets the ball screen. The hedge jumps out and takes the guard.', [['s', '5', [-2.2, 26]]]],
      ['Guard turns the corner, escapes the hedge, and passes to the wing at the 45.', [['d', '1', [-5.5, 29.5], [-9, 27]], '|', ['p', '1', '2']]],
      ['Option 1: the screener rolls long to the rim and the wing hits the long roll.', [['c', '5', [-5, 15], [-2.5, 8]], ['p', '2', '5'], '|', ['sh', '5']]],
      ['Option 2: guard hits the short roll at the free-throw line; the short roll finds the open perimeter player.', []],
    ],
  },
  'SS-11': {
    p: { '1*': 'top', 2: 'rw', x2: [14.5, 20] },
    s: [
      ['Wing is denied: the defender overplays the passing lane. (Or the ball is dribbled at the wing.)', [['c', '2', [18.5, 21]], ['c', 'x2', [15.5, 21.5]]]],
      ['Wing plants and cuts backdoor, hands ready. The passer delivers a bounce pass.', [['c', '2', [14, 14], [5, 8]], ['c', 'x2', [14.5, 17]], ['p', '1', '2']]],
      ['Finish the layup. Progress to 2v2 with the passer guarded.', [['c', '2', [2, 7]], '|', ['sh', '2']]],
    ],
  },

  // ---------- TR: Transition ----------
  'TR-01': {
    court: 'f',
    p: { 1: [-13, 1.5], '2*': [0, 1.2], 3: [13, 1.5] },
    s: [
      ['Middle passes to a side and runs behind the receiver. The receiver cuts to the middle.',
        [['c', '3', [5, 12]], ['c', '2', [2, 6]], ['c', '1', [-14, 12]], ['p', '2', '3'], '|',
          ['c', '3', [1, 24]], ['c', '1', [-6, 30]], ['c', '2', [12, 14], [15, 28]], ['p', '3', '1']]],
      ['Keep weaving: pass and go behind. Four passes total.',
        [['c', '3', [-10, 32], [-15, 46]], ['c', '1', [-2, 44]], ['c', '2', [6, 50]], ['p', '1', '2'], '|',
          ['c', '1', [10, 52], [15, 68]], ['c', '2', [1, 64]], ['c', '3', [-6, 80]], ['p', '2', '3']]],
      ['The last pass is a bounce pass for the layup.', [['L', '3', [-3, 85.5]], ['c', '1', [9, 82]], ['c', '2', [1, 76]]]],
    ],
  },
  'TR-02': {
    court: 'f',
    p: { 1: [-20, 1.5], 2: [-10, 1.5], '3*': [0, 1.2], 4: [10, 1.5], 5: [20, 1.5] },
    s: [
      ['Middle passes to a side and goes behind two players. Receivers cut to the middle.',
        [['c', '4', [3, 13]], ['c', '1', [-20, 12]], ['c', '2', [-10, 13]], ['c', '5', [20, 12]], ['c', '3', [1, 6]], ['p', '3', '4'], '|',
          ['c', '3', [12, 12], [23, 26]], ['c', '2', [-3, 28]], ['c', '4', [5, 22]], ['c', '1', [-20, 26]], ['c', '5', [17, 26]], ['p', '4', '2']]],
      ['Keep weaving: pass and go behind two. Five passes total.',
        [['c', '4', [-8, 30], [-23, 42]], ['c', '5', [4, 44]], ['c', '2', [-2, 38]], ['c', '1', [-19, 40]], ['c', '3', [21, 42]], ['p', '2', '5'], '|',
          ['c', '2', [10, 48], [22, 58]], ['c', '1', [-4, 60]], ['c', '5', [3, 54]], ['c', '3', [16, 60]], ['c', '4', [-21, 58]], ['p', '5', '1'], '|',
          ['c', '5', [-10, 62], [-20, 74]], ['c', '3', [6, 78]], ['c', '1', [-2, 70]], ['c', '4', [-14, 76]], ['c', '2', [20, 74]], ['p', '1', '3']]],
      ['The last pass is a bounce pass for the layup.', [['L', '3', [2, 85.5]], ['c', '1', [-4, 80]]]],
    ],
  },
  'TR-03': {
    court: 'f',
    p: { '5*': [0, 9], 1: [-17, 19], 2: [17, 19], 3: [-7, 22], 4: [6, 16], '1a': [25.5, 46], '2a': [25.5, 51], '3a': [25.5, 56], '4a': [25.5, 61], '5a': [25.5, 66] },
    n: [['next group', [19.5, 71]]],
    s: [
      ['Rebound, outlet, and fill the lanes. Call the play out loud.',
        [['c', '1', [-19, 23]], ['p', '5', '1'], '|', ['d', '1', [-12, 40], [-6, 60]], ['c', '2', [15, 40], [17, 70]], ['c', '3', [-17, 45], [-17, 72]], ['c', '4', [2, 40], [3, 60]], ['c', '5', [-2, 30], [-8, 54]]]],
      ['Run the called play at the other end and finish.', [['p', '1', '3'], '|', ['sh', '3']]],
      ['Hockey sub: the next group runs on from the sideline and goes the other way. Old group exits.',
        [['c', '5a', [3, 84]], ['r', '5a'], ['c', '1a', [16, 72]], ['c', '2a', [-15, 76]], ['c', '3a', [6, 66]], ['c', '4a', [-4, 64]],
          ['m', '1', [23, 30]], ['m', '2', [23, 35]], ['m', '3', [23, 40]], ['m', '4', [21, 25]], ['m', '5', [21, 20]]]],
    ],
  },
  'TR-04': {
    court: 'f',
    p: { 'c*': [-9, 22], 5: [2, 11], 1: [18, 19], 3: [-1, 27] },
    s: [
      ['Coach shoots. The rebounder grabs the miss and pivots to the outside.', [['sh', 'c'], '|', ['c', '5', [3, 7.5]], ['r', '5']]],
      ['Outlet to the wing at foul line extended. The middle player fills.', [['c', '1', [20, 22]], ['p', '5', '1'], ['c', '3', [1, 32]]]],
      ['All three sprint their lanes and score.',
        [['c', '3', [0, 46]], ['p', '1', '3'], ['c', '1', [21, 44]], ['c', '5', [-6, 20], [-18, 44]], '|',
          ['d', '3', [0, 66]], ['c', '1', [20, 74]], ['c', '5', [-19, 74]], '|', ['c', '1', [9, 84]], ['p', '3', '1'], '|', ['sh', '1']]],
    ],
  },
  'TR-05': {
    court: 'f',
    p: { '1*': [0, 30], 2: [-15, 32], 3: [15, 32], x1: [0, 70], x2: [0, 82], x3: [-9, 3], x4: [9, 3] },
    s: [
      ['Three attack two. The top defender stops the ball; make the extra pass.',
        [['d', '1', [0, 58]], ['c', '2', [-17, 66]], ['c', '3', [17, 66]], ['c', 'x1', [0, 63]], '|', ['p', '1', '3'], ['c', 'x2', [9, 78]], '|', ['sh', '3']]],
      ['Possession over: the two defenders go the other way 2v1 against the shooter. The other two attackers become the next defenders.',
        [['c', 'x2', [3, 84]], ['r', 'x2'], '|', ['c', 'x1', [-14, 62]], ['p', 'x2', 'x1'], ['c', '1', [0, 70]], ['c', '2', [0, 82]], '|',
          ['d', 'x1', [-10, 30]], ['c', 'x2', [12, 32]], ['c', '3', [2, 36]]]],
      ['Finish the 2v1. Then the next 3 attack the two defenders waiting at that end.', [['d', 'x1', [-6, 14]], ['c', '3', [-2, 12]], '|', ['p', 'x1', 'x2'], '|', ['sh', 'x2']]],
    ],
  },
  'TR-06': {
    court: 'f',
    p: {
      '1*': [0, 40], 2: [-15, 42], 3: [15, 42], x1: [0, 70], x2: [0, 82], 6: [-24, 75], 7: [24, 75],
      x3: [0, 24], x4: [0, 12], 8: [-24, 19], 9: [24, 19],
    },
    n: [['outlets at foul line extended', [0, 92]]],
    s: [
      ['Three attack two.', [['d', '1', [0, 60]], ['c', '2', [-17, 68]], ['c', '3', [17, 68]], ['c', 'x1', [0, 64]], '|', ['p', '1', '2'], ['c', 'x2', [-9, 79]], '|', ['sh', '2']]],
      ['Rebounder outlets to a sideline player. That player, the other outlet, and the rebounder go 3v2 the other way.',
        [['c', 'x2', [-3, 84]], ['r', 'x2'], '|', ['c', '6', [-20, 71]], ['p', 'x2', '6'], '|',
          ['d', '6', [-4, 50]], ['c', '7', [18, 48]], ['c', 'x2', [-18, 52]]]],
      ['Two first attackers stay as the new defenders; one attacker and the old defender fill the outlet spots.',
        [['c', '1', [0, 70]], ['c', '3', [0, 82]], ['c', '2', [-24, 75]], ['c', 'x1', [24, 75]], ['d', '6', [-2, 32]], ['c', '7', [17, 28]], ['c', 'x2', [-17, 30]]]],
    ],
  },
  'TR-07': {
    court: 'f',
    p: { '1*': [-5, 40], 2: [8, 40], x1: [0, 74], x2: [-25, 58], x3: [25, 58] },
    n: [['X team waits on the sideline', [0, 52]]],
    s: [
      ['2v1: attack the lone defender for a layup.', [['d', '1', [-3, 64]], ['c', '2', [10, 70]], ['c', 'x1', [-1, 72]], '|', ['p', '1', '2'], '|', ['L', '2', [4, 85]]]],
      ['Defender rebounds and outlets to teammates sprinting in from the sideline. The 2 sprint back: 3v2.',
        [['c', 'x1', [0, 84]], ['r', 'x1'], '|', ['c', 'x2', [-18, 64]], ['c', 'x3', [17, 62]], ['p', 'x1', 'x2'], ['c', '1', [-3, 44]], ['c', '2', [5, 34]]]],
      ['Defense rebounds and pushes: 4v3, then 5v4, then 5v5. Restart with the other team. Losers run or do push-ups.',
        [['d', 'x2', [-5, 34]], ['c', 'x3', [15, 28]], ['c', 'x1', [-15, 38]], ['c', '1', [-3, 22]], ['c', '2', [4, 12]]]],
    ],
  },
  'TR-08': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 4: 'rc', x1: [0, 24.5], x2: [14.5, 16], x3: [-14.5, 16], x4: [18, 5], c: [-23, 40] },
    court: 'f',
    s: [
      ['Half-court 4v4.', [['p', '1', '2'], ['c', 'x2', [15.5, 17.5]], ['c', 'x1', [3, 21]]]],
      ['Coach calls "change!" The offense drops the ball and the defense goes the other way.',
        [['p', '2', 'x2'], '|', ['d', 'x2', [12, 40], [6, 60]], ['c', 'x1', [-3, 40], [-4, 64]], ['c', 'x3', [-18, 40], [-16, 68]], ['c', 'x4', [21, 40], [18, 70]],
          ['c', '1', [2, 44], [5, 65]], ['c', '2', [15, 44], [10, 76]], ['c', '3', [-12, 46], [-9, 74]], ['c', '4', [8, 46], [0, 82]]]],
      ['Old offense sprints back, stops the ball, and matches up. Play it out.', [['p', 'x2', 'x4'], ['c', '2', [15, 72.5]], '|', ['sh', 'x4']]],
    ],
  },
  'TR-09': {
    court: 'f',
    p: { 'c*': [-23, 32], 1: 'top', 2: 'rw', 3: 'lw', 4: 're', 5: 'lb', x1: [0, 24.5], x2: [14.5, 16], x3: [-14.5, 16], x4: [5, 15], x5: [-5, 8.5] },
    n: [['coach calls "3, 5!"', [-14, 40]]],
    s: [
      ['Coach calls one or two numbers and passes to the other team.', [['p', 'c', 'x1']]],
      ['Called players touch the baseline before getting back: 5v4 or 5v3 the other way.',
        [['c', '3', [-12, 1]], ['c', '5', [-4, 1]], ['d', 'x1', [-1, 46], [-2, 62]], ['c', 'x2', [16, 44], [17, 70]], ['c', 'x3', [-16, 44], [-17, 70]], ['c', 'x4', [7, 48], [8, 76]], ['c', 'x5', [-5, 50], [-4, 80]],
          ['c', '1', [2, 44], [1, 66]], ['c', '2', [12, 46], [9, 76]], ['c', '4', [-3, 46], [-1, 82]]]],
      ['Defense sprints to the paint, stops the ball, and survives until help arrives.',
        [['c', '3', [-14, 40], [-12, 72]], ['c', '5', [-4, 44], [-3, 70]], ['p', 'x1', 'x3'], '|', ['sh', 'x3']]],
    ],
  },
  'TR-10': {
    court: 'f',
    p: { '1*': [0, 30], 2: [-18, 36], 3: [18, 36], x1: [-4, 18], x2: [4, 15] },
    n: [['no pass until half court', [12, 47]]],
    s: [
      ['Point guard advances the ball and cannot pass until half court. Wings run wide and ahead.',
        [['d', '1', [0, 50]], ['c', '2', [-18, 62]], ['c', '3', [18, 62]], ['c', 'x1', [-3, 44]], ['c', 'x2', [3.5, 40]]]],
      ['Trailing defenders chase from behind for back-tips. Pass ahead once you cross half court.',
        [['d', '1', [0, 58]], ['c', 'x1', [-2.5, 53.5]], ['c', 'x2', [4, 51]], '|', ['c', '3', [15, 72]], ['p', '1', '3']]],
      ['Once the ball is passed ahead, it\'s live: attack the rim.', [['L', '3', [6, 84]], ['c', '2', [-8, 80]], ['c', '1', [0, 70]], ['c', 'x1', [2, 66]], ['c', 'x2', [7, 70]]]],
    ],
  },
});
