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
            {/* Outer glow — soft atmospheric wash */}
            <div
                className="pointer-events-none fixed z-50 transition-opacity duration-500"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                    width: isHovering ? '350px' : '250px',
                    height: isHovering ? '350px' : '250px',
                    background: `radial-gradient(circle, rgba(91, 127, 255, ${isHovering ? 0.08 : 0.05}) 0%, rgba(196, 168, 130, 0.02) 40%, transparent 70%)`,
                    opacity: visible ? 1 : 0,
                    transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
                }}
            />
            {/* Inner glow — subtle focus point */}
            <div
                className="pointer-events-none fixed z-50"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                    width: isHovering ? '80px' : '40px',
                    height: isHovering ? '80px' : '40px',
                    background: `radial-gradient(circle, rgba(91, 127, 255, ${isHovering ? 0.15 : 0.08}) 0%, transparent 70%)`,
                    opacity: visible ? 1 : 0,
                    transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                }}
            />
        </>
    )
}

export default CursorGlow
