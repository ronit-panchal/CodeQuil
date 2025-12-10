// Navbar.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const DEBUG_FORCE_DESKTOP_NAV = false; // flip to true only for debugging

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // track scroll to add background/shadow
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // set initial and subscribe to resize to determine "desktop" state
    const updateIsDesktop = () => {
      // Tailwind md default = 768px; treat ≥768 as desktop
      setIsDesktop(window.innerWidth >= 768);
    };
    updateIsDesktop();
    window.addEventListener('resize', updateIsDesktop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateIsDesktop);
    };
  }, []);

  // nav items (hash anchors for single page + a routed privacy policy)
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' }
  ];

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      // If not on home, navigate to root and pass desired scroll target in state
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: href } });
        setIsOpen(false);
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // header height offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ zIndex: 9999 }}
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors"
            whileHover={{ scale: 1.03 }}
            aria-label="CodeQuil - go to hero"
          >
            CodeQuil
          </motion.a>

          {/* Desktop Navigation */}
          {/* render based on runtime isDesktop OR debug flag */}
          {(DEBUG_FORCE_DESKTOP_NAV || isDesktop) ? (
            <div
              className="flex space-x-8 items-center"
              // ensure pointer events allowed and visible
              style={{ pointerEvents: 'auto' }}
            >
              {navItems.map((item) =>
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          ) : (
            // keep an empty space to preserve layout when mobile
            <div className="md:hidden" />
          )}

          {/* Mobile Navigation Button (visible on mobile) */}
          <button
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-black/90 backdrop-blur-md rounded-b-lg"
        >
          <div className="py-4 space-y-4 px-4">
            {navItems.map((item) =>
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-300 hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
