/* eslint-disable no-unused-vars */
import { ComponentType } from 'react';

export type TIcons = 'Bridge'
| 'Chess'
| 'Chevron'
| 'Community'
| 'Gears'
| 'Globe'
| 'Handshake'
| 'Jigsaw'
| 'Plan'
| 'Star'
| 'Support'
| 'Translate';

export interface IIcon {
  className?: string;
}

export type TIconList = {
  [key in TIcons]: ComponentType<IIcon>;
}
