import {colors, spacing, typography} from '@laundry-app/shared';
import {makeStyles} from '@rneui/themed';

export const useDrawerContentStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: spacing.Light,
    justifyContent: 'center',
    backgroundColor: theme.mode === 'light' ? colors.white : colors.dark,
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
    color: theme.mode === 'light' ? colors.dark : colors.white,
  },
  buttonContainerStyle: {
    marginTop: spacing.Thin,
  },
  buttonStyle: {
    backgroundColor: colors.red,
  },
}));
