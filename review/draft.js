// DRAFT for review, not loaded by the app yet. Same format as js/diagrams-1.js.
// Going toward the far basket (down the board) a player's left is +x; coming back it is -x.
const DOWN = { // trips 1, 3, 5: 2 crosses early in front of the ball, 3 crosses behind it
  2: ['c', '2', [-6, 28], [8, 38], [18, 52], [18, 76]],
  3: ['c', '3', [17, 30], [0, 44], [-17, 58], [-18, 76]],
  1: ['d', '1', [4, 46], [6, 67]],
  run: w => ['c', w, [-6, 45], [4, 70], [7.5, 85]],
  trail: w => ['c', w, [4, 35], [-3, 55], [-3, 75]],
};
const BACK = { // trips 2, 4
  3: ['c', '3', [-6, 66], [8, 58], [18, 44], [18, 18]],
  2: ['c', '2', [17, 64], [0, 50], [-17, 38], [-18, 18]],
  trail: w => ['c', w, [3, 60], [-3, 40], [-3, 19]],
};
const DRAFT = {
  'TR-11': {
    court: 'f',
    p: { '5*': [7.5, 9], 4: [-3, 19], 1: [5, 28], 2: [-18, 18], 3: [18, 18] },
    s: [
      ['Trip 1, left wing shot: 5 outlets to 1. 2 always runs the left lane and 3 the right, so they cross. 4 runs to the block, 5 trails to the high post. 1 hits 2: shot.',
        [['p', '5', '1'], '|', DOWN[1], DOWN[2], DOWN[3], DOWN.run('4'), DOWN.trail('5'), '|', ['p', '1', '2'], '|', ['sh', '2'], ['r', '4']]],
      ['Trip 2, right wing shot: 4 takes it out of the net and outlets. 2 and 3 cross again, 5 runs to the block, 4 trails. 1 hits 3 on the right: shot.',
        [['p', '4', '1'], '|', ['d', '1', [3, 50], [5, 28]], BACK[2], BACK[3], ['c', '5', [-4, 50], [3, 25], [7.5, 9]], BACK.trail('4'), '|', ['p', '1', '3'], '|', ['sh', '3'], ['r', '5']]],
      ['Trip 3, post entry: same run as trip 1. 1 hits 2 on the left wing, 2 feeds 4 on the block, and 4 scores the layup.',
        [['p', '5', '1'], '|', DOWN[1], DOWN[2], DOWN[3], DOWN.run('4'), DOWN.trail('5'), '|', ['p', '1', '2'], '|', ['p', '2', '4'], '|', ['L', '4', [3.5, 87]], ['r', '4']]],
      ['Trip 4, pass ahead: 4 outlets. 5 sprints the middle and 1 throws it up the floor to him for a layup on the run. Everyone still runs their lane.',
        [['p', '4', '1'], '|', ['d', '1', [3, 54]], BACK[2], BACK[3], ['c', '5', [-4, 50], [1, 28], [3, 13]], BACK.trail('4'), ['p', '1', '5'], '|', ['L', '5', [2.5, 8]], ['r', '5'], ['c', '1', [5, 28]]]],
      ['Trip 5, point scores: 5 outlets. 1 pushes it to the top, shot fakes, and drives for the layup. Five trips, five scores. Next five step on.',
        [['p', '5', '1'], '|', DOWN[1], DOWN[2], DOWN[3], DOWN.run('4'), DOWN.trail('5'), '|', ['L', '1', [1, 76], [-2.5, 85.5]], ['r', '4']]],
    ],
  },
  // PL-18 as it is in the app today, plus ONE new step (step 2, the post flash).
  'PL-18': {
    p: { '1*': [15, 22], 2: [-15, 22], 3: 'rc', 4: 'lc', 5: 'lb' },
    n: [['5 = the big · 1-4 play the wings and corners', [0, 41]]],
    s: [
      ['Pass to the corner, cut through: 1 passes to 3 and cuts through the middle for the ball back. Then rotate: 4 lifts, 2 comes over to the wing, 1 fills the corner.',
        [['p', '1', '3'], '|', ['c', '1', [8, 16], [2.5, 9.5]], '|',
          ['c', '1', [-3, 4], [-12, 2.5], 'lc'], ['c', '4', [-20, 12], [-15, 22]], ['c', '2', [-7, 26.5], [7, 26.5], [15, 22]]]],
      ['NEW. Post flash: once the cutter clears, 5 flashes to the ball-side block and 3 feeds him. 5 scores, or kicks it back out and goes back opposite.',
        [['c', '5', [0, 9.5], 'rb+1,0'], '|', ['p', '3', '5'], '|', ['p', '5', '3'], '|', ['c', '5', [0, 9.5], 'lb']]],
      ['Wing to wing, interchange: 3 hits 2, who passes to 4 on the other wing. Then 2 screens down for 3, who comes up to the wing, and 2 fills the corner.',
        [['p', '3', '2'], '|', ['p', '2', '4'], '|', ['s', '2', [18, 8.5]], '|', ['c', '3', [21.5, 9.5], [19.5, 15.5], [15, 22]], '|', ['c', '2', 'rc']]],
      ['The big lives on the block opposite the ball. The ball went left, so 5 crosses to the right block. That\'s 3 passes: time for the pick and roll.',
        [['c', '5', [0, 8], 'rb']]],
      ['5 comes up and screens for 4, who comes off it to the middle as 5 rolls. Same time, far side: 2 back-screens, 3 cuts to the rim for a look and 2 pops for a shot.',
        [['s', '5', [0, 14], [-11.5, 21]], ['s', '2', [13, 17.5]], '|',
          ['d', '4', [-12.5, 25.5], [-6.5, 25.5], [-1.5, 22]], ['c', '5', [-8, 15], [-4.5, 9.5]], ['c', '3', [10, 19.5], [5, 13], [2.5, 8.5]], '|',
          ['c', '3', [9, 3], 'rc'], ['c', '2', [15, 22]]]],
      ['Nothing there? 4 drives and throws the baseline pass to 3 in the corner. 3 swings it up to 2, then screens for 4, who runs off it to the corner. 2 hits him.',
        [['d', '4', [2, 15], [4, 8.5]], ['c', '5', 'lb'], '|', ['p', '4', '3'], '|', ['p', '3', '2'], ['s', '3', [9.5, 6]], '|',
          ['c', '4', [6.5, 2.5], [13, 1.8], 'rc'], ['p', '2', '4']]],
      ['Open? 4 shoots it: crash 3, shooter back. No shot? 3 fills the open wing and we\'re 4-out again, 5 opposite the ball. It never stops and runs to either side.',
        [['c', '3', [4, 13], [-5, 20], [-15, 22]]]],
    ],
  },
};
