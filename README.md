# JOHATECH Landing (Vite + React)

Landing minimalista para `johatech.com` preparada para desplegar en Vercel.

## Requisitos
- Node.js (>=16) y npm/Yarn/PNPM
- Cuenta en Vercel (https://vercel.com)

## Instalación
```bash
git clone https://github.com/johannmx/johatech-landing.git
cd johatech-landing
npm install
```

## Desarrollo local
```bash
npm run dev
# abre http://localhost:5173 por defecto
```

## Build y preview
```bash
npm run build
npm run preview
```

El build de producción se genera en `dist/`.

## Despliegue en Vercel (recomendado)

Opción A — Deploy automático (recomendado)
- 1. Subí el repo a GitHub (o conecta tu Git provider con Vercel).
- 2. En Vercel, crea un nuevo proyecto y conecta el repositorio.
- 3. En la configuración de Build & Output Settings usa:
	- Build Command: `npm run build`
	# Plantilla: Sitio Vite + React (para desplegar en Vercel)

	Este documento es una guía paso a paso y neutral para desplegar una aplicación creada con Vite + React en Vercel. Está pensado como plantilla que podés compartir con otra persona sin información específica del proyecto.

	## 1) Requisitos
	- Node.js (versión LTS recomendada)
	- Un gestor de paquetes: `npm`, `yarn` o `pnpm`
	- Cuenta en Vercel (opcional si sólo querés generar el build localmente)

	## 2) Preparar el proyecto (rápido)
	1. Cloná o copiá el repositorio al equipo (reemplazá los placeholders):

	```bash
	# Reemplazá <repo-url> por la URL de tu repositorio
	git clone <repo-url>
	cd <repo-directory>
	npm install
	```

	2. Para desarrollo local:

	```bash
	npm run dev
	# normalmente abre en http://localhost:5173
	```

	3. Para generar el build de producción y probar el preview:

	```bash
	npm run build
	npm run preview
	```

	El output de producción queda en la carpeta `dist/` por convención.

	## 3) Despliegue en Vercel — paso a paso

	Opción A — Deploy automático (desde Git, recomendado)
	1. Subí el código a tu Git provider (GitHub, GitLab, Bitbucket).
	2. En el panel de Vercel, crea un nuevo proyecto y seleccioná el repositorio.
	3. En Build & Output Settings configura:
	   - Build Command: `npm run build`
	   - Output Directory: `dist`
	4. Guardá y desplegá. Habilitá deploys automáticos si querés que cada push cree un nuevo despliegue.

	Opción B — Deploy con Vercel CLI

	```bash
	npm i -g vercel
	vercel       # conectar proyecto al equipo/organización
	vercel --prod # desplegar a producción
	```

	Si usás la CLI, seguí el asistente y confirmá los mismos valores de build/output cuando se te pregunte.

	## 4) Configuración útil en Vercel
	- Variables de entorno: Panel → Settings → Environment Variables. Añadilas para secretos o claves.
	- Dominio personalizado: Panel → Domains. Seguí las instrucciones de Vercel para añadir registros DNS en tu proveedor.
	- Fallback para SPA (rutas del cliente): si tu app usa rutas del lado cliente, añadir un `vercel.json` con un rewrite evita 404s.

	Ejemplo de `vercel.json` (colocar en la raíz del repo):

	```json
	{
	  "rewrites": [
	    { "source": "/(.*)", "destination": "/index.html" }
	  ]
	}
	```

	> Nota: crear este archivo solo si tu aplicación necesita que todas las rutas sirvan `index.html`.

	## 5) Personalización y contenido
	- Editá `src/App.jsx` y `src/styles.css` para cambiar texto, enlaces y estilos.
	- Añadí o actualizá `favicon.svg` y metadatos en `index.html` para mejorar SEO y apariencia.

	## 6) Buenas prácticas (sugeridas)
	- Mantener dependencias al mínimo y actualizar versiones regularmente.
	- Usar variables de entorno para información sensible (API keys, tokens).
	- Agregar `robots.txt` y etiquetas meta para SEO cuando corresponda.

	---