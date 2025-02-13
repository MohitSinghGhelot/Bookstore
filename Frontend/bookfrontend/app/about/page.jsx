"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import OurStory from '../_components/Ourstory';

const About = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a moon (sphere)
    const geometry = new THREE.SphereGeometry(1, 32, 32); // Sphere to represent the moon
    const material = new THREE.MeshPhongMaterial({
      color: 0x888888,
      emissive: 0x444444,
      shininess: 50,
    });
    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);

    // Set up lighting for better visual effects
    const light = new THREE.PointLight(0xFFFFFF, 1, 100);
    light.position.set(0, 10, 10);
    scene.add(light);

    // Set camera position
    camera.position.z = 5;

    // Create floating particles
    const particleCount = 500;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.02);
      const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);

      // Random initial positions for particles
      particle.position.x = Math.random() * 10 - 5;
      particle.position.y = Math.random() * 10 - 5;
      particle.position.z = Math.random() * 10 - 5;

      particles.push(particle);
      scene.add(particle);
    }

    // Particle movement animation
    const animateParticles = () => {
      particles.forEach((particle) => {
        particle.position.x += Math.random() * 0.01 - 0.005;
        particle.position.y += Math.random() * 0.01 - 0.005;
        particle.position.z += Math.random() * 0.01 - 0.005;
      });
    };

    // Animation loop for moon movement and rendering
    const animate = () => {
      requestAnimationFrame(animate);
      animateParticles();
      
      // Move the moon along the X-axis for smooth animation
      moon.position.x += Math.sin(Date.now() * 0.001) * 0.02; // Sine wave movement

      renderer.render(scene, camera);
    };

    animate();

    // GSAP animations for text fade-ins
    gsap.fromTo(
      canvasRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1 }
    );

    gsap.fromTo(
      '.content h1',
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 2 }
    );

    gsap.fromTo(
      '.content p',
      {
        opacity: 0,
        y: 100,
        duration: 2,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 3,
        onStart: () => {
          // Typewriter effect
          gsap.fromTo(
            '.content p',
            {
              textContent: '',
            },
            {
              textContent: 'Immerse yourself in a world of stories. Discover the finest collection of books at Book Haven, where every page turned opens up new possibilities.',
              duration: 4,
              ease: 'none',
            }
          );
        },
      }
    );

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <>
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
      <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wide">
          Welcome to Book Haven
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Immerse yourself in a world of stories. Discover the finest collection of books at Book Haven,
          where every page turned opens up new possibilities.
        </p>
      </div>
    </div>


   <OurStory />


    </>

  );
};

export default About;
