import { ElementType, ReactNode } from 'react';

export type TTextVariations = 'h1' | 'h2' | 'h3' | 'h4' | 'highlighted' | 'p' | 'quote' | 'span' | 'a';

export type TTextVariationConfig = {
  // eslint-disable-next-line no-unused-vars
  [key in TTextVariations]: {
    component: ElementType;
    defaultClassNames: string;
  }
}

export interface ITextProps {
  children: ReactNode;
  className?: string;
  isMarkdown?: boolean;
  variation?: TTextVariations;
}
