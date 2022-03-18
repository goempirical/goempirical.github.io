/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';

import { forwardRef } from 'react';
import { variationConfig } from './constants';
import { getParsedChildren } from './utils';
import { ITextProps } from './types';

const Text = forwardRef(
  ({
    children,
    className,
    isMarkdown,
    variation, ...props
  }: ITextProps, ref) => {
    const {
      component: TextComponent,
      defaultClassNames,
    } = variationConfig[variation!];
    const parsedChildren = isMarkdown
      ? getParsedChildren({ children: children as string })
      : children;

    return (
      <TextComponent {...props} className={clsx(defaultClassNames, className)} ref={variation === 'a' ? ref : null}>
        {parsedChildren}
      </TextComponent>
    );
  },
);

Text.defaultProps = {
  className: '',
  variation: 'span',
};

export default Text;
