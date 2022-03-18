import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

import { IDefaultLayoutProps } from './types';

function DefaultLayout({ children }: IDefaultLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
