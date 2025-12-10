import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { staggerContainer, textReveal, neonGlow, rotateElement, floating } from '../utils/animationVariants';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // 🔥 Tawk.to Chatbot Script Loader
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/692c47622e3bec197df70855/1jbafdmuk";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Parallax Effects
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Mouse Tracking
  const x = useSpring(useTransform(mouseX, [0, window.innerWidth], [-30, 30]), {
    stiffness: 50,
    damping: 30
  });
  const y = useSpring(useTransform(mouseY, [0, window.innerHeight], [-30, 30]), {
    stiffness: 50,
    damping: 30
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={ref} id="hero" className="section bg-black relative overflow-hidden min-h-screen flex items-center">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-full h-full bg-gradient-to-b from-black via-black to-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* AI Image */}
        <motion.div
          className="absolute w-full h-full flex items-center justify-center pointer-events-none"
          style={{ scale: imageScale, opacity: imageOpacity, y: imageY }}
        >
          <motion.div className="relative w-[400px] h-[400px]" style={{ x, y }}>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/30 to-yellow-600/30"
              style={{ filter: 'blur(40px)', transform: 'translate(-50%, -50%)' }}
            />
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full"
                style={{ filter: 'drop-shadow(0 0 15px rgba(234, 179, 8, 0.3))' }}>
                
                {/* AI Circular Animation */}
                <motion.circle cx="100" cy="100" r="80" fill="none" stroke="rgba(234, 179, 8, 0.3)"
                  strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }} />
                <motion.circle cx="100" cy="100" r="60" fill="none" stroke="rgba(234, 179, 8, 0.4)"
                  strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.2, repeat: Infinity }} />

                {/* Neural Lines */}
                {[...Array(8)].map((_, i) => (
                  <motion.line key={i} x1="100" y1="100"
                    x2={100 + 80 * Math.cos((i * Math.PI) / 4)}
                    y2={100 + 80 * Math.sin((i * Math.PI) / 4)}
                    stroke="rgba(234, 179, 8, 0.2)" strokeWidth="1"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }} />
                ))}

                {/* Connection Dots */}
                {[...Array(8)].map((_, i) => (
                  <motion.circle key={i}
                    cx={100 + 80 * Math.cos((i * Math.PI) / 4)}
                    cy={100 + 80 * Math.sin((i * Math.PI) / 4)}
                    r="3" fill="rgba(234, 179, 8, 0.5)"
                    initial={{ scale: 0 }} animate={{ scale: [0, 1, 0] }}
                    transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }} />
                ))}
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Rotating Elements */}
        <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-yellow-400/30"
          variants={rotateElement} initial="hidden" animate="visible"
          style={{ filter: 'blur(1px)' }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-yellow-400/20"
          variants={rotateElement} initial="hidden" animate="visible"
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ filter: 'blur(1px)' }} />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div key={i}
            className="absolute rounded-full bg-yellow-400/5"
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
            variants={floating}
            initial="hidden"
            animate="visible"
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* TEXT CONTENT */}
      <div className="container relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <motion.div className="text-left">
              <motion.p variants={textReveal} className="text-lg text-yellow-400 mb-4 tracking-wider">
                We create visually captivating websites that
              </motion.p>
              <motion.h1 className="text-7xl md:text-[150px] font-bold mb-6 text-white relative"
                style={{ textShadow: '0 0 10px rgba(234, 179, 8, 0.3)', lineHeight: '1' }}>
                <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }} className="block">CODE</motion.span>
                <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }} className="block text-yellow-400">QUIL</motion.span>
              </motion.h1>

              <motion.p variants={textReveal} className="text-xl text-gray-400 mb-8 max-w-xl">
                Let's truly engage your audience. Learn more – book a free strategy session.
              </motion.p>

              <motion.div variants={textReveal} className="flex gap-6">
                <motion.a href="#contact" className="px-8 py-4 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Book A Call</motion.a>
                <motion.a href="#portfolio" className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-medium rounded-full hover:bg-yellow-400/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>View Our Work</motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
