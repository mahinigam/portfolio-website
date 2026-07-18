# Mahi Nigam // Developer Portfolio

A highly bespoke, minimal, and physics-driven portfolio website built with React 19, TailwindCSS, and Framer Motion. 

This project rejects the "app-in-a-box" aesthetic in favor of a **Monochrome Terminal** design system. The viewport acts as an interactive engineering tool, featuring an ambient physics framework and a zero-sum canvas partition for displaying complex project telemetry.

## Features

- **Ambient Physics Framework**: Custom CSS physics (`useScrollVelocity.js`) calculating scroll acceleration to drive a Velocity Tracking HUD and an HTML5 Particle Field.
- **Zero-Sum Canvas Partition**: An interactive, draggable split-screen layout (`useDraggableSplit.js`) for the project showcase that mathematically balances UI layout across three equilibrium states (Balanced, Aggressive Index, Aggressive Canvas).
- **Role-Based Architecture**: A strictly flat, technically-grouped file structure prioritizing maximum creative execution velocity over deep, rigid routing.
- **Typography**: A calculated pairing of standard Sans-Serifs with the **Monaspace** family (Argon, Xenon, Krypton) applied precisely for texture, metrics, and structural metadata.

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **TailwindCSS 3** - Styling & Design System
- **Framer Motion** - Micro-interactions & Physics
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

This project follows a strict Role-Based (File-Type) architecture:

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── ambient/        # Physics-driven HUD & background
│   │   ├── Navbar.jsx      
│   │   ├── Footer.jsx      
│   │   ├── ProjectsDashboard.jsx 
│   │   └── SkillsMatrix.jsx
│   ├── hooks/              # Custom math/physics listeners
│   ├── data/               # Static text metadata
│   ├── pages/
│   │   └── Hero.jsx        # The structural entry point
│   ├── App.jsx             
│   ├── main.jsx            
│   └── index.css           # Global custom utilities & @font-face
```

---

<div align="center">

**Built by [Mahi Nigam](https://github.com/mahinigam)**

[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mahinigam)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mahinigam)

</div>
