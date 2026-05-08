# Gazi Shahariar Hasan — Portfolio

A professional React portfolio built with a sidebar layout, navy/green theme.

## Project Structure

```
gazi-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Sidebar.js       # Left navigation sidebar
│   │   ├── Sidebar.css
│   │   ├── shared.js        # Reusable UI (Card, Tag, Badge, etc.)
│   │   └── shared.css
│   ├── sections/
│   │   ├── About.js
│   │   ├── Education.js
│   │   ├── Research.js
│   │   ├── Industrial.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   └── sections.css     # All section styles
│   ├── data.js              # All portfolio content (edit this!)
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run locally
npm start

# Build for production
npm run build
```

## Customizing Content

All content lives in `src/data.js`. Edit that file to update your name, education, projects, skills, etc. — no need to touch the component files.

## Deploying Free

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: drag the `build/` folder to netlify.com/drop
- **GitHub Pages**: `npm install gh-pages && npm run build && npx gh-pages -d build`
