import { TTextVariationConfig } from './types';

export const variationConfig: TTextVariationConfig = {
  h1: {
    component: 'h1',
    defaultClassNames: 'text-h1 text-display font-semibold',
  },
  h2: {
    component: 'h2',
    defaultClassNames: 'text-h2 text-display font-semibold',
  },
  h3: {
    component: 'h3',
    defaultClassNames: 'text-h3 text-display text-primary',
  },
  h4: {
    component: 'h4',
    defaultClassNames: 'text-h4 text-display font-semibold',
  },
  highlighted: {
    component: 'p',
    defaultClassNames: 'text-highlighted text-display uppercase font-bold opacity-20',
  },
  p: {
    component: 'p',
    defaultClassNames: 'text-lg',
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
