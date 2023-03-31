import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import OnboardingContainer from '@mobile/containers/Onboarding';
import LoginContainer from '@mobile/containers/Login';
import RegistrationContainer from '@mobile/containers/Registration';
import routes from '@mobile/config/routes';

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
