import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import routes from '@mobile/config/routes';

import DashboardContainer from '../Dashboard';
import DetailsContainer from '../Details';
import {LaundryJobResponse} from '@laundry-app/shared/openapi';
import DashboardHeader from '../Dashboard/DashboardHeader';
import DetailsHeader from '../Details/DetailsHeader';

export type AuthedStackParamList = {
  [routes.Dashboard]: undefined;
  [routes.Form]: undefined;
  [routes.Details]: {id: number; preData?: LaundryJobResponse};
};

export const AuthedStack = createNativeStackNavigator<AuthedStackParamList>();

const dashboardHeader = (props: NativeStackHeaderProps) => (
  <DashboardHeader {...props} />
);

const detailsHeader = (props: NativeStackHeaderProps) => (
  <DetailsHeader {...props} />
);

const AuthedNavigation: React.FC = () => {
  return (
    <AuthedStack.Navigator>
      <AuthedStack.Screen
        name={routes.Dashboard}
        options={{header: dashboardHeader}}
        component={DashboardContainer}
      />
      <AuthedStack.Screen
        name={routes.Details}
        options={{header: detailsHeader}}
        component={DetailsContainer}
      />
    </AuthedStack.Navigator>
  );
};

export default AuthedNavigation;
