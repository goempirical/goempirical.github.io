import { TIcons } from '@components/Icons/types';
import { ReactNode } from 'react';

export interface ITextIconProps {
  className?: string;
  content: string;
  icon?: TIcons;
  renderIcon?: () => ReactNode;
  title: string;
}
