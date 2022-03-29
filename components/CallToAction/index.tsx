import clsx from 'clsx';
import Text from '@components/Text';

import { ICallToActionProps } from './types';

function CallToAction({ className, link, title }: ICallToActionProps) {
  return (
    <div className={clsx('flex flex-col gap-6 items-center', className)}>
      {title && <Text variation="h1">{title}</Text>}
      <a href={link.href} className="flex items-center justify-center bg-primary rounded-full w-auto px-8 py-2 font-bold">{link.title}</a>
    </div>
  );
}

export default CallToAction;
