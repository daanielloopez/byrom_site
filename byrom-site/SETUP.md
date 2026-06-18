# Guía rápida — GitHub + Vercel + Assets

> Sigue las secciones por orden. Tiempo estimado total: 15–25 min.

---

## 1) Subir a GitHub (5 min)

1. Crea un repo en https://github.com/new
   - Repository name: `byrom-site` (o el que quieras)
   - **Private** (recomendado, mientras lo enseñas internamente)
   - **NO** marques “Add a README”, “Add .gitignore” ni licencia — el ZIP ya los trae.
2. Descomprime el ZIP `byrom-site.zip` en tu ordenador.
3. Sube el contenido — la forma fácil, desde la **web de GitHub**:
   - En la página del repo recién creado, pulsa **“uploading an existing file”**.
   - Arrastra **todo el contenido** de la carpeta descomprimida (incluye `index.html`, `src/`, `public/`, etc.).
   - Mensaje de commit: `initial site`. Pulsa **Commit changes**.
4. Verifica que en GitHub ves esta estructura:
   ```
   index.html  ·  README.md  ·  vercel.json  ·  src/  ·  public/assets/{fonts,gallery,group,events,...}
   ```

> ¿Prefieres consola? `git init && git add . && git commit -m "initial site" && git branch -M main && git remote add origin <URL> && git push -u origin main`

---

## 2) Conectar Vercel (3 min)

1. Entra en https://vercel.com con tu cuenta de GitHub (mismo usuario).
2. **Add new → Project → Import** y elige tu repo `byrom-site`.
3. Configuración:
   - Framework Preset: **Other**
   - Build Command: **(vacío)**
   - Output Directory: **(vacío)**
   - Root Directory: `./`
4. **Deploy**. Tendrás una URL del tipo `byrom-site-xxxx.vercel.app` en ~30 segundos.

Desde aquí, **cada push a `main` redepliega solo**.

---

## 3) Subir las fuentes Gotham (5 min)

Las fuentes son la diferencia visible más grande. Ahora mismo el sitio cae a Helvetica.

1. En GitHub, abre la carpeta `public/assets/fonts/`.
2. Pulsa **“Add file → Upload files”**.
3. Arrastra **todos los .otf de Gotham** con los nombres exactos indicados en `public/assets/fonts/README.md`. Lista canónica:
   ```
   Gotham-Thin.otf, Gotham-ThinItalic.otf
   Gotham-XLight.otf, Gotham-XLightItalic.otf
   Gotham-Light.otf, Gotham-LightItalic.otf
   Gotham-Book.otf, Gotham-BookItalic.otf
   Gotham-Medium.otf, Gotham-MediumItalic.otf
   Gotham-Bold.otf, Gotham-BoldItalic.otf
   Gotham-Black.otf, Gotham-BlackItalic.otf
   Gotham-Ultra.otf, Gotham-UltraItalic.otf
   ```
4. Commit. Vercel redepliega solo. Recarga la web con **Ctrl/Cmd+Shift+R** (fuerza cache).

> Si tus archivos vienen con otros nombres (p. ej. `Gotham-Book.ttf` o `GothamBook.otf`), o **cambias el nombre en GitHub** antes de subir, o me lo dices y ajusto las `@font-face` en `src/colors_and_type.css`.

---

## 4) Subir imágenes (5–10 min)

Cada carpeta tiene su `README.md` con los **nombres exactos** que espera el código. Sube con los mismos nombres y todo aparece solo, sin tocar código.

- **Galería horizontal** → `public/assets/gallery/`
  Nombres: `01-fifa-world-cup.jpg`, `02-f1-hospitality.jpg`, etc.
- **Logos del grupo** (MATCH Hospitality, Services, Accommodation, GTS Events) → `public/assets/group/`
  Nombres: `match-hospitality.png`, `match-services.png`, `match-accommodation.png`, `gts-events.png`.
- **Imágenes de eventos** (tarjetas de track-record y bocadillos del mapa) → `public/assets/events/`

> Mientras una imagen falte, sale el placeholder con icono. No rompe nada.

---

## 5) Formulario de contacto — entregar las consultas

Hoy muestra un “gracias” sólo en front. Tres formas de hacerlo funcional, de más rápida a más integrada:

1. **Formspree** (5 min, gratis hasta cierto volumen): cuenta en formspree.io, crea un form, te dan una URL. Te paso el cambio exacto cuando me lo digas.
2. **Vercel Serverless Function** que reenvíe por SMTP/SendGrid a tu correo.
3. **Conectar a SFMC** directamente.

---

## 6) Dominio (cuando estés listo para enseñar fuera)

En Vercel → Project → **Settings → Domains** → añade el dominio y sigue el wizard (DNS). Mientras tanto, la URL `*.vercel.app` ya es perfectamente compartible.

---

## Resumen de qué tengo que pasarte para que itere yo

- **Fuentes Gotham** → tú las subes una vez (paso 3) y listo.
- **Logos del grupo** → tú los subes una vez (paso 4).
- **Imágenes de galería y eventos** → tú las subes; yo conecto si hace falta.
- **Export del Google My Maps “Byrom events”** (KML o CSV) → me lo das y regenero los pines del mapa con TODOS tus eventos reales.
- **Lista “current events”** → dime los ~6 que quieres como tarjetas y los meto.

Cuando me digas que está subido a GitHub y desplegado, te paso los siguientes ajustes como **commits sueltos** — tú me dices qué cambiar y te doy el comando o el archivo a sustituir.
