# JOHATECH Landing (Vite + React)

Landing minimalista para `johatech.com`, lista para **Cloudflare Pages** (plan gratis!).

## 🚀 Dev local
```bash
npm i
npm run dev
```

## 🧱 Build
```bash
npm run build
npm run preview
```

El build sale en `dist/` (Pages detecta esto por defecto).

## ☁️ Deploy en Cloudflare Pages
1. Subí este repo a GitHub.
2. En Cloudflare Dashboard → *Pages* → **Create project** → *Connect to GitHub*.
3. Framework preset: **Vite** (o *None* con build manual).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy y listo. Cloudflare te da `*.pages.dev`.
7. En **DNS** de `johatech.com` agrega un **CNAME** al subdominio que quieras (o raíz vía Pages Custom Domains) apuntando a tu `*.pages.dev`.
8. Activa HTTPS automático.

## 🔧 Personalización rápida
Editá `src/App.jsx` dentro del objeto `PROFILE` (nombre, tagline, about, links y skills).

## 🧩 Notas
- Incluye `favicon.svg` con el isotipo de la **J** en gradiente.
- Sin Tailwind ni librerías extra para mantener ligero el build.
