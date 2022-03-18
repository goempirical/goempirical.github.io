import { IIcon } from '../types';

function HamburgerIcon({ className }: IIcon) {
  return (
    <svg className={className || ''} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="19" height="3" rx="1.5" fill="currentColor" />
      <rect y="8" width="19" height="3" rx="1.5" fill="currentColor" />
      <rect y="16" width="19" height="3" rx="1.5" fill="currentColor" />
    </svg>

  );
}

export default HamburgerIcon;
