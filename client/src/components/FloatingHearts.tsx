/**
 * FloatingHearts Component
 * Design: Continuously floating hearts in background
 * Features: Random positioning, smooth animation
 */
import { useMemo } from 'react';

export default function FloatingHearts() {
  const hearts = useMemo(() => 
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 3,
      size: 18 + Math.random() * 16
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-pink-300 opacity-40"
          style={{
            left: `${heart.left}%`,
            top: '-50px',
            fontSize: `${heart.size}px`,
            animation: `floatHearts ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
            willChange: 'transform'
          }}
        >
          💖
        </div>
      ))}

      <style>{`
        @keyframes floatHearts {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 0.35;
          }
          95% {
            opacity: 0.35;
          }
          100% {
            transform: translateY(100vh) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
