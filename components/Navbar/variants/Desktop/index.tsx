import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import { INavbarVariantProps } from '@components/Navbar/types';
import NavbarItem from '@components/Navbar/components/NavbarItem';

function NavbarDesktop({ config, isCollapsed }: INavbarVariantProps) {
  const { pathname } = useRouter();

  return (
    <div className="flex flex-wrap gap-8 items-center lg:gap-5 max-w-u1280 px-5 py-16 w-full">
      <div className={clsx('flex items-center transition-transform', { 'translate-y-11': isCollapsed })}>
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="flex items-center -mt-2">
            <Image src="/assets/empirical_logo-color.svg" alt="Empirical Logo" width={170} height={36} />
          </a>
        </Link>
      </div>
      <div className={clsx('flex flex-1 gap-x-7 items-center justify-end transition-transform w-full', { 'translate-y-10': isCollapsed })}>
        {config.navigation.map((item) => (
          <NavbarItem
            key={item.to}
            to={item.to}
            title={item.title}
            isActive={pathname === item.to}
          />
        ))}
      </div>
    </div>
  );
}

export default NavbarDesktop;
