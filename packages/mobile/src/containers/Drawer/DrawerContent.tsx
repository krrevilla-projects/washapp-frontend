import {
  AuthState,
  DrawerState,
  useDrawer,
  useUserStore,
} from '@laundry-app/shared';
import {Divider, Button, Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {genericStorage, StorageKeys} from '../../utils/localStorage';
import {useDrawerContentStyles} from './DrawerContent.styles';

const mapUserStore = (state: AuthState) => {
  return state.isLoggedOutSuccessful;
};

const mapDrawerStore = (state: DrawerState) => {
  return state.onClose;
};

const DrawerContent = () => {
  const styles = useDrawerContentStyles();
  const isLoggedOutSuccessful = useUserStore(mapUserStore);
  const onClose = useDrawer(mapDrawerStore);

  const onLogout = () => {
    genericStorage.delete(StorageKeys.accessToken);
    isLoggedOutSuccessful();
    onClose();
  };

  // const onSwitchTheme = () => {
  //   mode === 'light' ? setMode('dark') : setMode('light');
  // };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar
        barStyle={mode === 'light' ? 'dark-content' : 'light-content'}
      /> */}
      <View style={styles.section}>
        <View style={styles.themeSection}>
          <Text style={styles.title}>Dark Mode</Text>
          {/* <Switch value={true} onValueChange={onSwitchTheme} /> */}
        </View>
      </View>
      <Divider thickness={0.5} />
      <View style={styles.section}>
        <Button onPress={onLogout}>Logout</Button>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(DrawerContent);
