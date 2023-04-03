import { ColorMode, useColorMode } from "native-base";
import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const makeStyles =
  <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(
    styles: T | ((colorMode: ColorMode, props: V) => T)
  ) =>
  (props: V = {} as any): T => {
    const { colorMode } = useColorMode();

    return useMemo(() => {
      const css =
        typeof styles === "function" ? styles(colorMode, props) : styles;
      return StyleSheet.create(css);
    }, [props, colorMode]);
  };
