import { useEffect, useRef } from "react";

const COLORS = ["#FF1A61", "#50E3C2", "#FFE41D", "#2AB6FF", "#B91DFF"];

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  rot: number; vr: number;
  size: number;
  color: string;
  shape: number; // 0 rect, 1 circle, 2 triangle, 3 line
  life: number; ttl: number;
}

export function Confetti({ originYRatio = 0.34 }: { originYRatio?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let raf = 0;

    const timeout = window.setTimeout(() => {
      const canvas = ref.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);

      const ox = W / 2;
      const oy = H * originYRatio;
      const N = 100;
      const parts: Particle[] = [];
      for (let i = 0; i < N; i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.7;
        const speed = 3 + Math.random() * 6.5;
        parts.push({
          x: ox + (Math.random() - 0.5) * 12,
          y: oy + (Math.random() - 0.5) * 12,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.45,
          size: 5 + Math.random() * 5,
          color: COLORS[i % COLORS.length],
          shape: i % 4,
          life: 0,
          ttl: 80 + Math.random() * 45,
        });
      }

      const gravity = 0.09;
      const drag = 0.985;
      let frame = 0;

      const draw = () => {
        ctx.clearRect(0, 0, W, H);
        let alive = 0;
        for (const p of parts) {
          p.life++;
          if (p.life > p.ttl) continue;
          alive++;
          p.vx *= drag;
          p.vy = p.vy * drag + gravity;
          p.x += p.vx;
          p.y += p.vy;
          p.rot += p.vr;

          const r = p.life / p.ttl;
          const alpha = r < 0.65 ? 1 : Math.max(0, 1 - (r - 0.65) / 0.35);
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;
          ctx.strokeStyle = p.color;
          const s = p.size;
          if (p.shape === 0) {
            ctx.fillRect(-s / 2, -s / 3, s, s * 0.66);
          } else if (p.shape === 1) {
            ctx.beginPath();
            ctx.arc(0, 0, s * 0.42, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.shape === 2) {
            ctx.beginPath();
            ctx.moveTo(0, -s / 2);
            ctx.lineTo(s / 2, s / 2);
            ctx.lineTo(-s / 2, s / 2);
            ctx.closePath();
            ctx.fill();
          } else {
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.moveTo(-s / 2, 0);
            ctx.lineTo(s / 2, 0);
            ctx.stroke();
          }
          ctx.restore();
        }
        frame++;
        if (alive > 0 && frame < 220) {
          raf = requestAnimationFrame(draw);
        }
      };
      draw();
    }, 400);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [originYRatio]);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}
