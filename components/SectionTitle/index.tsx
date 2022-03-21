import clsx from 'clsx';

import Text from '@components/Text';

import { ISectionTitle } from './types';

function SectionTitle({ className, children }: ISectionTitle) {
  const decorationClassNames = 'before:mb-12 before:h-1 before:w-9 before:bg-white before:opacity-20 before:rounded-sm';
  return (
    <div className={clsx('flex justify-center', className)}>
      <Text variation="h2" className={clsx('relative flex flex-col justify-center items-center', decorationClassNames)}>
        {children}
      </Text>
    </div>
  );
}

SectionTitle.defaultProps = {
  className: '',
};

export default SectionTitle;
