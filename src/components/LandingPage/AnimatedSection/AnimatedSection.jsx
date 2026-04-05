import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PARTICLE_GAP = 5;
const RADIUS = 150;
const FORCE = 36;
const EASE = 0.065;
const FRICTION = 0.83;
const IDLE_AMP = 0.9;
const IDLE_SPD = 0.0008;

class Particle {
  constructor(ox, oy, col, sz, seed) {
    this.ox = ox;
    this.oy = oy;
    this.x = ox + (Math.random() - 0.5) * 700;
    this.y = oy + (Math.random() - 0.5) * 700;
    this.col = col;
    this.sz = sz;
    this.vx = (Math.random() - 0.5) * 4;
    this.vy = (Math.random() - 0.5) * 4;
    this.phase = seed * 6.283;
  }

  update(mx, my, t, animationType) {
    const dx = this.x - mx;
    const dy = this.y - my;
    const d = Math.sqrt(dx * dx + dy * dy);

    if (d < RADIUS && d > 0) {
      const f = (RADIUS - d) / RADIUS;
      
      if (animationType === 'blackhole') {
        const nx = dx / d;
        const ny = dy / d;
        this.vx += nx * f * FORCE;
        this.vy += ny * f * FORCE;
      } else {
        const angle = Math.random() * Math.PI * 2;
        this.vx += Math.cos(angle) * f * FORCE;
        this.vy += Math.sin(angle) * f * FORCE;
      }
    }

    const ix = Math.sin(t * IDLE_SPD + this.phase) * IDLE_AMP;
    const iy = Math.cos(t * IDLE_SPD + this.phase * 1.31) * IDLE_AMP;

    this.vx += (this.ox + ix - this.x) * EASE;
    this.vy += (this.oy + iy - this.y) * EASE;

    this.vx *= FRICTION;
    this.vy *= FRICTION;
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx) {
    ctx.fillStyle = this.col;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2);
    ctx.fill();
  }
}

const paintText = (ctx, W, H) => {
  ctx.clearRect(0, 0, W, H);
  const fontSize = Math.min(W * 0.22, 320);
  ctx.fillStyle = '#ffffff';
  ctx.font = `800 ${fontSize}px Sora, Inter, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('FLOKA', W / 2, H / 2);
};

const paintShape = (ctx, W, H) => {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#ffffff';

  const cx = W * 0.5;
  const cy = H * 0.46;
  const s = Math.min(W, H) * 0.38;

  ctx.save();
  ctx.translate(cx, cy);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-0.22 * s, -0.52 * s, -0.68 * s, -0.58 * s, -s, -0.12 * s);
  ctx.bezierCurveTo(-0.72 * s, 0.12 * s, -0.38 * s, 0.08 * s, 0, 0.1 * s);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0.22 * s, -0.52 * s, 0.68 * s, -0.58 * s, s, -0.12 * s);
  ctx.bezierCurveTo(0.72 * s, 0.12 * s, 0.38 * s, 0.08 * s, 0, 0.1 * s);
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(0.06 * s, 0.04 * s, 0.14 * s, 0.065 * s, -0.15, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(0.18 * s, -0.07 * s, 0.055 * s, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-0.06 * s, 0.1 * s);
  ctx.bezierCurveTo(-0.1 * s, 0.28 * s, -0.24 * s, 0.48 * s, -0.38 * s, 0.58 * s);
  ctx.bezierCurveTo(-0.22 * s, 0.6 * s, -0.06 * s, 0.38 * s, 0, 0.2 * s);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0.06 * s, 0.1 * s);
  ctx.bezierCurveTo(0.1 * s, 0.28 * s, 0.24 * s, 0.48 * s, 0.38 * s, 0.58 * s);
  ctx.bezierCurveTo(0.22 * s, 0.6 * s, 0.06 * s, 0.38 * s, 0, 0.2 * s);
  ctx.fill();

  ctx.restore();
};

const ParticleCanvas = ({ paintFn, animationType = 'scatter', createColor }) => {
  const canvasRef = useRef(null);
  const psRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0;

    const build = () => {
      psRef.current = [];
      const off = document.createElement('canvas');
      off.width = W;
      off.height = H;
      const oc = off.getContext('2d');
      paintFn(oc, W, H);
      const { data } = oc.getImageData(0, 0, W, H);
      for (let y = 0; y < H; y += PARTICLE_GAP) {
        for (let x = 0; x < W; x += PARTICLE_GAP) {
          if (data[(y * W + x) * 4 + 3] > 128) {
            const b = 0.35 + Math.random() * 0.65;
            const sz = 0.7 + Math.random() * 1.8;
            const color = createColor ? createColor(b) : `rgba(255,255,255,${b.toFixed(2)})`;
            psRef.current.push(new Particle(x, y, color, sz, Math.random()));
          }
        }
      }
    };

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
      build();
    };

    const animate = (t) => {
      ctx.clearRect(0, 0, W, H);
      const { x: mx, y: my } = mouseRef.current;
      psRef.current.forEach(p => {
        p.update(mx, my, t, animationType);
        p.draw(ctx);
      });
      rafRef.current = requestAnimationFrame(animate);
    };

    resize();
    rafRef.current = requestAnimationFrame(animate);

    const getPos = (clientX, clientY) => {
      const r = canvas.getBoundingClientRect();
      return { x: clientX - r.left, y: clientY - r.top };
    };

    const onMouseMove = e => { mouseRef.current = getPos(e.clientX, e.clientY); };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    const onTouchMove = e => {
      const t2 = e.touches[0];
      mouseRef.current = getPos(t2.clientX, t2.clientY);
    };
    const onTouchEnd = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', resize);
    };
  }, [paintFn, animationType, createColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block cursor-none"
      aria-label="Interactive particle animation"
    />
  );
};

const AnimatedSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Pincer animation: left block comes from left, right block from right triggering on scroll */
      gsap.from(leftRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // triggers when the section hits bottom quarter of viewport
        },
        x: -200,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out'
      });

      gsap.from(rightRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: 200,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        delay: 0.15 // slight delay so they don't hit perfectly at the same time
      });
    }, sectionRef); // scoping to component

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0d0d0d] flex flex-col lg:flex-row h-auto lg:h-[700px] overflow-hidden select-none rounded-b-2xl">
      
      {/* Left side: FLOKA Text Animation (70%) */}
      <div ref={leftRef} className="relative w-full lg:w-[70%] h-[350px] md:h-[450px] lg:h-full">
        <ParticleCanvas 
          paintFn={paintText} 
          animationType="blackhole"
          createColor={(b) => `rgba(255, 204, 0, ${b.toFixed(2)})`} // Gold color
        />
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/15 text-[9px] md:text-[10px] font-bold tracking-[0.28em] uppercase whitespace-nowrap pointer-events-none">
          hover me
        </p>
      </div>

      {/* Right side: Butterfly/Bird Animation (30%) */}
      <div ref={rightRef} className="relative w-full lg:w-[30%] h-[300px] md:h-[400px] lg:h-full border-t lg:border-t-0 lg:border-l border-white/10">
        <ParticleCanvas 
          paintFn={paintShape} 
          animationType="scatter"
        />
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/15 text-[9px] md:text-[10px] font-bold tracking-[0.28em] uppercase whitespace-nowrap pointer-events-none">
          hover me
        </p>
      </div>

    </section>
  );
};

export default AnimatedSection;
