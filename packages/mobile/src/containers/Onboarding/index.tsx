import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Pressable, View} from 'react-native';
import styles from './Onboarding.styles';
import Routes from '../../config/routes';
import {UnauthedStackParamList} from '../Navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text} from 'native-base';

type Props = NativeStackScreenProps<UnauthedStackParamList, Routes.Onboarding>;

const OnboardingContainer: React.FC<Props> = ({navigation}) => {
  const onLogin = () => {
    navigation.navigate(Routes.Login);
  };

  const onRegister = () => {
    navigation.navigate(Routes.Registration);
  };

  return (
    <SafeAreaView edges={['top']} style={styles.rootContainer}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          resizeMode="cover"
          resizeMethod="resize"
          source={require('../../assets/images/onboarding.png')}
        />
      </View>
      <SafeAreaView style={styles.footer}>
        <Button onPress={onLogin}>Login</Button>
        <Pressable onPress={onRegister}>
          <Text style={styles.createAccount}>Create Account</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default OnboardingContainer;
