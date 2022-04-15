import clsx from 'clsx';

import { Icons } from '@components/Icons/constants';
import Text from '@components/Text';

import { ITextIconProps } from './types';

function TextIcon({
  className,
  content,
  icon,
  renderIcon,
  title,
}: ITextIconProps) {
  const Icon = Icons[icon || 'Bridge'];
  return (
    <div className={clsx('flex flex-col items-center gap-5', className)}>
      <div className="flex items-center justify-center text-primary border-primary p-2 border rounded-full h-20 w-20">
        {renderIcon?.() || Icon ? <Icon className="h-7 w-7" /> : null}
      </div>
      <div className="flex flex-col items-center gap-2">
        <Text variation="h4" className="text-center">{title}</Text>
        <Text variation="p" className="opacity-70 text-center max-w-xs">{content}</Text>
      </div>
    </div>
  );
}

export default TextIcon;
