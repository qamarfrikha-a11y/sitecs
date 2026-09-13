import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { githubImage } from "../data/imageUrls";

export default function LoadingScreen({ onComplete }) {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D parallax tilt physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-300, 300], [16, -16]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-16, 16]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    const completionTimer = window.setTimeout(onComplete, 2800);
    return () => window.clearTimeout(completionTimer);
  }, [onComplete]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  const bgTechWords = [
    { text: "[0x4F] ALGORITHMS", top: "15%", left: "10%", delay: 0 },
    { text: "// IEEE_CS_ENIS", top: "25%", left: "75%", delay: 1.5 },
    { text: "<AI_NEURAL_NET>", top: "70%", left: "15%", delay: 2.2 },
    { text: "{CYBERSECURITY}", top: "80%", left: "70%", delay: 0.8 },
    { text: "COMPUTER SCIENCE", top: "45%", left: "8%", delay: 3.1 },
    { text: "DEEP LEARNING", top: "60%", left: "82%", delay: 1.1 },
    { text: "[QUANTUM_CORE]", top: "12%", left: "60%", delay: 2.8 },
    { text: "// INNOVATION", top: "85%", left: "40%", delay: 0.5 },
    { text: "<DATA_STRUCTURES>", top: "35%", left: "85%", delay: 3.5 },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-radial from-[#001428] via-[#000b16] to-[#00040a] text-white select-none cursor-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Floating Tech Words Scattered in Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {bgTechWords.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute font-mono text-xs tracking-wider opacity-15 ${idx % 2 === 0 ? 'text-[#00A3FF]' : 'text-[#FFC72C]'}`}
            style={{ top: item.top, left: item.left }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.06, 0.2, 0.06],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* Creative Cyber Cursor Core with Crosshairs */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full bg-[#FFC72C] shadow-[0_0_12px_#FFC72C,0_0_25px_#00A3FF]"
        animate={{
          x: mousePos.x - 5,
          y: mousePos.y - 5,
          width: 10,
          height: 10,
          backgroundColor: isHovered ? '#00A3FF' : '#FFC72C',
        }}
        transition={{ type: 'spring', stiffness: 1200, damping: 50 }}
      />

      {/* Outer Blue Dashed Orbit Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-[1.5px] border-dashed border-[#00A3FF] shadow-[0_0_15px_rgba(0,163,255,0.4)]"
        animate={{
          x: mousePos.x - (isHovered ? 32 : 22),
          y: mousePos.y - (isHovered ? 32 : 22),
          width: isHovered ? 64 : 44,
          height: isHovered ? 64 : 44,
          rotate: 360,
          borderColor: isHovered ? '#FFC72C' : '#00A3FF',
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
          x: { type: 'spring', stiffness: 200, damping: 22 },
          y: { type: 'spring', stiffness: 200, damping: 22 },
          width: { duration: 0.25 },
          height: { duration: 0.25 },
        }}
      />

      {/* Inner Gold Dashed Orbit Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-dashed border-[#FFC72C] shadow-[0_0_10px_rgba(255,199,44,0.3)]"
        animate={{
          x: mousePos.x - (isHovered ? 24 : 15),
          y: mousePos.y - (isHovered ? 24 : 15),
          width: isHovered ? 48 : 30,
          height: isHovered ? 48 : 30,
          rotate: -360,
          borderColor: isHovered ? '#00A3FF' : '#FFC72C',
        }}
        transition={{
          rotate: { duration: 5, repeat: Infinity, ease: 'linear' },
          x: { type: 'spring', stiffness: 350, damping: 28 },
          y: { type: 'spring', stiffness: 350, damping: 28 },
          width: { duration: 0.25 },
          height: { duration: 0.25 },
        }}
      />

      {/* Subtle Ambient Background Dust */}
      <div className="absolute inset-0 opacity-25 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-[#FFC72C] h-1 w-1' : 'bg-[#00A3FF] h-1 w-1'}`}
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              y: [null, `${Math.random() * 100}%`],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 7 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Classy Content Container with 3D Perspective */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-xl w-full [perspective:1000px]">
        
        {/* 3D Parallax Tilt Wrapper */}
        <motion.div
          className="relative flex items-center justify-center mb-8 [transform-style:preserve-3d]"
          style={{ rotateX, rotateY }}
          animate={{ y: [0, -6, 0] }}
          transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Soft Golden/Blue Glow (Layered back in 3D space) */}
          <motion.div
            className="absolute h-56 w-56 md:h-64 md:w-64 rounded-full bg-gradient-to-tr from-[#00629B]/30 via-[#00A3FF]/20 to-[#FFC72C]/25 blur-3xl"
            style={{ transform: "translateZ(-30px)" }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.35, 0.6, 0.35],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Logo Image (Pops forward in 3D space) */}
          <img
            src={githubImage("/images/logo/cs-enis-logo.png")}
            alt="IEEE Computer Society ENIS Logo"
            className="relative z-10 h-auto w-48 md:w-60 object-contain drop-shadow-[0_0_25px_rgba(255,199,44,0.35)] transition-transform duration-500 hover:scale-105"
            style={{ transform: "translateZ(40px)" }}
          />
        </motion.div>

        {/* Single-Line Title ("IEEE COMPUTER SOCIETY") */}
        <div 
          className="w-full flex justify-center items-center mb-6 px-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.h1
            className="whitespace-nowrap font-montserrat font-extrabold text-[#FFC72C] text-xs sm:text-base md:text-xl tracking-[0.2em] drop-shadow-[0_0_12px_rgba(255,199,44,0.35)] text-center"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            IEEE COMPUTER SOCIETY
          </motion.h1>
        </div>

        {/* Minimalist Ultra-Thin Progress Bar Track */}
        <div className="relative h-[2px] w-60 sm:w-72 overflow-hidden rounded-full bg-white/10 mb-4">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#00629B] via-[#00A3FF] to-[#FFC72C]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Classy Minimalist Status Text */}
        <motion.div
          className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/80"
          animate={{ opacity: [0.4, 0.95, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Establishing Connection
        </motion.div>

      </div>
    </motion.div>
  );
}
