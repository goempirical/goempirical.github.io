import clsx from 'clsx';

import Text from '@components/Text';

import { IStepProps } from './types';

function Step({
  className,
  content,
  stepNumber,
  title,
}: IStepProps) {
  return (
    <div className={clsx('flex flex-col border-t-2 border-primary px-2 py-8 gap-5', className)}>
      <Text className="text-lg font-bold text-primary">{stepNumber}</Text>
      <Text variation="h4">{title}</Text>
      <Text className="opacity-70" variation="p">{content}</Text>
    </div>
  );
}

export default Step;
