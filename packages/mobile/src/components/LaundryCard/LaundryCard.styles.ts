import {colors} from '@laundry-app/shared/style';
import {borderRadius, spacing} from '@laundry-app/shared/style/numbers';
import {makeStyles} from '@rneui/themed';

const iconSize = 40;

export const useLaundryCardStyle = makeStyles(theme => ({
  container: {
    height: 75,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.mode === 'light' ? colors.white : colors.dark,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: spacing.Light,
  },
  date: {
    fontWeight: 'bold',
    color: theme.mode === 'light' ? colors.dark : colors.white,
  },
  total: {
    color: theme.mode === 'light' ? colors.dark : colors.white,
  },
}));

export const useLaundryCardIconStyle = makeStyles(theme => ({
  iconContainer: {
    height: iconSize,
    width: iconSize,
    borderRadius: borderRadius.small,
    backgroundColor: theme.mode === 'light' ? colors.dark : colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: theme.mode === 'light' ? colors.white : colors.dark,
  },
}));
