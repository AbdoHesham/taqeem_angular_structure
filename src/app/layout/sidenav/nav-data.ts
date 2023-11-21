export enum MenuNavFunction {
  AddProvider,
}
export default class CustomMenuItem {
  routerLink?: string;
  label?: string;
  Iconsrc?: string;
  icon?: string;
  selected?: boolean;
  active?: boolean;
  Permission?: string;
  items?: CustomMenuItem[];
  link?: string;
}
export const navbarData: CustomMenuItem[] = [
];
