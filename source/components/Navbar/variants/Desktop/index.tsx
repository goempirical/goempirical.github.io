import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import { INavbarVariantProps } from '@components/Navbar/types';
import NavbarItem from '@components/Navbar/components/NavbarItem';
import empiricalLogo from '@public/assets/logos/logo-white-font.svg';
import empiricalLogoBlack from '@public/assets/logos/logo-dark-font.svg';
import { imageLoader } from '@utils/images';
import { useContext } from 'react';
import { ConfigContext } from '@contexts/global';
import ThemeToggleButton from '@components/Navbar/components/ThemeToggleButton';

function NavbarDesktop({ config, isCollapsed }: INavbarVariantProps) {
  const { config: { theme } } = useContext(ConfigContext);
  const isDark = theme === 'dark';
  const { pathname } = useRouter();

  return (
    <div className="flex flex-wrap gap-8 items-center lg:gap-5 max-w-u1280 px-5 py-12 w-full z-10">
      <div className={clsx('flex items-center transition-transform', { 'translate-y-7': isCollapsed })}>
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="flex items-center">
            <Image src={isDark ? empiricalLogo : empiricalLogoBlack} alt="Empirical Logo" width={170} height={45} loader={imageLoader} />
          </a>
        </Link>
      </div>
      <div className={clsx('flex flex-1 gap-x-7 items-center justify-end transition-transform w-full', { 'translate-y-7': isCollapsed })}>
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
    </div>
  );
}

export default NavbarDesktop;
