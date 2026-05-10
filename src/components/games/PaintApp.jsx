import React, { useRef, useState, useEffect } from "react";
import { Trash2, Download, Eraser, Paintbrush } from "lucide-react";

const COLORS = [
  "#000000", "#FFFFFF", "#FF3B30", "#FF9500", "#FFCC00", "#4CD964", "#5AC8FA", "#007AFF", "#5856D6", "#FF2D55"
];

export const PaintApp = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  const [color, setColor] = useState("#007AFF");
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);

  // Low level refs to escape the React closure loop and ensure continuous synchronous frame rates
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });
  
  // Ref cache to give event handlers dynamic state instantly
  const settingsRef = useRef({ color, brushSize, isEraser });
  useEffect(() => {
    settingsRef.current = { color, brushSize, isEraser };
  }, [color, brushSize, isEraser]);

  // Event registration Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); // alpha false for high perf

    const getCoords = (e) => {
      const rect = canvas.getBoundingClientRect();
      let cx, cy;
      if (e.touches && e.touches[0]) {
        cx = e.touches[0].clientX;
        cy = e.touches[0].clientY;
      } else {
        cx = e.clientX;
        cy = e.clientY;
      }
      return { x: cx - rect.left, y: cy - rect.top };
    };

    const handleStart = (e) => {
      const pos = getCoords(e);
      isDrawingRef.current = true;
      lastPosRef.current = pos;
      
      // Immediate feedback on press
      ctx.beginPath();
      ctx.fillStyle = settingsRef.current.isEraser ? "#ffffff" : settingsRef.current.color;
      ctx.arc(pos.x, pos.y, settingsRef.current.brushSize / 2, 0, Math.PI * 2);
      ctx.fill();
    };

    const handleMove = (e) => {
      if (!isDrawingRef.current) return;
      
      // Block global viewport scroll if user pulls drawing
      if (e.type === "touchmove" && e.cancelable) e.preventDefault();

      const pos = getCoords(e);
      const settings = settingsRef.current;

      ctx.beginPath();
      ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.strokeStyle = settings.isEraser ? "#ffffff" : settings.color;
      ctx.lineWidth = settings.brushSize;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
      
      lastPosRef.current = pos;
    };

    const handleStop = () => {
      isDrawingRef.current = false;
    };

    // Register physical direct listeners to lock flow
    canvas.addEventListener("mousedown", handleStart);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleStop);

    canvas.addEventListener("touchstart", handleStart, { passive: false });
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleStop);

    return () => {
      canvas.removeEventListener("mousedown", handleStart);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleStop);

      canvas.removeEventListener("touchstart", handleStart);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleStop);
    };
  }, []);

  // Resize and restore Effect
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (canvas && container) {
        let hasBackup = false;
        const tempCanvas = document.createElement("canvas");
        
        if (canvas.width > 0 && canvas.height > 0) {
          const tempCtx = tempCanvas.getContext("2d");
          tempCanvas.width = canvas.width;
          tempCanvas.height = canvas.height;
          tempCtx.drawImage(canvas, 0, 0);
          hasBackup = true;
        }

        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if (hasBackup) {
          ctx.drawImage(tempCanvas, 0, 0);
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "ashutosh_os_art.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="flex flex-col h-full w-full text-foreground bg-background/20 select-none">
      {/* Main Action Toolbar */}
      <div className="flex-none p-3 border-b border-foreground/10 bg-card/50 backdrop-blur-md flex flex-wrap items-center gap-4 justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEraser(false)}
            className={`p-2 rounded-lg transition-colors ${!isEraser ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-foreground/10"}`}
            title="Brush Tool"
          >
            <Paintbrush size={18} />
          </button>
          <button
            onClick={() => setIsEraser(true)}
            className={`p-2 rounded-lg transition-colors ${isEraser ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-foreground/10"}`}
            title="Eraser Tool"
          >
            <Eraser size={18} />
          </button>
          
          <div className="h-6 w-[1px] bg-foreground/20 mx-1" />
          
          <div className="flex items-center gap-1.5">
            {COLORS.map((c) => (
              <button
                key={c}
                onClick={() => { setColor(c); setIsEraser(false); }}
                className={`w-6 h-6 rounded-full border transition-transform hover:scale-125 cursor-pointer ${color === c && !isEraser ? "ring-2 ring-primary border-transparent scale-110" : "border-foreground/20"}`}
                style={{ backgroundColor: c }}
              />
            ))}
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-foreground/20 transition-transform hover:scale-125">
              <input 
                type="color"
                value={color}
                onChange={(e) => { setColor(e.target.value); setIsEraser(false); }}
                className="absolute -inset-2 w-10 h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-bold tracking-wide">BRUSH</span>
            <input 
              type="range" 
              min="1" 
              max="50" 
              value={brushSize} 
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-24 accent-primary cursor-pointer"
            />
            <span className="text-xs font-mono text-muted-foreground w-4">{brushSize}</span>
          </div>
          
          <div className="h-6 w-[1px] bg-foreground/20 mx-1" />

          <button onClick={clearCanvas} className="flex items-center gap-2 px-3 py-1.5 text-xs bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 rounded-lg transition-colors font-bold">
            <Trash2 size={14} /> CLEAR
          </button>
          <button onClick={downloadImage} className="flex items-center gap-2 px-3 py-1.5 text-xs bg-primary text-primary-foreground hover:bg-primary/90 shadow-md rounded-lg transition-all font-bold">
            <Download size={14} /> EXPORT
          </button>
        </div>
      </div>

      {/* Interactive Canvas Frame */}
      <div ref={containerRef} className="flex-1 w-full h-full relative bg-neutral-50 overflow-hidden cursor-crosshair">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full touch-none"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
    </div>
  );
};
