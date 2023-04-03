import {colors} from '@laundry-app/shared/style';
import {borderRadius, spacing} from '@laundry-app/shared/style/numbers';
import {makeStyles} from '@laundry-app/shared/utils/makeStyle';

const iconSize = 40;

export const useLaundryCardStyle = makeStyles(colorMode => ({
  container: {
    height: 75,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colorMode === 'light' ? colors.white : colors.dark,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: spacing.Light,
  },
  date: {
    fontWeight: 'bold',
    color: colorMode === 'light' ? colors.dark : colors.white,
  },
  total: {
    color: colorMode === 'light' ? colors.dark : colors.white,
  },
}));

export const useLaundryCardIconStyle = makeStyles(colorMode => ({
  iconContainer: {
    height: iconSize,
    width: iconSize,
    borderRadius: borderRadius.small,
    backgroundColor: colorMode === 'light' ? colors.dark : colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: colorMode === 'light' ? colors.white : colors.dark,
  },
}));
