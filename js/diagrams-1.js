// Drill diagrams, part 1: Warm-Up, Ball Handling, Passing, Finishing.
//
// Format (all positions in feet; see Court.SPOTS for named spots like rw, lc, top; 'f' prefix = far end;
// 'rw+2,3' = 2 ft right and 3 ft down from the right wing; the basket is at the top of the board):
//   court: 'f' for full court, otherwise half court
//   p:     players. Key = id; each '*' after the id = one ball in hand.
//          Ids: digits/letters = offense, x… = defense, c… = coach, k… = cone, h… = chair, b… = loose ball.
//          Trailing lowercase letters are hidden in the label, so 2a and 2b both read "2".
//   s:     steps: [caption, actions]. Actions in a step run together; '|' starts the next beat.
//          ['c', id, ...spots] cut      ['d', id, ...spots] dribble   ['s', id, spot] screen
//          ['m', id, ...spots] rotate   ['L', id, ...spots] drive + layup
//          ['p', from, to] pass   ['sh', id] shot   ['r', id] rebound   ['g', id] new ball
//   n:     [text, spot] labels    z: [spotA, spotB, label] zones    c: [spot, radius, label] rings
const DIAGRAMS = {};

Object.assign(DIAGRAMS, {
  // ---------- WU: Warm-Up & Layups ----------
  'WU-01': {
    p: { 1: [-15, 1.8], 2: [-5, 1.8], 3: [5, 1.8], 4: [15, 1.8], '1a': [-15, -2.4], '2a': [-5, -2.4], '3a': [5, -2.4], '4a': [15, -2.4] },
    s: [
      ['Front row goes: jog, high knees, butt kicks, A-skips, karaoke, lunges, slides, backpedal, sprints.',
        [['c', '1', [-15, 19]], ['c', '2', [-5, 19]], ['c', '3', [5, 19]], ['c', '4', [15, 19]]]],
      ['Next row leaves when the group ahead reaches the free-throw line.',
        [['c', '1', [-15, 44]], ['c', '2', [-5, 44]], ['c', '3', [5, 44]], ['c', '4', [15, 44]],
          ['c', '1a', [-15, 19]], ['c', '2a', [-5, 19]], ['c', '3a', [5, 19]], ['c', '4a', [15, 19]]]],
      ['Turn at half court and come back down the outside (or go full court). Talk the whole time.',
        [['c', '1', [-12, 41], [-12, 4]], ['c', '2', [-2, 41], [-2, 4]], ['c', '3', [8, 41], [8, 4]], ['c', '4', [18, 41], [18, 4]],
          ['c', '1a', [-15, 44]], ['c', '2a', [-5, 44]], ['c', '3a', [5, 44]], ['c', '4a', [15, 44]]]],
    ],
  },
  'WU-02': {
    p: { '1*': [-5, 32], 2: [5, 32] },
    n: [['Team goal: 8 in a row in 3:00', [0, 42]]],
    s: [
      ['Run at the rim passing back and forth. No dribbles, no traveling.',
        [['c', '1', [-5, 22]], ['c', '2', [5, 20]], ['p', '1', '2'], '|', ['c', '1', [-4, 13]], ['c', '2', [5, 12]], ['p', '2', '1']]],
      ['Outside player finishes the layup. Partner crashes and catches it before it hits the floor.',
        [['c', '1', [-2.5, 7.5]], ['sh', '1'], ['c', '2', [3, 7]], ['r', '2']]],
      ['Swap spots and sprint to the next basket. A miss restarts the team count.',
        [['m', '2', [-5, 30]], ['m', '1', [5, 32]]]],
    ],
  },
  'WU-03': {
    p: { '1*': 'rw+2,6', '1a': 'rw+4,9', '1b': 'rw+6,12', 2: 'lw-2,6', '2a': 'lw-4,9', '2b': 'lw-6,12' },
    n: [['Shooters', 'rw+5,17'], ['Rebounders', 'lw-5,17']],
    s: [
      ['Shooter drives from the right wing for a right-hand layup. Rebounder breaks to the rim.',
        [['L', '1', 'rb-1,1', 'rim+1.5,1.5'], ['c', '2', 'lb+2,-1']]],
      ['Rebounder grabs it before it hits the floor and passes to the next shooter.',
        [['r', '2'], '|', ['p', '2', '1a']]],
      ['Switch lines. After 2 minutes, move to the left side. Progress: power, reverse, jump-stop finish.',
        [['m', '1', 'lw-8,15'], ['m', '2', 'rw+8,15']]],
    ],
  },
  'WU-04': {
    court: 'f',
    p: { '1*': [9, 1.5], '1a*': [13.5, 1.5], '1b*': [18, 1.5], '2*': [-9, 92.5], '2a*': [-13.5, 92.5], '2b*': [-18, 92.5] },
    n: [['5 dribbles or fewer', [0, 47]]],
    s: [
      ['First player in each line speed dribbles the length of the floor and finishes.',
        [['L', '1', [16, 30], [14, 66], [3, 85]], ['L', '2', [-16, 64], [-14, 28], [-3, 9]]]],
      ['Rebound your own shot and join the line at that end.',
        [['r', '1'], ['r', '2'], '|', ['m', '1', [-22.5, 92.5]], ['m', '2', [22.5, 1.5]]]],
      ['Next player goes as soon as the one ahead crosses half court.',
        [['L', '1a', [16, 30], [14, 66], [3, 85]], ['L', '2a', [-16, 64], [-14, 28], [-3, 9]]]],
    ],
  },

  // ---------- BH: Ball Handling ----------
  'BH-01': {
    court: 'f',
    p: { '1*': [-18, 1.5], '2*': [-6, 1.5], '3*': [6, 1.5], '4*': [18, 1.5], '5*': [-12, 92.5], '6*': [0, 92.5], '7*': [12, 92.5] },
    s: [
      ['Dribble to half court with the called move: pound, cross, tween, behind, in-and-out. Jump stop.',
        [['d', '1', [-18, 44]], ['d', '2', [-6, 44]], ['d', '3', [6, 44]], ['d', '4', [18, 44]],
          ['d', '5', [-12, 50]], ['d', '6', [0, 50]], ['d', '7', [12, 50]]]],
      ['Pivot, then dribble back to the baseline. Next call, next move.',
        [['d', '1', [-18, 1.5]], ['d', '2', [-6, 1.5]], ['d', '3', [6, 1.5]], ['d', '4', [18, 1.5]],
          ['d', '5', [-12, 92.5]], ['d', '6', [0, 92.5]], ['d', '7', [12, 92.5]]]],
    ],
  },
  'BH-02': {
    p: { c: [0, 42], '1*': [-16, 14], '2*': [-5.5, 14], '3*': [5.5, 14], '4*': [16, 14], '5*': [-11, 26], '6*': [0, 26], '7*': [11, 26] },
    n: [['Everyone faces the coach', [0, 35]]],
    s: [
      ['30 seconds each: pound right, pound left, crossover, between the legs, behind the back.', []],
      ['Wraps around head, waist and legs. Figure 8. Front-to-back V-dribble with each hand.', []],
      ['Eyes up: the coach flashes fingers and players call out the number.', []],
    ],
  },
  'BH-03': {
    p: { c: [0, 42], '1**': [-16, 14], '2**': [-5.5, 14], '3**': [5.5, 14], '4**': [16, 14], '5**': [-11, 26], '6**': [0, 26], '7**': [11, 26] },
    s: [
      ['30 seconds each: same time, alternate, high-low.', []],
      ['Both cross, then one pounds while the other crosses.', []],
      ['Walk forward dribbling both balls, then retreat back.',
        [['d', '1', [-16, 19]], ['d', '2', [-5.5, 19]], ['d', '3', [5.5, 19]], ['d', '4', [16, 19]], ['d', '5', [-11, 31]], ['d', '6', [0, 31]], ['d', '7', [11, 31]], '|',
          ['d', '1', [-16, 14]], ['d', '2', [-5.5, 14]], ['d', '3', [5.5, 14]], ['d', '4', [16, 14]], ['d', '5', [-11, 26]], ['d', '6', [0, 26]], ['d', '7', [11, 26]]]],
    ],
  },
  'BH-04': {
    court: 'f',
    p: { '1*': [-20, 1.5], '1a*': [-23, -1.6], '2*': [20, 1.5], '2a*': [23, -1.6] },
    z: [[[-24.5, 0.5], [-6.5, 93.5]], [[6.5, 0.5], [24.5, 93.5]]],
    s: [
      ['Stay between the sideline and the lane line. Dribble diagonally and change direction at every turn.',
        [['d', '1', [-8, 12], [-22, 24], [-8, 36], [-22, 48]], ['d', '2', [8, 12], [22, 24], [8, 36], [22, 48]]]],
      ['Use the called move at each turn: crossover, between, behind, spin, in-and-out.',
        [['d', '1', [-8, 60], [-22, 72], [-8, 84], [-15, 92]], ['d', '2', [8, 60], [22, 72], [8, 84], [15, 92]],
          ['d', '1a', [-8, 12], [-22, 24], [-8, 36]], ['d', '2a', [8, 12], [22, 24], [8, 36]]]],
    ],
  },
  'BH-05': {
    p: { h: 're', '1*': [19, 22], '1a*': [21.5, 25.5], '1b*': [24, 29] },
    s: [
      ['Attack the chair at game speed.', [['d', '1', [9.5, 20.5]]]],
      ['Make the called move at the chair: crossover, between, behind, hesitation, in-and-out.', [['d', '1', [7.5, 16], [5, 14]]]],
      ['Finish with a layup or a 1-2 pull-up. Two reps of each move from both wings.', [['L', '1', 'rim+1,3']]],
    ],
  },
  'BH-06': {
    court: 'f',
    p: { '1*': [-13, 1.5], '1a*': [-17.5, 1.5], '2*': [13, 1.5], '2a*': [17.5, 1.5] },
    n: [['walk', [-19.5, 9]], ['sprint', [-19.5, 23]], ['hesitate', [-19.5, 45]], ['retreat', [-19.5, 57]], ['attack!', [-19.5, 72]]],
    s: [
      ['Walk, then sprint. Every rep changes speed at least twice.', [['d', '1', [-13, 30]], ['d', '2', [13, 30]]]],
      ['Hesitation, in-and-out, or stop-and-go at full speed.', [['d', '1', [-11, 45], [-13, 60]], ['d', '2', [11, 45], [13, 60]]]],
      ['Retreat dribble, then attack and finish with a layup.',
        [['d', '1', [-14, 53]], ['d', '2', [14, 53]], '|', ['L', '1', [-6, 80], [-2.5, 86]], ['L', '2', [6, 80], [2.5, 86]]]],
    ],
  },
  'BH-07': {
    p: { c: [0, 42], '1*': [-15, 14], '2*': [-5, 14], '3*': [5, 14], '4*': [15, 14], '5*': [-10, 26], '6*': [10, 26] },
    n: [['+ 1 tennis ball each', [0, 33]]],
    s: [
      ['Dribble with one hand while tossing and catching the tennis ball with the other. Eyes up.', []],
      ['Switch hands every 30 seconds.', []],
      ['Partner version: pair up and toss the tennis ball back and forth while both dribble.',
        [['d', '2', [-9, 14]], ['d', '3', [9, 14]], ['d', '5', [-10, 22]], ['d', '6', [10, 22]]]],
    ],
  },
  'BH-08': {
    court: 'f',
    p: { '1*': [-8, 2.5], x1: [-8, 7.5] },
    n: [['10 seconds to get here', [10, 50]]],
    s: [
      ['Round 1: defender presses with hands behind the back. Ball handler attacks.', [['d', '1', [-15, 14]], ['c', 'x1', [-14, 18.5]]]],
      ['Change direction to shake the pressure. Get across half court in 10 seconds.',
        [['d', '1', [-5, 26], [-9, 38], [-5, 50]], ['c', 'x1', [-4, 30], [-8, 42], [-3.5, 55]]]],
      ['Round 2 is live: the defender can go for the steal.', []],
    ],
  },

  // ---------- PA: Passing & Getting Open ----------
  'PA-01': {
    p: { '1*': [-10, 14], 2: [-10, 29], '3*': [10, 14], 4: [10, 29] },
    n: [['12-15 ft apart', [0, 22]]],
    s: [
      ['Chest passes. Step into it and follow through, thumbs down.', [['p', '1', '2'], ['p', '3', '4']]],
      ['Bounce passes: hit the floor about two-thirds of the way to your partner.', [['p', '2', '1'], ['p', '4', '3']]],
      ['Ball fake, then an overhead pass.', [['p', '1', '2'], ['p', '3', '4']]],
      ['Pound-push: one hard dribble, then a bounce or chest pass.', [['p', '2', '1'], ['p', '4', '3']]],
    ],
  },
  'PA-02': {
    p: { '1*': [-14, 22], x: [-3, 22], 2: [14, 22] },
    s: [
      ['Defender closes out on the passer. The passer waits for the defender to arrive.', [['c', 'x', [-11, 22]]]],
      ['Pivot, fake, and pass around the defender to the far partner.', [['p', '1', '2']]],
      ['Passer becomes the defender and closes out on the receiver. Old defender takes the open spot.',
        [['c', '1', [0, 24.5], [10.5, 22]], ['c', 'x', [-8, 19.5], [-14, 22]]]],
    ],
  },
  'PA-03': {
    p: { '1*': [0, 13], 2: [13.3, 22.7], 3: [8.2, 38.3], 4: [-8.2, 38.3], 5: [-13.3, 22.7] },
    s: [
      ['Pass to the line two spots over (skip the one next to you), then follow your pass.',
        [['p', '1', '3'], '|', ['c', '1', [10.6, 41.6]]]],
      ['The ball makes a star: 1 to 3 to 5 to 2 to 4. Next in line steps up.',
        [['p', '3', '5'], '|', ['c', '3', [-17.1, 21.4]], ['c', '1', [8.2, 38.3]]]],
      ['Add a second ball, then a third. Two-hand catch and call your target\'s name.',
        [['p', '5', '2'], ['g', '4'], '|', ['c', '5', [17.1, 21.4]], ['c', '3', [-13.3, 22.7]]]],
    ],
  },
  'PA-04': {
    court: 'f',
    p: { '1*': [-8, 1.5], 2: [7, 1.5] },
    s: [
      ['Sprint the floor passing back and forth. No dribbles.',
        [['c', '1', [-8, 20]], ['c', '2', [7, 24]], ['p', '1', '2'], '|', ['c', '1', [-8, 44]], ['c', '2', [7, 46]], ['p', '2', '1'], '|',
          ['c', '1', [-8, 66]], ['c', '2', [7, 68]], ['p', '1', '2']]],
      ['Finish with a layup, then come back up the other side.', [['c', '2', [2.5, 85]], ['sh', '2'], ['c', '1', [-4, 80]], '|', ['r', '1']]],
    ],
  },
  'PA-05': {
    p: { '1*': [-19, 6], 2: [19, 6], 3: [19, 40], 4: [-19, 40] },
    n: [['Jump stop + pivot on every catch', [0, 24]]],
    s: [
      ['Pass to the next corner and follow your pass to the back of that line.', [['p', '1', '2'], '|', ['c', '1', [22.5, 2]]]],
      ['Receiver jump stops, pivots, and passes on. Keep following your pass.', [['p', '2', '3'], '|', ['c', '2', [22.5, 44]]]],
      ['Add a second ball, then reverse direction.', [['p', '3', '4'], ['g', '1'], '|', ['c', '3', [-22.5, 44]]]],
    ],
  },
  'PA-06': {
    p: { '1*': 'rw', 5: 'rb', x5: [9, 11] },
    s: [
      ['Defender plays 3/4 on the high side. Passer fakes high to move the defender.', [['c', 'x5', [10, 11.5]]]],
      ['Post seals with a wide base. Bounce or overhead pass away from the defense, to the open hand.', [['c', '5', [7, 7]], ['p', '1', '5']]],
      ['Post catches with two hands, chins it, and scores. Rotate passer, post, defender.', [['c', '5', [4, 6.5]], ['sh', '5']]],
    ],
  },
  'PA-07': {
    p: { 'c*': [0, 28], 2: 'rw', x2: [14.5, 19.5] },
    s: [
      ['V-cut: walk your defender in toward the block. (L-cut: walk up the lane line instead.)', [['c', '2', [10.5, 10]], ['c', 'x2', [9, 13]]]],
      ['Plant and sprint out to the wing. Show a target hand.', [['c', '2', [18.5, 20]], ['c', 'x2', [14.5, 20.5]], ['p', 'c', '2']]],
      ['Catch in triple threat, rip through, and attack the rim with 2 dribbles.', [['L', '2', [12, 10], 'rim+1.5,2'], ['c', 'x2', [8, 11.5]]]],
    ],
  },
  'PA-08': {
    p: { '3*': [6, 40], 1: [18, 21], c: [15.5, 25] },
    n: [['Same on the left with 2 and 4', [-11, 34]]],
    s: [
      ['Receiver steps across the coach\'s feet and seals on the hip, like a post-up.', [['c', '1', [13.5, 28]]]],
      ['Passer throws to the outside hand. Release to the ball while it\'s in the air.', [['c', '1', [10.5, 33]], ['p', '3', '1']]],
      ['Face up, jab, rip through, drive, and finish with a two-foot jump stop at the rim.', [['L', '1', [6, 16], 'rim+1.5,2.5'], ['c', 'c', [11, 24]]]],
    ],
  },

  // ---------- FN: Finishing ----------
  'FN-01': {
    p: { '1*': [3.6, 8.2] },
    s: [
      ['Right-hand layup on the right side. Catch it before it hits the floor.', [['sh', '1'], '|', ['c', '1', [-3.6, 8.2]], ['r', '1']]],
      ['Step across and finish left-handed on the left side. No dribble, keep the ball high.', [['sh', '1'], '|', ['c', '1', [3.6, 8.2]], ['r', '1']]],
      ['30 seconds each: regular, reverse, then power Mikan (two feet). Count makes.',
        [['sh', '1'], '|', ['c', '1', [-3.6, 8.2]], ['r', '1'], '|', ['sh', '1']]],
    ],
  },
  'FN-02': {
    p: { '1*': [0, 12] },
    n: [['Get 50 makes', [0, 22]]],
    s: [
      ['Set lifts: close-range form shots. Chase perfect technique first.', [['sh', '1'], '|', ['r', '1']]],
      ['Mikan and reverse Mikan, then add rhythm and game speed.',
        [['c', '1', [3.5, 8]], '|', ['sh', '1'], '|', ['c', '1', [-3.5, 8]], ['r', '1'], '|', ['sh', '1'], '|', ['r', '1']]],
      ['"Bradleys": hop in and score from 5 spots around the rim.',
        [['c', '1', [7, 6]], '|', ['sh', '1'], '|', ['c', '1', [5.5, 11]], ['r', '1'], '|', ['sh', '1'], '|', ['c', '1', [0, 13]], ['r', '1'], '|',
          ['sh', '1'], '|', ['c', '1', [-5.5, 11]], ['r', '1'], '|', ['sh', '1'], '|', ['c', '1', [-7, 6]], ['r', '1'], '|', ['sh', '1']]],
    ],
  },
  'FN-03': {
    p: { 'c*': [0, 29], 1: 'rw', '1a': [20, 22], 2: 'lw', '2a': [-20, 22], c2: [4.5, 9.5] },
    s: [
      ['Coach passes to the right wing.', [['p', 'c', '1']]],
      ['Left wing cuts hard to the middle and catches the pass.', [['c', '2', [-6, 16], [-1, 12.5]], ['p', '1', '2']]],
      ['Score through contact: the coach with the pad meets you at the rim. Variation: cut baseline for a lob.',
        [['c', '2', [-1, 8.5]], ['c', 'c2', [1.5, 8]], '|', ['sh', '2']]],
    ],
  },
  'FN-04': {
    p: { 'c*': [0, 34], 1: [5, 44], x1: [9, 46] },
    s: [
      ['Coach rolls or passes the ball out. Offense starts a step or two ahead.', [['c', '1', [4, 40]], ['p', 'c', '1']]],
      ['Offense attacks the rim at full speed. Defender chases from behind and contests without fouling.',
        [['L', '1', [5, 24], 'rim+1.5,2.5'], ['c', 'x1', [9, 30], [4, 12]]]],
    ],
  },
  'FN-05': {
    p: { h: [6, 12], '1*': [17, 20], '1a*': [20, 24] },
    n: [['chair = help defender', [6, 15.5]]],
    s: [
      ['Attack the chair (the help defender) from the wing.', [['d', '1', [10, 14.5]]]],
      ['Finish with the called footwork: Euro step, inside-hand layup, jump stop step-through, or pro hop.',
        [['L', '1', [8.5, 9.5], [4, 8], 'rim+1.5,2']]],
      ['Rebound and get in line on the other wing. Work both sides.', [['r', '1'], '|', ['m', '1', [-20, 24]]]],
    ],
  },
});
if (typeof module !== 'undefined') module.exports = DIAGRAMS;
