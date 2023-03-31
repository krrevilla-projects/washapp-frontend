import {colors, hexAlpha, typography} from '@laundry-app/shared/style';
import {createTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

const themeStyles = StyleSheet.create({
  text: typography.bodyMedium,
  inputRootContainerStyle: {
    paddingHorizontal: 0,
  },
  inputLabelStyle: {
    ...typography.header4,
    marginBottom: 4,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.light,
    borderRadius: 8,
  },
  inputStyle: {
    ...typography.bodyMedium,
    paddingHorizontal: 8,
  },
  badgeContainerStyle: {
    height: 24,
    paddingHorizontal: 4,
    backgroundColor: `${colors.secondary_blue}${hexAlpha[50]}`,
  },
  badgeTextStyle: {
    color: colors.white,
    textTransform: 'capitalize',
  },
  buttonStyle: {
    backgroundColor: colors.green_3,
  },
  buttonTitleStyle: {
    ...typography.header5,
    color: colors.white,
  },
});

const theme = createTheme({
  mode: 'light',
  components: {
    Text: {
      style: themeStyles.text,
    },
    Input: {
      labelStyle: themeStyles.inputLabelStyle,
      inputStyle: themeStyles.inputStyle,
      inputContainerStyle: themeStyles.inputContainerStyle,
      containerStyle: themeStyles.inputRootContainerStyle,
      renderErrorMessage: false,
    },
    Badge: {
      badgeStyle: themeStyles.badgeContainerStyle,
      textStyle: themeStyles.badgeTextStyle,
    },
    Button: {
      buttonStyle: themeStyles.buttonStyle,
      titleStyle: themeStyles.buttonTitleStyle,
      radius: 8,
    },
    Icon: {
      type: 'material',
      color: colors.dark,
    },
  },
});

export default theme;
