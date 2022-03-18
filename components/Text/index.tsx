/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';

import { variationConfig } from './constants';
import { getParsedChildren } from './utils';
import { ITextProps } from './types';

function Text({
  children, className, isMarkdown, variation, ...props
}: ITextProps) {
  const {
    component: TextComponent,
    defaultClassNames,
  } = variationConfig[variation!];
  const parsedChildren = isMarkdown
    ? getParsedChildren({ children: children as string })
    : children;

  return (
    <TextComponent {...props} className={clsx(defaultClassNames, className)}>
      {parsedChildren}
    </TextComponent>
  );
}

Text.defaultProps = {
  className: '',
  variation: 'span',
};

export default Text;
