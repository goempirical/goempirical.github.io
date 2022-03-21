import { ROUTES } from '@constants/routes';
import facebookLogo from '@public/assets/social-media/facebook_logo.svg';
import twitterLogo from '@public/assets/social-media/twitter_logo.svg';
import linkedinLogo from '@public/assets/social-media/linkedin_logo.svg';

import { IFooterConfig } from './types';

export const defaultConfig: IFooterConfig = {
  contactMail: {
    title: 'hello@goempirical.com',
    to: 'mailto:hello@goempirical.com',
  },
  socialMedia: {
    facebook: {
      logo: facebookLogo,
      linkTitle: "Empirical's Facebook Account",
      url: 'https://facebook.com',
    },
    twitter: {
      logo: twitterLogo,
      linkTitle: "Empirical's Twitter Account",
      url: 'https://twitter.com',
    },
    linkedin: {
      logo: linkedinLogo,
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
