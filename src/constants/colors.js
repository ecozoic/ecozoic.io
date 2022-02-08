const lightGoldenrodYellow = '#F3F9D2';
const teaGreen = '#CBEAA6';
const yellowGreenCrayola = '#C0D684';
const darkPurple = '#3D0B37';
const oldMauve = '#63264A';

const darkGray = '#121212';
const white = '#f8f8f6';
const transparentWhite = 'rgba(255, 255, 255, 0.87)';
const black = '#000000';
const gray = '#727275';
const moreTransparentWhite = 'rgba(255, 255, 255, 0.6)';

export const COLORS = {
  background: {
    dark: darkGray,
    light: white,
  },
  text: {
    dark: transparentWhite,
    light: black,
  },
  'text-secondary': {
    dark: moreTransparentWhite,
    light: gray,
  },
  'link-text': {
    dark: yellowGreenCrayola,
    light: oldMauve,
  },
  'link-text-hover': {
    dark: teaGreen,
    light: yellowGreenCrayola,
  },
  'header-text': {
    dark: transparentWhite,
    light: transparentWhite,
  },
  'header-link-text': {
    dark: transparentWhite,
    light: transparentWhite,
  },
  'header-link-text-hover': {
    dark: teaGreen,
    light: teaGreen,
  },
  'footer-text': {
    dark: transparentWhite,
    light: transparentWhite,
  },
  'footer-link-text': {
    dark: yellowGreenCrayola,
    light: yellowGreenCrayola,
  },
  'footer-link-text-hover': {
    dark: teaGreen,
    light: teaGreen,
  },
  primary: {
    dark: darkPurple,
    light: darkPurple,
  },
  secondary: {
    dark: teaGreen,
    light: teaGreen,
  },
  tertiary: {
    dark: yellowGreenCrayola,
    light: darkPurple,
  },
  'article-preview-border': {
    dark: moreTransparentWhite,
    light: gray,
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
