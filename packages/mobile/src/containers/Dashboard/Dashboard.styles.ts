import {
  colors,
  fontFamily,
  spacing,
  typography,
} from '@laundry-app/shared/style';
import {makeStyles} from '@laundry-app/shared/utils/makeStyle';
import {StyleSheet} from 'react-native';

export const useDashboardStyle = makeStyles(colorMode => ({
  rootContainer: {
    flex: 1,
    backgroundColor: colorMode === 'light' ? colors.white : colors.dark,
  },
  historyLabel: {
    ...typography.displayTitle,
    paddingHorizontal: spacing.Light,
    paddingVertical: spacing.Thin,
  },
  contentContainer: {
    paddingHorizontal: spacing.Light,
  },
}));

export const useDashboardHeaderStyle = makeStyles(colorMode => ({
  safeArea: {
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
    color: colorMode === 'light' ? colors.dark : colors.white,
  },
  basketIconContainer: {
    marginRight: spacing.Light,
  },
  basketIcon: {
    color: colorMode === 'light' ? colors.dark : colors.white,
  },
  name: {
    ...typography.header4,
    color: colorMode === 'light' ? colors.dark : colors.white,
  },
}));

export const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  emptyLabel: typography.header2,
});
