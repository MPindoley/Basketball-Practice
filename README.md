# Practice Book

A practice planning app for the 7th & 8th grade team, built from the *MS Basketball Drill & Practice Book* spreadsheet. It works on a phone, a tablet, or a computer, and keeps working offline once it has loaded.

- **Plan**: build today's practice from the four sample plans, the 90-minute blueprint (one block per drill group, tap a block to pick its drill), or from scratch. Start times and the end time update as you change minutes or reorder.
- **Drills**: all drills by group (spreadsheet, college and full-court timed drills), with search and level/college filters. Every drill opens to an animated whiteboard that walks through the drill step by step, plus setup, how it runs, coaching points, the MS adaptation, and your own notes.
- **Run**: runs the practice live. A big countdown for each drill, a beep at 1 minute left and a triple beep at time, "on pace / behind" against the plan, the drill's whiteboard on a loop, coaching points, and what's up next. The screen stays awake while it runs.
- **Board**: a blank half or full court to draw on with your finger during a timeout or a drill.
- **Notes**: the blueprint and principles, offense install checklist, defense concepts, guards and posts, and the HS readiness targets, each linked to the drills that teach it. Tick items off as you install them.
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
