// Play diagrams: the high school staff's plays (category PL). Format: see diagrams-1.js.
Object.assign(DIAGRAMS, {
  'PL-01': {
    p: { '1*': [3, 29], 3: 'lc', 2: 'rc', 5: 'rb', 4: 're', x3: [-18, 5] },
    s: [
      ['Posts on the right side: 5 on the block, 4 at the elbow. 4 sets the ball screen at the elbow.', [['s', '4', [7, 21]]]],
      ['1 dribbles into the screen, then bounces back to the left and drives down the left side of the lane.', [['d', '1', [8.5, 24], [3, 20.5], [-4.5, 16], [-6, 12]]]],
      ['Peek at 3\'s defender. Help comes? Kick to 3 in the corner. Defender stays home? Finish at the rim.', [['c', 'x3', [-11.5, 5.5]], '|', ['p', '1', '3'], '|', ['sh', '3']]],
    ],
  },
  'PL-02': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['1 pushes the ball to the right wing. 2 cuts through the lane and down-screens for 4 on the left block.',
        [['d', '1', [8, 27], [15, 21]], ['s', '2', [6, 17], [-1, 14], [-5, 11]]]],
      ['4 pops out to the top off the screen. The ball reverses: 1 to 4, 4 to 3 on the left wing.',
        [['c', '4', [-9.5, 13], [-6, 20], [0, 27]], '|', ['p', '1', '4'], '|', ['p', '4', '3']]],
      ['2 sets a cross screen for 5. 5 comes across over the top of it to the left block and posts up.', [['s', '2', [4.5, 9]], '|', ['c', '5', [3, 12.5], [-6.5, 9]]]],
      ['3 feeds 5 on the block. 5 scores with a post move.', [['p', '3', '5'], '|', ['c', '5', [-3.5, 6.5]], '|', ['sh', '5']]],
    ],
  },
  'PL-03': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['4 flashes to the high post. 5 pops out to the right slot and 1 hits him.', [['c', '4', [-4, 14], [5, 19]], ['c', '5', [11, 15], [12, 25]], ['p', '1', '5']]],
      ['2 and 3 interchange along the baseline, one at a time.', [['c', '2', [12, 4], [0, 2.5], [-14, 4], [-18, 14]], '|', ['c', '3', [-12, 6], [0, 5.5], [14, 5], 'rc']]],
      ['UCLA cut: 4 back-screens and 1 cuts off him to the rim. 5 hits 1 if he\'s open.', [['s', '4', [2.5, 22.5]], '|', ['c', '1', [4.5, 25], [4.5, 15], [1, 7.5]]]],
      ['5 passes to 3 in the corner. No UCLA cut? 1 loops under and comes off a double stagger (2 low, 4 high) back out to the top.',
        [['s', '2', [-11.5, 12]], ['s', '4', [-4.5, 20]], '|', ['c', '1', [-4, 4.5], [-9, 9], [-8, 19], [-3, 26], [1, 28]], ['p', '5', '3']]],
    ],
  },
  'PL-04': {
    p: { '1*': [8, 27], 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['1 dribbles to the left. 3 lifts out of the way to open the corner.', [['d', '1', [-9, 26]], ['c', '3', [-18, 30]]]],
      ['2 runs the baseline behind the posts to the left corner.', [['c', '2', [12, 4], [0, 1.8], [-12, 2], 'lc']]],
      ['1 hits 2 in the corner for the shot.', [['p', '1', '2'], '|', ['sh', '2']]],
    ],
  },
  'PL-05': {
    p: { '1*': 'top', 2: 'rc', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['1 dribbles to the right. 2 lifts from the corner to the right wing.', [['d', '1', [11, 25]], ['c', '2', [19, 18]]]],
      ['3 runs the baseline behind the posts to the right corner.', [['c', '3', [-12, 4], [0, 1.8], [12, 2], 'rc']]],
      ['1 hits 2 on the wing, and 2 swings it to 3 in the corner for the shot.', [['p', '1', '2'], '|', ['p', '2', '3'], '|', ['sh', '3']]],
    ],
  },
  'PL-06': {
    p: { '1*': 'top', 3: 'lc', 2: 'rc', 4: 'le', 5: 're' },
    n: [['shooter is 3', [-17, 36]]],
    s: [
      ['1 dribbles to the right, away from the shooter. 3 lifts to the left wing as the posts meet at the top of the key.',
        [['d', '1', [14, 24]], ['c', '3', [-19, 9], [-17, 19]], ['c', '4', [-3.5, 25.5]], ['c', '5', [-0.5, 25.5]]]],
      ['The posts slide over and set a double screen for 3 at the left slot.', [['s', '4', [-12, 22]], ['s', '5', [-10, 27]]]],
      ['3 curls around the double screen to the top of the key. 1 hits 3 for the shot.', [['c', '3', [-16, 27], [-11, 31], [-3, 31], [2, 29]], ['p', '1', '3'], '|', ['sh', '3']]],
    ],
  },
  'PL-07': {
    p: { '1*': 'top', 2: 'rw', 3: 'lw', 5: 'lb', 4: 'rb' },
    s: [
      ['4 flashes to the high post. 1 passes to 3, then 1 and 2 switch spots.',
        [['c', '4', [0, 17.5]], ['p', '1', '3'], '|', ['c', '1', [6, 22], [17, 19]], ['c', '2', [11, 26], [1, 28.5]]]],
      ['3 passes back to 2, who reverses it to 1 on the right wing. 3 cuts down toward the left baseline as 4 steps to the left elbow.',
        [['p', '3', '2'], '|', ['p', '2', '1'], ['c', '3', [-17, 9]], ['c', '4', 'le']]],
      ['4 and 2 set a staggered double screen. 3 comes off both and curls to the top of the key.',
        [['s', '4', [-12, 12]], ['s', '2', [-10, 22]], '|', ['c', '3', [-15, 14], [-12, 25], [-3, 28], [2, 27]]]],
      ['1 hits 3 for the shot. If it\'s not there, 5 seals and steps across to the right block for the post feed.', [['p', '1', '3'], ['c', '5', [0, 6.5], [7, 8]], '|', ['sh', '3']]],
    ],
  },
  'PL-08': {
    p: { '1*': [3, 28], 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['5 runs the baseline behind 4 to the left corner. 3 steps out and 1 hits him.', [['c', '5', [4, 2], [-6, 2], [-14, 4]], ['c', '3', [-15, 25]], ['p', '1', '3']]],
      ['3 passes to 5 in the corner. 4 seals on the left block.', [['p', '3', '5'], ['c', '4', [-6.5, 7.5]]]],
      ['Look inside: 5 feeds 4 on the block. If help comes, 5 skips it to 2 instead.', [['p', '5', '4'], '|', ['c', '4', [-3.5, 6.5]], '|', ['sh', '4']]],
    ],
  },
  'PL-09': {
    p: { '1*': [3, 28], 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['Start like Triple: 5 runs the baseline to the left corner and 1 hits 3 on the wing.', [['c', '5', [4, 2], [-6, 2], [-14, 4]], ['p', '1', '3']]],
      ['4 flashes from the left block to the high post and 3 hits him.', [['c', '4', [-7, 13], [-5, 18]], ['p', '3', '4']]],
      ['1 goes backdoor. 4 hits 1 cutting to the rim for the layup.', [['c', '1', [4, 18], [2, 8]], ['p', '4', '1'], '|', ['sh', '1']]],
    ],
  },
  'PL-10': {
    p: { '1*': 'top', 4: 'le', 5: 're', 3: 'lw', 2: 'rw' },
    n: [['4 = best passer', [-12, 34]]],
    s: [
      ['1 passes to 4 at the left elbow.', [['p', '1', '4']]],
      ['Backdoor: 3 cuts from the left wing to the rim. 4 hits 3 if he\'s open.', [['c', '3', [-12, 12], [-4.5, 6.5]]]],
      ['Not open? Zoom: 1 fills the left wing and 5 screens for 2.', [['c', '1', [-12, 27], [-17, 20]], ['s', '5', [13, 19.5]]]],
      ['2 comes off the screen and takes the handoff from 4 at the top for the shot or drive.',
        [['c', '2', [14, 24], [5, 26]], ['d', '4', [-1, 24]], '|', ['p', '4', '2'], '|', ['sh', '2']]],
    ],
  },
  'PL-11': {
    p: { '1*': [2, 28], 2: 'rw', 3: 'lw', 4: 'lb', 5: 'rb' },
    s: [
      ['3 gets out of the way, running the baseline to the right corner. 4 comes up to the right elbow.',
        [['c', '3', [-14, 4], [0, 2], [12, 2.5], 'rc'], ['c', '4', [-5, 14], [8, 21]]]],
      ['2 sets a ball screen for 1. 1 comes off it to the right, first looking for 5 on the block.', [['s', '2', [5.5, 25.5]], '|', ['d', '1', [6, 30], [13, 26.5]]]],
      ['Pick the picker: 4 screens for 2, who curls to the left slot. 1 passes to 2 for the shot.',
        [['s', '4', [7, 23]], '|', ['c', '2', [4, 28.5], [-2, 28.5], [-6, 25]], ['p', '1', '2'], '|', ['sh', '2']]],
    ],
  },
});
