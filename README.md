# Portfolio Website

A modern, responsive portfolio website with retro pixel-art aesthetics built using React 19, TailwindCSS, and Framer Motion.

## Features

### Core Sections
- **Home**: Landing page with typewriter effect and retro animations
- **About**: Personal introduction with terminal-style interface and personality traits
- **Skills**: Technical skills organized into enterprise-focused categories
- **Projects**: Real GitHub project showcases with live demo links
- **Blog**: Dynamic RSS feed integration with Blogspot
- **Resume**: PDF download and preview functionality with dynamic file detection
- **Contact**: Interactive contact form with EmailJS integration

### Design Elements
- **Retro Aesthetic**: Pixel-art inspired design with subtle retro vibes
- **Dark Theme**: Dark background with neon accent colors (green, cyan, pink, purple)
- **Pixel Font**: "Press Start 2P" Google Font for authentic retro feel
- **Animations**: Smooth transitions and hover effects using Framer Motion
- **CRT Effects**: Scanlines and retro terminal aesthetics
- **Responsive**: Fully responsive design optimized for all screen sizes

### Technical Stack
- **Frontend**: React 19 with modern hooks and patterns
- **Build Tool**: Vite 7.x for fast development and optimized builds
- **Styling**: TailwindCSS 3.x with custom retro theme configuration
- **Animations**: Framer Motion 12.x for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Forms**: EmailJS for contact form functionality
- **Blog Integration**: RSS2JSON API for dynamic blog content

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

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

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env and add your EmailJS credentials
   # Get these from https://www.emailjs.com/
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Customization

### Personal Information
Update the following files with your personal information:

- **src/pages/Home.jsx**: Name, tagline, and introduction text
- **src/pages/About.jsx**: Personal description, student status, and personality traits
- **src/pages/Skills.jsx**: Technical skills organized by categories (Data Science, Programming, etc.)
- **src/pages/Projects.jsx**: Your GitHub projects with live demo links
- **src/pages/Blog.jsx**: RSS feed URL for your blog (currently configured for Blogspot)
- **src/pages/Contact.jsx**: Contact information, social links, and EmailJS configuration
- **public/resume-mahi-nigam.pdf**: Replace with your actual resume file

### Styling & Theme
The retro theme can be customized in:
- **tailwind.config.js**: Color scheme, fonts, animations, and custom utilities
- **src/index.css**: Global styles, Google Fonts imports, and CSS animations

### Color Scheme
```css
/* Current retro color palette */
retro-dark: #0a0a0a      /* Background */
retro-bg: #1a1a1a        /* Card backgrounds */
retro-card: #2a2a2a      /* Component backgrounds */
retro-green: #00ff41     /* Primary accent */
retro-cyan: #00ffff      /* Secondary accent */
retro-pink: #ff00ff      /* Tertiary accent */
retro-purple: #8b00ff    /* Quaternary accent */
```

## Project Structure

```
portfolio-website/
├── public/
│   └── resume-mahi-nigam.pdf    # Resume file for download
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with smooth scrolling
│   │   ├── Footer.jsx           # Footer with Snake game easter egg
│   │   └── SnakeGame.jsx        # Hidden retro game component
│   ├── pages/
│   │   ├── Home.jsx             # Landing page with typing animation
│   │   ├── About.jsx            # Personal intro with terminal interface
│   │   ├── Skills.jsx           # Tech skills in organized categories
│   │   ├── Projects.jsx         # Real GitHub projects showcase
│   │   ├── Blog.jsx             # Dynamic RSS feed integration
│   │   ├── Resume.jsx           # PDF preview and download
│   │   └── Contact.jsx          # EmailJS contact form
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # React 19 app entry point
│   └── index.css               # Global styles and retro theme
├── .env.example                 # Environment variables template
├── tailwind.config.js           # Custom retro theme configuration
├── vite.config.js              # Vite build configuration
└── package.json                # Dependencies and scripts
```

## Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables in Netlify dashboard

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

## Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint for code quality
```

## Key Features Implemented

### Functional Requirements
- [x] **Dynamic Content**: Real GitHub project integration with live demos
- [x] **Blog Integration**: RSS feed from Blogspot with automatic updates
- [x] **Contact Form**: EmailJS integration with environment variable security
- [x] **Resume Handling**: PDF preview and download with dynamic file detection
- [x] **Responsive Design**: Mobile-first approach with all screen sizes supported

### Design Requirements
- [x] **Retro Aesthetics**: Pixel-art background with stars and grid patterns
- [x] **Typography**: Press Start 2P font with retro text effects
- [x] **Color Scheme**: Dark theme with neon accent colors
- [x] **Animations**: Smooth transitions using Framer Motion
- [x] **Interactive Elements**: Hover effects, typing animations, terminal interfaces
- [x] **CRT Effects**: Scanlines and retro display aesthetics

### Technical Excellence
- [x] **Modern React**: React 19 with hooks and functional components
- [x] **Performance**: Optimized builds with Vite and code splitting
- [x] **Code Quality**: ESLint configuration with no errors
- [x] **Security**: Environment variables for sensitive data
- [x] **Accessibility**: Semantic HTML and keyboard navigation support

## Easter Eggs

- **Snake Game**: Click the game controller icon in the footer to play a retro Snake game
- **Terminal Commands**: Interactive terminal interfaces in About and Blog sections
- **Hover Effects**: Pixel glow and retro animations throughout the site

## Dependencies

### Production Dependencies
```json
{
  "@emailjs/browser": "^4.4.1",     // Contact form functionality
  "framer-motion": "^12.23.12",     // Smooth animations
  "lucide-react": "^0.542.0",       // Modern icon library
  "react": "^19.1.1",               // Core React library
  "react-dom": "^19.1.1"            // React DOM rendering
}
```

### Development Dependencies
- **Vite**: Fast build tool and development server
- **TailwindCSS**: Utility-first CSS framework
- **ESLint**: Code quality and consistency
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixes

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow React best practices and hooks patterns
- Maintain the retro aesthetic consistency
- Ensure responsive design for all new components
- Add proper error handling for API integrations
- Write meaningful commit messages

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- **Google Fonts** for the "Press Start 2P" retro font
- **Lucide React** for the comprehensive icon library
- **Framer Motion** for smooth and performant animations
- **TailwindCSS** for utility-first CSS framework
- **Vite** for lightning-fast development experience
- **EmailJS** for serverless contact form functionality
- **RSS2JSON** for blog feed integration

---

<div align="center">

**Built with passion by [Mahi Nigam](https://github.com/mahinigam)**

*"Transforming data into insights and ideas into reality"*

[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mahinigam)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mahinigam)
[![Blog](https://img.shields.io/badge/Blog-FF5722?style=for-the-badge&logo=blogger&logoColor=white)](https://mahinigam.blogspot.com)

</div>
