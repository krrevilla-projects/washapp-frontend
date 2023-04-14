import { Platform, StyleSheet } from "react-native";
import { colors } from ".";

export const fonts = {
  InriaSansBold: "InriaSans-Bold",
  InriaSansBoldItalic: "InriaSans-BoldItalic",
  InriaSansItalic: "InriaSans-Italic",
  InriaSansLight: "InriaSans-Light",
  InriaSansLightItalic: "InriaSans-LightItalic",
  InriaSansRegular: "InriaSans-Regular",
};

export const fontSizes = {
  heading1: 34,
  heading2: 24,
  heading3: 20,
  heading4: 16,
  heading5: 14,

  bodyLarge: 17,
  bodyMedium: 15,
  bodySmall: 13,

  subtext: 11,
  displayTitle: 17,
  link: 12,
};

export const fontFamily = {
  heading: fonts.InriaSansBold,
  body: fonts.InriaSansRegular,
  subtext: fonts.InriaSansRegular,
  displayTitle: fonts.InriaSansBold,
  link: fonts.InriaSansLight,
};

const typographyWeb = StyleSheet.create({
  header1: {
    fontFamily: "Inria Sans",
    fontSize: fontSizes.heading1,
    fontWeight: "700",
    color: colors.dark,
  },
  header2: {
    fontFamily: "Inria Sans",
    fontSize: fontSizes.heading2,
    fontWeight: "700",
    color: colors.dark,
  },
  header3: {
    fontFamily: "Inria Sans",
    fontSize: fontSizes.heading3,
    fontWeight: "700",
    color: colors.dark,
  },
  header4: {
    fontFamily: "Inria Sans",
    fontSize: fontSizes.heading4,
    fontWeight: "700",
    color: colors.dark,
  },
  header5: {
    fontFamily: "Inria Sans",
    fontSize: fontSizes.heading5,
    fontWeight: "700",
    color: colors.dark,
  },

  bodyLarge: {
    fontFamily: "Inria Sans",
    fontSize: fontSizes.bodyLarge,
    fontWeight: "500",
    color: colors.dark,
  },
  bodyMedium: {
    fontFamily: "Inria Sans",
    fontSize: fontSizes.bodyMedium,
    fontWeight: "500",
    color: colors.dark,
  },
  bodySmall: {
    fontFamily: "Inria Sans",
    fontSize: fontSizes.bodySmall,
    fontWeight: "500",
    color: colors.dark,
  },

  subtext: {
    fontFamily: "Inria Sans",
    fontSize: fontSizes.subtext,
    fontWeight: "300",
    color: colors.dark,
  },
  displayTitle: {
    fontFamily: "Inria Sans",
    fontSize: fontSizes.displayTitle,
    fontWeight: "700",
    color: colors.dark,
  },
  link: {
    fontFamily: "Inria Sans",
    fontSize: fontSizes.link,
    fontWeight: "300",
    color: colors.secondary_pink,
  },
});

const typographyMobile = StyleSheet.create({
  header1: {
    fontFamily: fontFamily.heading,
    fontSize: fontSizes.heading1,
    color: colors.dark,
  },
  header2: {
    fontFamily: fontFamily.heading,
    fontSize: fontSizes.heading2,
    color: colors.dark,
  },
  header3: {
    fontFamily: fontFamily.heading,
    fontSize: fontSizes.heading3,
    color: colors.dark,
  },
  header4: {
    fontFamily: fontFamily.heading,
    fontSize: fontSizes.heading4,
    color: colors.dark,
  },
  header5: {
    fontFamily: fontFamily.heading,
    fontSize: fontSizes.heading5,
    color: colors.dark,
  },

  bodyLarge: {
    fontFamily: fontFamily.body,
    fontSize: fontSizes.bodyLarge,
    color: colors.dark,
  },
  bodyMedium: {
    fontFamily: fontFamily.body,
    fontSize: fontSizes.bodyMedium,
    color: colors.dark,
  },
  bodySmall: {
    fontFamily: fontFamily.body,
    fontSize: fontSizes.bodySmall,
    color: colors.dark,
  },

  subtext: {
    fontFamily: fontFamily.subtext,
    fontSize: fontSizes.subtext,
    color: colors.dark,
  },
  displayTitle: {
    fontFamily: fontFamily.displayTitle,
    fontSize: fontSizes.displayTitle,
    color: colors.dark,
  },
  link: {
    fontFamily: fontFamily.link,
    fontSize: fontSizes.link,
    color: colors.secondary_pink,
  },
});

export const typography =
  Platform.OS === "web" ? typographyWeb : typographyMobile;
