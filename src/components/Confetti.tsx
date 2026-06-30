import { useMemo } from 'react';
import { ENABLE_CONFETTI } from '../config/appConfig';

interface Props {
  active: boolean;
}

const COLORS = ['#FFD700', '#FF6B6B', '#4ECDC4', '#96CEB4', '#A8E6CF', '#FFB6C1', '#DDA0DD', '#87CEEB'];

export default function Confetti({ active }: Props) {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 1.2,
        size: Math.random() * 9 + 6,
        color: COLORS[i % COLORS.length],
        duration: 1.8 + Math.random() * 1.6,
        isCircle: Math.random() > 0.5,
      })),
    [],
  );

  if (!active || !ENABLE_CONFETTI) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-50"
      aria-hidden="true"
      role="presentation"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="confetti-particle"
          style={{
            left: `${p.left}%`,
            top: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: p.isCircle ? '50%' : '2px',
            '--fall-duration': `${p.duration}s`,
            '--fall-delay': `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
