interface IColors {
  primary: string;
  secondary: string;
  success: string;
  successSecondary: string;
  yellow: string;
  yellowSecondary: string;
  danger: string;
  white: string;
  whiteSecondary: string;
  gray: string;
  font: string;
}

interface IMedia {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

interface ISizes {
  header: { height: number };
  container: { width: number };
  footer: { height: number };
  modal: { width: number };
}

interface IDurations {
  ms300: number;
}

interface IOrder {
  header: number;
  modal: number;
}

export interface ITheme {
  colors: IColors;
  media: IMedia;
  sizes: ISizes;
  durations: IDurations;
  order: IOrder;
}
