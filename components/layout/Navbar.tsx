'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FiMenu, FiX, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa6';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useGSAP } from '@gsap/react';

const SOCIAL_CTAS = [
  {
    Component: FaFacebookF,
    href: 'https://www.facebook.com/people/Blackcherry-Devs/61587561059170/',
  },
  {
    Component: FaInstagram,
    href: 'https://www.instagram.com/blackcherrydevs?igsh=MWQ3ZWQwenRtZnI1Nw==',
  },
  { Component: FaTiktok, href: 'https://www.tiktok.com/@blackcherry_devs' },
];

const UNDERLAY_VARIANTS: Variants = {
  open: {
    width: 'min(450px, calc(100vw - 16px))',
    height: 'calc(100dvh - 16px)',
    transition: { type: 'spring', mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: '48px',
    height: '48px',
    transition: {
      delay: 0.75,
      type: 'spring',
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS: { [key: string]: Variants } = {
  top: {
    open: { rotate: ['0deg', '0deg', '45deg'], top: ['0%', '50%', '50%'] },
    closed: { rotate: ['45deg', '45deg', '0deg'], top: ['50%', '50%', '0%'] },
  },
  middle: {
    open: { rotate: ['0deg', '0deg', '-45deg'] },
    closed: { rotate: ['-45deg', '-45deg', '0deg'] },
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      bottom: ['0%', '50%', '50%'],
      left: '0%',
      width: '32px',
    },
    closed: {
      rotate: ['45deg', '45deg', '0deg'],
      bottom: ['50%', '50%', '0%'],
      left: '50%',
      width: '16px',
    },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useGSAP(
  //   () => {
  //     // Intermittent flicker every 10 seconds
  //     const tl = gsap.timeline({ repeat: -1, repeatDelay: 10 });
  //     tl.to('.flicker-btn', {
  //       opacity: 0.3,
  //       duration: 0.08,
  //       yoyo: true,
  //       repeat: 5,
  //     }).to('.flicker-btn', { opacity: 1, duration: 0.08 });
  //   },
  //   { scope: navRef },
  // );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '/' },
    { name: 'SERVICIOS', href: '/servicios' },
    { name: 'PORTAFOLIO', href: '/portafolio' },
    { name: 'IA', href: '/ia' },
    { name: 'CONTACTO', href: '/contacto' },
  ];

  const isIA = pathname === '/ia' || pathname.startsWith('/ia/');
  const isProjectDetail =
    pathname.startsWith('/portafolio/') && pathname !== '/portafolio';
  const isContact = pathname === '/contacto';

  // On mobile, project detail & contact are dark themed.
  // On desktop (lg+), project detail uses the same white navbar as all other pages.
  const isDarkThemeMobile = isContact || isProjectDetail;
  const isDarkTheme = isContact; // Only contact page keeps dark navbar on desktop
  const navbarBg = isIA
    ? 'bg-white'
    : isContact
      ? 'bg-white/10 backdrop-blur-md border-white/5'
      : 'bg-white';

  const textColor = isDarkTheme
    ? 'text-white/70 hover:text-white'
    : 'text-stone-500 hover:text-stone-900';
  const activeTextColor = isDarkTheme
    ? 'text-white border-white'
    : 'text-primary-container border-primary-container';

  return (
    <>
      {/* Brand Icon - Left Fixed */}
      <div
        className={cn(
          'fixed top-0 left-0 w-16 lg:w-[var(--gutter-width)] h-16 lg:h-20 flex items-center justify-center z-[110] transition-colors duration-500',
          isContact
            ? 'bg-white lg:bg-transparent border-r lg:border-none border-black/5'
            : isProjectDetail
              ? 'bg-white lg:bg-surface border-r border-black/5'
              : 'bg-white lg:bg-surface border-r lg:border-none border-black/5',
        )}
      >
        <Link href="/">
          <img
            src="/cherry-icon.png"
            alt="BlackCherry Icon"
            className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
          />
        </Link>
      </div>

      {/* Navbar Wrapper */}
      <div className="fixed top-0 left-16 lg:left-[var(--gutter-width)] right-0 lg:right-[var(--gutter-width)] h-16 lg:h-20 z-[105] flex pointer-events-none">
        {/* Main Navbar Container */}
        <nav
          aria-label="Navegación principal"
          className={cn(
            'hidden lg:flex relative w-1/2 items-center justify-center px-8 h-full pointer-events-auto transition-all duration-500',
            !isIA && 'border-r',
            navbarBg,
            scrolled && !isDarkTheme
              ? 'shadow-[0_40px_80px_rgba(26,28,28,0.06)]'
              : '',
          )}
        >
          {/* Decorative line for desktop */}
          {!isDarkTheme && (
            <div className="absolute left-0 top-0 bottom-0 w-[1.3px] bg-gray-500/20 mix-blend-difference pointer-events-none"></div>
          )}

          {/* Desktop Links */}
          <div className="flex gap-8 xl:gap-10 items-center justify-center relative z-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className={cn(
                  'font-headline tracking-tighter uppercase text-[10px] min-[600px]:text-xs transition-colors whitespace-nowrap',
                  pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(link.href))
                    ? cn('font-black border-b-2 pb-1', activeTextColor)
                    : cn('font-bold', textColor),
                )}
                href={link.href}
                aria-current={
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href))
                    ? 'page'
                    : undefined
                }
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Floating Right CTA - Hidden on Mobile */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-end px-12 h-full pointer-events-auto">
          <AnimatedButton href="/contacto" theme="primary">
            TRABAJA CON NOSOTROS
          </AnimatedButton>
        </div>
      </div>

      {/* New Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <LinksOverlay
            setActive={setIsMobileMenuOpen}
            navLinks={navLinks}
            pathname={pathname}
          />
        )}
      </AnimatePresence>

      {/* Hamburger Button at root level to ensure it's always on top */}
      <HamburgerButton
        active={isMobileMenuOpen}
        setActive={setIsMobileMenuOpen}
        isDark={isDarkThemeMobile}
      />
    </>
  );
}

const HamburgerButton = ({
  active,
  setActive,
  isDark,
}: {
  active: boolean;
  setActive: (val: boolean) => void;
  isDark: boolean;
}) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? 'open' : 'closed'}
        variants={UNDERLAY_VARIANTS}
        className="fixed z-[120] rounded-xl bg-gradient-to-br from-primary-container to-[#600000] shadow-2xl shadow-primary-container/20 lg:hidden"
        style={{ top: 8, right: 8 }}
      />

      <motion.button
        initial={false}
        animate={active ? 'open' : 'closed'}
        onClick={() => setActive(!active)}
        aria-label={active ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={active}
        aria-controls="mobile-nav"
        className={cn(
          'group fixed right-2 top-2 z-[130] h-12 w-12 transition-all flex items-center justify-center lg:hidden',
          'text-white',
        )}
      >
        <div className="relative h-6 w-8">
          <motion.span
            variants={HAMBURGER_VARIANTS.top}
            className="absolute block h-[2px] w-8 bg-current"
            style={{ top: '0%', left: '0%' }}
          />
          <motion.span
            variants={HAMBURGER_VARIANTS.middle}
            className="absolute block h-[2px] w-8 bg-current"
            style={{ top: '50%', left: '0%', translateY: '-50%' }}
          />
          <motion.span
            variants={HAMBURGER_VARIANTS.bottom}
            className="absolute block h-[2px] w-4 bg-current"
            style={{ bottom: '0%', left: '50%', translateX: '-50%' }}
          />
        </div>
      </motion.button>
    </>
  );
};

const LinksOverlay = ({
  setActive,
  navLinks,
  pathname,
}: {
  setActive: (val: boolean) => void;
  navLinks: any[];
  pathname: string;
}) => {
  return (
    <nav
      id="mobile-nav"
      aria-label="Menú móvil"
      className="fixed right-2 top-2 z-[125] h-[calc(100dvh-16px)] w-full max-w-[min(450px,calc(100vw-16px))] overflow-hidden flex flex-col pointer-events-auto lg:hidden"
    >
      <div className="p-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center"
        >
          <img
            src="/logo-blackcherry-footer.png"
            alt="BlackCherry Logo"
            className="w-40 min-[600px]:w-48 h-auto brightness-0 invert"
          />
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col justify-start pt-4 px-6 min-[600px]:px-20">
        <div className="space-y-2 min-[600px]:space-y-4">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.75 + idx * 0.1, duration: 0.5 },
              }}
              exit={{ opacity: 0, y: -8 }}
            >
              <Link
                href={link.href}
                className={cn(
                  'block text-2xl min-[600px]:text-5xl font-headline font-black uppercase tracking-tighter transition-colors',
                  pathname === link.href
                    ? 'text-white'
                    : 'text-white/40 hover:text-white',
                )}
                onClick={() => setActive(false)}
              >
                {link.name}.
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-6 min-[600px]:p-8 mt-auto flex flex-col min-[600px]:flex-row justify-between items-center gap-6 min-[600px]:gap-8">
        <div className="flex gap-6">
          {SOCIAL_CTAS.map((l, idx) => (
            <motion.a
              key={idx}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2 + idx * 0.1 },
              }}
              className="text-2xl text-white/60 hover:text-white transition-colors"
            >
              <l.Component />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.5 } }}
          className="pb-10 min-[600px]:pb-0"
        >
          <Link
            href="/contacto"
            className="flex items-center gap-4 bg-white text-primary-container px-6 py-4 rounded-full font-headline font-black uppercase text-sm tracking-widest hover:bg-primary-container hover:text-white transition-all"
            onClick={() => setActive(false)}
          >
            CONTÁCTANOS <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};
