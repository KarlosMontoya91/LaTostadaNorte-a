# La Tostada Norteña · vista previa local

Vista pública de demostración: https://karlosmontoya91.github.io/LaTostadaNorte-a/

## GitHub Pages

Se publica desde `main`, carpeta `/docs`. Para actualizar, ejecutar `npm run build:pages`, revisar y subir fuentes junto con `docs/`. Las rutas relativas permiten servir tanto en localhost como en el subdirectorio del repositorio. Se conserva `noindex` porque sigue siendo una demostración sin backend transaccional.

Rediseño de menú y pedido basado en los documentos aportados. **Demostración, no habilitada para ventas.**

## Ejecutar

Requiere Node.js 22 o posterior. No hay dependencias que instalar.

```sh
npm run dev
```

Abrir http://127.0.0.1:4173. El servidor genera `dist/` al iniciar. Reiniciarlo después de editar fuentes.

```sh
npm run build
npm test
```

HTML prerenderizado con JavaScript nativo: se eligió frente a Astro porque este alcance no tiene backend, rutas dinámicas ni dependencias que justifiquen un framework. El catálogo está en el HTML inicial. `src/catalog.mjs` centraliza productos y precios en centavos; `src/app.mjs` contiene exclusivamente la demo de interacción. `dist/` es la salida estática, no editar directamente.

Incluye las dos variantes originales del logo, menú de 11 productos, carrito persistente 24 horas, cantidades, revisión de entrega y campos condicionales. No guarda datos personales ni envía peticiones de pedido. Fotografía remota ilustrativa, sin imágenes generadas.

Consultar `integration-notes.md`, `content-inventory.md`, `assets-manifest.md` y `qa-report.md` antes de conectar o publicar. Los documentos originales se conservaron. No hay publicación en producción.
