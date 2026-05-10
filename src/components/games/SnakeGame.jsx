import React, { useState, useEffect, useRef, useCallback } from "react";
import { RotateCcw, Play, Pause, Trophy } from "lucide-react";

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;

export const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => Number(localStorage.getItem("snake_high_score") || 0));

  const directionRef = useRef(direction);
  const gameLoopRef = useRef(null);

  const generateFood = useCallback((currentSnake) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      const onSnake = currentSnake.some((part) => part.x === newFood.x && part.y === newFood.y);
      if (!onSnake) break;
    }
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    const newFood = generateFood([{ x: 10, y: 10 }]);
    setFood(newFood);
    setDirection({ x: 1, y: 0 });
    directionRef.current = { x: 1, y: 0 };
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }

      if (e.key === " " && !gameOver) {
        setIsPaused((p) => !p);
        return;
      }

      const currentDir = directionRef.current;
      let nextDir = null;

      switch (e.key) {
        case "ArrowUp":
          if (currentDir.y === 0) nextDir = { x: 0, y: -1 };
          break;
        case "ArrowDown":
          if (currentDir.y === 0) nextDir = { x: 0, y: 1 };
          break;
        case "ArrowLeft":
          if (currentDir.x === 0) nextDir = { x: -1, y: 0 };
          break;
        case "ArrowRight":
          if (currentDir.x === 0) nextDir = { x: 1, y: 0 };
          break;
        default:
          break;
      }

      if (nextDir) {
        setDirection(nextDir);
        directionRef.current = nextDir;
        if (isPaused) setIsPaused(false);
      }
    },
    [gameOver, isPaused]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isPaused || gameOver) {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
      return;
    }

    gameLoopRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        const head = { ...prevSnake[0] };
        const currentDirection = directionRef.current;

        head.x += currentDirection.x;
        head.y += currentDirection.y;

        // Check bounds collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          setGameOver(true);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some((part) => part.x === head.x && part.y === head.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        // Eat food condition
        if (head.x === food.x && head.y === food.y) {
          const newScore = score + 10;
          setScore(newScore);
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem("snake_high_score", String(newScore));
          }
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, Math.max(INITIAL_SPEED - Math.floor(score / 50) * 5, 60)); // Speed up slightly as score goes up

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [isPaused, gameOver, food, score, highScore, generateFood]);

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-foreground p-4">
      <div className="flex items-center justify-between w-full max-w-[400px] mb-4 px-2 bg-card/40 backdrop-blur-sm p-3 rounded-xl border border-foreground/10">
        <div>
          <span className="text-xs text-muted-foreground font-bold block uppercase tracking-wider">Score</span>
          <span className="text-xl font-mono font-bold text-primary">{score}</span>
        </div>
        <div className="flex items-center gap-2 text-right">
          <Trophy size={16} className="text-amber-500" />
          <div>
            <span className="text-xs text-muted-foreground font-bold block uppercase tracking-wider">Best</span>
            <span className="text-lg font-mono font-bold">{highScore}</span>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div
          className="grid bg-background/60 border-4 border-foreground/15 rounded-lg shadow-2xl overflow-hidden"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
            width: "min(80vw, 400px)",
            height: "min(80vw, 400px)",
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
            const x = i % GRID_SIZE;
            const y = Math.floor(i / GRID_SIZE);
            const isSnakeBody = snake.some((part) => part.x === x && part.y === y);
            const isSnakeHead = snake[0].x === x && snake[0].y === y;
            const isFood = food.x === x && food.y === y;

            let cellClass = "w-full h-full border-[0.5px] border-foreground/5";

            if (isSnakeHead) {
              cellClass += " bg-primary shadow-[0_0_10px_hsl(var(--primary))] z-10 rounded-sm";
            } else if (isSnakeBody) {
              cellClass += " bg-primary/60 rounded-sm";
            } else if (isFood) {
              cellClass += " bg-red-500 animate-pulse-subtle rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]";
            }

            return <div key={i} className={cellClass} />;
          })}
        </div>

        {(gameOver || isPaused) && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md flex flex-col items-center justify-center rounded-lg z-20">
            {gameOver ? (
              <>
                <h2 className="text-3xl font-bold text-red-500 mb-2">Game Over</h2>
                <p className="text-muted-foreground mb-6">Final Score: {score}</p>
                <button onClick={resetGame} className="cosmic-button flex items-center gap-2">
                  <RotateCcw size={18} /> Try Again
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-foreground mb-2">Snake Retro</h2>
                <p className="text-xs text-muted-foreground mb-6">Use Arrow Keys to Move</p>
                <button onClick={() => setIsPaused(false)} className="cosmic-button flex items-center gap-2 px-8">
                  <Play size={18} fill="currentColor" /> Play
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          disabled={gameOver}
          className="p-3 rounded-full bg-card/50 border border-foreground/10 hover:bg-foreground/10 transition-all disabled:opacity-50"
        >
          {isPaused ? <Play size={20} /> : <Pause size={20} />}
        </button>
        <button
          onClick={resetGame}
          className="p-3 rounded-full bg-card/50 border border-foreground/10 hover:bg-foreground/10 transition-all"
        >
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  );
};
