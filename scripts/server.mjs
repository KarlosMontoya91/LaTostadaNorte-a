import './build.mjs';
import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist');
createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const path=resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));if(!path.startsWith(root+sep))throw Error();const body=await readFile(path);res.writeHead(200,{'Content-Type':({'.html':'text/html; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.txt':'text/plain'})[extname(path)]||'application/octet-stream','X-Robots-Tag':'noindex'});res.end(body)}catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end('<h1>Página no encontrada</h1><a href="/">Volver al menú</a>')}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
