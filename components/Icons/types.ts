/* eslint-disable no-unused-vars */
import { ComponentType } from 'react';

export type TIcons = 'Bridge' | 'Globe' | 'Handshake' | 'Star' | 'Translate';

export interface IIcon {
  className?: string;
}

export type TIconList = {
  [key in TIcons]: ComponentType<IIcon>;
}
