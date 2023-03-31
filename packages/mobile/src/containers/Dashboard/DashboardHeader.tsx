import {
  useUserStore,
  AuthState,
  useLaundryJobCreate,
} from '@laundry-app/shared';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Text, Icon} from '@rneui/themed';
import React from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDashboardHeaderStyle} from './Dashboard.styles';
import {colors} from '@laundry-app/shared/style';

const mapUserStore = (state: AuthState) => {
  return state.user ? `, ${state.user.firstName}` : '';
};

const DashboardHeader = ({}: NativeStackHeaderProps) => {
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
          disabled={isLoading}
          onPress={onRequestNewLaundry}
          style={styles.basketIconContainer}>
          {isLoading ? (
            <ActivityIndicator color={colors.dark} />
          ) : (
            <Icon
              size={20}
              name="basket-plus-outline"
              type="material-community"
              iconStyle={styles.basketIcon}
            />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(DashboardHeader);
