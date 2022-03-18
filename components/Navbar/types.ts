import { TNavigationItem } from 'types/INavigation';

export interface INavbarConfig {
  navigation: TNavigationItem[];
}

export interface INavbarProps {
  className?: string;
  config: INavbarConfig
}

export interface INavbarVariantProps extends INavbarProps {
  isCollapsed: boolean;
}
