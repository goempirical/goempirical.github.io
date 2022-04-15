import { TIcons } from '@components/Icons/types';
import { TNavigationItem } from '@interfaces/INavigation';

/* eslint-disable no-unused-vars */
type TSocialMedia = 'twitter' | 'facebook' | 'linkedin';

export interface IFooterConfig {
  contactMail?: {
    title: string,
    to: string,
    external?: boolean,
  },
  socialMedia?: {
    [key in TSocialMedia]?: {
      icon: TIcons;
      linkTitle: string;
      url: string;
    }
  }
  navigation: TNavigationItem[];
}

export interface IFooterProps {
  config: IFooterConfig
}
