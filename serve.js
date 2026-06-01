const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3001;
const mime = { '.html':'text/html', '.css':'text/css', '.js':'application/javascript', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml' };
http.createServer((req, res) => {
  let fp = path.join(__dirname, req.url === '/' ? 'index.html' : decodeURIComponent(req.url));
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': mime[path.extname(fp)] || 'text/plain' });
    res.end(data);
  });
}).listen(port, () => console.log(`BirdieX running at http://localhost:${port}`));
