import { generateMedia } from "styled-media-query";
import { baseTheme } from "../styles/theme";

interface IMedia {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

const mediaQueries = Object.entries(baseTheme.media).reduce(
  (res: IMedia | {}, el: string[]) => ({ ...res, [el[0]]: `${el[1]}px` }),
  {}
);

console.log("mediaQueries===", mediaQueries);

export const media = generateMedia(mediaQueries);
