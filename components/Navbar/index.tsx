import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { defaultConfig } from './constants';

import { INavbarProps } from './types';
import NavbarDesktop from './variants/Desktop';
import NavbarMobile from './variants/Mobile';

function Navbar({ className, config }: INavbarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const collapsedClassNames = 'backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 dark:bg-secondary bg-white opacity-1 transition-opacity';
  const expandedClassNames = 'bg-opacity-0 opacity-0 transition-opacity';

  const handleScroll = () => {
    if (!isCollapsed) {
      setIsCollapsed(window.scrollY > 10);
    } else {
      setIsCollapsed(window.scrollY <= 10);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 750);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll();
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={
        clsx(
          'flex justify-center w-full sticky top-0 z-40 transition-transform',
          isCollapsed ? '-translate-y-14' : 'translate-y-0',
          className,
        )
      }
    >
      <div className={clsx('w-full h-full absolute top-0 left-0 transition-transform z-0', isCollapsed ? collapsedClassNames : expandedClassNames)} />
      {isMobile
        ? <NavbarMobile config={config} isCollapsed={isCollapsed} />
        : (
          <NavbarDesktop config={config} isCollapsed={isCollapsed} />
        )}
    </nav>
  );
}

Navbar.defaultProps = {
  config: defaultConfig,
};

export default Navbar;
