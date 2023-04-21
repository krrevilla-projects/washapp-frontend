import { LaundryJobResponse } from "@laundry-app/shared/openapi";
import { WebRoutes } from "@laundry-app/shared/config/routes";
import { DashboardContainer, DetailsContainer } from "@web/containers";
import { LinkingOptions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

export type AuthedStackParamList = {
  [WebRoutes.Dashboard]: undefined;
  [WebRoutes.Details]: { id: number; preData?: LaundryJobResponse };
};

export const linkingOptions: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ["http://localhost:5173/"],
  config: {
    screens: {
      [WebRoutes.Dashboard]: "dashboard",
      [WebRoutes.Details]: "details",
    },
  },
};

export const AuthedStack = createStackNavigator<AuthedStackParamList>();

const AuthedNavigation: React.FC = () => {
  return (
    <AuthedStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthedStack.Screen
        name={WebRoutes.Dashboard}
        component={DashboardContainer}
      />
      <AuthedStack.Screen
        name={WebRoutes.Details}
        component={DetailsContainer}
      />
    </AuthedStack.Navigator>
  );
};

export default AuthedNavigation;
