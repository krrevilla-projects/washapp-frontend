import React from 'react';
import theme from '@laundry-app/shared/style/theme';
import {NativeBaseProvider} from 'native-base';

export const withNativeBase = (Story: React.FC) => {
  return (
    <NativeBaseProvider theme={theme}>
      <Story />
    </NativeBaseProvider>
  );
};
