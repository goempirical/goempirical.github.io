import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import { INavbarVariantProps } from '@components/Navbar/types';
import NavbarItem from '@components/Navbar/components/NavbarItem';
import HamburgerIcon from '@components/Icons/Hamburger';

function NavbarMobile({ config, isCollapsed }: INavbarVariantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    window.document.documentElement.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <>
      <div className={clsx('flex justify-between w-full px-5 py-12 lg:gap-5 gap-8 items-center z-50')}>
        <div className={clsx('flex items-center transition-transform', { 'translate-y-8': isCollapsed })}>
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="flex items-center -mt-2">
              <Image src="/assets/empirical_logo-color.svg" alt="Empirical Logo" width={170} height={36} />
            </a>
          </Link>
        </div>
        <div className={clsx('flex items-center transition-transform', { 'translate-y-7': isCollapsed })}>
          <button className="text-white" onClick={(() => setIsOpen(!isOpen))} type="button" title="Toggle menu">
            <HamburgerIcon />
          </button>
        </div>
      </div>
      <div className={clsx('fixed top-0 flex flex-col items-center justify-center gap-y-10 p-5 w-screen h-screen bg-secondary bg-opacity-40 backdrop-blur-md z-40 -left-full transition-transform', isOpen ? 'translate-x-full' : '', isOpen && isCollapsed ? 'translate-y-20' : '')}>
        {config.navigation.map((item) => (
          <NavbarItem
            key={item.to}
            to={item.to}
            title={item.title}
            isActive={pathname === item.to}
          />
        ))}
      </div>
    </>
  );
}

export default NavbarMobile;
