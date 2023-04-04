import routes from '@mobile/config/routes';
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
  [routes.Onboarding]: undefined;
  [routes.Login]: undefined;
  [routes.Registration]: undefined;
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
        name={routes.Onboarding}
        component={OnboardingContainer}
      />
      <UnauthedStack.Screen
        name={routes.Login}
        options={options}
        component={LoginContainer}
      />
      <UnauthedStack.Screen
        name={routes.Registration}
        options={options}
        component={RegistrationContainer}
      />
    </UnauthedStack.Navigator>
  );
};

export default UnauthedNavigation;
