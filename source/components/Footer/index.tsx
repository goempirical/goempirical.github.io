import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ConfigContext } from '@contexts/global';
import Text from '@components/Text';
import { Icons } from '@components/Icons/constants';
import empiricalLogo from '@public/assets/logos/logo-white-font.svg';
import empiricalLogoBlack from '@public/assets/logos/logo-dark-font.svg';
import { imageLoader } from '@utils/images';

import { IFooterProps } from './types';
import { defaultConfig } from './contants';

function Footer({ config }: IFooterProps) {
  const { config: { theme } } = useContext(ConfigContext);
  const isDark = theme === 'dark';
  const {
    contactMail,
    socialMedia = {},
    navigation,
  } = config || {};

  return (
    <footer className="flex justify-center w-full dark:bg-white bg-black bg-opacity-5 dark:bg-opacity-5">
      <div className="flex flex-wrap max-w-u1280 w-full px-5 py-16 lg:gap-5 gap-8 sm:items-start items-center">
        <div className="flex lg:flex-1 w-full md:shrink-0 items-start md:justify-start justify-center">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <Image src={isDark ? empiricalLogo : empiricalLogoBlack} alt="Empirical Logo" width={125} height={24} loader={imageLoader} />
            </a>
          </Link>
        </div>
        <div className="flex flex-col gap-5 w-full md:flex-1 order-1 md:order-none md:items-start items-center">
          <Text className="font-bold text-base">Contact us</Text>
          {contactMail && (
            <a href={contactMail.to}>
              <Text className="text-base opacity-70 hover:opacity-100">{contactMail.title}</Text>
            </a>
          )}
          {Object.keys(socialMedia).length && (
            <div className="flex gap-x-3">
              {Object.values(socialMedia).map((socialMediaItem) => {
                const Icon = Icons[socialMediaItem.icon];
                if (!socialMediaItem.url) return null;
                return (
                  <div className="flex items-center justify-center border-current border rounded-full shrink-0 w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" key={socialMediaItem.url}>
                    <a className="flex items-center justify-center text-black dark:text-white" href={socialMediaItem.url} title={socialMediaItem.linkTitle} rel="noopener noreferrer" target="_blank">
                      <Icon />
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {navigation.map((section) => (
          <div className="flex flex-col gap-2 md:items-start items-center flex-1 md:basis-0 basis-full" key={section.to}>
            <Link href={section.to} passHref>
              <Text variation="a" className="font-bold mb-3 text-base">{section.title}</Text>
            </Link>
            {section.items?.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.title}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base opacity-70 hover:opacity-100"
                  >
                    {item.title}
                  </a>
                );
              }
              return (
                <Link key={item.title} href={item.to} passHref>
                  <Text variation="a" className="text-base opacity-70 hover:opacity-100">{item.title}</Text>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  config: defaultConfig,
};

export default Footer;
