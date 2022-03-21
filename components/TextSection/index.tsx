import clsx from 'clsx';

import Text from '@components/Text';

import { ITextSectionProps } from './types';

function TextSection({
  className,
  highlightComponent,
  highlight,
  content,
  title,
}: ITextSectionProps) {
  return (
    <div className={clsx('flex gap-10 lg:gap-20 flex-wrap justify-center w-full', className)}>
      <div className="flex flex-auto md:flex-1 justify-start md:justify-end w-full lg:w-auto">
        {highlightComponent || (
          <Text variation="highlighted" className="md:text-right translate-y-1">{highlight}</Text>
        )}
      </div>
      <div className="flex flex-auto md:flex-1 flex-col gap-4">
        {title && <Text variation="h3">{title}</Text>}
        <Text variation="p" className="whitespace-pre-line opacity-80">{content}</Text>
      </div>
    </div>
  );
}

TextSection.defaultProps = {
  className: '',
};

export default TextSection;
