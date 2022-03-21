import clsx from 'clsx';

import { ISpecialHighlightProps } from './types';

function SpecialHighlight({ className, text }: ISpecialHighlightProps) {
  const bgColors = ['bg-primary', 'bg-brand-yellow', 'bg-brand-red'];
  const textParts = text.split('\n');

  return (
    <div className={clsx('flex flex-col w-full items-start', className)}>
      {textParts.map((textPart, index) => (
        <div key={textPart} className="flex flex-col relative items-start w-auto -mt-4">
          {/* eslint-disable-next-line max-len */}
          <div className={`block absolute h-2/6 bottom-1/6 left-0 w-full ${bgColors[index]}`} />
          <span className="font-display uppercase font-bold lg:text-9xl text-8xl relative opacity-20 w-auto">
            {textPart}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SpecialHighlight;
