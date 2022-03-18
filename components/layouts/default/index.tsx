import Footer from '@components/Footer';
import { IDefaultLayoutProps } from './types';

function DefaultLayout({ children }: IDefaultLayoutProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
