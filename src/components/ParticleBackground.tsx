import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const trailsRef = useRef<{ x: number; y: number; alpha: number }[]>([]); // Untuk efek trail mouse

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulse: number;
      pulseSpeed: number;
      sparkle: number; // Untuk efek sparkle
    }

    let nodes: Node[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Kurangi jumlah partikel untuk performa, tapi tambahkan efek
    const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1.5, // Ukuran lebih besar untuk kedalaman
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.015,
        sparkle: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      // Tambahkan trail untuk efek ripple
      trailsRef.current.push({ x: e.clientX, y: e.clientY, alpha: 1 });
      if (trailsRef.current.length > 10) trailsRef.current.shift(); // Batasi trail
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update dan gambar trail mouse (ripple effect)
      trailsRef.current.forEach((trail, index) => {
        trail.alpha -= 0.02;
        if (trail.alpha <= 0) {
          trailsRef.current.splice(index, 1);
          return;
        }
        const radius = (1 - trail.alpha) * 100;
        const gradient = ctx.createRadialGradient(trail.x, trail.y, 0, trail.x, trail.y, radius);
        gradient.addColorStop(0, `hsla(199, 100%, 70%, ${trail.alpha * 0.1})`);
        gradient.addColorStop(1, `hsla(199, 100%, 70%, 0)`);
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw connections dengan pulse animasi
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
          if (d < 180) { // Jarak koneksi sedikit lebih jauh
            const alpha = 0.15 * (1 - d / 180) * (0.8 + Math.sin(Date.now() * 0.001 + i) * 0.2); // Pulse alpha
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mouseDist = Math.sqrt((mx - midX) ** 2 + (my - midY) ** 2);
            const boost = mouseDist < 250 ? 1 + (1 - mouseDist / 250) * 3 : 1; // Boost lebih kuat

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(199, 100%, 55%, ${alpha * boost})`;
            ctx.lineWidth = 1 + boost * 0.5; // Line lebih tebal saat boost
            ctx.stroke();
          }
        }
      }

      // Draw nodes dengan glow yang lebih kompleks
      nodes.forEach((n) => {
        // Mouse attraction yang lebih kuat
        const dx = mx - n.x;
        const dy = my - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250 && dist > 1) {
          n.vx += dx * 0.0001;
          n.vy += dy * 0.0001;
        }

        // Damping
        n.vx *= 0.998;
        n.vy *= 0.998;

        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;
        n.sparkle += 0.05; // Update sparkle

        // Bounce off walls
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        const pulseSize = n.size + Math.sin(n.pulse) * 0.8;
        const glowAlpha = 0.5 + Math.sin(n.pulse) * 0.2;
        const sparkleAlpha = dist < 150 ? 0.3 + Math.sin(n.sparkle) * 0.2 : 0; // Sparkle saat dekat mouse

        // Outer glow dengan gradien yang lebih halus
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pulseSize * 6);
        gradient.addColorStop(0, `hsla(199, 100%, 70%, ${glowAlpha * 0.4})`);
        gradient.addColorStop(0.5, `hsla(199, 100%, 60%, ${glowAlpha * 0.2})`);
        gradient.addColorStop(1, `hsla(199, 100%, 50%, 0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseSize * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dengan sparkle
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(199, 100%, 75%, ${glowAlpha})`;
        ctx.fill();

        // Sparkle effect
        if (sparkleAlpha > 0) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, pulseSize * 1.5, 0, Math.PI * 2);
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
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }} // Sedikit lebih opaque untuk keindahan
    />
  );
};

export default ParticleBackground;