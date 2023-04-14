import 'react-native-url-polyfill/auto';

import {QueryClientContainer, useUserStore} from '@laundry-app/shared';
import theme from '@laundry-app/shared/style/theme';
import {NativeBaseProvider} from 'native-base';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import StorybookUIRoot from '../.ondevice/Storybook';
import Drawer from './containers/Drawer';
import Navigation from './containers/Navigation';
import {useDevtool} from './hooks/devtool';
import {genericStorage, StorageKeys} from './utils/localStorage';

if (__DEV__) {
  initializeMMKVFlipper({default: genericStorage});
}

const LaundryApp: React.FC = () => {
  const showStorybook = useDevtool();

  const {setAccessToken} = useUserStore(state => {
    return {
      setAccessToken: state.setAccessToken,
      isAuthed: state.isAuthed,
    };
  });

  useEffect(() => {
    const accessToken = genericStorage.getString(StorageKeys.accessToken);

    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [setAccessToken]);

  if (showStorybook) {
    return (
      <NativeBaseProvider theme={theme}>
        <StorybookUIRoot />
      </NativeBaseProvider>
    );
  }

  return (
    <QueryClientContainer>
      <NativeBaseProvider theme={theme}>
        <GestureHandlerRootView style={styles.gestureHandler}>
          <SafeAreaProvider>
            <Drawer>
              <Navigation />
            </Drawer>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </NativeBaseProvider>
    </QueryClientContainer>
  );
};

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
});

export default LaundryApp;
