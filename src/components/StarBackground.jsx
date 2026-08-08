import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateGalaxy();

    const handleResize = () => {
      generateGalaxy();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateGalaxy = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Generate Small Subtle Stars
    const starCount = Math.floor((width * height) / 10000);
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 0.8,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.2,
        duration: Math.random() * 4 + 3,
      });
    }

    // 2. Generate Twinkling Sparkles
    const sparkleCount = 24;
    const newSparkles = [];
    for (let i = 0; i < sparkleCount; i++) {
      newSparkles.push({
        id: i,
        size: Math.random() * 4 + 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      });
    }

    // 3. Generate Subtle Shooting Meteors
    const meteorCount = 4;
    const newMeteors = [];
    for (let i = 0; i < meteorCount; i++) {
      newMeteors.push({
        id: i,
        x: Math.random() * 80 + 10,
        y: Math.random() * 30,
        delay: Math.random() * 12,
        duration: Math.random() * 3 + 4,
      });
    }

    setStars(newStars);
    setSparkles(newSparkles);
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-95 dark:opacity-100 transition-opacity duration-500">
      {/* Inline Keyframes for Twinkle and Meteor */}
      <style>{`
        @keyframes galaxy-twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes galaxy-meteor {
          0% { transform: rotate(215deg) translateX(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: rotate(215deg) translateX(-700px); opacity: 0; }
        }
      `}</style>

      {/* Small Stars Layer */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-primary/50 dark:bg-slate-100 transition-colors duration-300"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: `pulse ${star.duration}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Twinkling Sparkles Layer */}
      {sparkles.map((sparkle) => (
        <div
          key={`sparkle-${sparkle.id}`}
          className="absolute text-primary/70 dark:text-purple-300 font-bold select-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            fontSize: `${sparkle.size + 6}px`,
            animation: `galaxy-twinkle ${sparkle.duration}s ease-in-out ${sparkle.delay}s infinite`,
          }}
        >
          ✦
        </div>
      ))}

      {/* Subtle Shooting Meteors */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="absolute h-0.5 bg-gradient-to-r from-primary/60 via-purple-300 to-transparent rounded-full"
          style={{
            width: "120px",
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animation: `galaxy-meteor ${meteor.duration}s linear ${meteor.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};
