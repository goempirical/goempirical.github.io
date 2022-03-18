import { ROUTES } from '@constants/routes';

import { IFooterConfig } from './types';

export const defaultConfig: IFooterConfig = {
  contactMail: {
    title: 'hello@goempirical.com',
    to: 'mailto:hello@goempirical.com',
  },
  socialMedia: {
    facebook: {
      logo: '/assets/social-media/facebook_logo.svg',
      linkTitle: "Empirical's Facebook Account",
      url: 'https://facebook.com',
    },
    twitter: {
      logo: '/assets/social-media/twitter_logo.svg',
      linkTitle: "Empirical's Twitter Account",
      url: 'https://twitter.com',
    },
    linkedin: {
      logo: '/assets/social-media/linkedin_logo.svg',
      linkTitle: "Empirical's Linkedin Account",
      url: 'https://linkedin.com',
    },
  },
  navigation: [
    {
      title: 'Careers',
      to: ROUTES.Careers,
      items: [
        {
          title: 'Section 1',
          to: ROUTES.Careers,
        },
        {
          title: 'Section 2',
          to: ROUTES.Careers,
        },
        {
          title: 'Opening careers',
          to: ROUTES.Careers,
        },
      ],
    },
    {
      title: 'About us',
      to: ROUTES.AboutUs,
      items: [
        {
          title: 'Section 1',
          to: ROUTES.AboutUs,
        },
        {
          title: 'Section 2',
          to: ROUTES.AboutUs,
        },
      ],
    },
  ],
};