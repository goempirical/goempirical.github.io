import clsx from 'clsx';

import { ISpecialHighlightProps } from './types';

function SpecialHighlight({
  bgColors,
  className,
  classNames,
  text,
}: ISpecialHighlightProps) {
  const textParts = text.split('\n');

  return (
    <div className={clsx('flex flex-col w-full items-start', className)}>
      {textParts.map((textPart, index) => (
        <div key={textPart} className="flex flex-col relative items-start w-auto -mt-4">
          {/* eslint-disable-next-line max-len */}
          <div className={`block absolute h-2/6 bottom-1/6 left-0 w-full ${bgColors?.[index]}`} />
          <span className={clsx('font-display uppercase font-bold relative opacity-20 w-auto whitespace-nowrap', classNames?.textPart || 'lg:text-9xl text-8xl')}>
            {textPart}
          </span>
        </div>
      ))}
    </div>
  );
}

SpecialHighlight.defaultProps = {
  bgColors: ['bg-primary', 'bg-brand-yellow', 'bg-brand-red'],
};

export default SpecialHighlight;
