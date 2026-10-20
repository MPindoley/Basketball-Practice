// Team sets every player has to know: out-of-bounds plays, presses and zone defenses. Shown in the Playbook
// next to the high school staff's plays.
DATA.cats.OB = 'Out of Bounds (BLOB / SLOB)';
DATA.cats.PR = 'Presses';
DATA.cats.ZN = 'Zone Defense';
const BOOK = DATA.groups.find(g => g.id === 'plays');
BOOK.name = 'Playbook';
BOOK.cats.push('OB', 'PR', 'ZN');
DATA.drills.push(
);
