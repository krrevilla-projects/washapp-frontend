// import {colors, hexAlpha, typography} from '@laundry-app/shared/style';
import {extendTheme} from 'native-base';
// import {StyleSheet} from 'react-native';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
});

// const themeStyles = StyleSheet.create({
//   text: typography.bodyMedium,
//   inputRootContainerStyle: {
//     paddingHorizontal: 0,
//   },
//   inputLabelStyle: {
//     ...typography.header4,
//     marginBottom: 4,
//   },
//   inputContainerStyle: {
//     borderBottomWidth: 0,
//     backgroundColor: colors.light,
//     borderRadius: 8,
//   },
//   inputStyle: {
//     ...typography.bodyMedium,
//     paddingHorizontal: 8,
//   },
//   badgeContainerStyle: {
//     height: 24,
//     paddingHorizontal: 4,
//     backgroundColor: `${colors.secondary_blue}${hexAlpha[50]}`,
//   },
//   badgeTextStyle: {
//     color: colors.white,
//     textTransform: 'capitalize',
//   },
//   buttonStyle: {
//     backgroundColor: colors.green_3,
//   },
//   buttonTitleStyle: {
//     ...typography.header5,
//     color: colors.white,
//   },
// });

export default theme;
