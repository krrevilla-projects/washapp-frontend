import {colors, spacing, typography} from '@laundry-app/shared/style';

export const useDetailStyles = () => ({
  rootContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  totalValue: {
    ...typography.header2,
    color: colors.dark,
  },
  totalLabel: {
    ...typography.bodyMedium,
    color: colors.dark_2,
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
    color: colors.dark,
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
});

export const useDetailHeaderStyles = () => ({
  container: {
    backgroundColor: colors.white,
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
    color: colors.dark,
  },
  backIcon: {
    color: colors.dark,
  },
});

// export const useDetailStyles = makeStyles(theme => ({
//   rootContainer: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: theme.mode === 'light' ? colors.white : colors.dark,
//   },
//   totalValue: {
//     ...typography.header2,
//     color: theme.mode === 'light' ? colors.dark : colors.white,
//   },
//   totalLabel: {
//     ...typography.bodyMedium,
//     color: theme.mode === 'light' ? colors.dark_2 : colors.white,
//     marginTop: spacing.Light,
//   },
//   dateContainer: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//   },
//   statusContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'flex-end',
//   },
//   itemsLabel: {
//     ...typography.header4,
//     color: theme.mode === 'light' ? colors.dark : colors.white,
//   },
//   dataTable: {
//     marginTop: spacing.Light,
//   },
//   buttonStyle: {
//     backgroundColor: colors.red,
//   },
//   buttonContainerStyle: {
//     marginTop: spacing.Light,
//   },
//   boldLabel: {
//     fontWeight: 'bold',
//   },
//   listItem: {
//     paddingVertical: 8,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   nameContainer: {
//     flex: 2,
//   },
//   quantityContainer: {
//     alignItems: 'flex-end',
//     flex: 1,
//   },
//   totalItemPriceContainer: {
//     alignItems: 'flex-end',
//     flex: 1,
//   },
//   totalLabelContainer: {
//     flex: 1,
//   },
// }));

// export const useDetailHeaderStyles = makeStyles(theme => ({
//   container: {
//     backgroundColor: theme.mode === 'light' ? colors.white : colors.dark,
//     paddingTop: spacing.Thin,
//     paddingBottom: spacing.Thin,
//     shadowColor: colors.dark,
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,

//     elevation: 7,

//     paddingHorizontal: spacing.Light,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerLabel: {
//     ...typography.header4,
//     paddingHorizontal: spacing.Light,
//     color: theme.mode === 'light' ? colors.dark : colors.white,
//   },
//   backIcon: {
//     color: theme.mode === 'light' ? colors.dark : colors.white,
//   },
// }));
