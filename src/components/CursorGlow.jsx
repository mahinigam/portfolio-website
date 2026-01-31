import React, { useEffect, useState, useCallback } from 'react'

const CursorGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseMove = useCallback((e) => {
        setPosition({ x: e.clientX, y: e.clientY })
        if (!visible) setVisible(true)
    }, [visible])

    const handleMouseEnter = useCallback(() => setVisible(true), [])
    const handleMouseLeave = useCallback(() => setVisible(false), [])

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        document.body.addEventListener('mouseenter', handleMouseEnter)
        document.body.addEventListener('mouseleave', handleMouseLeave)

        // Detect hovering over interactive elements
        const handleHoverStart = (e) => {
            if (e.target.closest('a, button, [role="button"], input, textarea')) {
                setIsHovering(true)
            }
        }
        const handleHoverEnd = (e) => {
            if (e.target.closest('a, button, [role="button"], input, textarea')) {
                setIsHovering(false)
            }
        }

        document.addEventListener('mouseover', handleHoverStart)
        document.addEventListener('mouseout', handleHoverEnd)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.body.removeEventListener('mouseenter', handleMouseEnter)
            document.body.removeEventListener('mouseleave', handleMouseLeave)
            document.removeEventListener('mouseover', handleHoverStart)
            document.removeEventListener('mouseout', handleHoverEnd)
        }
    }, [handleMouseMove, handleMouseEnter, handleMouseLeave])

    if (typeof window === 'undefined') return null

    return (
        <>
            {/* Outer glow - large and soft */}
            <div
                className="pointer-events-none fixed z-50 transition-opacity duration-300"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                    width: isHovering ? '400px' : '300px',
                    height: isHovering ? '400px' : '300px',
                    background: `radial-gradient(circle, rgba(31, 40, 72, ${isHovering ? 0.25 : 0.15}) 0%, transparent 70%)`,
                    opacity: visible ? 1 : 0,
                    transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
                }}
            />
            {/* Inner glow - smaller, more intense */}
            <div
                className="pointer-events-none fixed z-50"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                    width: isHovering ? '100px' : '60px',
                    height: isHovering ? '100px' : '60px',
                    background: `radial-gradient(circle, rgba(31, 40, 72, ${isHovering ? 0.4 : 0.25}) 0%, transparent 70%)`,
                    opacity: visible ? 1 : 0,
                    transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
                }}
            />
        </>
    )
}

export default CursorGlow
