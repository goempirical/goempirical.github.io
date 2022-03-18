import { ROUTES } from '@constants/routes';

import { INavbarConfig } from './types';

export const defaultConfig: INavbarConfig = {
  navigation: [
    {
      title: 'Home',
      to: ROUTES.Home,
    },
    {
      title: 'Careers',
      to: ROUTES.Careers,
    },
    {
      title: 'About us',
      to: ROUTES.AboutUs,
    },
  ],
};
