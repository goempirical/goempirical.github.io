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
      to: '/careers',
      items: [
        {
          title: 'Section 1',
          to: '/careers',
        },
        {
          title: 'Section 2',
          to: '/careers',
        },
        {
          title: 'Opening careers',
          to: '/careers',
        },
      ],
    },
    {
      title: 'About us',
      to: '/about-us',
      items: [
        {
          title: 'Section 1',
          to: '/about-us',
        },
        {
          title: 'Section 2',
          to: '/about-us',
        },
      ],
    },
  ],
};
