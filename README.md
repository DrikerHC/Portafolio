# Portafolio de Iker Hernández

Web local en español creada con React, Vite y CSS. Requiere Node.js 20.19+ o 22.12+ y npm.

## Abrir en el navegador

Desde PowerShell:

```powershell
cd C:\Portafolio
npm install
npm run dev
```

Abre la dirección que muestra Vite (normalmente http://localhost:5173). Para detenerlo, pulsa Ctrl+C.

## Compilar

```powershell
npm run build
npm run preview
```

La compilación se guarda en `dist/`. `npm run preview` permite revisar esa compilación en la dirección indicada por Vite (normalmente http://localhost:4173).

## Completar los datos

- `src/data.js`: añade el email y las URLs reales de GitHub, LinkedIn y CV. Mientras su valor sea `null`, se muestra texto pendiente, sin enlaces ficticios.
- Para el CV, crea `public/`, coloca allí tu PDF y asigna su ruta a `contact.cv` (por ejemplo `/cv-iker-hernandez.pdf`).
- En el mismo archivo están los cuatro proyectos. Completa títulos, descripciones, repositorios y el tráiler del videojuego; las URLs se activan automáticamente al sustituir `null`. Retira la etiqueta «Ficha pendiente» en `src/main.jsx` cuando hayas completado las fichas.
- `src/main.jsx`: presentación, sobre mí, formación y tecnologías. No se indican años, centros, niveles ni experiencia profesional sin confirmar.
- `src/styles.css`: diseño y adaptaciones a móvil.

Las ilustraciones de proyectos son gráficos decorativos en CSS, no capturas de aplicaciones. Las fuentes se cargan desde Google Fonts; si no hay conexión se utilizan fuentes locales del sistema. No hay formulario ni servicio de envío de mensajes.
