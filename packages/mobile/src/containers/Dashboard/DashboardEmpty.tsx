import React from 'react';
import {Text} from 'native-base';
import {View} from 'react-native';
import {emptyStyles} from './Dashboard.styles';

const DashboardEmpty = () => {
  return (
    <View style={emptyStyles.container}>
      <Text style={emptyStyles.emptyLabel}>No Transactions Yet</Text>
    </View>
  );
};

export default React.memo(DashboardEmpty);
