import Text from '@components/Text';
import clsx from 'clsx';
import { ITextCardProps } from './types';

function TextCard({ className, content, title }: ITextCardProps) {
  const decorationClassName = 'before:bg-primary before:h-full before:absolute before:w-1 before:rounded-sm before:left-0';
  return (
    <div className={clsx('flex flex-col justify-center px-8 sm:px-12 pt-4 relative gap-4', decorationClassName, className)}>
      <Text variation="h4">{title}</Text>
      <Text variation="p" className="max-w-sm opacity-70">{content}</Text>
    </div>
  );
}

TextCard.defaultProps = {
  className: '',
};

export default TextCard;
