import { ReactNode } from 'react';

export interface IPageProps {
  children: ReactNode;
  config: {
    title: string;
    description?: string;
    socialMediaImage?: string;
    favicon?: string;
  };
  siteName?: string;
}
