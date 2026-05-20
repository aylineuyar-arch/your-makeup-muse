import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath:'/bin/chromium', headless:true, args:['--no-sandbox']});
const p = await b.newPage();
await p.setViewport({width:1440,height:1200,deviceScaleFactor:1});
await p.goto('https://aylin-uyar-portfolio.lovable.app',{waitUntil:'networkidle0'});
await p.screenshot({path:'/tmp/shot.png', clip:{x:0,y:600,width:1440,height:400}});
await b.close();
