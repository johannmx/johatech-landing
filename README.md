# JOHATECH Landing (Vite + React)

Una landing page minimalista, profesional y altamente personalizable, diseñada para actuar como tarjeta de presentación y currículum online. Construida con **Vite**, **React** y **Lucide React**.

## 🚀 Características principales
- **Multi-idioma nativo:** Soporte para Inglés (EN) y Español (ES).
- **Contenido centralizado:** Personalización sencilla desde un único archivo de configuración.
- **Markdown Ready:** Sección "Sobre mí" gestionada a través de archivos `.md`.
- **Optimizado para Impresión:** Diseño adaptado para generar un CV limpio al imprimir (Ctrl+P).
- **Performance:** Integración con Vercel Analytics y Speed Insights.
- **Docker Ready:** Entorno de desarrollo contenedorizado incluido.

## 🛠️ Requisitos
- **Node.js** (versión 18 o superior recomendada)
- **npm**, **yarn** o **pnpm**

## 🏁 Inicio Rápido

### 1. Clonar y configurar
```bash
git clone https://github.com/tu-usuario/johatech-landing.git
cd johatech-landing
npm install
```

### 2. Desarrollo local
```bash
npm run dev
# Accede a http://localhost:5173
```

### 3. Desarrollo con Docker
Si prefieres no instalar dependencias localmente:
```bash
docker-compose -f docker-compose.dev.yml up
```

## 🎨 Personalización (¡Hazlo tuyo!)

Para adaptar este repositorio a tu perfil, solo necesitas modificar estos archivos:

1. **Datos del Perfil:** Edita `src/data/profile.js`. Aquí puedes cambiar tu nombre, redes sociales, experiencia laboral y habilidades (skills) tanto para la versión en inglés como en español.
2. **Sección "Sobre mí":** Modifica los archivos en `src/content/en/about.md` y `src/content/es/about.md`.
3. **Imagen de Perfil:** Reemplaza el archivo `public/profile.jpg` con tu propia foto.
4. **Favicon:** Actualiza `public/favicon.svg` o `index.html`.

## 📦 Despliegue

### En Vercel (Recomendado)
El proyecto está optimizado para Vercel. Solo conecta tu repositorio a un nuevo proyecto en el panel de Vercel y se detectará automáticamente la configuración de Vite.

### En Cloudflare Pages
Consulta el archivo [README-Cloudflare.md](./README-Cloudflare.md) para instrucciones específicas.

## 🤝 Contribuir o hacer Fork
¡Los forks son bienvenidos! Siéntete libre de usar este código para tu propio sitio personal. 
1. Haz un **Fork** del proyecto.
2. Crea tu **Branch de característica** (`git checkout -b feature/AmazingFeature`).
3. Haz **Commit** de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4. Haz **Push** a la Branch (`git push origin feature/AmazingFeature`).
5. Abre un **Pull Request**.

---
*Built with ❤️ by [Johann Medina](https://johatech.com)*
