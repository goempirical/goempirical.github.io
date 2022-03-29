import { ReactNode } from 'react';

export interface IHeroProps {
  bgImage?: StaticImageData;
  className?: string;
  children?: ReactNode;
  title?: string;
}
