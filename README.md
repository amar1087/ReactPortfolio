# Amarjeet Kaur — Portfolio (React)

A React + Vite portfolio site. Dark theme, tap-to-flip cards for experience/work/skills, live clock, scrolling stack marquee.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Updating things regularly

This project is split so you never have to touch component code for routine updates.

### 1. Swap your photo or résumé

Just replace the files in `public/assets/` — **keep the same filenames**:

- `public/assets/photo.jpg` → your headshot
- `public/assets/resume.pdf` → your latest résumé

No code changes needed; the site always points at these two filenames.

### 2. Edit any text on the site

Everything — your name, bio, experience, projects, skills, education, contact links — lives in one file:

```
src/data/content.js
```

Open it, edit the values, save. Every section of the site reads from here automatically. For example, to add a new project, add a new object to the `work` array; to add a new job, add one to the `experience` array.

### 3. Change the look

- Colors, fonts, spacing tokens: `src/styles/variables.css`
- Global/base styles: `src/styles/global.css`
- Each section has its own component + matching `.css` file in `src/components/` if you want to restyle just one part (e.g. `Hero.jsx` / `Hero.css`).

## Folder structure

```
public/
  assets/
    photo.jpg        ← replace to update your photo
    resume.pdf        ← replace to update your résumé
  favicon.svg
src/
  data/
    content.js         ← ALL site text lives here
  components/
    Header.jsx / .css
    Hero.jsx / .css
    Marquee.jsx / .css
    About.jsx / .css
    Experience.jsx / .css
    Work.jsx / .css
    Skills.jsx / .css
    Education.jsx / .css
    Contact.jsx / .css
    Footer.jsx / .css
    FlipCard.jsx / .css  ← shared flip-card used by Experience/Work/Skills
  styles/
    variables.css       ← colors, fonts, spacing tokens
    global.css           ← resets + shared base styles
  App.jsx                ← assembles all sections
  main.jsx                ← entry point
netlify.toml              ← tells Netlify how to build this
```

## Deploying to Netlify

This repo includes a `netlify.toml`, so Netlify auto-detects the settings. Two ways to deploy:

**Option A — connect GitHub (recommended, auto-redeploys on every push):**
1. Push this project to a GitHub repo.
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Build command and publish directory are already set via `netlify.toml` — just click Deploy.

**Option B — drag and drop:**
1. Run `npm run build` locally. This creates a `dist/` folder.
2. Go to your site in Netlify → **Deploys** tab → drag the **contents of `dist/`** (not the project root, not a zip) onto the drop zone.

## Updating the live site after a content change

- If connected via GitHub: commit and push — Netlify rebuilds automatically.
- If using drag-and-drop: run `npm run build` again and re-drag the new `dist/` contents.
