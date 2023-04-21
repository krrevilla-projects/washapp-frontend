import {useUserLaundryJob} from '@laundry-app/shared';
import {MobileRoutes} from '@laundry-app/shared/config/routes';
import {LaundryJobResponse} from '@laundry-app/shared/openapi';
import LaundryCard from '@mobile/components/LaundryCard';
import type {AuthedStackParamList} from '@mobile/containers';
import {generateTestId} from '@mobile/utils/helpers';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from 'native-base';
import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import Animated, {FadeInRight} from 'react-native-reanimated';

import {useDashboardStyle} from './Dashboard.styles';
import DashboardEmpty from './DashboardEmpty';

type Props = NativeStackScreenProps<
  AuthedStackParamList,
  MobileRoutes.Dashboard
>;

const keyExtractor = (item: LaundryJobResponse) => `${item.id}`;

const DashboardContainer: React.FC<Props> = ({navigation: {navigate}}) => {
  const styles = useDashboardStyle();
  const {data, isFetching, refetch} = useUserLaundryJob();

  const onLaundryCardPress = useCallback(
    (laundryJobData: LaundryJobResponse) => {
      navigate(MobileRoutes.Details, {
        id: laundryJobData.id,
        preData: laundryJobData,
      });
    },
    [navigate],
  );

  const renderItem = useCallback(
    (item: ListRenderItemInfo<LaundryJobResponse>) => {
      const animation = FadeInRight.delay(item.index * 50).duration(500);

      return (
        <Animated.View entering={animation}>
          <LaundryCard data={item.item} onPress={onLaundryCardPress} />
        </Animated.View>
      );
    },
    [onLaundryCardPress],
  );

  if (data?.length === 0 && !isFetching) {
    return <DashboardEmpty />;
  }

  return (
    <View
      {...generateTestId('DashboardContainer')}
      style={styles.rootContainer}>
      <Text style={styles.historyLabel}>Transaction History</Text>
      <FlatList<LaundryJobResponse>
        refreshing={false}
        onRefresh={refetch}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default DashboardContainer;
