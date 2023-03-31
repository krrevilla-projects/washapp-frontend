import { colors } from ".";

export const fonts = {
  DosisBold: "Dosis-Bold",
  DosisExtraBold: "Dosis-ExtraBold",
  DosisExtraLight: "Dosis-ExtraLight",
  DosisLight: "Dosis-Light",
  DosisMedium: "Dosis-Medium",
  DosisRegular: "Dosis-Regular",
  DosisSemiBold: "Dosis-SemiBold",
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

export const typography = {
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
};
