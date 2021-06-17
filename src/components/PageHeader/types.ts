import { ElementType } from 'react';

export interface IPageHeader {
  icon?: ElementType;
  title?: string;
  buttonTitle?: string;
  buttonAction?: () => void;
}
