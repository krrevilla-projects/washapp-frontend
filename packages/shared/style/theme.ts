import { extendTheme } from "native-base";
import { fonts } from "./typography";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  fontConfig: {
    Inria: {
      100: {
        normal: fonts.InriaSansLight,
        italic: fonts.InriaSansLightItalic,
      },
      200: {
        normal: fonts.InriaSansLight,
        italic: fonts.InriaSansLightItalic,
      },
      300: {
        normal: fonts.InriaSansLight,
        italic: fonts.InriaSansLightItalic,
      },
      400: {
        normal: fonts.InriaSansRegular,
      },
      500: {
        normal: fonts.InriaSansRegular,
      },
      600: {
        normal: fonts.InriaSansBold,
        italic: fonts.InriaSansBoldItalic,
      },
    },
  },
  fonts: {
    heading: "Inria",
    body: "Inria",
    mono: "Inria",
  },
});

export default theme;
