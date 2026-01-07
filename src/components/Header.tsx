import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleMenu, closeMenu, selectIsMenuOpen, selectIsScrolled, setScrolled } from '../store/slices/uiSlice';
import { personalInfo } from '../data/portfolio';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

// Animation variants for header
const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      mass: 1,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      delay: 0.1,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
      delay: 0.15 + index * 0.05,
    },
  }),
  hover: {
    y: -2,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 17,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 17,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      height: {
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      height: {
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
      opacity: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  },
};

const mobileNavItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      delay: 0.1 + index * 0.03,
    },
  }),
};

export default function Header() {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector(selectIsMenuOpen);
  const isScrolled = useAppSelector(selectIsScrolled);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrolled(window.scrollY > 20));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  const handleNavClick = (href: string) => {
    dispatch(closeMenu());
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-20">
          {/* Logo Section */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0"
          >
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#03045e] to-[#02033a] rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#03045e] to-[#02033a] rounded-xl px-4 py-2.5 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center">
                    <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-tight" style={{ letterSpacing: '-2px' }}>
                      DR
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#03045e] transition-colors duration-300">
                  {personalInfo.name.split(' ')[0]}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  {personalInfo.title}
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#03045e] transition-colors duration-300 rounded-lg hover:bg-gray-50/80 group"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#03045e] to-transparent"
                  whileHover={{ width: '60%' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="/resume.pdf"
              download
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#03045e] to-[#023e8a] text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-sm hover:scale-105 active:scale-95"
            >
              <Download size={16} className="stroke-[2.5]" />
              <span>Download CV</span>
            </motion.a>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              onClick={() => dispatch(toggleMenu())}
              className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'bg-gray-100 text-[#03045e] hover:bg-gray-200'
                  : 'bg-white/90 backdrop-blur-sm text-[#03045e] hover:bg-white shadow-md'
              }`}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} className="stroke-[2.5]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} className="stroke-[2.5]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden overflow-hidden border-t border-gray-200/50"
            >
              <div className="flex flex-col pt-4 pb-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    variants={mobileNavItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="px-4 py-3 text-base font-semibold text-gray-700 hover:text-[#03045e] hover:bg-gray-50 rounded-lg transition-all duration-300 active:scale-[0.98]"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="/resume.pdf"
                  download
                  variants={mobileNavItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={navItems.length}
                  className="flex items-center justify-center gap-2 px-4 py-3 mx-4 mt-4 rounded-lg bg-gradient-to-r from-[#03045e] to-[#023e8a] text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} className="stroke-[2.5]" />
                  <span>Download CV</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
