import Text from '@components/Text';
import clsx from 'clsx';
import { IQuoteProps } from './types';

function Quote({ author, className, quote }: IQuoteProps) {
  return (
    <div className={clsx('flex flex-col px-5 gap-10', className)}>
      <Text variation="quote" className="text-center max-w-3xl">{quote}</Text>
      <div className="flex flex-col gap-1 items-center">
        <div className="h-[1px] w-32 bg-white bg-opacity-20 mb-4" />
        <Text variation="span" className="text-base text-center font-bold">{author.name}</Text>
        <Text variation="span" className="text-xs text-center">{author.company}</Text>
      </div>
    </div>
  );
}

export default Quote;
