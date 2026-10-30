# chen.dev — React + TypeScript portfolio

Converted from the original GitHub Pages site (index.html / style.css / script.js).

## Run it
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs to dist/

## Folder map
    src/
      App.tsx              page layout (Header, Hero, About, Projects, Contact, Footer)
      main.tsx             entry point
      index.css            your original style.css (unchanged)
      types.ts             shared TypeScript types
      data/                all text content: profile.ts, projects.ts
      hooks/useDropdown.ts reusable dropdown logic
      components/          reusable components

To add a project, add one object to src/data/projects.ts. No other file changes.

## Deploy (GitHub Pages)
1. Push this project to the ChenChen0606.github.io repo (main branch).
2. Repo Settings > Pages > Source: "GitHub Actions".
3. Every push to main builds and deploys via .github/workflows/deploy.yml.
