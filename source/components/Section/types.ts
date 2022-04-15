import { ReactNode } from 'react';

export interface ISectionProps {
  className?: string;
  classNames?: {
    innerContainer?: string;
    title?: string;
  };
  children: ReactNode;
  title?: string;
}
