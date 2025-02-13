import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const OurStory = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Setup Three.js scene for "Our Story" Section
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a rotating book or object (using cube for simplicity)
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Simple cube as a placeholder for a book
    const material = new THREE.MeshPhongMaterial({ color: 0x8b4513 });
    const book = new THREE.Mesh(geometry, material);
    scene.add(book);

    // Lighting for the scene
    const light = new THREE.PointLight(0xFFFFFF, 1, 100);
    light.position.set(0, 5, 10);
    scene.add(light);

    // Set camera position
    camera.position.z = 5;

    // Particle effects (optional)
    const particleCount = 500;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.02);
      const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);

      // Random positions for particles
      particle.position.x = Math.random() * 10 - 5;
      particle.position.y = Math.random() * 10 - 5;
      particle.position.z = Math.random() * 10 - 5;

      particles.push(particle);
      scene.add(particle);
    }

    // Particle movement
    const animateParticles = () => {
      particles.forEach((particle) => {
        particle.position.x += Math.random() * 0.01 - 0.005;
        particle.position.y += Math.random() * 0.01 - 0.005;
        particle.position.z += Math.random() * 0.01 - 0.005;
      });
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      animateParticles();
      
      // Rotate the "book" (cube)
      book.rotation.x += 0.01;
      book.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // GSAP for text animation
    gsap.fromTo(
      '.our-story h2',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1 }
    );
    
    gsap.fromTo(
      '.our-story p',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1.5 }
    );

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden pt-32">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Our Story</h2>
        <p className="max-w-3xl mx-auto text-lg">
          At Book Haven, we believe every book tells a story—one that connects readers to worlds beyond imagination. 
          Our journey started with a passion for stories and a love for the written word. Let us take you on a journey through our story.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
