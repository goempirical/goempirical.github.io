/* eslint-disable no-unused-vars */
import { ComponentType } from 'react';

export type TIcons = 'Bridge'
| 'Chess'
| 'Chevron'
| 'Community'
| 'Facebook'
| 'Gears'
| 'Globe'
| 'Handshake'
| 'Jigsaw'
| 'LinkedIn'
| 'Moon'
| 'Plan'
| 'Star'
| 'Sun'
| 'Support'
| 'Translate'
| 'Twitter';
export interface IIcon {
  className?: string;
}

export type TIconList = {
  [key in TIcons]: ComponentType<IIcon>;
}
