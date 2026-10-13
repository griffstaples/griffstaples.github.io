import { useEffect, useRef } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

/**
 * Stand-in for real field footage behind the hero text, until there's a real
 * clip to use instead (see HeroSection's HERO_VIDEO_SRC). Draws a slow,
 * looping underwater-caustics pattern. Skips the animation loop entirely
 * for prefers-reduced-motion and just paints one static frame.
 */
export const CausticsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let frameId: number;

    const draw = (time: number) => {
      const baseGradient = ctx.createLinearGradient(0, 0, 0, height);
      baseGradient.addColorStop(0, "#13282a");
      baseGradient.addColorStop(1, "#0a1414");
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter";
      const bands = 7;
      for (let i = 0; i < bands; i++) {
        const phase = time * 0.00035 + i * 1.7;
        const cx = width * (0.15 + 0.7 * ((Math.sin(phase * 0.8 + i) + 1) / 2));
        const cy =
          height * (0.2 + 0.65 * ((Math.cos(phase * 0.6 + i * 1.3) + 1) / 2));
        const radius =
          Math.min(width, height) * (0.22 + 0.08 * Math.sin(phase + i));
        const radial = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        radial.addColorStop(0, "rgba(0,239,255,0.085)");
        radial.addColorStop(0.5, "rgba(0,180,200,0.04)");
        radial.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const render = (time: number) => {
      draw(time);
      if (!reduced) frameId = requestAnimationFrame(render);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) draw(0);
    };

    window.addEventListener("resize", resize);
    resize();
    if (!reduced) frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default CausticsBackground;
