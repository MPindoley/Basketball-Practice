// Play diagrams: the high school staff's plays (category PL). Format: see diagrams-1.js.
Object.assign(DIAGRAMS, {
  'PL-01': {
    p: { '1*': [6, 29], 3: 'lc', 2: 'rc', 5: 'rb', 4: 're', x3: [-18, 5] },
    s: [
      ['Posts on the right side: 5 on the block, 4 at the elbow. 4 steps up and sets the ball screen for 1.', [['s', '4', [3, 25.5]]]],
      ['1 bounces off the screen and drives down the left side of the lane.', [['d', '1', [2, 30], [-4, 22], [-6, 13]]]],
      ['Peek at 3\'s defender. Help comes? Kick to 3 in the corner. Defender stays home? Finish at the rim.', [['c', 'x3', [-11.5, 5.5]], '|', ['p', '1', '3'], '|', ['sh', '3']]],
    ],
  },
  'PL-02': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['1 pushes the ball to the right wing. 2 clears through to the left block as 4 pops out to the top.',
        [['d', '1', [8, 27], [15, 21]], ['c', '2', [11, 11], [1, 4], [-7, 8.5]], ['c', '4', [-6, 16], [0, 27]]]],
      ['Reverse the ball: 1 to 4 at the top, 4 to 3 on the left wing.', [['p', '1', '4'], '|', ['p', '4', '3']]],
      ['2 sets a cross screen for 5. 5 comes across to the left block and posts up.', [['s', '2', [4.5, 8.5]], '|', ['c', '5', [4, 5], [-6, 7.5]]]],
      ['3 feeds 5 on the block. 5 scores with a post move.', [['p', '3', '5'], '|', ['c', '5', [-3.5, 6.5]], '|', ['sh', '5']]],
    ],
  },
  'PL-03': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['4 flashes to the high post. 5 pops out to the right slot and 1 hits him.', [['c', '4', [-4, 14], [5, 19]], ['c', '5', [11, 15], [12, 25]], ['p', '1', '5']]],
      ['2 and 3 interchange along the baseline, one at a time.', [['c', '2', [12, 4], [0, 2.5], [-14, 4], [-18, 14]], '|', ['c', '3', [-12, 6], [0, 5.5], [14, 5], 'rc']]],
      ['UCLA cut: 4 back-screens and 1 cuts off him to the rim. 5 hits 1 if he\'s open.', [['s', '4', [2.5, 22.5]], '|', ['c', '1', [4.5, 25], [4.5, 15], [1, 7.5]]]],
      ['Not open? 1 comes off a double stagger (2, then 4) to the left slot for the shot. Or 5 swings it to 3 in the corner.',
        [['s', '2', [-8.5, 12]], ['s', '4', [-3, 20]], '|', ['c', '1', [-4.5, 9], [-4.5, 15], [-8.5, 25]], ['p', '5', '1'], '|', ['sh', '1']]],
    ],
  },
  'PL-04': {
    p: { '1*': [8, 27], 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['1 dribbles to the left. 3 lifts out of the way to open the corner.', [['d', '1', [-4, 27]], ['c', '3', [-18, 29]]]],
      ['2 runs the baseline off both posts to the left corner.', [['s', '5', [6, 5]], ['s', '4', [-6, 5]], '|', ['c', '2', [12, 4], [0, 1.8], [-12, 2], 'lc']]],
      ['1 hits 2 in the corner for the shot.', [['p', '1', '2'], '|', ['sh', '2']]],
    ],
  },
  'PL-05': {
    p: { '1*': [-6, 27], 2: 'rc', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['1 dribbles to the right. 2 lifts from the corner to the right wing.', [['d', '1', [5, 27]], ['c', '2', [19, 20]]]],
      ['3 runs the baseline off both posts to the right corner.', [['s', '4', [-6, 5]], ['s', '5', [6, 5]], '|', ['c', '3', [-12, 4], [0, 1.8], [12, 2], 'rc']]],
      ['1 hits 2 on the wing, and 2 swings it to 3 in the corner for the shot.', [['p', '1', '2'], '|', ['p', '2', '3'], '|', ['sh', '3']]],
    ],
  },
  'PL-06': {
    p: { '1*': 'top', 3: 'lc', 2: 'rc', 4: 'le', 5: 're' },
    n: [['shooter is 3', [-17, 34]]],
    s: [
      ['1 dribbles to the right, away from the shooter. 3 lifts to the left wing as the posts meet at the top of the key.',
        [['d', '1', [14, 24]], ['c', '3', [-19, 9], [-17, 19]], ['c', '4', [-3.5, 25.5]], ['c', '5', [-0.5, 25.5]]]],
      ['3 comes off the double screen across the top. 1 hits 3 for the shot.', [['c', '3', [-10, 27], [-2, 29.5], [6, 29]], ['p', '1', '3'], '|', ['sh', '3']]],
    ],
  },
  'PL-07': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 5: 'lb', 4: 'rb' },
    s: [
      ['4 flashes to the high post. 1 passes to 3, then 1 and 2 switch spots.',
        [['c', '4', [0, 17.5]], ['p', '1', '3'], '|', ['c', '1', [6, 22], [17, 19]], ['c', '2', [11, 26], [1, 28.5]]]],
      ['3 passes back to 2 at the top and cuts to the left corner. 4 drops down next to 5 for a double screen.',
        [['p', '3', '2'], '|', ['c', '3', [-20, 8], 'lc'], ['c', '4', [-5, 12], [-9, 11.5]], ['c', '5', [-9, 7.5]]]],
      ['3 comes off the double screen to the wing. 2 hits 3 for the shot. Second look: 5 seals and posts up.',
        [['c', '3', [-14, 6], [-14, 14], [-16, 22]], ['c', '5', [-6.5, 8]], ['p', '2', '3'], '|', ['sh', '3']]],
    ],
  },
  'PL-08': {
    p: { '1*': [3, 28], 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['4 runs from the left block to the left corner. 3 steps up to the slot and 1 hits him.', [['c', '4', [-14, 3], 'lc'], ['c', '3', [-14, 25]], ['p', '1', '3']]],
      ['3 passes to 4 in the corner. 5 slides across to the ball-side block and seals.', [['p', '3', '4'], ['c', '5', [0, 6], [-7, 8]]]],
      ['Look inside: 4 feeds 5 on the block. If the help comes, skip it to 2 instead.', [['p', '4', '5'], '|', ['c', '5', [-3.5, 6.5]], '|', ['sh', '5']]],
    ],
  },
  'PL-09': {
    p: { '1*': [3, 28], 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['Start like Triple: 4 goes to the left corner, 3 steps up, and 1 hits 3.', [['c', '4', [-14, 3], 'lc'], ['c', '3', [-14, 25]], ['p', '1', '3']]],
      ['5 flashes to the high post and 3 hits him.', [['c', '5', [2, 13], [-4, 18]], ['p', '3', '5']]],
      ['1 goes backdoor. 5 hits 1 cutting to the rim for the layup.', [['c', '1', [4, 18], [2, 8]], ['p', '5', '1'], '|', ['sh', '1']]],
    ],
  },
  'PL-10': {
    p: { '1*': 'top', 4: 'le', 5: 're', 3: 'lw', 2: 'rw' },
    n: [['4 = best passer', [-12, 34]]],
    s: [
      ['1 passes to 4 at the left elbow.', [['p', '1', '4']]],
      ['Backdoor: 3 cuts from the left wing to the rim. 4 hits 3 if he\'s open.', [['c', '3', [-12, 12], [-4.5, 6.5]]]],
      ['Not open? Zoom: 1 fills the left wing and 5 sets a pin-down for 2.', [['c', '1', [-12, 27], [-17, 20]], ['s', '5', [14, 15]]]],
      ['2 comes off the screen and takes the handoff from 4. Attack or shoot.',
        [['c', '2', [12, 22], [5, 26]], ['d', '4', [-1, 24]], '|', ['p', '4', '2'], '|', ['d', '2', [4, 15]], '|', ['sh', '2']]],
    ],
  },
  'PL-11': {
    p: { '1*': [2, 28], 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['3 gets out of the way, running the baseline to the right corner. 4 comes up to the right elbow.',
        [['c', '3', [-14, 4], [0, 2], [12, 2.5], 'rc'], ['c', '4', [-5, 14], [8, 21]]]],
      ['2 sets a ball screen for 1. 1 comes off it to the right, first looking for 5 on the block.', [['s', '2', [5.5, 25.5]], '|', ['d', '1', [6, 30], [13, 25]]]],
      ['Pick the picker: 4 screens for 2, who pops to the top. 1 passes to 2 for the shot.', [['s', '4', [7, 23]], '|', ['c', '2', [0, 27.5], [-3, 27.5]], ['p', '1', '2'], '|', ['sh', '2']]],
    ],
  },
});
