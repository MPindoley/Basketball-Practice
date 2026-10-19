// Drill diagrams, part 2: Shooting, Perimeter Defense, Rebounding, Post Play. Format: see diagrams-1.js.
Object.assign(DIAGRAMS, {
  // ---------- SH: Shooting ----------
  'SH-01': {
    p: { '1*': [0, 9.5], 2: [3.5, 2.5] },
    n: [['B · E · E · F', [0, 20]], ['Balance  Eyes  Elbow  Follow-through', [0, 24]]],
    s: [
      ['One-hand form shots from 3 feet. Partner rebounds and passes back.', [['sh', '1'], '|', ['r', '2'], '|', ['p', '2', '1']]],
      ['Make 5 in a row, then take a step back.', [['m', '1', [0, 13]], '|', ['sh', '1'], '|', ['r', '2'], '|', ['p', '2', '1']]],
      ['Work five spots around the rim, then finish with two-hand form shots.', [['m', '1', [6, 10]], '|', ['sh', '1'], '|', ['r', '2'], '|', ['p', '2', '1'], '|', ['m', '1', [-6, 10]]]],
    ],
  },
  'SH-02': {
    p: { 1: [18, 19], '1a*': [21, 22], '1b*': [24, 25], 2: [-18, 19], '2a*': [-21, 22] },
    s: [
      ['Cut down to the block and plant hard.', [['c', '1', [8.5, 9]]]],
      ['Cut up to the opposite elbow. The next player in line hits you on the catch.', [['c', '1', [-1, 12], [-6.5, 18.5]], ['p', '1a', '1']]],
      ['Shoot the mid-range jumper, get your own rebound, and go to the other line.', [['sh', '1'], '|', ['c', '1', [-3, 8]], ['r', '1'], '|', ['m', '1', [-24, 25]]]],
    ],
  },
  'SH-03': {
    p: { 1: 're', '2*': [2, 6.5], k1: 'le', k2: 'lw', k3: 'lc', k4: 'rw', k5: 'rc' },
    s: [
      ['Partner passes. Shooter catches ready and shoots.', [['p', '2', '1'], '|', ['sh', '1']]],
      ['Partner rebounds and passes right back. Shoot for 60 seconds and count makes.', [['c', '2', [-1.5, 7.5]], ['r', '2'], '|', ['p', '2', '1'], '|', ['sh', '1']]],
      ['Switch roles, then move to the next spot: elbows, wings, corners.', [['c', '2', [2, 7]], ['r', '2'], '|', ['m', '2', 'rw+1,1.5'], ['m', '1', [-2, 6.5]]]],
    ],
  },
  'SH-04': {
    p: { 1: [-12, 20], '2*': [-2.5, 7], '3*': [3, 7] },
    s: [
      ['Passer A hits the shooter. Catch and shoot.', [['p', '2', '1'], '|', ['sh', '1']]],
      ['Shooter moves to a new spot and passer B hits them. Passer A rebounds.', [['c', '1', [2, 25]], ['p', '3', '1'], ['c', '2', [-1, 6.5]], ['r', '2'], '|', ['sh', '1']]],
      ['Keep going for 60 seconds: new spot every shot, passes alternate. Then rotate.', [['c', '1', [14, 17]], ['p', '2', '1'], ['c', '3', [2, 6.5]], ['r', '3'], '|', ['sh', '1']]],
    ],
  },
  'SH-05': {
    p: { '1*': [3.5, 7], 2: [-3, 2.5], k1: 'rb', k2: 'lb', k3: [0, 19], k4: 're', k5: 'le', k6: 'top' },
    n: [['Ladder: rim → blocks → FT → elbows → top', [0, 40]]],
    s: [
      ['Start under the basket: layups from both sides, then Mikan.', [['sh', '1'], '|', ['c', '1', [-3.5, 7]], ['r', '1'], '|', ['sh', '1']]],
      ['Blocks: 3 in a row at a spot to advance. Rebounder feeds every shot.', [['r', '2'], '|', ['c', '1', 'rb+1.5,1.5'], ['p', '2', '1'], '|', ['sh', '1']]],
      ['Free-throw line: 5 makes. Elbows: alternate right and left to 8 makes.',
        [['r', '2'], '|', ['c', '1', [0, 21]], ['p', '2', '1'], '|', ['sh', '1'], '|', ['r', '2'], '|', ['c', '1', 're+1.5,1.5'], ['p', '2', '1'], '|', ['sh', '1']]],
      ['Top of the key: 10 makes to finish the ladder.', [['r', '2'], '|', ['c', '1', 'top+0,2'], ['p', '2', '1'], '|', ['sh', '1']]],
    ],
  },
  'SH-06': {
    p: { h: [8, 10], 1: [10.5, 7.5], 2: [10, 14], '3*': [0, 27], '4*': [-4, 26] },
    s: [
      ['Drift from the chair to the corner. Feet set before the catch.', [['c', '1', 'rc+0,1'], ['p', '3', '1']]],
      ['Catch and shoot, then cut back around the chair. Partner drifts as the first shooter releases.',
        [['sh', '1'], '|', ['c', '1', [12.5, 8], [11, 12.5]], ['c', '2', 'rc+0,2'], ['p', '4', '2']]],
      ['Stay at each spot until 10 makes: corners, wings, extended elbows. Then move the chair to the top.',
        [['sh', '2'], ['r', '3'], '|', ['c', '2', [13, 8]], ['c', '1', 'rw+1,2'], ['p', '3', '1']]],
    ],
  },
  'SH-07': {
    p: { '2*': 'rw', 1: 'top', 3: [-3, 4] },
    s: [
      ['Shooter passes to the top.', [['p', '2', '1']]],
      ['Relocate to an open spot: drift to the corner (or lift to the slot).', [['c', '2', 'rc+0,2']]],
      ['Catch the return pass with your feet set and shoot. Rebounder outlets to the top.',
        [['p', '1', '2'], '|', ['sh', '2'], '|', ['c', '3', [-1, 6]], ['r', '3'], '|', ['p', '3', '1']]],
    ],
  },
  'SH-08': {
    p: { 'c**': 'top', 1: [19.5, 22], '1a': [22, 25.5], 2: [-19.5, 22], '2a': [-22, 25.5] },
    s: [
      ['Step in and catch from the coach. Shot fake.', [['c', '1', 'rw'], ['p', 'c', '1']]],
      ['One hard dribble to the elbow and pull up.', [['d', '1', 're+1.5,0.5'], '|', ['sh', '1']]],
      ['Other wing goes. Next round: one dribble baseline, then progress to two dribbles.', [['c', '2', 'lw'], ['p', 'c', '2'], '|', ['d', '2', [-12, 11]], '|', ['sh', '2']]],
    ],
  },
  'SH-09': {
    p: { 'c*': 'rw', 1: 'rc', x1: [3, 10], 2: 'lw', x2: [-6, 13] },
    s: [
      ['Coach passes as the defender closes out. Shooter stays low, ready to catch and shoot.', [['p', 'c', '1'], ['c', 'x1', [17.5, 5.5]]]],
      ['Shot there in rhythm? Shoot. If not, shot-fake (or fake a dribble), then shoot.', [['c', 'x1', [20, 7.5]], ['d', '1', [17, 6]], '|', ['sh', '1']]],
      ['Weak-side offense and defense battle for the rebound.', [['c', '2', [-4.5, 9.5]], ['c', 'x2', [-2, 7]], '|', ['r', 'x2']]],
    ],
  },
  'SH-10': {
    p: { 1: [-18, 2], '2*': [7.5, 10], 3: [-7.5, 10], 4: [7.5, 14] },
    n: [['Team goal: 70%', [0, 38]]],
    s: [
      ['Sprint first, so the legs are tired like a game.', [['c', '1', [-18, 40], [0, 21]]]],
      ['Shoot a 1-and-1. Lane players rebound and pass back.', [['p', '2', '1'], '|', ['sh', '1'], '|', ['r', '3'], '|', ['p', '3', '1'], '|', ['sh', '1']]],
      ['Every miss adds a team sprint, or the team must make X in a row to leave.', []],
    ],
  },
  'SH-11': {
    p: { '1*': 'rc', k1: 'rw', k2: 'top', k3: 'lw', k4: 'lc' },
    n: [['You vs. the pro: first to 11', [0, 40]]],
    s: [
      ['Shoot from spot 1. Make = +1 for you. Miss = +2 for "the pro."', [['sh', '1'], '|', ['c', '1', [7, 6]], ['r', '1']]],
      ['Rotate to the next spot and shoot. First to 11 wins.',
        [['d', '1', 'rw+1.5,1.5'], '|', ['sh', '1'], '|', ['c', '1', [3, 8]], ['r', '1'], '|', ['d', '1', 'top+0,2'], '|', ['sh', '1']]],
    ],
  },

  // ---------- PD: Perimeter Defense ----------
  'PD-01': {
    p: { c: [0, 43], x1: [-14, 16], x2: [0, 16], x3: [14, 16], x4: [-7, 27], x5: [7, 27] },
    s: [
      ['Coach points left: everyone slides left. Points right: slide right. Stay low.',
        [['c', 'x1', [-19, 16]], ['c', 'x2', [-5, 16]], ['c', 'x3', [9, 16]], ['c', 'x4', [-12, 27]], ['c', 'x5', [2, 27]], '|',
          ['c', 'x1', [-14, 16]], ['c', 'x2', [0, 16]], ['c', 'x3', [14, 16]], ['c', 'x4', [-7, 27]], ['c', 'x5', [7, 27]]]],
      ['Drop step, then sprint forward and chop the feet.',
        [['c', 'x1', [-17, 12]], ['c', 'x2', [-3, 12]], ['c', 'x3', [11, 12]], ['c', 'x4', [-10, 23]], ['c', 'x5', [4, 23]], '|',
          ['c', 'x1', [-14, 20]], ['c', 'x2', [0, 20]], ['c', 'x3', [14, 20]], ['c', 'x4', [-7, 31]], ['c', 'x5', [7, 31]]]],
      ['"Shot": hands up and contest. "Charge": fall back safely. Work in 20-30 second bursts.', []],
    ],
  },
  'PD-02': {
    court: 'f',
    p: { '1*': [-21, 1.5], x1: [-19, 6.5] },
    z: [[[-24.5, 0.5], [-6.5, 93.5]]],
    s: [
      ['No ball first: the defender slides the zig-zag with a drop step at every turn.', [['c', 'x1', [-9, 18], [-22, 30], [-10, 42]]]],
      ['Reset. Now the offense dribbles the zig-zag at half speed.', [['m', 'x1', [-19, 6.5]]]],
      ['Defender stays nose on the ball and drop steps on every change of direction.',
        [['d', '1', [-11, 14], [-21, 26], [-11, 38], [-20, 49]], ['c', 'x1', [-10, 18], [-22, 30], [-10, 42], [-21, 54]]]],
    ],
  },
  'PD-03': {
    court: 'f',
    p: { x1: [-22, 2], x1a: [-22, -2.5], x2: [22, 2], x2a: [22, -2.5], k1: [22, 92], k2: [-22, 92] },
    s: [
      ['Sprint on the diagonal. The two lines cross at half court, so talk.', [['c', 'x1', [-3, 44], [15, 78]], ['c', 'x2', [3, 50], [-15, 78]]]],
      ['Break down 5 feet out: short choppy steps, hands high.', [['c', 'x1', [18.5, 86.5]], ['c', 'x2', [-18.5, 86.5]]]],
      ['One reach step to the sideline, then backpedal straight back.', [['c', 'x1', [20.5, 87]], ['c', 'x2', [-20.5, 87]], '|', ['c', 'x1', [20.5, 77]], ['c', 'x2', [-20.5, 77]]]],
    ],
  },
  'PD-04': {
    p: { '1*': [19, 19], '2*': [-19, 19], x1: [8, 1.5], x1a: [11.5, -1.5], x2: [-8, 1.5], x2a: [-11.5, -1.5] },
    s: [
      ['Sprint from under the basket and close out to foul line extended.', [['c', 'x1', [16.5, 17.5]], ['c', 'x2', [-16.5, 17.5]]]],
      ['Passer gives you the ball: catch and shoot the three.', [['p', '1', 'x1'], ['p', '2', 'x2'], '|', ['sh', 'x1'], ['sh', 'x2']]],
      ['Get your own rebound and replace the passer. Passer goes to the end of the line.',
        [['c', 'x1', [3, 7.5]], ['r', 'x1'], ['c', 'x2', [-3, 7.5]], ['r', 'x2'], ['m', '1', [14.5, -1.5]], ['m', '2', [-14.5, -1.5]], '|', ['d', 'x1', [19, 19]], ['d', 'x2', [-19, 19]]]],
    ],
  },
  'PD-05': {
    p: { x1: [5, 2], x2: [-5, 2], k1: 'rw+1,2', k2: 'rc', k3: 'lw-1,2' },
    s: [
      ['Seal the baseline: get a foot out of bounds.', [['c', 'x1', [13, 0]]]],
      ['Close out to the three at foul line extended.', [['c', 'x1', [16, 18.5]]]],
      ['Defensive slide down to the strong-side corner.', [['c', 'x1', [20, 5]]]],
      ['Sprint to the weak-side foul line extended, then slide to the baseline. Next player goes.', [['c', 'x1', [6, 12], [-16, 18.5]], '|', ['c', 'x1', [-17, 2]]]],
    ],
  },
  'PD-06': {
    p: { 'x1*': [2, 2.5], 'x1a': [-2, 2.5], 1: 'rw', '1a': [20, 22] },
    n: [['2 dribbles max', [12, 30]]],
    s: [
      ['Defender passes to the wing and closes out: sprint, then chop the feet, hands high.', [['p', 'x1', '1'], ['c', 'x1', [14.5, 16]]]],
      ['Offense shoots or attacks with 2 dribbles max. Play it out.', [['d', '1', [14, 9]], ['c', 'x1', [11.5, 10.5]], '|', ['sh', '1']]],
      ['Defense rebounds for the stop. Play to a score, then rotate lines.', [['c', 'x1', [5, 7]], ['r', 'x1']]],
    ],
  },
  'PD-07': {
    p: { 'c*': 'top', 1: 'rw', 2: 'lw', x1: [0, 10], x2: [0, 13.5], x3: [0, 17] },
    s: [
      ['Coach passes to the wing. First defender in line closes out.', [['p', 'c', '1'], ['c', 'x1', [14.5, 16.5]]]],
      ['Skip pass: next defender closes out. The weak-side defender sprints to the line of the basket, then to the end of the line.',
        [['p', '1', '2'], ['c', 'x2', [-14.5, 16.5]], ['c', 'x1', [4, 8]], ['c', 'x3', [0, 10]], '|', ['c', 'x1', [1, 20.5]]]],
      ['Skip again and keep it going for a set time.', [['p', '2', '1'], ['c', 'x3', [14.5, 16.5]], ['c', 'x2', [-4, 8]], ['c', 'x1', [0, 10]], '|', ['c', 'x2', [1, 20.5]]]],
    ],
  },
  'PD-08': {
    p: { '1*': [0, 10], x: [3, 13], 2: 'rw', 3: 'rc', 5: 'lb' },
    s: [
      ['Guard rolls it out to the wing. Defender closes out with short steps, hands high.', [['p', '1', '2'], ['c', 'x', [14.5, 16.5]], ['m', '1', [0, 33]]]],
      ['Wing fakes a middle drive. Defender walls off and mirrors the ball.', [['d', '2', [14.5, 20.5]], ['c', 'x', [12, 18.3]]]],
      ['Ball goes to the corner. Defender jumps to the help side.', [['p', '2', '3'], ['c', 'x', [7, 11]]]],
      ['Corner drives: defender helps, then blocks out the weak-side post on the shot.',
        [['d', '3', [12, 4.5]], ['c', 'x', [6, 6.5]], '|', ['sh', '3'], ['c', '5', [-4, 8.5]], ['c', 'x', [-1.8, 6.5]], '|', ['r', 'x']]],
    ],
  },
  'PD-09': {
    p: { 'c*': 'top', 1: 'rw', 2: 'lw', x1: [14.5, 19.5], x2: [-14.5, 19.5] },
    s: [
      ['Wings V-cut. Defenders deny (hand and foot in the lane, thumb down) and force the catch out high.',
        [['c', '1', [12, 11], [18.5, 22]], ['c', 'x1', [10, 13.5], [15, 20.5]], ['c', '2', [-12, 11], [-18.5, 22]], ['c', 'x2', [-10, 13.5], [-15, 20.5]], ['p', 'c', '1']]],
      ['On the catch: take away the middle and push baseline. Off-ball defender slides to the midline.', [['c', 'x1', [16.5, 23.5]], ['c', 'x2', [-2, 15]]]],
      ['Skip pass: closeout, while the other defender sprints to help.', [['p', '1', '2'], ['c', 'x2', [-16, 20.5]], ['c', 'x1', [2, 15]]]],
      ['Advance: coach drives (stay in deny, plug with your butt), then add a baseline drive.', []],
    ],
  },
  'PD-10': {
    court: 'f',
    p: { '1*': [-10, 2], x1: [-10, 7] },
    s: [
      ['1v1 zig-zag up the floor. The defender turns the ball handler at every sideline.', [['d', '1', [-20, 14], [-6, 28], [-18, 42]], ['c', 'x1', [-19, 18], [-5, 32], [-16, 46.5]]]],
      ['Past half court it\'s live: play 1v1 to a score.', [['d', '1', [-8, 60], [-5, 80.5]], ['c', 'x1', [-6, 64], [-3, 86]], '|', ['sh', '1']]],
      ['Progress to 2v2 (add wing defense), then 3v3. Play each to a score.', []],
    ],
  },
  'PD-11': {
    p: { '1*': [17, 22], x1: [1, 12] },
    z: [[[2.5, 7.5], [9, 13], 'mat']],
    s: [
      ['Offense drives. Defender beats them to the spot: feet set, chest square.', [['d', '1', [9.5, 14.5]], ['c', 'x1', [5.5, 10.5]]]],
      ['On contact: sit down, roll onto your backside, chin tucked.', [['d', '1', [7.5, 12.5]], ['c', 'x1', [4.5, 9]]]],
      ['Progress from walking to jogging into contact.', []],
    ],
  },

  // ---------- RB: Rebounding ----------
  'RB-01': {
    p: { 'c*': 'top', 1: 're', 2: 'le', x1: 'rb', x2: 'lb' },
    s: [
      ['Coach shoots. Defenders step up and make contact before looking for the ball.', [['sh', 'c'], ['c', 'x1', [5.5, 13.5]], ['c', 'x2', [-5.5, 13.5]], ['c', '1', [5.5, 16.5]], ['c', '2', [-5.5, 16.5]]]],
      ['Move the offense out of the key before you rebound (or hold the box-out for 5 seconds).', [['c', 'x1', [6, 15.5]], ['c', '1', [7, 19]], ['c', 'x2', [-6, 15.5]], ['c', '2', [-7, 19]]]],
      ['Whoever gets the rebound stays on. Next group rotates in.', [['c', 'x2', [-2, 8.5]], ['r', 'x2']]],
    ],
  },
  'RB-02': {
    p: { 'c*': [8, 31], 1: 'rw', 2: 'top', 3: 'lw', x1: [7, 1], x2: [2.5, 1], x3: [-7, 1] },
    s: [
      ['Whistle: defense touches the baseline and sprints out to meet the offense.', [['c', 'x1', [14.5, 16.5]], ['c', 'x2', [0, 24.5]], ['c', 'x3', [-14.5, 16.5]], ['p', 'c', '2']]],
      ['Offense catches and shoots.', [['sh', '2']]],
      ['Offense crashes. Defense makes contact, holds the box-out, then gets the ball.',
        [['c', '1', [12.5, 13]], ['c', 'x1', [10.5, 11]], ['c', '2', [0, 19]], ['c', 'x2', [0, 15.5]], ['c', '3', [-12.5, 13]], ['c', 'x3', [-10.5, 11]], '|', ['r', 'x2']]],
    ],
  },
  'RB-03': {
    p: { b: [0, 19], 1: [6.36, 25.36], 2: [-6.36, 25.36], 3: [-6.36, 12.64], 4: [6.36, 12.64], x1: [3.54, 22.54], x2: [-3.54, 22.54], x3: [-3.54, 15.46], x4: [3.54, 15.46] },
    n: [['Defender inside, offense outside', [0, 35]]],
    s: [
      ['On the whistle, the offense goes for the ball. Defender turns and makes contact.',
        [['c', '1', [3.2, 26.55]], ['c', 'x1', [2.07, 23.88]], ['c', '2', [-7.55, 22.2]], ['c', 'x2', [-4.88, 21.07]],
          ['c', '3', [-3.2, 11.45]], ['c', 'x3', [-2.07, 14.12]], ['c', '4', [7.55, 15.8]], ['c', 'x4', [4.88, 16.93]]]],
      ['Stay between your player and the ball for 3-5 seconds. Move your feet, not your hands.',
        [['c', '1', [7.31, 22.72]], ['c', 'x1', [4.72, 21.41]], ['c', '2', [-3.72, 26.31]], ['c', 'x2', [-2.41, 23.72]],
          ['c', '3', [-7.31, 15.28]], ['c', 'x3', [-4.72, 16.59]], ['c', '4', [3.72, 11.69]], ['c', 'x4', [2.41, 14.28]]]],
      ['Switch roles and go again.', []],
    ],
  },
  'RB-04': {
    p: { '1*': [-8, 7] },
    s: [
      ['Toss the ball off the backboard so it comes off the opposite side.', [['sh', '1']]],
      ['Jump across the lane and catch it at its highest point, outside the opposite lane line.', [['c', '1', [8, 7]], ['r', '1']]],
      ['Land strong, chin it, and toss it back. Repeat for 30 seconds.', [['sh', '1'], '|', ['c', '1', [-8, 7]], ['r', '1']]],
    ],
  },
  'RB-05': {
    p: { 'c*': [-6, 23], 1: 'lc', 2: 'lw', 3: 'top', 4: 'rw', 5: 'rc', x1: [-8, 2.5], x2: [-4, 2.5], x3: [0, 1.5], x4: [4, 2.5], x5: [8, 2.5] },
    s: [
      ['Coach shoots. Defenders rush out from under the rim, one to each shooter.',
        [['sh', 'c'], ['c', 'x1', [-16, 5]], ['c', 'x2', [-13, 15.5]], ['c', 'x3', [2, 22.5]], ['c', 'x4', [13, 15.5]], ['c', 'x5', [16, 5]]]],
      ['Make contact and block out. Defensive rebound = 1 point for the defense.',
        [['c', '1', [-14.5, 5.5]], ['c', 'x1', [-11.5, 5.2]], ['c', '2', [-12, 13.5]], ['c', 'x2', [-9.5, 11]], ['c', '3', [1, 18.5]], ['c', 'x3', [0.5, 15]],
          ['c', '4', [12, 13.5]], ['c', 'x4', [9.5, 11]], ['c', '5', [14.5, 5.5]], ['c', 'x5', [11.5, 5.2]], '|', ['r', 'x3']]],
      ['Defense: outlet to the coach and reset. Offensive rebound = 1 point and straight back up. First to 10.', [['p', 'x3', 'c']]],
    ],
  },
  'RB-06': {
    p: { 'c*': [12, 16], 1: [0, 29.5], 2: [18, 19], 3: [-18, 19], 4: 'rc', 5: 'lc', x1: [0, 21], x2: 're', x3: 'le', x4: 'rb', x5: 'lb' },
    s: [
      ['Coach shoots from 12-17 feet. Every defender finds a man and makes contact first.',
        [['sh', 'c'], ['c', '4', [16, 6]], ['c', 'x4', [12.5, 6.5]], ['c', '5', [-16, 6]], ['c', 'x5', [-12.5, 6.5]], ['c', '2', [15.5, 12]], ['c', 'x2', [11.5, 10.5]],
          ['c', '3', [-14, 14.5]], ['c', 'x3', [-10.5, 13]], ['c', 'x1', [0, 16]]]],
      ['Hold the contact, then go get it. Rebound everything, including makes.', [['c', 'x3', [-6, 9]], ['c', '3', [-9.5, 12]], '|', ['r', 'x3']]],
      ['Defensive rebound: outlet and run the break. Offensive rebound: score right away.', [['c', 'x2', [17, 26]], ['p', 'x3', 'x2'], ['c', 'x1', [-6, 30], [-4, 38]]]],
      ['Score: +1 make, +1 defensive rebound, +2 offensive rebound, +1 steal, -1 turnover or foul. Play to 15.', []],
    ],
  },
  'RB-07': {
    p: { 'c*': [-8, 17], 1: [-3, 10.5], 2: [3, 10.5], 3: [0, 14.5] },
    c: [['rim', 1.6]],
    n: [['Rim cover on: no shot goes in', [10, 24]]],
    s: [
      ['Shot goes up. Nothing goes in, so every shot is a rebound.', [['sh', 'c']]],
      ['Battle for position and go get it.', [['c', '1', [-2.5, 7.5]], ['c', '2', [2.5, 8]], ['c', '3', [0.5, 11]], '|', ['r', '2']]],
      ['Most rebounds wins. Everyone who did not get one runs a sprint.',
        [['p', '2', 'c'], '|', ['sh', 'c'], '|', ['c', '1', [-0.5, 7]], ['c', '2', [3, 9.5]], ['c', '3', [-3, 10]], '|', ['r', '1']]],
    ],
  },

  // ---------- PO: Post Play ----------
  'PO-01': {
    p: { 'c**': 're', 5: 'rb', 4: 'lb' },
    s: [
      ['Coach passes from the elbow. Post catches with two hands and chins it.', [['c', '5', 'rb+0.5,1'], ['p', 'c', '5']]],
      ['Drop step to the baseline and finish on the same side.', [['c', '5', [4.5, 6]], '|', ['sh', '5']]],
      ['Next: power dribble to the middle and finish on the other side. Then jump hook and up-and-under.',
        [['m', '5', 'rb+0.5,1'], '|', ['p', 'c', '5'], '|', ['d', '5', [-2.5, 7.5]], '|', ['sh', '5']]],
    ],
  },
  'PO-02': {
    p: { '2*': 'rw', 5: 'rb', x5: [9.5, 11] },
    s: [
      ['Defender fronts from the top side. Post seals: wide base, arm bar, sit on the defender\'s leg.', [['c', '5', [8.3, 8.3]], ['c', 'x5', [9.6, 10.9]]]],
      ['Wing enters the ball away from the defender. Live on the catch.', [['p', '2', '5'], ['c', 'x5', [8, 10.5]]]],
      ['Score with a move against the live defender.', [['c', '5', [3.5, 6.5]], ['c', 'x5', [5.5, 8.5]], '|', ['sh', '5']]],
    ],
  },
  'PO-03': {
    p: { 'c**': [0, 27], 4: 'lb', 5: 'rb', x: [0, 19.5] },
    s: [
      ['Coach passes to either post. The defender is live on the pass.', [['p', 'c', '5'], ['c', 'x', [5, 11]]]],
      ['Post scores quickly, before the help arrives.', [['c', '5', [4, 6.5]], ['c', 'x', [3, 9]], '|', ['sh', '5']]],
      ['Next rep the coach picks the other side.', [['p', 'c', '4'], ['c', 'x', [-5, 11]], '|', ['c', '4', [-4, 6.5]], '|', ['sh', '4']]],
    ],
  },
  'PO-04': {
    p: { '2*': 'rw', 5: 'rb', 1: 'top', x5: [9, 10.5], x1: [-1.5, 23.5] },
    s: [
      ['Wing enters to the post. Perimeter players relocate after the entry.', [['p', '2', '5'], '|', ['c', '2', [20, 9]], ['c', '1', [-8, 25]], ['c', 'x1', [-6, 22]]]],
      ['Guarded 1v1: score with a move. A guard digs or doubles: read it.', [['c', 'x1', [4.5, 12.5]]]],
      ['Kick out to the open perimeter player for a catch-and-shoot.', [['p', '5', '1'], '|', ['sh', '1']]],
    ],
  },
});
