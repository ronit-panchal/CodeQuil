import { motion } from 'framer-motion';
import useScrollAnimation from '../utils/useScrollAnimation';
import { staggerContainer, slideInLeft, slideInRight, scaleUp } from '../utils/animationVariants';

const About = () => {
  const [ref, isInView] = useScrollAnimation();

  return (
    <section id="about" className="section bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-accent/5 -top-48 -left-48"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-accent/5 -bottom-48 -right-48"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div
            variants={slideInLeft}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="text-6xl font-bold text-accent/20"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                CODEQUIL
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={slideInRight} className="space-y-6">
            <motion.h2 
              className="text-4xl font-bold"
              variants={scaleUp}
            >
              About <span className="text-accent">CodeQuil</span>
            </motion.h2>
            
            <motion.p 
              className="text-text-secondary text-lg"
              variants={scaleUp}
            >
              At CodeQuil, we're more than just a digital agency – we're your partners in digital transformation. 
              Our mission is to empower businesses with cutting-edge digital solutions that drive growth and innovation.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                className="space-y-2 p-4 rounded-lg bg-primary/30 hover:bg-primary/50 transition-colors"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-accent">Our Vision</h3>
                <p className="text-text-secondary">
                  To be the leading force in digital innovation, creating transformative solutions that shape the future of business.
                </p>
              </motion.div>
              
              <motion.div 
                className="space-y-2 p-4 rounded-lg bg-primary/30 hover:bg-primary/50 transition-colors"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-accent">Our Mission</h3>
                <p className="text-text-secondary">
                  To deliver exceptional digital experiences that drive business growth and create lasting value for our clients.
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="pt-6"
              variants={scaleUp}
            >
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