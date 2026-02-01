"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { PROJECTS, VERTEX_SHADER, FRAGMENT_SHADER } from "@/app/constants/data";

// Utility function for linear interpolation
const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

export function DistortionCanvas() {
  const containerRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = containerRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Plane & Material
    const geometry = new THREE.PlaneGeometry(500, 300, 32, 32);
    const uniforms = {
      uTime: { value: 0 },
      uTexture: { value: null as THREE.Texture | null },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
      uVelo: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Preload Textures
    const loader = new THREE.TextureLoader();
    const textures: Record<string, THREE.Texture> = {};
    PROJECTS.forEach((p) => {
      textures[p.img] = loader.load(p.img);
    });

    // Interaction State
    let mouse = { x: 0, y: 0 };
    let prevMouse = { x: 0, y: 0 };
    let targetVelocity = 0;

    // Smooth Animation Targets
    let targetMeshX = 0;
    let targetMeshY = 0;
    let targetHover = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Update Shader Uniforms
      uniforms.uMouse.value.x = mouse.x / window.innerWidth;
      uniforms.uMouse.value.y = 1.0 - mouse.y / window.innerHeight;

      // Update Target Mesh Position (Parallax)
      targetMeshX = mouse.x - window.innerWidth / 2;
      targetMeshY = -(mouse.y - window.innerHeight / 2);

      // Velocity calc
      const velX = mouse.x - prevMouse.x;
      const velY = mouse.y - prevMouse.y;
      targetVelocity = Math.sqrt(velX * velX + velY * velY);
      prevMouse.x = mouse.x;
      prevMouse.y = mouse.y;
    };

    // Connect DOM hover events
    const setupHoverEvents = () => {
      const items = document.querySelectorAll(".project-item-trigger");
      items.forEach((item) => {
        const imgUrl = item.getAttribute("data-img");
        const handleMouseEnter = () => {
          if (imgUrl && textures[imgUrl]) {
            material.uniforms.uTexture.value = textures[imgUrl];
            targetHover = 1;
          }
        };
        const handleMouseLeave = () => {
          targetHover = 0;
        };

        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Setup hover events after a short delay to ensure DOM is ready
    setTimeout(setupHoverEvents, 100);

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();
    let reqId: number;
    const animate = () => {
      const time = clock.getElapsedTime();
      uniforms.uTime.value = time;

      // Manual Lerp for smoothness without GSAP
      // Velocity Decay
      uniforms.uVelo.value = lerp(
        uniforms.uVelo.value,
        targetVelocity,
        0.1
      );
      targetVelocity *= 0.9;

      // Mesh Position Lerp
      mesh.position.x = lerp(mesh.position.x, targetMeshX, 0.1);
      mesh.position.y = lerp(mesh.position.y, targetMeshY, 0.1);

      // Hover State Lerp
      uniforms.uHover.value = lerp(uniforms.uHover.value, targetHover, 0.1);

      // Tilt based on velocity
      mesh.rotation.z = -uniforms.uVelo.value * 0.0005;
      mesh.rotation.x = ((mouse.y - window.innerHeight / 2) * 0.0005);

      renderer.render(scene, camera);
      reqId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[-1]"
    />
  );
}
