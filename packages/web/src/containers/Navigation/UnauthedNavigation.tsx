import { WebRoutes } from "@laundry-app/shared/config/routes";
import { LoginContainer, RegistrationContainer } from "@web/containers";
import { LinkingOptions } from "@react-navigation/native";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";

export type UnauthedStackParamList = {
  [WebRoutes.Login]: undefined;
  [WebRoutes.Registration]: undefined;
};

export const linkingOptions: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ["http://localhost:5173/"],
  config: {
    screens: {
      [WebRoutes.Login]: "login",
      [WebRoutes.Registration]: "Registration",
    },
  },
};

export const UnauthedStack = createStackNavigator<UnauthedStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const UnauthedNavigation: React.FC = () => {
  return (
    <UnauthedStack.Navigator screenOptions={screenOptions}>
      <UnauthedStack.Screen name={WebRoutes.Login} component={LoginContainer} />
      <UnauthedStack.Screen
        name={WebRoutes.Registration}
        component={RegistrationContainer}
      />
    </UnauthedStack.Navigator>
  );
};

export default UnauthedNavigation;
