import Image from 'next/image';
import Link from 'next/link';

import Text from '@components/Text';
import empiricalLogo from '@public/assets/empirical_logo-color.svg';
import { imageLoader } from '@utils/images';

import { IFooterProps } from './types';
import { defaultConfig } from './contants';

function Footer({ config }: IFooterProps) {
  const {
    contactMail,
    socialMedia = {},
    navigation,
  } = config || {};
  return (
    <footer className="flex justify-center w-full bg-white bg-opacity-5">
      <div className="flex flex-wrap max-w-u1280 w-full px-5 py-16 lg:gap-5 gap-8 sm:items-start items-center">
        <div className="flex lg:flex-1 w-full md:shrink-0 items-start md:justify-start justify-center">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <Image src={empiricalLogo} alt="Empirical Logo" width="125px" height="24px" loader={imageLoader} />
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
              {Object.values(socialMedia).map((socialMediaItem) => (
                <div className="flex items-center justify-center border rounded-full shrink-0 w-8 h-8 opacity-70 hover:opacity-100" key={socialMediaItem.url}>
                  <a className="flex items-center justify-center" href={socialMediaItem.url} title={socialMediaItem.linkTitle} rel="noopener noreferrer" target="_blank">
                    <Image src={socialMediaItem.logo} alt="" width={30} height={30} loader={imageLoader} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
        {navigation.map((section) => (
          <div className="flex flex-col gap-2 md:items-start items-center flex-1 md:basis-0 basis-full" key={section.to}>
            <Link href={section.to} passHref>
              <Text variation="a" className="font-bold mb-3 text-base">{section.title}</Text>
            </Link>
            {section.items?.map((item) => (
              <Link key={item.title} href={item.to} passHref>
                <Text variation="a" className="text-base opacity-70 hover:opacity-100">{item.title}</Text>
              </Link>
            ))}
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
