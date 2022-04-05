import { Children } from 'react';
import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';

import { Icons } from '@components/Icons/constants';

import { ISliderProps } from './types';

function Slider({ className, children }: ISliderProps) {
  const [carouselRef, carouselApi] = useEmblaCarousel({ loop: true });

  const handlePrev = () => {
    carouselApi?.scrollPrev();
  };

  const handleNext = () => {
    carouselApi?.scrollNext();
  };

  return (
    <div className={clsx('relative flex items-center w-full overflow-hidden', className)} ref={carouselRef}>
      <div className="flex w-full">
        {Children.map(children, (child) => (
          <div className="flex items-center justify-center flex-grow-0 flex-shrink-0 basis-full relative">
            {child}
          </div>
        ))}
      </div>
      <div className="flex w-full absolute justify-between md:-translate-y-10 bottom-0 md:bottom-auto px-4">
        <button type="button" onClick={handlePrev} className="flex items-center justify-center rounded-full border border-primary h-10 w-10 text-primary">
          <Icons.Chevron className="rotate-180" />
        </button>
        <button type="button" onClick={handleNext} className="flex items-center justify-center rounded-full border border-primary h-10 w-10 text-primary">
          <Icons.Chevron />
        </button>
      </div>
    </div>
  );
}

export default Slider;
