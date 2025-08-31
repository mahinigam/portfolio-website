# Portfolio Website

A modern, responsive portfolio website featuring dual themes built with React 19, TailwindCSS, and Framer Motion. Experience both a professional glass theme and a nostalgic retro theme.

## Features

### Core Sections
- **Home**: Landing page with dynamic typing effect and smooth animations
- **About**: Professional profile dashboard with personal information and expertise
- **Skills**: Technical skills organized into enterprise-focused categories
- **Projects**: Real GitHub project showcases with live demo links
- **Blog**: Professional blog overview with RSS feed integration
- **Resume**: PDF download and preview functionality with dynamic file detection
- **Contact**: Interactive contact form with EmailJS integration

### Dual Theme System
- **Glass Theme (Default)**: Professional monochromatic design with frosted glass effects
- **Retro Theme**: Pixel-art inspired design with vibrant neon colors and terminal aesthetics
- **Smart Toggle**: Theme preview button showing target theme styling
- **Consistent UX**: Seamless switching between professional and nostalgic experiences

### Design Elements
- **Glass Theme**: Clean typography, subtle animations, and professional aesthetics
- **Retro Theme**: Pixel fonts, CRT effects, scanlines, and terminal interfaces
- **Responsive**: Fully responsive design optimized for all screen sizes
- **Animations**: Smooth transitions and hover effects using Framer Motion
- **Accessibility**: High contrast design and keyboard navigation support

### Technical Stack
- **Frontend**: React 19 with modern hooks and patterns
- **Build Tool**: Vite 7.x for fast development and optimized builds
- **Styling**: TailwindCSS 3.x with dual theme configuration
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
- **src/pages/About.jsx**: Personal description, education, and professional focus
- **src/pages/Skills.jsx**: Technical skills organized by categories
- **src/pages/Projects.jsx**: Your GitHub projects with live demo links
- **src/pages/Blog.jsx**: RSS feed URL for your blog
- **src/pages/Contact.jsx**: Contact information, social links, and EmailJS configuration
- **public/resume-mahi-nigam.pdf**: Replace with your actual resume file

### Dual Theme System
The themes can be customized in:
- **tailwind.config.js**: Color schemes, fonts, animations, and custom utilities
- **src/index.css**: Global styles, theme-specific CSS, and animations
- **src/context/ThemeContext.jsx**: Theme management and default settings

### Color Schemes
```css
/* Glass Theme - Monochromatic */
glass-bg: #000000           /* Background */
glass-text: #ffffff         /* Primary text */
glass-text-secondary: #b0b0b0   /* Secondary text */
glass-accent: #ffffff       /* Accent elements */

/* Retro Theme - Vibrant */
retro-dark: #0a0a0a        /* Background */
retro-bg: #1a1a1a          /* Card backgrounds */
retro-green: #39FF14       /* Primary accent */
retro-cyan: #00FFFF        /* Secondary accent */
retro-pink: #FF00FF        /* Tertiary accent */
retro-yellow: #FFFF00      /* Quaternary accent */
```

## Project Structure

```
portfolio-website/
├── public/
│   └── resume-mahi-nigam.pdf    # Resume file for download
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with dual theme toggle
│   │   ├── Footer.jsx           # Footer with Snake game (retro theme only)
│   │   └── SnakeGame.jsx        # Retro game component
│   ├── pages/
│   │   ├── Home.jsx             # Landing page with typing animation
│   │   ├── About.jsx            # Professional profile with dual interfaces
│   │   ├── Skills.jsx           # Tech skills in organized categories
│   │   ├── Projects.jsx         # GitHub projects showcase
│   │   ├── Blog.jsx             # Professional blog overview
│   │   ├── Resume.jsx           # PDF preview and download
│   │   └── Contact.jsx          # EmailJS contact form
│   ├── context/
│   │   ├── ThemeContext.jsx     # Theme provider component
│   │   └── themeContext.js      # Theme context creation
│   ├── hooks/
│   │   └── useTheme.js          # Theme management hook
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React 19 app entry point
│   └── index.css               # Global styles and dual themes
├── .env.example                 # Environment variables template
├── tailwind.config.js           # Dual theme configuration
├── vite.config.js              # Vite build configuration
└── package.json                # Dependencies and scripts
```

## Deployment

This portfolio website is optimized for modern deployment platforms with automatic CI/CD. Here are the recommended deployment options:

### Vercel (Recommended for React Apps)
**Best for**: Zero-config deployments with automatic optimizations
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in project settings:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Deploy automatically on every push to main branch
5. Custom domain and HTTPS included

### Netlify
**Best for**: Feature-rich hosting with form handling
1. Push your code to GitHub
2. Connect repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (or higher)
4. Add environment variables in site settings
5. Enable automatic deployments and branch previews

### GitHub Pages
**Best for**: Free hosting directly from GitHub
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Update package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio-website",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Update Vite config for proper base path:
   ```js
   export default defineConfig({
     base: '/portfolio-website/',
     // ... other config
   })
   ```
4. Deploy: `npm run deploy`
5. Enable GitHub Pages in repository settings

### AWS S3 + CloudFront
**Best for**: Enterprise-level hosting with CDN
1. Build the project: `npm run build`
2. Upload `dist` folder to S3 bucket
3. Configure S3 for static website hosting
4. Set up CloudFront distribution for CDN
5. Configure Route 53 for custom domain (optional)

### Firebase Hosting
**Best for**: Google ecosystem integration
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase: `firebase init hosting`
3. Configure `firebase.json`:
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [{"source": "**", "destination": "/index.html"}]
     }
   }
   ```
4. Deploy: `firebase deploy`

### Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All environment variables are properly configured
- [ ] Resume PDF is uploaded to `public` folder
- [ ] Blog RSS feed URL is updated in BlogJS
- [ ] Personal information is updated in all components
- [ ] EmailJS service is configured and tested
- [ ] Both themes are tested thoroughly
- [ ] All external links are working
- [ ] Build runs without errors: `npm run build`
- [ ] Preview build works locally: `npm run preview`

### Performance Optimizations

The build is already optimized with:
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Images and fonts optimized
- **Compression**: Gzip compression enabled
- **Modern JS**: ES6+ features with fallbacks
- **CSS Purging**: Unused TailwindCSS classes removed

### Domain Configuration

For custom domains:
1. **Vercel**: Add domain in project settings
2. **Netlify**: Configure in domain management
3. **GitHub Pages**: Add CNAME file to public folder
4. **AWS/Firebase**: Configure DNS records

### Environment Variables Setup

Required for contact form functionality:
```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Get these credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/)

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
- Dynamic Content: Real GitHub project integration with live demos
- Blog Integration: RSS feed from Blogspot with professional presentation
- Contact Form: EmailJS integration with environment variable security
- Resume Handling: PDF preview and download with dynamic file detection
- Responsive Design: Mobile-first approach with all screen sizes supported

### Dual Theme System
- Glass Theme: Professional monochromatic design with frosted glass effects
- Retro Theme: Pixel-art aesthetics with vibrant neon colors and terminal interfaces
- Smart Toggle: Theme preview button showing target theme styling
- Consistent UX: Seamless switching between professional and nostalgic experiences
- Default Experience: Glass theme loads by default for professional impression

### Design Excellence
- Typography: Professional fonts for glass theme, pixel fonts for retro theme
- Animations: Smooth transitions using Framer Motion
- Interactive Elements: Hover effects, typing animations, and theme-specific interfaces
- Accessibility: High contrast design and keyboard navigation support
- Performance: Optimized builds with code splitting and modern React patterns

### Technical Excellence
- Modern React: React 19 with hooks and functional components
- Performance: Optimized builds with Vite and efficient rendering
- Code Quality: Clean codebase with no errors or inconsistencies
- Security: Environment variables for sensitive data
- Maintainability: Well-structured components with clear separation of concerns

## Theme Features

### Glass Theme (Default)
- Professional monochromatic color scheme (black, white, gray)
- Clean typography with Inter and Outfit fonts
- Frosted glass effects on hover
- Modern card-based layouts
- Professional blog and profile presentations

### Retro Theme
- Vibrant neon color palette
- Press Start 2P pixel font
- CRT effects and scanlines
- Terminal-style interfaces
- Snake game easter egg in footer

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
- Maintain theme consistency across both glass and retro designs
- Ensure responsive design for all new components
- Add proper error handling for API integrations
- Write meaningful commit messages
- Test theme switching functionality thoroughly

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- **Google Fonts** for Inter, Outfit, and Press Start 2P fonts
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
