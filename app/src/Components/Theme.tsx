import {createText, createBox, createTheme, useTheme as useReTheme} from '@shopify/restyle'
import {ImageStyle, TextStyle, ViewStyle} from "react-native";

const palette = {
  background:       "#1D3461",
  backgroundLight:  "#1F487E",
  primary:          "#376996",
  highlight:        "#6290C8",
  grey:             "#829CBC",
  white:            '#FFFFFF',
  lightGrey:        "#F4F0EF",
  lightBlue:        "#BFEAF5",
  darkRed:          "#FF0058",
  pink:             "#FF87A2",
  lightPink:        "#F1E0FF",
  lighterPink:      "#FFE8E9",
  orange:           "#FE5E33",
  yellow:           "#FFC641",

  transparent: "transparent",
};


export const theme = createTheme({
  colors: {
    ...palette,
  },
  spacing: {
    s: 8,
    sm: 12,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: { },
  borderRadii: {
    none: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Regular",
      color: "lightGrey",
    },
    menu: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Bold",
      color: "lightGrey",
    }
  }
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
}