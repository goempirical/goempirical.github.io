import { ReactNode } from 'react';
import clsx from 'clsx';

import { TTextVariations, variationConfig } from './constants';

export interface ITextProps {
  children: ReactNode;
  className?: string;
  variation?: TTextVariations;
}

function Text({ children, className, variation }: ITextProps) {
  const {
    component: TextComponent,
    defaultClassNames,
  } = variationConfig[variation!];

  return (
    <TextComponent className={clsx(className, defaultClassNames)}>
      {children}
    </TextComponent>
  );
}

Text.defaultProps = {
  className: '',
  variation: 'span',
};

export default Text;
