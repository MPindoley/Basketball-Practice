// Drill diagrams, part 6: college drills (js/drills-college.js). Format: see diagrams-1.js.
// College drill diagrams: guards, passing, finishing, shooting, reads, team offense. Format: see js/diagrams-1.js.
Object.assign(DIAGRAMS, {
  'BH-21': {
    p: { c: [10, 38], '1*': 'top', x1: [0, 25], '1a': [0, 35], '2*': 'rw', x2: [14.6, 16.2], '2a': [21, 21.5], '3*': 'lw', x3: [-14.6, 16.2], '3a': [-21, 21.5] },
    n: [['12 seconds', [-10, 38]]],
    s: [
      ['On the whistle, each ball handler protects the ball for 12 seconds. The defender guards tight and is allowed to foul.',
        [['d', '1', [-2.5, 30], [-1, 31.5]], ['c', 'x1', [-2.2, 27], [-0.9, 28.5]],
          ['d', '2', [19, 16], [18, 13.5]], ['c', 'x2', [15.3, 12.25]], ['d', '3', [-19, 16], [-18, 13.5]], ['c', 'x3', [-15.3, 12.25]]]],
      ['Be strong with the ball, but keep your head up and your eyes on the rim the whole time. Stay poised. Then switch offense and defense.',
        [['d', '1', [2, 30], [3, 28.5]], ['c', 'x1', [1.5, 27.5], [2.6, 25.5]],
          ['d', '2', [19.5, 17], [18, 20]], ['c', 'x2', [16, 15], [15.7, 18.1]], ['d', '3', [-19.5, 17], [-18, 20]], ['c', 'x3', [-16, 15], [-15.7, 18.1]]]],
    ],
  },
  'BH-22': {
    p: {
      '4*': 'lw', '4a': [-19.8, 20.1], x4: [-14.6, 16.2], '1*': 'ls', '1a': [-10.5, 28.2], x1: [-7.75, 22.3],
      '2*': 'rs', '2a': [10.5, 28.2], x2: [7.75, 22.3], '3*': 'rw', '3a': [19.8, 20.1], x3: [14.6, 16.2],
    },
    n: [['X = dummy defenders: they don\'t move', [0, 40]]],
    s: [
      ['Show the shot, then drive right past the defender, body to body. Get into the lane in one dribble (two at most) and jump stop.',
        [['d', '4', [-13.2, 18.2], [-5, 13]], ['d', '1', [-5.7, 23.3], [-1.5, 17]], ['d', '2', [9.9, 21.3], [5, 13]], ['d', '3', [16, 14.2], [6, 7]]]],
      ['Shot fake, pass to the line on your right. That player calls "1 more, 1 more" and catches on a hop. Follow your pass to that line.',
        [['c', '1a', [-12.5, 24.5]], ['p', '4', '1a'], ['c', '2a', [6.5, 27.5]], ['p', '1', '2a'],
          ['c', '3a', [16.5, 22]], ['p', '2', '3a'], ['c', '4a', [-18, 13.5]], ['p', '3', '4a'], '|',
          ['m', '4', [-4, 21], [-10.5, 29]], ['m', '1', [4, 31], [11, 29.5]], ['m', '2', [12, 11], [20.5, 16], [20.5, 23.5]],
          ['m', '3', [-12, 8.5], [-22.5, 12], [-21.5, 21]]]],
      ['Round 2: crossover off the hot foot (your shooting-hand side), go left, and pass left. Round 3: attack right with a spin dribble and pass left.', []],
    ],
  },
  'PA-21': {
    p: { '1*': [2, 45], x1: [2, 41.5], 2: 'rw', x2: [13.8, 19.8], 3: 'lw', x3: [-13.8, 19.8], 4: 'rc', x4: [13, 7.5], 5: 'lb', x5: [-6.2, 10] },
    s: [
      ['Warm-up: 10 perfect passes in 30 seconds, no defense. Then live: the offense dribbles over half court against the defense.',
        [['d', '1', [1, 36], [0, 29]], ['c', 'x1', [1, 33], [0, 25.5]]]],
      ['Goal: 10 perfect passes in a row. Pass to the outside hand, away from the defender; catch on a hop, feet in the air.',
        [['c', '3', [-13.5, 13], [-19, 17], [-19.5, 22]], ['c', 'x3', [-12.5, 16.5], [-17.2, 19.5]], ['p', '1', '3'], '|',
          ['c', 'x1', [-3.2, 26.5]], ['c', 'x2', [5, 16]], ['c', 'x4', [4.5, 8]], ['c', 'x5', [-9.3, 10.1]]]],
      ['Denied? Cut backdoor. A backdoor cut and the pass out of it is a point, the same as 10 perfect passes.',
        [['c', '1', [1.5, 24], [-1.5, 10]], ['c', 'x1', [-1.5, 22], [-2, 16]], ['c', '3', [-18.6, 24.3]], ['p', '3', '1'], '|', ['sh', '1']]],
      ['Turnover? The defense takes it the other way in transition. Level 2: 5 perfect passes, 1 dribble each. Level 3: 4 offense vs 5 defense.', []],
    ],
  },
  'PA-22': {
    p: { 'c*': 'lw', 4: [-20.5, 13.5], 1: 'top', 2: [12.5, 23], 3: 'rc+0,2', R: [-8.5, 5.5] },
    n: [['R = rebounder', [-12, 40]]],
    s: [
      ['Coach passes to O1. As O1 catches, O2 calls "one more" and O1 passes right away.', [['p', 'c', '1'], '|', ['p', '1', '2']]],
      ['O3 calls "one more" and O2 hits O3 in the corner for a three or a one-dribble jumper. O2 cuts to the rim. The rebounder passes back to the coach.',
        [['p', '2', '3'], '|', ['sh', '3'], ['c', '2', [9, 14], [3, 8.5]], '|', ['r', 'R'], '|', ['p', 'R', 'c']]],
      ['Rotate by following your pass: O1 to the slot, O2 to the corner, O3 circles under the basket to the back of the line, O4 steps in at the top.',
        [['m', '1', [12.5, 23]], ['m', '4', [-21, 20], [-12, 27], 'top'], ['m', '2', [12, 4.5], 'rc+0,2'],
          ['m', '3', [12, 1], [0, 1], [-14, 1.5], [-20.5, 13.5]]]],
      ['Variation 1 (Drive the Slot): pretend the pass to the corner is denied. The slot player drives to the elbow and hits the corner for the shot.',
        [['p', 'c', '4'], '|', ['p', '4', '1'], '|', ['d', '1', [10, 20.5], 're'], '|', ['p', '1', '2'], '|', ['sh', '2']]],
      ['Variation 2 (Drive and Skip): the slot is denied. The top player drives to the middle of the paint and kicks to the corner, who hits the wing for the shot.', []],
    ],
  },
  'FN-21': {
    p: { 'c*': [0, 23], 1: [-6, 20], x2: [-6, 23.5], x1: [6, 20], 2: [6, 23.5] },
    s: [
      ['The coach sets a ball down between the first two players. The offensive player picks it up and drives to the rim.',
        [['c', '1', [-1.5, 20]], ['p', 'c', '1'], '|', ['d', '1', [-1.5, 12]], ['c', 'x1', [3, 14], [0, 9.5]]]],
      ['Gather strong with the ball chinned and go up through the defender\'s contact. Finish the play even when you get hit.',
        [['L', '1', 'rim-1.5,2.5'], ['c', 'x1', [1, 8.5]]]],
      ['Switch sides: the offense drives, shot fakes to get the defender off balance, gathers, and finishes. Next pair goes; trade offense and defense.',
        [['g', 'c'], ['m', '1', [-10.5, 17], [-10, 26], [-6.5, 28.5]], ['m', 'x1', [10.5, 17], [10, 26], [6.5, 28.5]], '|',
          ['c', '2', [1.5, 20]], ['p', 'c', '2'], ['c', 'x2', [-6, 20]], '|',
          ['d', '2', [1.5, 12]], ['c', 'x2', [-3, 14], [0, 9.5]], '|', ['L', '2', 'rim+1.5,2.5'], ['c', 'x2', [-1, 8.5]]]],
    ],
  },
  'SH-21': {
    p: { '2*': [-1.5, 7], 1: 'rw' },
    n: [['Right side first, then the left', [-12, 34]]],
    s: [
      ['Minute 1, basket-cut layups: cut hard to the rim, catch, and finish. Count makes each minute, then partners switch.',
        [['c', '1', [12, 14], [4, 8.5]], ['p', '2', '1'], '|', ['sh', '1'], '|', ['r', '2']]],
      ['Minute 2, sweep pull-ups: catch on the wing, swing the ball low across your knees, one hard dribble, and pull up.',
        [['c', '1', [11, 13], 'rw'], ['p', '2', '1'], '|', ['d', '1', [13, 16]], '|', ['sh', '1'], '|', ['r', '2']]],
      ['Minute 3, rhythm threes: feet ready before the catch, shoot in one motion. Then the same three shots on the left side.',
        [['c', '1', [16, 19.5], 'rw'], ['p', '2', '1'], '|', ['sh', '1'], '|', ['r', '2']]],
    ],
  },
  'SS-21': {
    p: { '4*': 'lb', '5*': 'rb', 1: 'rw', 2: 'lw' },
    s: [
      ['The left-block post passes to the right-wing guard, follows the pass, and sets the ball screen.',
        [['p', '4', '1'], '|', ['s', '4', [3, 14], [14.3, 19]]]],
      ['The guard uses the screen and the screener rolls straight to the rim for the pass and layup.',
        [['d', '1', [14.5, 22], [8, 20.5]], ['c', '4', [10, 13], [3, 8.5]], '|', ['p', '1', '4'], '|', ['sh', '4']]],
      ['Switch sides: guards stay outside, posts stay inside. The right-block post passes to the left wing and they run it from that side.',
        [['m', '4', [5, 4], [10.5, 4.5]], ['m', '1', [-20, 23]], ['p', '5', '2'], '|', ['s', '5', [-3, 14], [-14.3, 19]], '|',
          ['d', '2', [-14.5, 22], [-8, 20.5]], ['c', '5', [-10, 13], [-3, 8.5]], '|', ['p', '2', '5'], '|', ['sh', '5']]],
      ['Each round changes the screener\'s finish: roll, short roll and step through, short-roll pull-up, slip to the rim, or pop for a three.', []],
    ],
  },
  'SS-22': {
    court: 'f',
    p: { '1*': [0, 72], x1: [-2, 47], 2: 'lw', x2: [-12, 15], 3: 'rw', x3: [12, 15] },
    c: [['cc', 6, 'Version 1: ball defender waits in the circle']],
    s: [
      ['Version 1: the guard comes up on a sprint dribble. The defender in the circle can\'t guard until the guard enters the circle.',
        [['d', '1', [3, 53]], '|', ['d', '1', [4, 44], [4, 30]], ['c', 'x1', [1, 40], [2, 33]]]],
      ['Attack the advantage. The help defenders stop the ball first, then rotate to the open man until the chaser catches up.',
        [['d', '1', [4, 21]], ['c', 'x3', [3.5, 17.5]], ['c', 'x2', [-5, 12]], ['c', 'x1', [0.5, 29], [3, 25]], '|',
          ['p', '1', '3'], ['c', 'x3', [14.6, 16.2]], ['c', 'x1', [1.5, 21], [3.3, 18]]]],
      ['Play to a score or a stop. Version 2 (Chase): the ball defender starts behind the ball handler and can play as soon as the guard starts.', []],
    ],
  },
  'TO-21': {
    p: { '1*': 'rs', 2: 'rw', 3: 'lw', 4: 'ls', 5: [7.5, 12.5] },
    n: [['Guards: 1, 2, 3   Forwards: 4, 5', [0, 40]]],
    s: [
      ['Guard rule: after you pass, basket cut, screen, or use a screen. Here 1 passes to the forward at the left slot and basket cuts.',
        [['p', '1', '4'], '|', ['c', '1', [4, 18], [1, 9]]]],
      ['Leave a spot, fill a spot: 2 fills the open slot and the cutter fills out to the wing.',
        [['c', '2', 'rs'], ['c', '1', [10, 6.5], [17, 17]]]],
      ['Forwards screen only for guards, only at the slots. 4 passes and drops to the mid-post; 5 slides up to the opposite slot and screens for 2.',
        [['p', '4', '3'], '|', ['c', '4', [-7.5, 12.5]], ['s', '5', [7, 20.5]]]],
      ['2 cuts off the screen and fills the open slot; 5 fills behind. Teach it 5-on-0 (walk, then game speed), then 5-on-5 live.',
        [['c', '2', [4.5, 22], [1, 11], [-4, 18], [-9, 25]], '|', ['c', '5', 'rs'], ['p', '3', '2']]],
    ],
  },
});
// College defense drills: Perimeter Defense, Team Defense, Rebounding. Format: see js/diagrams-1.js.
Object.assign(DIAGRAMS, {
  // ---------- PD: Perimeter Defense ----------
  'PD-21': {
    p: { '1*': 'top', '1a': [0, 32.5], '1b': [0, 37], 2: 'rw', 3: 'lw', x1: [0, 12] },
    s: [
      ['Defender starts in the lane and closes out on the first player at the top: sprint, then short choppy steps, hands high.', [['c', 'x1', [0, 24.8]]]],
      ['Top passes to a wing. Jump to the ball into the gap while the pass is in the air, outside arm out ("jump and swipe").',
        [['p', '1', '2'], ['c', 'x1', [6, 20.5]]]],
      ['The passer cuts to the rim. Bump the cutter so he can\'t cut in front of you, and stay with him to just below the free-throw line.',
        [['c', '1', [1, 22], [0.5, 14]], ['c', 'x1', [3.5, 21.5], [3, 15]]]],
      ['Wing passes back to the next player at the top; close out again. After 3-4 closeouts the coach yells "Live!" and the top player attacks with 2-3 dribbles.',
        [['c', '1', [-9, 24], [0, 41.5]], ['c', '1a', [0, 28]], ['c', '1b', [0, 32.5]], ['p', '2', '1a'], ['c', 'x1', [0, 24.8]], '|',
          ['d', '1a', [5, 20], [6, 13.5]], ['c', 'x1', [3.5, 18.5], [4, 11]], '|', ['sh', '1a']]],
    ],
  },
  'PD-22': {
    p: { '2*': 'rw', 1: 'top', 3: 'lw', 5: [9, 11], x5: [10.3, 13.6] },
    z: [[[7.5, 9], [10.5, 13], 'post box'], [[-10.5, 9], [-7.5, 13], 'post box']],
    s: [
      ['Ball on the wing: play 3/4 on the high side (three-quarters in front, toward the top). Use a closed-fist arm bar to push the post out of the box.',
        [['c', '5', [11.8, 10]], ['c', 'x5', [12.3, 12.6]]]],
      ['Ball to the top: get on the line, up the line, between the post and the ball. Not so high that you give up the lob.',
        [['p', '2', '1'], ['c', '5', [9, 10.5]], ['c', 'x5', [7.8, 12.8]]]],
      ['Ball to the other wing: the post goes to the other box. Hit him with the arm bar and slide back to 3/4 high side.',
        [['p', '1', '3'], ['c', '5', [2, 11.5], [-9, 11]], ['c', 'x5', [2, 14], [-10.5, 14]]]],
      ['Wing dribbles lower for an angle. If the post catches it, pop back behind him and wall up: hands straight up, hold with your hips, no jumping.',
        [['d', '3', [-18, 9.5]], '|', ['p', '3', '5'], '|', ['c', 'x5', [-6.8, 13.2], [-6.7, 9.5]]]],
    ],
  },
  'PD-23': {
    p: { 'c*': [0, 35], k1: 'lc', k2: 'lw', k3: 'top', k4: 'rw', k5: 'rc', x1: [-4, 6.5], x2: [-4, 12.5], x3: [0, 16], x4: [4, 12.5], x5: [4, 6.5] },
    s: [
      ['On the whistle, all five close out to their spot and finish with a stutter step, hands up.',
        [['c', 'x1', [-18.5, 3.3]], ['c', 'x2', [-14.6, 16.2]], ['c', 'x3', [0, 24.8]], ['c', 'x4', [14.6, 16.2]], ['c', 'x5', [18.5, 3.3]]]],
      ['Drop step to stop a drive (open the hip and beat him to the spot), then step back with a hand up.',
        [['c', 'x1', [-16.5, 5.8]], ['c', 'x2', [-11.8, 14.8]], ['c', 'x3', [-2.8, 23.2]], ['c', 'x4', [11.8, 14.8]], ['c', 'x5', [16.5, 5.8]], '|',
          ['c', 'x1', [-18.5, 3.3]], ['c', 'x2', [-14.6, 16.2]], ['c', 'x3', [0, 24.8]], ['c', 'x4', [14.6, 16.2]], ['c', 'x5', [18.5, 3.3]]]],
      ['Turn and box out. The coach tosses it off the rim: box out first, then go get the ball with two hands in the air.',
        [['c', 'x1', [-17.3, 3.6]], ['c', 'x2', [-13.6, 15.4]], ['c', 'x3', [0, 23.5]], ['c', 'x4', [13.6, 15.4]], ['c', 'x5', [17.3, 3.6]], ['sh', 'c'], '|',
          ['c', 'x1', [-9, 4.5]], ['c', 'x2', [-7, 11.5]], ['c', 'x3', [0, 11.5]], ['c', 'x4', [7, 11.5]], ['c', 'x5', [9, 4.5]], ['r', 'x3']]],
      ['Then close out to the next spot and repeat. Run 3-4 full trips around the arc.',
        [['p', 'x3', 'c'], '|', ['c', 'x1', [-14.6, 16.2]], ['c', 'x2', [0, 24.8]], ['c', 'x3', [14.6, 16.2]], ['c', 'x4', [18.5, 3.3]], ['c', 'x5', [0, 1.5], [-18.5, 3.3]]]],
    ],
  },

  // ---------- TD: Team Defense ----------
  'TD-21': {
    p: { '1*': [-4, 44], 2: 'rw', 3: 'lw', 4: 'rc', 5: 'rb', x1: [-3.5, 40.5], x2: [14, 21], x3: [-14, 21], x4: [15, 7] },
    n: [['nobody guards 5', [12, 34]]],
    s: [
      ['1 dribbles across. One pass away, deny "on the line." Two passes away, sit on the help line.',
        [['d', '1', [0, 29]], ['c', 'x1', [0, 25.5]], ['c', 'x2', [14.4, 19.6]], ['c', 'x3', [-14.4, 19.6]], ['c', 'x4', [9, 3.5], [3, 6.5]]]],
      ['1 passes to the wing (never straight to 5). x3, the weak-side wing defender, drops to cover 5: "I\'ve got the post!" Everyone moves on the pass.',
        [['c', '2', [19, 22.5]], ['c', 'x2', [14.8, 21.2], [16.8, 20.4]], ['p', '1', '2'], ['c', 'x1', [2.7, 27.6]], ['c', 'x3', [9, 10.6]], ['c', 'x4', [10, 4], [19.5, 5.5]]]],
      ['Skip pass to 3: x3 stays on 5, x1 scrambles out to the new ball, and x2 and x4 drop to the help line. Move while the pass is in the air.',
        [['p', '2', '3'], ['c', 'x1', [-6, 22.5], [-14.6, 16.2]], ['c', 'x3', [7.5, 11], [5.5, 9.8]], ['c', 'x2', [12, 15.5], [3, 14.5]], ['c', 'x4', [12, 6], [2.5, 4.3]]]],
      ['Play it live to a score or a stop. Switch every 5 possessions and keep score.', []],
    ],
  },
  'TD-22': {
    p: { 'c*': [0, 30], c2: [-13, 19.5], 5: [-9, 17], 4: [9, 17], 3: [-5, 7], 2: [5, 7], x3: [-3.8, 9.3], x2: [3.8, 9.3], x5: [-7.2, 14.6], x4: [7.2, 14.6] },
    s: [
      ['Screeners\' defenders call it early: "Screen left!" "Screen right!" 5 and 4 screen down. Bump the cutter; the cutter\'s defender stays attached.',
        [['s', '5', [-6, 11]], ['s', '4', [6, 11]], ['c', 'x5', [-4.6, 13.2]], ['c', 'x4', [4.6, 13.2]], '|',
          ['c', '3', [-8.5, 10]], ['c', 'x3', [-4.4, 9.4]], ['c', '2', [8.5, 10]], ['c', 'x2', [4.4, 9.4]], '|',
          ['c', '3', [-10.5, 13.5]], ['c', 'x3', [-6.5, 8.6], [-8.6, 10.4]], ['c', 'x5', [-8.4, 14.6]],
          ['c', '2', [13, 15], [17.5, 21.5]], ['c', 'x2', [6.5, 8.6], [8.6, 10.4], [10.5, 12.5], [15.3, 19.2]], ['c', 'x4', [8.5, 15]]]],
      ['A coach sets a second screen, so 3 comes off two. x3 fights through again, the screeners\' defenders get back, and the other coach hits 3.',
        [['s', 'c2', [-11, 18.5]], ['c', '3', [-14, 17], [-17.5, 21.5]], ['c', 'x3', [-11, 13], [-13.8, 16], [-15.2, 19.3]], ['p', 'c', '3'],
          ['c', 'x5', [-3.5, 13], [-3.6, 9.6]], ['c', 'x4', [3.5, 13], [3.8, 9.6]]]],
      ['3 tries to catch and score. The defense must get 4 stops to get out; then a new group of 4 comes in on defense.',
        [['d', '3', [-17, 12], [-12, 8]], ['c', 'x3', [-14.5, 12], [-9.6, 7.4]], '|', ['sh', '3']]],
    ],
  },
  'TD-23': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 4: 'lc', x1: [0, 24.5], x2: [11, 18], x3: [-11, 18], x4: [-4, 8] },
    z: [[[-6, 5.25], [6, 19], "no man's land"]],
    n: [['20 seconds a possession', [0, 40]]],
    s: [
      ['The lane is no man\'s land. Pressure the ball but keep it in front, and be in the gap before the drive starts.',
        [['d', '1', [6, 23]], ['c', 'x1', [5, 20.2]], ['c', 'x2', [9.5, 16.5]]]],
      ['Stop the ball, then get back to your own man. On the kick-out, close out and jump to the ball.',
        [['p', '1', '2'], ['c', 'x2', [14.6, 16.3]], ['c', 'x1', [7, 19.5]], ['c', 'x3', [-3, 13]], ['c', 'x4', [-2, 7]]]],
      ['Wing drives baseline: stay in front and stop him before both feet get in the lane. Help steps over to stop the ball.',
        [['d', '2', [15, 9], [10.5, 6.5]], ['c', 'x2', [12.5, 8], [8, 6.2]], ['c', 'x4', [4, 6.5]]]],
      ['Defense loses the rep if the offense gets two feet in the lane in position to score, or scores. 3 stops in a row wins; losers run or do push-ups.', []],
    ],
  },
  'TD-24': {
    p: { '1*': [0, 29], 5: 're', x1: [0, 25.8], x5: [5.2, 16.3] },
    s: [
      ['5 walks up to set the ball screen. x5 calls it early and loud: "Screen left!"',
        [['s', '5', [2.6, 26.8]], ['c', 'x5', [8, 20], [5.5, 24.5]]]],
      ['As the guard comes off, x5 jumps out high and wide in his path and pushes him back toward half court. x1 fights over the top of the screen.',
        [['d', '1', [3.2, 30.2], [8, 31]], ['c', 'x5', [8.8, 28.2]], '|',
          ['d', '1', [9, 37]], ['c', 'x5', [10.5, 33.6]], ['c', 'x1', [1.2, 29.6], [4.5, 32.2]]]],
      ['x1 gets back to the ball, then x5 sprints back to 5, who rolls to the rim.',
        [['c', 'x1', [7.4, 34.4]], ['c', 'x5', [7, 20], [3.2, 13.8]], ['c', '5', [1, 16.5]]]],
      ['The goal is not a trap: make him dribble back toward half court. On a pass, both sprint back to their own man. 3-4 reps, then live.', []],
    ],
  },

  // ---------- RB: Rebounding ----------
  'RB-21': {
    p: { 'c*': [8, 32], 1: 'top', 2: 'rw', 3: 'lw', 4: 'rc', 5: 'lc', x1: [3.99, 13.3], x2: [2.47, 8.6], x3: [0, 16.2], x4: [-2.47, 8.6], x5: [-3.99, 13.3] },
    s: [
      ['Defenders move clockwise around the lane, calling out the man they will box out. It changes as they move.',
        [['c', 'x1', [2.47, 15.4], [0, 16.2]], ['c', 'x2', [3.99, 10.7], [3.99, 13.3]], ['c', 'x4', [0, 7.8], [2.47, 8.6]],
          ['c', 'x5', [-3.99, 10.7], [-2.47, 8.6]], ['c', 'x3', [-2.47, 15.4], [-3.99, 13.3]]]],
      ['On the coach\'s shot, all 5 offensive players crash hard. Find your man first and make contact.',
        [['sh', 'c'], ['c', '1', [0, 21.5]], ['c', 'x1', [0, 18.8]], ['c', '2', [11.5, 14.5]], ['c', 'x2', [9.3, 12.6]], ['c', '3', [-11.5, 14.5]], ['c', 'x3', [-9.3, 12.6]],
          ['c', '4', [13.5, 5.5]], ['c', 'x4', [11, 6.3]], ['c', '5', [-13.5, 5.5]], ['c', 'x5', [-11, 6.3]]]],
      ['Then go get the ball and chin it. The defense fast breaks the other way and the offense must get back.',
        [['c', 'x4', [4, 7.5]], ['r', 'x4'], '|', ['c', 'x2', [17, 19], [21, 30]], ['c', '1', [-2, 42]], ['c', '2', [12, 27], [11, 42]], ['p', 'x4', 'x2']]],
      ['If the offense gets the rebound, give them 8 seconds to run a last-second play.', []],
    ],
  },
  'RB-22': {
    court: 'f',
    p: { '1*': 'rw', '1a*': [20.5, 22], 2: 'lw', x1: [0, 2], x1a: [-3.5, -1.5], c: 'frw' },
    s: [
      ['X1 closes out on the shooter, then sprints across and boxes out O2 on the left wing. The shooter waits until X1 gets there.',
        [['c', 'x1', [14.5, 16]], '|', ['c', 'x1', [-14.6, 16.2]]]],
      ['O1 shoots. Make contact first, then go get the ball.',
        [['sh', '1'], ['c', '2', [-15.8, 17.2]], ['c', 'x1', [-13.8, 15.4]], '|', ['c', 'x1', [-4, 8]], ['r', 'x1']]],
      ['Speed dribble up the floor, pass to the coach on the right side, sprint to the top for the return pass, and pull up near the free-throw line.',
        [['d', 'x1', [-8, 30], [2, 58]], '|', ['p', 'x1', 'c'], ['c', 'x1', [0, 64]], '|', ['p', 'c', 'x1'], '|', ['d', 'x1', [0, 72]], ['sh', 'x1']]],
      ['Rotate: rebounder to the shooter line, shooter to the left wing, boxed-out player to the rebounder line.',
        [['m', 'x1', [23, 25.5]], ['m', '1', [-17, 18]], ['m', '2', [-7, -1.5]]]],
    ],
  },
});
// College drills: Transition, Post Play, Special Situations, Competitive Games, Conditioning. Format: see js/diagrams-1.js.
Object.assign(DIAGRAMS, {
  // ---------- TR: Transition ----------
  'TR-21': {
    court: 'f',
    p: { 'c*': [0, 12.5], 4: 'lb', 5: 'rb', 2: 'le', 1: 're' },
    n: [['4 seconds · no dribbles', [9, 47]]],
    s: [
      ['Coach tosses it off the backboard. 5 rebounds and outlets to 1 on his side; 4 sprints wide up the other sideline.',
        [['sh', 'c'], '|', ['c', '5', [4, 7]], ['r', '5'], ['c', '1', [19, 24]], ['c', '4', [-16, 12], [-22, 26]], '|', ['p', '5', '1']]],
      ['1 jump-stops, pivots, and hits 2 cutting hard up the middle. Talk: "Outlet!", "Middle!", "Ball!"',
        [['c', '2', [-3, 32], [0, 42]], ['c', '4', [-22, 52]], ['c', '5', [6, 46]], ['p', '1', '2']]],
      ['2 jump-stops and passes ahead to 4 for the layup. Score in 4 seconds with all four inside the far arc, or go again.',
        [['c', '4', [-18, 68], [-7, 78]], ['c', '1', [18, 50], [15, 64]], ['p', '2', '4'], '|',
          ['L', '4', [-2.5, 85.5]], ['c', '2', [0, 72]], ['c', '1', [13, 78]], ['c', '5', [5, 73]]]],
    ],
  },
  'TR-22': {
    court: 'f',
    p: { 'c*': [-21, 19], 1: [0, 19], x1: [0, 47], x2: [-8, 1.5], 2: [-26, 36], 3: [-26, 40.5], x3: [26, 36], x4: [26, 40.5] },
    s: [
      ['Coach passes to 1, who speed-dribbles to score. The half-court defender must touch him in the center circle; the chaser leaves on the pass.',
        [['p', 'c', '1'], '|', ['d', '1', [1, 32], [0.5, 44]], ['c', 'x1', [-0.5, 46.8]], ['c', 'x2', [-6, 24], [-5, 38]]]],
      ['Then he sprints back to stop the ball. The chaser runs the whole floor to help or tip it from behind.',
        [['L', '1', [5, 62], [4, 78], [2, 85.5]], ['c', 'x1', [-2, 62], [0.5, 77]], ['c', 'x2', [-4, 60], [-3.5, 80.5]]]],
      ['Score? The scorer sprints back alone to defend the paint. The two defenders inbound and attack 2-on-1 the other way.',
        [['c', 'x2', [-4, 88], [-2, 93.5]], ['r', 'x2'], ['c', 'x1', [-12, 80]], ['c', '1', [5, 70], [0, 50]], '|',
          ['p', 'x2', 'x1'], ['c', '1', [0, 40]], '|', ['d', 'x1', [-8, 50], [-6, 24]], ['c', 'x2', [8, 60], [10, 24]], ['c', '1', [0, 12]]]],
      ['Make the defender stop the ball, then pass for the layup. Next three come on with the teams switching roles.',
        [['d', 'x1', [-5, 15]], ['c', 'x2', [7, 12]], ['c', '1', [-3, 11.5]], '|', ['p', 'x1', 'x2'], '|', ['L', 'x2', 'rim+1.5,1.5']]],
    ],
  },
  'TR-23': {
    court: 'f',
    p: { '1*': [0, 1.5], 2: [21, 1.5], 3: [-21, 1.5] },
    n: [['Team goal: 13 in a row', [11, 47]]],
    s: [
      ['All three sprint their lanes, wings wide. Middle to wing and back. Call the receiver\'s name on every pass.',
        [['c', '1', [0, 18]], ['c', '2', [21, 20]], ['c', '3', [-21, 20]], ['p', '1', '2'], '|',
          ['c', '1', [0, 36]], ['c', '2', [21, 38]], ['c', '3', [-21, 38]], ['p', '2', '1']]],
      ['Middle to the other wing and back, all the way to the far end.',
        [['c', '1', [0, 56]], ['c', '2', [21, 58]], ['c', '3', [-21, 58]], ['p', '1', '3'], '|',
          ['c', '1', [0, 76]], ['c', '2', [21, 78]], ['c', '3', [-21, 78]], ['p', '3', '1']]],
      ['At the far end, the middle speed-dribbles back up the floor to the top of the key. Wings sprint back wide.',
        [['d', '1', [0, 25]], ['c', '2', [21, 30]], ['c', '3', [-21, 30]]]],
      ['Jump-stop and bounce-pass to a cutting wing for the layup. Any fumble, bad pass, or missed layup resets the count.',
        [['c', '2', [12, 14], [4, 9]], ['c', '3', [-12, 14], [-5, 10]], ['p', '1', '2'], '|', ['L', '2', 'rim+1.5,1.5']]],
    ],
  },

  // ---------- PO: Post Play ----------
  'PO-21': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', x1: [0, 24.5], x2: [14.8, 16.2], x3: [-14.8, 16.2], 5: [3, 9.5], x5: [2.5, 12] },
    s: [
      ['Ball starts up top. No dribbles: ball fakes and pivots only. The defender fights; the post seals him and shows a target hand.',
        [['p', '1', '2'], ['c', 'x1', [3, 23]], ['c', 'x3', [-9, 13]], ['c', '5', [10, 7.8]], ['c', 'x5', [8.8, 10]]]],
      ['Wing fakes high, pivots to the baseline side, and passes to the target hand. Fumbles, tips, and deflections don\'t count.',
        [['c', 'x2', [15.6, 18.4]], ['c', '2', [18, 15.8]], '|', ['p', '2', '5']]],
      ['Defender fronts? Post calls "Skip!" Kick it back out, then skip it to the far wing.',
        [['p', '5', '2'], '|', ['c', 'x5', [10.4, 10.7], [11.6, 9.4]], '|', ['p', '2', '3'], ['c', 'x3', [-14.6, 15.6]], ['c', 'x1', [-3, 23]]]],
      ['Post walks him to the middle of the lane, keeping him on his back. Passer fakes, pivots, and hits him deep. 5 clean catches, then new posts.',
        [['c', '5', [6, 7.9], [2.5, 8.2]], ['c', 'x5', [8, 10], [4.8, 9.8]], ['c', 'x3', [-15.4, 18.4]], ['c', '3', [-18, 15.6]], '|', ['p', '3', '5']]],
    ],
  },
  'PO-22': {
    p: { 'c*': [18, 19], c2: [-18, 19], 5: 'rb', 4: 'lb' },
    s: [
      ['Ball on the right. 5 goes after 4 and seals him: lead leg between his feet, hips into him. Big target hand, call for it.',
        [['c', '4', [-3.4, 9.2]], ['c', '5', [-1.2, 10.2]]]],
      ['Coaches reverse the ball. Now 4 goes after 5 and seals him the same way, then calls for it.',
        [['p', 'c', 'c2'], ['c', '4', [-2, 10.8]], ['c', '5', [0.2, 9.6]]]],
      ['Continuous: once he has the seal, the coaches swing it back and forth and he reseals on every pass.',
        [['p', 'c2', 'c'], ['c', '4', [0.4, 12.4], [2.4, 10.6]], '|', ['p', 'c', 'c2'], ['c', '4', [0.4, 12.4], [-2, 10.8]]]],
      ['After 5 passes, feed the sealed post. He catches and scores with a move.',
        [['p', 'c2', '4'], '|', ['c', '4', [-2.8, 7.4]], ['c', '5', [-0.4, 8.4]], '|', ['sh', '4']]],
    ],
  },

  // ---------- SP: Special Situations ----------
  'SP-21': {
    court: 'f',
    p: { '4*': [-5, -1.5], 1: [-9, 12], 5: [4, 14], 2: [15, 22], 3: [-17, 28] },
    n: [['4.7 seconds on the clock', [12, 4]]],
    s: [
      ['They just scored. The inbounder takes it out fast to the point guard. The big sprints ahead; the other two run wide.',
        [['c', '1', [-13, 8]], ['p', '4', '1'], ['c', '5', [2, 30]], ['c', '2', [20, 36]], ['c', '3', [-21, 44]]]],
      ['Point guard pushes it up the floor. The big sets a ball screen near half court; the inbounder sprints in behind as the trailer.',
        [['d', '1', [-8, 26], [-4, 42]], ['s', '5', [-1.5, 47.5]], ['c', '4', [-6, 14], [-5, 30]], ['c', '2', [21.5, 90]], ['c', '3', [-21.5, 90]]]],
      ['Point guard turns the corner and attacks: first look. The big rolls. The trailer gets in his vision for the pitch-back three.',
        [['d', '1', [1.5, 47], [5, 56], [7, 72]], ['c', '5', [-2, 64], [-3, 80]], ['c', '4', [-5.5, 48], [-1, 66]], '|', ['p', '1', '4'], '|', ['sh', '4']]],
    ],
  },
  'SP-22': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 4: 'rb', 5: 'lb', x1: [0, 24.5], x2: [14.8, 16.2], x3: [-14.8, 16.2], x4: [5.3, 7.4], x5: [-5.3, 7.4], c: [-26, 30] },
    n: [['24 seconds on the clock', [0, 40]]],
    s: [
      ['The offense has 24 seconds to score. The defense gets a stop and finishes it with the rebound.',
        [['p', '1', '2'], ['c', 'x1', [3.5, 22]], ['c', 'x3', [-9, 13]], '|', ['sh', '2'], ['r', 'x4']]],
      ['Stop with 12 left? The offense gets it back with only 12 seconds. Another stop at 4? Now 4 seconds to score.',
        [['p', 'x4', 'c'], ['c', 'x1', [0, 24.5]], ['c', 'x3', [-14.8, 16.2]], '|', ['p', 'c', '1']]],
      ['An offensive rebound resets the clock to 24 and the defense stays on. If the offense scores, the teams switch.',
        [['p', '1', '3'], ['c', 'x1', [-3.5, 22]], ['c', 'x2', [9, 13]], '|', ['sh', '3'], ['c', '5', [-7, 4.5], [-3, 4]], ['r', '5']]],
    ],
  },

  // ---------- CG: Competitive Games ----------
  'CG-21': {
    p: { '1*': 'ls', 2: 'rs', 3: 'lw', 4: 'rw', x1: [-7.8, 22.4], x2: [10, 19], x3: [-12.5, 14.5] },
    n: [['No dribbling', [0, 40]]],
    s: [
      ['Three defenders guard four, and the offense can\'t dribble. Pressure the ball, active hands, talk on every pass.',
        [['p', '1', '2'], ['c', 'x2', [7.8, 22.4]], ['c', 'x1', [-2, 18]], ['c', 'x3', [-9, 13]]]],
      ['Swing to the open man: close out at full speed, then the next defender sprints to the passer.',
        [['p', '2', '4'], ['c', 'x2', [14.8, 16.2]], ['c', 'x1', [7.8, 22.4]], ['c', 'x3', [-3, 13]]]],
      ['Contest the shot and get the rebound: that is a stop. Get 3 stops in a row; the defense gets 3 chances or it runs.',
        [['sh', '4'], ['c', 'x3', [-1.5, 8.5]], ['r', 'x3']]],
    ],
  },

  // ---------- CD: Toughness & Conditioning ----------
  'CD-21': {
    court: 'f',
    p: { '1*': 'top', 2: 'rw', 3: 'lw', x1: [0, 24.5], x2: [14.8, 16.2], x3: [-14.8, 16.2], 'c*': [25.5, 44] },
    n: [['20 seconds a possession', [-12, 60]]],
    s: [
      ['The offense has 20 seconds to score.',
        [['p', '1', '2'], ['c', 'x1', [3.5, 22]], ['c', 'x3', [-9, 13]], '|', ['sh', '2']]],
      ['Score: the defense sprints to touch the far foul line and back. The coach hits them on the way, and the scorers now defend.',
        [['c', 'x1', [3, 75]], ['c', 'x2', [10, 75]], ['c', 'x3', [-4, 75]], ['c', '1', [0, 30]], ['c', '2', [11, 28]], ['c', '3', [-11, 28]], '|',
          ['c', 'x1', [1, 40]], ['c', 'x2', [14, 38]], ['c', 'x3', [-12, 40]], ['p', 'c', 'x2']]],
      ['Stop and rebound: +1 for the defense. Now the offense sprints down and back before it gets the ball again.',
        [['d', 'x2', [13, 27]], ['c', 'x1', [1, 28]], ['c', 'x3', [-12, 24]], ['c', '2', [11.4, 24.2]], ['c', '1', [0.9, 24.5]], ['c', '3', [-10.3, 21.3]], '|',
          ['p', 'x2', 'x1'], '|', ['sh', 'x1'], ['c', '1', [0, 11]], ['c', '3', [-5, 9.5]], ['c', '2', [7, 12]], ['r', '1'], '|',
          ['c', 'x1', [2, 75]], ['c', 'x2', [10, 75]], ['c', 'x3', [-6, 75]]]],
      ['Coach passes to them on the way back and they attack again. Any foul sends that team off; the third team rotates in every 4 minutes.',
        [['p', '1', 'c'], ['c', 'x1', [2, 60]], ['c', 'x2', [12, 60]], ['c', 'x3', [-8, 60]], '|',
          ['c', 'x1', [1, 40]], ['c', 'x2', [14, 38]], ['c', 'x3', [-12, 40]], ['p', 'c', 'x2']]],
    ],
  },
});
