# Happy Birthday wish repo
# Deploy on github pages
## 📌 Prerequisites

- Node.js installed
- A GitHub account
- A Vite + React project created (`npm create vite@latest my-app --template react`)

---

## 1. Install **gh-pages** package

```bash
npm install --save-dev gh-pages
```

## 2. Configure **vite.config.js**

Add the base option — replace your-repo-name with the actual repository name.
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/your-repo-name/",  // <- important!
})
```

## Update **package.json** Scripts

Add these scripts inside the "scripts" section:
```
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## 4. Initialize Git & Push to GitHub
```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<your-repo-name>.git
git push -u origin main
```

## 5. Deploy to GitHub Pages
```bash
npm run deploy
```

## App Will Be Live At:
```
https://<username>.github.io/<your-repo-name>/
```
