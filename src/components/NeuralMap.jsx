import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectDossier from './ProjectDossier'

// ─── Project Data ────────────────────────────────────────────
const projects = [
    {
        id: 'cpa',
        title: 'Customer Purchase Analysis',
        narrative: "Purchase data existed everywhere, but behavior was invisible. I built a pipeline and predictive models that stitched scattered signals into a living dashboard — explaining not just what customers buy, but why they move.",
        tags: ['Python', 'MySQL', 'Scikit-learn', 'Power BI'],
        github: 'https://github.com/mahinigam/customer_purchase_analysis',
        demo: null,
        position: [-3.2, 0.8, 0],
        size: 0.38,
        color: '#5B7FFF',
    },
    {
        id: 'autonote',
        title: 'AutoNote',
        narrative: "Reading long documents felt like waste when most people only needed structured understanding. I built a system that converts dense content into organized notes and lets users question the material through conversation — a thinking companion for documents.",
        tags: ['Python', 'Flask', 'Gemini API', 'JavaScript'],
        github: 'https://github.com/mahinigam/autonote',
        demo: 'https://autonote-br91.onrender.com',
        position: [0, -0.6, 0.5],
        size: 0.42,
        color: '#7B9AFF',
    },
    {
        id: 'urlshort',
        title: 'Modern URL Shortener',
        narrative: "Most link shorteners stop at shortening. I built a type-safe platform with analytics that reveals the life of a link — how, when, and where it travels.",
        tags: ['React', 'TypeScript', 'Material-UI', 'Vite'],
        github: 'https://github.com/mahinigam/url-shortener',
        demo: 'https://url-shortener-rho-one.vercel.app',
        position: [3.2, 0.5, -0.3],
        size: 0.34,
        color: '#C4A882',
    },
]

// Compute connections: projects sharing at least one tech tag
const connections = []
for (let i = 0; i < projects.length; i++) {
    for (let j = i + 1; j < projects.length; j++) {
        const shared = projects[i].tags.filter(t =>
            projects[j].tags.some(t2 => t2.toLowerCase() === t.toLowerCase())
        )
        if (shared.length > 0) {
            connections.push({ from: i, to: j, shared })
        }
    }
}

// ─── Glowing Node (Project Orb) ─────────────────────────────
function ProjectNode({ project, index, onSelect, mousePos }) {
    const groupRef = useRef()
    const glowRef = useRef()
    const coreRef = useRef()
    const basePos = useMemo(() => new THREE.Vector3(...project.position), [project.position])
    const [hovered, setHovered] = useState(false)
    const nodeColor = useMemo(() => new THREE.Color(project.color), [project.color])

    useFrame((state) => {
        if (!groupRef.current) return
        const t = state.clock.elapsedTime

        // Gravitational drift
        const driftX = Math.sin(t * 0.3 + index * 2.1) * 0.2
        const driftY = Math.cos(t * 0.4 + index * 1.7) * 0.15
        const driftZ = Math.sin(t * 0.2 + index * 3.3) * 0.1

        // Magnetic cursor pull
        let pullX = 0, pullY = 0
        if (mousePos.current) {
            const dx = mousePos.current.x * 5 - basePos.x
            const dy = mousePos.current.y * 3 - basePos.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 3.5) {
                const strength = (1 - dist / 3.5) * 0.25
                pullX = dx * strength
                pullY = dy * strength
            }
        }

        groupRef.current.position.x = basePos.x + driftX + pullX
        groupRef.current.position.y = basePos.y + driftY + pullY
        groupRef.current.position.z = basePos.z + driftZ

        // Pulse the outer glow
        if (glowRef.current) {
            const pulseScale = 1 + Math.sin(t * 2 + index) * 0.1 + (hovered ? 0.2 : 0)
            glowRef.current.scale.setScalar(pulseScale)
            glowRef.current.material.opacity = 0.15 + Math.sin(t * 1.5 + index) * 0.05 + (hovered ? 0.08 : 0)
        }

        // Scale the core
        if (coreRef.current) {
            const targetScale = hovered ? 1.2 : 1
            coreRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
        }
    })

    return (
        <group ref={groupRef} position={project.position}>
            {/* Outer glow sphere */}
            <mesh ref={glowRef} scale={2.8}>
                <sphereGeometry args={[project.size, 32, 32]} />
                <meshBasicMaterial
                    color={nodeColor}
                    transparent
                    opacity={0.15}
                    depthWrite={false}
                />
            </mesh>

            {/* Mid glow ring */}
            <mesh scale={1.6}>
                <sphereGeometry args={[project.size, 32, 32]} />
                <meshBasicMaterial
                    color={nodeColor}
                    transparent
                    opacity={0.08}
                    depthWrite={false}
                />
            </mesh>

            {/* Core sphere */}
            <mesh
                ref={coreRef}
                onPointerOver={(e) => {
                    e.stopPropagation()
                    setHovered(true)
                    document.body.style.cursor = 'pointer'
                }}
                onPointerOut={() => {
                    setHovered(false)
                    document.body.style.cursor = 'default'
                }}
                onClick={(e) => {
                    e.stopPropagation()
                    onSelect(project)
                }}
            >
                <sphereGeometry args={[project.size, 64, 64]} />
                <meshStandardMaterial
                    color={nodeColor}
                    emissive={nodeColor}
                    emissiveIntensity={hovered ? 1 : 0.5}
                    roughness={0.15}
                    metalness={0.7}
                    transparent
                    opacity={0.95}
                />
            </mesh>

            {/* HTML Label — guaranteed to render without font issues */}
            <Html
                position={[0, -(project.size + 0.35), 0]}
                center
                distanceFactor={8}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
                <div style={{
                    color: hovered ? '#E8E8EC' : '#7A8290',
                    fontSize: '13px',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.3s ease',
                    textShadow: '0 0 10px rgba(0,0,0,0.8)',
                }}>
                    {project.title}
                </div>
            </Html>
        </group>
    )
}

// ─── Connection Lines ────────────────────────────────────────
function ConnectionLines() {
    const linesRef = useRef([])

    // Pre-compute geometries
    const geometries = useMemo(() => {
        return connections.map((conn) => {
            const fromPos = projects[conn.from].position
            const toPos = projects[conn.to].position

            const midX = (fromPos[0] + toPos[0]) / 2
            const midY = (fromPos[1] + toPos[1]) / 2 + 0.6
            const midZ = (fromPos[2] + toPos[2]) / 2

            const curve = new THREE.QuadraticBezierCurve3(
                new THREE.Vector3(...fromPos),
                new THREE.Vector3(midX, midY, midZ),
                new THREE.Vector3(...toPos),
            )
            const points = curve.getPoints(60)
            return new THREE.BufferGeometry().setFromPoints(points)
        })
    }, [])

    useFrame((state) => {
        const t = state.clock.elapsedTime
        linesRef.current.forEach((line, i) => {
            if (line && line.material) {
                line.material.opacity = 0.1 + Math.sin(t * 1.5 + i * 2.5) * 0.06
            }
        })
    })

    return (
        <group>
            {geometries.map((geometry, i) => (
                <line key={i} ref={(el) => (linesRef.current[i] = el)} geometry={geometry}>
                    <lineBasicMaterial
                        color="#5B7FFF"
                        transparent
                        opacity={0.12}
                        depthWrite={false}
                    />
                </line>
            ))}
        </group>
    )
}

// ─── Background Particles (ambient star field) ───────────────
function Particles() {
    const count = 120
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 18
            pos[i * 3 + 1] = (Math.random() - 0.5) * 12
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10
        }
        return pos
    }, [])

    const pointsRef = useRef()

    useFrame((state) => {
        if (!pointsRef.current) return
        pointsRef.current.rotation.y = state.clock.elapsedTime * 0.008
        pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.006) * 0.04
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.025}
                color="#5B7FFF"
                transparent
                opacity={0.35}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    )
}

// ─── Scene ───────────────────────────────────────────────────
function Scene({ onSelectProject, mousePos }) {
    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight position={[6, 4, 5]} intensity={0.7} color="#5B7FFF" />
            <pointLight position={[-5, -3, 4]} intensity={0.4} color="#C4A882" />
            <pointLight position={[0, 0, 6]} intensity={0.2} color="#ffffff" />

            <Particles />
            <ConnectionLines />

            {projects.map((project, index) => (
                <ProjectNode
                    key={project.id}
                    project={project}
                    index={index}
                    onSelect={onSelectProject}
                    mousePos={mousePos}
                />
            ))}
        </>
    )
}

// ─── Mobile Fallback ─────────────────────────────────────────
function MobileFallback({ onSelectProject }) {
    return (
        <div className="space-y-4 px-6 py-8">
            {projects.map((project, index) => (
                <motion.button
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => onSelectProject(project)}
                    className="neural-mobile-card w-full text-left"
                >
                    {/* Colored indicator */}
                    <div
                        className="w-2.5 h-2.5 rounded-full mb-3"
                        style={{ backgroundColor: project.color, boxShadow: `0 0 12px ${project.color}40` }}
                    />
                    <h3 className="font-display text-lg font-medium text-cinema-text mb-2">
                        {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs text-cinema-text-muted px-2 py-0.5 border border-cinema-border rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="cinema-body text-sm line-clamp-2">
                        {project.narrative}
                    </p>
                </motion.button>
            ))}
        </div>
    )
}

// ─── Main NeuralMap Component ────────────────────────────────
const NeuralMap = () => {
    const [selectedProject, setSelectedProject] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    const mousePos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const handleMouseMove = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mousePos.current = {
            x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
            y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
        }
    }, [])

    const handleSelectProject = useCallback((project) => {
        setSelectedProject(project)
    }, [])

    const handleCloseProject = useCallback(() => {
        setSelectedProject(null)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    }

    return (
        <section id="work" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {/* Section header */}
                    <motion.div variants={itemVariants} className="mb-4">
                        <span className="cinema-label">Work</span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="cinema-heading text-3xl sm:text-4xl md:text-5xl mb-6"
                    >
                        Neural Map
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="cinema-body text-lg mb-6 max-w-2xl"
                    >
                        Projects as nodes. Shared technology as connections.
                        Click any node to explore.
                    </motion.p>

                    <motion.div variants={itemVariants} className="cinema-divider mb-12" />

                    {/* The Canvas / Mobile Fallback */}
                    <motion.div
                        variants={itemVariants}
                        className="relative rounded-2xl overflow-hidden border border-cinema-border"
                        style={{
                            height: isMobile ? 'auto' : '70vh',
                            minHeight: isMobile ? 'auto' : '500px',
                            background: 'radial-gradient(ellipse at 50% 50%, rgba(91, 127, 255, 0.03) 0%, rgba(10, 10, 12, 0.95) 70%)',
                        }}
                        onMouseMove={!isMobile ? handleMouseMove : undefined}
                    >
                        {isMobile ? (
                            <MobileFallback onSelectProject={handleSelectProject} />
                        ) : (
                            <Canvas
                                camera={{ position: [0, 0, 8], fov: 50, near: 0.1, far: 100 }}
                                dpr={[1, 2]}
                                gl={{ antialias: true, alpha: true }}
                                style={{ background: 'transparent' }}
                            >
                                <Scene
                                    onSelectProject={handleSelectProject}
                                    mousePos={mousePos}
                                />
                            </Canvas>
                        )}
                    </motion.div>
                </motion.div>
            </div>

            {/* Project Dossier Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectDossier
                        project={selectedProject}
                        onClose={handleCloseProject}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}

export default NeuralMap
