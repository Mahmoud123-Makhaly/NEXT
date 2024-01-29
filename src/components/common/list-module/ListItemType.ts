import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IListItem {
  imgSrc: string | StaticImport;
  imgAlt: string;
  text: string;
  design?: string;
}
