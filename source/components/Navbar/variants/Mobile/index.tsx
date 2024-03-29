import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import { INavbarVariantProps } from '@components/Navbar/types';
import NavbarItem from '@components/Navbar/components/NavbarItem';
import HamburgerIcon from '@components/Icons/Hamburger';
import empiricalLogo from '@public/assets/logos/logo-white-font.svg';
import empiricalLogoBlack from '@public/assets/logos/logo-dark-font.svg';
import ThemeToggleButton from '@components/Navbar/components/ThemeToggleButton';
import { imageLoader } from '@utils/images';
import { ConfigContext } from '@contexts/global';

function NavbarMobile({ config, isCollapsed }: INavbarVariantProps) {
  const { config: { theme } } = useContext(ConfigContext);
  const isDark = theme === 'dark';
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    window.document.documentElement.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <>
      <div className={clsx('flex justify-between w-full px-5 py-11 lg:gap-5 gap-8 items-center z-50')}>
        <div className={clsx('flex items-center transition-transform', { 'translate-y-8': isCollapsed })}>
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="flex items-center">
              <Image src={isDark ? empiricalLogo : empiricalLogoBlack} alt="Empirical Logo" width={170} height={43} loader={imageLoader} />
            </a>
          </Link>
        </div>
        <div className={clsx('flex items-center transition-transform', isCollapsed ? 'translate-y-8' : '')}>
          <button className="dark:text-white text-black p-2.5" onClick={(() => setIsOpen(!isOpen))} type="button" title="Toggle menu">
            <HamburgerIcon />
          </button>
        </div>
      </div>
      <div className={clsx('fixed top-0 flex flex-col items-center justify-center gap-y-10 p-5 w-screen h-screen dark:bg-secondary bg-white bg-opacity-40 dark:bg-opacity-40 backdrop-blur-md z-40 -left-full transition-transform', isOpen ? 'translate-x-full' : '', isOpen && isCollapsed ? 'translate-y-14' : '')}>
        {config.navigation.map((item) => (
          <NavbarItem
            key={item.to}
            to={item.to}
            title={item.title}
            isActive={pathname === item.to}
          />
        ))}
        <ThemeToggleButton />
      </div>
    </>
  );
}

export default NavbarMobile;
