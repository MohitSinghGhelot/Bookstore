import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const MeteorShower = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Black background

    // Create meteor particles
    const meteorCount = 100;
    const meteors = [];
    const meteorGeometry = new THREE.SphereGeometry(0.1, 16, 16); // Small spheres for meteors
    const meteorMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < meteorCount; i++) {
      const meteor = new THREE.Mesh(meteorGeometry, meteorMaterial);
      meteor.position.x = Math.random() * 50 - 25; // Random position
      meteor.position.y = Math.random() * 50 - 25;
      meteor.position.z = Math.random() * 50 - 25;
      scene.add(meteor);
      meteors.push(meteor);
    }

    // Lighting
    const light = new THREE.AmbientLight(0x333333); // Soft ambient light
    scene.add(light);

    // Set camera position
    camera.position.z = 30;

    // Animate meteors
    const animateMeteors = () => {
      meteors.forEach((meteor) => {
        // Move meteors from top to bottom and from left to right
        meteor.position.y -= 0.1;
        meteor.position.x += Math.random() * 0.1 - 0.05; // Slight random left/right movement

        // Reset meteor to top when it goes off screen
        if (meteor.position.y < -25) {
          meteor.position.y = 25;
          meteor.position.x = Math.random() * 50 - 25;
        }
      });
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      animateMeteors();
      renderer.render(scene, camera);
    };

    animate();

    // GSAP for text animations
    gsap.fromTo(
      '.meteor-section h2',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1 }
    );

    gsap.fromTo(
      '.meteor-section p',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1.5 }
    );

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden pt-32">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 meteor-section">
          The Meteor Shower
        </h2>
        <p className="max-w-3xl mx-auto text-lg meteor-section">
          Witness a spectacular meteor shower in the sky, as shooting stars streak across the heavens. 
          It's a cosmic display of nature’s beauty—just like the stories contained within the pages of our books.
        </p>
      </div>
    </section>
  );
};

export default MeteorShower;
