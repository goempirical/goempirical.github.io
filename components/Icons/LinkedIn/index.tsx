import { IIcon } from '../types';

function LinkedInIcon({ className }: IIcon) {
  return (
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8491 12.1714H8.07031V21.1535H10.8491V12.1714Z" fill="currentColor" />
      <path d="M10.0956 10.3067C9.90421 10.4327 9.67965 10.499 9.45047 10.4972C9.14523 10.4948 8.85332 10.3719 8.63834 10.1552C8.42336 9.9385 8.30272 9.64562 8.30273 9.34039C8.30274 9.11121 8.37083 8.88719 8.49835 8.69675C8.62587 8.50633 8.80709 8.35806 9.01901 8.27077C9.23093 8.18349 9.464 8.16112 9.68864 8.2065C9.91328 8.25188 10.1194 8.36296 10.2808 8.52566C10.4422 8.68837 10.5517 8.89535 10.5953 9.12034C10.6389 9.34532 10.6147 9.5782 10.5257 9.78943C10.4367 10.0007 10.287 10.1807 10.0956 10.3067Z" fill="currentColor" stroke="currentColor" />
      <path d="M15.2968 16.4439C15.2968 15.1784 15.8773 14.4283 16.9928 14.4283C18.1082 14.4283 18.5061 15.1458 18.5061 16.4439V21.173H21.2653V15.485C21.2653 13.078 19.902 11.9104 18.0038 11.9104C17.4625 11.9032 16.9286 12.0364 16.4541 12.297C15.9797 12.5577 15.5809 12.9369 15.2968 13.3977V12.1714H12.6289V21.173H15.2968V16.4439Z" fill="currentColor" />
    </svg>
  );
}

LinkedInIcon.defaultProps = {
  className: '',
};

export default LinkedInIcon;
