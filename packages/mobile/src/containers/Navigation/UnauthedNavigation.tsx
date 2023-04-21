import {MobileRoutes} from '@laundry-app/shared/config/routes';
import {
  LoginContainer,
  OnboardingContainer,
  RegistrationContainer,
} from '@mobile/containers';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';

export type UnauthedStackParamList = {
  [MobileRoutes.Onboarding]: undefined;
  [MobileRoutes.Login]: undefined;
  [MobileRoutes.Registration]: undefined;
};

export const UnauthedStack =
  createNativeStackNavigator<UnauthedStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const options: NativeStackNavigationOptions = {
  presentation: 'modal',
};

const UnauthedNavigation: React.FC = () => {
  return (
    <UnauthedStack.Navigator screenOptions={screenOptions}>
      <UnauthedStack.Screen
        name={MobileRoutes.Onboarding}
        component={OnboardingContainer}
      />
      <UnauthedStack.Screen
        name={MobileRoutes.Login}
        options={options}
        component={LoginContainer}
      />
      <UnauthedStack.Screen
        name={MobileRoutes.Registration}
        options={options}
        component={RegistrationContainer}
      />
    </UnauthedStack.Navigator>
  );
};

export default UnauthedNavigation;
