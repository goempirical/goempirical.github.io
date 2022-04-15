import { ROUTES } from '@constants/routes';

import { IFooterConfig } from './types';

export const defaultConfig: IFooterConfig = {
  contactMail: {
    title: 'hello@goempirical.com',
    to: 'mailto:hello@goempirical.com',
  },
  socialMedia: {
    facebook: {
      icon: 'Facebook',
      linkTitle: "Empirical's Facebook Account",
      url: '',
    },
    twitter: {
      icon: 'Twitter',
      linkTitle: "Empirical's Twitter Account",
      url: '',
    },
    linkedin: {
      icon: 'LinkedIn',
      linkTitle: "Empirical's Linkedin Account",
      url: 'https://www.linkedin.com/company/goempirical',
    },
  },
  navigation: [
    {
      title: 'Careers',
      to: ROUTES.Careers,
      items: [
        {
          title: 'See all our opportunities',
          to: 'https://goempirical.freshteam.com/jobs',
          external: true,
        },
      ],
    },
    {
      title: 'About us',
      to: ROUTES.AboutUs,
      items: [
        {
          title: 'Learn about us',
          to: ROUTES.AboutUs,
        },
      ],
    },
  ],
};
