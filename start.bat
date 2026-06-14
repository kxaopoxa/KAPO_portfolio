@echo off
cd /d "%~dp0"
echo Starting portfolio server...
echo.
echo Open this address in your browser:
echo http://localhost:8080
echo.
timeout /t 2 /nobreak >nul
start http://localhost:8080
node -e "const http=require('http'),fs=require('fs'),path=require('path');const dir='./dist';const mime={'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.svg':'image/svg+xml','.json':'application/json','.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf','.mp4':'video/mp4','.webm':'video/webm','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.ico':'image/x-icon'};http.createServer((req,res)=>{let url=req.url.split('?')[0];let p=path.join(dir,url==='/'?'/index.html':url);const ext=path.extname(p);fs.readFile(p,(e,d)=>{if(e){res.writeHead(404);res.end('Not found');return;}res.writeHead(200,{'Content-Type':mime[ext]||'application/octet-stream'});res.end(d);})}).listen(8080,()=>{console.log('Server running at http://localhost:8080');console.log('Press Ctrl+C to stop.');})"
pause