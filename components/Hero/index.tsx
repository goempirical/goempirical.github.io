import clsx from 'clsx';
import Image from 'next/image';

import Text from '@components/Text';

import { IHeroProps } from './types';

function Hero({
  bgImage,
  className,
  children,
  title,
}: IHeroProps) {
  return (
    <section className={clsx('relative flex items-center justify-center w-full overflow-hidden', className)}>
      {bgImage && (
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src={bgImage} objectFit="cover" layout="fill" />
        </div>
      )}
      <div className="flex flex-col gap-8 items-center justify-center max-w-u1280 w-full">
        {children || <Text variation="h1">{title}</Text>}
      </div>
    </section>
  );
}

export default Hero;
