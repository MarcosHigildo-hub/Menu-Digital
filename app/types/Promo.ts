import { StaticImageData } from "next/image";
export interface Promo {
  src: string | StaticImageData;
  alt: string;
  discount: string;
  name: string;
  price: string;
}