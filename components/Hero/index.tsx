import clsx from 'clsx';

import Text from '@components/Text';

import { IHeroProps } from './types';

function Hero({ className, children, title }: IHeroProps) {
  return (
    <section className={clsx('flex items-center justify-center w-full', className)}>
      <div className="flex flex-col gap-8 items-center justify-center max-w-u1280 w-full">
        {children || <Text variation="h1">{title}</Text>}
      </div>
    </section>
  );
}

export default Hero;
