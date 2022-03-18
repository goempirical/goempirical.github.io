import { TTextVariationConfig } from './types';

export const variationConfig: TTextVariationConfig = {
  h1: {
    component: 'h1',
    defaultClassNames: 'md:text-h1 font-display font-bold text-3xl',
  },
  h2: {
    component: 'h2',
    defaultClassNames: 'text-h2 font-display font-semibold',
  },
  h3: {
    component: 'h3',
    defaultClassNames: 'text-h3 font-display text-primary',
  },
  h4: {
    component: 'h4',
    defaultClassNames: 'text-h4 font-display font-semibold',
  },
  highlighted: {
    component: 'p',
    defaultClassNames: 'lg:text-highlighted text-h2 font-display uppercase font-bold opacity-20 whitespace-pre-line',
  },
  p: {
    component: 'p',
    defaultClassNames: 'text-p',
  },
  quote: {
    component: 'p',
    defaultClassNames: 'text-quote font-light italic',
  },
  span: {
    component: 'span',
    defaultClassNames: '',
  },
  a: {
    component: 'a',
    defaultClassNames: 'primary',
  },
};
