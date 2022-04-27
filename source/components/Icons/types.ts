/* eslint-disable no-unused-vars */
import { ComponentType } from 'react';

export type TIcons = 'Bridge'
| 'Chess'
| 'Dollar'
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
| 'Twitter'
| 'Clutch';
export interface IIcon {
  className?: string;
}

export type TIconList = {
  [key in TIcons]: ComponentType<IIcon>;
}
