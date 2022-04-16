import { IIcon } from '../types';

function ChessIcon({ className }: IIcon) {
  return (
    <svg className={className} width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.39514 29.6281C4.2994 29.5062 -4.92549 17.3235 7.88102 5.76749L11.1313 1.24458C11.2878 1.03213 11.5647 0.946724 11.8136 1.03365C12.0629 1.12058 12.2261 1.36008 12.2164 1.62359L12.0246 5.24898C14.9047 5.84592 15.615 6.19879 16.456 7.33611C16.8876 7.8604 17.3659 8.34458 17.8851 8.78256C18.0984 8.93939 23.166 13.1398 24.0374 14.0112C25.3446 15.3184 24.3772 16.7606 23.6757 17.815C22.6821 19.3052 20.3989 18.4554 19.6451 18.1201C18.6908 18.3904 16.6824 18.8697 15.2617 18.556C15.6584 19.5235 16.569 20.6735 17.5015 21.8719C19.2181 24.0506 21.1615 26.5428 21.1615 29.2269H19.9545C19.9545 26.9568 18.1418 24.6475 16.5471 22.6126C15.0265 20.6692 13.7104 18.9961 13.8542 17.4101L13.8545 17.4098C13.8755 17.156 14.0551 16.9436 14.3019 16.8807C14.5487 16.8177 14.8083 16.9183 14.9481 17.1311C15.3186 17.6846 17.6495 17.4493 19.5102 16.8916V16.8913C19.6546 16.8481 19.8102 16.8603 19.946 16.9263C20.6475 17.2749 22.2334 17.7976 22.6693 17.1311C23.6365 15.7151 23.6453 15.3184 23.166 14.8828C22.338 14.0112 17.1705 9.71926 17.1182 9.67577C16.5288 9.18521 15.9863 8.64115 15.4973 8.05059C14.9092 7.25765 14.5648 6.97435 11.2838 6.30784V6.30754C10.9929 6.25131 10.7881 5.98901 10.8045 5.69328L10.9133 3.59729L8.83925 6.51665C8.81251 6.55069 8.78333 6.58291 8.75233 6.61269C-3.3087 17.4226 4.97895 28.434 5.33608 28.8954L4.39514 29.6281Z" fill="currentColor" stroke="currentColor" strokeWidth="0.835694" />
      <path d="M23.3835 36.1765H1.59724C1.42035 36.1771 1.25257 36.0987 1.13981 35.9628C1.02645 35.8257 0.978728 35.6458 1.00882 35.4704L1.88019 30.6773L1.88049 30.6776C1.93307 30.394 2.18048 30.1889 2.46861 30.1895H22.0763C22.3446 30.1876 22.5805 30.3664 22.6513 30.6253L23.9586 35.4184V35.4181C24.0096 35.5972 23.9725 35.7899 23.8583 35.9367C23.7464 36.0865 23.5704 36.1753 23.3835 36.1765L23.3835 36.1765ZM2.31152 34.9826H22.5984L21.6179 31.3833H2.96495L2.31152 34.9826Z" fill="currentColor" stroke="currentColor" strokeWidth="0.835694" />
    </svg>

  );
}

ChessIcon.defaultProps = {
  className: '',
};

export default ChessIcon;