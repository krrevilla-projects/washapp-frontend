import {useUserStore} from '@laundry-app/shared';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import AuthedNavigation from './AuthedNavigation';
import UnauthedNavigation from './UnauthedNavigation';

export type {AuthedStackParamList} from './AuthedNavigation';
export type {UnauthedStackParamList} from './UnauthedNavigation';

const Navigation = () => {
  const isAuthed = useUserStore(state => state.isAuthed);

  return (
    <NavigationContainer>
      {isAuthed ? <AuthedNavigation /> : <UnauthedNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
