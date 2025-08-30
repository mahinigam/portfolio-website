# Retro Portfolio Website

A modern, responsive portfolio website with retro pixel-art aesthetics built using React, TailwindCSS, and Framer Motion.

## Features

### Core Sections
- **Home**: Landing page with typewriter effect and retro animations
- **About**: Personal introduction with terminal-style interface
- **Skills**: Technical skills displayed as retro "power-ups"
- **Projects**: Interactive project cards with hover effects
- **Blog**: Terminal-style blog feed connecting to Blogspot
- **Resume**: Download and preview functionality
- **Contact**: Interactive contact form with social links

### Design Elements
- **Retro Aesthetic**: Pixel-art inspired design with subtle retro vibes
- **Dark Theme**: Dark background with neon accent colors (green, cyan, pink, purple)
- **Pixel Font**: "Press Start 2P" Google Font for authentic retro feel
- **Animations**: Smooth transitions and hover effects using Framer Motion
- **Responsive**: Fully responsive design for all screen sizes
- **Scanlines**: Subtle retro scanline effects throughout the site

### Technical Stack
- **Frontend**: React 18 with Vite
- **Styling**: TailwindCSS with custom retro theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Version Control**: Git

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Customization

### Personal Information
Update the following files with your personal information:

- **src/pages/Home.jsx**: Name, tagline, and introduction
- **src/pages/About.jsx**: Personal description and details
- **src/pages/Skills.jsx**: Your technical skills and experience
- **src/pages/Projects.jsx**: Your projects with GitHub links
- **src/pages/Blog.jsx**: Blog posts array (connect to your blog API)
- **src/pages/Contact.jsx**: Contact information and social links

### Styling
The retro theme can be customized in:
- **tailwind.config.js**: Color scheme, fonts, and animations
- **src/index.css**: Custom CSS classes and utilities

### Colors
The current color scheme includes:
- `retro-dark`: #0a0a0a (Background)
- `retro-bg`: #1a1a1a (Card backgrounds)
- `retro-card`: #2a2a2a (Component backgrounds)
- `retro-green`: #00ff41 (Primary accent)
- `retro-cyan`: #00ffff (Secondary accent)
- `retro-pink`: #ff00ff (Tertiary accent)
- `retro-purple`: #8b00ff (Quaternary accent)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   └── Footer.jsx          # Footer component
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── About.jsx           # About section
│   ├── Skills.jsx          # Skills showcase
│   ├── Projects.jsx        # Projects portfolio
│   ├── Blog.jsx            # Blog feed
│   ├── Resume.jsx          # Resume download
│   └── Contact.jsx         # Contact form
├── assets/                 # Static assets
├── App.jsx                 # Main app component
├── main.jsx               # App entry point
└── index.css              # Global styles
```

## Deployment

This project can be deployed to various platforms:

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Key Features Implemented

### Requirements Met
- [x] Pixel-art background with stars and grid
- [x] Retro text with blinking cursor effect
- [x] Skills displayed as retro "power-ups"
- [x] Project cards with pixel glow effects
- [x] Terminal-style blog feed
- [x] Retro-styled resume download button
- [x] Pixelated hover animations
- [x] Press Start 2P font implementation
- [x] Dark theme with neon accents
- [x] Framer Motion animations
- [x] Responsive design
- [x] Clean component structure

### Design Philosophy
- **Subtle Retro**: Clean and professional while maintaining retro charm
- **Performance**: Optimized animations and efficient React patterns
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Mobile-First**: Responsive design that works on all devices

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- **Google Fonts** for the "Press Start 2P" font
- **Lucide React** for the beautiful icons
- **Framer Motion** for smooth animations
- **TailwindCSS** for utility-first styling
- **React Team** for the amazing framework

---

**Built with love and coffee by Mahi Nigam**

> "Transforming data into insights and ideas into reality"+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
