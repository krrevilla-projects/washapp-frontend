import {MobileRoutes} from '@laundry-app/shared/config/routes';
import {LaundryJobResponse} from '@laundry-app/shared/openapi';
import {
  DashboardContainer,
  DashboardHeader,
  DetailsContainer,
  DetailsHeader,
} from '@mobile/containers';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import React from 'react';

export type AuthedStackParamList = {
  [MobileRoutes.Dashboard]: undefined;
  [MobileRoutes.Details]: {id: number; preData?: LaundryJobResponse};
};

export const AuthedStack = createNativeStackNavigator<AuthedStackParamList>();

const dashboardHeader = () => <DashboardHeader />;

const detailsHeader = (props: NativeStackHeaderProps) => (
  <DetailsHeader {...props} />
);

const AuthedNavigation: React.FC = () => {
  return (
    <AuthedStack.Navigator>
      <AuthedStack.Screen
        name={MobileRoutes.Dashboard}
        options={{header: dashboardHeader}}
        component={DashboardContainer}
      />
      <AuthedStack.Screen
        name={MobileRoutes.Details}
        options={{header: detailsHeader}}
        component={DetailsContainer}
      />
    </AuthedStack.Navigator>
  );
};

export default AuthedNavigation;
