import { TNavigationItem } from 'types/INavigation';

/* eslint-disable no-unused-vars */
type TSocialMedia = 'twitter' | 'facebook' | 'linkedin';

export interface IFooterConfig {
  contactMail?: {
    title: string,
    to: string,
  },
  socialMedia?: {
    [key in TSocialMedia]?: {
      logo: string;
      linkTitle: string;
      url: string;
    }
  }
  navigation: TNavigationItem[];
}

export interface IFooterProps {
  config: IFooterConfig
}
