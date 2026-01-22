# Ghid Deployment - Site Personal

## Opțiuni de Hosting Gratuit

### 1. Vercel (Recomandat - Cel mai ușor) ⭐

**Pași:**
1. Creează un cont pe [vercel.com](https://vercel.com) (gratuit cu GitHub)
2. Instalează Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. În folderul proiectului, rulează:
   ```bash
   vercel
   ```
4. Sau conectează direct GitHub:
   - Push proiectul pe GitHub
   - Mergi pe vercel.com
   - Click "New Project"
   - Selectează repository-ul
   - Vercel detectează automat Vite și configurează totul

**Configurare automată:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Avantaje:**
- ✅ Gratuit
- ✅ HTTPS automat
- ✅ Deploy automat la fiecare push pe GitHub
- ✅ CDN global
- ✅ Domain personal gratuit (vercel.app)

---

### 2. Netlify (Alternativă excelentă)

**Pași:**
1. Creează cont pe [netlify.com](https://netlify.com)
2. Instalează Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Build local:
   ```bash
   npm run build
   ```
4. Deploy:
   ```bash
   netlify deploy --prod
   ```
5. Sau drag & drop folderul `dist` pe netlify.com

**Configurare:**
- Build command: `npm run build`
- Publish directory: `dist`

**Avantaje:**
- ✅ Gratuit
- ✅ HTTPS automat
- ✅ Deploy automat
- ✅ Form handling (dacă ai nevoie)

---

### 3. GitHub Pages (Gratuit, dar necesită configurare)

**Pași:**
1. Adaugă în `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/numele-repository-ului/', // sau '/' dacă e custom domain
     // ... restul configurării
   })
   ```

2. Instalează gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Adaugă în `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Activează GitHub Pages în repository settings:
   - Settings → Pages
   - Source: gh-pages branch

**Avantaje:**
- ✅ Gratuit
- ✅ Integrat cu GitHub
- ⚠️ Necesită configurare manuală

---

### 4. Cloudflare Pages (Rapid și gratuit)

**Pași:**
1. Creează cont pe [cloudflare.com](https://cloudflare.com)
2. Mergi la Pages
3. Conectează GitHub repository
4. Configurare:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Framework preset: Vite

**Avantaje:**
- ✅ Gratuit
- ✅ Foarte rapid (CDN global)
- ✅ Deploy automat

---

## Pași Comuni pentru Toate Platformele

### 1. Pregătire Proiect

```bash
# Testează build-ul local
npm run build

# Preview build-ul
npm run preview
```

### 2. Verifică .gitignore

Asigură-te că `.gitignore` include:
```
node_modules/
dist/
.env
.DS_Store
```

### 3. Push pe GitHub (recomandat)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

---

## Recomandare Finală

**Pentru început: Vercel** - cel mai ușor și rapid de configurat.

**Pași rapizi Vercel:**
1. Push codul pe GitHub
2. Mergi pe vercel.com
3. Login cu GitHub
4. Click "Import Project"
5. Selectează repository-ul
6. Click "Deploy"
7. Gata! Site-ul tău este live în câteva minute

---

## Domain Personal (Opțional)

După deployment, poți adăuga un domain personal:
- Vercel: Settings → Domains
- Netlify: Domain settings → Add custom domain
- Cost: ~$10-15/an pentru un .com domain

---

## Troubleshooting

### Build Errors
- Verifică că toate dependențele sunt instalate: `npm install`
- Verifică că build-ul funcționează local: `npm run build`

### Routing Issues (404 pe pagini)
- Pentru Vercel/Netlify: adaugă `_redirects` în `public/`:
  ```
  /*    /index.html   200
  ```

### Imagini nu se încarcă
- Asigură-te că toate pozele sunt în folderul `public/`
- Verifică path-urile (trebuie să înceapă cu `/`)

---

## Suport

Dacă întâmpini probleme, verifică:
- Logs de build pe platforma aleasă
- Console browser pentru erori
- Network tab pentru resurse care nu se încarcă

