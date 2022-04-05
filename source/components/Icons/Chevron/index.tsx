import { IIcon } from '../types';

function ChevronIcon({ className }: IIcon) {
  return (
    <svg className={className} width="10" height="15" viewBox="-1 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 13.4854L8.5 7.48535L1 1.48535" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
}

ChevronIcon.defaultProps = {
  className: '',
};

export default ChevronIcon;
