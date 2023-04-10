import {LaundryJobStatus} from '@laundry-app/shared/openapi';
import {colors, hexAlpha} from '@laundry-app/shared/style';
import {makeStyles} from '@laundry-app/shared/utils/makeStyle';
import {ColorMode} from 'native-base';

export const getBackgroundColor = (
  status: LaundryJobStatus,
  colorMode: ColorMode,
) => {
  if (colorMode === 'light') {
    switch (status) {
      case LaundryJobStatus.Cancelled:
        return `${colors.red}${hexAlpha[50]}`;
      case LaundryJobStatus.Paid:
      case LaundryJobStatus.Finished:
        return `${colors.green_1}${hexAlpha[50]}`;
      default:
        return `${colors.blue_1}${hexAlpha[50]}`;
    }
  } else {
    return colors.gray_6;
  }
};

export const getTextColor = (
  status: LaundryJobStatus,
  colorMode: ColorMode,
) => {
  if (colorMode === 'light') {
    return colors.white;
  } else {
    switch (status) {
      case LaundryJobStatus.Cancelled:
        return colors.red;
      case LaundryJobStatus.Paid:
      case LaundryJobStatus.Finished:
        return colors.green_1;
      default:
        return colors.blue_1;
    }
  }
};

export const useStatusStyle = makeStyles(
  (colorMode, status: LaundryJobStatus) => ({
    containerStyle: {
      height: 24,
      paddingHorizontal: 4,
      backgroundColor: getBackgroundColor(status, colorMode),
    },
    textStyle: {
      color: getTextColor(status, colorMode),
      textTransform: 'capitalize',
    },
  }),
);
