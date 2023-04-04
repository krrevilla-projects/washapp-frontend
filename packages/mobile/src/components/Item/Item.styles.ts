import {colors, spacing, typography} from '@laundry-app/shared/style';
import {borderRadius} from '@laundry-app/shared/style/numbers';
import {makeStyles} from '@laundry-app/shared/utils/makeStyle';

export const useItemStyle = makeStyles(() => ({
  listItem: {
    marginTop: spacing.Thin,
    padding: spacing.Light,
    backgroundColor: colors.gray_6,
    borderRadius: borderRadius.regular,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: borderRadius.regular,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
  },
  nameContainer: {
    flex: 2,
    paddingHorizontal: spacing.Light,
    justifyContent: 'center',
  },
  name: typography.header5,
  quantity: {
    ...typography.subtext,
    color: colors.dark_2,
  },
  quantityContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  totalItemPriceContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
  totalPrice: {
    ...typography.header5,
    fontWeight: 'bold',
  },
}));
