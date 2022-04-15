import { TNavigationItem } from '@interfaces/INavigation';

export interface INavbarConfig {
  navigation: TNavigationItem[];
  themeToggleButton: {
    // eslint-disable-next-line no-unused-vars
    getTitle: (theme: string) => string,
  }
}

export interface INavbarProps {
  className?: string;
  config: INavbarConfig
}

export interface INavbarVariantProps extends INavbarProps {
  isCollapsed: boolean;
}
