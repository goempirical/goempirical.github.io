import { IIcon } from '../types';

function GlobeIcon({ className }: IIcon) {
  return (
    <svg className={className} width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M25.8262 5.11483C25.8119 5.09976 25.7933 5.09374 25.779 5.08043H25.7788C23.9146 3.13814 21.5602 1.73575 18.9648 1.02113C16.3694 0.306759 13.6289 0.306759 11.0337 1.02113C8.43803 1.73575 6.08369 3.1382 4.21976 5.08043C4.20545 5.09399 4.18687 5.10001 4.17256 5.11483C4.15824 5.1299 4.15674 5.14697 4.14544 5.16204V5.16229C1.48498 7.94025 0 11.6381 0 15.4847C0 19.3314 1.48505 23.0289 4.14544 25.8072C4.15674 25.8223 4.1605 25.8401 4.17256 25.8544C4.18461 25.8687 4.20545 25.8755 4.21976 25.8888V25.8891C6.08395 27.8319 8.43855 29.2345 11.0343 29.9494C13.6302 30.664 16.371 30.664 18.9668 29.9494C21.5627 29.2345 23.9173 27.8319 25.7813 25.8891C25.7956 25.8755 25.8127 25.871 25.8263 25.8569C25.8398 25.8426 25.8421 25.8248 25.8534 25.8097V25.8095C28.5139 23.0315 29.9988 19.3337 29.9988 15.487C29.9988 11.6406 28.5138 7.94283 25.8534 5.16455C25.8421 5.14747 25.8383 5.12939 25.8265 5.11508L25.8262 5.11483ZM25.1857 24.314C24.3015 23.5972 23.342 22.9784 22.3246 22.4684C22.8833 20.436 23.1869 18.3421 23.2283 16.2348H28.4601C28.2981 19.2176 27.1458 22.0614 25.1857 24.3157V24.314ZM1.53749 16.235H6.76923C6.81066 18.3428 7.11425 20.4372 7.67298 22.4702C6.65552 22.9801 5.69604 23.5989 4.8119 24.3158C2.8518 22.0616 1.69948 19.2179 1.53749 16.2348V16.235ZM4.8119 6.65439C5.69604 7.37127 6.65552 7.98998 7.67298 8.5C7.11427 10.5329 6.81069 12.6274 6.76923 14.7351H1.53749C1.69945 11.7523 2.85174 8.90851 4.8119 6.6542V6.65439ZM14.2485 8.6906C12.6345 8.612 11.0439 8.27126 9.53961 7.68117C10.6369 4.65437 12.3331 2.52579 14.2485 2.07955V8.6906ZM9.07382 9.13229C10.7281 9.77386 12.476 10.14 14.2485 10.216V14.7351H8.26855C8.31501 12.8423 8.58544 10.9616 9.07382 9.13229ZM14.2485 16.2355V20.7548V20.7546C12.476 20.8307 10.7281 21.1968 9.07382 21.8383C8.58542 20.0091 8.31496 18.1283 8.26855 16.2355L14.2485 16.2355ZM14.2485 22.2803V28.8911C12.3331 28.4449 10.6366 26.3165 9.53961 23.2897V23.2894C11.0439 22.6994 12.6345 22.3586 14.2485 22.28V22.2803ZM15.7484 22.2803L15.7486 22.28C17.3627 22.3586 18.9532 22.6994 20.4576 23.2894C19.3603 26.3162 17.664 28.4448 15.7486 28.8911L15.7484 22.2803ZM20.9231 21.8386L20.9234 21.8383C19.2691 21.1968 17.5211 20.8306 15.7486 20.7546V16.2355H21.7289H21.7286C21.6822 18.1283 21.4117 20.009 20.9234 21.8383L20.9231 21.8386ZM15.7486 14.7354V10.2163C17.5212 10.1402 19.2691 9.77408 20.9234 9.13254C21.4118 10.9618 21.6822 12.8426 21.7286 14.7354H15.7486ZM15.7486 8.6906V2.0798C17.6641 2.52601 19.3605 4.65437 20.4576 7.68117V7.68142C18.9532 8.27151 17.3627 8.61223 15.7486 8.69085V8.6906ZM19.3828 2.73143V2.73168C21.1473 3.34237 22.7659 4.3129 24.1362 5.58145C23.4268 6.14567 22.665 6.64063 21.8614 7.05968C21.3118 5.47525 20.4711 4.00756 19.3828 2.73168L19.3828 2.73143ZM8.13343 7.0557V7.05596C7.3299 6.63687 6.56803 6.14193 5.85867 5.57772C7.22917 4.31039 8.8478 3.34115 10.612 2.73175C9.52476 4.0066 8.68504 5.47307 8.13568 7.05602L8.13343 7.0557ZM8.13343 23.915V23.9153C8.6836 25.4982 9.52405 26.9649 10.6121 28.2395C8.84761 27.6289 7.22898 26.6583 5.85874 25.3898C6.56912 24.8268 7.33144 24.3331 8.13574 23.9153L8.13343 23.915ZM21.8577 23.915V23.9153C22.6612 24.3344 23.4231 24.8293 24.1325 25.3935C22.7622 26.6621 21.1436 27.6326 19.3791 28.2433C20.4689 26.9677 21.3109 25.5 21.8615 23.9153L21.8577 23.915ZM23.2279 14.7355C23.1878 12.628 22.8854 10.5333 22.328 8.50038C23.3455 7.99039 24.3049 7.37165 25.1891 6.65478C27.1479 8.90941 28.2987 11.7531 28.4597 14.7357L23.2279 14.7355Z" />
    </svg>
  );
}

GlobeIcon.defaultProps = {
  className: '',
};

export default GlobeIcon;
