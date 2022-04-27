import clutchLogo from '@public/assets/social-media/clutch_logo.svg';
import { IIcon } from '../types';

function ClutchIcon({ className }: IIcon) {
  return (
    <img className={className} alt="Clutch Logo" src={clutchLogo.src} width={15} />
  );
}

ClutchIcon.defaultProps = {
  className: '',
};

export default ClutchIcon;
