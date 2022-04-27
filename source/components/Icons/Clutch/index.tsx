import { IIcon } from '../types';
import clutchLogo from '@public/assets/social-media/clutch_logo.svg';


function ClutchIcon({ className }: IIcon) {
  return (
    <img src={clutchLogo.src} width={15}></img>
  );
}

ClutchIcon.defaultProps = {
  className: '',
};

export default ClutchIcon;
