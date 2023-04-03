import {colors, spacing, typography} from '@laundry-app/shared';
import {makeStyles} from '@laundry-app/shared/utils/makeStyle';

export const useDrawerContentStyles = makeStyles(colorMode => ({
  container: {
    flex: 1,
    padding: spacing.Light,
    justifyContent: 'center',
    backgroundColor: colorMode === 'light' ? colors.white : colors.dark,
  },
  section: {
    marginVertical: spacing.Thin,
  },
  themeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...typography.header5,
    color: colorMode === 'light' ? colors.dark : colors.white,
  },
  buttonContainerStyle: {
    marginTop: spacing.Thin,
  },
  buttonStyle: {
    backgroundColor: colors.red,
  },
}));
