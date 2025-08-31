import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, RotateCcw } from 'lucide-react'

const SnakeGame = ({ isOpen, onClose }) => {
  const canvasRef = useRef(null)
  const gameLoopRef = useRef(null)
  const [gameState, setGameState] = useState('menu') // 'menu', 'playing', 'gameOver'
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(() => 
    parseInt(localStorage.getItem('snake-high-score') || '0')
  )

  // Game configuration
  const GRID_SIZE = 20
  const CANVAS_SIZE = 400
  const GRID_COUNT = CANVAS_SIZE / GRID_SIZE

  // Game state
  const [snake, setSnake] = useState([{ x: 10, y: 10 }])
  const [food, setFood] = useState({ x: 15, y: 15 })
  const [specialFood, setSpecialFood] = useState(null)
  const [direction, setDirection] = useState({ x: 0, y: 0 })
  const [nextDirection, setNextDirection] = useState({ x: 0, y: 0 })
  const [foodEaten, setFoodEaten] = useState(0) // Counter for special food generation

  // Generate random food position (avoiding snake)
  const generateFood = useCallback(() => {
    let newFood;
    let attempts = 0;
    
    // Try to find a position not on the snake (with fallback to prevent infinite loop)
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_COUNT),
        y: Math.floor(Math.random() * GRID_COUNT)
      };
      attempts++;
    } while (
      attempts < 50 && 
      snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)
    );
    
    return newFood;
  }, [GRID_COUNT, snake])

  // Generate special food with better logic
  const generateSpecialFood = useCallback((foodCount) => {
    // Generate special food every 3-5 regular foods eaten, or 20% random chance
    const shouldGenerate = (foodCount > 0 && foodCount % 4 === 0) || Math.random() < 0.2;
    
    if (shouldGenerate) {
      let position;
      let attempts = 0;
      
      // Ensure special food doesn't spawn on snake or regular food
      do {
        position = {
          x: Math.floor(Math.random() * GRID_COUNT),
          y: Math.floor(Math.random() * GRID_COUNT),
          timer: 150 // Lasts longer for better visibility
        };
        attempts++;
      } while (
        attempts < 50 && (
          (position.x === food.x && position.y === food.y) || // Don't spawn on regular food
          snake.some(segment => segment.x === position.x && segment.y === position.y) // Don't spawn on snake
        )
      );
      return position;
    }
    return null;
  }, [GRID_COUNT, food.x, food.y, snake])

  // Initialize game
  const initGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }])
    setFood(generateFood())
    setSpecialFood(null)
    setDirection({ x: 0, y: 0 })
    setNextDirection({ x: 0, y: 0 })
    setScore(0)
    setFoodEaten(0) // Reset food counter
    setGameState('menu')
  }, [generateFood])

  // Start game
  const startGame = useCallback(() => {
    initGame()
    setGameState('playing')
  }, [initGame])

  // Handle keyboard input
  const handleKeyPress = useCallback((e) => {
    if (e.code === 'Escape') {
      onClose()
      return
    }

    // Spacebar to start/restart game
    if (e.code === 'Space') {
      e.preventDefault() // Prevent page scroll
      if (gameState === 'menu' || gameState === 'gameOver') {
        startGame()
      }
      return
    }

    if (gameState !== 'playing') return

    const keyDirections = {
      'ArrowUp': { x: 0, y: -1 },
      'ArrowDown': { x: 0, y: 1 },
      'ArrowLeft': { x: -1, y: 0 },
      'ArrowRight': { x: 1, y: 0 },
      'KeyW': { x: 0, y: -1 },
      'KeyS': { x: 0, y: 1 },
      'KeyA': { x: -1, y: 0 },
      'KeyD': { x: 1, y: 0 }
    }

    const newDirection = keyDirections[e.code]
    if (newDirection) {
      // Prevent reverse direction
      if (direction.x === 0 || newDirection.x === 0) {
        if (direction.y === 0 || newDirection.y === 0) {
          setNextDirection(newDirection)
        }
      }
    }
  }, [gameState, direction, onClose, startGame])

  // Game loop
  const gameLoop = useCallback(() => {
    setSnake(currentSnake => {
      const newSnake = [...currentSnake]
      const head = { ...newSnake[0] }

      // Update direction
      const currentDirection = nextDirection.x !== 0 || nextDirection.y !== 0 ? nextDirection : direction
      setDirection(currentDirection)

      // Don't move if no direction is set (game just started)
      if (currentDirection.x === 0 && currentDirection.y === 0) {
        return currentSnake
      }

      // Move head
      head.x += currentDirection.x
      head.y += currentDirection.y

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_COUNT || head.y < 0 || head.y >= GRID_COUNT) {
        setGameState('gameOver')
        return currentSnake
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameState('gameOver')
        return currentSnake
      }

      newSnake.unshift(head)

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10)
        setFoodEaten(prev => prev + 1)
        setFood(generateFood())
        
        // Generate special food with improved logic
        if (!specialFood) {
          setSpecialFood(generateSpecialFood(foodEaten + 1))
        }
      } else if (specialFood && head.x === specialFood.x && head.y === specialFood.y) {
        setScore(prev => prev + 50)
        setSpecialFood(null)
      } else {
        newSnake.pop()
      }

      return newSnake
    })

    // Update special food timer
    setSpecialFood(current => {
      if (current && current.timer > 0) {
        return { ...current, timer: current.timer - 1 }
      }
      return current && current.timer === 0 ? null : current
    })
  }, [direction, nextDirection, food, specialFood, generateFood, generateSpecialFood, GRID_COUNT, foodEaten])

  // Game over effect
  useEffect(() => {
    if (gameState === 'gameOver' && score > highScore) {
      setHighScore(score)
      localStorage.setItem('snake-high-score', score.toString())
    }
  }, [gameState, score, highScore])

  // Set up game loop
  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = setInterval(gameLoop, 150) // Slightly slower for better playability
    } else {
      clearInterval(gameLoopRef.current)
    }

    return () => clearInterval(gameLoopRef.current)
  }, [gameState, gameLoop])

  // Keyboard event listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress)
      return () => document.removeEventListener('keydown', handleKeyPress)
    }
  }, [isOpen, handleKeyPress])

  // Canvas rendering
  useEffect(() => {
    if (!isOpen) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

    // Draw grid
    ctx.strokeStyle = '#39FF14'
    ctx.globalAlpha = 0.1
    ctx.lineWidth = 1
    for (let i = 0; i <= GRID_COUNT; i++) {
      ctx.beginPath()
      ctx.moveTo(i * GRID_SIZE, 0)
      ctx.lineTo(i * GRID_SIZE, CANVAS_SIZE)
      ctx.stroke()
      
      ctx.beginPath()
      ctx.moveTo(0, i * GRID_SIZE)
      ctx.lineTo(CANVAS_SIZE, i * GRID_SIZE)
      ctx.stroke()
    }
    ctx.globalAlpha = 1

    // Draw snake
    snake.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? '#39FF14' : '#00FFFF'
      ctx.shadowColor = index === 0 ? '#39FF14' : '#00FFFF'
      ctx.shadowBlur = 10
      ctx.fillRect(
        segment.x * GRID_SIZE + 2,
        segment.y * GRID_SIZE + 2,
        GRID_SIZE - 4,
        GRID_SIZE - 4
      )
      ctx.shadowBlur = 0
    })

    // Draw food
    ctx.fillStyle = '#FF00FF'
    ctx.shadowColor = '#FF00FF'
    ctx.shadowBlur = 15
    ctx.fillRect(
      food.x * GRID_SIZE + 3,
      food.y * GRID_SIZE + 3,
      GRID_SIZE - 6,
      GRID_SIZE - 6
    )
    ctx.shadowBlur = 0

    // Draw special food
    if (specialFood) {
      const flicker = Math.sin(Date.now() * 0.01) > 0
      if (flicker) {
        ctx.fillStyle = '#FFFF00'
        ctx.shadowColor = '#FFFF00'
        ctx.shadowBlur = 20
        ctx.fillRect(
          specialFood.x * GRID_SIZE + 1,
          specialFood.y * GRID_SIZE + 1,
          GRID_SIZE - 2,
          GRID_SIZE - 2
        )
        ctx.shadowBlur = 0
      }
    }
  }, [isOpen, snake, food, specialFood, CANVAS_SIZE, GRID_SIZE, GRID_COUNT])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-retro-card border-2 border-retro-green p-8 pixel-corners relative"
          style={{
            boxShadow: '0 0 30px rgba(57, 255, 20, 0.5)',
            filter: 'drop-shadow(0 0 20px rgba(57, 255, 20, 0.3))'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-retro-pink hover:text-retro-yellow transition-colors duration-200 sprite"
          >
            <X size={20} />
          </button>

          {/* Game title */}
          <div className="text-center mb-6">
            <h2 className="text-retro-green-dim font-pixel text-lg text-glow-soft sprite mb-2">
              &gt; SNAKE.EXE
            </h2>
            <div className="flex justify-between items-center text-xs font-pixel">
              <div className="text-retro-blue sprite">
                SCORE: <span className="text-retro-yellow text-glow">{score}</span>
              </div>
              <div className="text-retro-blue sprite">
                HIGH: <span className="text-retro-pink text-glow">{highScore}</span>
              </div>
            </div>
          </div>

          {/* Game canvas */}
          <div className="relative border-2 border-retro-green mb-6" style={{ width: CANVAS_SIZE, height: CANVAS_SIZE }}>
            <canvas
              ref={canvasRef}
              width={CANVAS_SIZE}
              height={CANVAS_SIZE}
              className="block"
            />

            {/* Game state overlays */}
            {gameState === 'menu' && (
              <div className="absolute inset-0 bg-retro-card/90 flex flex-col items-center justify-center">
                <div className="text-retro-green-dim font-pixel text-sm text-glow-soft mb-4 text-center sprite">
                  RETRO SNAKE
                </div>
                <div className="text-retro-blue font-pixel text-xs mb-4 text-center sprite">
                  USE ARROW KEYS OR WASD
                </div>
                <div className="text-retro-cyan font-pixel text-xs mb-6 text-center sprite">
                  PRESS SPACE TO START
                </div>
                <button
                  onClick={startGame}
                  className="retro-button pixel-corners bg-retro-card border-retro-green text-retro-green-dim hover:bg-retro-green hover:text-retro-bg flex items-center gap-2 sprite"
                >
                  <Play size={16} /> START GAME
                </button>
              </div>
            )}

            {gameState === 'playing' && direction.x === 0 && direction.y === 0 && (
              <div className="absolute inset-0 bg-retro-card/60 flex flex-col items-center justify-center">
                <div className="text-retro-yellow font-pixel text-xs text-glow mb-2 text-center sprite animate-bounce-retro">
                  PRESS ANY ARROW KEY TO START
                </div>
                <div className="text-retro-blue font-pixel text-xs text-center sprite">
                  ↑ ↓ ← → OR W A S D
                </div>
              </div>
            )}

            {gameState === 'gameOver' && (
              <div className="absolute inset-0 bg-retro-card/90 flex flex-col items-center justify-center">
                <div className="text-retro-pink font-pixel text-sm text-glow mb-2 sprite">
                  GAME OVER
                </div>
                <div className="text-retro-yellow font-pixel text-xs mb-4 sprite">
                  SCORE: {score}
                </div>
                {score === highScore && score > 0 && (
                  <div className="text-retro-green-dim font-pixel text-xs mb-4 text-glow-soft sprite animate-bounce-retro">
                    NEW HIGH SCORE!
                  </div>
                )}
                <div className="text-retro-cyan font-pixel text-xs mb-4 text-center sprite">
                  PRESS SPACE TO PLAY AGAIN
                </div>
                <button
                  onClick={startGame}
                  className="retro-button pixel-corners bg-retro-card border-retro-pink text-retro-pink hover:bg-retro-pink hover:text-retro-bg flex items-center gap-2 sprite"
                >
                  <RotateCcw size={16} /> PLAY AGAIN
                </button>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="text-center text-xs font-pixel text-retro-blue sprite">
            <div className="mb-1 flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-retro-pink border border-retro-pink" style={{boxShadow: '0 0 5px #FF00FF'}}></div>
              <span>FOOD = 20 PTS</span>
            </div>
            <div className="mb-1 flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-retro-yellow border border-retro-yellow" style={{boxShadow: '0 0 8px #FFFF00'}}></div>
              <span>SPECIAL = 100 PTS</span>
            </div>
            <div className="mb-1">SPACE = START</div>
            <div>ESC TO CLOSE</div>
          </div>

          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-retro-green opacity-5"
                style={{ top: `${i * 5}%` }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default SnakeGame
