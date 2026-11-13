const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(), p = await b.newPage({ viewport: { width: 1548, height: 900 }, deviceScaleFactor: 2 });
  p.on('pageerror', e => { console.error('PAGE ERROR', e.message); process.exitCode = 1; });
  for (const id of ['TR-11', 'PL-18']) {
    await p.goto('file://' + __dirname + '/review.html?id=' + id);
    await p.screenshot({ path: __dirname + '/' + id + '-draft.png', fullPage: true });
  }
  await b.close();
})();
