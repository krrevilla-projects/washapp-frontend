import { extendTheme } from "native-base";
import { fonts } from "./typography";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
});

export default theme;
