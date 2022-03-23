/* eslint-disable no-unused-vars */
import { ComponentType } from 'react';

export type TIcons = 'Bridge' | 'Globe' | 'Handshake' | 'Star' | 'Translate' | 'Chevron';

export interface IIcon {
  className?: string;
}

export type TIconList = {
  [key in TIcons]: ComponentType<IIcon>;
}
