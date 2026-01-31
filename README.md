# Portfolio Website

A minimal, cinematic portfolio website built with React 19, TailwindCSS, and Framer Motion.

## Features

### Sections
- **Hero**: Clean landing with name and tagline
- **About**: Personal profile with expertise tags
- **Work**: GitHub projects showcase
- **Thoughts**: Blog/writings section
- **Contact**: Email, LinkedIn, and GitHub links

### Design
- **Cinematic Theme**: Dark, elegant design with subtle animations
- **Cursor Glow**: Interactive glow effect following mouse movement
- **Responsive**: Optimized for all screen sizes
- **Smooth Animations**: Framer Motion for fluid interactions

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **TailwindCSS 3** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

Built files will be in the `dist` directory.

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── CursorGlow.jsx    # Mouse glow effect
│   │   ├── Navbar.jsx        # Navigation
│   │   └── Footer.jsx        # Social links footer
│   ├── pages/
│   │   ├── Hero.jsx          # Landing section
│   │   ├── About.jsx         # Profile & expertise
│   │   ├── Work.jsx          # Projects showcase
│   │   ├── Thoughts.jsx      # Blog/writings
│   │   └── Contact.jsx       # Contact links
│   ├── App.jsx               # Main component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── tailwind.config.js        # Theme configuration
├── vite.config.js            # Build configuration
└── package.json              # Dependencies
```

## Customization

Update these files with your information:

- `src/pages/Hero.jsx` - Name and tagline
- `src/pages/About.jsx` - Bio and expertise
- `src/pages/Work.jsx` - Your projects
- `src/pages/Thoughts.jsx` - Blog content
- `src/pages/Contact.jsx` - Social links
- `src/components/Footer.jsx` - Footer links

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # Code linting
```

## Deployment

Works with any static hosting:
- **Vercel**: Zero-config deployment
- **Netlify**: Connect repo and deploy
- **GitHub Pages**: Use gh-pages package

## Dependencies

```json
{
  "framer-motion": "^12.23.12",
  "lucide-react": "^0.542.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1"
}
```

---

<div align="center">

**Built by [Mahi Nigam](https://github.com/mahinigam)**

[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mahinigam)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mahi-nigam)

</div>
