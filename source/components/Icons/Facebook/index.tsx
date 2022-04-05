import { IIcon } from '../types';

function FacebookIcon({ className }: IIcon) {
  return (
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0849 23.2999H16.3464V15.1071H18.6229L18.8708 12.3675H16.3464V10.8085C16.3464 10.1562 16.4769 9.90179 17.0965 9.90179H18.9164V7.05127H16.653C14.2134 7.05127 13.1175 8.12103 13.1175 10.1758V12.3609H11.415V15.1397H13.1175L13.0849 23.2999Z" fill="currentColor" />
    </svg>
  );
}

FacebookIcon.defaultProps = {
  className: '',
};

export default FacebookIcon;
