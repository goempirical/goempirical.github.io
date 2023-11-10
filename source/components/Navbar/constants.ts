import { ROUTES } from '@constants/routes';

import { INavbarConfig } from './types';

export const defaultConfig: INavbarConfig = {
  navigation: [
    {
      title: 'For Companies',
      to: ROUTES.Home,
    },
    {
      title: 'For Talent',
      to: ROUTES.Careers,
    },
    {
      title: 'About us',
      to: ROUTES.AboutUs,
    },
    // {
    //   title: 'Apply to Talent Community',
    //   to: ROUTES.Community,
    // },
  ],
  themeToggleButton: {
    getTitle: (theme) => `Switch to ${theme} mode`,
  },
};
