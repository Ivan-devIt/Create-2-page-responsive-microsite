import { generateMedia } from "styled-media-query";
import { baseTheme } from "../styles/theme";

const mediaQueries = Object.entries(baseTheme.media).reduce(
  (res: any, el: any) => ({ ...res, [el[0]]: `${el[1]}px` }),
  {}
);

export const media = generateMedia(mediaQueries);
