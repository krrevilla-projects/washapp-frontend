import {
  AuthState,
  useLaundryJobCreate,
  useUserStore,
} from '@laundry-app/shared';
import {colors} from '@laundry-app/shared/style';
import {generateTestId} from '@mobile/utils/helpers';
import {Text} from 'native-base';
import React from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDashboardHeaderStyle} from './Dashboard.styles';

const mapUserStore = (state: AuthState) => {
  return state.user ? `, ${state.user.firstName}` : '';
};

const DashboardHeader = () => {
  const styles = useDashboardHeaderStyle();
  const userName = useUserStore(mapUserStore);
  const {onCreateLaundryJob, isLoading} = useLaundryJobCreate();

  const onRequestNewLaundry = () => {
    onCreateLaundryJob();
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerLabelContainer}>
          <Text style={styles.headerLabel}>
            Welcome<Text style={styles.name}>{userName}</Text>
          </Text>
        </View>
        <TouchableOpacity
          accessibilityRole="button"
          disabled={isLoading}
          onPress={onRequestNewLaundry}
          style={styles.basketIconContainer}>
          {isLoading ? (
            <ActivityIndicator
              {...generateTestId('DashboardHeaderLoading')}
              color={colors.dark}
            />
          ) : (
            <Icon
              {...generateTestId('DashboardHeaderBasketIcon')}
              size={20}
              name="basket-plus-outline"
              style={styles.basketIcon}
            />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(DashboardHeader);
