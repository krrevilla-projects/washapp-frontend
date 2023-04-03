import {
  colors,
  fontFamily,
  spacing,
  typography,
} from '@laundry-app/shared/style';
import {StyleSheet} from 'react-native';

export const useDashboardStyle = () => ({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  historyLabel: {
    ...typography.displayTitle,
    paddingHorizontal: spacing.Light,
    paddingVertical: spacing.Thin,
  },
  contentContainer: {
    paddingHorizontal: spacing.Light,
  },
});

export const useDashboardHeaderStyle = () => ({
  safeArea: {
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
  },
  container: {
    paddingHorizontal: spacing.Light,
    paddingBottom: spacing.Thin,
    flexDirection: 'row',
  },
  headerLabelContainer: {
    flex: 1,
  },
  headerLabel: {
    ...typography.header4,
    fontFamily: fontFamily.body,
    color: colors.dark,
  },
  basketIconContainer: {
    marginRight: spacing.Light,
  },
  basketIcon: {
    color: colors.dark,
  },
  name: {
    ...typography.header4,
    color: colors.dark,
  },
});

// export const useDashboardStyle = makeStyles(theme => ({
//   rootContainer: {
//     flex: 1,
//     backgroundColor: theme.mode === 'light' ? colors.white : colors.dark,
//   },
//   historyLabel: {
//     ...typography.displayTitle,
//     paddingHorizontal: spacing.Light,
//     paddingVertical: spacing.Thin,
//   },
//   contentContainer: {
//     paddingHorizontal: spacing.Light,
//   },
// }));

// export const useDashboardHeaderStyle = makeStyles(theme => ({
//   safeArea: {
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
//   },
//   container: {
//     paddingHorizontal: spacing.Light,
//     paddingBottom: spacing.Thin,
//     flexDirection: 'row',
//   },
//   headerLabelContainer: {
//     flex: 1,
//   },
//   headerLabel: {
//     ...typography.header4,
//     fontFamily: fontFamily.body,
//     color: theme.mode === 'light' ? colors.dark : colors.white,
//   },
//   basketIconContainer: {
//     marginRight: spacing.Light,
//   },
//   basketIcon: {
//     color: theme.mode === 'light' ? colors.dark : colors.white,
//   },
//   name: {
//     ...typography.header4,
//     color: theme.mode === 'light' ? colors.dark : colors.white,
//   },
// }));

export const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  emptyLabel: typography.header2,
});
