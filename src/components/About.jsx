// About.jsx
import { motion } from 'framer-motion';
import useScrollAnimation from '../utils/useScrollAnimation';
import { staggerContainer, slideInLeft, slideInRight, scaleUp } from '../utils/animationVariants';

// import your image (adjust path if needed)
import heroMac from '../components/codqimage.png'; // <- update path if image is elsewhere

const About = () => {
  const [ref, isInView] = useScrollAnimation();

  return (
    <section id="about" className="section bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-accent/5 -top-48 -left-48"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-accent/5 -bottom-48 -right-48"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image (MacBook screen) */}
          <motion.div
            variants={slideInLeft}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            {/* Keep motion wrapping but use an <img> for crispness and accessibility */}
            <motion.img
              src={heroMac}
              alt="CodeQuil — Web Development hero on MacBook"
              className="w-full h-auto object-cover block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              loading="eager"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={slideInRight} className="space-y-6">
            <motion.h2 className="text-4xl font-bold" variants={scaleUp}>
              About <span className="text-accent">CodeQuil</span>
            </motion.h2>

            <motion.p className="text-text-secondary text-lg" variants={scaleUp}>
              I build digital systems that are fast, secure, and engineered for measurable impact.
              I combine frontend craftsmanship, backend logic, and a security-first mindset to
              deliver products that scale.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                className="space-y-2 p-4 rounded-lg bg-primary/30 hover:bg-primary/50 transition-colors"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-accent">Our Vision</h3>
                <p className="text-text-secondary">
                  To shape the future of digital products — faster, cleaner, and built to scale.
                </p>
              </motion.div>

              <motion.div
                className="space-y-2 p-4 rounded-lg bg-primary/30 hover:bg-primary/50 transition-colors"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-accent">Our Mission</h3>
                <p className="text-text-secondary">
                  Deliver high-performance digital experiences that drive growth and create value.
                </p>
              </motion.div>
            </div>

            <motion.div className="pt-6" variants={scaleUp}>
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
