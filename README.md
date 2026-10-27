# Practice Book

A practice planning app for the 7th & 8th grade team, built from the *MS Basketball Drill & Practice Book* spreadsheet. It works on a phone, a tablet, or a computer, and keeps working offline once it has loaded.

- **Plan**: build today's practice from a template (the sample plans, the Lake installs, Game Week, Compete Day and Tryout Day), the 90-minute blueprint (one block per drill group, tap a block to pick its drill), or from scratch. Start times and the end time update as you change minutes or reorder. **Shuffle drills** swaps in different drills that do the same job (same category, the same kind of play, free throws for free throws) and keeps every block and its minutes, so the template stays sound; Undo puts the old drills back. Each drill's ⋯ menu has its own Shuffle.
- **Drills**: all drills by group (spreadsheet, college and full-court timed drills), with search and level/college filters. Every drill opens to an animated whiteboard that walks through the drill step by step, plus setup, how it runs, coaching points, the MS adaptation, and your own notes.
- **Run**: runs the practice live. A big countdown for each drill, a beep at 1 minute left and a triple beep at time, "on pace / behind" against the plan, the drill's whiteboard on a loop, coaching points, and what's up next. The screen stays awake while it runs.
- **Board**: a blank half or full court to draw on with your finger during a timeout or a drill.
- **Playbook**: the Lake package for your team (Our Package) in the program's order: transition, secondary, motion, sets, quick hitters, out of bounds, then the defensive numbers. Every play shows where it runs in the program (Runs at 7, 8, F, JV, V); what comes later sits in the Coming at Freshman / JV / Varsity sections, and the Offense Options the staff is choosing from have their own section. Any play can be switched on or off for your team with "We run this".
- **Notes**: the Program (motto, values, absolutes, keys, musts, the offensive structure, your team and Our 5), Calls & Numbers with flashcards for the defensive calls, the blueprint and principles, offense install checklist, defense concepts, guards and posts, and the HS readiness targets, each linked to the drills that teach it. Tick items off as you install them.
- **Add your own drills** (Drills tab, bottom) with text and a sketch of the setup.

## Use it

Open `index.html` in a browser, or host the folder anywhere that serves static files.

**GitHub Pages** (free): in the repository go to *Settings → Pages*, set *Source* to *Deploy from a branch*, pick this branch and the `/ (root)` folder, and save. The app appears at `https://<your-user>.github.io/Basketball-Practice/` a minute later. On an iPhone or iPad open that link in Safari, tap *Share → Add to Home Screen*; on Android use Chrome's *Install app*.

Plans, notes and your own drills save in the browser on that device. When the app runs as a claude.ai artifact it also syncs them to your Claude account, so the same plans show up on your phone and computer.

## Update the drill library

The drill text comes straight from the spreadsheet; the extra college drills live in `js/drills-college.js`, which the import never touches. After editing the workbook, rebuild the data file:

```sh
pip install openpyxl
python3 tools/import_xlsx.py path/to/MS_Basketball_Drill_and_Practice_Book.xlsx
```

Each drill's whiteboard lives in `js/diagrams-1.js` to `js/diagrams-4.js`. The format is described at the top of `js/diagrams-1.js`: players are placed on named court spots (`rw` right wing, `lc` left corner, `top`, `rb` right block, …) and each step lists its cuts, dribbles, passes, screens and shots. After changing a diagram, run the check, which builds every diagram and flags bad player ids, passes from a player without the ball, or a player running off the board:

```sh
node tools/check.js
```

## The Lake program

Everything from the Lake Flyers staff lives in `js/program.js`, which loads after `js/sets.js`: the motto, values,
absolutes, keys and musts, the defensive number system and call words, the "Runs at" ladder (7th, 8th, Freshman, JV,
Varsity), the Lake Breakdowns and Lake Mentality drills, and the "How we do it at Lake" notes on existing drills.
Spreadsheet text is patched there at load time, so re-running the import never undoes it. Program diagrams live in
`js/diagrams-8.js`.

## Add a play

The staff will hand out more plays over the season. Adding one takes three steps:

1. **The entry.** In `js/program.js`, add it to the `DATA.drills.push(...)` list of program entries:

   ```js
   { id: 'PL-18', cat: 'PL', name: 'Horns', type: 'set', from: 'V', min: 6, level: 'Intermediate',
     players: '5 players, half court', setup: '...', runs: '...', points: ['...', '...'], ms: '...',
     source: 'Lake staff program' },
   ```

   - `id`: the next free number in its category. Offense is `PL-`, out of bounds `OB-`, half-court defense `ZN-` (add `num: '2'`), full-court defense `PR-` (add `num: '13'`).
   - `type`: one of `transition`, `secondary`, `motion`, `set`, `counter`, `quick hitter`, `delay`. The Playbook groups plays by it.
   - `from`: the lowest level that runs it (`'7'`, `'8'`, `'F'`, `'JV'`, `'V'`). It shows in Our Package for that level and every level above it. A coach can still switch any play on or off from its page ("We run this").
   - Add `confirm: true` while the head coach still has to sign off on it, and `candidate: true` (with `why` and `best` lines) for an option the staff is still choosing between.
2. **The whiteboard.** Add its diagram to `js/diagrams-8.js` under the same id. The format is described at the top of `js/diagrams-1.js`.
3. **The check.** Run `node tools/check.js`. It builds every diagram and checks that `from`, `type` and every drill link are valid.
