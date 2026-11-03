import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const trailsRef = useRef<{ x: number; y: number; alpha: number }[]>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulse: number;
      pulseSpeed: number;
      sparkle: number;
    }

    const nodes: Particle[] = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.015,
        sparkle: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
      trailsRef.current.push({ x: event.clientX, y: event.clientY, alpha: 1 });
      if (trailsRef.current.length > 10) trailsRef.current.shift();
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Expanding ripples follow the cursor, matching the original background.
      trailsRef.current = trailsRef.current.filter(trail => {
        trail.alpha -= 0.02;
        return trail.alpha > 0;
      });
      trailsRef.current.forEach(trail => {
        const radius = (1 - trail.alpha) * 100;
        const gradient = ctx.createRadialGradient(trail.x, trail.y, 0, trail.x, trail.y, radius);
        gradient.addColorStop(0, `hsla(199, 100%, 70%, ${trail.alpha * 0.1})`);
        gradient.addColorStop(1, "hsla(199, 100%, 70%, 0)");
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Connections pulse and brighten as the mouse approaches.
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 180) {
            const alpha = 0.15 * (1 - distance / 180) * (0.8 + Math.sin(Date.now() * 0.001 + i) * 0.2);
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mouseDist = Math.hypot(mx - midX, my - midY);
            const boost = mouseDist < 250 ? 1 + (1 - mouseDist / 250) * 3 : 1;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(199, 100%, 55%, ${alpha * boost})`;
            ctx.lineWidth = 1 + boost * 0.5;
            ctx.stroke();
          }
        }
      }

      nodes.forEach(node => {
        const dx = mx - node.x;
        const dy = my - node.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 250 && distance > 1) {
          node.vx += dx * 0.0001;
          node.vy += dy * 0.0001;
        }

        node.vx *= 0.998;
        node.vy *= 0.998;
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;
        node.sparkle += 0.05;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        const pulseSize = node.size + Math.sin(node.pulse) * 0.8;
        const glowAlpha = 0.5 + Math.sin(node.pulse) * 0.2;
        const sparkleAlpha = distance < 150 ? 0.3 + Math.sin(node.sparkle) * 0.2 : 0;

        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseSize * 6);
        gradient.addColorStop(0, `hsla(199, 100%, 70%, ${glowAlpha * 0.4})`);
        gradient.addColorStop(0.5, `hsla(199, 100%, 60%, ${glowAlpha * 0.2})`);
        gradient.addColorStop(1, "hsla(199, 100%, 50%, 0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(199, 100%, 75%, ${glowAlpha})`;
        ctx.fill();

        if (sparkleAlpha > 0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseSize * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(199, 100%, 90%, ${sparkleAlpha})`;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      trailsRef.current = [];
      mouseRef.current = { x: -1000, y: -1000 };
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
};

export default ParticleBackground;
