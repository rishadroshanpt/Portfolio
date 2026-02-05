"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AntigravityBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        // Scene setup
        const scene = new THREE.Scene();

        // Theme detection helper
        const getTheme = () => {
            if (typeof window !== 'undefined') {
                return document.documentElement.getAttribute('data-theme') || 'light';
            }
            return 'light';
        };

        const isLightDefault = getTheme() !== 'dark';
        const initialFogColor = isLightDefault ? 0xf8fafc : 0x020617;
        scene.fog = new THREE.FogExp2(initialFogColor, 0.002);

        // Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 50;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Particle System
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 3000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 150;
        }

        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(posArray, 3)
        );

        // Material Logic
        const currentTheme = getTheme();
        const pColor = currentTheme === "light" ? 0x4f46e5 : 0x4285f4;
        const pOpacity = currentTheme === "light" ? 1.0 : 0.8;

        const material = new THREE.PointsMaterial({
            size: 0.15,
            color: pColor,
            transparent: true,
            opacity: pOpacity,
            blending: currentTheme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, material);
        scene.add(particlesMesh);

        // Mouse Interaction
        let mouseX = 0;
        let mouseY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const onMouseMove = (event: MouseEvent) => {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        };

        document.addEventListener("mousemove", onMouseMove);

        // Animation Loop
        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            const targetX = mouseX * 0.001;
            const targetY = mouseY * 0.001;

            particlesMesh.rotation.y += 0.001;
            particlesMesh.rotation.x += 0.0005;

            particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
            particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

            renderer.render(scene, camera);
        };

        animate();

        // Resize Handler
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", onResize);

        // Theme Update Observer
        const observer = new MutationObserver(() => {
            const theme = getTheme();
            const fogColor = theme === "light" ? 0xf8fafc : 0x020617;
            scene.fog?.color.setHex(fogColor);

            if (theme === "light") {
                material.color.setHex(0x4f46e5);
                material.opacity = 1.0;
                material.blending = THREE.NormalBlending;
            } else {
                material.color.setHex(0x4285f4);
                material.opacity = 0.8;
                material.blending = THREE.AdditiveBlending;
            }
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        // Cleanup
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
            renderer.dispose();
            // Safe check for parent presence before removing child
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div id="canvas-container" ref={containerRef} />;
}
