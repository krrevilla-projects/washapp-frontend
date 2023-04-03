// import {LaundryJobStatus} from '@laundry-app/shared/openapi';
// import {colors, hexAlpha} from '@laundry-app/shared/style';

// const getBackgroundColor = (status: LaundryJobStatus, themeMode: ThemeMode) => {
//   if (themeMode === 'light') {
//     switch (status) {
//       case LaundryJobStatus.Cancelled:
//         return `${colors.red}${hexAlpha[50]}`;
//       case LaundryJobStatus.Paid:
//       case LaundryJobStatus.Finished:
//         return `${colors.green_1}${hexAlpha[50]}`;
//       default:
//         return `${colors.blue_1}${hexAlpha[50]}`;
//     }
//   } else {
//     return colors.gray_6;
//   }
// };

// const getTextColor = (status: LaundryJobStatus, themeMode: ThemeMode) => {
//   if (themeMode === 'light') {
//     return colors.white;
//   } else {
//     switch (status) {
//       case LaundryJobStatus.Cancelled:
//         return colors.red;
//       case LaundryJobStatus.Paid:
//       case LaundryJobStatus.Finished:
//         return colors.green_1;
//       default:
//         return colors.blue_1;
//     }
//   }
// };

// export const useStatusStyle = makeStyles((theme, status: LaundryJobStatus) => ({
//   containerStyle: {
//     height: 24,
//     paddingHorizontal: 4,
//     backgroundColor: getBackgroundColor(status, theme.mode),
//   },
//   textStyle: {
//     color: getTextColor(status, theme.mode),
//     textTransform: 'capitalize',
//   },
// }));
