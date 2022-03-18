import Link from 'next/link';
import clsx from 'clsx';

import Text from '@components/Text';
import { INavbarItemProps } from './types';

function NavbarItem({ isActive, title, to }: INavbarItemProps) {
  const beforeClassNames = "before:-bottom-2 before:absolute before:w-6 before:h-1 before:content-[''] before:bg-primary before:rounded-sm before:opacity-0 before:transition-opacity duration-150";
  const activeBeforeClassNames = 'before:opacity-100';

  return (
    // TODO: Correct font size. Is 18px, should be 16px.
    <div className={clsx(beforeClassNames, isActive ? activeBeforeClassNames : '', 'relative flex items-center justify-center')}>
      <Link href={to} passHref>
        <Text variation="a" className={clsx('text-base', { 'font-semibold': isActive })}>{title}</Text>
      </Link>
    </div>
  );
}

export default NavbarItem;
