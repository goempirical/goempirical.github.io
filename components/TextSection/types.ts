import { ReactNode } from 'react';

export interface ITextSectionProps {
  className?: string;
  content: string;
  highlightComponent?: ReactNode;
  highlight?: string;
  title?: string;
}
