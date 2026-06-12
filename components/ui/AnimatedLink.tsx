'use client';

import React from 'react';
import Link, { LinkProps } from 'next/link';
import { usePageTransition } from '@/components/layout/PageTransitionProvider';
import { usePathname } from 'next/navigation';

interface AnimatedLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string; 
}

const AnimatedLink = React.forwardRef<HTMLAnchorElement, AnimatedLinkProps>(
  ({ href, children, className, onClick, target, ...props }, ref) => {
    const { triggerTransition } = usePageTransition();
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      // If there's an existing onClick, fire it
      if (onClick) {
        onClick(e);
      }

      // Don't intercept if user opens in new tab (ctrl/meta/shift click) or has target="_blank"
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || target === '_blank') {
        return;
      }

      const hrefString = href.toString();
      const isInternal = hrefString.startsWith('/') || hrefString.startsWith('#');
      
      // Don't animate if we are only navigating to a hash on the exact same page
      const [path] = hrefString.split('#');
      if (path === pathname || path === '') {
          return;
      }

      if (isInternal) {
        e.preventDefault();
        triggerTransition(hrefString, e.clientX, e.clientY);
      }
    };

    return (
      <Link ref={ref} href={href} className={className} onClick={handleClick} target={target} {...props}>
        {children}
      </Link>
    );
  }
);

AnimatedLink.displayName = 'AnimatedLink';

export default AnimatedLink;
