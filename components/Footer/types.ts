/* eslint-disable no-unused-vars */
type TSocialMedia = 'twitter' | 'facebook' | 'linkedin';

export type TNavigation = {
  title: string;
  to: string;
  items?: TNavigation[];
}

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
  navigation: TNavigation[];
}

export interface IFooterProps {
  config: IFooterConfig
}
