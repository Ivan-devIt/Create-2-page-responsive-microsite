import { ITheme } from "../types";

export const baseTheme: ITheme = {
  colors: {
    primary: "#7986cb",
    secondary: "#2b2b2b",
    success: "#4caf50",
    successSecondary: "#1caf70",
    yellow: "#FFBA00",
    yellowSecondary: "#FFBA80",
    danger: "#f44336",
    white: "#E5E4E8",
    whiteSecondary: "#fff",
    gray: "#808080",
    font: "#19191B",
  },

  // in px
  media: {
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1366,
    xxl: 1600,
    xxxl: 1920,
  },

  // in px
  sizes: {
    header: { height: 50 },
    container: { width: 1600 },
    footer: { height: 50 },
    modal: { width: 540 },
  },

  // in ms
  durations: {
    ms300: 300,
  },

  // z-index
  order: {
    header: 50,
    modal: 100,
  },
};
