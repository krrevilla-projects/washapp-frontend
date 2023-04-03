import {colors, spacing, typography} from '@laundry-app/shared/style';
import {makeStyles} from '@laundry-app/shared/utils/makeStyle';

export const useDetailStyles = makeStyles(colorMode => ({
  rootContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colorMode === 'light' ? colors.white : colors.dark,
  },
  totalValue: {
    ...typography.header2,
    color: colorMode === 'light' ? colors.dark : colors.white,
  },
  totalLabel: {
    ...typography.bodyMedium,
    color: colorMode === 'light' ? colors.dark_2 : colors.white,
    marginTop: spacing.Light,
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  statusContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  itemsLabel: {
    ...typography.header4,
    color: colorMode === 'light' ? colors.dark : colors.white,
  },
  dataTable: {
    marginTop: spacing.Light,
  },
  buttonStyle: {
    backgroundColor: colors.red,
  },
  buttonContainerStyle: {
    marginTop: spacing.Light,
  },
  boldLabel: {
    fontWeight: 'bold',
  },
  listItem: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    flex: 2,
  },
  quantityContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  totalItemPriceContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  totalLabelContainer: {
    flex: 1,
  },
}));

export const useDetailHeaderStyles = makeStyles(colorMode => ({
  container: {
    backgroundColor: colorMode === 'light' ? colors.white : colors.dark,
    paddingTop: spacing.Thin,
    paddingBottom: spacing.Thin,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    elevation: 7,

    paddingHorizontal: spacing.Light,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLabel: {
    ...typography.header4,
    paddingHorizontal: spacing.Light,
    color: colorMode === 'light' ? colors.dark : colors.white,
  },
  backIcon: {
    color: colorMode === 'light' ? colors.dark : colors.white,
  },
}));
