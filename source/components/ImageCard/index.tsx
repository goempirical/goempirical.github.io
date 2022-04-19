import clsx from 'clsx';
import Text from '@components/Text';

import { IImageCardProps } from './types';

function ImageCard({
  className,
  image,
  content,
  title,
}: IImageCardProps) {
  return (
    <div className={clsx('flex flex-col items-center', className)}>
      <div className="flex items-center justify-center text-primary border-primary rounded-full h-60 w-60">
        <img src={image} alt={title} className="clip-circle" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Text variation="h4" className="text-center">{title}</Text>
        <Text variation="p" className="opacity-70 text-center max-w-u360">{content}</Text>
      </div>
    </div>
  );
}

export default ImageCard;
