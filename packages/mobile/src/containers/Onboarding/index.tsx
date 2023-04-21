import {MobileRoutes} from '@laundry-app/shared/config/routes';
import type {UnauthedStackParamList} from '@mobile/containers';
import {generateTestId} from '@mobile/utils/helpers';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text} from 'native-base';
import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './Onboarding.styles';

type Props = NativeStackScreenProps<
  UnauthedStackParamList,
  MobileRoutes.Onboarding
>;

const OnboardingContainer: React.FC<Props> = ({navigation}) => {
  const onLogin = () => {
    navigation.navigate(MobileRoutes.Login);
  };

  const onRegister = () => {
    navigation.navigate(MobileRoutes.Registration);
  };

  return (
    <SafeAreaView
      {...generateTestId('OnboardingContainer')}
      edges={['top']}
      style={styles.rootContainer}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          resizeMode="cover"
          resizeMethod="resize"
          source={require('../../assets/images/onboarding.png')}
        />
      </View>
      <SafeAreaView style={styles.footer}>
        <Button {...generateTestId('OnboardingLogin')} onPress={onLogin}>
          Login
        </Button>
        <Pressable
          {...generateTestId('OnboardingRegister')}
          onPress={onRegister}>
          <Text style={styles.createAccount}>Create Account</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default OnboardingContainer;
