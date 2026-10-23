import './build.mjs';
import {mkdir,cp,writeFile} from 'node:fs/promises';
await mkdir('docs',{recursive:true});
await cp('dist','docs',{recursive:true});
await writeFile('docs/.nojekyll','');
console.log('GitHub Pages preparado en docs/');
