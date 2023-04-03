import 'react-native-url-polyfill/auto';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientContainer, useUserStore} from '@laundry-app/shared';
import React, {useEffect} from 'react';
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthedNavigation, UnauthedNavigation} from './containers/Navigation';
import {genericStorage, StorageKeys} from './utils/localStorage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import Drawer from './containers/Drawer';
import StorybookUIRoot from '../.storybook';
import {useDevtool} from './hooks/devtool';
import {NativeBaseProvider} from 'native-base';
import theme from '@laundry-app/shared/style/theme';

if (__DEV__) {
  initializeMMKVFlipper({default: genericStorage});
}

const LaundryApp: React.FC = () => {
  const showStorybook = useDevtool();

  const {setAccessToken, isAuthed} = useUserStore(state => {
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
              <NavigationContainer>
                {isAuthed ? <AuthedNavigation /> : <UnauthedNavigation />}
              </NavigationContainer>
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
