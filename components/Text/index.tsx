/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';

import { variationConfig } from './constants';
import { ITextProps } from './types';

function Text({
  children, className, variation, ...props
}: ITextProps) {
  const {
    component: TextComponent,
    defaultClassNames,
  } = variationConfig[variation!];

  return (
    <TextComponent {...props} className={clsx(defaultClassNames, className)}>
      {children}
    </TextComponent>
  );
}

Text.defaultProps = {
  className: '',
  variation: 'span',
};

export default Text;
