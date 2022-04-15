export type TNavigationItem = {
  title: string;
  to: string;
  external?: boolean;
  items?: TNavigationItem[];
}
